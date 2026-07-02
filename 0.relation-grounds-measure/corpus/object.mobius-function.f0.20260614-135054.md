---
name: mobius-function
type: object
object-type: definition
essence: μ(n) — +1/−1 on squarefree numbers by parity of prime count, 0 otherwise; the Dirichlet inverse of the constant function 1
field: [field.multiplicative-number-theory, field.analytic-number-theory]
status: established
state: settled
attribution: A. F. Möbius (1832)
formalized: true
source: [source.mobius-1832, source.apostol-1976, source.hardy-wright-1938]
depends-on: [object.multiplicative-function]
used-by: [object.mobius-inversion, object.selberg-sieve]
aliases: ["object.mobius-function"]
---

**statement (plain)** — the Möbius function assigns to each positive integer n a value of +1, −1, or 0. It is +1 if n is 1 or a product of an even number of distinct primes, −1 if n is a product of an odd number of distinct primes, and 0 if n is divisible by any prime squared. So it picks out squarefree numbers and tags them by the parity of how many primes they contain.

**statement (formal)** — define μ : ℤ⁺ → {−1, 0, 1} by
- μ(1) = 1,
- μ(n) = (−1)^k if n = p₁p₂…p_k is a product of k *distinct* primes (n squarefree),
- μ(n) = 0 if p² ∣ n for some prime p.

μ is a [[object.multiplicative-function]]. Its defining divisor-sum identity is
Σ_{d∣n} μ(d) = [n = 1] = ε(n),
i.e. the sum of μ over the divisors of n is 1 when n = 1 and 0 otherwise. **[confirmed]**

**key role** — μ is precisely the [[object.dirichlet-convolution]] inverse of the constant function 1: in the Dirichlet ring, μ ∗ 1 = ε. That single fact powers [[object.mobius-inversion]]. **[confirmed]**

**lineage** — introduced by August Ferdinand Möbius in 1832 [[source.mobius-1832]]; precursor coefficients appear implicitly in Euler. Standard attribution is Möbius. **[confirmed as attribution]**

**sources** — A. F. Möbius (1832) [[source.mobius-1832]]; T. M. Apostol, *Introduction to Analytic Number Theory*, §2.2 [[source.apostol-1976]]; Hardy & Wright ch. XVI [[source.hardy-wright-1938]]; cross-confirmed by Wikipedia "Möbius function" and MathWorld. **[confirmed]**
