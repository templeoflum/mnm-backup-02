# Frame — core — f0 — 2026-06-05

First frame. Core alignment — settle the center, then work outward. Source: schedule f1, audit f0, log session f0.

## 0 — settle what things are

What the branches are, what they're called, how position is described. Based on evidence from traversal, not declaration.

### 0.0 — branch framing (A1)

**goal**: define what 0/1/2 are as modes of engagement.

**evidence**:
- O.0112: every operation uses all three branches simultaneously. they're concurrent lenses, not sequential steps.
- O.0140: address-trace (where files land) and operation-trace (how we reason) are different readings. files landed at branch 2, reasoning used all three.
- O.0162: branch 2 charted itself through its own instruments (manifest, schedule, audit, log). four document types, all at leaf 20 and leaf 22.
- p4 catch 41: branch triads (`relation·grounds·measure`, `presence·minds·awareness`, `structure·maintains·order`) say what branches do more accurately than the branch names.
- p4 catch 42: View 1 literally rotates (same address, multiple representations). View 2 literally translates (items displaced through shift register, moved upward).
- p4 catch 49: everything accumulating at the workshop isn't failure to distribute — it's the system working. raw material accumulates where work happens.

**rungs**:
1. read the triads for all three branches and their leaves against how we actually used them this session
2. propose framing that reads right from inside the work
3. settle through discussion — both ends agree or it floats

### 0.1 — branch naming (A2)

**goal**: names that match the framing. "maintenance" flagged as too narrow.

**evidence**:
- current names: definition / practice / maintenance
- triad names: relation·grounds·measure / presence·minds·awareness / structure·maintains·order
- floating framing: ground / workshop / protocol
- "maintenance" doesn't capture what branch 2 does — it sorts, audits, manifests, logs, preserves, hands off. it's the entire operational infrastructure.

**rungs**:
1. blocked by 0.0 — framing settles first
2. test candidate names against every address in the branch
3. settle — names must read right at branch, leaf, and cell level

### 0.2 — position vocabulary (A3)

**goal**: replace parent/child/sibling with terms that describe the actual operation.

**evidence**:
- p1 catch 3: "parent" implies authority. containment is mutual.
- p4 catch 45: even "contains/contained by" implies direction. what changes between 11 and 111 is resolution. "resolves to" (finer) and "resolves from" (broader) describes the operation.

**rungs**:
1. blocked by 0.0 — framing informs vocabulary
2. test "resolves to/from" against actual navigation (microscope, minimap, selector)
3. settle — must read right in code labels, not just prose

---

## 1 — apply it

Rewrite the keystone and discipline from inside the work. Not patching the old version — rebuilding forward.

### 1.0 — keystone rebuild (A7)

**goal**: rewrite CLAUDE.md to reflect what we know now, not what we guessed before.

**stale sections** (from audit f0):
- 200: settled/floating lists outdated
- 202: incomplete — only lists 111 and 020, misses 201, 202, 221, 222
- 210: sort order `1→0→2` — context-dependent, not the only valid order
- 211: compaction description minimal — checkpoint system now settled

**missing**:
- document types (manifest, schedule, audit, log) and their homes
- checkpoint system (39-slot ternary tree)
- file viewer, sub-views concept
- research corpus
- the session's floating items and newly settled items

**rungs**:
1. blocked by chunk 0 — branch framing and naming must settle first
2. rewrite 200 (state), 202 (where things are), 210 (sorting), 211 (compaction)
3. add new sections for document types, checkpoint system, instrument features
4. verify every address reads right against the work

### 1.1 — discipline alignment (120-122)

**goal**: check the discipline against how it actually operated this session. update if needed.

**current discipline**:
- 120: equal ground. propose, discuss, settle, build — nothing skips.
- 121: proposals float. "it's settled on my end" is. back it up or it isn't settled.
- 122: don't build on unsettled ground. if you're moving toward building without the gate, stop.

**evidence from practice**:
- the gate held this entire session. no code changes to lattice functionality.
- the three-point update discipline (filesystem + FILES + manifest) emerged through use — not in the keystone.
- unsigned intake discipline emerged — receiving is not endorsing.
- the log itself is a discipline instrument — C/O/D forces you to categorize what you're doing.

**rungs**:
1. read 120-122 against session log — what held, what's missing, what drifted
2. propose additions based on what emerged (three-point update, unsigned intake, log discipline)
3. settle — discipline must be minimal and true, not aspirational

### 1.2 — LABELS/T reconciliation (A8)

**goal**: decide if two naming systems is design or drift.

**evidence**:
- LABELS: structural ("spec of spec", "ops of config") — says what it IS positionally
- T triads: semantic ("unit·holds·one", "view·connects·continuity") — says what it DOES
- p4 catch 47: two lenses on the same address, unreconciled in code
- the triads named our operations before we performed them (checkpoint cognitive trace)

**rungs**:
1. review whether both systems are needed or one subsumes the other
2. if both: define when each is used and how they relate
3. settle in code — comments, variable names, display logic

---

## 2 — align the instrument

Fix every piece of vocab drift in lattice.html. The code should say what the structure says.

### 2.0 — branch names in code

**goal**: tabs, CSS classes, JS labels all match settled branch names.

**scope**:
- tab labels ("0 definition", "1 practice", "2 maintenance")
- BRANCHES array and any branch name references
- view headers and display text

**rungs**:
1. blocked by chunk 0 — names must settle first
2. compile full list of branch name references in code
3. replace all with settled names. single pass, no partial updates.

### 2.1 — position vocabulary in code

**goal**: microscope labels, navigation text match settled vocabulary.

**scope**:
- renderScope: "parent", "children", "siblings" labels
- any tooltip or display text using hierarchical language

**rungs**:
1. blocked by 0.2 — vocabulary must settle first
2. compile full list of position references in code
3. replace all with settled terms

### 2.2 — dead code and stale references

**goal**: clear debris. no functionality changes, just cleanup.

**scope** (from audit f0 code issues + schedule B6):
- `cycleV0Label()` — dead code, never called (#1)
- `.v0-scope-content` — CSS defined, never generated (#9)
- `.w-controls`, `.w-btn`, `.w-tog` — stale CSS (#2)
- `cellContent` — accumulates but never read (#6)
- `v0Label` comment says "triad" — stale (#11)
- B1: remove contenteditable from V0 triads (confirmed drift, catch 4/50)

**rungs**:
1. not blocked — can execute independently
2. single cleanup pass through CSS, then JS
3. verify nothing breaks after removal

---

## Execution order

```
0.0 (branch framing) ──→ 0.1 (naming) ──→ 1.0 (keystone)
                     └──→ 0.2 (position) ──→ 1.0 (keystone)
                                          ──→ 2.0 (code names)
                                          ──→ 2.1 (code vocab)
1.1 (discipline) ──→ 1.0 (keystone)
1.2 (LABELS/T) ──→ 1.0 (keystone)
2.2 (dead code) ──→ (independent, anytime)
```

0.0 is the root. Everything flows from what the branches are. 2.2 can run anytime — it's just cleanup. The keystone rebuild (1.0) is the last piece because everything feeds into it.
