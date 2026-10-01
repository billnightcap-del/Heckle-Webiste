import { Component } from 'react';
import { mount, view } from '../shared/mount.jsx';
import template from './template.jsx';
import './template.hover.css';

const SEED = [
  { id: 'ha-ha-harvest-2026', name: 'Ha Ha Harvest Comedy Festival', city: 'Jersey City & Hoboken, NJ', start: '2026-10-02', end: '2026-10-04', formats: ['Stand-up', 'Indie shows'], headliners: [], site: 'https://www.thejokebook.org/submissions', submitUrl: 'https://www.thejokebook.org/submissions', subStatus: 'closed', source: 'https://www.thejokebook.org/submissions' },
  { id: 'mountain-fresh-2026', name: 'Mountain Fresh Comedy Festival', city: 'Summit County & Georgetown, CO', start: '2026-10-08', end: '2026-10-10', formats: ['Stand-up'], headliners: [], site: 'https://www.mfcomedy.com/', submitUrl: 'https://www.mfcomedy.com/', subCloses: '2026-06-30', source: 'https://www.mfcomedy.com/' },
  { id: 'atlantic-city-comedy-2026', name: 'Atlantic City Comedy Festival', city: 'Atlantic City, NJ', start: '2026-10-09', end: '2026-10-10', formats: ['Stand-up'], headliners: ['Sheryl Underwood', 'DeRay Davis', 'Bruce Bruce', 'Tommy Davidson', 'Lavell Crawford'], site: 'https://www.boardwalkhall.com/events/detail/accomedy-2026', submitUrl: '', subStatus: 'invite', source: 'https://www.boardwalkhall.com/events/detail/accomedy-2026' },
  { id: 'catskills-comedy-2026', name: 'Catskills Comedy Festival', city: 'Catskill, NY', start: '2026-10-16', end: '2026-10-18', formats: ['Stand-up', 'Improv', 'Alt', 'Workshops'], headliners: ['Ophira Eisenberg', 'Jocelyn Chia', 'Raanan Hershberg'], site: 'https://tccfest.org/', submitUrl: 'https://tccfest.org/', subStatus: 'unknown', source: 'https://tccfest.org/' },
  { id: 'santa-cruz-comedy-2026', name: 'Santa Cruz Comedy Festival', city: 'Santa Cruz, CA', start: '2026-10-01', end: '2026-10-31', dateTBA: true, formats: ['Stand-up', 'One day'], headliners: [], site: 'https://montereybayevents.com/event/santa-cruz-comedy-festival/', submitUrl: '', subStatus: 'unknown', source: 'https://montereybayevents.com/event/santa-cruz-comedy-festival/' },
  { id: 'laugh-after-dark-2026', name: 'Laugh After Dark ComedyFest', city: 'Las Vegas, NV', start: '2026-10-26', end: '2026-10-28', formats: ['Stand-up', 'Screenings', 'Tapings'], headliners: [], site: 'https://laughafterdarkcomedyfest.com/', submitUrl: 'https://laughafterdarkcomedyfest.com/submissions/', subCloses: '2026-06-30', source: 'https://laughafterdarkcomedyfest.com/submissions/' },
  { id: 'new-york-comedy-festival-2026', name: 'New York Comedy Festival', city: 'New York, NY', start: '2026-11-06', end: '2026-11-15', firstYear: 2004, formats: ['Stand-up', 'Podcasts', 'Film', 'Improv'], headliners: ['Marc Maron', 'Ilana Glazer', 'Ziwe', 'Sarah Sherman & Patti Harrison', 'Daniel Sloss'], site: 'https://nycomedyfestival.com/', submitUrl: 'https://nycomedyfestival.com/submissions/', subStatus: 'closed', source: 'https://variety.com/2026/tv/news/new-york-comedy-festival-2026-lineup-1236806652/' },
  { id: 'vail-comedy-festival', name: 'Vail Comedy Festival', city: 'Vail, CO', start: null, formats: ['Stand-up'], headliners: [], site: 'https://www.mfcomedy.com/', submitUrl: 'https://www.mfcomedy.com/', subOpens: '2026-11-01', source: 'https://www.mfcomedy.com/' }
];

const PROMPT = `You are a research assistant for Heckle, a comedy-culture publication. Today is ${new Date().toISOString().slice(0, 10)}.

GOAL
Find every comedy festival (stand-up, improv, sketch, storytelling, comedy film) that takes place between today and 2026-12-31, anywhere in the world, plus any comedy festival whose performer submissions are OPEN or OPENING between now and 2026-12-31 (even if the festival itself is in 2027).

WHERE TO LOOK (search all of these)
1. Aggregators: thejokebook.org/submissions, FilmFreeway (comedy), ComedyFinder.com, Chortle (UK), Australian comedy festival listings.
2. News: Variety, Deadline, Hollywood Reporter, Vulture, BroadwayWorld, Time Out, local alt-weeklies — "comedy festival" + October 2026 / November 2026 / December 2026.
3. City sweeps: "[city] comedy festival 2026" for the 40 largest US metros plus London, Edinburgh, Dublin, Toronto, Montreal, Vancouver, Melbourne, Sydney, Auckland.
4. Ticketing: Ticketmaster, Eventbrite, Songkick "comedy festival" in range.
5. Confirm every hit on the festival's OWN site. The official site wins.

RULES
- Only include a festival with a 2026 date found on a 2026 page or the official site. Never infer from past years.
- Month-only date: "dateTBA": true, "start" = 1st of that month.
- Submissions: exact open/close dates if published. Closed → "closed". Invitation only → "invite". Year-round → "rolling". Not found → "unknown". Never guess a deadline.
- "submitUrl" = the direct submission page/form, not the homepage.
- "site" = official homepage. "art" = absolute og:image or poster URL if found, else null.
- Exclude single-headliner tours billed as festivals.
- Cite a source URL for every entry.

OUTPUT — ONLY a JSON array, no prose:
[{"id":"kebab-name-2026","name":"","city":"City, ST","country":"US","start":"YYYY-MM-DD|null","end":"YYYY-MM-DD","dateTBA":false,"formats":[],"headliners":[],"site":"","submitUrl":"","subStatus":"open|closed|rolling|invite|unknown","subOpens":"YYYY-MM-DD|null","subCloses":"YYYY-MM-DD|null","fee":null,"firstYear":null,"paysComics":"yes|no|split|unknown","art":null,"source":""}]
- "firstYear": the festival's first edition year, only if stated on its site or in press. "paysComics": only if the festival publishes performer pay terms; otherwise "unknown". "fee": exact published fee text, else null.
Sort by start ascending; start:null entries last.`;

const IMP_KEY = 'heckle-festivals-imported-v1', ART_KEY = 'heckle-festival-art-v1';
const DAY = 864e5, MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parse = (s) => (s ? new Date(s + 'T12:00:00') : null);
const fmt = (d) => `${MON[d.getMonth()]} ${d.getDate()}`;
const days = (d, now) => Math.ceil((d - now) / DAY);
const slug = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u || '—'; } };
const CHK = (ok, label) => ({ label, fg: ok ? '#0a0a0a' : '#8a8a86', bg: ok ? '#ffd400' : 'transparent', bd: ok ? '#ffd400' : 'rgba(255,255,255,0.18)', ok });
function comicCheck(f, now) {
  const yrs = f.firstYear ? now.getFullYear() - f.firstYear + 1 : 0;
  const onSite = !!f.submitUrl && !!f.site && host(f.submitUrl) === host(f.site);
  const pay = { yes: 'Pays comics', split: 'Door split', no: 'Unpaid' }[f.paysComics];
  const list = [
    CHK(!!f.firstYear, f.firstYear ? `Est. ${f.firstYear} · ${yrs} yrs` : 'Track record not published'),
    CHK(!!f.fee, f.fee ? 'Fee: ' + f.fee : 'Fee not published'),
    CHK(!!pay, pay || 'Pay not published'),
    CHK(onSite, onSite ? 'Official submit page' : f.subStatus === 'invite' ? 'Invite only' : 'No submit page on site')
  ];
  const n = list.filter((c) => c.ok).length;
  return { checks: list, checkScore: n, checkColor: n >= 3 ? '#ffd400' : n === 2 ? '#f5f5f2' : '#8a8a86' };
}
const TONE = {
  hot: { bg: '#ffd400', fg: '#0a0a0a', border: '#ffd400' },
  open: { bg: 'transparent', fg: '#ffd400', border: '#ffd400' },
  soon: { bg: 'transparent', fg: '#f5f5f2', border: 'rgba(255,255,255,0.5)' },
  mute: { bg: 'transparent', fg: '#8a8a86', border: 'rgba(255,255,255,0.18)' }
};
function subStatus(f, now) {
  const o = parse(f.subOpens), c = parse(f.subCloses);
  const mk = (label, tone, open, rank, date) => ({ label, open, rank, date, ...TONE[tone] });
  if (f.subStatus === 'invite') return mk('Invite only', 'mute', false, 5);
  if (o && o > now) return mk('Opens ' + fmt(o), 'soon', false, 2, o);
  if (c) {
    const d = days(c, now);
    if (d < 0) return mk('Closed', 'mute', false, 4);
    if (d <= 14) return mk(`Closing · ${d}d left`, 'hot', true, 0, c);
    return mk('Open · closes ' + fmt(c), 'open', true, 1, c);
  }
  if (f.subStatus === 'closed') return mk('Closed', 'mute', false, 4);
  if (f.subStatus === 'open' || f.subStatus === 'rolling') return mk('Open · rolling', 'open', true, 1);
  return mk('Check site', 'mute', false, 3);
}
function dateText(f) {
  const a = parse(f.start), b = parse(f.end || f.start);
  if (!a) return 'Dates TBA';
  if (f.dateTBA) return `${MON[a.getMonth()]} 2026 · date TBA`;
  if (+a === +b) return fmt(a);
  return a.getMonth() === b.getMonth() ? `${fmt(a)}–${b.getDate()}` : `${fmt(a)} – ${fmt(b)}`;
}

class FestivalsPage extends Component {
  state = { month: 'all', openOnly: false, sort: 'date', imported: [], art: {}, json: '', msg: '', msgOk: true, copied: false };
  componentDidMount() {
    let imported = [], art = {};
    try { imported = JSON.parse(localStorage.getItem(IMP_KEY) || '[]'); } catch {}
    try { art = JSON.parse(localStorage.getItem(ART_KEY) || '{}'); } catch {}
    this.setState({ imported, art }, () => this.fetchArt());
  }
  all() {
    const map = new Map();
    [...SEED, ...this.state.imported].forEach((f) => map.set(f.id, { ...map.get(f.id), ...f }));
    return [...map.values()];
  }
  async fetchArt() {
    const todo = this.all().filter((f) => !f.art && f.site && !(f.site in this.state.art));
    const seen = new Set();
    for (const f of todo) {
      if (seen.has(f.site)) continue;
      seen.add(f.site);
      let url = '';
      try {
        const r = await fetch('https://api.microlink.io/?url=' + encodeURIComponent(f.site));
        const j = await r.json();
        url = j?.data?.image?.url || j?.data?.logo?.url || '';
      } catch {}
      const art = { ...this.state.art, [f.site]: url };
      this.setState({ art });
      try { localStorage.setItem(ART_KEY, JSON.stringify(art)); } catch {}
    }
  }
  importJson = () => {
    try {
      let data = JSON.parse(this.state.json.trim().replace(/^```(json)?|```$/g, ''));
      if (!Array.isArray(data)) data = data.festivals || [data];
      const clean = data.filter((f) => f && f.name && (f.start || f.subOpens || f.subCloses)).map((f) => ({ ...f, id: f.id || slug(f.name + '-2026'), formats: f.formats || [], headliners: f.headliners || [] }));
      if (!clean.length) throw new Error('No entries with a name and a date');
      const byId = new Map(this.state.imported.map((f) => [f.id, f]));
      clean.forEach((f) => byId.set(f.id, f));
      const imported = [...byId.values()];
      localStorage.setItem(IMP_KEY, JSON.stringify(imported));
      this.setState({ imported, json: '', msg: `Added ${clean.length} festival${clean.length > 1 ? 's' : ''}.`, msgOk: true }, () => this.fetchArt());
    } catch (e) { this.setState({ msg: "Couldn't read that: " + e.message, msgOk: false }); }
  };
  renderVals() {
    const s = this.state, now = new Date();
    const all = this.all().map((f) => {
      const st = subStatus(f, now), a = parse(f.start), b = parse(f.end || f.start);
      let phase = '', phaseColor = '#f5f5f2', past = false;
      if (a) {
        if (b && days(b, now) < 0 && !f.dateTBA) past = true;
        else if (a <= now) { phase = f.dateTBA ? 'This month' : 'Happening now'; phaseColor = '#ffd400'; }
        else { const d = days(a, now); phase = d === 1 ? 'Tomorrow' : `In ${d} days`; }
      }
      return { f, st, a, past, phase, phaseColor };
    });
    const live = all.filter((x) => x.a && !x.past);
    const openCount = all.filter((x) => x.st.open).length;
    const upcoming = live.filter((x) => x.a > now).sort((x, y) => x.a - y.a);
    let rows = live.filter((x) => (s.month === 'all' || x.a.getMonth() === +s.month) && (!s.openOnly || x.st.open));
    rows.sort(s.sort === 'deadline' ? (x, y) => x.st.rank - y.st.rank || (x.st.date || x.a) - (y.st.date || y.a) : (x, y) => x.a - y.a);
    const watch = all.filter((x) => x.st.date && (x.st.open || x.st.rank === 2)).sort((x, y) => x.st.date - y.st.date).map((x) => ({
      when: fmt(x.st.date), name: x.f.name, url: x.f.submitUrl || x.f.site,
      what: x.st.open ? 'submissions close' : 'submissions open', color: x.st.open ? '#ffd400' : '#f5f5f2'
    }));
    const ms = [['all', 'All'], ['9', 'Oct'], ['10', 'Nov'], ['11', 'Dec']];
    return {
      countFests: live.length, countOpen: openCount, nextIn: upcoming.length ? days(upcoming[0].a, now) : '—',
      todayText: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      months: ms.map(([v, l]) => ({ label: l, bg: s.month === v ? '#ffd400' : 'transparent', fg: s.month === v ? '#0a0a0a' : '#f5f5f2', pick: () => this.setState({ month: v }) })),
      toggleOpen: () => this.setState({ openOnly: !s.openOnly }),
      openBorder: s.openOnly ? '#ffd400' : 'rgba(255,255,255,0.25)', openFg: s.openOnly ? '#ffd400' : '#f5f5f2', openDot: s.openOnly ? '#ffd400' : 'transparent',
      sort: s.sort, onSort: (e) => this.setState({ sort: e.target.value }),
      watch, noWatch: !watch.length,
      rows: rows.map(({ f, st, phase, phaseColor }, i) => {
        const art = f.art || s.art[f.site] || '';
        const k = i % 3, sub = !!f.submitUrl && f.subStatus !== 'invite';
        return {
          ...f, ...comicCheck(f, now), st, phase, phaseColor, dates: dateText(f), art, hasArt: !!art,
          artFail: () => this.setState({ art: { ...s.art, [f.site]: '' } }),
          posterBg: ['#ffd400', '#1c1c1c', '#f5f5f2'][k], posterFg: ['#0a0a0a', '#ffd400', '#0a0a0a'][k],
          bill: (f.headliners || []).slice(0, 5).join(' · '), hasBill: !!(f.headliners || []).length,
          formatText: (f.formats || []).join(' · ') || 'Comedy', hasFee: !!f.fee, fee: f.fee,
          hasSubmit: sub, submitUrl: f.submitUrl,
          subLabel: st.open ? 'Submit now' : st.rank === 2 ? 'Submission page' : 'Submission info',
          subBg: st.open ? '#ffd400' : 'transparent', subFg: st.open ? '#0a0a0a' : '#f5f5f2', subBorder: st.open ? '#ffd400' : 'rgba(255,255,255,0.25)',
          source: f.source || f.site, sourceHost: host(f.source || f.site)
        };
      }),
      empty: !rows.length,
      copyLabel: s.copied ? 'Copied ✓' : 'Copy the prompt',
      copyPrompt: () => { navigator.clipboard?.writeText(PROMPT).then(() => { this.setState({ copied: true }); setTimeout(() => this.setState({ copied: false }), 2000); }, () => this.setState({ msg: 'Clipboard blocked — use "Read full prompt".', msgOk: false })); },
      json: s.json, onJson: (e) => this.setState({ json: e.target.value }), importJson: this.importJson,
      hasImported: !!s.imported.length, importedCount: s.imported.length,
      clearImported: () => { localStorage.removeItem(IMP_KEY); this.setState({ imported: [], msg: 'Removed added festivals.', msgOk: true }); },
      msg: s.msg, msgColor: s.msgOk ? '#ffd400' : '#ff6b5a'
    };
  }

  render() { return template(view(this)); }
}

mount(<FestivalsPage />);
