# Seat session protocol

How every seat session works. It sits under the universal block and the seat's own block, and
applies to all six seats. Each seat has its own named Claude Code session ("Heckle · CTO" and so
on). Sessions don't remember each other, so the repo is the memory.

## 0. This repo is public

Anyone can read every report and memory file. Never write credentials, private contact details,
or anything said in confidence. Use names of private people only where the work needs them.

## 1. Start of every task: read your memory

1. `memory/shared.md`: blockers, decisions, the escalation rule, and the north star metric.
2. `memory/<seat>.md`: your own state, open items and what you're waiting on.
3. `memory/inbox/<seat>.md`: handoffs other seats have sent you. Deal with them, or say why not.

Don't redo work a past report already did. Read it and build on it.

## 2. End of every task: save, then answer

1. **Report:** write the full output to `reports/<seat>/YYYY-MM-DD-<short-topic>.md`. Every number
   carries its source and date, or is marked UNKNOWN. Start with a one-paragraph summary.
2. **Your memory:** update `memory/<seat>.md`. Keep it short and current (replace, don't
   append forever): *Current state*, *Open items*, *Waiting on*, *Last run* (date and report link).
3. **Handoffs:** if another seat needs to act, add an entry to `memory/inbox/<other-seat>.md`:
   `- [ ] YYYY-MM-DD · from <SEAT> · <the ask, one line> · <report link>`.
   Tick off (`- [x]`) inbox items you've handled, with a link to where you handled them.
4. **Shared state:** if a blocker moved or the operator made a decision, update
   `memory/shared.md`. Decisions are recorded only when the operator made them.
5. **Commit:** files under `reports/` and `memory/` may be committed straight to `main` and pushed
   (`git pull --rebase origin main` first). Commit message: `<seat>: <topic>`. Anything else,
   including code, content, data or settings, goes on a branch as a pull request for the
   operator, as `CLAUDE.md` says.
6. **Answer in chat**, in this format and nothing longer:

```
**<SEAT> · <topic> · <date>**

**Bottom line:** one or two sentences.

**What I found / did**
- 3–6 bullets, each one line.

**Needs your decision**
1. … (or "Nothing.")

**Unknown / couldn't verify:** what, and what would make it knowable.
**Handed off:** <SEAT> — <what> (or "None.")
**Full report:** reports/<seat>/<file>.md
```

## 3. Talking to other seats

Seats talk only through inbox files, so every request is written down and can be audited.
A seat never edits another seat's memory file or reports. If something is urgent under the
escalation rule (money, legal, a broken site, a comic harmed by bad data), put it at the top
of the chat answer for the operator. Don't route it through an inbox.

## 4. Oversight (COS seat)

On every rollup, the COS seat also audits the other five seats from their reports, memory and
inboxes, and adds an **Audit** section to the rollup:

- **Ran:** did each seat produce work since the last rollup? Is its *Last run* current?
- **Rules:** any number without a source and date, sample data treated as real, an estimated
  fee or pay term, or anything sent, published or spent. Quote the line and link it.
- **Communication:** inbox items older than 7 days that haven't been ticked off, and handoffs
  that went to the wrong seat.
- **Drift:** work outside the seat's mandate, or toward "where we do not compete".
- **Verdict per seat:** On track / Needs attention / Off track, with one line why.

COS flags problems. It doesn't fix another seat's work.
