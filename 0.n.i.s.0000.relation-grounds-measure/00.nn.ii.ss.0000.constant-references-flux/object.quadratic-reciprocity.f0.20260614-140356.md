---
name: quadratic-reciprocity
type: object
object-type: theorem
essence: links solvability of x²≡p mod q with x²≡q mod p for odd primes — Gauss's "golden theorem"
field: [field.elementary-number-theory]
status: proven
state: float
attribution: conjectured Euler & Legendre; first complete proof Gauss (1796, published Disquisitiones Arithmeticae 1801)
formalized: true
source: [source.gauss-1801, source.legendre-1798, source.hardy-wright-1938]
depends-on: [object.fermat-little-theorem]
used-by: []
---

**statement (plain)** — for two different odd primes p and q, ask whether p is a perfect square modulo q, and whether q is a perfect square modulo p. The law of quadratic reciprocity says the two answers are linked by a simple rule depending only on p and q modulo 4: they agree unless both p and q are ≡ 3 (mod 4), in which case they disagree.

**statement (formal)** — for distinct odd primes p, q, with the Legendre symbol (a/p) = +1 if a is a nonzero quadratic residue mod p, −1 if a non-residue:

  (p/q)(q/p) = (−1)^((p−1)/2 · (q−1)/2).

With the **supplements**: (−1/p) = (−1)^((p−1)/2) (so a QR iff p ≡ 1 mod 4); and (2/p) = (−1)^((p²−1)/8) (so a QR iff p ≡ ±1 mod 8). **[confirmed]**

**proof** — Gauss's first proof (in [[source.gauss-1801]], arts. 125–146) is by induction and is famously intricate; the most-taught modern proof uses **Gauss's lemma** counting sign-changes among least residues, or Eisenstein's lattice-point argument. Gauss himself eventually produced six proofs; over 240 are now known. Modern treatment [[source.hardy-wright-1938]] (ch. VI, Theorem 98). **[confirmed]**

**lineage** — empirically **conjectured by Euler** (results in the 1740s–50s) and **Legendre**, who introduced the Legendre symbol and stated the law in his *Essai sur la théorie des nombres* (1798) [[source.legendre-1798]] but whose proof was incomplete (it assumed, without proof, an unestablished result about primes in arithmetic progressions). The **first complete and correct proof** is **Gauss's**, found 8 April 1796 (age 18) and published in *Disquisitiones Arithmeticae* (1801) [[source.gauss-1801]], who named it the *Theorema Aureum* ("golden theorem"). **[confirmed]**

**sources** — Gauss, *Disquisitiones Arithmeticae* arts. 125–146, 262 [[source.gauss-1801]]; Legendre, *Essai* [[source.legendre-1798]]; Hardy & Wright ch. VI [[source.hardy-wright-1938]]. Cross-checked against Wikipedia and Britannica (Gauss first proof 1796, published 1801; Euler & Legendre conjecture).
