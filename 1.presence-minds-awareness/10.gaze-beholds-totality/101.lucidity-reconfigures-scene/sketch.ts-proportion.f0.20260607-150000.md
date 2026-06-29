# sketch — ts-proportion — f0 — 20260607-150000

the self-similar scaling rule. how displacement works. baseline.

---

## what it is now

inside buildRaw, at each cycle boundary (even k, cycle ≥ 1), the construction translates outward. two modes:

### proportional (self-scale on)
```
d = k × (k+1)^(C-1) × D
```
- k: the hole constant (default 2)
- C: cycle number (1-indexed)
- D: seed radius

this makes the hole a constant fraction `(k-1)/(k+1)` of the whole at every cycle. k=2 → hole = 1/3. the form is self-similar at every scale.

### legacy (self-scale off)
```
d = off × (1/dispRatio)^(C-1)
```
- off: base displacement (default 120)
- dispRatio: geometric decay base

displacement shrinks each cycle independent of figure size. the hole proportion changes at every cycle — not self-similar.

### verified behavior (from findings)
- proportional rule verified self-similar to depth 19, cycle 9
- hole ratio: 0.3505 (stable, plateaued from 0.333 → 0.350 due to sampling floor)
- outer radius prediction accurate within 0.7% at depth 19
- COM stays at origin (comRel < 0.01)
- the earlier "breaks at L9" was an undersampling artifact, now corrected

### what k does
- k=2: hole = 1/3, displacement = 2 × figure radius. the "spherical hole" condition.
- k>2: bigger hole, displacement > 2r. the form opens up.
- k<2: smaller hole, displacement < 2r. the form tightens.
- k=1: hole = 0, displacement = 1 × radius. degenerate — form collapses on itself.

### the dispMult function
per-cycle multiplier for displacement. currently returns 1.0 always (the per-cycle knob was verified inert under normalization and removed). but the function slot exists for future use.

---
