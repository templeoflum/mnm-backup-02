---
name: liouville-approximation-theorem
type: object
object-type: theorem
essence: algebraic numbers of degree n cannot be approximated better than 1/qⁿ — the bound that built the first transcendentals
field: [field.diophantine-approximation]
status: proven
state: float
attribution: J. Liouville (1844); first explicit transcendentals (Liouville numbers / Liouville constant, 1844–1850)
formalized: true
source: [source.liouville-1844, source.cassels-1957]
depends-on: [object.dirichlet-approximation-theorem]
used-by: [object.roth-theorem]
---

**statement (plain)** — an algebraic number (a root of a polynomial with integer coefficients) cannot be approximated by rationals *too* well: the better the approximation, the larger its denominator must be, with the trade-off fixed by the number's degree. Turn it around: a number that *can* be approximated arbitrarily well — better than any power bound allows — cannot be algebraic, so it must be transcendental. That is how Liouville produced the first numbers proven transcendental.

**statement (formal)** — let α be a real algebraic number of degree n ≥ 2. Then there exists a constant c = c(α) > 0 such that for every rational p/q (q > 0),
|α − p/q| > c / qⁿ.
Contrapositive (Liouville numbers): if a real α admits, for every n, infinitely many rationals p/q with |α − p/q| < 1/qⁿ, then α is transcendental. **[confirmed]**

**proof** — let f be the minimal polynomial of α (degree n, integer coefficients). For p/q not a root, |f(p/q)| ≥ 1/qⁿ since qⁿf(p/q) is a nonzero integer. By the mean value theorem f(p/q) = f(p/q) − f(α) = (p/q − α)·f′(ξ) for some ξ between p/q and α; bounding |f′| near α gives the constant c and the bound |α − p/q| > c/qⁿ. Full treatment in [[source.cassels-1957]]. **[confirmed]**

**transcendence corollary** — the Liouville constant L = Σ_{k≥1} 10^(−k!) = 0.110001000000…0001… satisfies the contrapositive for every n, so it is transcendental. Liouville announced the existence of transcendentals via this approximation bound in 1844 (*Comptes Rendus*); the explicit decimal constant was exhibited and proven transcendental by 1850 — the first numbers ever *proven* transcendental. **[confirmed]**

**lineage / sharpening** — the exponent n in Liouville's bound is far from optimal. Successive improvements lowered the threshold: Thue 1909 (≈ n/2 + 1), Siegel 1921 (≈ 2√n), Dyson 1947 and Gelfond (≈ √(2n)), and finally [[object.roth-theorem]] 1955, which reduced the exponent all the way to 2 + ε for every algebraic irrational. Liouville's theorem is the first rung; Roth is the last. **[confirmed]**

**source** — Liouville (1844), *Comptes Rendus* (transcendence announcement) [[source.liouville-1844]]; statement, proof and Liouville-number corollary confirmed against PlanetMath ("Liouville approximation theorem"), Britannica ("Liouville number"), Wolfram MathWorld ("Liouville's constant"), and Cassels [[source.cassels-1957]]. **[confirmed]**
