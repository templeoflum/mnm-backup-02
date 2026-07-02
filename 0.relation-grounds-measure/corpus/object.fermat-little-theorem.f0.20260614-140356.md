---
name: fermat-little-theorem
type: object
object-type: theorem
essence: a^p ≡ a (mod p) for prime p — equivalently a^(p−1) ≡ 1 (mod p) when p ∤ a
field: [field.elementary-number-theory]
status: proven
state: settled
attribution: stated Fermat (1640, no proof); first published proof Euler (1736); independently Leibniz (unpublished, before 1683)
formalized: true
source: [source.fermat-1640, source.euler-flt-1736, source.hardy-wright-1938]
depends-on: []
used-by: [object.euler-theorem-totient, object.quadratic-reciprocity]
aliases: ["object.fermat-little-theorem"]
---

**statement (plain)** — pick any prime p. Raise any whole number to the power p, and the result leaves the same remainder modulo p as the number itself. If the number is not a multiple of p, then raising it to the power p − 1 leaves remainder 1.

**statement (formal)** — for a prime p and any integer a, a^p ≡ a (mod p). If in addition gcd(a, p) = 1, then a^(p−1) ≡ 1 (mod p). **[confirmed]**

**proof** — standard combinatorial / group-theoretic proofs: (1) the binomial coefficients C(p, k) are divisible by p for 0 < k < p, giving (x+y)^p ≡ x^p + y^p (mod p), then induct on a; or (2) the nonzero residues form a group of order p − 1 under multiplication, so a^(p−1) ≡ 1 by Lagrange. Euler's original proof ([[source.euler-flt-1736]], E54) is by induction on the base. Modern treatment [[source.hardy-wright-1938]] (Theorem 71). **[confirmed]**

**lineage** — **stated** by Pierre de Fermat in his letter of 18 Oct 1640 to Frénicle de Bessy, with the remark that he had a proof but omitted it for brevity [[source.fermat-1640]]. **First published proof** by Leonhard Euler, 1736 (E54, "Theorematum quorundam ad numeros primos spectantium demonstratio") [[source.euler-flt-1736]]. Leibniz had essentially the same proof in an unpublished manuscript before 1683. **[confirmed]**

**generalization** — extended to composite moduli by [[object.euler-theorem-totient]]: a^φ(n) ≡ 1 (mod n) for gcd(a, n) = 1.

**sources** — Fermat's 1640 letter [[source.fermat-1640]]; Euler E54 [[source.euler-flt-1736]]; Hardy & Wright, Theorem 71 [[source.hardy-wright-1938]]. Cross-checked against Wikipedia and the Euler Archive (E54 as first published proof).
