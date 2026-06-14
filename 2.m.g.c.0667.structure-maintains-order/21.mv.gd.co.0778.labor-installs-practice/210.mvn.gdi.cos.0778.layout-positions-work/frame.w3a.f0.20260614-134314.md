# Frame — w3a · the seat's body & waking — f0 — 20260614-134314

Status **[float]** — LEAN/STUB: stub the shape, fill rungs as we go.
Child of `frame.w3.f1` (W3 umbrella). Grounds on `dream.fable-settled.f4` + the live `.claude/seats/` harness (Q2 statusline + Q3 witness already built here).

## What this frame is
The harness side of W3 — **who each seat is allowed to be, how it wakes into the room, and what each room says about itself.** Config and hooks in `.claude/`; the operator never sees these surfaces directly, they shape how each seat behaves. Builds on top of the per-seat files (`clerk/keeper/lantern.json`) already carrying env-identity + statusline + witness hook.

## The three forks — ALL SETTLED (operator word 20260614)
1. **Q-numbering reconcile — RESOLVED, nothing dropped.** dream-Q5 "epistemic exchange rate" is seated in `schedule.lattice.f9` as *"rests with mind"* (their books, their seasons), not a stray. The dream numbered locally; the schedule renumbered and re-seated.
2. **per-wing vs per-seat — SETTLED: per-seat.** today one seat per wing/branch, but eventually maybe a seat per address — so the unit is the *seat*, not the wing. A seat carries per-wing permissions (its body grants authority over its wing).
3. **SessionStart injection vs walk — SETTLED: per-seat leans, each its own.** structure wakes **injected** · mind wakes **walking** · ground wakes **calibrating**. Not one global mode — each seat wakes by its nature.

## Chunks × slices × rungs (stubbed)

### Chunk 1 — Q6 per-seat bodies
*build one seat at a time, watch it work, then the next.*
- slice 1.1 — the permission shape, **per seat, scoped to its wing**: mind (wide range) · clerk (witnessing + ledger + machinery) · keeper (librarian — free in root 0, asks elsewhere, hard-denied the books/machinery).
  - **keeper — BUILT (166f4eb).** allow Read everywhere + Edit/Write under root 0; default-ask elsewhere; HARD DENY on ledger (`manifest.live.md`, `log.session*`), `CLAUDE.md`, `server.py`, `.claude/**`. Effective next keeper relaunch. rung: BUILT, awaiting play-confirm (relaunch keeper; it writes its library normally, fenced from the books).
  - **clerk — TBD.** the systems/safety seat — writes the ledger + machinery.
  - **mind — TBD.** wide; free in its wing (root 1).
- slice 1.2 — where it lives: the `permissions` block in `.claude/seats/{seat}.json` (loaded via `claude --settings`). **Mechanics verified (claude-code-guide):** seat settings MERGE with the project allow-list; deny wins at every level/mode; project-root-relative path globs; deny on Edit tool does NOT block the witness hook. rung: BUILT for keeper.
- slice 1.3 — **SETTLED: per-seat** (operator word). unit is the seat; a seat carries per-wing permissions. (today 1 seat/wing; later maybe 1/address.)

### Chunk 2 — Q9 SessionStart
- slice 2.1 — the wake mechanism: a SessionStart hook per seat. rung: TBD.
- slice 2.2 — the per-seat leans (**SETTLED**): structure wakes **injected** · mind wakes **walking** · ground wakes **calibrating**.
- slice 2.3 — **SETTLED: per-seat leans** (operator word). each seat its own wake by its nature — not one global injection-or-walk.

### Chunk 3 — Q1 orientation files per address
- slice 3.1 — the orientation-file shape: what this room is; why it's empty if empty. rung: TBD.
- slice 3.2 — coverage: stub for worked addresses (100–222 so far), not the whole lattice at once. rung: TBD.
- slice 3.3 — does the wake surface it (read on entry)? ties Chunk 3 to Chunk 2. rung: TBD.

## Definition of done (light)
- each seat has a body (permissions) that matches its nature.
- each seat has a wake (SessionStart) by the settled fork.
- worked addresses carry a stub orientation file; the wake can find it.

## Related / lineage
- **`frame.w3.f1` at 210** — the W3 umbrella (parent).
- **`frame.w3b.f0` at 210** — sibling (the surfaces).
- **`.claude/seats/{clerk,keeper,lantern}.json`** — the live harness this extends.
- **`dream.fable-settled.f4` at 112** — the wing-wake / orientation / bodies vision.
