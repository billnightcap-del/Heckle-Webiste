# Heckle agent charter

Six standing AI seats that run Heckle's operations alongside one human operator, from the
*Heckle Super Agent Charter*. Each seat drafts, specs and flags. Decisions, publishing, sending
and spending stay human.

- `universal.md`: the shared rules, identical for every seat. It opens with the
  real-vs-sample rule and includes the never-do list and the ten operating rules.
- `seats/`: one block per seat. Each has the job, mandate, what it owns, what stays human,
  first assignment, how you'll know it's working, and personality.
- `../.claude/agents/`: the same six seats as Claude Code subagents, for work inside this repo.

| Build | Seat | Covers | Why this order |
| --- | --- | --- | --- |
| 01 | **CTO**, Chief Technology Officer (Tech) | Feed, backend, analytics, REAL/SAMPLE register | Nothing else is real until the feed runs and the backend exists. |
| 02 | **CAO**, Chief Audience Officer (Audience) | The Setlist, sign-ups, search, social clips | The newsletter is the only asset that compounds. |
| 03 | **CCO**, Chief Content Officer (Editorial) | Editorial, Originals, specials index | The index is worth nothing if the scores aren't. |
| 04 | **CPO**, Chief Product Officer (Product) | Mic Finder, Festival Tracker, Game Night | Freshness is the product for comics. |
| 05 | **CRO**, Chief Revenue Officer (Revenue) | Ads, sponsors, listings, paid tier | Sell only once the numbers are provable. |
| 06 | **COS**, Chief of Staff | Weekly rollup, blockers, escalation | Ties the five together into one weekly view. |

## Using the seats

**In Claude chat (one Claude project per seat).** Create six projects named by seat. In each one,
paste the text from `universal.md` at the top of the project instructions, then the matching file
from `seats/` underneath. Give each its first assignment, which is the last item in its block.
Start with CTO, then CAO.

**In Claude Code (this repo).** Every session loads the universal block through `CLAUDE.md`.
To work as a seat, ask for it by name, e.g. "use the cto agent to draft the backend spec".
The seat returns a draft, and the session decides what to do with it.

**Still to fill in:** the universal block says `Run by [your name]`. Replace it in
`universal.md` with the operator's name. The seat blocks list skills (`/fixspec`,
`/feed-report`, `/setlist`, `/clip-brief`, `/review`, `/original-outline`, `/style-check`,
`/mic-audit`, `/festival-check`, `/media-kit`, `/sponsor-outreach`, `/rollup`). The charter
names them but doesn't define them. Rule 9 says to write one once a task has been done the
same way twice.

## Human decisions an agent can't clear

- **Sample data must never be reported as fact.** Specials scores, view counts, rankings, mic
  confirm dates and festival fees are all placeholder today. Label everything in the register
  the CTO seat owns.
- **Never invent a review, score, quote, listing or submission.** If something isn't real, mark
  it empty.
- **A wrong festival fee costs a comic real money.** UNKNOWN is always the right answer over a
  guess.
- **Featured listings conflict with the Comic check.** If festivals can pay for placement, the
  check stops being trusted. Decide the rule, and publish it, before selling the first one.
- **Right now nothing is shared between visitors.** Reports, jokes and leaderboards live in one
  browser. The site looks social and isn't. That's the backend blocker.
- **Write the escalation rule down.** Money, legal, a broken site, or a comic harmed by bad data
  reaches the operator. Everything else waits for the weekly rollup.

## Pairing seats with people

| Human role | Seat | What the agent hands them | Hire when |
| --- | --- | --- | --- |
| Developer | CTO | Fix specs, backend spec, feed pipeline, priority order | Immediately. The backend is the top blocker. |
| Freelance comedy writer/critic | CCO | Assignments, angles, style sheet, Originals calendar | When The Setlist starts slipping days. |
| Community / mic verifier | CPO | Stale-listing queue, confirmation scripts, city priority list | Once the feed runs and listings need human confirmation. |
| Ad sales / sponsorship rep | CRO | Media kit, audience numbers, sponsor list, outreach drafts | Only after the newsletter has real, provable subscriber numbers. |
| Social/clip editor | CAO | Clip briefs, hooks, posting calendar | Once one format clearly drives sign-ups. |
| Accountant | COS | Organized real records, cost-per-tool list | Before the first revenue arrives, not after. |

## Weekly upkeep

Every seat runs the same weekly scan. It looks for what shipped this week that replaces a tool
you pay for, does a job a human does now, or makes the agent cheaper. Each finding gets three
lines: what, why us, and keep/skip/watch.
