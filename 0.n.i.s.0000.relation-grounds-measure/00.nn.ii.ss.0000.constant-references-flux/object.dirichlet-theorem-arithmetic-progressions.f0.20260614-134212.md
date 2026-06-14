---
name: dirichlet-theorem-arithmetic-progressions
type: object
object-type: theorem
essence: every coprime arithmetic progression a, a+q, a+2q, … contains infinitely many primes
field: [field.analytic-number-theory, field.multiplicative-number-theory]
status: proven
state: float
attribution: P. G. L. Dirichlet (1837)
formalized: true
source: [source.dirichlet-1837]
depends-on: [object.dirichlet-l-function, object.euler-product]
used-by: []
---

**statement (plain)** — pick a starting number a and a step q that share no common factor. Then the list a, a+q, a+2q, a+3q, … contains infinitely many prime numbers. (For example, infinitely many primes end in 1, in 3, in 7, in 9.)

**statement (formal)** — if a and q are coprime positive integers (gcd(a, q) = 1), there are infinitely many primes p with p ≡ a (mod q). **[confirmed]**

**status** — proven (1837).

**proof** — Dirichlet's proof introduced the [[object.dirichlet-l-function]] L(s, χ) and turned the question analytic: it suffices to show L(1, χ) ≠ 0 for every non-principal character χ mod q (the principal-character L-function having a simple pole at s = 1 supplies the divergence; the non-vanishing keeps each residue class in play). This founded analytic number theory. **[confirmed]**

**stronger form** — Σ_{p ≡ a (q)} 1/p diverges, and the primes distribute (asymptotically) evenly across the φ(q) coprime residue classes (Dirichlet density). **[confirmed]**

**source** — P. G. L. Dirichlet (1837), "Beweis des Satzes, dass jede unbegrenzte arithmetische Progression…" [[source.dirichlet-1837]]; door: Apostol ch. 7 [[source.apostol-1976]], MIT 18.785 notes. **[confirmed as attribution]**
