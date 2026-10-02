# Shared memory

Read by every seat at the start of every task. COS keeps it tidy. Any seat may update a
blocker's status. Only the operator makes decisions; seats record them.

## North star
Setlist subscribers, and week-2 return rate on games.
- Setlist subscribers: **1 active** (Beehiiv publication stats, all time, read 2026-10-02; likely
  a test sign-up, since the site isn't live).
- Week-2 return rate: **not measurable yet**. Needs the site live, GA4 returning-user data, and 14 days.

## Blockers, ranked (COS re-rank 2026-10-02, see reports/cos/2026-10-02-escalation-rule-and-rollup.md)
1. **Go live and measure:** GA4 (`G-8EP75MZ62L`) and the Beehiiv form are configured, but
   GitHub Pages is not enabled, so deploys fail (404) and nothing records. Owner: operator
   (setting) + CTO (verify after launch). Status: sent to Immediate questions 2026-10-02.
2. **Open mic feed:** listings are sample data until the scraping pipeline runs. Sample cards
   show fake "Confirmed Nd ago" badges; they must be labelled before go-live. Owner: CTO + CPO.
   Status: source decided 2026-10-01; not built.
3. **Backend:** mic reports, joke submissions, votes and leaderboards live in one visitor's
   browser. Also needed for mic-submission notifications. Owner: CTO. Status: surfaces mapped;
   waiting on operator answers.
4. **Festival fees and pay terms:** 0 of 8 verified (CPO, 2026-10-01). The page correctly shows
   "not published". Owner: CPO. Status: waiting on operator answers.
5. **Specials scores:** scores, views and rank movement are sample data. Owner: CCO + CTO.
   Status: rubric v1 done (reports/cco/2026-10-01-scoring-rubric.md); needs the CTO ledger.

## Site status
**Not live.** Deploy workflow runs on push to `main`, but both runs (2026-10-01) failed: Pages
isn't enabled in repo settings. Intended address: https://billnightcap-del.github.io/Heckle-Webiste/
**This repo is public.** Everything here, including reports and memory, is readable by anyone. Write accordingly: no private contact details, credentials, or anything said in confidence.

## Escalation rule (operator approved 2026-10-02)
**Interrupts, any hour, no quiet hours, as soon as known:** any spend at all; legal (takedown,
cease-and-desist, privacy request, a dispute from a festival, venue, host or comic); a broken
site (failed deploy, page down, broken form or analytics); a comic harmed by bad data on the
live site; a credential or private detail exposed in this repo.
**How:** one message per issue to the Claude Code session **"Heckle · Immediate questions"**
(`session_01DKuFyP3En9HSv19YfVLmVT`), via the remote `send_message` tool, as
WHAT / WHY NOW / YOU DO / sending seat. If you can't reach it, put it at the top of your chat
answer. Not via inboxes.
**Everything else waits for the Monday rollup.** Sign-up and submission notifications are not escalations.

## Decision log
| Date | Decision | Rules out |
| --- | --- | --- |
| 2026-10-01 | Run all six seats as named Claude Code sessions, with memory and reports in this repo. | Claude chat projects for now. |
| 2026-10-01 | Email list on Beehiiv; analytics on Google Analytics 4. | Kit, Buttondown, Plausible, Cloudflare Web Analytics. |
| 2026-10-01 | Make the repo public and host on GitHub Pages, accepting that reports and memory are public. | Cloudflare Pages with a private repo; splitting private files into a second repo. |
| 2026-10-01 | Weekly COS rollup and audit, Mondays, US Central. | Daily runs; per-seat scheduled runs. |
| 2026-10-01 | **Real data only.** A mic, score, fee or figure appears only if it comes from a public online source, with the link and the date it was checked. Otherwise it's shown as not available. Placeholder content still on the site must say "Sample". Fewer real listings beat many made-up ones. | Sample mic listings; generated specials scores, views, rankings and "on now"; invented figures on the home page. |
| 2026-10-01 | Specials badge = Heckle Score composite (aggregator critics, press reviews, audience ratings, YouTube engagement vs channel size, Heckle votes). Killed 90+, Bombed 60 and under. | The old 75/60 cut on critics % alone. |
| 2026-10-01 | Critic score from an existing aggregator; crowd score from Heckle visitor votes; one Killed/Solid/Bombed scale sitewide (replaces home 1–5 pips). | Building our own critic tally as the only critic source; outside crowd ratings as the crowd score. |
| 2026-10-01 | Mic listings come from scraping public sources across the web (Instagram/Facebook still excluded per CLAUDE.md); festival submissions scraped from festival sites and listing aggregators, by month. | Waiting on host sign-ups as the only mic source. |
| 2026-10-01 | The Setlist's "find a mic" item covers fewer than 10 cities until it expands (which cities: not decided yet). | All 25 cities in the newsletter at launch. |
| 2026-10-01 | Set of the Week will mostly come from Don't Tell Comedy or Comedy Cellar uploads; Bomb of the Week from major-platform sets that are drastically underperforming. | Picking sets only by taste. |
| 2026-10-01 | Operator wants a notification for every new Setlist sign-up and every mic submission, even when there's nothing to act on. | Weekly batch only. |
| 2026-10-01 | The Setlist goes out daily (7 days a week), 3 to 20 items per issue (replaces "five items"). At least one tool item every issue. | A fixed five-item format; weekdays only. |
| 2026-10-01 | Set / Bomb of the Week use whatever viewer data is publicly available (retention is private to channel owners). | Waiting for retention data. |
| 2026-10-02 | Escalation rule: interrupts go to a separate "Heckle · Immediate questions" session, no quiet hours; any spend and the listed legal cases interrupt. | Interrupts in seat chats only; quiet hours; a spend threshold. |
| 2026-10-02 | Blockers re-ranked: go live and measure, mic feed, backend, festival fees, specials scores. | The 2026-10-01 order (backend first). |
