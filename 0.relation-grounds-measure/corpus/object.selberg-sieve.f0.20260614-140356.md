---
name: selberg-sieve
type: object
object-type: theorem
essence: an upper-bound sieve from a free square (Σλ_d)² — optimize the weights by minimizing a quadratic form
field: [field.sieve-methods, field.analytic-number-theory]
status: proven
state: settled
attribution: Atle Selberg (1947), "On an elementary method in the theory of primes"
formalized: false
source: [source.selberg-1947, source.cojocaru-murty-2005, source.halberstam-richert-1974]
depends-on: [object.sieve-of-eratosthenes, object.mobius-function]
used-by: []
aliases: ["object.selberg-sieve"]
---

**statement (plain)** — to bound from above how many elements of a set survive sieving by the primes below z, Selberg replaces the exact inclusion–exclusion (which uses the Möbius function and is hard to control) with a clever trick: for any real weights λ_d with λ_1 = 1, the indicator of "survives the sieve" is ≤ (Σ_{d | n, d | P(z)} λ_d)². Because the bound holds for *any* such weights, you are free to choose the λ_d that make the resulting estimate smallest. Minimizing turns the sieve into a solvable quadratic-form optimization, giving a clean and strong upper bound.

**statement (formal)** — let A be a finite set with weights, P a set of primes, P(z) = ∏_{p < z, p ∈ P} p, and S(A; P, z) = #{a ∈ A : gcd(a, P(z)) = 1}. For arbitrary reals λ_d with λ_1 = 1 and λ_d = 0 for d ≥ z,
S(A; P, z) ≤ Σ_{a ∈ A} ( Σ_{d | gcd(a, P(z))} λ_d )².
Expanding and choosing the λ_d to minimize the leading (diagonalizable) quadratic form yields
S(A; P, z) ≤ X / G(z) + (remainder),  G(z) = Σ_{d < z, d | P(z)} g(d),
where X is the expected main term and g is the multiplicative function attached to the density of A in residue classes. The minimizing weights are λ_d = μ(d) · (g(d)/G(z)) · Σ_{…} (the standard Selberg weights). **[confirmed]**

**proof** — the inequality is the "obvious" bound: for n with gcd(n, P(z)) > 1, Σ_{d | gcd(n,P(z))} λ_d may be anything, but for n surviving (gcd = 1) the inner sum is λ_1 = 1, so its square is 1 ≥ the indicator. Summing over A and diagonalizing the quadratic form (a substitution y_d = Σ_{d | e} λ_e g(e)/g(d), or equivalently completing via Möbius) reduces minimization to an unconstrained problem solved by Lagrange/Cauchy–Schwarz; the minimum equals 1/G(z). Full derivation: [[source.cojocaru-murty-2005]]; [[source.halberstam-richert-1974]]; Encyclopedia of Mathematics, "Selberg sieve." **[confirmed]**

**attribution** — introduced by Atle Selberg in 1947, "On an elementary method in the theory of primes," *Norske Vid. Selsk. Forh. (Trondheim)* 19(18) [[source.selberg-1947]]. This is the "Λ² method." Distinct from Selberg's 1949 elementary proof of the PNT ([[source.selberg-1949]]). **[confirmed]**

**place** — the cleanest of the classical upper-bound sieves; sharper and simpler to apply than [[object.brun-theorem|Brun's]] combinatorial sieve for many problems (e.g. it recovers the twin-prime upper bound π₂(x) ≪ x/(log x)²). Combined with weights it yields lower bounds (almost-primes) and underlies modern work. Door: [[source.cojocaru-murty-2005]].

**sources** — [[source.selberg-1947]] (origin), [[source.cojocaru-murty-2005]] and [[source.halberstam-richert-1974]] (proofs). Statement cross-checked against Encyclopedia of Mathematics ("Selberg sieve") and Wikipedia ("Selberg sieve") and Kedlaya's analytic number theory notes. **[confirmed]**
