---
name: liouville-theorem
type: object
object-type: theorem
essence: a bounded entire function is constant
field: [field.complex-analysis]
status: proven
state: settled
attribution: first proved A.-L. Cauchy (1844); named for J. Liouville, who lectured/published a proof (1847)
formalized: true
source: [source.cauchy-1844, source.liouville-1847, source.ahlfors-1953]
depends-on: [object.cauchy-integral-formula]
used-by: [object.fundamental-theorem-of-algebra]
---

**statement (plain)** — an "entire" function is one that is holomorphic on the whole complex plane with no singularities anywhere. The theorem says: if such a function never grows large — if its values stay inside some fixed bound — then it cannot be doing anything at all; it must be a constant. There is no complex analogue of bounded-but-wiggly functions like sine on the real line (which is bounded but non-constant): complex holomorphy plus boundedness forces flatness.

**statement (formal)** — if f : ℂ → ℂ is entire (holomorphic on all of ℂ) and bounded (there is M with |f(z)| ≤ M for all z), then f is constant. **[confirmed]**

**status** — proven.

**proof (reference)** — apply the [[object.cauchy-integral-formula]] for f′: f′(z) = (1/2πi) ∮ f(ζ)/(ζ − z)² dζ over a circle of radius R about z. Bounding gives |f′(z)| ≤ M/R (Cauchy's estimate); let R → ∞ so f′ ≡ 0, hence f constant. Standard treatment: Ahlfors, *Complex Analysis*, ch. 4 [[source.ahlfors-1953]]. **[confirmed]**

**corollary** — yields a short proof of the [[object.fundamental-theorem-of-algebra]]: if a nonconstant polynomial had no root, 1/p would be a bounded entire function, hence constant — a contradiction. **[confirmed]**

**lineage** — first proved by A.-L. Cauchy in 1844 (Cauchy's estimates), in the context of Liouville's announcement on doubly-periodic functions [[source.cauchy-1844]]. J. Liouville presented the result in his 1847 lectures and his *Journal de Mathématiques Pures et Appliquées*; the theorem carries his name through that exposition despite Cauchy's priority [[source.liouville-1847]]. Carried as lineage. **[confirmed]**

**sources** — Wikipedia, "Liouville's theorem (complex analysis)"; AoPS Wiki, "Liouville's Theorem (complex analysis)"; Ahlfors, *Complex Analysis* [[source.ahlfors-1953]].
