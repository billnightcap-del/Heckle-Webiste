import { Component } from 'react';
import { mount, view } from '../shared/mount.jsx';
import template from './template.jsx';
import { track } from '../shared/analytics.js';
import './template.hover.css';

const CITIES = [
  ['new-york', 'New York', 'NY', ['East Village', 'Williamsburg', 'Astoria', 'Bushwick']],
  ['los-angeles', 'Los Angeles', 'CA', ['Silver Lake', 'West Hollywood', 'North Hollywood', 'Echo Park']],
  ['chicago', 'Chicago', 'IL', ['Wicker Park', 'Logan Square', 'Lakeview', 'Pilsen']],
  ['houston', 'Houston', 'TX', ['Montrose', 'The Heights', 'EaDo', 'Midtown']],
  ['phoenix', 'Phoenix', 'AZ', ['Roosevelt Row', 'Downtown', 'Tempe', 'Arcadia']],
  ['philadelphia', 'Philadelphia', 'PA', ['Fishtown', 'South Philly', 'Center City', 'Northern Liberties']],
  ['san-antonio', 'San Antonio', 'TX', ['Southtown', 'Pearl', 'Downtown', 'Alamo Heights']],
  ['san-diego', 'San Diego', 'CA', ['North Park', 'Pacific Beach', 'Gaslamp', 'Hillcrest']],
  ['dallas', 'Dallas', 'TX', ['Deep Ellum', 'Bishop Arts', 'Lower Greenville', 'Uptown']],
  ['austin', 'Austin', 'TX', ['East Austin', 'South Congress', 'Downtown', 'Hyde Park']],
  ['san-francisco', 'San Francisco', 'CA', ['Mission', 'North Beach', 'Haight', 'SoMa']],
  ['seattle', 'Seattle', 'WA', ['Capitol Hill', 'Ballard', 'Fremont', 'Georgetown']],
  ['denver', 'Denver', 'CO', ['RiNo', 'LoHi', 'Baker', 'Capitol Hill']],
  ['washington-dc', 'Washington', 'DC', ['U Street', 'Adams Morgan', 'H Street', 'Dupont Circle']],
  ['boston', 'Boston', 'MA', ['Somerville', 'Cambridge', 'Allston', 'South End']],
  ['nashville', 'Nashville', 'TN', ['East Nashville', 'The Gulch', 'Midtown', '12 South']],
  ['atlanta', 'Atlanta', 'GA', ['Little Five Points', 'Old Fourth Ward', 'East Atlanta', 'Midtown']],
  ['miami', 'Miami', 'FL', ['Wynwood', 'Little Havana', 'Brickell', 'Coconut Grove']],
  ['portland', 'Portland', 'OR', ['Alberta', 'Hawthorne', 'Pearl District', 'Mississippi']],
  ['las-vegas', 'Las Vegas', 'NV', ['Arts District', 'Fremont', 'The Strip', 'Chinatown']],
  ['minneapolis', 'Minneapolis', 'MN', ['Uptown', 'Northeast', 'Loring Park', 'Dinkytown']],
  ['new-orleans', 'New Orleans', 'LA', ['Marigny', 'Bywater', 'Mid-City', 'Uptown']],
  ['detroit', 'Detroit', 'MI', ['Corktown', 'Midtown', 'Eastern Market', 'Hamtramck']],
  ['charlotte', 'Charlotte', 'NC', ['NoDa', 'Plaza Midwood', 'South End', 'Uptown']],
  ['columbus', 'Columbus', 'OH', ['Short North', 'German Village', 'Clintonville', 'Franklinton']]
].map(([slug, name, state, hoods]) => ({ slug, name, state, hoods, label: `${name}, ${state}` }));
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ORDER = [1, 2, 3, 4, 5, 6, 0];
const SIGNUPS = ['List in person', 'Online sign-up', 'Bucket draw', 'Bringer'];
const KEY = 'heckle-open-mic-submissions', REP_KEY = 'heckle-open-mic-reports';
const FRESH = ['Any freshness', 'Source checked ≤ 14 days', 'Source checked ≤ 45 days', 'Hide reported closed'];
const DAYMS = 864e5;

// Only real listings are shown. Each one comes from public/open-mics.json and must carry the
// public post it came from (url, source) and the date that post was checked (checked: YYYY-MM-DD).
// Anything without a source is dropped, never filled in.
const isVerified = (m) => m && m.url && /^https?:\/\//.test(m.url) && m.source && /^\d{4}-\d{2}-\d{2}$/.test(m.checked || '') && m.city && Number.isInteger(m.day) && typeof m.time === 'number';
const fmtDate = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const fmt = (t) => { const h = Math.floor(t), m = Math.round((t - h) * 60), h12 = ((h + 11) % 12) + 1; return { short: `${h12}:${String(m).padStart(2, '0')}`, ampm: h >= 12 && h < 24 ? 'PM' : 'AM' }; };

class OpenMicsPage extends Component {
  state = { view: 'find', city: null, day: 'all', signup: 'All sign-ups', fresh: 'Any freshness', q: '', subs: [], reports: {}, live: null, formDays: [], dayError: false, last: null };
  saveReports(reports) { this.setState({ reports }); try { localStorage.setItem(REP_KEY, JSON.stringify(reports)); } catch {} }
  mark(id, kind) { const r = { ...this.state.reports }, cur = r[id] || {}; r[id] = kind === 'ok' ? { ...cur, ok: Date.now(), dead: false } : { ...cur, dead: !cur.dead }; this.saveReports(r); }

  componentDidMount() {
    this.readHash = () => this.setState({ view: location.hash === '#submit' ? 'submit' : 'find' });
    window.addEventListener('hashchange', this.readHash); this.readHash();
    try { this.setState({ subs: JSON.parse(localStorage.getItem(KEY) || '[]'), reports: JSON.parse(localStorage.getItem(REP_KEY) || '{}') }); } catch {}
    fetch('./open-mics.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)).then((j) => this.setState({ live: { updated: j && j.updated, mics: ((j && j.mics) || []).filter(isVerified) } })).catch(() => this.setState({ live: { mics: [] } }));
  }
  componentWillUnmount() { window.removeEventListener('hashchange', this.readHash); }
  saveSubs(subs) { this.setState({ subs }); try { localStorage.setItem(KEY, JSON.stringify(subs)); } catch {} }
  go(view, city) { history.replaceState(null, '', view === 'submit' ? '#submit' : '#find'); this.setState({ view, ...(city ? { city, day: 'all', q: '' } : {}) }); window.scrollTo({ top: 0 }); }

  renderVals() {
    const s = this.state, today = new Date().getDay();
    const base = (s.live ? s.live.mics : []).map((m, i) => ({ id: m.id || 'mic-' + i, hood: m.hood || '', signup: m.signup || 'See listing', setLen: m.setLen || 'Not listed', host: m.host || '', frequency: m.frequency || 'Not listed', ...m }));
    const subs = s.subs.map((m) => ({ ...m, source: 'your submission · not verified', isNew: true, unverified: true }));
    const ago = (m) => (m.checked ? Math.max(0, Math.floor((Date.now() - new Date(m.checked + 'T12:00:00')) / DAYMS)) : 999);
    const dead = (m) => !!(s.reports[m.id] && s.reports[m.id].dead);
    const counts = {}; base.forEach((m) => { counts[m.city] = (counts[m.city] || 0) + 1; });
    const cityObj = CITIES.find((c) => c.slug === s.city) || CITIES.find((c) => counts[c.slug]) || CITIES[0];
    const inCity = [...base, ...subs].filter((m) => m.city === cityObj.slug);
    const q = s.q.trim().toLowerCase();
    const filtered = inCity.filter((m) => (s.signup === 'All sign-ups' || m.signup === s.signup) &&
      (!q || `${m.name} ${m.venue} ${m.hood} ${m.host}`.toLowerCase().includes(q)) &&
      (s.day === 'all' || (s.day === 'tonight' ? m.day === today : m.day === Number(s.day))) &&
      (s.fresh === 'Any freshness' || (s.fresh === 'Hide reported closed' ? !dead(m) : !dead(m) && ago(m) <= (s.fresh.includes('14') ? 14 : 45))));
    const groups = ORDER.map((d) => {
      const rows = filtered.filter((m) => m.day === d).sort((a, b) => dead(a) - dead(b) || a.time - b.time).map((m) => {
        const f = fmt(m.time), free = /free/i.test(m.cost || ''), a = ago(m), isDead = dead(m), mine = !!(s.reports[m.id] && s.reports[m.id].ok);
        const tier = a <= 14 ? 0 : a <= 45 ? 1 : 2;
        return { ...m, timeShort: f.short, ampm: f.ampm, isNew: !!m.isNew, cost: m.cost || 'Cost not listed', hood: m.hood || cityObj.name,
          window: m.window || 'Sign-up details not listed in the source', isBringer: m.signup === 'Bringer' || !!m.bringer, bringerNote: m.bringer || 'bring guests',
          isDead, opacity: isDead ? 0.5 : 1,
          freshText: m.unverified ? 'Not verified' : `Source checked ${fmtDate(m.checked)}`,
          freshBg: tier === 0 ? '#ffd400' : 'transparent', freshFg: tier === 0 ? '#0a0a0a' : tier === 1 ? '#f5f5f2' : '#8a8a86', freshBd: tier === 0 ? '#ffd400' : tier === 1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)',
          confirm: () => this.mark(m.id, 'ok'), confirmedByMe: mine, confirmLabel: mine ? 'Thanks ✓' : 'Went, still running', confirmFg: mine ? '#ffd400' : '#f5f5f2', confirmBd: mine ? '#ffd400' : 'rgba(255,255,255,0.22)',
          report: () => this.mark(m.id, 'dead'), reportLabel: isDead ? 'Undo report' : 'Report closed',
          costFg: free ? '#ffd400' : '#f5f5f2', costBd: free ? '#ffd400' : 'rgba(255,255,255,0.22)', url: m.url || '#' };
      });
      const isToday = d === today;
      return { label: isToday ? `${DAYS_LONG[d]} · Tonight` : DAYS_LONG[d], rows, count: `${rows.length} mic${rows.length === 1 ? '' : 's'}`,
        color: isToday ? '#ffd400' : '#f5f5f2', rule: isToday ? '#ffd400' : '#f5f5f2' };
    }).filter((g) => g.rows.length);
    const chip = (key, label) => { const on = String(s.day) === String(key); return { label, bg: on ? '#ffd400' : 'transparent', fg: on ? '#0a0a0a' : '#f5f5f2', bd: on ? '#ffd400' : 'rgba(255,255,255,0.25)', onClick: () => this.setState({ day: key }) }; };
    const byCity = CITIES.map((c) => {
      const items = s.subs.filter((m) => m.city === c.slug).sort((a, b) => a.day - b.day || a.time - b.time);
      return { name: c.label, count: items.length, view: () => this.go('find', c.slug),
        items: items.map((m) => ({ ...m, when: `${DAYS[m.day]} ${fmt(m.time).short}${fmt(m.time).ampm.toLowerCase()}`, remove: () => this.saveSubs(s.subs.filter((x) => x.id !== m.id)) })) };
    }).filter((c) => c.count);
    const isFind = s.view === 'find';
    return {
      isFind, isSubmit: !isFind,
      tabFindBg: isFind ? '#ffd400' : 'transparent', tabFindFg: isFind ? '#0a0a0a' : '#f5f5f2',
      tabSubBg: !isFind ? '#ffd400' : 'transparent', tabSubFg: !isFind ? '#0a0a0a' : '#f5f5f2',
      goFind: (e) => { e.preventDefault(); this.go('find'); },
      goSubmit: (e) => { e.preventDefault(); this.go('submit'); },
      cities: CITIES.map((c) => ({ ...c, label: `${c.label} (${counts[c.slug] || 0})` })), city: cityObj.slug, cityName: cityObj.name,
      onCity: (e) => this.setState({ city: e.target.value }),
      q: s.q, onQ: (e) => this.setState({ q: e.target.value }),
      signup: s.signup, signupOpts: ['All sign-ups', ...SIGNUPS], onSignup: (e) => this.setState({ signup: e.target.value }),
      fresh: s.fresh, freshOpts: FRESH, onFresh: (e) => this.setState({ fresh: e.target.value }),
      dayChips: [chip('all', 'All week'), chip('tonight', 'Tonight'), ...ORDER.map((d) => chip(String(d), DAYS[d]))],
      tonightCount: inCity.filter((m) => m.day === today).length, weekCount: inCity.length,
      freeCount: inCity.filter((m) => /free/i.test(m.cost || '')).length,
      groups, noResults: !groups.length,
      emptyText: !s.live ? 'Loading listings…' : inCity.length ? `No verified mics match those filters in ${cityObj.name}.` : `No verified mics in ${cityObj.name} yet. Know one that’s posted publicly?`,
      dataNote: !s.live ? 'Loading listings…' : base.length ? `${base.length} verified listing${base.length === 1 ? '' : 's'} in ${Object.keys(counts).length} cit${Object.keys(counts).length === 1 ? 'y' : 'ies'}. Every one links to the public post it came from and shows when we last checked it. No sample or made-up listings.` : 'No verified listings yet. We only list a mic once we find it posted publicly by the venue or host.',
      dayToggles: ORDER.map((d) => { const on = s.formDays.includes(d); return { label: DAYS[d], pressed: on ? 'true' : 'false', bg: on ? '#ffd400' : 'transparent', fg: on ? '#0a0a0a' : '#f5f5f2', bd: on ? '#ffd400' : 'rgba(255,255,255,0.25)',
        onClick: () => this.setState((p) => ({ formDays: on ? p.formDays.filter((x) => x !== d) : [...p.formDays, d], dayError: false })) }; }),
      dayError: s.dayError,
      onSubmit: (e) => {
        e.preventDefault();
        if (!s.formDays.length) { this.setState({ dayError: true }); return; }
        const f = Object.fromEntries(new FormData(e.currentTarget));
        const [hh, mm] = (f.time || '20:00').split(':').map(Number);
        const stamp = Date.now();
        const entries = s.formDays.map((d) => ({ id: `sub-${stamp}-${d}`, city: f.city, name: f.name, venue: f.venue, hood: f.hood, address: f.address, day: d, time: hh + mm / 60,
          frequency: f.frequency, signup: f.bringer ? 'Bringer' : f.signup, setLen: f.setLen, cost: f.cost, host: f.host, url: f.url, window: f.window, bringer: f.bringer, submitted: new Date(stamp).toISOString() }));
        this.saveSubs([...s.subs, ...entries]);
        track('mic_submit', { city: f.city });
        e.currentTarget.reset();
        this.setState({ formDays: [], last: { name: f.name, city: f.city } });
      },
      justSubmitted: !!s.last, lastName: s.last?.name, lastCity: (CITIES.find((c) => c.slug === s.last?.city) || {}).name,
      viewLast: () => this.go('find', s.last.city),
      subsByCity: byCity, subTotal: `${s.subs.length} listing${s.subs.length === 1 ? '' : 's'}`, noSubs: !s.subs.length
    };
  }

  render() { return template(view(this)); }
}

mount(<OpenMicsPage />);
