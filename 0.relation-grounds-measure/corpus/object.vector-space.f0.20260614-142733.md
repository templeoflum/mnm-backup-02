---
name: vector-space
type: object
object-type: definition
essence: a set closed under addition and scalar multiplication satisfying eight axioms — the arena of linear algebra
field: ["[[field.linear-algebra]]"]
status: defined
state: settled
attribution: Grassmann (1844, Ausdehnungslehre); first modern axioms Peano (1888, Calcolo geometrico)
formalized: true
source: ["[[source.peano-1888]]", "[[source.grassmann-1844]]", "[[source.axler-linear-algebra]]", "[[source.strang-linear-algebra]]"]
depends-on: []
used-by: ["[[object.rank-nullity-theorem]]", "[[object.eigenvalue-eigenvector]]", "[[object.spectral-theorem]]", "[[object.cayley-hamilton-theorem]]", "[[object.singular-value-decomposition]]", "[[object.gaussian-elimination-lu]]"]
---

**statement (plain)** — a vector space is a collection of objects ("vectors") you can add together and scale by numbers ("scalars"), where these two operations behave in the natural, consistent ways. Adding two vectors gives a vector; scaling a vector gives a vector; there is a zero vector; every vector has a negative; and addition and scaling fit together by the usual distributive and associative rules. Almost everything in linear algebra lives inside some vector space.

**statement (formal)** — let F be a field. A vector space over F is a set V with two operations, addition + : V × V → V and scalar multiplication · : F × V → V, satisfying for all u, v, w ∈ V and a, b ∈ F:
1. (u + v) + w = u + (v + w)  — associativity of addition
2. u + v = v + u  — commutativity of addition
3. there exists 0 ∈ V with v + 0 = v  — additive identity
4. for each v there exists −v with v + (−v) = 0  — additive inverse
5. a(bv) = (ab)v  — compatibility with field multiplication
6. 1v = v  — scalar identity
7. a(u + v) = au + av  — distributivity over vector addition
8. (a + b)v = av + bv  — distributivity over scalar addition
**[confirmed]**

**status** — definition (axiomatic).

**lineage** — [[Hermann Grassmann]] introduced sets of abstract objects with linear operations, linear independence and dimension in *Die lineale Ausdehnungslehre* (1844) [[source.grassmann-1844]], though his framework exceeds modern vector spaces and went largely unnoticed for decades. [[Giuseppe Peano]] gave the first modern axiomatic definition of a vector space over a field — calling it a "linear system" — in *Calcolo geometrico* (1888), Chapter IX [[source.peano-1888]]. The concept became standard through early-20th-century functional analysis (Hilbert, Banach, and Weyl's use in physics). **[confirmed]**

**door** — Axler, *Linear Algebra Done Right*, ch. 1 [[source.axler-linear-algebra]]; Strang, *Introduction to Linear Algebra* [[source.strang-linear-algebra]].

**sources** — [[source.peano-1888]], [[source.grassmann-1844]], [[source.axler-linear-algebra]], [[source.strang-linear-algebra]]; Wikipedia "Vector space" (axioms + attribution, two-source confirmed).
