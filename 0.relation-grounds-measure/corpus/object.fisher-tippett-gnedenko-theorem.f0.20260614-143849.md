---
name: fisher-tippett-gnedenko-theorem
type: object
object-type: theorem
essence: the only non-degenerate limit of normalized sample maxima is one of three types — Gumbel, Fréchet, Weibull
field: ["[[field.extreme-value-theory]]", "[[field.probability-theory]]"]
status: proven
state: settled
attribution: Fréchet (1927) & Fisher & Tippett (1928); rigorous proof Gnedenko (1943); sufficient conditions von Mises (1936)
formalized: true
source: ["[[source.frechet-1927]]", "[[source.fisher-tippett-1928]]", "[[source.von-mises-1936]]", "[[source.gnedenko-1943]]", "[[source.coles-2001]]"]
depends-on: []
used-by: ["[[object.generalized-extreme-value-distribution]]", "[[object.max-stable-distribution]]", "[[object.pickands-balkema-de-haan-theorem]]"]
aliases: ["object.fisher-tippett-gnedenko-theorem"]
---

**statement (plain)** — take the largest value in a sample of n independent measurements drawn from the same distribution. As n grows, if you rescale and recenter that maximum so it settles to a stable shape, the shape it settles to can only be one of three: the light-tailed Gumbel, the heavy-tailed Fréchet, or the bounded Weibull. The starting distribution does not matter — only which of the three you land in. This is the "central limit theorem for maxima."

**statement (formal)** — let X₁, …, Xₙ be i.i.d. with cdf F, and Mₙ = max(X₁, …, Xₙ). If there exist constants aₙ > 0 and bₙ ∈ ℝ such that
  P( (Mₙ − bₙ)/aₙ ≤ x ) → G(x)  as n → ∞
for a non-degenerate G, then G is of one of three types (up to location and scale):
  Fréchet:  Φ_α(x) = exp(−x^{−α}), x > 0  (and 0 for x ≤ 0), α > 0;
  reversed Weibull:  Ψ_α(x) = exp(−(−x)^{α}), x ≤ 0  (and 1 for x > 0), α > 0;
  Gumbel:  Λ(x) = exp(−e^{−x}), x ∈ ℝ.
Equivalently, under the affine reparameterization 1 + γx > 0 the three collapse into the single [[object.generalized-extreme-value-distribution]] G_γ(x) = exp(−(1+γx)^{−1/γ}) (γ ≠ 0), with the Gumbel as the γ → 0 limit. **[confirmed]**

**status** — proven (the "extremal types theorem").

**proof** — reference. The result is proved by reducing convergence of maxima to the functional/stability equation that characterizes [[object.max-stable-distribution]]s; the three types are exactly its solutions. Domain-of-attraction criteria (which F lands in which type) are stated via regular variation of the tail (Fréchet), a finite upper endpoint (Weibull), or the von Mises hazard-rate conditions (Gumbel). See Coles (2001) ch. 3 [[source.coles-2001]] and Gnedenko (1943) [[source.gnedenko-1943]].

**lineage (contested)** — Fréchet (1927) [[source.frechet-1927]] identified the heavy-tailed (Type II) limit; Fisher & Tippett (1928) [[source.fisher-tippett-1928]] gave the three asymptotic forms heuristically; von Mises (1936) [[source.von-mises-1936]] supplied sufficient conditions; Gnedenko (1943) [[source.gnedenko-1943]] gave the first rigorous and complete proof with necessary-and-sufficient domain-of-attraction conditions. The standard triple name "Fisher–Tippett–Gnedenko" credits the heuristic origin and the rigorous closure; the von Mises contribution is sometimes folded in. **[confirmed]**

**sources** — [[source.frechet-1927]], [[source.fisher-tippett-1928]], [[source.von-mises-1936]], [[source.gnedenko-1943]], [[source.coles-2001]]; cross-checked against Wikipedia (Fisher–Tippett–Gnedenko theorem) and Wolfram/EmergentMind summaries. **[confirmed]**
