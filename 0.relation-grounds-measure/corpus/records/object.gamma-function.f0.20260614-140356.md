---
name: gamma-function
type: object
object-type: definition
essence: Γ(z) = ∫₀^∞ t^(z−1)e^(−t) dt — the analytic interpolation of the factorial, Γ(n)=(n−1)!
field: ["[[field.special-functions-series-acceleration]]", "[[field.complex-analysis]]"]
status: established
state: settled
attribution: L. Euler (1729–30); integral & Γ-notation due to A. M. Legendre
formalized: true
source: ["[[source.euler-gamma-1729]]", "[[source.dlmf]]", "[[source.abramowitz-stegun-1964]]"]
depends-on: []
used-by: ["[[object.stirling-approximation]]", "[[object.gauss-hypergeometric-function]]", "[[object.riemann-zeta-function]]"]
---

**statement (plain)** — the gamma function extends the factorial to all complex numbers except the non-positive integers. For a positive integer n it gives (n−1)!, and it interpolates smoothly between those values. It is the unique such interpolation that is logarithmically convex on the positive reals (Bohr–Mollerup).

**statement (formal)** — for Re(z) > 0,
Γ(z) = ∫₀^∞ t^(z−1) e^(−t) dt (Euler's integral of the second kind).
It extends by analytic continuation to a meromorphic function on ℂ with simple poles at z = 0, −1, −2, … of residue (−1)ⁿ/n! at z = −n, and no zeros; 1/Γ is entire. It satisfies Γ(z+1) = z·Γ(z), Γ(1) = 1, hence Γ(n) = (n−1)! for n ∈ ℤ₊, and the reflection formula Γ(z)Γ(1−z) = π/sin(πz). Equivalent definitions: Euler's product Γ(z) = lim_{n→∞} n! nᶻ / [z(z+1)…(z+n)] and the Weierstrass product 1/Γ(z) = z e^{γz} ∏_{k≥1}(1+z/k)e^{−z/k}. **[confirmed]**

**lineage** — the interpolation problem was raised by Daniel Bernoulli and Christian Goldbach in the 1720s. [[Leonhard Euler]] solved it: in a letter to Goldbach of 13 October 1729 he gave an **infinite product**, and on 8 January 1730 announced the **integral representation**; the work was written up as "De progressionibus transcendentibus seu quarum termini generales algebraice dari nequeunt" (E19, submitted to the St. Petersburg Academy 28 Nov 1729). [[source.euler-gamma-1729]] **[confirmed]**

**notation** — the symbol Γ and the modern integral normalization Γ(z)=∫₀^∞ t^{z−1}e^{−t}dt are due to [[Adrien-Marie Legendre]] (who called the integrals "Eulerian integrals of the first and second kind"); the names "beta" and "gamma" function trace to Binet and Gauss. Euler's original argument was shifted by one (his expression interpolates n! rather than (n−1)!). **[confirmed as attribution]**

**sources** — definition & continuation: NIST DLMF §5.2 [[source.dlmf]]; Abramowitz & Stegun ch. 6 [[source.abramowitz-stegun-1964]]; historical origin [[source.euler-gamma-1729]]. **[confirmed]**
