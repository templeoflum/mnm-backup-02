---
name: clifford-algebra-universal-property
type: object
object-type: theorem
essence: Cl(V,Q) is the freest associative algebra into which V maps with v↦j(v) satisfying j(v)²=Q(v) — every such map factors uniquely through it
field: [field.geometric-algebra]
status: proven
state: settled
attribution: universal-property formulation 20th-century (Chevalley 1954, Bourbaki); generalizing Clifford (1878)
formalized: true
source: [source.lounesto-2001, source.clifford-1878]
depends-on: [object.clifford-algebra]
used-by: []
---

**statement (plain)** — the Clifford algebra is "universal" among all the ways of multiplying vectors so that a vector squared gives its length. Whenever you have any associative algebra and a linear map sending each vector v to something whose square is Q(v), that map extends in exactly one way to an algebra homomorphism out of the Clifford algebra. This single property pins the Clifford algebra down uniquely (up to isomorphism), independent of how you build it.

**statement (formal)** — let V be a vector space with quadratic form Q over K, and let i: V → Cl(V, Q) be the canonical inclusion. The pair (Cl(V,Q), i) satisfies: for every unital associative K-algebra A and every K-linear map j: V → A with
j(v)² = Q(v)·1_A   for all v ∈ V,
there exists a unique algebra homomorphism f: Cl(V, Q) → A such that f ∘ i = j.
Equivalently, Cl(V,Q) is the initial object in the category of such pairs (A, j). This property determines Cl(V, Q) uniquely up to a unique isomorphism. **[confirmed]**

**proof** — existence: realize Cl(V,Q) as T(V)/I_Q (see [[object.clifford-algebra]]). Given (A, j) with j(v)²=Q(v)1, the universal property of the tensor algebra T(V) gives a unique algebra map T(V) → A extending j; because j(v)² − Q(v)1 = 0, this map kills the ideal I_Q and so descends to a unique f: T(V)/I_Q → A with f∘i = j. Uniqueness of the object: any two pairs satisfying the universal property admit mutually inverse comparison maps by initiality, hence are uniquely isomorphic. **[confirmed]**

**lineage** — the universal-property / initial-object characterization is a 20th-century categorical abstraction (Chevalley, *The Algebraic Theory of Spinors*, 1954; Bourbaki, *Algèbre*), not present in Clifford's 1878 paper [[object.clifford-algebra]]. Carried as lineage. **[confirmed as attribution]**

**sources** — universal property "for any associative algebra A and linear map j:V→A with j(v)²=Q(v), unique homomorphism extends it; initial object; unique up to isomorphism": Wikipedia *Clifford algebra* and nLab *Clifford algebra* (two independent authoritative references); rigorous treatment Lounesto [[source.lounesto-2001]].
