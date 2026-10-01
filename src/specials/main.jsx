import { Component } from 'react';
import { mount, view } from '../shared/mount.jsx';
import template from './template.jsx';
import './template.hover.css';
import './page.css';

const RAW = `Bring the Pain|Chris Rock|1996|HBO|Observational,Political
I'm Telling You for the Last Time|Jerry Seinfeld|1998|HBO|Observational,Clean
Bigger & Blacker|Chris Rock|1999|HBO|Observational,Political
You Are All Diseased|George Carlin|1999|HBO|Political,Dark
Dress to Kill|Eddie Izzard|1999|HBO|Absurdist,Storytelling
Killin' Them Softly|Dave Chappelle|2000|HBO|Observational,Storytelling
Complaints and Grievances|George Carlin|2001|HBO|Political,Dark
Live on Broadway|Robin Williams|2002|HBO|Absurdist,Political
Here and Now|Ellen DeGeneres|2003|HBO|Observational,Clean
For What It's Worth|Dave Chappelle|2004|Showtime|Observational,Storytelling
Never Scared|Chris Rock|2004|HBO|Observational,Political
No Reason to Complain|Patton Oswalt|2004|Comedy Central|Alt,Storytelling
Life Is Worth Losing|George Carlin|2005|HBO|Political,Dark
Beyond the Pale|Jim Gaffigan|2006|Comedy Central|Observational,Clean
Sick and Tired|Wanda Sykes|2006|HBO|Political,Observational
Werewolves and Lollipops|Patton Oswalt|2007|Comedy Central|Alt,Storytelling
Shameless|Louis C.K.|2007|HBO|Confessional,Dark
It's Bad for Ya|George Carlin|2008|HBO|Political,Dark
Kill the Messenger|Chris Rock|2008|HBO|Observational,Political
Chewed Up|Louis C.K.|2008|Showtime|Confessional,Dark
Why Do I Do This?|Bill Burr|2008|Comedy Central|Observational,Dark
I'ma Be Me|Wanda Sykes|2009|HBO|Political,Confessional
Weapons of Self Destruction|Robin Williams|2009|HBO|Absurdist,Political
King Baby|Jim Gaffigan|2009|Comedy Central|Observational,Clean
Seriously Funny|Kevin Hart|2010|Comedy Central|Storytelling,Observational
Let It Go|Bill Burr|2010|Showtime|Observational,Dark
Hilarious|Louis C.K.|2010|Epix|Confessional,Dark
Finest Hour|Patton Oswalt|2011|Comedy Central|Alt,Storytelling
Live at the Beacon Theater|Louis C.K.|2011|Self-released|Confessional,Dark
Me Doing Standup|Norm Macdonald|2011|Comedy Central|Absurdist,Dark
New in Town|John Mulaney|2012|Comedy Central|Storytelling,Clean
Mr. Universe|Jim Gaffigan|2012|Self-released|Observational,Clean
You People Are All the Same|Bill Burr|2012|Netflix|Observational,Dark
Animal Furnace|Hannibal Buress|2012|Comedy Central|Alt,Observational
what.|Bo Burnham|2013|Netflix|Musical,Alt
Oh My God|Louis C.K.|2013|HBO|Confessional,Dark
Buried Alive|Aziz Ansari|2013|Netflix|Observational,Confessional
We Are Miracles|Sarah Silverman|2013|HBO|Dark,Alt
My Girlfriend's Boyfriend|Mike Birbiglia|2013|Netflix|Storytelling,Confessional
Thinky Pain|Marc Maron|2013|Netflix|Confessional,Storytelling
Caligula|Anthony Jeselnik|2013|Comedy Central|Dark,Absurdist
Beta Male|Kumail Nanjiani|2013|Comedy Central|Storytelling,Alt
I'm Sorry You Feel That Way|Bill Burr|2014|Netflix|Observational,Dark
Obsessed|Jim Gaffigan|2014|Comedy Central|Observational,Clean
One of the Greats|Chelsea Peretti|2014|Netflix|Alt,Absurdist
BARE|Jim Jefferies|2014|Netflix|Political,Dark
The Comeback Kid|John Mulaney|2015|Netflix|Storytelling,Clean
Live at Madison Square Garden|Aziz Ansari|2015|Netflix|Observational,Confessional
Boyish Girl Interrupted|Tig Notaro|2015|HBO|Confessional,Storytelling
Live at the Apollo|Amy Schumer|2015|HBO|Confessional,Observational
Thoughts and Prayers|Anthony Jeselnik|2015|Netflix|Dark,Political
Baby Cobra|Ali Wong|2016|Netflix|Confessional,Observational
Make Happy|Bo Burnham|2016|Netflix|Musical,Alt
Talking for Clapping|Patton Oswalt|2016|Netflix|Alt,Storytelling
Mostly Stories|Tom Segura|2016|Netflix|Storytelling,Dark
Freedumb|Jim Jefferies|2016|Netflix|Political,Dark
Comedy Camisado|Hannibal Buress|2016|Netflix|Alt,Observational
The Age of Spin|Dave Chappelle|2017|Netflix|Storytelling,Political
Deep in the Heart of Texas|Dave Chappelle|2017|Netflix|Storytelling,Observational
Equanimity|Dave Chappelle|2017|Netflix|Political,Storytelling
The Bird Revelation|Dave Chappelle|2017|Netflix|Political,Storytelling
Annihilation|Patton Oswalt|2017|Netflix|Confessional,Storytelling
Old Baby|Maria Bamford|2017|Netflix|Alt,Confessional
Homecoming King|Hasan Minhaj|2017|Netflix|Storytelling,Political
Walk Your Way Out|Bill Burr|2017|Netflix|Observational,Dark
Thank God for Jokes|Mike Birbiglia|2017|Netflix|Storytelling,Confessional
A Speck of Dust|Sarah Silverman|2017|Netflix|Dark,Alt
Cinco|Jim Gaffigan|2017|Netflix|Observational,Clean
The Leather Special|Amy Schumer|2017|Netflix|Confessional,Observational
8|Jerrod Carmichael|2017|HBO|Observational,Dark
3 Mics|Neal Brennan|2017|Netflix|Confessional,Alt
She Ready!|Tiffany Haddish|2017|Showtime|Storytelling,Confessional
Nanette|Hannah Gadsby|2018|Netflix|Confessional,Political
Tamborine|Chris Rock|2018|Netflix|Confessional,Observational
Kid Gorgeous at Radio City|John Mulaney|2018|Netflix|Storytelling,Clean
Hard Knock Wife|Ali Wong|2018|Netflix|Confessional,Observational
Happy to Be Here|Tig Notaro|2018|Netflix|Storytelling,Clean
Humanity|Ricky Gervais|2018|Netflix|Dark,Political
Disgraceful|Tom Segura|2018|Netflix|Storytelling,Dark
Relatable|Ellen DeGeneres|2018|Netflix|Observational,Clean
Hitler's Dog, Gossip and Trickery|Norm Macdonald|2017|Netflix|Absurdist,Dark
Sticks & Stones|Dave Chappelle|2019|Netflix|Political,Dark
Paper Tiger|Bill Burr|2019|Netflix|Observational,Political
The Tennessee Kid|Nate Bargatze|2019|Netflix|Storytelling,Clean
The Great Depresh|Gary Gulman|2019|HBO|Confessional,Storytelling
Right Now|Aziz Ansari|2019|Netflix|Confessional,Political
Not Normal|Wanda Sykes|2019|Netflix|Political,Observational
The New One|Mike Birbiglia|2019|Netflix|Storytelling,Confessional
Fire in the Maternity Ward|Anthony Jeselnik|2019|Netflix|Dark,Absurdist
Black Mitzvah|Tiffany Haddish|2019|Netflix|Storytelling,Confessional
Feelings|Ramy Youssef|2019|HBO|Confessional,Political
Quality Time|Jim Gaffigan|2019|Prime Video|Observational,Clean
23 Hours to Kill|Jerry Seinfeld|2020|Netflix|Observational,Clean
Quarter-Life Crisis|Taylor Tomlinson|2020|Netflix|Confessional,Observational
Ball Hog|Tom Segura|2020|Netflix|Storytelling,Dark
End Times Fun|Marc Maron|2020|Netflix|Political,Confessional
3 in the Morning|Sam Jay|2020|Netflix|Observational,Political
Out to Lunch|Mark Normand|2020|YouTube|Observational,Dark
I Hate Myself|Joe List|2020|YouTube|Confessional,Observational
Only Fans|Matt Rife|2021|YouTube|Crowd Work,Observational
Fat Rascal|Stavros Halkias|2022|YouTube|Confessional,Dark
Inside|Bo Burnham|2021|Netflix|Musical,Confessional
The Closer|Dave Chappelle|2021|Netflix|Political,Storytelling
The Greatest Average American|Nate Bargatze|2021|Netflix|Storytelling,Clean
Live in Austin|Shane Gillis|2021|YouTube|Observational,Dark
Rothaniel|Jerrod Carmichael|2022|HBO|Confessional,Storytelling
Look at You|Taylor Tomlinson|2022|Netflix|Confessional,Observational
Don Wong|Ali Wong|2022|Netflix|Confessional,Observational
Live at Red Rocks|Bill Burr|2022|Netflix|Observational,Dark
The King's Jester|Hasan Minhaj|2022|Netflix|Storytelling,Political
SuperNature|Ricky Gervais|2022|Netflix|Dark,Political
Nothing Special|Norm Macdonald|2022|Netflix|Confessional,Absurdist
The Intruder|Atsuko Okatsuka|2022|HBO|Alt,Absurdist
Blocks|Neal Brennan|2022|Netflix|Confessional,Alt
Selective Outrage|Chris Rock|2023|Netflix|Political,Observational
Baby J|John Mulaney|2023|Netflix|Confessional,Storytelling
Beautiful Dogs|Shane Gillis|2023|Netflix|Observational,Dark
Hello World|Nate Bargatze|2023|Prime Video|Storytelling,Clean
Sledgehammer|Tom Segura|2023|Netflix|Storytelling,Dark
Mohammed in Texas|Mo Amer|2023|Netflix|Storytelling,Political
Soup to Nuts|Mark Normand|2023|Netflix|Observational,Dark
The Old Man and the Pool|Mike Birbiglia|2023|Netflix|Storytelling,Confessional
The Dreamer|Dave Chappelle|2023|Netflix|Storytelling,Political
Someone You Love|Sarah Silverman|2023|HBO|Confessional,Dark
From Bleak to Dark|Marc Maron|2023|HBO|Confessional,Dark
I'm Every Woman|Leanne Morgan|2023|Netflix|Storytelling,Clean
Natural Selection|Matt Rife|2023|Netflix|Crowd Work,Observational
Now More Than Ever|John Early|2023|HBO|Alt,Musical
Armageddon|Ricky Gervais|2023|Netflix|Dark,Political
I'm an Entertainer|Wanda Sykes|2023|Netflix|Political,Observational
Have It All|Taylor Tomlinson|2024|Netflix|Confessional,Observational
Single Lady|Ali Wong|2024|Netflix|Confessional,Observational
Get on Your Knees|Jacqueline Novak|2024|Netflix|Alt,Confessional
Your Friend, Nate Bargatze|Nate Bargatze|2024|Netflix|Storytelling,Clean
Bones and All|Anthony Jeselnik|2024|Netflix|Dark,Absurdist
More Feelings|Ramy Youssef|2024|HBO|Confessional,Political
Night Thoughts|Kumail Nanjiani|2024|Prime Video|Storytelling,Confessional
Drop Dead Years|Bill Burr|2025|Hulu|Observational,Political
Panicked|Marc Maron|2025|HBO|Confessional,Dark`;
const WHERE = { HBO: 'Max', Netflix: 'Netflix', 'Comedy Central': 'Paramount+', Showtime: 'Paramount+', 'Prime Video': 'Prime Video', Hulu: 'Hulu', YouTube: 'YouTube · free', Epix: 'MGM+', 'Self-released': 'Creator site' };
function hash(s) { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296; }
const DATA = (() => {
  const list = RAW.trim().split('\n').map((l, i) => {
    const [title, comic, year, network, g] = l.split('|'); const r = hash(title + comic); const y = +year;
    const critic = Math.round(58 + r() * 41), crowd = Math.max(40, Math.min(99, Math.round(critic + (r() - 0.5) * 30)));
    const views = (y >= 2016 ? 4 + r() * 38 : y >= 2008 ? 1 + r() * 9 : 0.5 + r() * 4);
    const onNow = network === 'YouTube' || r() > 0.22;
    return { id: i, title, comic, year: y, network, genres: g.split(','), critic, crowd, viewsN: views, onNow, free: network === 'YouTube', trend: Math.round((r() - 0.45) * 24) };
  });
  const byScore = [...list].sort((a, b) => (b.critic * 0.6 + b.crowd * 0.4) - (a.critic * 0.6 + a.crowd * 0.4));
  byScore.forEach((s, i) => { s.rank = i + 1; s.trend = Math.max(-(list.length - s.rank), Math.min(s.rank - 1, s.trend)); });
  return list;
})();
const GENRES = ['All', 'Observational', 'Storytelling', 'Confessional', 'Political', 'Dark', 'Alt', 'Absurdist', 'Clean', 'Musical', 'Crowd Work'];
const NETWORKS = ['All networks', ...[...new Set(DATA.map((d) => d.network))].sort()];
const ERAS = ['All years', '2021–2026', '2016–2020', '2006–2015', '1996–2005'];
const RATINGS = ['All ratings', 'Killed (75%+)', 'Solid (60–74%)', 'Bombed (<60%)'];
const SORTS = [{ v: 'rank', l: 'Heckle rank' }, { v: 'critic', l: 'Critics score' }, { v: 'crowd', l: 'Crowd score' }, { v: 'views', l: 'Most viewed' }, { v: 'trend', l: 'Biggest movers' }, { v: 'new', l: 'Newest' }, { v: 'old', l: 'Oldest' }];
const PAGE = 36;
const cert = (c) => c >= 75 ? { cert: 'Killed', certBg: '#ffd400', certFg: '#0a0a0a', certBd: '#ffd400' } : c >= 60 ? { cert: 'Solid', certBg: 'transparent', certFg: '#ffd400', certBd: '#ffd400' } : { cert: 'Bombed', certBg: 'transparent', certFg: '#a3a39e', certBd: '#7a7a76' };
const fmtViews = (n) => n >= 1 ? `${n.toFixed(1)}M` : `${Math.round(n * 1000)}K`;

const ART_KEY = 'heckle-special-posters-v2';
const norm = (t) => (t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
const matches = (cand, title) => { const a = norm(cand), b = norm(title); return !!b && (a.includes(b) || b.includes(a) && a.length > 3); };
const getJSON = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(r.status); return r.json(); };
const SOURCES = {
  async tmdb(d, key) {
    if (!key) return null;
    for (const q of [`${d.comic}: ${d.title}`, d.title]) {
      const res = (await getJSON(`https://api.themoviedb.org/3/search/multi?api_key=${encodeURIComponent(key)}&query=${encodeURIComponent(q)}`)).results || [];
      const hit = res.filter((x) => x.poster_path).sort((a, b) => Math.abs(+(a.release_date || a.first_air_date || '0').slice(0, 4) - d.year) - Math.abs(+(b.release_date || b.first_air_date || '0').slice(0, 4) - d.year))[0];
      if (hit) return 'https://image.tmdb.org/t/p/w342' + hit.poster_path;
    }
    return null;
  },
  async itunes(d) {
    const res = (await getJSON(`https://itunes.apple.com/search?media=movie&entity=movie&limit=15&term=${encodeURIComponent(d.comic + ' ' + d.title)}`)).results || [];
    const hit = res.find((x) => x.artworkUrl100 && matches(x.trackName, d.title) && Math.abs(+(x.releaseDate || '0').slice(0, 4) - d.year) <= 2);
    return hit ? hit.artworkUrl100.replace(/\/\d+x\d+bb\./, '/600x900bb.') : null;
  },
  async wiki(d, _, comicOnly) {
    const q = comicOnly ? d.comic + ' comedian' : `${d.title} ${d.comic} stand-up special`;
    const u = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=6&gsrsearch=${encodeURIComponent(q)}&prop=pageimages&piprop=thumbnail&pithumbsize=600&pilicense=any`;
    const pages = Object.values((await getJSON(u)).query?.pages || {}).sort((a, b) => a.index - b.index);
    const hit = pages.find((p) => p.thumbnail && matches(p.title.replace(/\s*\(.*\)$/, ''), comicOnly ? d.comic : d.title));
    return hit ? hit.thumbnail.source : null;
  },
};
class SpecialsPage extends Component {
  componentDidMount() {
    let cache = {};
    try { cache = JSON.parse(localStorage.getItem(ART_KEY) || '{}'); } catch {}
    fetch('data/special-posters.json', { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : [])).catch(() => []).then((list) => {
      const posters = { ...cache };
      (Array.isArray(list) ? list : []).forEach((e) => {
        if (!e || !e.url) return;
        const d = DATA.find((x) => norm(x.title) === norm(e.title) && norm(x.comic) === norm(e.comic)) || (e.n && DATA[e.n - 1]);
        if (d) posters[d.id + '|' + d.title] = { url: e.url, src: 'scraped', tried: ['scraped'] };
      });
      this.setState({ posters }, () => this.fetchArt());
    });
  }
  componentDidUpdate(prev) { if (prev.tmdbKey !== this.props.tmdbKey || prev.comicFallback !== this.props.comicFallback) { this.artRun = null; this.fetchArt(); } }
  async fetchArt() {
    const key = (this.props.tmdbKey || '').trim(), portraits = this.props.comicFallback ?? true;
    const run = key + '|' + portraits;
    if (this.artRun === run) return;
    this.artRun = run;
    const cache = this.state.posters || {};
    const todo = DATA.filter((d) => { const c = cache[d.id + '|' + d.title]; return !c || (!c.url && (key || portraits) && !c.tried?.includes(run)); });
    let i = 0;
    const worker = async () => {
      while (i < todo.length && this.artRun === run) {
        const d = todo[i++];
        let url = null, src = null;
        const chain = [['tmdb', () => SOURCES.tmdb(d, key)], ['apple', () => SOURCES.itunes(d)], ['wikipedia', () => SOURCES.wiki(d)]];
        if (portraits) chain.push(['portrait', () => SOURCES.wiki(d, null, true)]);
        for (const [name, fn] of chain) {
          try { url = await fn(); } catch (e) { if (name === 'tmdb' && String(e.message) === '401') this.setState({ artError: 'TMDB key rejected' }); }
          if (url) { src = name; break; }
        }
        const posters = { ...(this.state.posters || {}), [d.id + '|' + d.title]: { url: url || '', src, tried: [run] } };
        this.setState({ posters });
        if (i % 8 === 0 || i === todo.length) { try { localStorage.setItem(ART_KEY, JSON.stringify(posters)); } catch {} }
      }
    };
    this.setState({ artError: null });
    await Promise.all([worker(), worker(), worker(), worker()]);
  }
  state = { posters: {}, artError: null, q: '', sort: 'rank', network: 'All networks', era: 'All years', rating: 'All ratings', genre: 'All', onNow: false, free: false, view: 'grid', shown: PAGE };
  set(p) { this.setState({ ...p, shown: PAGE }); }
  renderVals() {
    const s = this.state, q = s.q.trim().toLowerCase();
    let rows = DATA.filter((d) => (!q || `${d.title} ${d.comic}`.toLowerCase().includes(q)) &&
      (s.network === 'All networks' || d.network === s.network) &&
      (s.genre === 'All' || d.genres.includes(s.genre)) && (!s.onNow || d.onNow) && (!s.free || d.free) &&
      (s.era === 'All years' || (() => { const [a, b] = s.era.split('–').map(Number); return d.year >= a && d.year <= b; })()) &&
      (s.rating === 'All ratings' || (s.rating.startsWith('Killed') ? d.critic >= 75 : s.rating.startsWith('Solid') ? d.critic >= 60 && d.critic < 75 : d.critic < 60)));
    const cmp = { rank: (a, b) => a.rank - b.rank, critic: (a, b) => b.critic - a.critic, crowd: (a, b) => b.crowd - a.crowd, views: (a, b) => b.viewsN - a.viewsN,
      trend: (a, b) => b.trend - a.trend, new: (a, b) => b.year - a.year || a.rank - b.rank, old: (a, b) => a.year - b.year || a.rank - b.rank }[s.sort];
    rows = rows.sort(cmp);
    const view = rows.slice(0, s.shown).map((d) => {
      const up = d.trend > 0, down = d.trend < 0, dark = d.id % 3 === 0;
      const poster = ((s.posters || {})[d.id + '|' + d.title] || {}).url || '';
      return { ...d, ...cert(d.critic), poster, hasPoster: !!poster, views: fmtViews(d.viewsN), genreText: d.genres.join(' · '),
        trendText: up ? `▲ ${d.trend}` : down ? `▼ ${-d.trend}` : '— 0', trendColor: up ? '#ffd400' : down ? '#8a8a86' : '#5a5a56',
        trendBg: up ? '#ffd400' : '#0a0a0a', trendFg: up ? '#0a0a0a' : down ? '#a3a39e' : '#7a7a76',
        posterBg: dark ? '#ffd400' : d.id % 3 === 1 ? '#1c1c1c' : '#f5f5f2', posterFg: dark ? '#0a0a0a' : d.id % 3 === 1 ? '#ffd400' : '#0a0a0a',
        titleSize: d.title.length > 22 ? '26px' : d.title.length > 12 ? '34px' : '46px',
        initials: d.comic.split(' ').map((w) => w[0]).join('').slice(0, 2),
        onNowText: d.onNow ? `● ${WHERE[d.network] || d.network}` : 'Not streaming', onNowColor: d.onNow ? '#ffd400' : '#7a7a76',
        whereText: d.onNow ? 'Watch: ' + (WHERE[d.network] || d.network) : 'Not streaming right now', isFree: d.free };
    });
    const onNow = s.onNow;
    return {
      total: DATA.length,
      artNote: (() => { const v = Object.values(s.posters || {}); const got = v.filter((p) => p.url); const by = (k) => got.filter((p) => p.src === k).length; if (s.artError) return s.artError + ' — check the key in Tweaks'; if (!v.length) return 'Loading cover art…'; const parts = [['tmdb','TMDB'],['apple','Apple TV'],['wikipedia','Wikipedia'],['portrait','comic portraits']].filter(([k]) => by(k)).map(([k, l]) => by(k) + ' ' + l); return 'Cover art: ' + got.length + ' of ' + DATA.length + (parts.length ? ' (' + parts.join(', ') + ')' : ''); })(),
      climbers: (() => { const top = [...DATA].sort((a, b) => b.trend - a.trend).slice(0, 10); const max = top[0]?.trend || 1; return top.map((d, i) => { const poster = ((s.posters || {})[d.id + '|' + d.title] || {}).url || ''; return { ...d, delta: d.trend, place: String(i + 1).padStart(2, '0'), oldRank: d.rank + d.trend, bar: Math.max(8, Math.round(d.trend / max * 100)) + '%', lead: i === 0, placeColor: i < 3 ? '#ffd400' : '#5a5a56', rowBg: i === 0 ? 'rgba(255,212,0,0.08)' : 'transparent', poster, hasPoster: !!poster, initials: d.comic.split(' ').map((w) => w[0]).join('').slice(0, 2) }; }); })(),
      q: s.q, onQ: (e) => this.set({ q: e.target.value }),
      sort: s.sort, sortOpts: SORTS, onSort: (e) => this.set({ sort: e.target.value }), sortLabel: 'sorted by ' + SORTS.find((o) => o.v === s.sort).l.toLowerCase(),
      network: s.network, networkOpts: NETWORKS, onNetwork: (e) => this.set({ network: e.target.value }),
      era: s.era, eraOpts: ERAS, onEra: (e) => this.set({ era: e.target.value }),
      rating: s.rating, ratingOpts: RATINGS, onRating: (e) => this.set({ rating: e.target.value }),
      toggleOnNow: () => this.set({ onNow: !onNow }), onNowPressed: onNow ? 'true' : 'false',
      toggleFree: () => this.set({ free: !s.free }), freePressed: s.free ? 'true' : 'false',
      freeBg: s.free ? '#ffd400' : 'transparent', freeFg: s.free ? '#0a0a0a' : '#f5f5f2', freeBd: s.free ? '#ffd400' : 'rgba(255,255,255,0.25)',
      freeTotal: DATA.filter((d) => d.free).length,
      onNowBg: onNow ? '#ffd400' : 'transparent', onNowFg: onNow ? '#0a0a0a' : '#f5f5f2', onNowBd: onNow ? '#ffd400' : 'rgba(255,255,255,0.25)',
      genreChips: GENRES.map((g) => { const on = s.genre === g; return { label: g, bg: on ? '#f5f5f2' : 'transparent', fg: on ? '#0a0a0a' : '#d6d6d2', bd: on ? '#f5f5f2' : 'rgba(255,255,255,0.2)', onClick: () => this.set({ genre: g }) }; }),
      isGrid: s.view === 'grid', isList: s.view === 'list',
      setGrid: () => this.setState({ view: 'grid' }), setList: () => this.setState({ view: 'list' }),
      gridBg: s.view === 'grid' ? '#f5f5f2' : 'transparent', gridFg: s.view === 'grid' ? '#0a0a0a' : '#f5f5f2',
      listBg: s.view === 'list' ? '#f5f5f2' : 'transparent', listFg: s.view === 'list' ? '#0a0a0a' : '#f5f5f2',
      rows: view, count: rows.length, noResults: !rows.length,
      hasMore: rows.length > s.shown, remaining: rows.length - s.shown, more: () => this.setState({ shown: s.shown + PAGE })
    };
  }

  render() { return template(view(this)); }
}

mount(<SpecialsPage tmdbKey={import.meta.env.VITE_TMDB_KEY || ''} />);
