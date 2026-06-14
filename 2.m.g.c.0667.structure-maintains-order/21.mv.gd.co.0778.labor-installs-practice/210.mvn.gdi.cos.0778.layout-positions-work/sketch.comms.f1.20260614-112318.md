# Sketch — comms — f1 — 20260614-112318

Folds from f0 (20260610-100408). f0 stays as lineage. This fold integrates the
20260614 review (operator + clerk): the triad re-read off the operator's model,
the stale-freight correction, the one-floor-dissolves-most realization, and the
related threads pulled in by pointer. Status still **[float]** — shape agreed in
discussion, wants a frame before any build. Most of it **defers**; this fold
captures the shape and the friction so neither is lost.

## The model (re-read 20260614, operator's framing)

Four channels — three outward (between agents), one inward (the agent with
itself and the system):

| channel | direction | carries | medium |
|---------|-----------|---------|--------|
| **freight** | outward | the *cargo* — work-product files that travel location to location (an html, a multi-phase project moving across wings/addresses as it matures) | the move itself (`/move` on the one floor); the commit records that it happened |
| **mail** | outward | cross-wing correspondence + documents that travel; **the fold-trail is the travel record** — the doc carries its own provenance | a typed document traveling with/as a delivery |
| **memo** | outward | words and pointers only, never cargo — the instant "look at X" | POST through the running server → lands on main's floor live (~2.5s in the lattice) |
| **paperwork** | **inward** | the system staying coherent with itself: multi-layered confirmation + navigation so things aren't lost, get revisited until safe to pass, and cycle (purge / fold / evolve / seed) until they earn the move | the standing books — manifest (201), logs (222), ledger |

Relay (operator passing messages by hand) stays the informal fifth channel —
human, and a drift-check in itself. Not protocolized on purpose.

## What changed from f0 — the friction this review surfaced

1. **Freight was mis-defined.** f0 set freight's medium as *"git: commit → pull
   round → pull at session start."* That is the **multi-worktree model, retired
   by W1.** Per L1 — one floor, "commits are history, not transport; there is no
   merge step." Freight is a file moving address-to-address; the commit just
   records it. f0's definition is **stale**; this fold corrects it.

2. **One floor dissolved most of the problem the sketch was built to solve.** f0
   assumed isolated wings (worktrees, pull rounds, "the one sanctioned write into
   main from elsewhere"). The three seats now share main, so:
   - freight "travel across branches" = a `/move` between addresses; no isolation gap.
   - mail "crossing" = a doc landing at another wing's address; no transport lag.
   - memo-via-server's "write into main from elsewhere" — there is no elsewhere now.

3. **What genuinely remains** once transport is mostly free:
   - **signaling** — the instant "look at X" (memo earns its place).
   - **surfacing** — *who looks when*; the operator can't see what's new
     (U-7 inbox / changed-since-last-look — the live pain).
   - **the record of correspondence** — who said what to whom, on the books
     (the witness hook + ledger mostly do this already).
   - **the engine's control plane** — orchestrator ↔ seat (deferred with the engine).

## Three layers (the frame's first job is to separate them)

- **transport** — freight / mail / memo (above). Mostly settled in shape; mostly
  dissolved in need by one floor.
- **protocol** — permission / flow / safety: keys, declared position,
  sign-to-override, e-stop / LOTO. **Out of W4 scope** — held for a dream/sift
  pass; see related threads.
- **surfaces** — U-6 board / U-7 inbox / U-8 signing desk. The live W4 value is
  here (surfacing).

## The spine: the mailbox is one thing — an address on the floor

The engine's "mailbox polling," memo/mail's landing spot, U-7's inbox, and the
lockout tag are all the same object: **a known address where messages land and a
reader polls.** f0 rule 3 already settled it is **on main's books, not off-tree**
("a channel reconcile can't see is where drift hides"). Define the mailbox once;
freight/mail/memo are how things arrive, U-7 is how you read, the engine is who
polls. The comms triad is therefore also the engine's nervous system — no
separate bus, ever.

## Leans on deferred work (shape captured, mechanism waits)

- **fold-as-travel-record** rides on *fold-as-identity* — exactly what the naming
  rework (deferred to the fresh-start) settles. Shape is right; mechanism waits.
- new types `mail` / `memo` registration is blocked on the same rework
  (type-index extraction). Interim: register provisional on the floor (201 has a
  claim) so W4 isn't blocked.

## The constitution (from f0 — still stands)

1. Memos carry no cargo. A memo that ships work product is pushing with extra steps.
2. Deliveries deserve packing slips. (Practice evidence: TS handoff 1 arrived with
   a report; batch 2 didn't — "it should all be there" was 33-of-46. Mail makes
   receiving-is-not-endorsing cheap.)
3. All agent-to-agent communication is on the books at main. The operator can
   stand in the lattice and read every word — drift has nowhere to hide. (The
   off-tree-channel concern is now moot — one floor — but the principle holds:
   everything on the books.)
4. Each channel has a medium. The CLI clipboard is not a medium.

## Open floats (frame-time decisions)

- memo home: 222 (signed message changing hands, recorded) vs 200 (an arrival).
  **lean 222.**
- mail: not a new location — a typed doc traveling with its delivery, landing at
  200. needs only the type.
- threading: do replies fold or append? (lean: a thread appends within one file
  until consolidation earns a fold.)
- server-down memo behavior: queue-as-file-and-mail-on-next-freight, or wait?
  undecided.
- instrument support: a comms view/badge, post-from-CLI helper — H-slot when framed.

## Future — the operator's console (catch, not build; operator word 20260614)

With the board live + `/loop` as the heartbeat, an operator control surface comes
into reach. Captured as direction, not scheduled:

- **loop toggles + e-stop (UI).** Physical-style toggles to turn each agent's
  poll-loop on/off, and an **e-stop that halts all active loops at once.** The
  orchestration control panel — home is `parked.engine` (212); the e-stop is its
  LOTO, and the board is the rail (a `@all HALT` memo / tag each loop checks FIRST,
  so seats stand down on their own next poll — no killing processes mid-write).
- **clerk routes the comms.** The clerk works the mail-room: @mention dispatch,
  channel sorting, who-gets-what.
- **operator works the warehouse view.** With routing + loops handled, the operator
  moves files via V2 (`/move`, `/reveal`) and acts as an operator, not a typist.
- **forms & permits over comms.** The board carries not just messages but forms and
  permits — a permit is a signed key (ties to `log.gate-keys` at 222 + the U-8
  signing desk). "Somehow" = a memo with a type/schema + a sign.
- **per-channel + group chat (Slack model).** Per-agent DM channels + the group
  board, all **server-written and floor-visible** — no off-books channels (rule 3).

Homes when it graduates: control panel + e-stop → `parked.engine` (212);
routing + forms → here; permits/signing → `gate-keys` (222) + U-8.

**Reliability note (this session):** the witness hook missed 1 of keeper's 60
field writes (caught by reconcile, registered by hand). ~1.7% silent miss under
burst — fine with a clerk sweep, but **under autonomous loops the witness needs
hardening** (atomic append / retry) before the books can be trusted unattended.
A real precondition for energizing the engine.

## Related threads (the unit, held by pointer — not absorbed)

- **`parked.engine.f0` at 212** (coherence·adapts·snag) — the orchestration engine:
  interactive seats + mailbox polling, lattice-as-control-plane, e-stop / LOTO.
  Rides on this comms triad as its nervous system; energizes later.
- **`log.gate-keys.f0` at 222** (sign·hands·record) — the movement-and-permission
  protocol seed: PreToolUse *deny* gates, declared position, sign-to-override,
  graded by seat. The **protocol layer** above. Held for the sift; a record, stays
  put.

## W4 scope, as this fold reads it

**transport + minimal surfaces, mailbox-as-spine.** The live build is the
**surfacing gap** (U-7 inbox / what's-new) plus **memo** as the instant channel.
transport is mostly naming-and-disciplining what one floor already does; protocol,
safety, and fold-as-travel-record are named-adjacent and **deferred**. Frame
decides the surface split with W9 (the client rebuild).
