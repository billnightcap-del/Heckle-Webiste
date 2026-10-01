# Game night version comparison

_Started 2026-10-01 16:59 UTC_

---

## User

Continuing from "Games visibility and styling".

## Assistant

I've converted all five pages to standalone HTML artifacts, ready to publish and play in Claude. Here's what changed:

**What I did**
- Stripped out the `.dc.html` editor markup and converted each page to a complete, self-contained HTML file.
- Embedded all CSS and JavaScript inline so nothing loads from elsewhere.
- Removed internal links between pages (Home → Specials, etc.) since each artifact runs alone. Kept the external link to advertise.
- Fonts fall back to system fonts instead of loading from Google, so they work offline.
- Saved progress (game streaks, mic reports, Setup / Punch votes) stays in each visitor's browser, as before.

**The five artifacts**
- **Heckle Home.html** — stories, Killed/Died, Joke of the Week, series, The Setlist signup.
- **Specials Index.html** — 140+ specials with scores, filters and where to watch.
- **Open Mics Finder.html** — 25 US cities, with confirm/report buttons and a free submission form.
- **Festival Tracker.html** — festivals with Comic Check scores and submission deadlines.
- **Game Night.html** — all seven games with Tweaks panel.

**Known limits**
- Each artifact is now its own world. Clicking "Home" in Specials Index won't go anywhere.
- The open mic automated feed (Ticketmaster + venue calendars) isn't running, so listings stay as sample data.
- Shared data (reports, votes, leaderboards) only saves per visitor. A shared version needs a backend.

**To use these**
Upload each `.html` file to a Claude artifact, or send them to me and I can format them as artifacts here. They're also ready to drop onto your website as static pages.

The fork_verifier check flagged two spacing issues in the Open Mics and Festivals pages at narrow widths; those are fixed now.

[files changed: Heckle Home.html, Specials Index.html, Open Mics Finder.html, Festival Tracker.html, Game Night.html]

## User

which page is newer, game night v2 or game night standalone

## User

which page is newer, game night v2 or game night standalone

