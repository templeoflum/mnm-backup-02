# Schedule — lattice — f5 — 20260610-042049

Fold from f4. Sources: log.fable.f0 at 201 (arrival walk + division of labor), schedule.lattice.f4.

## Changes since f4

- Division of labor settled (see ground note below). Branch 1 dreams and sifts; branch 2 frames, schedules, builds, audits, logs, routes.
- Arrival walk (log.fable.f0) surfaced warehouse hygiene work. Sorted into new chunk P.
- Correction from walk: root 0, cell 120, cell 212 exist as empty directories — git worktrees don't materialize empty folders. No structural gap. The earlier "missing walls" observation was a lens artifact.
- frame.hygiene.f0 created at 210 covering chunk P. No execution yet — each slice gates on sign-off.

## Ground note — division of labor [settled]

- Branch 1: dreams material, sifts to tasks (122) and parked ideas, plays with built artifacts, may reconfigure content in place (UI nudges, rewording). No surgery, no power tools.
- Branch 2: frames, schedule, builds, audits, reviews, logs, routing approval. Anything needing planning or paperwork.
- The test: **if a change needs a ledger row, it's branch 2 work.** Content-in-place is branch 1's wiggle room.
- Boundary crossings land at 200 unsigned, both directions. Reconcile and audits are the net that makes the play safe — logging discipline stays on branch 2 so the wandering stays free.
- Document types: dream/float/myth/edge/sketch/parked are branch 1's. frame/schedule/manifest/count/audit/review/log are branch 2's. survey/extract may be drafted by either, signed by 2.
- Open: where verified-and-done work goes (2→0 routing exists, root 0 empty). Wants an answer when the first build fully verifies, not before.

## Gate map

```
A (settle) ─┬─→ C (gated fixes) ─→ view/code consistency
             ├─→ G (file distribution) ←─ P2, P3 overlap
             ├─→ K (carry-forward) ←─── I (research/ground truth)
             │                    ←─── O (TS handoff sort)
B (ungated fixes) ─→ (free)
H (tooling) ─→ warehouse DONE, V0/V1 fixes open
L (three-branch concurrency) ─→ needs working instruments first
M (ground truth library) ─→ feeds K, feeds L. partially fed by O.
N (instrument workshop) ─→ feeds L, needs M for TS. O feeds N1.
O (TS handoff sort) ─→ feeds K1, N1, N7, M4. blocked by nothing.
P (warehouse hygiene) ─→ blocked by nothing except per-slice sign-off. P2/P3 intersect G1/O3.
```

## Chunks

### A–O: unchanged from f4

See schedule.lattice.f4 for full status. No changes this fold.

### P: warehouse hygiene (NEW)

Source: log.fable.f0 walk observations. Framed at 210 (frame.hygiene.f0). Each slice: propose → sign → execute one at a time → verify via /reconcile.

| slice | description | status |
|-------|-------------|--------|
| P1 | Ledger amendments — retroactive delete rows for files gone from the floor (survey.ceilingtest ×3, dream.test ×1, per /reconcile "missing") | open |
| P2 | Duplicate canonicalization — ~12 files registered at two addresses with no canonical marked (100↔220, 111↔220, 110↔211) | open — intersects G1, O3 |
| P3 | Strays outside the accumulation zone — untyped/unstamped files at 100 and 121 propose addresses + typed names | open — intersects G1 |
| P4 | Fold-numbering legacy — manifest.session.f0 ×2 collision, audit.lattice.p1–p4 nonstandard | open — minimal touch, historical files; may resolve to "annotate, don't rename" |
| P5 | Test residue — note.scratch.f0 (4-byte stub at 111) delete with sign-off + ledger row | open — smallest slice |

## Schedule notes

- O remains the natural next work for material flow (the 46-file handoff sort). P is the natural next work for the books. They don't block each other.
- P1 is the freest P slice — it touches only the manifest, no files move. Good first hygiene move.
- P2/P3 overlap chunk G — when either executes, fold the schedule so G and P don't double-count the same work.
- The division of labor itself earns keystone entry through use, not declaration (101). Record here, practice it, see if it reads right from every angle after some cycles.
