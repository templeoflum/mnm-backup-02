---
name: generalized-extreme-value-distribution
type: object
object-type: definition
essence: the single three-parameter family (location, scale, shape) merging Gumbel, Fréchet and reversed-Weibull
field: ["[[field.extreme-value-theory]]", "[[field.probability-theory]]"]
status: established
state: settled
attribution: unified form von Mises (1936) & Jenkinson (1955); named families Gumbel/Fréchet/Weibull
formalized: true
source: ["[[source.von-mises-1936]]", "[[source.jenkinson-1955]]", "[[source.coles-2001]]", "[[source.gumbel-1958]]"]
depends-on: ["[[object.fisher-tippett-gnedenko-theorem]]"]
used-by: ["[[object.max-stable-distribution]]"]
aliases: ["object.generalized-extreme-value-distribution"]
---

**statement (plain)** — the GEV is one tunable distribution that contains all three extreme-value shapes at once. A single shape knob ξ decides the behavior: positive ξ gives the heavy-tailed Fréchet, zero gives the light-tailed Gumbel, negative gives the bounded reversed-Weibull. Two more knobs (location μ, scale σ) shift and stretch it. Because the [[object.fisher-tippett-gnedenko-theorem]] says maxima can only land in these three, the GEV is the universal model you fit to block maxima (e.g. annual peak floods).

**statement (formal)** — for μ ∈ ℝ (location), σ > 0 (scale), ξ ∈ ℝ (shape), with s = (x − μ)/σ:
  G(x) = exp( −(1 + ξs)^{−1/ξ} ),  ξ ≠ 0, on { x : 1 + ξs > 0 };
  G(x) = exp( −e^{−s} ),  ξ = 0, on x ∈ ℝ.
Support: ξ > 0 ⇒ x ∈ [μ − σ/ξ, +∞); ξ = 0 ⇒ ℝ; ξ < 0 ⇒ x ∈ (−∞, μ − σ/ξ]. Cases: ξ > 0 Fréchet, ξ = 0 Gumbel, ξ < 0 reversed Weibull. **[confirmed]**

**status** — established (a definition; well-posed cdf for all parameter values).

**role** — the GEV is the canonical limit law in the [[object.fisher-tippett-gnedenko-theorem]]: every non-degenerate limit of normalized block maxima is GEV up to type. It is exactly the class of [[object.max-stable-distribution]]s in one dimension.

**lineage** — the unified one-parameter-family form is attributed to von Mises (1936) [[source.von-mises-1936]] and independently A. F. Jenkinson (1955) [[source.jenkinson-1955]]; the name "generalized extreme value" and its standard statistical use trace to Jenkinson. The three component families carry the names Gumbel, Fréchet (1927), and Weibull. **[confirmed]**

**sources** — [[source.von-mises-1936]], [[source.jenkinson-1955]], [[source.coles-2001]], [[source.gumbel-1958]]; cdf/support cross-checked against Wikipedia (Generalized extreme value distribution) and the GEV literature (Fraga Alves; Jenkinson). **[confirmed]**
