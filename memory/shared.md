# Shared memory

Read by every seat at the start of every task. COS keeps it tidy. Any seat may update a
blocker's status. Only the operator makes decisions; seats record them.

## North star
Setlist subscribers, and week-2 return rate on games. **Status: not measurable yet.** There's
no email list and no analytics on the site (see blockers 4 and 5).

## Blockers, ranked
1. **Backend:** mic reports, joke submissions, votes and leaderboards live in one visitor's
   browser. Nothing is shared between visitors. Owner: CTO. Status: not started.
2. **Open mic feed:** listings are sample data until the pipeline runs. Owner: CTO. Status: not started.
3. **Specials scores:** scores, views and rank movement are sample data. Owner: CTO + CCO.
   Status: rubric drafted by CCO 2026-10-01 (reports/cco/2026-10-01-scoring-rubric.md); all 139 index entries + 6 home "Ranked" entries still sample. Needs the CTO ledger/pipeline.
4. **Festival fees and pay terms:** mostly unverified. Owner: CPO. Status: not started.
5. **Analytics and email list:** set up 2026-10-01. GA4 (`G-8EP75MZ62L`) and the Beehiiv form
   on the home page (hecklecomedy.beehiiv.com) are configured and go live with the site.
   Owner: CTO (analytics) + CAO (email). Status: done once the site is published; real numbers
   start accruing from launch day.

## Site status
Published by GitHub Pages from `main` once the repo is public: https://billnightcap-del.github.io/Heckle-Webiste/
**This repo is public.** Everything here, including reports and memory, is readable by anyone. Write accordingly: no private contact details, credentials, or anything said in confidence.

## Escalation rule
Not written yet; COS drafts it, and the operator approves it. Until then: money, legal, a broken
site, or a comic harmed by bad data goes to the operator immediately. Everything else waits for
the weekly rollup.

## Decision log
| Date | Decision | Rules out |
| --- | --- | --- |
| 2026-10-01 | Run all six seats as named Claude Code sessions, with memory and reports in this repo. | Claude chat projects for now. |
| 2026-10-01 | Email list on Beehiiv; analytics on Google Analytics 4. | Kit, Buttondown, Plausible, Cloudflare Web Analytics. |
| 2026-10-01 | Make the repo public and host on GitHub Pages, accepting that reports and memory are public. | Cloudflare Pages with a private repo; splitting private files into a second repo. |
| 2026-10-01 | Weekly COS rollup and audit, Mondays, US Central. | Daily runs; per-seat scheduled runs. |
| 2026-10-01 | Specials badge = Heckle Score composite (aggregator critics, press reviews, audience ratings, YouTube engagement vs channel size, Heckle votes). Killed 90+, Bombed 60 and under. | The old 75/60 cut on critics % alone. |
| 2026-10-01 | Critic score from an existing aggregator; crowd score from Heckle visitor votes; one Killed/Solid/Bombed scale sitewide (replaces home 1–5 pips). | Building our own critic tally as the only critic source; outside crowd ratings as the crowd score. |
| 2026-10-01 | Mic listings come from scraping public sources across the web (Instagram/Facebook still excluded per CLAUDE.md); festival submissions scraped from festival sites and listing aggregators, by month. | Waiting on host sign-ups as the only mic source. |
| 2026-10-01 | The Setlist's "find a mic" item covers fewer than 10 cities until it expands (which cities: not decided yet). | All 25 cities in the newsletter at launch. |
| 2026-10-01 | Set of the Week will mostly come from Don't Tell Comedy or Comedy Cellar uploads; Bomb of the Week from major-platform sets that are drastically underperforming. | Picking sets only by taste. |
| 2026-10-01 | Operator wants a notification for every new Setlist sign-up and every mic submission, even when there's nothing to act on. | Weekly batch only. |
