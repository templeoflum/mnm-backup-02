# Schedule — lattice — f3 — 20260609

Fold from f2. Sources: frame.warehouse.f1 at 210, dream.warehouse-tasks at 122, log.session.f6 at 222, review.dream-warehouse at 22.

## Changes since f2

- Warehouse frame executed: server endpoints (scan_files, reconcile, seed) + client features (health indicator, drop zone, persistent selection, V2 layout revision). frame.warehouse.f0→f1 at 210.
- manifest.session retired — manifest.live.md and /scan are the living instruments now.
- Folder triads added to all 39 directories — noun-verb-modifier baked into every path.
- Myth writing at 121: grammar settled, the-two-flatlanders through 4 folds (ground-settling process established).
- A6 resolved — "triad" now means one thing: noun·verb·modifier at every address. fold-history chain is "fold trail."
- B8 partially done — server serves files via /list, /read, /scan/files. lattice still caches locally.
- B9 done — /create endpoint with auto-fold, auto-timestamp.
- H1, H2 already done in f2.
- Fold conventions settled through use: f0 is cloth, cleanup optional when moving on, mandatory at 39.
- J1-J3 partially addressed through fold practice — naming convention settled, fold ceiling at 39.
- Three-CLI-per-branch architecture proposed [float].
- Toy library / creative instruments proposed [float].
- Ground truth library (physics, math, mythology) proposed [float].

## Gate map

```
A (settle) ─┬─→ C (gated fixes) ─→ view/code consistency
             ├─→ G (file distribution)
             ├─→ K (carry-forward) ←─── I (research/ground truth)
             │
B (ungated fixes) ─→ (free)
H (tooling) ─→ warehouse DONE, V0/V1 fixes open
L (three-branch concurrency) ─→ needs working instruments first
M (ground truth library) ─→ feeds K, feeds L
N (instrument workshop) ─→ feeds L, needs M for TS
```

D (dependency system) and F (source policy) dropped — not pulling their weight. Dependencies are tracked in frames and this schedule. Source files at 220 stay as-is until G sorts them.

J (fold addressing) folded into practice — conventions settled through use, not system design.

## Chunks

### A: Settle floating ground

| slice | description | status |
|-------|-------------|--------|
| A1 | Branch framing — specification / operation / configuration | **SETTLED** |
| A2 | Branch naming — positional labels derived from matrix | **SETTLED** |
| A3 | Position vocabulary — resolves to/from, peers, containment | **SETTLED** |
| A4 | Sort order — three orderings in three contexts. no canonical path. | floating |
| A5 | View-as-mode — should each view constrain to its mode? | floating |
| A6 | Triad dual usage — resolved. "triad" = noun·verb·mod. "fold trail" = version chain. | **SETTLED** |
| A7 | Keystone — CLAUDE.md rewritten and maintained | **DONE** |
| A8 | LABELS / T dual naming — three lenses settled | **SETTLED** |

### B: Ungated code fixes

| slice | description | status |
|-------|-------------|--------|
| B1 | Remove editable triads from V0 | **DONE** |
| B2 | Fix v0Label stale comment | open |
| B3 | Fix go() state persistence — minimap clicks don't save | open |
| B4 | Expand state persistence — compaction engine, log, cellContent lost on refresh | open |
| B5 | Keyboard nav for V0 selector | open |
| B6 | Dead code cleanup | **DONE** |
| B7 | V1 minimap layout — triangle stack, bigger nodes | open |
| B8 | Replace static FILES with server reads | partial — server has /list /scan/files, lattice still caches |
| B9 | File creation tool — enforce naming, auto-timestamp | **DONE** — /create endpoint |

### C: Gated code fixes

| slice | description | status |
|-------|-------------|--------|
| C1 | Compaction engine sort order — hardcoded 1→0→2 | blocked by A4 |
| C2 | Position vocabulary in microscope | **DONE** |
| C3 | Ring SVG center dot — should be fixed, not branch-colored | open — gate open |
| C4 | Ratio line label asymmetry — 0 reachable, 1 is not | open |
| C5 | View 2 destination grid — flat 3x3, no containment | blocked by A5 |
| C6 | Tree vocabulary in CSS | open — gate open |
| C7 | Log/engine timestamp inconsistency | open |

### G: File distribution

| slice | description | status |
|-------|-------------|--------|
| G1 | Determine correct address for each file — 220 has 42 files in the pile | open |
| G2 | Execute distribution using /move | blocked by G1 |
| G3 | MATRIX and nul at root — clean up root clutter | open |

### H: Warehouse + tooling — MOSTLY DONE

| slice | description | status |
|-------|-------------|--------|
| H1 | File viewer in V0 | **DONE** |
| H2 | File count badges | **DONE** |
| H3 | Health indicator in V2 — reconciliation status | **DONE** |
| H4 | Drop zone in V2 — drag/drop intake | **DONE** |
| H5 | Persistent file selection — V0↔V2 sync | **DONE** |
| H6 | V2 file browser mirrors V0 — doc groups, fold badges | **DONE** |
| H7 | Reconciliation refresh after mutations | **DONE** |
| H8 | Split view / compare in V0 — side-by-side file comparison | parked |
| H9 | Copy text button in V0 reader bar | parked |
| H10 | Pinboard fold history — fold navigation from tray items | parked |
| H11 | Cardiogram instrument — needs historical reconciliation data | parked |
| H12 | Feature inventory at 212 — AI-written build log | open |

### I: Research ingestion

| slice | description | status |
|-------|-------------|--------|
| I1 | Survey all 12 grounding compilations at 220 | open |
| I2 | Extract verified findings per address | blocked by I1 |
| I3 | Connect research to floating items in A | blocked by I2 |
| I4 | Cross-reference existing research docs | blocked by I1 |

### K: Carry-forward rebuilds

| slice | description | status |
|-------|-------------|--------|
| K1 | Rebuild TS with current ground + incoming toys | blocked by M |
| K2 | Rebuild spline continuity | blocked by M |
| K3 | Process doc rebuilds — HANDOFF, STATE, DISCIPLINE | open |

### L: Three-branch concurrency [float]

Three CLI instances running simultaneously, one per branch. The structure breathing for real.

| slice | description | status |
|-------|-------------|--------|
| L1 | Branch 0 instance — research, ground truth, axioms, lab experiments. reads from 0, writes to 0, pushes verified findings to 2. | dream |
| L2 | Branch 1 instance — dreaming, filtering, watching the other two. reads from 0 and 2, dreams at 12, filters to 11. the observatory. | dream |
| L3 | Branch 2 instance — reviews, audits, preservation. reads from 0 and 1, audits at 221, logs at 222, reviews at 22. the warehouse. | dream |
| L4 | Shared state protocol — how instances communicate through filesystem. which addresses each reads/writes. conflict prevention. | dream |
| L5 | Startup/shutdown choreography — what order, how to hand off, session boundary behavior | dream |

### M: Ground truth library [float]

Branch 0 specification work. The library of things that ARE.

| slice | description | status |
|-------|-------------|--------|
| M1 | Physics axioms and laws — verified, citable, structured | dream |
| M2 | Mathematical axioms and theorems — same | dream |
| M3 | Mythology collection — user has body ready to load | dream |
| M4 | TS ground truth — what's actually proven about ternary structure | dream — feeds K1 |
| M5 | Story-building tools — mythic grammar, narrative structure | dream — myth.grammar.f0 is first entry |

### N: Instrument workshop [float]

Building tools. Each instrument is a self-contained HTML/JS artifact living in the lattice.

| slice | description | status |
|-------|-------------|--------|
| N1 | Toy library scaffolding — how toys are stored, loaded, shared between instruments | dream |
| N2 | Faithful analog video art device emulator — component-level | dream |
| N3 | Non-conformal grid warper synthesizer | dream |
| N4 | Live datamoshing tool | dream |
| N5 | Glitch art tools | dream |
| N6 | Interactive storytelling platform | dream |
| N7 | TS instrument rebuild — new trace/fingerprint/projection tools | dream — needs M4 |

## Schedule notes

- D (dependency system), F (source policy), J (fold addressing) dropped/absorbed. D was over-engineering — dependencies live in frames and this schedule. F can be decided when G sorts files. J settled through practice.
- Warehouse (H) is the first completed frame cycle: dream (102→112→122) → frame (210) → build → verify → fold.
- L, M, N are [float] — the vision is forming but none of it is framed yet. The user has toys and materials ready to bring in.
- Natural next work: finish B (ungated fixes are free), start M (ground truth — user has materials), or frame one N instrument.
- The three-CLI architecture (L) needs working instruments first — you need things for each branch to DO.
- Status verbs (unsigned/confirmed/archived) still floating — decide when receiving flow gets real use.
- Commit discipline needed — standard rhythm for save points.
