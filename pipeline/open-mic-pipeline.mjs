// Heckle Open Mic pipeline — Node 18+.  Run from site/:  TM_API_KEY=xxx npm run mics
// Collects comedy open mics for 25 US cities from compliant sources, infers recurring schedules,
// and writes public/open-mics.json (the Open Mics page loads it automatically; falls back to sample data).
//
// Sources (all ToS-compliant):
//   1. Ticketmaster Discovery API  — keyword search per city (free key: developer.ticketmaster.com)
//   2. Venue allowlist            — venue pages publishing schema.org Event JSON-LD, or .ics calendar feeds
//   3. Submissions                — pipeline/submissions.json exported from the Submit-a-Mic form / your backend
// Not included: Instagram / Facebook scraping (prohibited by their terms). Use submissions, or the
// official Graph API for pages that grant you access.

import fs from 'node:fs/promises';

const SUBMISSIONS = new URL('./submissions.json', import.meta.url);
const OUTPUT = new URL('../public/open-mics.json', import.meta.url);

const UA = 'HeckleOpenMicBot/1.0 (+https://heckle.example/bot)';
const DELAY_MS = 1500;               // polite per-request delay
const KEYWORDS = /open[\s-]?mic|comedy (mic|open)|stand[\s-]?up (mic|open)|mic night/i;

export const CITIES = [
  ['new-york', 'New York', 'NY'], ['los-angeles', 'Los Angeles', 'CA'], ['chicago', 'Chicago', 'IL'],
  ['houston', 'Houston', 'TX'], ['phoenix', 'Phoenix', 'AZ'], ['philadelphia', 'Philadelphia', 'PA'],
  ['san-antonio', 'San Antonio', 'TX'], ['san-diego', 'San Diego', 'CA'], ['dallas', 'Dallas', 'TX'],
  ['austin', 'Austin', 'TX'], ['san-francisco', 'San Francisco', 'CA'], ['seattle', 'Seattle', 'WA'],
  ['denver', 'Denver', 'CO'], ['washington-dc', 'Washington', 'DC'], ['boston', 'Boston', 'MA'],
  ['nashville', 'Nashville', 'TN'], ['atlanta', 'Atlanta', 'GA'], ['miami', 'Miami', 'FL'],
  ['portland', 'Portland', 'OR'], ['las-vegas', 'Las Vegas', 'NV'], ['minneapolis', 'Minneapolis', 'MN'],
  ['new-orleans', 'New Orleans', 'LA'], ['detroit', 'Detroit', 'MI'], ['charlotte', 'Charlotte', 'NC'],
  ['columbus', 'Columbus', 'OH']
].map(([slug, name, state]) => ({ slug, name, state }));

// Add venues you have permission to crawl. type: 'jsonld' (event page) | 'ics' (calendar feed)
const VENUES = [
  // { city: 'chicago', venue: 'Example Comedy Club', url: 'https://example.com/calendar', type: 'jsonld' },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const robotsCache = new Map();
async function allowed(url) {
  const u = new URL(url);
  if (!robotsCache.has(u.origin)) {
    let rules = [];
    try {
      const txt = await (await fetch(u.origin + '/robots.txt', { headers: { 'User-Agent': UA } })).text();
      let applies = false;
      for (const line of txt.split('\n')) {
        const [k, ...rest] = line.split(':'); const v = rest.join(':').trim();
        if (/^user-agent$/i.test(k.trim())) applies = v === '*' || UA.toLowerCase().includes(v.toLowerCase());
        else if (applies && /^disallow$/i.test(k.trim()) && v) rules.push(v);
      }
    } catch { /* no robots = allowed */ }
    robotsCache.set(u.origin, rules);
  }
  return !robotsCache.get(u.origin).some((p) => u.pathname.startsWith(p));
}
async function get(url, as = 'text') {
  if (!(await allowed(url))) { console.warn('robots.txt disallows', url); return null; }
  await sleep(DELAY_MS);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) { console.warn(res.status, url); return null; }
  return as === 'json' ? res.json() : res.text();
}

// ---- Source 1: Ticketmaster Discovery API -------------------------------------------------
async function fromTicketmaster(city) {
  const key = process.env.TM_API_KEY; if (!key) return [];
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&keyword=open%20mic&classificationName=comedy&city=${encodeURIComponent(city.name)}&stateCode=${city.state}&size=100`;
  const res = await fetch(url); if (!res.ok) return [];
  const data = await res.json(); await sleep(250);
  return (data._embedded?.events || []).map((e) => ({
    city: city.slug, name: e.name, venue: e._embedded?.venues?.[0]?.name || '',
    address: e._embedded?.venues?.[0]?.address?.line1 || '',
    start: e.dates?.start?.dateTime || `${e.dates?.start?.localDate}T${e.dates?.start?.localTime || '20:00:00'}`,
    url: e.url, source: 'Ticketmaster'
  }));
}

// ---- Source 2a: schema.org JSON-LD on venue pages -----------------------------------------
async function fromJsonLd(v) {
  const html = await get(v.url); if (!html) return [];
  const out = [];
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let j; try { j = JSON.parse(m[1]); } catch { continue; }
    const items = [j, ...(j['@graph'] || [])].flat();
    for (const it of items) {
      const t = [].concat(it['@type'] || []);
      if (!t.some((x) => /Event/.test(x))) continue;
      out.push({ city: v.city, name: it.name, venue: it.location?.name || v.venue,
        address: it.location?.address?.streetAddress || '', start: it.startDate, url: it.url || v.url,
        cost: it.offers?.price === 0 || it.isAccessibleForFree ? 'Free' : it.offers?.price ? `$${it.offers.price}` : '',
        source: 'Venue site' });
    }
  }
  return out;
}

// ---- Source 2b: iCalendar feeds (reads RRULE directly when present) ------------------------
async function fromIcs(v) {
  const txt = await get(v.url); if (!txt) return [];
  return txt.replace(/\r?\n[ \t]/g, '').split('BEGIN:VEVENT').slice(1).map((b) => {
    const f = (k) => (b.match(new RegExp(`^${k}[^:]*:(.*)$`, 'm')) || [])[1]?.trim();
    const d = f('DTSTART') || '';
    const iso = d.replace(/^(\d{4})(\d{2})(\d{2})T?(\d{2})?(\d{2})?.*/, (_, y, mo, da, h = '20', mi = '00') => `${y}-${mo}-${da}T${h}:${mi}:00`);
    return { city: v.city, name: f('SUMMARY'), venue: v.venue, address: f('LOCATION') || '', start: iso,
      rrule: f('RRULE'), url: f('URL') || v.url, source: 'Calendar feed' };
  });
}

// ---- Normalize → recurring schedule ------------------------------------------------------
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function toSchedule(events) {
  const groups = new Map();
  for (const e of events) {
    if (!e.start || !KEYWORDS.test(`${e.name} ${e.venue}`)) continue;
    const d = new Date(e.start); if (isNaN(d)) continue;
    const time = d.getHours() + d.getMinutes() / 60;
    const k = `${e.city}|${(e.venue || e.name).toLowerCase().replace(/\W+/g, '')}|${d.getDay()}|${time}`;
    const g = groups.get(k) || { ...e, day: d.getDay(), time, dates: [] };
    g.dates.push(d.toISOString().slice(0, 10)); groups.set(k, g);
  }
  return [...groups.values()].map((g) => {
    const ds = [...new Set(g.dates)].sort();
    const gaps = ds.slice(1).map((x, i) => (new Date(x) - new Date(ds[i])) / 864e5);
    const avg = gaps.length ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
    const frequency = /FREQ=WEEKLY;INTERVAL=2/.test(g.rrule || '') ? 'Every other week'
      : /FREQ=WEEKLY/.test(g.rrule || '') ? 'Weekly' : /FREQ=MONTHLY/.test(g.rrule || '') ? 'Monthly'
      : !gaps.length ? 'One-off' : avg <= 8 ? 'Weekly' : avg <= 16 ? 'Every other week' : 'Monthly';
    return { city: g.city, name: g.name, venue: g.venue, address: g.address, day: g.day, dayName: DAYS[g.day],
      time: g.time, frequency, cost: g.cost || '', url: g.url, source: g.source, checked: new Date().toISOString().slice(0, 10), nextDates: ds.slice(0, 4) };
  });
}

async function main() {
  const raw = [];
  for (const c of CITIES) { raw.push(...await fromTicketmaster(c)); console.log('TM', c.name); }
  for (const v of VENUES) raw.push(...(v.type === 'ics' ? await fromIcs(v) : await fromJsonLd(v)));
  let subs = []; try { subs = JSON.parse(await fs.readFile(SUBMISSIONS, 'utf8')); } catch {}
  // The site shows only listings with a public source URL and a checked date; anything else is dropped there.
  const mics = [...toSchedule(raw), ...subs.filter((s) => s.url && s.source && s.checked)];
  await fs.writeFile(OUTPUT, JSON.stringify({ updated: new Date().toISOString(), cities: CITIES, mics }, null, 2));
  console.log(`Wrote ${mics.length} mics → public/open-mics.json`);
}
main();
