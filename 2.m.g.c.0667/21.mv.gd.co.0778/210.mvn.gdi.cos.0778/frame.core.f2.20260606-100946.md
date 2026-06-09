# Frame — core — f2 — 260606-100946

First frame, fold 2. Execution phase. Source: f1 checkpoint, log session f1.

## 0 — settle what things are — COMPLETE

### 0.0 — branch framing (A1) — SETTLED

specification / operation / configuration. register row expanded to territory names. matrix generates its own branch names at 1D. self-similar. branches are concurrent lenses, not sequential steps. routing: 1→2→(0 or 1). branch 2 is the gate.

### 0.1 — branch naming (A2) — SETTLED

falls from 0.0. names ARE the register row expanded. no separate naming decision needed.

### 0.2 — position vocabulary (A3) — SETTLED

resolves to (finer), resolves from (broader), peers (same depth). tested against microscope, minimap, selector — reads right in all three. code labels: `resolvesTo`, `resolvesFrom`, `peers`. containment not hierarchy.

---

## 1 — apply it

### 1.0 — keystone rebuild (A7) — SKETCHED

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
- position vocabulary (resolves to/from, peers)
- three lenses (LABELS/T/branch name)
- workbench at 112

**rungs**:
1. ~~blocked by 0.2~~ — SETTLED
2. rewrite 200 (state), 202 (where things are), 210 (sorting), 211 (compaction)
3. add new sections for document types, checkpoint system, routing, instrument features
4. verify every address reads right against the work

### 1.1 — discipline alignment (120-122) — HOLDS

120-122 held as written. gate worked — no code changes without settling. new disciplines emerged through use (three-point update, unsigned intake, routing, projection distance, C/O/D categorization) — candidates, one session old. revisit at keystone rebuild (1.0) to decide which earned their place.

### 1.2 — LABELS/T reconciliation (A8) — SETTLED

three lenses, not drift. LABELS = positional (derived from digits, what it IS). T = operational (authored, what it DOES). branch name = territorial (concept noun, what it CONTAINS). each speaks at different moments. no merging needed — knowing when each one speaks is the reconciliation.

---

## 2 — align the instrument — COMPLETE

All executed on workbench copy at 112. Source at 200 untouched.

### 2.0 — branch names in code — DONE

definition→specification, practice→operation, maintenance→configuration. 11 references changed: CSS comments (3), tab labels (3), BRANCHES array (3), LABELS lookup (1), JS section comments (3). T triad "practice" at 21 correctly left — authored data.

### 2.1 — position vocabulary in code — DONE

parent→resolves from, children→resolves to, siblings→peers. variable names (parentAddr→resolvesFrom, children→resolvesTo, siblings→peers, parent→broader). display labels updated. comment "sum children"→"sum resolved".

### 2.2 — dead code and stale references — DONE

removed: `cycleV0Label()` function, `.v0-scope-content` CSS, `.w-controls`/`.w-btn`/`.w-tog` CSS, `cellContent` object + accumulator calls, `contenteditable` attrs from V0 triad spans + blur handlers. V1 contenteditable untouched. v0Label comment already correct.

---

## Execution order (updated)

```
0.0 (SETTLED)
0.1 (SETTLED)
0.2 (SETTLED)
1.1 (HOLDS)
1.2 (SETTLED)
2.0 (DONE — workbench)
2.1 (DONE — workbench)
2.2 (DONE — workbench)
1.0 (SKETCHED at 111) ──→ staging → audit → install
```

Remaining: 1.0 keystone rebuild. Everything else settled or done. Workbench changes at 112 need routing back through 2 (audit, verify) before reaching source at 200.

---

## Execution log

1. copied lattice.html from 200 → 112 (workbench). manifested.
2. 2.0 — branch names: 11 references changed on workbench. logged.
3. 2.1 — position vocab: parent/children/siblings → resolves from/to/peers on workbench. logged.
4. 2.2 — dead code: cycleV0Label, stale CSS, cellContent, V0 contenteditable removed on workbench. logged.
5. manifest state snapshot updated — settled/floating/blocked lists current.
6. frame files renamed to YYMMDD-HHMMSS UTC format. timestamp convention corrected.
7. FILES synced in 112 workbench copy — drift between copies exposed.
8. observation: static FILES won't scale. needs dynamic filesystem read or manifest connection. scheduled B8 + B9.
9. keystone sketch written at 111. principles (100-102) filled with floating content from session evidence. method (110-112) filled floating. digit not digits corrected.
10. observation: section headings ("what X is") are keystone labels, not address properties. UI showed them on cards as if they belonged to the address. floating — needs clarifying.
11. T renamed to triad in three lenses. settled.
12. branch/leaf/cell vocab noted as tree language — reads as resolution depth not hierarchy. holding. [float]
13. frame complete. all 9 slices addressed. staging next: 112 + 111 → 200 → 201 → 202 → 221 → install.
