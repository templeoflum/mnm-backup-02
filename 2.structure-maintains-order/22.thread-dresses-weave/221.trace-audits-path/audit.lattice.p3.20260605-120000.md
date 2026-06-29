# Audit — lattice — p3 — 2026-06-05

Pass 3: Full corpus audit. Every file at 111 examined for legacy vocabulary, framing issues, and technical debt.

## Legacy vocabulary in source files

### 15. `POLES` variable name

lattice_full.html:204, lattice_checkpoint_known_good.html:204, lattice_deep.html:265. Stale internal name from earlier framing. Current vocabulary: BRANCHES.

### 16. Existence/Cognition/Trajectory as branch names

lattice_full.html:205-207, lattice_checkpoint_known_good.html:205-207, lattice_deep.html:266-268,336,355,433. Superseded. Current: 0=definition, 1=practice, 2=maintenance.

### 17. measured/contemplative/constructive as register names

lattice_checkpoint_known_good.html:124-126 (explicit in HTML), sketch_archive_compaction.html:241. Superseded. Current: spec/ops/config.

### 18. ground/mind/making as CSS classes

lattice_full.html:53,57-59,66; lattice_deep.html:52,56-58,65; lattice_checkpoint_known_good.html:53,57-59,66. CSS branch identifiers using old names. "mind" and "making" are legacy.

### 19. `--is/--does/--goes` as CSS variable names

lattice_full.html:29, lattice_deep.html:29, lattice_checkpoint_known_good.html:29. Mode-based color naming. Current lattice.html uses value-based `--b0/--b1/--b2`.

### 20. `REL={I:'is',D:'does',G:'goes'}` letter-mode map

lattice_full.html:176, lattice_deep.html:237, lattice_checkpoint_known_good.html:176. Single-letter I/D/G notation.

### 21. I/D/G letter notation throughout documents

FINDINGS_ternary_TS.md (III, DDD, GGG throughout), RESEARCH_OPERATION_mind_not_map.md (III, DDD, GGG + dot notation 0.0.0), SKETCH_data_refinery.md (GGG reference), HANDOFF.md (DDD, GGG, DI references). Current keystone uses numeric 0/1/2 with lowercase n/v/m, i/d/g, s/o/c.

### 22. ground/do/goes as branch labels in sketches

sketch_compaction_sim.html:937, sketch_archive_compaction.html:241,406. "do" and "goes" are mode-row values, not branch names. Current branch names: definition/practice/maintenance.

## Framing and positioning issues

### 23. HANDOFF.md would orient a new session incorrectly

Uses Existence/Cognition/Trajectory (line 64), measured/contemplative/constructive (line 60), I/D/G notation, and defines "keystone" differently (TS anchor block, line 14) from current usage (the addressing system). The doc is largely stale.

### 24. STATE.md describes a superseded state

"the triaxis: form/function/application" (line 17), "the navigable sketchpad" (line 18). Neither term is current. The state doc doesn't describe the current state.

### 25. DISCIPLINE.md uses "seeing/building/holding" categories

Lines 4, 9, 14. Maps conceptually to 0/1/2 but uses different vocabulary than the keystone. "Propose, don't crown" (line 15) maps to the hard gate at 120-122 but is stated differently. Whether this is drift or intentional alternate framing is ambiguous.

### 26. toy_catalog.md uses "Track" organization

Lines 39, 83. "TRACK: Mathematical Foundations", "TRACK: Algebra of Operations" — an independent organizational scheme unrelated to the addressing system. The catalog sits at 111 but doesn't use keystone addresses.

### 27. FINDINGS_ternary_TS.md — valid content, legacy notation

The ternary-addressing findings are rigorous and self-aware (every claim tagged confirmed/provable-impossible/open). The I/D/G notation was current when written. Content worth preserving; notation is legacy.

### 28. RESEARCH_OPERATION uses dot notation and I/D/G alongside digits

Planning document using lattice addresses as instrument. Legacy notation, content still potentially useful.

### 29. SKETCH_data_refinery.md uses "ground/do/document" as branch labels

Line 32: "0-ward / do=1-ward / document=2-ward". "document" differs from current "maintenance"/"where are we going". Dream-stage sketch.

### 30. Everything at 111 — positioning question

TS project files (TS_3D, TS_4D, TS_fingerprint, TS_formulas, TS_BRIEF), spline project files, research docs, sketches, process docs, the parable — all at 111 (method operating). 28 files at one address, zero files at 26 other cell addresses. The structure has a node that's bursting and 26 that are empty.

*Reframed in pass 4 (catch 49): if branch 1 IS the workshop, accumulation at 111 is the system working, not a distribution failure.*

## Technical legacy in sketch files

### 31. sketch_archive_compaction.html uses old sort order

1→0→2 shift register. Same as the MATRIX file's `shift: 1 → 0 → 2`. Settled preservation order is 0→1→2 (with nuance: no canonical path, verb on-ramp most accessible, 012 most grammatically stable).

### 32. sketch_compaction_sim.html:338 — old shift encoding

`// shift: 0->2, 1->0, new->1` — the 1→0→2 shift register operation.

### 33. sketch_compaction_id.html — "triad" used for compaction ID, not noun·verb·mod

The triad chain in compaction (fold history) is a different concept from the lattice's noun·verb·mod triad. Two concepts sharing one term.

### 34. TS KEYSTONE comment block in source lattice files

lattice_full.html:2-19, lattice_deep.html:2-19, lattice_checkpoint_known_good.html:2-19. A TS project preamble sitting inside lattice files, mixing project contexts.

### 35. Color values shifted between source and current

Source files: `--is:#62b6f0; --does:#62f0b0; --goes:#f0a862`. Current lattice.html: `--b0:#4488cc; --b1:#44cc66; --b2:#cc8844`. Same hue families, different hex values. Not broken — but the source data was built under slightly different colors.

## What worked (from the corpus)

### 36. observations.txt

Clean. Pure math, precise, no legacy drift, no overclaiming. A model for what findings entries should look like.

### 37. FINDINGS_ternary_TS.md

Rigorous discipline. Every claim tagged. Status ledger at bottom. The epistemic care is strong even where notation is legacy.

### 38. findings.md (TS)

Extensive, self-correcting. Every overclaim caught and labeled within the document. The audit passes (drift-ironing) within it show the discipline working.

### 39. TS_BRIEF.md

Clean cold-start document. Self-aware about overselling risk. The brief format worked well as a door.

### 40. the_two_who_built.md

Stands alone. No structural claims to verify. A parable, not a specification.

## Sort order nuance (user-noted)

The system was built back and forth — there is no one canonical path. The verb on-ramp (1→0→2) is the most accessible, not necessarily the true path. Preservation is about logging and safekeeping ordered by time, so there is a case for 012 — and its address IS 012, the most grammatically stable. The three orderings (build 0→2→1, settled 0→1→2, shift register 1→0→2) may each be correct in their own context rather than contradicting each other.
