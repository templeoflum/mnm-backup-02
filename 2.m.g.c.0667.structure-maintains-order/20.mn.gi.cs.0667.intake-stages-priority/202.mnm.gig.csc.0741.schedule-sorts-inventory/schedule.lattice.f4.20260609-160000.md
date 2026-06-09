# Schedule — lattice — f4 — 20260609

Fold from f3. Sources: count.ts-handoff.f0 at 201, HANDOFF_REPORT at 200.

## Changes since f3

- TS_measurement_handoff received at 200. 46 files: 30 standalone toys (HTML instruments), 3 integration files, 8 verification harnesses, 5 root docs. Unsigned. Counted at 201 (count.ts-handoff.f0).
- New chunk O added: TS handoff sorting. This material needs to be addressed before it can feed K or N.
- M4 (TS ground truth) partially fed — the handoff contains verified measurement results, a computational kernel, and honesty-tagged findings. Not complete ground truth, but real material.
- N1 (toy library scaffolding) now has concrete input — 30 toys to scaffold around.
- K1 (rebuild TS) gets two verified lenses (signal-lens, symmetry-probe) plus a failed fold-in to learn from.
- myth.the-crease at 200 needs addressing to 121.
- The Riemann Pursuit dependency map at 200 needs addressing — likely 100 (specification/reference).

## Gate map

```
A (settle) ─┬─→ C (gated fixes) ─→ view/code consistency
             ├─→ G (file distribution)
             ├─→ K (carry-forward) ←─── I (research/ground truth)
             │                    ←─── O (TS handoff sort)
B (ungated fixes) ─→ (free)
H (tooling) ─→ warehouse DONE, V0/V1 fixes open
L (three-branch concurrency) ─→ needs working instruments first
M (ground truth library) ─→ feeds K, feeds L. partially fed by O.
N (instrument workshop) ─→ feeds L, needs M for TS. O feeds N1.
O (TS handoff sort) ─→ feeds K1, N1, N7, M4. blocked by nothing — sorting is free.
```

## Chunks

### A–H: unchanged from f3

See schedule.lattice.f3 for full status. No changes to these chunks this fold.

### I: Research ingestion — unchanged from f3

### K: Carry-forward rebuilds — updated

| slice | description | status |
|-------|-------------|--------|
| K1 | Rebuild TS with current ground + incoming toys | blocked by M, **partially unblocked by O** — two verified lenses available, fold-in procedure documented (HANDOFF_REPORT §3.1) |
| K2 | Rebuild spline continuity | blocked by M |
| K3 | Process doc rebuilds — HANDOFF, STATE, DISCIPLINE | open |

### L: Three-branch concurrency — unchanged from f3

### M: Ground truth library — updated

| slice | description | status |
|-------|-------------|--------|
| M1 | Physics axioms and laws | dream |
| M2 | Mathematical axioms and theorems | dream |
| M3 | Mythology collection | dream |
| M4 | TS ground truth — what's actually proven about ternary structure | dream — **handoff delivers verified measurement results + kernel**. not complete, but first real material. |
| M5 | Story-building tools | dream — myth.grammar.f0 is first entry |

### N: Instrument workshop — updated

| slice | description | status |
|-------|-------------|--------|
| N1 | Toy library scaffolding — how toys are stored, loaded, shared | dream — **30 concrete toys now at 200 to scaffold around** |
| N2–N6 | (unchanged) | dream |
| N7 | TS instrument rebuild — new trace/signature/projection tools | dream — needs M4. **signal-lens + symmetry-probe verified and available. fold-in regressed — root-cause with browser console first.** |

### O: TS handoff sort (NEW)

Material at 200 is unsigned. Sorting it means deciding where each piece goes. Free to do — no gates.

| slice | description | status |
|-------|-------------|--------|
| O1 | Address the 30 toys — where do standalone HTML instruments live? Options: stay bundled at 200, move to a toy address, or scaffold per N1 first. | open |
| O2 | Address integration + verification — these are build artifacts for K1/N7. Keep at 200 until fold-in attempt, or move to 211 build zone? | open |
| O3 | Address root docs — HANDOFF_REPORT (handoff→200 or 210?), research-report (111?), rf-lens-roadmap (101?), dependency map (100?). | open |
| O4 | Address myth.the-crease — should go to 121 (reflective writing). | open — straightforward move |
| O5 | Decide: sort first then move, or move then sort? 200 is receiving, not storage. But premature moves caused errors before (count.research-sort.f0 §error-correction). | open — gate is discipline, not enforcement |

## Schedule notes

- O is the natural next work. The material is sitting unsigned in receiving. Sorting precedes doing (202 principle).
- O5 is the real question: the last time a bulk move happened from 200 (count.research-sort.f0), a wildcard move sent an active instrument to 220 by mistake. Address first, move second. One at a time.
- O4 (myth to 121) is the freest move — same pattern as the_two_who_built.md in the previous sort.
- O1 is the biggest decision. 30 toys is a lot of material. If N1 (toy scaffolding) is done first, the toys have a home. If not, they either stay at 200 (cluttering receiving) or go to a holding address. Previous pattern: unsorted material → 220 (trim·cleans·slack). But 220 already has 42 files.
- O3 intersects with G1 (determine correct address for each file at 220). Both are "where does this go" work.
- The handoff's failed fold-in (Stage 2) is a known edge for K1/N7. The fix path is documented: browser console first, one lens at a time, try/catch isolation. Don't attempt until framed at 210.
- The FLT/modularity insight (HANDOFF_REPORT §7) is the kind of thing that wants to be a finding at 111 — but it's embedded in the handoff doc, not extracted. Extraction would be an I-type operation.
