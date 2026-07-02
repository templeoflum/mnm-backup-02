---
name: max-stable-distribution
type: object
object-type: definition
essence: a distribution invariant (up to affine rescaling) under taking the maximum of i.i.d. copies — exactly the GEV class
field: ["[[field.extreme-value-theory]]", "[[field.probability-theory]]"]
status: established
state: settled
attribution: stability postulate behind Fisher–Tippett (1928) / Gnedenko (1943); class = GEV
formalized: true
source: ["[[source.fisher-tippett-1928]]", "[[source.gnedenko-1943]]", "[[source.coles-2001]]"]
depends-on: ["[[object.fisher-tippett-gnedenko-theorem]]", "[[object.generalized-extreme-value-distribution]]"]
used-by: []
---

**statement (plain)** — a distribution is max-stable if taking the maximum of several independent copies gives back the same distribution, just shifted and stretched. This self-similarity under maximization is the structural reason there can be only three extreme-value types: if a limit of maxima exists at all, it must be max-stable, and the only max-stable shapes are the GEV family. It is the maxima analogue of the stable distributions for sums.

**statement (formal)** — a non-degenerate cdf G is **max-stable** if for every n ≥ 1 there exist constants aₙ > 0 and bₙ ∈ ℝ such that
  G(aₙ x + bₙ)^n = G(x)  for all x.
Equivalently: if X₁, …, Xₙ are i.i.d. with cdf G, then (max(X₁,…,Xₙ) − bₙ)/aₙ has cdf G. The class of max-stable distributions coincides exactly with the [[object.generalized-extreme-value-distribution]] family (equivalently, the three types Gumbel/Fréchet/Weibull up to location-scale). **[confirmed]**

**status** — established (a definition, with the characterization theorem identifying the class as GEV).

**role** — max-stability is the fixed-point property behind the [[object.fisher-tippett-gnedenko-theorem]]: any non-degenerate limit of normalized maxima must satisfy the stability equation above, and solving it yields precisely the three types. In higher dimensions and over space, max-stable distributions and max-stable processes generalize this (1-Fréchet margins admit a spectral-measure representation), grounding the modeling of spatial extremes.

**lineage** — the stability postulate is implicit in Fisher & Tippett (1928) [[source.fisher-tippett-1928]] and made rigorous, with the full characterization, by Gnedenko (1943) [[source.gnedenko-1943]]. **[confirmed]**

**sources** — [[source.fisher-tippett-1928]], [[source.gnedenko-1943]], [[source.coles-2001]]; definition and "class = GEV" cross-checked against Wikipedia (Generalized extreme value distribution; max-stable) and max-stable-process literature (Leadbetter; Resnick; de Haan & Ferreira). **[confirmed]**
