---
name: euler-theorem-totient
type: object
object-type: theorem
essence: a^φ(n) ≡ 1 (mod n) for gcd(a,n)=1 — the composite-modulus generalization of Fermat's little theorem
field: [field.elementary-number-theory]
status: proven
state: verified
attribution: Leonhard Euler (1763, E271); generalizes Fermat's little theorem
formalized: true
source: [source.euler-1763, source.hardy-wright-1938]
depends-on: [object.fermat-little-theorem]
used-by: [object.chinese-remainder-theorem]
---

**statement (plain)** — let φ(n) count the whole numbers from 1 to n that share no common factor with n. Then for any number a sharing no factor with n, raising a to the power φ(n) leaves remainder 1 modulo n.

**statement (formal)** — let φ be Euler's totient function, φ(n) = #{1 ≤ k ≤ n : gcd(k, n) = 1}. If gcd(a, n) = 1, then a^φ(n) ≡ 1 (mod n). When n = p is prime, φ(p) = p − 1 and this reduces to [[object.fermat-little-theorem]]. **[confirmed]**

**proof** — the residues mod n coprime to n form a multiplicative group (the unit group ℤ/nℤ)^× of order φ(n); by Lagrange's theorem every element's order divides φ(n), so a^φ(n) ≡ 1. Euler's own proof ([[source.euler-1763]], Theorem 11) does not use group language and instead argues via complete residue systems / polynomial factorization. Modern treatment [[source.hardy-wright-1938]] (Theorem 72). **[confirmed]**

**lineage** — proved by Leonhard Euler in "Theoremata arithmetica nova methodo demonstrata" (E271): presented to the Berlin Academy 8 June 1758, published 1763 [[source.euler-1763]]. There φ is not yet named the "totient" (Sylvester later) but is the "number of parts prime to N." Often called the **Fermat–Euler theorem**. **[confirmed]**

**sources** — Euler E271 [[source.euler-1763]]; Hardy & Wright, Theorem 72 [[source.hardy-wright-1938]]. Cross-checked against Wikipedia (Euler's theorem / totient function) and the Euler Archive (E271, 1758-present / 1763-print).
