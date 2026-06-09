# sketch — ts-formulas — f1 — 20260607-150000

review. proposed changes.

---

## what should stay
- the dispatch pattern. formula produces a point, scope measures it. clean separation.
- lissajous, torus, epicyclic. standard, well-understood, useful as references.
- the shared phase array. all formulas reading the same phases means the cascade applies uniformly.

## what should change

### naming (per vocab sketch)
- "staged" → **composed**. it's the iterative matrix composition. the core.
- "freed" → **simultaneous**. all rotations at once instead of sequenced.
- "formula bank" → just **formulas**. no need for "bank."

### composed's position
**decision needed:** is composed a formula or the construction?

architecturally it sits in both places. it IS the composition (buildRaw). but from the formula selector's perspective, it's one option among several. the dispatch treats it as the default.

**proposal:** composed is the DEFAULT formula. it's what runs when no alternative is selected. the formula selector shows: composed (default), lissajous, torus, epicyclic, simultaneous. selecting an alternative bypasses the full SE(4) construction and uses the simpler parametric equation instead.

this is how it works now. no change to mechanism, just clarity about the relationship: composed = the construction expressed as a formula option.

### formula extensibility
the current formula bank is hardcoded (5 formulas). in the collapsed instrument, adding a new formula should be straightforward: write a function that takes (phases, depth, radius) → point, register it with a label.

**decision needed:** is this worth designing for now, or is it premature? the current five formulas were enough for all the findings. adding extensibility adds complexity. probably premature — design it when a sixth formula actually needs to exist.

### 3D vs 4D
the alternative formulas (lissajous, torus, epicyclic, simultaneous) are all 3D-native. they bypass the 4D construction entirely. this means:
- no 4D projection needed for them
- no w-turn viewing
- they live in a simpler space

**decision needed:** should alternative formulas also have 4D versions? probably not now. composed is the 4D formula. the others are 3D references. if a 4D lissajous is ever needed, it can be added then.

## summary
formulas are mostly carry-forward. naming changes (staged→composed, freed→simultaneous). the main architectural decision is already resolved: composed is the default formula, others are alternatives, all feed the same scope.

---
