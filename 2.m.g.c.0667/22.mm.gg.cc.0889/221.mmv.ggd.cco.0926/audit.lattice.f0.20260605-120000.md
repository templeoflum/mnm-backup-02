# Audit — lattice — f0 — 2026-06-05

Fresh-eyes audit of the entire system. No assumptions carried forward.

## Filesystem

### Structure

Complete 3x3x3 ternary tree materialized as directories. 3 branches, 9 leaves, 27 cells. All directory names match their address patterns exactly.

### Occupied cells (4 of 27)

| cell | files | size | role |
|------|-------|------|------|
| 020 | 1 | 364 KB | preservation archive (workbench snapshot zip) |
| 111 | 27 | ~1.2 MB | workbench — everything lives here |
| 201 | 1 | 28 KB | session manifest (misnamed — is a session log, not a true manifest) |
| 202 | 1 | 10 KB | schedule (first compilation, f0) |

### Empty cells (23 of 27)

Branch 0: 000, 001, 002, 010, 011, 012, 021, 022
Branch 1: 100, 101, 102, 110, 112, 120, 121, 122
Branch 2: 200, 210, 211, 212, 220, 222

### Root-level files (outside address structure)

| file | size | status |
|------|------|--------|
| CLAUDE.md | 6.3 KB | keystone — stale at 200 (state) and 210 (sort order) |
| MATRIX | 575 B | quick reference card — legacy sort order `1 → 0 → 2` |
| nul | 72 B | artifact — Windows reserved name, potential issue |

### Distribution problem

73% of all project data sits at 111. One cell holds everything. The system is a tree with 27 addresses but only 4 are occupied, and one of those holds 27 files that belong at various other addresses.

---

## Files at 111 — full inventory and classification

### Active instrument (1 file)

| file | size | description | status |
|------|------|-------------|--------|
| lattice.html | 65 KB | the working lattice — 3 views, all current code | ACTIVE, sole build target |

### Source lattice variants (3 files)

| file | size | description | status |
|------|------|-------------|--------|
| lattice_full.html | 17 KB | earlier full lattice | LEGACY — uses POLES, Existence/Cognition/Trajectory, I/D/G, --is/--does/--goes CSS |
| lattice_deep.html | 29 KB | deep-view lattice variant | LEGACY — same vocabulary issues as lattice_full |
| lattice_checkpoint_known_good.html | 17 KB | checkpoint backup | LEGACY — identical to lattice_full, measured/contemplative/constructive in HTML |

### Compaction sketches (3 files)

| file | size | description | status |
|------|------|-------------|--------|
| sketch_archive_compaction.html | 17 KB | compaction UI sketch | LEGACY — `branchNames=['ground (measured)','do (contemplative)','goes (constructive)']` |
| sketch_compaction_id.html | 75 KB | compaction ID system sketch | LEGACY — uses "triad" for fold history (not noun/verb/mod), old sort order |
| sketch_compaction_sim.html | 41 KB | compaction simulation | LEGACY — `branchNames=['branch 0 (ground)','branch 1 (do)','branch 2 (goes)']`, old shift encoding |

### TS (Trajectoscope) files (4 files)

| file | size | description | status |
|------|------|-------------|--------|
| TS_3D.html | 171 KB | 3D TS visualization | STANDALONE TOY — large, self-contained |
| TS_4D.html | 177 KB | 4D TS visualization | STANDALONE TOY — large, self-contained |
| TS_fingerprint.html | 179 KB | TS fingerprint tool | STANDALONE TOY — large, self-contained |
| TS_formulas.html | 184 KB | TS formula reference | STANDALONE TOY — large, current build per toy_catalog |

### Spline continuity (1 file)

| file | size | description | status |
|------|------|-------------|--------|
| spline_continuity_v2 (4).html | 56 KB | spline continuity visualization v2 | STANDALONE TOY — space in filename, numbered copy "(4)" |

### Process documents (5 files)

| file | size | description | status |
|------|------|-------------|--------|
| HANDOFF.md | 7 KB | session handoff protocol | PROCESS DOC — legacy vocabulary likely |
| STATE.md | 1.7 KB | state snapshot | PROCESS DOC — legacy, superseded by keystone at 200 |
| DISCIPLINE.md | 1.4 KB | working discipline rules | PROCESS DOC — likely maps to 120-122 content |
| findings.md | 75 KB | TS findings, self-correcting | RESEARCH — extensive, verified material |
| FINDINGS_ternary_TS.md | 11 KB | TS ternary findings | RESEARCH — uses I/D/G notation, rigorous |

### Research and planning documents (6 files)

| file | size | description | status |
|------|------|-------------|--------|
| RESEARCH_actionable.md | 22 KB | research-to-action bridge, TS + mind-not-map dives | RESEARCH — 5 ranked buildables from TS, operation plan from mind-not-map |
| RESEARCH_OPERATION_mind_not_map.md | 6.4 KB | full 27-cell operation plan for data refinery | RESEARCH — lattice used as planning instrument, uses I/D/G notation |
| SKETCH_data_refinery.md | 5.8 KB | data refinery dream sketch | DREAM — parked, falsifiable bet, lattice-as-curation-instrument |
| SKETCH_deep_address.md | 3.3 KB | deep address structure dreams | DREAM — ratio-as-layer, addresses within addresses |
| toy_catalog.md | 15 KB | master toy catalog (20 toys) | CATALOG — parent index, tracks all toys and their status |
| ux_plan.md | 13 KB | TS UI restructure plan | PLAN — observation vs measurement, progressive disclosure |

### Spline brief (1 file)

| file | size | description | status |
|------|------|-------------|--------|
| spline_continuity_BRIEF.md | 9.3 KB | cold-start development brief for spline project | BRIEF — handoff document, references spline_continuity_v2 |

### Other (2 files)

| file | size | description | status |
|------|------|-------------|--------|
| observations.txt | 844 B | permutation pairs and 26/27 observation | RESEARCH — confirmed math, current session |
| the_two_who_built.md | 5.8 KB | parable/narrative | STANDALONE — no structural vocabulary issues |

---

## Code audit — lattice.html (1534 lines)

### Architecture

Single-file HTML application: CSS (lines 8-498), HTML (lines 500-538), JS (lines 540-1531). Three views sharing one `currentAddr` state variable. Full DOM rebuild on every render (innerHTML, no diffing).

### Views — what exists now

**View 0 (Definition)**: Selector + Microscope. Foldable tree of branches/leaves/cells in top panel. Detail panel below showing address breakdown, editable triad, position links, register badges, file inventory with fetch-based .md reader.

**View 1 (Practice)**: Three-column layout. Left: identity (address, structural info, register badges, file count). Center: triad card with depth-responsive sizing. Right: concentric ring SVG, ratio arc with ticks, minimap of dots, ratio line. Address bar with clickable digit spinners.

**View 2 (Maintenance)**: Compaction engine simulation. 6-level tower (year through second), 3 slots per level. Archive/batch/reset buttons. Destination picker (3x3x3 grid). Log panel. Naming preview.

### Code issues found (15)

| # | severity | description | location |
|---|----------|-------------|----------|
| 1 | low | `cycleV0Label()` is dead code — never called, mode buttons inline the logic | line 829-832 |
| 2 | low | stale CSS references `.w-controls`, `.w-btn`, `.w-tog` — don't exist | lines 494-496 |
| 3 | info | ROLE_DECODE/MODE_DECODE/REG_DECODE defined in V1 section but used by V0 — works but misplaced | lines 1131-1133 |
| 4 | medium | triad edits (contenteditable) are volatile — lost on refresh, never persisted | lines 1020-1026 |
| 5 | medium | compaction engine state not persisted — lost on refresh | line 767 |
| 6 | low | `cellContent` accumulates data but is never read or displayed | line 687 |
| 7 | low | `archiveDest` not persisted — resets to '020' every refresh | line 686 |
| 8 | info | file fetching requires HTTP server — fails on file:// | lines 1056-1059 |
| 9 | low | `.v0-scope-content` CSS class defined but never generated | lines 207-211 |
| 10 | low | log timestamps use local time, compaction engine uses UTC — inconsistent | line 1490 |
| 11 | info | children code for depth 1 and depth 2 is identical (copy-paste, not buggy) | lines 956-960 |
| 12 | low | renderMd table header detection is fragile — first row may render as td not th | line 1095 |
| 13 | fixed | ratio calculation was `* 10000` instead of `* 1000` — paths didn't match folders | line 555 (fixed this session) |
| 14 | fixed | FILES inventory had 12 phantom files, 12 real files missing | line 644-658 (fixed this session) |
| 15 | info | `go()` doesn't call `saveState()` — minimap nav lost on refresh | line 788 |

### Color system

Three branch colors: 0=blue (#4488cc), 1=green (#44cc66), 2=orange (#cc8844). First digit = branch color (borders, containers). Last digit = accent color (verb text). Each digit individually colored in address displays. Noun/mod muted #8a93a3. Grayscale hierarchy from #0a0c11 (deepest) to #e8ebf0 (brightest text).

### State persistence

Persisted (sessionStorage): activeView, currentAddr, v0Open, v0Collapsed, v0Label.
Lost on refresh: compaction engine, triad edits, archive destination, cell content, loaded file, log entries.

---

## Keystone (CLAUDE.md) audit

### What's accurate

- Matrix (000): correct
- Address format (010-012): correct
- Structure tree (020): correct, all 27 cells listed with correct addresses
- Discipline (120-122): correct, still the active working protocol
- Preservation (220-222): correct

### What's stale

| address | issue |
|---------|-------|
| 200 | settled/floating lists are outdated — new items settled and new items floating since this was written |
| 202 | says `workbench: 111` and `preserved: 020` — true but incomplete, 201 and 202 now occupied |
| 210 | `shift register: 1 → 0 → 2` — flagged as context-dependent, may not be the only valid order |
| 211 | compaction description is minimal — code now has a full engine |

### What's missing

- No mention of file viewer, fetch-based reader, sub-views concept
- No mention of schedule/manifest/audit document types
- No mention of the session's floating items (branch-as-mode, sub-views per view, view-as-mode constraints)
- Research corpus at 111 not referenced (12+ research documents, 4 TS tools, 1 spline tool, 20-toy catalog)

---

## MATRIX (root file) audit

Contains the matrix, ratios, letter mappings, shift/fold/lens/cycle rules, and keystone tree summary. Uses old sort order `shift: 1 → 0 → 2`. Accurate as a quick reference card except for the sort order question (A4 in schedule). Lives outside the address structure.

---

## Cross-cutting findings

### 1. Everything at 111

27 files at one address. The workbench is a junk drawer. Files belong at various addresses:
- Process docs (HANDOFF, STATE, DISCIPLINE) → branch 1 leaves (10, 11, 12) or branch 2
- Research findings → unplaced, no research address exists yet
- TS tools → standalone projects, no clear home in current structure
- Sketches and dreams → parked, no dream-stage address
- Source lattice variants → legacy archive, preservation candidates
- toy_catalog → catalog/index, possibly 010 or similar
- observations.txt → research, possibly 001 or branch 0

### 2. Legacy vocabulary persists in source files

6 files at 111 use legacy vocabulary (I/D/G, POLES, Existence/Cognition/Trajectory, measured/contemplative/constructive). Policy decision (F1 in schedule) needed: annotate or leave untouched as archive.

### 3. Two naming systems coexist

LABELS (structural: "spec of spec") and T triads (semantic: "relation · grounds · measure") both name every address. Both appear in the code. This is catch 47 / slice A8 — two lenses by design, or drift?

### 4. Session log misnamed as manifest

The document at 201 is a session log, not an inventory manifest. A real manifest would inventory every file, every feature, every state — the full picture. The session log records what happened.

### 5. The document at 201 had wrong file inventory

The FILES object in lattice.html listed 12 files that don't exist and missed 12 that do. Fixed this session, but this means the lattice was showing phantom data to anyone looking.

### 6. Research corpus is uncharted

12+ research documents, 4 TS visualizations, 1 spline visualization, a 20-toy catalog — all sitting at 111 with no ingestion plan beyond "Chunk I" in the schedule. This is a significant body of work with no systematic inventory.

### 7. No dependency tracking exists

Files reference each other (spline_continuity_BRIEF references spline_continuity_v2, toy_catalog references TS tools, RESEARCH_OPERATION uses lattice addressing for planning). No formal dependency system surfaces these connections. This is Chunk D in the schedule.

---

## What the manifest needs to hold

Based on this audit, a real manifest at 201 should contain:

1. **File inventory** — every file at every address, what it is, what state it's in
2. **Feature inventory** — what each view does, what works, what's broken
3. **State snapshot** — what's settled, what's floating, what's blocked
4. **Dependency map** — which files reference which, which code depends on what data
5. **Legacy status** — which files use old vocabulary, which are current
6. **Intake/outflow ledger** — what moved where, when, confirmed by whom
7. **Research inventory** — what research exists, what's been ingested, what hasn't

The session log currently at 201 should be renamed and possibly relocated to ground (branch 0) as a settled record.
