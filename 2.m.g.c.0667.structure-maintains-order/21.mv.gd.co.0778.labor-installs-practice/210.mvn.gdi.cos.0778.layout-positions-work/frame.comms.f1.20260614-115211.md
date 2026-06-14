# Frame — comms (W4) — f1 — 20260614-115211

Status **[float]** — LEAN/STUB by intent: stub the shape, fill rungs as we go.
Folds from f0 (20260614-112648); f0 stays as lineage. Grounds on `sketch.comms.f1`.

## The divergence from f0 (why this fold)

f0 framed memo as **per-pair files** (`memo.{from}-to-{to}.fN`) with from→to
addressing and per-thread folding. **f1 replaces that with a universal board**
(operator word 20260614): one live thread everyone posts to with their handle.
What changed and why:

| | f0 (superseded) | f1 (this draft) |
|---|---|---|
| shape | one file per sender→recipient pair | **one board, one thread** |
| addressing | from→to in the filename | **@mention** in the message (`@lantern ...`) |
| writer | (unspecified) — risked seat-vs-seat file contention | **server is sole writer** (POST → append) — no contention |
| U-6 board | separate deferred surface | **converged into the board** (one thing) |

Three reasons the board wins: (1) **server-as-sole-writer kills the concurrency
hazard** — three seats appending a file directly would race; routed through
`/memo`, the one server process serializes every write. (2) **More aligned with
the constitution** — rule 3 ("the operator reads every word, drift has nowhere to
hide") is the default when everyone shares one thread. (3) **@mention serves the
engine later** — the orchestrator posts `@lantern: do X`; lantern's poll-loop
filters the board for its handle. Soft addressing doubles as the engine's bus, no
redesign.

## Scope

**IN (the live build):**
- **the board** — one universal message thread (memo channel + U-6 board, converged).
- **surfacing** — read the board + see what's new (console now; "memos" button later).

**DEFERRED (named here so it stays out until called):**
- freight / mail transport — mostly dissolved by one floor (`/move` is the medium now).
- protocol layer — gate-keys (PreToolUse deny, declared position, sign-to-override). Held for the sift.
- safety — e-stop / LOTO. Rides the engine when it energizes.
- mail (traveling docs) + fold-as-travel-record + new-type registration — ride the naming rework.
- U-8 signing desk polish — split with W9 (client rebuild); minimal-functional only this season.

## The spine

The **mailbox is the board: one append-only file at `222`, written only through
the server.** memo posts land there, the surfacing reads it, the engine (later)
polls it. One object, on the books. No off-tree channel, ever.

## Chunks × slices × rungs (stubbed — fill as we go)

### Chunk 1 — the board (the instant channel)
- slice 1.1 — board home address. **SETTLED: 222** (sign·hands·record — a signed message changing hands, recorded; operator word 20260614).
- slice 1.2 — the board file + post mechanism. `memo.board.f0` at 222 (append-only, accumulator-class: folds only when long / on format change). `/memo` → `op_memo(handle, body)`: appends a timestamped, handle-tagged entry; **server is the sole writer**. provisional `memo` type (DOC_TYPES unenforced; add it marked provisional — rides the naming rework). **rung: LIVE & VERIFIED (26d9dd0). Server restarted; first POST seeded `memo.board.f0` at 222; reconcile 734/734 clean. The board is live; the server is the sole writer.**
- slice 1.3 — addressing by **@mention** (handle in the body, not the filename). a seat/engine filters the board for its handle. rung: TBD.
- slice 1.4 — on-the-books recording (the witness/ledger path; op_memo registers/logs). rung: TBD.
- *(server-down behavior: stub — decide at rung time.)*

### Chunk 2 — surfacing (read the board / what's-new)
- slice 2.1 — console read (the board is a plain file; cat / lattice read works day one). rung: TBD.
- slice 2.2 — **"memos" button** (right-hand side) opens the thread in the lattice. rung: TBD.
- slice 2.3 — new-message / new-arrival highlight (U-7 what's-new). rung: TBD.
- *(polish vs W9 split: minimal-functional now.)*

### Chunk 3 — STUB: transport naming/discipline
- name what one floor already does (moved file = freight, traveling doc = mail, folds = travel record). mostly documentation, not build. fill if/when it earns it.

### Chunk 4 — STUB: instrument support
- comms view/badge, post-from-CLI helper (H-slot). fill when chunks 1–2 land.

## Definition of done (light — tighten as rungs fill)

- any handle can post a memo (POST `/memo`); it lands on the board at 222, live, on the books.
- @mention lets a message be aimed without routing.
- the operator can read the board and see what's new without asking a seat or reading raw `git log`.
- deferred items stay deferred (no scope leak); the frame names where each went.

## Related threads / lineage

- **`sketch.comms.f1` at 210** — the shape this frame builds from (canon; sketch f0 is lineage).
- **`frame.comms.f0` at 210** — this frame's own f0 (per-pair memo design; superseded by the board, kept as lineage).
- **`parked.engine.f0` at 212** — the engine; the board is its bus (@mention routing).
- **`log.gate-keys.f0` at 222** — the protocol layer; held for the sift.
- **`frame.freight.f0` at 210** — **SUPERSEDED** by W1 (one floor, no pull rounds). Kept as history; candidate for a supersession note at the operator's word.
