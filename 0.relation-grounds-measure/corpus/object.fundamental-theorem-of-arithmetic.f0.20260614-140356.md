---
name: fundamental-theorem-of-arithmetic
type: object
object-type: theorem
essence: every integer > 1 factors into primes in exactly one way, up to order
field: [field.elementary-number-theory]
status: proven
state: settled
attribution: existence — Euclid, Elements (c. 300 BCE); first complete proof of uniqueness — Gauss, Disquisitiones Arithmeticae art. 16 (1801)
formalized: true
source: [source.euclid-elements, source.gauss-1801, source.hardy-wright-1938]
depends-on: [object.euclidean-algorithm]
used-by: [object.euclid-theorem-infinitude-of-primes, object.euler-product, object.multiplicative-function, object.godel-numbering]
---

**statement (plain)** — every whole number greater than 1 is either a prime or can be written as a product of primes, and that product is unique apart from the order in which you write the factors.

**statement (formal)** — for every integer n > 1 there exist primes p₁ ≤ p₂ ≤ ⋯ ≤ p_k with n = p₁p₂⋯p_k (**existence**), and this representation is unique up to the order of the factors (**uniqueness**). Equivalently, n = ∏ pᵢ^(aᵢ) with distinct primes pᵢ and exponents aᵢ ≥ 1, uniquely. **[confirmed]**

**proof** — two parts. **Existence**: by strong induction / least-counterexample — a smallest non-factorable n > 1 cannot be prime, so n = ab with 1 < a, b < n, each of which factors, contradiction. **Uniqueness**: rests on **Euclid's lemma** ([[source.euclid-elements]] VII.30): if a prime p divides a product ab then p divides a or p divides b. Comparing two prime factorizations of n and applying the lemma repeatedly forces them to match term-for-term. Full modern proof: [[source.hardy-wright-1938]] (Theorems 2 & 3). **[confirmed]**

**lineage** — Euclid supplied the building blocks (VII.30 = Euclid's lemma; VII.31 existence of a prime divisor; IX.14 a uniqueness special case) but did not state or prove the general unique-factorization theorem. The **first full and correct statement and proof of uniqueness** is **C. F. Gauss, *Disquisitiones Arithmeticae*, Article 16 (1801)** [[source.gauss-1801]], who also noted that contemporaries had often assumed uniqueness without proof. **[confirmed]**

**sources** — Euclid, *Elements* VII.30–31, IX.14 [[source.euclid-elements]]; Gauss, *Disquisitiones Arithmeticae* art. 16 [[source.gauss-1801]]; Hardy & Wright, Theorems 2–3 [[source.hardy-wright-1938]]. Cross-checked against Wikipedia and ProofWiki (Gauss art. 16 as first uniqueness proof).
