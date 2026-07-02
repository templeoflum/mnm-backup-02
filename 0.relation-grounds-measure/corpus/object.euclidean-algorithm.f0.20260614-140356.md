---
name: euclidean-algorithm
type: object
object-type: theorem
essence: repeated division (or subtraction) computes the gcd of two integers and terminates
field: ["[[field.elementary-number-theory]]"]
status: proven
state: settled
attribution: Euclid, Elements VII.1–2 (c. 300 BCE)
formalized: true
source: ["[[source.euclid-elements]]", "[[source.hardy-wright-1938]]"]
depends-on: []
used-by: ["[[object.fundamental-theorem-of-arithmetic]]", "[[object.chinese-remainder-theorem]]"]
aliases: ["object.euclidean-algorithm"]
---

**statement (plain)** — to find the greatest common divisor of two whole numbers, repeatedly replace the larger by its remainder on division by the smaller; when the remainder hits zero, the last non-zero number is the gcd. The process always stops.

**statement (formal)** — for integers a, b with b ≠ 0, gcd(a, b) = gcd(b, a mod b), and gcd(a, 0) = |a|. Iterating the division a = qb + r (0 ≤ r < b) produces a strictly decreasing sequence of non-negative remainders that reaches 0 in finitely many steps; the last non-zero remainder equals gcd(a, b). **[confirmed]**

**proof** — **correctness**: any common divisor of a and b divides r = a − qb, and any common divisor of b and r divides a, so the pairs {a, b} and {b, r} have identical common divisors and hence the same gcd. **Termination**: the remainders r₀ > r₁ > r₂ > ⋯ ≥ 0 form a strictly decreasing sequence of non-negative integers, which must hit 0. The result is in [[source.euclid-elements]] VII.1 (the relatively-prime case, via repeated subtraction / *antenaresis*) and VII.2 (the general gcd); modern treatment [[source.hardy-wright-1938]] §12.3. **[confirmed]**

**note** — Euclid uses repeated subtraction (anthyphairesis), equivalent to the division form; VII.1–2 treat numbers, while X.2–3 treat the analogous procedure on geometric magnitudes. The algorithm predates Euclid (he compiled it). **[confirmed]**

**sources** — Euclid, *Elements* VII.1–2 [[source.euclid-elements]]; Hardy & Wright §12.3 [[source.hardy-wright-1938]]. Cross-checked against Wikipedia and the Clark Univ. (Joyce) *Elements* edition.
