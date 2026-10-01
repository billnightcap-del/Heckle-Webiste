# Design reference

The original Claude Design handoff the site was built from. Reference only — nothing here is
built or deployed.

- `chats/` — the four design conversations, oldest first. This is where the requirements and
  decisions live (dark mode with #FFD400, the 3D mic landing, Set/Bomb of the Week, the Specials
  scoring, Comic Check, the seven games, why the Industry design system was dropped).
- `prototypes/` — the final prototype pages. The `.dc.html` files are templates for Claude
  Design's runtime (`support.js`, which loads React and Babel from unpkg.com).
  `.image-slots.state.json` holds the two hero photos placed in the design.
  `Game Night v2.html` is plain HTML and opens directly in a browser.
- `Heckle Business Summary.docx` — what the business is, who it's for, and how it sits in
  the market.

Page → prototype: `index.html` ← `Heckle.dc.html` + `heckle-mic.js`, `specials.html` ←
`Specials.dc.html`, `festivals.html` ← `Festivals.dc.html`, `open-mics.html` ←
`Open Mics.dc.html`, `games.html` ← `Game Night v2.html`.

To view a prototype, serve this folder (`npx serve design/prototypes` or
`python3 -m http.server -d design/prototypes`) and open the page. The `.dc.html` pages need
network access to unpkg.com.
