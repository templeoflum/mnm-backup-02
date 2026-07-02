---
name: chinese-remainder-theorem
type: object
object-type: theorem
essence: a system of congruences with pairwise-coprime moduli has a unique solution mod the product
field: ["[[field.elementary-number-theory]]"]
status: proven
state: settled
attribution: origin Sunzi Suanjing (c. 3rd–5th c. CE); first general algorithm Qin Jiushao (1247); modern form Gauss (1801)
formalized: true
source: ["[[source.sunzi-suanjing]]", "[[source.qin-1247]]", "[[source.gauss-1801]]", "[[source.hardy-wright-1938]]"]
depends-on: ["[[object.euclidean-algorithm]]", "[[object.euler-theorem-totient]]"]
used-by: []
---

**statement (plain)** — if you know what remainder a number leaves when divided by several divisors that share no common factors with each other, then those remainders pin the number down exactly, modulo the product of the divisors — and such a number always exists.

**statement (formal)** — let n₁, …, n_k be pairwise coprime positive integers with product N = ∏ nᵢ, and let a₁, …, a_k be any integers. Then the system

  x ≡ aᵢ (mod nᵢ),  i = 1, …, k,

has a solution x, and the solution is **unique modulo N**. Equivalently, the map ℤ/Nℤ → ∏ ℤ/nᵢℤ, x ↦ (x mod nᵢ), is a ring isomorphism. **[confirmed]**

**proof** — **existence** (constructive): set Nᵢ = N/nᵢ; since gcd(Nᵢ, nᵢ) = 1, [[object.euclidean-algorithm]] (extended) gives Mᵢ with Mᵢ Nᵢ ≡ 1 (mod nᵢ); then x = Σ aᵢ Mᵢ Nᵢ solves the system. **uniqueness**: two solutions differ by a multiple of every nᵢ, hence (pairwise coprime) by N. Modern treatment [[source.hardy-wright-1938]] (Theorem 121). **[confirmed]**

**lineage** — **origin**: the *Sunzi Suanjing* (c. 3rd–5th century CE) poses the single instance "by threes remainder 2, by fives remainder 3, by sevens remainder 2" with answer 23, but no general method [[source.sunzi-suanjing]]. **First general algorithm**: Qin Jiushao's *Dayan* method in the *Shushu Jiuzhang* (1247) [[source.qin-1247]], handling even non-coprime moduli. Aryabhata (6th c.) and Brahmagupta (7th c.) gave related methods in India. **Modern congruence form** stated by Gauss, *Disquisitiones Arithmeticae* (1801) [[source.gauss-1801]]. **[confirmed]**

**sources** — Sunzi Suanjing [[source.sunzi-suanjing]]; Qin Jiushao, *Shushu Jiuzhang* [[source.qin-1247]]; Gauss, *Disquisitiones Arithmeticae* [[source.gauss-1801]]; Hardy & Wright, Theorem 121 [[source.hardy-wright-1938]]. Cross-checked against Wikipedia and Britannica.
