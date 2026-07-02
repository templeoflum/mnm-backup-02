---
name: convergents-best-approximation
type: object
object-type: theorem
essence: the convergents p_n/q_n of a continued fraction are the best rational approximations — no fraction with a smaller denominator gets closer
field: ["[[field.continued-fractions]]", "[[field.diophantine-approximation]]"]
status: proven
state: settled
attribution: classical (Euler, Lagrange); convergent recurrences and best-approximation property codified by Perron (1913) and Khinchin
formalized: false
source: ["[[source.khinchin-cf]]", "[[source.perron-1913]]", "[[source.hardy-wright-1938]]", "[[source.euler-1737-cf]]"]
depends-on: ["[[object.continued-fraction-expansion]]"]
used-by: ["[[object.lagrange-continued-fraction-theorem]]"]
aliases: ["object.convergents-best-approximation"]
---

**statement (plain)** — truncating a continued fraction after n steps gives a fraction pₙ/qₙ called the n-th convergent. These convergents are the *best possible* rational approximations to the number: any other fraction that is at least as close has a strictly larger denominator. Convergents are exactly how you get the famous best approximations like 22/7 and 355/113 for π.

**statement (formal)** — for x = [a₀; a₁, a₂, …] with convergents pₙ/qₙ, define
pₙ = aₙ pₙ₋₁ + pₙ₋₂, qₙ = aₙ qₙ₋₁ + qₙ₋₂, with p₋₁ = 1, p₋₂ = 0, q₋₁ = 0, q₋₂ = 1.
Then:
1. **(determinant identity)** pₙ qₙ₋₁ − pₙ₋₁ qₙ = (−1)ⁿ⁻¹, so gcd(pₙ, qₙ) = 1.
2. **(error bracket)** 1/(qₙ(qₙ + qₙ₊₁)) < |x − pₙ/qₙ| < 1/(qₙ qₙ₊₁) ≤ 1/qₙ².
3. **(best approximation of the second kind)** for any integers p, q with 1 ≤ q < qₙ₊₁ and p/q ≠ pₙ/qₙ, |qₙ x − pₙ| < |q x − p|; equivalently every "best approximation of the second kind" is a convergent.
4. **(Legendre's converse)** if a reduced fraction p/q satisfies |x − p/q| < 1/(2q²), then p/q is a convergent of x. **[confirmed]**

**proof** — via the recurrence and the determinant identity (1), which gives x − pₙ/qₙ = (−1)ⁿ/(qₙ(qₙ₊₁ + qₙ θ)) for some θ ∈ [0,1), yielding (2); the best-approximation property (3) follows by a lattice/mediant argument. Full proofs in Khinchin, *Continued Fractions*, §§1–2 [[source.khinchin-cf]]; Hardy & Wright, ch. X [[source.hardy-wright-1938]]; Perron [[source.perron-1913]]. **[confirmed]**

**caution** — convergents are best approximations of the *second kind* (minimizing |qx − p|). Best approximations of the *first kind* (minimizing |x − p/q|) also include some *semiconvergents* (intermediate fractions), so not every best approximation of the first kind is a convergent. [[source.khinchin-cf]] **[confirmed]**

**door** — Khinchin, *Continued Fractions* (Dover) [[source.khinchin-cf]]; Hardy & Wright [[source.hardy-wright-1938]].

**sources** — Encyclopedia of Mathematics, "Continued fraction" (best-approximation statement, recurrences); Wikipedia, "Continued fraction" (recurrences, determinant identity); ProofWiki, "Convergents are Best Approximations"; Rutgers ANT lecture notes (error bracket, Legendre's theorem); Khinchin (1964). Cross-confirmed across Encyclopedia of Mathematics + Wikipedia + ProofWiki/Khinchin.
