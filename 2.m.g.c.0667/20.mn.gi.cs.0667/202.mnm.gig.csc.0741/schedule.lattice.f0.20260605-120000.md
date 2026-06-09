# Schedule — lattice — f0 — 2026-06-05

First compilation. Source: manifest.session.20260605.md

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
H (tooling) ─→ (parked, dream-stage)
I (research) ─→ (free, feeds A)
```

## Chunks

### A: Settle floating ground

Root chunk. No gates above. Everything downstream depends on what settles here. Walking slowly — these settle through use, not declaration.

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| A1 | Branch framing — what are 0/1/2 as modes of engagement. Candidates: definition/practice/maintenance (current names), relation·grounds·measure / presence·minds·awareness / structure·maintains·order (triads), ground/workshop/protocol (floating framing). | 41 | — | floating |
| A2 | Branch naming — follows from A1. Current names may not hold. "Maintenance" flagged as too narrow. | 41 | A1 | floating |
| A3 | Position vocabulary — parent/child/sibling is hierarchical and directional. "Resolves to/from" proposed. Needs to read right from every angle. | 3,45 | A1 | floating |
| A4 | Sort order — three orderings in three contexts (build 0→2→1, shift 1→0→2, preservation 0→1→2). Each may be correct in its own context. Nuance: no canonical path, 012 most grammatically stable, its address IS 012. | 1,48 | — | floating with nuance |
| A5 | View-as-mode — should each view constrain actions to its mode? If yes: V0 read-only (ground rests), V1 editable (workshop), V2 operational (testing/sorting). Affects B1, C5. | 50 | A1 | floating |
| A6 | "Triad" dual usage — noun·verb·mod in lattice vs fold-history chain in compaction. Different concepts, same word. Need distinct terms or accept the overload. | 33 | — | floating |
| A7 | Keystone update — CLAUDE.md addresses 200 (state) and 210 (sort order) are stale. Must reflect current settled ground. | — | A4 | blocked |
| A8 | LABELS / T dual naming — structural names ("spec of ops") and semantic names ("view · connects · continuity") coexist in code. Two lenses by design, or drift to reconcile? | 47 | A1 | floating |

### B: Ungated code fixes

No gates. Can execute whenever build pause lifts. Each slice is independent.

| slice | description | catches | gates | rungs |
|-------|-------------|---------|-------|-------|
| B1 | Remove editable triads from V0 microscope. Confirmed drift — editing in the resting place. | 4,50 | — | 1: remove contenteditable attrs (852-856). 2: remove blur handlers (902-908). 3: verify triad displays read-only. |
| B2 | Fix v0Label stale comment. Line 604 says 'triad' but triad mode was removed. | 11 | — | 1: update comment to `// 'digits' \| 'verb'`. |
| B3 | Fix go() state persistence. Line 700 changes address without saving. Minimap nav lost on refresh. | 10 | — | 1: add `saveState()` call in go(). 2: verify minimap click persists across refresh. |
| B4 | Expand state persistence. Only V0 state + view/address saved. Compaction engine, archiveDest, log, cellContent lost on refresh. | 9 | — | 1: serialize engine state in saveState(). 2: serialize archiveDest + cellContent. 3: deserialize in restoreState(). 4: test full refresh cycle. |
| B5 | Keyboard nav for V0 selector. Currently V1 only (lines 1155-1162). | 12 | — | 1: define key bindings (arrows for navigate, enter for select, space for fold). 2: add keydown handler gated to activeView===0. 3: test interaction with existing V1 keys. |

### C: Gated code fixes

All gated by Chunk A. Each slice needs specific A items to settle first.

| slice | description | catches | gates | preliminary rungs |
|-------|-------------|---------|-------|-------------------|
| C1 | Compaction engine sort order. Line 664 hardcoded 1→0→2. | 8 | A4 | 1: determine correct slot assignment for settled order. 2: update pushToLevel. 3: verify with compaction sim. |
| C2 | Position vocabulary in microscope. Lines 859-883 say parent/children/siblings. | 3,45 | A3 | 1: replace labels with settled terms. 2: update renderScope. 3: verify readability. |
| C3 | Ring SVG center dot. Line 1069 recolors by branch. Center is origin — should be fixed. | 6 | A1 | 1: determine what center dot should show (fixed color? no dot?). 2: update SVG render. |
| C4 | Ratio line label asymmetry. Line 1148 labels 0 and 1 as equal endpoints. 0 is reachable, 1 is not. | 7 | — (may be ungated) | 1: visually distinguish 0 (solid, reachable) from 1 (dashed/faint, unreachable). 2: update ratio line render. |
| C5 | View 2 destination grid. Lines 1222-1234 flat 3x3, no containment. | 5 | A1,A5 | 1: determine if V2 gets containment structure or full redesign per mode-constraint. 2: implement. |
| C6 | Tree vocabulary in CSS. Classes: branch, leaf, cell, v0-sel-leaves, v0-sel-leafwrap, etc. | 2 | A3 | 1: compile full list of hierarchy-implying class names. 2: choose replacements consistent with settled vocabulary. 3: rename across CSS + JS + HTML. |

### D: Dependency/gating system

Infrastructure for safe coherent operation. Partially gated by A — needs enough settled ground to define what contracts look like.

| slice | description | gates | preliminary rungs |
|-------|-------------|-------|-------------------|
| D1 | Define dependency declaration format. What does an address assert about what it relies on? | A (partial) | 1: survey existing implicit dependencies (compaction→sort order, microscope→vocabulary). 2: propose declaration format. 3: settle through use. |
| D2 | Define contract format. What does an address assert about itself? | A (partial) | 1: survey existing implicit contracts. 2: propose format. 3: settle through use. |
| D3 | Build gating mechanism. When an address updates, surface its dependents. Show, don't fix. | D1,D2 | 1: determine storage (inline in files? separate index?). 2: build surface/flag logic. 3: test with real case. |
| D4 | Build surfacing display. How breaks are shown, how acknowledgment works. | D3 | 1: design display. 2: build. 3: test with deliberate break. |

### F: Source legacy + preservation

Policy chunk. Source files are scaffolding — preserve as record, don't fix backward. Decision needed on annotation.

| slice | description | catches | gates |
|-------|-------------|---------|-------|
| F1 | Policy decision: annotate source files with "vocabulary has changed since" header, or leave fully untouched as archive? | 15-22 | A (for annotation content) |
| F2 | Research/sketch docs — same policy. Valid content, legacy notation (I/D/G, old sort order, old branch names). | 27-29,31-32 | F1 |
| F3 | TS KEYSTONE comment block in lattice source files — mixing project contexts. Note or remove? | 34 | F1 |

### G: File distribution + cleanup

Heavily gated. 28 files at 111, zero elsewhere. Loose objects at root.

| slice | description | catches | gates |
|-------|-------------|---------|-------|
| G1 | Determine correct address for each file based on settled branch framing. | 30,49 | A1,A2 |
| G2 | Build distribution plan — copy + archive at origin, place at destination, update cross-references. | — | G1, D (for tracking) |
| G3 | MATRIX and nul at root — position within structure or remove. | 14 | A |
| G4 | Execute distribution. Preserve, don't move. Verify each placement. | — | G2, preservation protocol |

### H: Practical tooling

Dream-stage. Parked. Listed for record.

Chat in interface, code editor, file browser, schema/contracts per node, audit/plan/research structures, protocols per address, math/science grounding, data hygiene.

No slices — these need the horizon to come closer before they take shape.

### I: Research ingestion

12 dives to ingest. Ungated — feeds A, grounds everything. Needs preliminary survey before slicing.

| slice | description | gates |
|-------|-------------|-------|
| I1 | Survey: list all 12 research dives, summarize what each contains, identify what grounds branch 0. | — |
| I2 | Ingest: for each dive, extract verified findings and place at appropriate address. | I1, G (partially — need addresses to exist) |
| I3 | Connect: identify where research findings inform floating items in A. Surface connections. | I2 |

### J: Fold addressing system

Parked for research. Needs math grounding from I.

| slice | description | gates |
|-------|-------------|-------|
| J1 | Research: ternary fold numbering — does base-3 fold depth compose with preservation lens levels? Review sketch_compaction_id.html findings. | I |
| J2 | Design: fold addressing format — where it applies (schedules, frames, archives, contracts). | J1 |
| J3 | Settle: naming convention for type.scope.fN.YYYYMMDD — scope naming, retirement criteria. | J2 |

### K: Carry-forward rebuilds

Horizon chunk. Rebuild TS, spline continuity, connect all three instruments to measure each other.

| slice | description | gates |
|-------|-------------|-------|
| K1 | Rebuild TS with current ground — settled vocabulary, addressing, keystone as addressing system not TS anchor. | A, I |
| K2 | Rebuild spline continuity with current ground. | A, I |
| K3 | Process doc rebuilds — HANDOFF, STATE, DISCIPLINE rebuilt forward with current vocabulary. Not fixed, rebuilt. | A |
| K4 | Connection layer — all three instruments measuring each other. Real-time if possible, small steps toward that horizon. | K1, K2, D |

## Parked intake

(Empty — no items parked yet. Items discovered during frame execution land here with: what, why parked, where discovered.)

## Schedule notes

- This is f0 — first compilation, never been through a sort cycle
- Source: manifest.session.20260605.md (50 catches, 4 audit passes, 2 dream passes)
- Build gate active — no code changes until user confirms settled
- Frame projection: pull one chunk into 3×3 focus plan to begin execution
- Natural first frame candidates: B (ungated, clean, clears debris) or I (ungated, feeds root)
