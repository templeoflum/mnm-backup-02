---
name: generalized-pareto-distribution
type: object
object-type: definition
essence: the two-parameter (scale, shape) limit law for threshold excesses; partner of the GEV
field: [field.extreme-value-theory, field.probability-theory]
status: established
state: verified
attribution: Pickands (1975); the threshold-excess limit family
formalized: true
source: [source.pickands-1975, source.balkema-de-haan-1974, source.coles-2001]
depends-on: [object.pickands-balkema-de-haan-theorem]
used-by: [object.pickands-balkema-de-haan-theorem]
---

**statement (plain)** — the GPD is the shape that the overshoots above a high threshold settle into. One shape knob ξ controls the tail: positive ξ is heavy-tailed (a Pareto-like power law), zero is a plain exponential, negative ξ has a hard upper bound. A scale knob σ stretches it. It is the peaks-over-threshold partner of the GEV: the GEV models block maxima, the GPD models excesses, and they share the same shape parameter ξ.

**statement (formal)** — for scale σ > 0 and shape ξ ∈ ℝ, on y ≥ 0 (and additionally y ≤ −σ/ξ when ξ < 0):
  G_{ξ,σ}(y) = 1 − (1 + ξ y/σ)^{−1/ξ},  ξ ≠ 0;
  G_{0,σ}(y) = 1 − e^{−y/σ},  ξ = 0  (the ξ → 0 limit).
Cases: ξ > 0 Pareto-type heavy tail (unbounded); ξ = 0 exponential; ξ < 0 bounded support [0, −σ/ξ]. **[confirmed]**

**status** — established (a definition; well-posed cdf for all σ > 0, ξ ∈ ℝ).

**role** — by the [[object.pickands-balkema-de-haan-theorem]] the GPD is the universal limit of conditional excess distributions over a high threshold, and its shape ξ equals the shape of the [[object.generalized-extreme-value-distribution]] limit for the maxima of the same underlying F. Threshold-stability: if Y is GPD then Y conditioned on exceeding a higher level is again GPD with the same ξ — the analogue of max-stability.

**lineage** — the generalized Pareto family is associated with Pickands (1975) [[source.pickands-1975]] in the POT setting, with the limit-law role established jointly by Balkema & de Haan (1974) [[source.balkema-de-haan-1974]]. **[confirmed]**

**sources** — [[source.pickands-1975]], [[source.balkema-de-haan-1974]], [[source.coles-2001]]; cdf/support cross-checked against Wikipedia (Pickands–Balkema–de Haan theorem; Generalized Pareto distribution) and POT references. **[confirmed]**
