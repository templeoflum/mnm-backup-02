---
name: cauchy-theorem
type: object
object-type: theorem
essence: a prime dividing the group's order forces an element of that exact order
field: [field.group-theory]
status: proven
state: settled
attribution: A.-L. Cauchy (1845)
formalized: true
source: [source.cauchy-1845, source.dummit-foote, source.judson-abstract-algebra]
depends-on: [object.lagrange-theorem]
used-by: [object.sylow-theorems]
---

**statement (plain)** — if a prime number p divides the size of a finite group, then the group must contain an element whose order is exactly p (and hence a subgroup of size p). It is a partial converse to Lagrange's theorem: Lagrange says subgroup sizes divide the group size; Cauchy says for prime divisors, a matching element really exists.

**statement (formal)** — let G be a finite group and p a prime with p | |G|. Then there exists g ∈ G with order exactly p, equivalently a (cyclic) subgroup ⟨g⟩ ≤ G of order p. **[confirmed]**

**status** — proven.

**proof** — the clean modern proof is J. H. McKay's (1959): let X = {(a₁,…,a_p) ∈ Gᵖ : a₁a₂···a_p = e}. Then |X| = |G|^{p−1}, divisible by p. The cyclic group ℤ/pℤ acts on X by rotating coordinates; orbits have size 1 or p. Size-1 orbits are the tuples (a,…,a) with aᵖ = e. Counting mod p, the number of size-1 orbits is divisible by p; since (e,…,e) is one such, there are at least p of them, so some a ≠ e has aᵖ = e — an element of order p. (An older proof is by induction on |G| via the class equation, splitting into abelian and non-abelian cases.) See [[source.dummit-foote]], [[source.judson-abstract-algebra]]. **[confirmed]**

**relations** — partial converse to [[object.lagrange-theorem]]; generalized by [[object.sylow-theorems]] (Sylow I: a subgroup of order pⁿ for the highest prime power pⁿ dividing |G|). **[confirmed]**

**lineage** — Augustin-Louis Cauchy, in his memoirs on permutations / substitution systems (1845), proved the result for substitution groups [[source.cauchy-1845]]. **[confirmed as attribution]**

**sources** — nLab, Encyclopedia of Mathematics, Wikipedia ("Cauchy's theorem (group theory)"); R. Meo, "The mathematical life of Cauchy's group theorem" (*Historia Mathematica*, 2004); [[source.dummit-foote]].
