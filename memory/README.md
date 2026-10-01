# Memory

The seats' shared memory. Sessions don't remember each other, so this is where continuity lives.
See `agents/PROTOCOL.md`.

- `shared.md`: north star, ranked blockers, site status, escalation rule, decision log.
- `<seat>.md`: each seat's current state, open items, what it's waiting on, and last run.
- `inbox/<seat>.md`: handoffs from other seats.
