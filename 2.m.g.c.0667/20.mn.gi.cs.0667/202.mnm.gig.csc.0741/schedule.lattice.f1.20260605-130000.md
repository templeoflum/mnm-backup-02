# Schedule — lattice — f1 — 2026-06-05

Second compilation. Sources: manifest.session.20260605.md, audit.lattice.f0.20260605.md, audit passes p1-p4.

## Changes since f0

- Manifest rebuilt from session log into proper contract ledger with status verbs (audit finding #4 resolved)
- FILES inventory corrected — 12 phantoms removed, 12+ real files added (audit finding #5 resolved)
- All files moved from 111 and 020 into 200 (receiving dock). 111 and 020 cleared.
- 12 grounding research compilations (research01-12) arrived at 200. Chunk I has concrete material.
- Checkpoint system settled: 39-slot ternary tree (3+9+27). Structural ceiling forces cleanup.
- Audit reports extracted from checkpoint into 5 individual reports at 221.
- File viewer working in V0 — fetch-based .md reader with markdown rendering.
- File count badges added to V0 selector and V1 identity.
- Total files at 200: 40. Total at 201: 2. Total at 202: 1. Total at 221: 5. All other cells: empty.

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

Root chunk. No gates above. Everything downstream depends on what settles here. Walking slowly — these settle through use, not declaration.

| slice | description | catches | gates | status |
|-------|-------------|---------|-------|--------|
| A1 | Branch framing — what are 0/1/2 as modes of engagement. Candidates: definition/practice/maintenance (current names), relation·grounds·measure / presence·minds·awareness / structure·maintains·order (triads), ground/workshop/protocol (floating framing). | 41 | — | floating |
| A2 | Branch naming — follows from A1. Current names may not hold. "Maintenance" flagged as too narrow. | 41 | A1 | floating |
| A3 | Position vocabulary — parent/child/sibling is hierarchical and directional. "Resolves to/from" proposed. Needs to read right from every angle. | 3,45 | A1 | floating |
| A4 | Sort order — three orderings in three contexts (build 0→2→1, shift 1→0→2, preservation 0→1→2). Each may be correct in its own context. Nuance: no canonical path, 012 most grammatically stable, its address IS 012. | 1,48 | — | floating with nuance |
| A5 | View-as-mode — should each view constrain actions to its mode? If yes: V0 read-only (ground rests), V1 editable (workshop), V2 operational (testing/sorting). Affects B1, C5. Sub-views per view floated: V0 file browsing as text, V1 visual workspace (load HTML toys), V2 strict forms/schemas. | 50 | A1 | floating |
| A6 | "Triad" dual usage — noun·verb·mod in lattice vs fold-history chain in compaction. Different concepts, same word. Need distinct terms or accept the overload. | 33 | — | floating |
| A7 | Keystone update — CLAUDE.md addresses 200 (state) and 210 (sort order) are stale. Must also add: document types, checkpoint system, manifest format, file viewer, occupied cells (200, 201, 202, 221). | — | A4 | blocked |
| A8 | LABELS / T dual naming — structural names ("spec of ops") and semantic names ("view · connects · continuity") coexist in code. Two lenses by design, or drift to reconcile? | 47 | A1 | floating |

### B: Ungated code fixes

No gates. Can execute whenever build pause lifts. Each slice is independent. Note: line numbers approximate — code has grown since f0 due to file viewer, FILES inventory, and helper functions.

| slice | description | catches | gates | rungs |
|-------|-------------|---------|-------|-------|
| B1 | Remove editable triads from V0 microscope. Confirmed drift — editing in the resting place. | 4,50 | — | 1: remove contenteditable attrs. 2: remove blur handlers. 3: verify triad displays read-only. |
| B2 | Fix v0Label stale comment. Says 'triad' but triad mode was removed. | 11 | — | 1: update comment to `// 'digits' \| 'verb'`. |
| B3 | Fix go() state persistence. Minimap clicks change address without saving. | 10,15 | — | 1: add `saveState()` call in go(). 2: verify minimap click persists across refresh. |
| B4 | Expand state persistence. Only V0 state + view/address saved. Compaction engine, archiveDest, log, cellContent lost on refresh. | 9 | — | 1: serialize engine state in saveState(). 2: serialize archiveDest + cellContent. 3: deserialize in restoreState(). 4: test full refresh cycle. |
| B5 | Keyboard nav for V0 selector. Currently V1 only. | 12 | — | 1: define key bindings (arrows for navigate, enter for select, space for fold). 2: add keydown handler gated to activeView===0. 3: test interaction with existing V1 keys. |
| B6 | Dead code cleanup. `cycleV0Label()` never called (code issue #1). `.v0-scope-content` CSS defined but never generated (#9). Stale `.w-controls`/`.w-btn`/`.w-tog` CSS (#2). `cellContent` accumulates but never read (#6). | 1,2,6,9 | — | 1: remove dead function. 2: remove orphan CSS. 3: remove or wire up cellContent. |
| B7 | V1 minimap layout — triangle stack, bigger nodes. Currently too small, flat arrangement. | — | — | 1: restructure minimap SVG/layout as triangle. 2: increase node size. 3: verify clickable nav still works. |
| B8 | Replace static FILES object with filesystem read or manifest connection. Static list won't scale — grows linearly, requires manual sync across copies, drift-prone. Needs to discover files at addresses dynamically. | — | — | 1: determine approach (fetch directory listing, read manifest, or hybrid). 2: build dynamic file discovery. 3: remove hardcoded FILES. |
| B9 | File creation tool in lattice — enforce naming convention (type.scope.fN.YYMMDD-HHMMSS.md), auto-timestamp UTC, create at correct address path. | — | B8 | 1: build creation UI in V0 or V2. 2: enforce naming template. 3: write to filesystem + update manifest. |

### C: Gated code fixes

All gated by Chunk A. Each slice needs specific A items to settle first.

| slice | description | catches | gates | preliminary rungs |
|-------|-------------|---------|-------|-------------------|
| C1 | Compaction engine sort order. Hardcoded 1→0→2. | 8 | A4 | 1: determine correct slot assignment for settled order. 2: update pushToLevel. 3: verify with compaction sim. |
| C2 | Position vocabulary in microscope. Says parent/children/siblings. | 3,45 | A3 | 1: replace labels with settled terms. 2: update renderScope. 3: verify readability. |
| C3 | Ring SVG center dot. Recolors by branch. Center is origin — should be fixed. | 6 | A1 | 1: determine what center dot should show (fixed color? no dot?). 2: update SVG render. |
| C4 | Ratio line label asymmetry. Labels 0 and 1 as equal endpoints. 0 is reachable, 1 is not. | 7 | — (may be ungated) | 1: visually distinguish 0 (solid, reachable) from 1 (dashed/faint, unreachable). 2: update ratio line render. |
| C5 | View 2 destination grid. Flat 3x3, no containment. | 5 | A1,A5 | 1: determine if V2 gets containment structure or full redesign per mode-constraint. 2: implement. |
| C6 | Tree vocabulary in CSS. Classes: branch, leaf, cell, v0-sel-leaves, v0-sel-leafwrap, etc. | 2 | A3 | 1: compile full list of hierarchy-implying class names. 2: choose replacements consistent with settled vocabulary. 3: rename across CSS + JS + HTML. |
| C7 | Log/engine timestamp inconsistency. Log uses local time, compaction engine uses UTC. | 10 | — (may be ungated) | 1: decide on single time standard. 2: align both. |

### D: Dependency/gating system

Infrastructure for safe coherent operation. Partially gated by A — needs enough settled ground to define what contracts look like.

| slice | description | gates | preliminary rungs |
|-------|-------------|-------|-------------------|
| D1 | Define dependency declaration format. What does an address assert about what it relies on? | A (partial) | 1: survey existing implicit dependencies (compaction→sort order, microscope→vocabulary). 2: propose declaration format. 3: settle through use. |
| D2 | Define contract format. What does an address assert about itself? | A (partial) | 1: survey existing implicit contracts. 2: propose format. 3: settle through use. |
| D3 | Build gating mechanism. When an address updates, surface its dependents. Show, don't fix. | D1,D2 | 1: determine storage (inline in files? separate index?). 2: build surface/flag logic. 3: test with real case. |
| D4 | Build surfacing display. How breaks are shown, how acknowledgment works. | D3 | 1: design display. 2: build. 3: test with deliberate break. |

### F: Source legacy + preservation

Policy chunk. 6 legacy source files and 6+ research docs with old notation. All now at 200.

| slice | description | catches | gates |
|-------|-------------|---------|-------|
| F1 | Policy decision: annotate source files with "vocabulary has changed since" header, or leave fully untouched as archive? | 15-22 | A (for annotation content) |
| F2 | Research/sketch docs — same policy. Valid content, legacy notation (I/D/G, old sort order, old branch names). | 27-29,31-32 | F1 |
| F3 | TS KEYSTONE comment block in lattice source files — mixing project contexts. Note or remove? | 34 | F1 |

### G: File distribution + cleanup

Heavily gated. 40 files at 200 (receiving dock), zero elsewhere in branches 0 and 1. Loose objects at root. Context changed since f0: files are staged at receiving, not piled in a junk drawer. Distribution is now a proper sorting operation from intake.

| slice | description | catches | gates |
|-------|-------------|---------|-------|
| G1 | Determine correct address for each file based on settled branch framing. 40 files need homes. | 30,49 | A1,A2 |
| G2 | Build distribution plan — place at destination, update manifest ledger, sign/receive each move. | — | G1, D (for tracking) |
| G3 | MATRIX and nul at root — position within structure or remove. | 14 | A |
| G4 | Execute distribution. Update FILES inventory in lattice.html after each batch. Verify each placement. | — | G2 |

### H: Practical tooling

Partially started. File browser working in V0 (fetch-based .md reader with markdown rendering). Remaining items still dream-stage.

| slice | description | status |
|-------|-------------|--------|
| H1 | File viewer in V0 — fetch-based .md reader with markdown rendering. | done |
| H2 | File count badges in V0 selector and V1 identity. | done |
| H3 | Sub-view infrastructure per view — V0 file browsing, V1 visual workspace (load HTML), V2 strict forms. | dream — gated by A5 |
| H4 | Chat in interface, code editor, schema/contracts per node, protocols per address. | dream — far horizon |
| H5 | Math/science grounding tools, data hygiene instruments. | dream — far horizon |

### I: Research ingestion

12 grounding compilations now at 200 plus 3 existing research docs. Ungated — feeds A, grounds everything.

| slice | description | gates |
|-------|-------------|-------|
| I1 | Survey: read all 12 grounding compilations, summarize what each contains, identify what grounds which addresses. Compilations: 01 grounding reference, 02 minimal ops→structure, 03 intrinsic dimension/spacetime/grammar-ontology, 04 mind/memory/external hold, 05 self-similar recursive grammar, 06 making/craft/tacit knowledge, 07 relational architecture/esoteric systems, 08 traversal/initiation/transmission, 09 the shadow/unconstrained relation, 10 structured-vs-flat experiment design, 11 data-curation pipeline methods, 12 comparison/distillation/staging-handoff. | — |
| I2 | Ingest: for each compilation, extract verified findings and note which addresses they inform. | I1 |
| I3 | Connect: identify where research findings inform floating items in A. Surface connections. | I2 |
| I4 | Existing research docs: RESEARCH_actionable.md (5 buildables), RESEARCH_OPERATION_mind_not_map.md (27-cell plan, I/D/G notation), observations.txt (permutation math). Cross-reference with new compilations. | I1 |

### J: Fold addressing system

Partially settled — checkpoint system (39-slot ternary tree) decided. Fold numbering for documents in use (f0, f1). Remaining: formal specification and composition with preservation.

| slice | description | gates |
|-------|-------------|-------|
| J1 | Research: does base-3 fold depth compose with preservation lens levels? Review sketch_compaction_id.html. Checkpoint system (39 slots) is settled ceiling — how does fold numbering relate? | I |
| J2 | Design: fold addressing format — where it applies (schedules, frames, archives, contracts). Already in use informally (f0, f1, p1-p4). | J1 |
| J3 | Settle: naming convention for type.scope.fN.YYYYMMDD — scope naming, retirement criteria. | J2 |
| J4 | Log lifecycle: sign → intake (200) → ground (branch 0) → compact when ground slots fill → archive out of system. Three log types: C (change), O (observation), D (decision). Log lives at 222 until signed. | J2 |
| J5 | Ground memory bank: how compacted logs accumulate at branch 0, fold rhythm, when detail sheds and summary persists. | J4 |

### K: Carry-forward rebuilds

Horizon chunk. Rebuild TS, spline continuity, process docs with current ground.

| slice | description | gates |
|-------|-------------|-------|
| K1 | Rebuild TS with current ground — settled vocabulary, addressing, keystone as addressing system not TS anchor. | A, I |
| K2 | Rebuild spline continuity with current ground. | A, I |
| K3 | Process doc rebuilds — HANDOFF, STATE, DISCIPLINE rebuilt forward with current vocabulary. Not fixed, rebuilt. | A |
| K4 | Connection layer — instruments measuring each other. | K1, K2, D |

## Parked intake

(Empty — no items parked yet. Items discovered during frame execution land here with: what, why parked, where discovered.)

## Schedule notes

- This is f1 — second compilation, first sort cycle applied
- Sources: manifest (rebuilt as contract ledger), audit f0 (fresh-eyes), audit passes p1-p4 (extracted from checkpoint)
- Build gate active — no code changes until user confirms settled
- Frame projection: pull one chunk into 3×3 focus plan to begin execution
- Natural first frame candidates: B (ungated, clean, clears debris), I (ungated, feeds root, 12 compilations ready), or a mixed frame pulling ungated slices from B + I
- Checkpoint system settled — 39-slot ternary tree replaces infinite compaction
- Manifest format in use but schema still floating (201 schema notes)
- f0 schedule preserved at 202 as record
