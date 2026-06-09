# Schedule — lattice — f2 — 260606

Third compilation. Fold from f1. Sources: frame.core.f2, log.session.f1 (0100–0298), review.session.f1, manifest.

## Changes since f1

- Frame core f2 executed: chunk 0 settled, chunk 1 walked + installed, chunk 2 built on workbench
- A1, A2, A3, A7, A8 settled/done — root chunk mostly cleared
- B1, B6 done as part of frame 2.2 dead code cleanup
- C2 done as part of frame 2.1 position vocab
- Keystone (CLAUDE.md) rewritten and installed at root
- Lattice installed as lattice.f0.260606-122128.html at 200
- File scope bug fixed (fileCount/fileList exact match, not in schedule but done)
- Review document type settled at leaf 22
- Staging procedure settled (cells rise to leaf 20, route through branch 2)
- Build gate lifted — code changes proven through frame execution

## Gate map

```
A (settle) ─┬─→ C (gated fixes) ─→ view/code consistency
             ├─→ D (dependency system) ─┬─→ G (file distribution)
             ├─→ F (source policy)      │
             ├─→ K (carry-forward) ←────┘
             │                    ↑
             │                    I (research ingestion)
             │                    ↑
             └─→ J (fold addressing) ← I
B (ungated fixes) ─→ (free)
H (tooling) ─→ (partially started — file viewer working)
I (research) ─→ (free, feeds A, 12 compilations arrived)
```

## Chunks

### A: Settle floating ground

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| A1 | Branch framing — specification / operation / configuration. Register row expanded to territory names. Self-similar. | 41 | — | **SETTLED** |
| A2 | Branch naming — falls from A1. Names ARE the register row expanded. | 41 | A1 | **SETTLED** |
| A3 | Position vocabulary — resolves to (finer), resolves from (broader), peers (same depth). Containment not hierarchy. | 3,45 | A1 | **SETTLED** |
| A4 | Sort order — three orderings in three contexts (build 0→2→1, shift 1→0→2, preservation 0→1→2). Each may be correct in its own context. No canonical path. | 1,48 | — | floating with nuance |
| A5 | View-as-mode — should each view constrain actions to its mode? Sub-views per view floated. | 50 | A1 | floating — A1 gate open |
| A6 | "Triad" dual usage — noun·verb·mod in lattice vs fold-history chain in compaction. Different concepts, same word. | 33 | — | floating |
| A7 | Keystone update — CLAUDE.md rewritten and installed at root. | — | A4 | **DONE** |
| A8 | LABELS / T dual naming — three lenses (positional, operational, territorial). Design not drift. | 47 | A1 | **SETTLED** |

### B: Ungated code fixes

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| B1 | Remove editable triads from V0 microscope. | 4,50 | — | **DONE** |
| B2 | Fix v0Label stale comment. | 11 | — | open |
| B3 | Fix go() state persistence. Minimap clicks change address without saving. | 10,15 | — | open |
| B4 | Expand state persistence. Compaction engine, archiveDest, log, cellContent lost on refresh. | 9 | — | open |
| B5 | Keyboard nav for V0 selector. Currently V1 only. | 12 | — | open |
| B6 | Dead code cleanup. cycleV0Label(), stale CSS, cellContent. | 1,2,6,9 | — | **DONE** |
| B7 | V1 minimap layout — triangle stack, bigger nodes. | — | — | open |
| B8 | Replace static FILES object with filesystem read or manifest connection. | — | — | open |
| B9 | File creation tool in lattice — enforce naming convention, auto-timestamp. | — | B8 | open |

### C: Gated code fixes

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| C1 | Compaction engine sort order. Hardcoded 1→0→2. | 8 | A4 | blocked by A4 |
| C2 | Position vocabulary in microscope. | 3,45 | A3 | **DONE** |
| C3 | Ring SVG center dot. Recolors by branch. Center is origin — should be fixed. | 6 | A1 | open — A1 gate open |
| C4 | Ratio line label asymmetry. 0 reachable, 1 is not. | 7 | — | open |
| C5 | View 2 destination grid. Flat 3x3, no containment. | 5 | A1,A5 | blocked by A5 |
| C6 | Tree vocabulary in CSS. branch, leaf, cell, v0-sel-leaves, etc. | 2 | A3 | open — A3 gate open |
| C7 | Log/engine timestamp inconsistency. Local vs UTC. | 10 | — | open |

### D: Dependency/gating system

| slice | description | gates | status |
|-------|-------------|-------|--------|
| D1 | Define dependency declaration format. | A (partial) | partially unblocked |
| D2 | Define contract format. | A (partial) | partially unblocked |
| D3 | Build gating mechanism. | D1,D2 | blocked |
| D4 | Build surfacing display. | D3 | blocked |

### F: Source legacy + preservation

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| F1 | Policy: annotate source files or leave untouched as archive? | 15-22 | A (partial) | partially unblocked |
| F2 | Research/sketch docs — same policy. Legacy notation. | 27-29,31-32 | F1 | blocked |
| F3 | TS KEYSTONE comment block in lattice source files. | 34 | F1 | blocked |

### G: File distribution + cleanup

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| G1 | Determine correct address for each file. 40 files at 200 need homes. | 30,49 | A1,A2 | open — gates open |
| G2 | Build distribution plan. | — | G1, D | blocked by D |
| G3 | MATRIX and nul at root. | 14 | A | partially unblocked |
| G4 | Execute distribution. | — | G2 | blocked |

### H: Practical tooling

| slice | description | status |
|-------|-------------|--------|
| H1 | File viewer in V0. | **DONE** |
| H2 | File count badges in V0 selector and V1 identity. | **DONE** |
| H3 | Sub-view infrastructure per view. | dream — gated by A5 |
| H4 | Chat in interface, code editor, schema/contracts per node. | dream — far horizon |
| H5 | Math/science grounding tools, data hygiene instruments. | dream — far horizon |

### I: Research ingestion

| slice | description | gates | status |
|-------|-------------|-------|--------|
| I1 | Survey all 12 grounding compilations. | — | open |
| I2 | Ingest: extract verified findings per address. | I1 | blocked |
| I3 | Connect: where research informs floating items in A. | I2 | blocked |
| I4 | Cross-reference existing research docs with new compilations. | I1 | blocked |

### J: Fold addressing system

| slice | description | gates | status |
|-------|-------------|-------|--------|
| J1 | Does base-3 fold depth compose with preservation lens levels? | I | blocked |
| J2 | Fold addressing format design. | J1 | blocked |
| J3 | Naming convention settle. | J2 | blocked |
| J4 | Log lifecycle: sign → intake → ground → compact → archive. | J2 | blocked |
| J5 | Ground memory bank: compacted logs at branch 0. | J4 | blocked |

### K: Carry-forward rebuilds

| slice | description | gates | status |
|-------|-------------|-------|--------|
| K1 | Rebuild TS with current ground. | A, I | blocked by I |
| K2 | Rebuild spline continuity with current ground. | A, I | blocked by I |
| K3 | Process doc rebuilds — HANDOFF, STATE, DISCIPLINE. | A | partially unblocked |
| K4 | Connection layer — instruments measuring each other. | K1, K2, D | blocked |

## Schedule notes

- f1 preserved as baseline record
- Build gate lifted — frame core proved the process works
- A chunk mostly cleared: A4 (sort order), A5 (view-as-mode), A6 (triad overload) still floating
- Many C gates opened now that A1/A3 settled
- Natural next frame candidates: B (ungated, clean), I (ungated, feeds everything), C3+C4+C6+C7 (newly unblocked gated fixes), or mixed
