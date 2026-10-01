import { Component, createRef } from 'react';
import { mount, view } from '../shared/mount.jsx';
import template from './template.jsx';
import { track } from '../shared/analytics.js';
import { beehiivEmbedUrl } from '../shared/newsletter.js';
import './template.hover.css';

const TICKER = [
  { k: 'Tour', t: 'Mara Quell adds 22 arena dates after a sold-out spring' },
  { k: 'Special', t: '“Soft Opinions” streams Friday' },
  { k: 'Festival', t: 'Fringe comedy lineup drops at noon ET' },
  { k: 'Podcast', t: 'Green Room ep. 112 is live' },
  { k: 'Late Night', t: 'Another network desk goes dark in January' }
];
const STORIES = [
  { k: 'Festivals', t: 'Inside the Fringe Lottery: 3,000 Comics, 40 Slots, One Very Tired Booker', by: 'Marisol Tan · 16 min', ph: 'Packed green room' },
  { k: 'Specials', t: 'Wren Okafor Made the Year’s Best Hour in Four Years Flat', by: 'Theo Lindqvist · 9 min', ph: 'Comic backstage, portrait' },
  { k: 'Podcasts', t: 'The Comedy Podcast Boom Is Over. The Good Ones Are Just Getting Started.', by: 'Ama Boateng · 11 min', ph: 'Podcast studio, two mics' },
  { k: 'Sketch', t: 'Why Every Sketch Troupe Is Suddenly Shooting on a Single Phone', by: 'Jules Harker · 7 min', ph: 'Sketch set, behind the scenes' },
  { k: 'Clubs', t: 'The Basement Turns 30: An Oral History of New York’s Rowdiest Room', by: 'Nadia Faroq · 24 min', ph: 'Brick-wall club stage' },
  { k: 'Internet', t: 'Crowd Work Clips Are Eating Stand-Up. Here’s Who’s Fighting Back.', by: 'Dana Oyelaran · 8 min', ph: 'Phone filming a show' }
];
const MOST = [
  { k: 'Tour', t: 'Every Comedy Tour Hitting Arenas This Fall, Ranked by Ticket Price' },
  { k: 'Late Night', t: 'What Actually Happens When a Talk Show Gets Canceled' },
  { k: 'Interview', t: 'Keisha Moreau on Writing Her Mom Into Every Joke — With Permission' },
  { k: 'Specials', t: 'Seven Hours You Missed This Summer' },
  { k: 'Culture', t: 'The Heckler Who Became a Headliner' }
];
const CLIPS = [
  { who: 'Priya Castellane', t: 'The Front Row Dentist', d: '0:58' },
  { who: 'Rafa Delgado', t: 'Bilingual Airport Security', d: '0:44' },
  { who: 'Ollie Szabo', t: 'I Rewatched My Worst Set', d: '1:02' },
  { who: 'Keisha Moreau', t: 'Mom Found My Special', d: '0:51' },
  { who: 'Sunny Ahmadi', t: 'Open Mic, 1:47 A.M.', d: '0:39' },
  { who: 'Dev Castillo', t: 'Objection, Toddler', d: '0:57' },
  { who: 'Wren Okafor', t: 'Soft Opinions, Hard Truths', d: '1:00' }
];
const COMICS = [
  { name: 'Priya Castellane', city: 'Chicago', pitch: 'Crowd work that plays like a TED talk slowly going wrong.', credit: 'Headlined Zanies, 14 nights' },
  { name: 'Jonah Reyes-Whitfield', city: 'Austin', pitch: 'Deadpan airport material, nine laughs a minute.', credit: 'Debut hour taping in March' },
  { name: 'Keisha Moreau', city: 'Atlanta', pitch: 'Family stories so specific they turn universal by the second tag.', credit: 'Writer, two network sitcoms' },
  { name: 'Ollie Szabo', city: 'Toronto', pitch: 'Built an act out of replaying his worst sets on stage. It works.', credit: 'New Faces, 2025' },
  { name: 'Sunny Ahmadi', city: 'Los Angeles', pitch: 'Open-mic veteran with the tightest fifteen in the city.', credit: 'Opening a stadium tour' },
  { name: 'Rafa Delgado', city: 'Miami', pitch: 'Bilingual punchlines that land twice — once per language.', credit: 'Viral clip, 41M views' },
  { name: 'Wren Okafor', city: 'London', pitch: 'The year’s best special, from four years on stage.', credit: '“Soft Opinions,” out Friday' },
  { name: 'Dev Castillo', city: 'New York', pitch: 'Observational comedy with a lawyer’s precision.', credit: 'Residency at The Basement' }
];
const RANKED = [
  { title: 'Soft Opinions', comic: 'Wren Okafor', format: 'Hour', runtime: '62 min', score: 5, verdict: 'The most confident debut in years — every callback earns its spot.' },
  { title: 'Carry-On Only', comic: 'Jonah Reyes-Whitfield', format: 'Hour', runtime: '58 min', score: 5, verdict: 'A travel hour that somehow never mentions peanuts.' },
  { title: 'Row Two', comic: 'Priya Castellane', format: 'Crowd Work', runtime: '71 min', score: 4, verdict: 'Unscripted and structured at once. Nobody else can do this.' },
  { title: 'Group Chat', comic: 'Keisha Moreau', format: 'Hour', runtime: '55 min', score: 4, verdict: 'The mother material alone justifies the runtime.' },
  { title: 'Two Drink Minimum', comic: 'The Wednesday Players', format: 'Sketch', runtime: '44 min', score: 4, verdict: 'A sketch special that feels like a live show, in the best way.' },
  { title: 'Doble', comic: 'Rafa Delgado', format: 'Hour', runtime: '60 min', score: 3, verdict: 'Two languages, one mostly airtight hour.' }
];
const SERIES = [
  { t: 'Tight Five', eps: 'S3 · 12 eps', d: 'Five minutes, one take, no edits. New comics every Tuesday.', ph: 'Single mic on a dark stage' },
  { t: 'Green Room', eps: 'Podcast · 112 eps', d: 'Two headliners, one couch, the hour before showtime.', ph: 'Green room couch' },
  { t: 'Bombed', eps: 'S1 · 8 eps', d: 'Comics rewatch their worst sets and explain what died.', ph: 'Empty club, chairs stacked' },
  { t: 'Night Shift', eps: 'S2 · 10 eps', d: 'Riding along with the comics doing four spots a night.', ph: 'Comic in a cab at night' }
];
const STEPS = [
  { t: 'Setup', d: 'Establish a world the room already agrees with. Short, specific, no jokes yet — you are borrowing trust.', line: 'My dad just learned to text.' },
  { t: 'Premise', d: 'Name the strange thing. The audience leans in because they can feel the turn coming.', line: 'He signs every message like a letter.' },
  { t: 'Punchline', d: 'Collide the premise with reality. Land on the funniest word — then stop talking.', line: '“Your mother is in the hospital. Love, Dad.”' },
  { t: 'Tag', d: 'Ride the laugh with a second hit off the same premise. The best comics tag three deep.', line: 'Next text: “She’s fine. Sorry for the tone.”' }
];
const METER = ['Murmur', 'Leaning in', 'Big laugh', 'Applause break'];
const AMP = [0.14, 0.3, 0.8, 1];
const BASE = Array.from({ length: 48 }, (_, i) => 0.3 + 0.7 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.43)));
const N = COMICS.length, STEP_DEG = 360 / N, RADIUS = 420;
const FILTERS = ['All', 'Hour', 'Crowd Work', 'Sketch'];
const pad = (n) => String(n).padStart(2, '0');

class HomePage extends Component {
  state = { ringIdx: 0, step: 0, filmOpen: false, filter: 'All', subscribed: false, hover: null, joke: { text: '', name: '', city: '', handle: '', original: false }, myJokes: [], jokeMsg: '' };
  setJoke(k, v) { this.setState((s) => ({ joke: { ...s.joke, [k]: v }, jokeMsg: '' })); }
  submitJoke = (e) => {
    e.preventDefault();
    const j = this.state.joke;
    if (!j.text.trim() || !j.name.trim() || !j.original) return;
    const entry = { text: j.text.trim(), name: j.name.trim(), city: j.city.trim(), handle: j.handle.trim(), at: Date.now() };
    const myJokes = [entry, ...this.state.myJokes];
    try { localStorage.setItem('heckle-jokes-v1', JSON.stringify(myJokes)); } catch {}
    this.setState({ myJokes, joke: { text: '', name: j.name, city: j.city, handle: j.handle, original: false }, jokeMsg: "Got it. Winners hear from us by Monday." });
    track('joke_submit');
  };
  tickerRef = createRef(); bandRef = createRef(); heroCard = createRef(); heroImg = createRef(); heroType = createRef();
  ringRef = createRef(); railRef = createRef(); storyRef = createRef();
  rot = 0; target = null; drag = null; tick = 0; tx = 0; ty = 0; cx = 0; cy = 0;

  motion() { return (this.props.motion ?? true) && !this.reduced; }

  componentDidMount() {
    try { this.setState({ myJokes: JSON.parse(localStorage.getItem('heckle-jokes-v1') || '[]') }); } catch {}
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.onPMove = (e) => {
      if (!this.drag) return;
      this.rot = this.drag.rot + (e.clientX - this.drag.x) * 0.35;
      this.syncIdx();
    };
    this.onPUp = () => {
      if (!this.drag) return;
      this.drag = null;
      this.target = Math.round(this.rot / STEP_DEG) * STEP_DEG;
      document.body.style.cursor = '';
    };
    this.onScroll = () => {
      const el = this.storyRef.current; if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(0.999, Math.max(0, (vh * 0.5 - r.top) / r.height));
      const step = Math.floor(p * STEPS.length);
      if (step !== this.state.step) this.setState({ step });
    };
    window.addEventListener('pointermove', this.onPMove);
    window.addEventListener('pointerup', this.onPUp);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      const m = this.motion();
      const tk = this.tickerRef.current;
      if (tk) {
        if (m) this.tick -= 0.6;
        const half = tk.scrollWidth / 2;
        if (half && -this.tick >= half) this.tick += half;
        tk.style.transform = `translate3d(${this.tick}px,0,0)`;
      }
      const vh = window.innerHeight;
      const band = this.bandRef.current;
      if (band) {
        const r = band.getBoundingClientRect();
        band.style.transform = m ? `translate3d(${(r.top - vh) * 0.5}px,0,0)` : '';
      }
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        const f = parseFloat(el.dataset.parallax) || 0;
        el.style.transform = m ? `translate3d(0,${(r.top + r.height / 2 - vh / 2) * -f}px,0)` : '';
      });
      this.cx += (this.tx - this.cx) * 0.08; this.cy += (this.ty - this.cy) * 0.08;
      const on = m ? 1 : 0;
      if (this.heroCard.current) this.heroCard.current.style.transform = `rotateY(${this.cx * 7 * on}deg) rotateX(${-this.cy * 6 * on}deg)`;
      if (this.heroImg.current) this.heroImg.current.style.transform = `translate3d(${-this.cx * 18 * on}px,${-this.cy * 14 * on}px,0) scale(1.04)`;
      if (this.heroType.current) this.heroType.current.style.transform = `translate3d(${this.cx * 14 * on}px,${this.cy * 10 * on}px,60px)`;
      if (!this.drag) {
        if (this.target != null) {
          this.rot += (this.target - this.rot) * 0.12;
          if (Math.abs(this.target - this.rot) < 0.05) { this.rot = this.target; this.target = null; this.idle = performance.now(); }
        } else if (m && (this.props.autoRotate ?? true) && performance.now() - (this.idle || 0) > 2500) {
          this.rot -= 0.07;
        }
        this.syncIdx();
      }
      if (this.ringRef.current) this.ringRef.current.style.transform = `translateZ(${-RADIUS}px) rotateY(${this.rot}deg)`;
    };
    loop();
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('pointermove', this.onPMove);
    window.removeEventListener('pointerup', this.onPUp);
    window.removeEventListener('scroll', this.onScroll);
  }
  syncIdx() {
    const idx = ((-Math.round(this.rot / STEP_DEG)) % N + N) % N;
    if (idx !== this.state.ringIdx) this.setState({ ringIdx: idx });
  }
  nudge(d) { const base = this.target ?? Math.round(this.rot / STEP_DEG) * STEP_DEG; this.target = base + d * STEP_DEG; }

  renderVals() {
    const { ringIdx, step, filter, hover } = this.state;
    const c = COMICS[ringIdx];
    const rows = RANKED.filter((r) => filter === 'All' || r.format === filter);
    const jk = this.state.joke, JMAX = 400;
    return {
      jokeText: jk.text, jokeName: jk.name, jokeCity: jk.city, jokeHandle: jk.handle, jokeOriginal: jk.original, jokeMax: JMAX,
      jokeCount: `${jk.text.length} / ${JMAX}`, jokeCountColor: jk.text.length > JMAX - 40 ? '#ffd400' : '#7a7a76',
      onJokeText: (e) => this.setJoke('text', e.target.value), onJokeName: (e) => this.setJoke('name', e.target.value),
      onJokeCity: (e) => this.setJoke('city', e.target.value), onJokeHandle: (e) => this.setJoke('handle', e.target.value),
      onJokeOriginal: (e) => this.setJoke('original', e.target.checked), submitJoke: this.submitJoke, jokeMsg: this.state.jokeMsg,
      myJokes: this.state.myJokes.map((m) => ({ text: m.text, byline: [m.name, m.city, m.handle].filter(Boolean).join(' · ') })),
      noJokes: !this.state.myJokes.length,
      showTicker: this.props.showTicker ?? true,
      tickerLoop: [...TICKER, ...TICKER],
      onHeroMove: (e) => { const r = e.currentTarget.getBoundingClientRect(); this.tx = (e.clientX - r.left) / r.width - 0.5; this.ty = (e.clientY - r.top) / r.height - 0.5; },
      onHeroLeave: () => { this.tx = 0; this.ty = 0; },
      openFilm: () => this.setState({ filmOpen: true }),
      closeFilm: () => this.setState({ filmOpen: false }),
      stop: (e) => e.stopPropagation(),
      filmOpen: this.state.filmOpen,
      stories: STORIES.map((s, i) => ({ ...s, id: 'story-' + i })),
      mostRead: MOST.map((m, i) => ({ ...m, n: i + 1 })),
      clips: CLIPS.map((cl, i) => {
        const on = hover === i;
        return {
          ...cl, id: 'clip-' + i,
          enter: () => this.setState({ hover: i }),
          leave: () => this.setState({ hover: null }),
          zoom: on ? 'scale(1.12)' : 'scale(1)',
          prog: on ? '100%' : '0%',
          trans: on ? 'width 6s linear' : 'width .2s',
          outline: on ? '2px solid #ffd400' : '2px solid transparent',
          badge: on ? '● Playing' : cl.d,
          badgeBg: on ? '#ffd400' : 'rgba(10,10,10,0.8)',
          badgeFg: on ? '#0a0a0a' : '#f5f5f2'
        };
      }),
      railPrev: () => this.railRef.current && this.railRef.current.scrollBy({ left: -560 }),
      railNext: () => this.railRef.current && this.railRef.current.scrollBy({ left: 560 }),
      comics: COMICS.map((cm, i) => ({ ...cm, id: 'comic-' + i, n: pad(i + 1), transform: `rotateY(${i * STEP_DEG}deg) translateZ(${RADIUS}px)`, border: i === ringIdx ? '#ffd400' : 'rgba(255,255,255,0.14)' })),
      active: { ...c, n: pad(ringIdx + 1) },
      ringDown: (e) => { this.drag = { x: e.clientX, rot: this.rot }; this.target = null; this.idle = performance.now() + 1e9; document.body.style.cursor = 'grabbing'; },
      ringPrev: () => this.nudge(1),
      ringNext: () => this.nudge(-1),
      filters: FILTERS.map((f) => ({ label: f, bg: f === filter ? '#ffd400' : 'transparent', fg: f === filter ? '#0a0a0a' : '#f5f5f2', onClick: () => this.setState({ filter: f }) })),
      rankedRows: rows.map((r, i) => ({ ...r, id: 'rank-' + RANKED.indexOf(r), rank: pad(i + 1), scoreLabel: r.score + ' out of 5', pips: [0, 1, 2, 3, 4].map((p) => ({ bg: p < r.score ? '#ffd400' : 'rgba(255,255,255,0.18)' })) })),
      series: SERIES.map((s, i) => ({ ...s, id: 'series-' + i })),
      steps: STEPS.map((s, i) => ({ ...s, n: pad(i + 1), op: i === step ? 1 : 0.28 })),
      jokeLines: STEPS.map((s, i) => ({ t: s.line, op: i <= step ? 1 : 0.12, x: i <= step ? '0px' : '-24px' })),
      bars: BASE.map((b) => ({ h: Math.max(4, b * AMP[step] * 100) + '%' })),
      meterLabel: METER[step],
      beehiivEmbedUrl,
      onSubscribe: (e) => { e.preventDefault(); this.setState({ subscribed: true }); },
      subLabel: this.state.subscribed ? 'Opening soon' : 'Sign up'
    };
  }

  render() { return template(view(this)); }
}

mount(<HomePage />);
