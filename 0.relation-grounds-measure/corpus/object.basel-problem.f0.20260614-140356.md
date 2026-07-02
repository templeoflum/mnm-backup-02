---
name: basel-problem
type: object
object-type: theorem
essence: the sum of reciprocal squares is π²/6 — ζ(2) = Σ 1/n² = π²/6
field: [field.special-functions-series-acceleration, field.analytic-number-theory]
status: proven
state: settled
attribution: posed P. Mengoli (1650); solved L. Euler (1735, publ. 1740)
formalized: true
source: [source.euler-1740, source.dlmf]
depends-on: [object.riemann-zeta-function]
used-by: []
aliases: ["object.basel-problem"]
---

**statement (plain)** — add up the reciprocals of all the perfect squares: 1 + 1/4 + 1/9 + 1/16 + …. The total is exactly π²/6 (about 1.6449). The surprise is that summing rational numbers built from the integers yields a value involving π.

**statement (formal)** — Σ_{n=1}^∞ 1/n² = π²/6, i.e. [[object.riemann-zeta-function]] evaluated at 2 gives ζ(2) = π²/6. **[confirmed]**

**proof** — Euler's original argument writes sin(x)/x as an infinite product over its roots ±π, ±2π, …, sin(x)/x = ∏_{k≥1}(1 − x²/(k²π²)), and matches the coefficient of x² against the Taylor series sin(x)/x = 1 − x²/6 + …, giving Σ 1/(k²π²) = 1/6, hence Σ 1/k² = π²/6. The product step (that sin has no roots beyond the obvious ones, and converges as written) was not rigorous in 1734/35; Euler supplied firmer proofs in 1741 and 1755, and the product was justified later (Weierstrass factorization). Modern rigorous proofs: Fourier series of x², the double integral ∫∫ 1/(1−xy), and Parseval. Value listed at DLMF §25.6.1 [[source.dlmf]]; original solution [[source.euler-1740]]. **[confirmed]**

**lineage** — posed by [[Pietro Mengoli]] in 1650 (*Novae quadraturae arithmeticae*, Bologna); attacked unsuccessfully by Jakob, Johann, and Daniel Bernoulli and by Leibniz over ~90 years (the problem is named for the Bernoullis' home city, Basel). [[Leonhard Euler]] solved it: read to the St. Petersburg Academy on 5 December 1735 and published as "De summis serierum reciprocarum" (E41, printed 1740) [[source.euler-1740]]. Often dated "1734" (year solved) or "1735" (year read); carry as "1735, publ. 1740." **[confirmed]**

**sources** — value: DLMF §25.6 [[source.dlmf]]; first solution: Euler E41 [[source.euler-1740]]. **[confirmed]**
