# parked.engine — the orchestration engine (interactive seats + mailbox polling)

**address:** 212 — coherence·adapts·snag
**parked:** 20260614, from a clerk-seat discussion (operator + clerk)
**status:** [park] — idea held, not built. graduates to a 210 frame when energized.

## the seed
one orchestrator agent launches all three seats at once; the seats talk to
each other inside the lattice; cycles ebb and flow while operator + orchestrator
monitor and intervene when necessary.

## what's already on the floor
- `op_launch(seat)` (server `/launch`) opens a seat console with its own git
  identity + system prompt. one agent launching all three = three POSTs.
  proven 20260614 (the stale-server "unknown seat" fix surfaced it).
- comms medium exists in principle: L6 — "mail is files at the mailbox address;
  chatter not freight; documents cross by commit." the lattice IS the channel.
- `/loop` skill: a candidate self-pace heartbeat primitive (not yet chosen).

## settled
- **interactive seats + mailbox polling.** seats stay human-watchable in their
  own consoles; they're driven by file-based mail, not by typing into the REPL.
- **the lattice is the control plane, not a separate bus.** orchestrator writes
  mail; each seat polls its mailbox, acts, commits, logs; orchestrator reads the
  floor to monitor.

## safety — GATING (built and tested before the engine ever runs a cycle)
- OSHA-level bar: this is precision production; the e-stop is not a later feature.
- **e-stop / instant de-energize.** must stop the whole system at once.
- **LOTO (lock-out / tag-out).** lockout = a tag file at a known address that each
  seat's poll-loop checks FIRST every cycle. tag present -> seat stands down, does
  not act. an all-stop that does NOT depend on killing processes mid-write — seats
  stand down on their own next poll.
- git identities are the "who"; killing seat consoles is hard de-energize; the tag
  file is the soft/safe stop.
- **principle: safety is built before the equipment is energized.**

## open gates (must close before a frame)
- **governor for concurrent writes to one floor.** three seats committing to main
  at once -> commit races. need turn-taking or path-partitioning. L3 (own paths
  only, never `git add -A`) handles file-level stomping; the commit race still
  needs a governor. inherit the bounded-autonomy already in the design (211's
  39-slot ceiling; "system stops, operator decides").
- **heartbeat / poll cadence.** what wakes an interactive seat to check its
  mailbox. `/loop` is a candidate, not chosen.
- **mailbox protocol.** address(es) for mail, message shape, read/ack/clear
  discipline.

## roles
- orchestrator: routes mail + governs (turn-taking, lockout).
- operator + orchestrator: monitor and intervene.
- seats: poll -> read mail -> act -> commit -> log, each in their own wing.

## why parked at 212 (not 100)
parked-idea convention points at 100, but that assumes a dream born in the mind
wing. this came from a clerk-seat systems discussion — its provenance is root 2,
and the parking lot lives in the warehouse (operator word, 20260614). the content
is system coherence + snag-handling (the e-stop) -> 212. graduates here into a
210 frame when it energizes.
