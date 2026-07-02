---
name: chebyshev-equioscillation-theorem
type: object
object-type: theorem
essence: a polynomial is the best uniform approximant iff its error equioscillates at n+2 points with alternating signs and equal magnitude
field: [field.approximation-theory]
status: proven
state: settled
attribution: P. L. Chebyshev (1854/1859); rigorous modern form Borel (1905) — "Borel–Chebyshev theorem"
formalized: true
source: [source.chebyshev-1854, source.chebyshev-1859, source.borel-1905, source.trefethen-atap, source.cheney-approx]
depends-on: [object.best-uniform-approximation]
used-by: [object.chebyshev-polynomials]
aliases: ["object.chebyshev-equioscillation-theorem"]
---

**statement (plain)** — among all polynomials of degree ≤ n, the one closest to a given continuous function in the worst-case (uniform) sense is exactly the one whose error wiggles back and forth: the error reaches its maximum size at least n+2 times, alternating in sign, each spike the same height. This alternation both characterizes the best approximant and proves it unique. It is the working tool for finding (e.g. via the Remez algorithm) and recognizing minimax polynomials.

**statement (formal)** — let f ∈ C[a,b] and let p be a polynomial of degree ≤ n. Then p is the best uniform approximation to f from the polynomials of degree ≤ n **if and only if** the error e = f − p attains its norm ‖e‖∞ at n+2 points a ≤ x₀ < x₁ < ⋯ < x_{n+1} ≤ b with alternating signs: e(xᵢ) = σ(−1)ⁱ‖e‖∞ for a fixed σ ∈ {+1, −1}. The best approximant exists and is unique. **[confirmed]**

**status** — proven.

**proof** — sufficiency: if the error equioscillates on n+2 points, any closer competitor q would make p − q a degree-≤n polynomial sign-agreeing with the error at those n+2 alternation points, forcing n+1 sign changes hence n+1 roots, so p − q ≡ 0. Necessity is a perturbation argument. The general statement holds for any Haar (Chebyshev) system, not only polynomials. Full treatment in [[source.borel-1905]]; modern expositions in [[source.cheney-approx]] and [[source.trefethen-atap]]. **[confirmed]**

**lineage** — Chebyshev posed the least-deviation problem in his 1854 linkage memoir [[source.chebyshev-1854]] and developed the alternation characterization in "Sur les questions de minima…" (1859) [[source.chebyshev-1859]]. The rigorous modern existence/uniqueness/equioscillation treatment is due to É. Borel, *Leçons sur les fonctions de variables réelles* (1905) [[source.borel-1905]] — hence the name **Borel–Chebyshev theorem**. The Encyclopedia of Mathematics dates Chebyshev's result variously to 1854 and 1859; both are carried here rather than flattened. **[confirmed]**

**sources** — [[source.chebyshev-1854]], [[source.chebyshev-1859]], [[source.borel-1905]], cross-checked against the Encyclopedia of Mathematics "Chebyshev theorem" entry, Wikipedia "Equioscillation theorem," and the History of Approximation Theory archive. **[confirmed]**
