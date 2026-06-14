---
name: brun-theorem
type: object
object-type: theorem
essence: the sum of reciprocals of the twin primes converges — to Brun's constant B₂ ≈ 1.902
field: [field.sieve-methods, field.analytic-number-theory]
status: proven
state: float
attribution: Viggo Brun (1919), via his combinatorial sieve (introduced 1915)
formalized: false
source: [source.brun-1919, source.brun-1915, source.cojocaru-murty-2005, source.halberstam-richert-1974]
depends-on: [object.sieve-of-eratosthenes]
used-by: []
---

**statement (plain)** — add up 1/p over all primes p that belong to a twin-prime pair (a pair p, p+2 both prime). Unlike the sum of reciprocals of *all* primes, which diverges, this sum is finite. Its value is Brun's constant. Because it converges, this result by itself cannot decide whether there are infinitely many twin primes — a finite sum is compatible with both.

**statement (formal)** — let the twin primes be (3,5), (5,7), (11,13), (17,19), …. Then
B₂ = (1/3 + 1/5) + (1/5 + 1/7) + (1/11 + 1/13) + (1/17 + 1/19) + … < ∞,
with B₂ ≈ 1.902160583 (Sebah & Demichel, 2002, using twin primes up to 10¹⁶; the exact value is unknown, and an unconditional bound gives B₂ < 2.347). The convergence rests on the sieve upper bound for the twin-prime counting function π₂(x) = #{p ≤ x : p, p+2 both prime}:
π₂(x) = O( x (log log x)² / (log x)² ). **[confirmed]**

**proof** — Brun's combinatorial sieve: a truncated inclusion–exclusion (Brun's "pure sieve," then his more refined sieve with sign-controlled truncation) bounds π₂(x) above by ≪ x (log log x)²/(log x)². Since Σ 1/p² over the twin primes is then dominated by a convergent series (partial summation against the π₂ bound), the reciprocal sum converges. Full treatment: [[source.cojocaru-murty-2005]] ch. on Brun's sieve; [[source.halberstam-richert-1974]]. **[confirmed]**

**lineage** — Viggo Brun introduced the modern combinatorial sieve in his 1915 paper on Goldbach pairs [[source.brun-1915]], then applied it in 1919 to prove the convergence of the twin-prime reciprocal sum [[source.brun-1919]]. This is the historical birth of sieve theory beyond [[object.sieve-of-eratosthenes]]. Attribution uncontested. **[confirmed]**

**note** — the bound exponent on log x is 2 (the twin-prime count is genuinely sparser than π(x) by an extra log factor). The constant B₂ is an empirical numerical estimate, not a closed form; do not ink a more precise digit string than the 2002 computation supports.

**sources** — [[source.brun-1919]] (the theorem), [[source.brun-1915]] (the sieve), [[source.cojocaru-murty-2005]] and [[source.halberstam-richert-1974]] (proofs/exposition). Value and bound cross-checked against Wikipedia (Brun's theorem), t5k Prime Glossary, and Wolfram MathWorld. **[confirmed]**
