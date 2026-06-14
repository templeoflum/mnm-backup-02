---
name: lagrange-theorem
type: object
object-type: theorem
essence: the order of a subgroup divides the order of the finite group
field: [field.group-theory]
status: proven
state: float
attribution: special case J.-L. Lagrange (1770–71); general permutation-group form C. Jordan (1861); special cases via Gauss (1801) and Cauchy (1844)
formalized: true
source: [source.lagrange-1771, source.jordan-1870, source.cauchy-1845, source.dummit-foote, source.judson-abstract-algebra]
depends-on: []
used-by: [object.cauchy-theorem, object.sylow-theorems, object.orbit-stabilizer-theorem]
---

**statement (plain)** — in a finite group, the size of any subgroup divides the size of the whole group. You cannot have a 6-element subgroup inside a 10-element group; the part always measures the whole evenly.

**statement (formal)** — let G be a finite group and H ≤ G a subgroup. Then |H| divides |G|. More precisely, |G| = [G : H] · |H|, where the index [G : H] is the number of left (equivalently right) cosets of H in G. The cosets of H partition G into [G : H] blocks each of size |H|. **[confirmed]**

**status** — proven.

**proof** — H acts on G by left multiplication; its cosets gH partition G, and left multiplication g·: H → gH is a bijection, so every coset has exactly |H| elements. There are [G : H] cosets, hence |G| = [G : H] · |H|. Standard textbook proof in [[source.dummit-foote]] and [[source.judson-abstract-algebra]]. **[confirmed]**

**converse is false** — not every divisor of |G| is the order of a subgroup: the alternating group A₄ has order 12 but no subgroup of order 6. Partial converses hold — [[object.cauchy-theorem]] (prime divisors), the [[object.sylow-theorems]] (prime-power divisors), and Hall's theorem (for solvable groups). **[confirmed]**

**lineage (contested)** — J.-L. Lagrange, *Réflexions sur la résolution algébrique des équations* (1770–71), proved the prototype: a rational function of n roots takes a number of distinct values under the n! permutations that divides n! — the special case for Sₙ, before abstract groups existed [[source.lagrange-1771]]. The general theorem developed over the following century: Gauss handled (ℤ/pℤ)* (1801), Cauchy proved it for symmetric groups Sₙ (1844) [[source.cauchy-1845]], and Camille Jordan proved the general permutation-group case (1861) [[source.jordan-1870]]. Some histories also credit Pietro Abbati (1803, in his letter to Ruffini) with an early general argument for permutations. **[candidate, lineage — Lagrange proved only the special case; modern form is later and attribution to the intermediate steps varies by source]**

**sources** — nLab, Encyclopedia of Mathematics, Wikipedia ("Lagrange's theorem (group theory)"); P. M. Neumann, "The prehistory of Lagrange's theorem" (MAA); [[source.dummit-foote]], [[source.judson-abstract-algebra]].
