# Heckle — notes for Claude

Heckle is a comedy-culture site: editorial (stand-up, specials, late night), tools for working
comics (open mics, festivals), and games. Static multi-page site, no backend.
`README.md` covers setup, deploying and data sources; `design/` holds the original designs and
the conversations that produced them — check `design/chats/` before changing what a page does.

## Agent charter

Heckle runs on six AI seats (CTO, CAO, CCO, CPO, CRO, Chief of Staff) under one operator. See
`agents/README.md`. The universal block below binds every session in this repo. The seats are
available as subagents in `.claude/agents/`.

For code work, "draft, never act" means: work on a branch and hand changes over as a pull
request. Don't merge to `main`, deploy, change hosting or account settings, add a paid service,
or send anything outside the repo unless the operator asks for that specific action.
One exception: seat sessions commit their own `reports/` and `memory/` files straight to `main`
(see `agents/PROTOCOL.md`). That is record-keeping, not publishing.

Each seat runs as its own named session ("Heckle · CTO" and so on) and follows
`agents/PROTOCOL.md`: read memory first, save a dated report, update memory, hand off through
inboxes, and answer in the short chat format.

@agents/universal.md

@agents/PROTOCOL.md

## Commands

- `npm run dev` — dev server on :5173 (all five pages)
- `npm run build` — must pass before committing; output in `dist/`
- `npm run preview` — serve the build
- `npm run mics` — open-mic data pipeline (needs `TM_API_KEY`); writes `public/open-mics.json`

There is no test suite or linter. To verify a change, build, then load the affected page in a
browser (Playwright/Chromium works) and check the console for errors and the layout at 1440px
and 390px wide. Don't leave a `public/open-mics.json` behind from a test run: its presence
switches the Open Mics page from sample listings to "live" data.

## Layout

| Page | Entry | Code |
| --- | --- | --- |
| Home | `index.html` | `src/home/` |
| Specials Index | `specials.html` | `src/specials/` |
| Festival Tracker | `festivals.html` | `src/festivals/` |
| Open Mic Finder | `open-mics.html` | `src/open-mics/` |
| Game Night | `games.html` | `src/games/` (no React) |

React pages are split in two:
- `template.jsx` — markup with inline styles, generated from the design prototype, so it
  matches the design exactly. `render(v)` reads everything from the view model `v`.
  `template.hover.css` holds hover states as `.xx-N:hover { … !important }` classes.
  Edit these by hand now; keep the inline-style approach and existing values unless the change
  is a deliberate design change.
- `main.jsx` — data constants at the top, then a class component whose `renderVals()` builds `v`
  (computed values and event handlers). `view()` in `src/shared/mount.jsx` layers `v` over the
  instance, so templates can also read refs like `v.tickerRef`.

Shared: `src/shared/HeckleMic.jsx` (three.js mic, lazy-loaded; three is pinned to 0.160.0),
`ImageSlot.jsx` (maps slot ids to files in `public/images/`; unmapped slots show a placeholder),
`base.css` (document-level styles).

Game Night: `src/games/shared.js` (DOM helpers, `store` for localStorage under `heckle-games:`,
keyboard routing to the active game, jump-list status), one module per game, `tweaks.js`
(house lights / energy / room size), `games.css` (CSS variables; Tweaks themes override them on
`body[data-mood|energy|room]`). Each game module opens with a labelled data block
(`PUNCHLINE_WORDS`, `CALLBACKS_PUZZLES`, …) — add puzzles there, following the format notes in
the block's comment.

## Brand

Black `#0a0a0a`, paper `#f5f5f2`, one accent `#ffd400`; muted greys `#a3a39e`, `#7a7a76`.
Archivo (heavy, condensed via `font-stretch: 62%–75%`, uppercase) for headings and labels,
Newsreader serif for body and features. Square corners. Voice: a knowing insider — "Killed",
"Bombed", "Crickets.", "Tough room".

## Content rules

- **Real data only (operator rule, 2026-10-01).** Mics, scores, fees, view counts and other figures
  appear only when they come from a public online source, with its link and the date it was
  checked. Otherwise show "not available". Any placeholder still on the site must be labelled
  "Sample". Never fill gaps with generated or estimated values.

- Specials: titles, comics, years and networks are real; scores, views, rank movement and
  "on now" are generated sample data and are labelled as such on the page. Keep that label
  until real data replaces them. Don't present invented data as real anywhere.
- Most stories, comics, reviews and the Joke of the Week winner are placeholder copy. Set of
  the Week (Rosebud Baker, Don't Tell Comedy) is real.
- Submissions, reports, votes and game stats are saved per browser (localStorage) — there is
  no shared backend.
- Never scrape Instagram or Facebook for open mics (their terms prohibit it); mics from there
  come in through the submit form.
- `VITE_TMDB_KEY` goes in `.env` (git-ignored), never in source.
