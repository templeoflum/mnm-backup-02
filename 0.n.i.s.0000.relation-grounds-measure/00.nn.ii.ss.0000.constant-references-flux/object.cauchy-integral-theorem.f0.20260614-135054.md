---
name: cauchy-integral-theorem
type: object
object-type: theorem
essence: the contour integral of a holomorphic function around a closed loop in a simply connected domain is zero
field: [field.complex-analysis]
status: proven
state: float
attribution: A.-L. Cauchy (1825); first proof without the f' -continuity hypothesis by É. Goursat (1900) — hence "Cauchy–Goursat"
formalized: true
source: [source.cauchy-1825, source.goursat-1900, source.ahlfors-1953]
depends-on: [object.cauchy-riemann-equations]
used-by: [object.cauchy-integral-formula, object.residue-theorem, object.liouville-theorem]
---

**statement (plain)** — if a function is holomorphic everywhere inside and on a closed loop (with no holes in the region the loop bounds), then integrating the function once around that loop gives exactly zero. Equivalently: between two points, the integral of a holomorphic function does not depend on which path you take — only on the endpoints. The "no holes" condition (simple connectedness) is essential; a singularity inside the loop can make the integral nonzero.

**statement (formal)** — let D ⊆ ℂ be open and simply connected and let f : D → ℂ be holomorphic. Then for every closed rectifiable curve γ in D,
∮_γ f(z) dz = 0.
Equivalently, ∫_γ f(z) dz depends only on the endpoints of γ within D. **[confirmed]**

**status** — proven.

**proof (reference)** — Cauchy (1825) proved it under the extra hypothesis that f′ is continuous (reducing to Green's theorem via the [[object.cauchy-riemann-equations]]). É. Goursat (1900, *Sur la définition générale des fonctions analytiques*) gave the first proof needing only that f is complex-differentiable, removing the continuity-of-f′ assumption — the modern "Cauchy–Goursat theorem." Standard treatment: Ahlfors, *Complex Analysis*, ch. 4 [[source.ahlfors-1953]]. **[confirmed]**

**lineage** — Cauchy communicated a form of the result to the Académie des Sciences in 1814, with the first general statement in the 1825 *Mémoire sur les intégrales définies, prises entre des limites imaginaires* [[source.cauchy-1825]]. Related path-independence formulations appear in earlier Gauss correspondence (1811). The completing proof is Goursat's (1900) [[source.goursat-1900]]. **[confirmed]**

**sources** — Encyclopedia of Mathematics, "Cauchy integral theorem"; Wikipedia, "Cauchy's integral theorem"; Piña-Aguirre & Farfán Márquez, "How did Cauchy prove his integral theorem?" (*J. Humanistic Math.* 16(1)); arXiv:2311.16649.
