# Frame — comms (W4) — f0 — 20260614-112648

Status **[float]** — LEAN/STUB by intent (operator word 20260614): stub the
shape now, fill rungs as we go, don't build it all at once. Frames the W4 season
group. Grounds on `sketch.comms.f1` (the re-read); this frame's job is to **draw
the line** — what builds now vs what is named-and-deferred — so deferred weight
doesn't leak back in.

## Scope

**IN (the live build):**
- **surfacing** — the operator can't see what landed (U-7 inbox / changed-since-last-look).
- **memo** — the instant "look at X" channel.

**DEFERRED (named here so it stays out until called):**
- freight / mail transport — mostly dissolved by one floor (`/move` is the medium now).
- protocol layer — gate-keys (PreToolUse deny, declared position, sign-to-override). Held for the sift.
- safety — e-stop / LOTO. Rides the engine when it energizes.
- fold-as-travel-record + new-type registration (`mail`/`memo`) — ride the naming rework.
- U-6 board / U-8 signing desk polish — split with W9 (client rebuild); minimal-functional only this season.

## The spine

The **mailbox is one address on the floor, on the books.** memo lands there,
U-7 reads it, the engine (later) polls it. Build the mailbox once; everything
hangs off it. No off-tree channel, ever.

## Chunks × slices × rungs (stubbed — fill as we go)

### Chunk 1 — memo (the instant channel)
- slice 1.1 — memo home address. **SETTLED: 222** (sign·hands·record — a signed message changing hands, recorded; operator word 20260614).
- slice 1.2 — post mechanism (server endpoint, words/pointers only, no cargo). rung: TBD.
- slice 1.3 — on-the-books recording (witness/ledger already most of this). rung: TBD.
- *(server-down behavior: stub — decide at rung time.)*

### Chunk 2 — surfacing (U-7 inbox / what's-new)
- slice 2.1 — "what changed since last look" read (git log IS the feed; the lattice just doesn't surface it). rung: TBD.
- slice 2.2 — minimal inbox surface (read new memos + new arrivals). rung: TBD.
- slice 2.3 — new-file highlight in the lattice. rung: TBD.
- *(polish vs W9 split: minimal-functional now.)*

### Chunk 3 — STUB: transport naming/discipline
- name what one floor already does (moved file = freight, traveling doc = mail, folds = travel record). mostly documentation, not build. fill if/when it earns it.

### Chunk 4 — STUB: instrument support
- comms view/badge, post-from-CLI helper (H-slot). fill when chunks 1–2 land.

## Definition of done (light — tighten as rungs fill)

- a memo can be posted and lands on the floor live, on the books.
- the operator can see what's new without asking a seat or reading raw `git log`.
- deferred items stay deferred (no scope leak); the frame names where each went.

## Related threads / lineage

- **`sketch.comms.f1` at 210** — the shape this frame builds from (canon; f0 is lineage).
- **`parked.engine.f0` at 212** — the engine; rides this comms triad as its nervous system.
- **`log.gate-keys.f0` at 222** — the protocol layer; held for the sift.
- **`frame.freight.f0` at 210** — **SUPERSEDED.** The worktree / pull-round / "main pulls"
  model, retired by W1 (one floor, no merge step). Kept as history; candidate for a
  supersession note at the operator's word — not deleted.
