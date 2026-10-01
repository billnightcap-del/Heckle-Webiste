# CPO · Stale-listing queue + festival fee flags — scoping · 2026-10-01

**Summary.** Before building the first assignment I read the mic and festival data in the repo.
The stale-listing queue can't be built against real listings yet: every mic on the Open Mic
Finder is generated sample data (invented venues, hosts and confirm dates). Drafting messages to
those "venues" would mean writing to places that don't exist. The festival half can run: 8
festivals are in the code, and none has a verified fee or pay term. I've asked the operator five
questions (below) and paused until they answer.

## What the repo holds (checked 2026-10-01, `main`)

### Mics — `src/open-mics/main.jsx`
- 25 cities, 9–15 mics each, built by `sample()` from a seeded random generator (lines 6–60).
- Venue names (`VENUES`), mic names, hosts (`HOSTS`, e.g. "@micwithmaya") and `confirmedAgo`
  (random 0–119 days) are all invented. Source labels ("Venue site", "Ticketmaster") are
  also randomly assigned. **All SAMPLE.**
- Real data would arrive as `public/open-mics.json` from `npm run mics` (CTO, blocker 2). Not
  present.
- Visitor "Still running" / "Closed" reports are stored in that visitor's browser only
  (`heckle-open-mic-reports`), so they can't feed a shared queue (blocker 1).
- Count of mics with no confirmation in 30+ days: **UNKNOWN** — there are no real listings.

### Festivals — `src/festivals/main.jsx`, `SEED` (lines 7–14)
| Festival | Dates (as in code) | Fee | Pays comics | Source in code |
| --- | --- | --- | --- | --- |
| Ha Ha Harvest Comedy Festival | 2026-10-02 → 10-04 | not set | not set | thejokebook.org/submissions |
| Mountain Fresh Comedy Festival | 2026-10-08 → 10-10 | not set | not set | mfcomedy.com |
| Atlantic City Comedy Festival | 2026-10-09 → 10-10 | not set | not set | boardwalkhall.com |
| Catskills Comedy Festival | 2026-10-16 → 10-18 | not set | not set | tccfest.org |
| Santa Cruz Comedy Festival | Oct 2026 (TBA) | not set | not set | montereybayevents.com |
| Laugh After Dark ComedyFest | 2026-10-26 → 10-28 | not set | not set | laughafterdarkcomedyfest.com |
| New York Comedy Festival | 2026-11-06 → 11-15 | not set | not set | variety.com (press, not own site) |
| Vail Comedy Festival | no date | not set | not set | mfcomedy.com |

All 8 are flagged: fee and pay term unverified. The page already renders "Fee not published" /
"Pay not published" for these, which is correct, so nothing on the site currently shows an
unverified fee. Two sourcing notes: Ha Ha Harvest is sourced to an aggregator, and NYCF to
Variety, not to the festivals' own pages.

## Questions put to the operator
1. Mics are all sample. Build the queue as a template + SOP to run when real data lands, give me
   a real list, or pick one pilot city for me to research by hand?
2. Who signs venue/host messages, and through what channel?
3. What counts as a confirmation that resets the 30-day clock?
4. Festivals: may I read each festival's own page and record a fee/pay term only where it's
   published there (with URL and date), or must a human confirm?
5. Festival scope: only the 8 in code, or a wider sweep?

## Unknown
- Number of real stale mics: UNKNOWN until real listings exist.
- Festival fees/pay terms for all 8: UNKNOWN until checked on each festival's own page.

## Escalation (added after reading the go-live decision in `memory/shared.md`)
The site is set to go public on GitHub Pages. The Open Mic Finder would then show ~300 invented
mics, each with a badge like "✓ Confirmed 3d ago" (`src/open-mics/main.jsx:101`), next to fake
venues in real neighbourhoods. A small page note says "Showing sample listings", but the per-card
confirm badge reads as fact. A comic who trusts one card drives to a bar that never had a mic.
Ask (to CTO, draft as PR): until real data lands, sample cards must not show a confirm date —
show "SAMPLE — not a real mic" on every card, or hide sample listings on the public build.
