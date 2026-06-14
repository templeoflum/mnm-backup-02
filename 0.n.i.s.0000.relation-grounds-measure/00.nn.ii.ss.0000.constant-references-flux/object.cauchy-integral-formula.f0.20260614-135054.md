---
name: cauchy-integral-formula
type: object
object-type: theorem
essence: a holomorphic function's value inside a contour is recovered from its values on the contour
field: [field.complex-analysis]
status: proven
state: float
attribution: A.-L. Cauchy (1820s lectures; integral formula commonly dated 1831)
formalized: true
source: [source.cauchy-1825, source.cauchy-1831, source.ahlfors-1953]
depends-on: [[object.cauchy-integral-theorem]]
used-by: [[object.residue-theorem], [object.liouville-theorem], field.complex-analysis]
---

**statement (plain)** — if a function is holomorphic on and inside a simple closed curve, then its value at any point inside the curve is completely determined by its values along the curve, via a single integral. Knowing a holomorphic function on the boundary fixes it everywhere inside — a rigidity with no analogue for ordinary real functions. A consequence: a holomorphic function is automatically infinitely differentiable, and each derivative has its own boundary-integral formula.

**statement (formal)** — let f be holomorphic on an open set containing a positively-oriented (counterclockwise) simple closed rectifiable curve L and its interior; for any point z inside L,
f(z) = (1 / 2πi) ∮_L f(ζ)/(ζ − z) dζ.
More generally the derivatives satisfy
f⁽ⁿ⁾(z) = (n! / 2πi) ∮_L f(ζ)/(ζ − z)ⁿ⁺¹ dζ, n = 0, 1, 2, … ,
so holomorphic ⇒ infinitely differentiable (indeed analytic). **[confirmed]**

**status** — proven.

**proof (reference)** — follows from the [[object.cauchy-integral-theorem]]: deform L to a small circle about z and evaluate the limit; the derivative formulas come by differentiating under the integral sign. Full treatment: Ahlfors, *Complex Analysis*, ch. 4 [[source.ahlfors-1953]]. **[confirmed]**

**lineage** — due to A.-L. Cauchy, emerging from his 1820s lectures and residue/integral work; Encyclopedia of Mathematics traces the integral to his 1823 *Résumé des leçons … sur le calcul infinitésimal*, while the explicit integral formula is commonly dated to 1831 (alongside the calculus of residues). Carried as a 1820s–1831 lineage rather than a single date. **[confirmed as attribution]** [[source.cauchy-1831]]

**sources** — Encyclopedia of Mathematics, "Cauchy integral"; Wikipedia, "Cauchy's integral formula"; Ahlfors, *Complex Analysis* [[source.ahlfors-1953]].
