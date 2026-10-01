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
   Status: not started.
4. **Festival fees and pay terms:** mostly unverified. Owner: CPO. Status: not started.
5. **Analytics and email list:** code is ready (GA4 and Beehiiv), switched off until configured.
   Beehiiv publication exists (hecklecomedy.beehiiv.com, currently named "Brian's Newsletter")
   with an inline form for the home page, styled but not yet published. Owner: CTO (analytics) +
   CAO (email). Status: waiting on hosting, the operator publishing the Beehiiv form, and a GA4
   property.

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
