---
name: bertrands-postulate
type: object
object-type: theorem
essence: there is always a prime between n and 2n — the simplest hard ceiling on prime gaps
field: ["[[field.prime-gap-statistics]]", "[[field.analytic-number-theory]]"]
status: proven
state: settled
attribution: conjectured Joseph Bertrand (1845); first proved Pafnuty Chebyshev (1852)
formalized: true
source: ["[[source.bertrand-1845]]", "[[source.chebyshev-1852]]", "[[source.hardy-wright-1938]]"]
depends-on: ["[[object.prime-number-theorem]]"]
used-by: []
aliases: ["object.bertrands-postulate"]
---

**statement (plain)** — for any whole number n greater than 1, there is always at least one prime number strictly between n and 2n. The primes never leave a gap that big: you can never double a number without crossing a prime.

**statement (formal)** — for every integer n > 1 there exists a prime p with n < p < 2n. (Equivalently, for n ≥ 1 there is a prime p with n < p ≤ 2n.) In gap terms: p_{n+1} < 2p_n for all n, so the gap g_n = p_{n+1} − p_n satisfies g_n < p_n. **[confirmed]**

**status** — proven (1852). Despite the historical name "postulate," it is a theorem.

**proof** — first proved by P. L. Chebyshev in 1852 [[source.chebyshev-1852]], by deriving effective upper and lower bounds for the prime-counting function π(x) (the Chebyshev functions θ, ψ) and showing the lower bound for π(2n) exceeds the upper bound for π(n). Hence the alternate name **Bertrand–Chebyshev theorem**. A simpler proof using central binomial coefficients was given by Paul Erdős (1932); Ramanujan (1919) gave a Gamma-function proof generalizing it (origin of Ramanujan primes). Standard modern reference: Hardy & Wright [[source.hardy-wright-1938]]. **[confirmed]**

**lineage** — the conjecture is Bertrand's (1845) [[source.bertrand-1845]], who checked it up to ~3,000,000 without proof; the proof is Chebyshev's (1852). Attribution to two distinct people for conjecture vs. proof is uncontested. **[confirmed]**

**door** — Hardy & Wright, *An Introduction to the Theory of Numbers*; Aigner & Ziegler's *Proofs from THE BOOK* presents the Erdős proof.
