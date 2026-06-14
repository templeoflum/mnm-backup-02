# Frame — w3a · the seat's body & waking — f0 — 20260614-134314

Status **[float]** — LEAN/STUB: stub the shape, fill rungs as we go.
Child of `frame.w3.f1` (W3 umbrella). Grounds on `dream.fable-settled.f4` + the live `.claude/seats/` harness (Q2 statusline + Q3 witness already built here).

## What this frame is
The harness side of W3 — **who each seat is allowed to be, how it wakes into the room, and what each room says about itself.** Config and hooks in `.claude/`; the operator never sees these surfaces directly, they shape how each seat behaves. Builds on top of the per-seat files (`clerk/keeper/lantern.json`) already carrying env-identity + statusline + witness hook.

## The three forks (settle before building the seat-shaped chunks)
1. **Q-numbering reconcile** — dream Q-numbers ≠ schedule Q-numbers; confirm dream-Q5 "epistemic exchange rate" isn't a stray that quietly dropped.
2. **per-wing vs per-seat** — granularity of Q6 (one body per wing/root, or one per named seat).
3. **SessionStart injection vs walk** — left open by design in the dream.

## Chunks × slices × rungs (stubbed)

### Chunk 1 — Q6 per-seat bodies
- slice 1.1 — the permission shape: mind (wide range) · clerk (witnessing + ledger) · keeper/ground (near-read-only). rung: TBD.
- slice 1.2 — where it lives: extend the existing `.claude/seats/{seat}.json` (already carries env + statusline + hooks). rung: TBD.
- slice 1.3 — **FORK:** per-*wing* (dream) vs per-*seat* (schedule). granularity decision. rung: TBD.

### Chunk 2 — Q9 SessionStart
- slice 2.1 — the wake mechanism: a SessionStart hook per seat. rung: TBD.
- slice 2.2 — the wing leans (carried, **not yet decided**): structure wakes **injected** · mind wakes **walking** · ground wakes **calibrating**.
- slice 2.3 — **FORK:** injection vs walk. decide here. rung: TBD.

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
