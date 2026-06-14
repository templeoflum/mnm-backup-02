---
name: dirichlet-l-function
type: object
object-type: definition
essence: L(s,χ)=Σ χ(n)n⁻ˢ=∏ₚ(1−χ(p)p⁻ˢ)⁻¹ — a zeta-like series twisted by a Dirichlet character
field: [field.multiplicative-number-theory, field.analytic-number-theory]
status: established
state: float
attribution: P. G. L. Dirichlet (1837)
formalized: true
source: [source.dirichlet-1837, source.davenport-1967, source.apostol-1976]
depends-on: [object.multiplicative-function, object.euler-product]
used-by: [object.dirichlet-theorem-arithmetic-progressions]
---

**statement (plain)** — a Dirichlet L-function is like the Riemann zeta function, but each term 1/nˢ is weighted ("twisted") by a Dirichlet character χ — a periodic, completely multiplicative function attached to a modulus q. Because χ is multiplicative, the series factors into a product over primes (an Euler product). These functions are the tools Dirichlet built to prove that every coprime arithmetic progression holds infinitely many primes.

**statement (formal)** — let χ be a Dirichlet character modulo q (a completely [[object.multiplicative-function]] χ : ℤ → ℂ that is periodic mod q, with χ(n) = 0 when gcd(n, q) > 1). The Dirichlet L-function is, for Re(s) > 1,
L(s, χ) = Σ_{n=1}^∞ χ(n) n^{−s} = ∏_{p prime} (1 − χ(p) p^{−s})^{−1}  (the [[object.euler-product]]).
For χ non-principal the series converges for Re(s) > 0; L(s, χ) continues to a meromorphic function on ℂ (entire when χ is non-principal; for the principal character χ₀ it is ζ(s) times finitely many Euler factors and has a simple pole at s = 1). The Dirichlet character is completely multiplicative, which is exactly what makes the Euler product valid. **[confirmed]**

**relation to ζ** — for the trivial modulus q = 1 (principal character), L(s, χ) = [[object.riemann-zeta-function]] ζ(s). L-functions are the "characters' worth" of zeta, one per residue class structure mod q.

**key role** — the non-vanishing L(1, χ) ≠ 0 for non-principal χ is the crux of [[object.dirichlet-theorem-arithmetic-progressions]]. **[confirmed]**

**lineage** — introduced by P. G. L. Dirichlet (1837) to prove the theorem on primes in arithmetic progressions [[source.dirichlet-1837]]. **[confirmed]**

**sources** — P. G. L. Dirichlet (1837) [[source.dirichlet-1837]]; H. Davenport, *Multiplicative Number Theory*, ch. 4 [[source.davenport-1967]]; T. M. Apostol, *Introduction to Analytic Number Theory*, ch. 6–7 [[source.apostol-1976]]; cross-confirmed by Wikipedia/HandWiki "Dirichlet L-function." **[confirmed]**
