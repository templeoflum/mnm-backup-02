---
name: euclid-theorem-infinitude-of-primes
type: object
object-type: theorem
essence: there are infinitely many prime numbers — no finite list exhausts them
field: [field.elementary-number-theory]
status: proven
state: float
attribution: Euclid, Elements IX.20 (c. 300 BCE)
formalized: true
source: [source.euclid-elements, source.hardy-wright-1938]
depends-on: [object.fundamental-theorem-of-arithmetic]
used-by: [object.prime-number-theorem, object.dirichlet-theorem-arithmetic-progressions]
---

**statement (plain)** — there is no largest prime; the supply of prime numbers never runs out. However many primes you list, there is always at least one more.

**statement (formal)** — the set of prime numbers is infinite. Equivalently (Euclid's own phrasing, *Elements* IX.20): "prime numbers are more than any assigned multitude of prime numbers." **[confirmed]**

**proof** — Euclid's original argument is **direct, by cases, not by contradiction** (a common misreading). Given any finite list of primes p₁, …, pₙ, form N = p₁p₂⋯pₙ + 1. Let q be a prime dividing N (one exists by [[object.fundamental-theorem-of-arithmetic]], or Euclid's earlier VII.31). No pᵢ divides N: each pᵢ divides the product, so if it also divided N it would divide the difference N − (product) = 1, which is impossible. Hence q is a prime not in the list, so the list was not complete. Full text: [[source.euclid-elements]] IX.20; standard modern treatment [[source.hardy-wright-1938]] (Theorem 4). **[confirmed]**

**note (not by contradiction)** — as the [[source.euclid-elements]] text and modern commentators stress, the assumption "these are all the primes" is never used; the proof produces a new prime from any finite set. The contradiction phrasing is a later, dispensable reformulation. **[confirmed]**

**sources** — Euclid, *Elements* IX.20 [[source.euclid-elements]] (c. 300 BCE); Hardy & Wright, *An Introduction to the Theory of Numbers*, Theorem 4 [[source.hardy-wright-1938]]. Cross-checked against Wolfram MathWorld and Clark Univ. (Joyce) *Elements* edition.
