# Heckle — website

The production build of the Heckle designs from Claude Design (the "Heckle.com originial"
project; see `design/`). It is a static multi-page site: Vite + React for the
editorial pages and plain ES modules for Game Night. No backend is needed to run it.

| Page | URL | Built from |
| --- | --- | --- |
| Home (3D mic landing, stories, Killed / Died, Joke of the Week, video rail, comics ring, reviews, Anatomy of a Joke, Originals, The Setlist) | `/` | `Heckle.dc.html`, `heckle-mic.js` |
| The Specials Index | `/specials.html` | `Specials.dc.html` |
| Festival Tracker | `/festivals.html` | `Festivals.dc.html` |
| Open Mic Finder | `/open-mics.html` | `Open Mics.dc.html` |
| Game Night (7 games + Tweaks) | `/games.html` | `Game Night v2.html` |

## Run it

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # static site in dist/
npm run preview   # serve dist/ locally
```

`dist/` uses relative paths, so it can be uploaded as-is to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3), including under a sub-path.

## How the code maps to the design

- `src/<page>/template.jsx` is the page markup, generated from the prototype's template so the
  layout and inline styles match the design exactly. `template.hover.css` holds its hover states.
- `src/<page>/main.jsx` is the page logic (data, state, filters, animations), carried over from
  the prototype's script and mounted as a React component. Content lives in the constants at the
  top of each file (`STORIES`, `COMICS`, `RAW` specials list, `SEED` festivals, `CITIES`, …).
- `src/shared/HeckleMic.jsx` is the three.js microphone (three.js loads only on the home page,
  after first paint). `src/shared/ImageSlot.jsx` renders the design's image slots.
- `src/games/` has one module per game. Each starts with a labelled data block
  (`PUNCHLINE_WORDS`, `CALLBACKS_PUZZLES`, `SHORTSET_PUZZLES`, `ADLIBS_TEMPLATES`,
  `PUNOFF_PAIRS`, `SETUPPUNCH_SETUPS`, `BUZZ_PUZZLES`) for adding puzzles.

## Email list and analytics

Both are built in and switched off until their IDs are set (see `.env.example`):

- **The Setlist (Beehiiv):** create a Beehiiv publication and a subscribe form, then set
  `VITE_BEEHIIV_FORM_ID`. The home page's sign-up box becomes the Beehiiv form. Until then the
  button says "Opening soon", so nobody thinks they've subscribed.
- **Google Analytics 4:** create a GA4 property with a web data stream for the site's address,
  then set `VITE_GA_ID`. Events: `game_play` and `game_complete` (with `game`), `joke_submit`,
  `mic_submit` and `festival_submit_click`. To answer "do the games bring people back next week",
  open GA4's Retention report, or build a cohort exploration on `game_play`.

Both need the site to be live at a public address first.

## Data and what is still placeholder

- **Photos:** the two home hero photos placed in the design are in `public/images/`. Every other
  slot shows a labelled placeholder. To fill one, add the file to `public/images/` and map its
  slot id (e.g. `story-0`, `clip-3`, `comic-5`, `bomb-of-week`) in `src/shared/ImageSlot.jsx`.
- **Specials:** titles, comics, years and networks are real. Scores, views, rank movement and
  "on now" are generated sample data, as in the design. Cover art comes from
  `public/data/special-posters.json` (40 posters), then live lookups. Set `VITE_TMDB_KEY` in `.env`
  (see `.env.example`) to fill most of the rest from TMDB. The key is visible in the browser.
- **Open mics:** the page shows sample listings until `public/open-mics.json` exists. Generate it
  with `TM_API_KEY=… npm run mics` (`pipeline/open-mic-pipeline.mjs`; add venues to its allowlist).
- **Festivals:** 8 checked festivals are seeded in `src/festivals/main.jsx`. Run the finder prompt
  (`public/pipeline/festival-finder-prompt.md`, also copyable from the page) and paste its JSON
  into the page, or add entries to `SEED`.
- **Saved per browser only:** joke submissions, mic submissions and reports, imported festivals,
  game stats, Setup / Punch votes and Tweaks. Sharing these between visitors needs a backend.
- Stories, comics, reviews, the Joke of the Week winner and Bomb of the Week are placeholder copy
  from the design. Set of the Week (Rosebud Baker, Don't Tell Comedy) is real.

## Differences from the prototype

- Design-tool-only features were dropped: drag-and-drop image slots and the editor's prop panel
  (ticker / motion toggles on Home, TMDB key on Specials; these now use their defaults or `.env`).
- Game Night's Tweaks panel opens from a **Tweaks** button (bottom right) instead of the design
  tool, and remembers the choices.
- Two phone-width fixes that the prototype also needed: the Callbacks board no longer forces
  Game Night wider than the screen, and the Specials header nav scrolls instead of being clipped.
  Desktop rendering is unchanged.
