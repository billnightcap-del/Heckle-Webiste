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
5. **Analytics and email list:** neither exists, so nothing can be measured or sold. Owner: CTO
   (analytics) + CAO (email). Status: waiting on the operator to pick providers and hosting.

## Site status
Not deployed yet. No public URL. Code is on `main` in this repo.

## Escalation rule
Not written yet; COS drafts it, and the operator approves it. Until then: money, legal, a broken
site, or a comic harmed by bad data goes to the operator immediately. Everything else waits for
the weekly rollup.

## Decision log
| Date | Decision | Rules out |
| --- | --- | --- |
| 2026-10-01 | Run all six seats as named Claude Code sessions, with memory and reports in this repo. | Claude chat projects for now. |
