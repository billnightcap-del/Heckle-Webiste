# COS · Escalation rule + weekly rollup #1 · 2026-10-02

**Summary.** The site is not live. GitHub Pages was never enabled, so both deploys on
2026-10-01 failed at the publish step. The build itself passed. That came first: it went to the
operator through the new **Heckle · Immediate questions** channel, along with two pieces of
sample data that go public the moment Pages is switched on: fake mic confirm dates, and an
invented "41M views". The escalation rule below uses the operator's answers from 2026-10-02.
The five blockers are re-ranked, with "go live and measure" on top. All six seats started their
first assignments on 2026-10-01. Five are waiting on operator answers, about 23 questions in
all. CCO is the only seat with a finished deliverable. The operator's answers are the
bottleneck now, not the seats' work.

## 1. Escalation rule (operator answers 2026-10-02)

**Interrupts the operator.** As soon as a seat knows, at any hour; there are no quiet hours.
- **Money:** any spend at all, any charge, a free trial about to convert, any invoice or payment request.
- **Legal:** a takedown or DMCA notice, a cease-and-desist, a privacy or data request, or a
  dispute from a festival, venue, host or comic over a listing or coverage.
- **Broken site:** a failed deploy, a page down, an error that breaks a page, a broken sign-up form or analytics.
- **A comic harmed by bad data:** a wrong or fake mic listing, confirm date, festival fee or pay
  term on the live site.
- Also: a credential or private detail exposed in this public repo.

**How.** One message per issue, sent to the Claude Code session titled
**"Heckle · Immediate questions"** (session `session_01DKuFyP3En9HSv19YfVLmVT`) with the remote
`send_message` tool. Format: WHAT / WHY NOW / YOU DO / which seat sent it. If the seat can't
reach that session, the item goes at the top of its chat answer. Don't also file it in an inbox.

**Waits for the Monday rollup.** Everything else: new ideas, questions that don't block work,
data gaps that are already labelled, and progress.

**Not an interrupt:** the operator asked to be notified of every new Setlist sign-up and mic
submission (decision 2026-10-01). Those are notifications through Beehiiv or the CTO's form path,
not escalations, and they don't go to the Immediate questions channel.

## 2. Blockers, re-ranked

Re-ranked because analytics and email were set up on 2026-10-01 but can't record anything until
the site is live, and because data comics act on comes before everything else.

| # | Blocker | Owner | What moved (2026-10-01 → 10-02) |
| --- | --- | --- | --- |
| 1 | **Go live and measure** (was #5) | Operator (setting), CTO (verify) | GA4 and Beehiiv are configured. Deploys #1 and #2 failed with a 404: Pages isn't enabled (Actions log, run 36916064325). Sent to Immediate questions 2026-10-02. |
| 2 | **Open mic feed** (was #2) | CTO, CPO | Operator decided the source: scrape public sources, excluding Instagram and Facebook (decision log 2026-10-01). Every listing is still SAMPLE. CPO found fake "✓ Confirmed Nd ago" badges on sample cards (`src/open-mics/main.jsx:102`); the fix ask is in CTO's inbox. |
| 3 | **Backend** (was #1) | CTO | CTO mapped 6 shared-state surfaces kept in browser storage. The operator wants a notification for every sign-up and mic submission, and mic submissions need this. CTO is waiting on 6 operator answers. |
| 4 | **Festival fees and pay terms** (was #4) | CPO | CPO audited all 8 festivals in the code: none has a verified fee or pay term, and the page correctly shows "not published". No comic is harmed today. CPO is waiting on 5 operator answers. |
| 5 | **Specials scores** (was #3) | CCO, CTO | Operator decided the Heckle Score composite (Killed 90+, Bombed ≤60). CCO's rubric v1 is done and all 139 specials are flagged SAMPLE. CTO has the ledger and licence-check ask. |

**North star.** Setlist subscribers: **1 active** (Beehiiv publication stats, all time, read
2026-10-02, source "website: direct"). It's most likely a test sign-up, because the site isn't
live. Week-2 return rate on games: **not measurable yet**. It needs the site live with GA4
returning-user data plus 14 days of traffic.

## 3. Rollup: shipped / blocked / next

| Seat | Shipped | Blocked on | Next |
| --- | --- | --- | --- |
| CTO | Survey of browser-storage surfaces (in memory) | 6 operator questions; 3 inbox asks open | Backend spec, REAL/SAMPLE register |
| CAO | Operator answers recorded | 4 operator questions | 5 Setlist issues, sign-up placement audit |
| CCO | [Scoring rubric v1](../cco/2026-10-01-scoring-rubric.md) | Operator: are hand-entered RT scores OK? CTO: ledger | Fact-check the 139 titles and years; Set/Bomb selection rule (in its inbox) |
| CPO | [Stale-queue scoping](../cpo/2026-10-01-stale-queue-scoping.md) | 5 operator questions; real mic feed | Festival fee/pay flags |
| CRO | [First-assignment questions](../cro/2026-10-01-first-assignment-questions.md) | 7 operator questions | Smallest honest 60-day sale |
| COS | This report; Immediate questions channel | Operator: build hours (Q5) | Monday rollup 2026-10-05 |

## 4. What the operator ships (answer to "what would I be shipping?")

The seats only draft. Some things only the operator can do, and every blocker is waiting on at
least one of them. This week:
1. **Turn on Pages** (Settings → Pages → Source: GitHub Actions) and re-run the deploy. About 10 minutes. Ideally do it after #2.
2. **Merge the two sample-data fix PRs** once they exist: SAMPLE labels on mic confirm badges (CTO), and "41M views" (CCO).
3. **Answer the seats' open questions:** CTO 6, CPO 5, CRO 7, CAO 4, CCO 1. That's about 23, and it's the biggest unblock available.
4. **Rename the Beehiiv publication**, which is currently "Brian's Newsletter", to The Setlist. It's a setting.

Calendar defense, proposed: one 90-minute block on Mondays after the rollup for answers and
merges, plus one 60-minute block mid-week for merges. The hours are the operator's call. Nothing
gets booked without approval.

## 5. Audit (protocol §4)

- **Ran:** all five seats ran on 2026-10-01, and each *Last run* is current. CCO, CPO and CRO
  saved reports. CTO and CAO have only asked questions so far; that's within protocol, because
  the work is blocked on answers.
- **Rules:** no violations found. CPO and CCO each flagged sample data correctly instead of
  using it. One stale line in `memory/shared.md` said there was "no email list and no
  analytics"; COS fixed it today.
- **Communication:** 4 open inbox items, all from 2026-10-01, none older than 7 days, all sent
  to the right seat (CTO ×3, CCO ×1). Gap: the 41M-views fix has no owner yet. CCO says it will
  draft a PR "if the operator asks", so it's on the operator's ship list above.
- **Drift:** none. Nothing heads toward general comedy news.
- **Verdicts:** CTO on track, but **needs attention** on its inbox: 3 asks, one of them
  pre-launch-critical. CAO on track. CCO on track. CPO on track. CRO on track: blocked, but it
  correctly refused to pitch with no audience number.

## Unknown

- Whether the 1 Beehiiv subscriber is a real person: UNKNOWN. Beehiiv's subscriber list would show it, but COS didn't read it (that's private data).
- The operator's weekly build hours: UNKNOWN until they answer.

## What COS is still missing

Read access to the operator's calendar, to defend the build blocks against real conflicts. The
Google Calendar connector is configured but wasn't used this run. And an answer on build hours.
