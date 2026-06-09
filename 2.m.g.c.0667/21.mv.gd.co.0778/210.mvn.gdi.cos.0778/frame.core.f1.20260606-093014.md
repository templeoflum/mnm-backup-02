# Frame — core — f1 — 2026-06-05

First frame, fold 1. Core alignment — settle the center, then work outward. Source: schedule f1, audit f0, log session f0-f1.

## 0 — settle what things are

### 0.0 — branch framing (A1) — SETTLED

specification / operation / configuration. register row expanded to territory names. matrix generates its own branch names at 1D. self-similar. branches are concurrent lenses, not sequential steps. routing: 1→2→(0 or 1). branch 2 is the gate.

### 0.1 — branch naming (A2) — SETTLED

falls from 0.0. names ARE the register row expanded. no separate naming decision needed.

### 0.2 — position vocabulary (A3) — SETTLED

resolves to (finer), resolves from (broader), peers (same depth). tested against microscope, minimap, selector — reads right in all three. code labels: `resolvesTo`, `resolvesFrom`, `peers`. containment not hierarchy.

---

## 1 — apply it

Rewrite the keystone and discipline from inside the work. Not patching — rebuilding forward.

### 1.0 — keystone rebuild (A7) — OPEN

**goal**: rewrite CLAUDE.md to reflect what we know now.

**stale sections** (from audit f0):
- 200: settled/floating lists outdated
- 202: incomplete — misses 201, 202, 210, 221, 222
- 210: sort order `1→0→2` — context-dependent, routing observation (1→2→0/1) now in play
- 211: compaction description minimal — checkpoint system now settled

**missing**:
- branch names: specification / operation / configuration
- document types (manifest, schedule, audit, log, frame) and their homes (201, 202, 210, 221, 222)
- checkpoint system (39-slot ternary tree)
- routing: 1→2→(0 or 1), branch 2 as gate
- file viewer, sub-views concept
- research corpus at 200
- newly settled items from this session

**rungs**:
1. ~~blocked by 0.2~~ — SETTLED (resolves to/from, peers)
2. rewrite 200 (state), 202 (where things are), 210 (sorting), 211 (compaction)
3. add new sections for document types, checkpoint system, routing, instrument features
4. verify every address reads right against the work

### 1.1 — discipline alignment (120-122) — HOLDS

120-122 held as written. gate worked — no code changes without settling. new disciplines emerged through use (three-point update, unsigned intake, routing, projection distance, C/O/D categorization) — candidates, one session old. revisit at keystone rebuild (1.0) to decide which earned their place.

### 1.2 — LABELS/T reconciliation (A8) — SETTLED

three lenses, not drift. LABELS = positional (derived from digits, what it IS). T = operational (authored, what it DOES). branch name = territorial (concept noun, what it CONTAINS). each speaks at different moments. no merging needed — knowing when each one speaks is the reconciliation.

---

## 2 — align the instrument

Fix every piece of vocab drift in lattice.html. The code should say what the structure says.

### 2.0 — branch names in code — READY

**goal**: tabs, CSS classes, JS labels all match settled branch names.

**scope**:
- tab labels: "0 definition" → "0 specification", "1 practice" → "1 operation", "2 maintenance" → "2 configuration"
- BRANCHES array
- any branch name references in display text

**rungs**:
1. compile full list of branch name references in code
2. replace all with settled names. single pass.

### 2.1 — position vocabulary in code — READY

**goal**: microscope labels, navigation text match settled vocabulary.

**scope**:
- renderScope: "parent", "children", "siblings" labels
- any display text using hierarchical language

**rungs**:
1. compile full list of position references in code
2. replace all with settled terms

### 2.2 — dead code and stale references — READY

**goal**: clear debris. no functionality changes, just cleanup.

**scope** (from audit f0 code issues + schedule B6):
- `cycleV0Label()` — dead code, never called (#1)
- `.v0-scope-content` — CSS defined, never generated (#9)
- `.w-controls`, `.w-btn`, `.w-tog` — stale CSS (#2)
- `cellContent` — accumulates but never read (#6)
- `v0Label` comment says "triad" — stale (#11)
- B1: remove contenteditable from V0 triads (confirmed drift, catch 4/50)

**rungs**:
1. single cleanup pass through CSS, then JS
2. verify nothing breaks after removal

---

## Execution order (updated)

```
0.0 (SETTLED) ──→ 0.1 (SETTLED) ──→ 2.0 (READY)
0.2 (SETTLED) ──→ 2.1 (READY)
1.1 (HOLDS) ──→ 1.0 (keystone)
1.2 (SETTLED)──→ 1.0 (keystone)
2.2 (READY) ──→ (independent, anytime)
1.0 (OPEN) ──→ last — all settling done, only 1.1 candidates remain
```

Chunk 0 walked. Chunk 1 walked. Chunk 2 ready to execute (2.0, 2.1, 2.2). 1.0 (keystone) is the final piece — everything feeds into it.
