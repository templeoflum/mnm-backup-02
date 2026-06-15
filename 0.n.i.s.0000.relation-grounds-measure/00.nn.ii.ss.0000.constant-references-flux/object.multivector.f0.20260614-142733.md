---
name: multivector
type: object
object-type: structure
essence: a general element of the geometric algebra — a sum of graded parts (scalars, vectors, bivectors, …); a k-blade is the outer product of k vectors
field: [field.geometric-algebra]
status: definition
state: verified
attribution: grading/exterior structure from Grassmann (1844); blades and grade language in modern geometric algebra Hestenes & Sobczyk (1984); blade≠k-vector distinction emphasized by Lounesto
formalized: true
source: [source.grassmann-1844, source.hestenes-sobczyk-1984, source.lounesto-2001, source.doran-lasenby-2003, source.macdonald-geometric-algebra]
depends-on: [object.clifford-algebra, object.geometric-product]
used-by: [object.rotor]
---

**statement (plain)** — a multivector is the most general object in a geometric algebra: a sum of pieces of different "grades." Grade 0 is a scalar, grade 1 a vector, grade 2 a bivector (oriented plane element), grade 3 a trivector (oriented volume), and so on. A k-blade is the special, "simple" grade-k object you get by wedging together k independent vectors — it represents an oriented k-dimensional subspace. Every k-blade is a k-vector, but in dimension four or higher not every k-vector is a blade (some are sums of blades that cannot be collapsed to one).

**statement (formal)** — for an n-dimensional quadratic space V, the geometric algebra (Clifford algebra [[object.clifford-algebra]]) decomposes as a graded vector space
Cl(V) = ⊕_{k=0}^{n} Λᵏ(V),
where Λᵏ(V) is the space of grade-k elements (k-vectors), of dimension C(n,k); total dimension 2ⁿ. A general element — a **multivector** — is M = Σ_k ⟨M⟩_k, where ⟨·⟩_k is the grade-k projection. A **k-blade** is a k-vector expressible as an outer product of k linearly independent vectors,
B = a₁ ∧ a₂ ∧ ⋯ ∧ aₖ,
representing the oriented k-subspace spanned by the aᵢ; a k-vector is any linear combination of k-blades. Every k-blade is a k-vector; the converse fails for 2 ≤ k ≤ n−2 once n ≥ 4 (e.g. e₁∧e₂ + e₃∧e₄ is a 2-vector that is not a 2-blade). **[confirmed]**

**proof (definitional)** — this is structural. The graded decomposition is the image of the exterior-algebra grading under the canonical vector-space isomorphism Cl(V,Q) ≅ Λ(V); the geometric product mixes grades while the outer product raises grade. The blade≠k-vector fact for n≥4 is exhibited by the standard counterexample e₁∧e₂ + e₃∧e₄, whose square (under ∧ with itself, or by rank of the associated 2-form) shows it is not decomposable. **[confirmed]**

**sources** — k-blade = outer product of k vectors, grade decomposition, scalar/vector/bivector/trivector naming, grade projection ⟨A⟩_k, and not-all-k-vectors-are-blades in dim ≥ 4: Wikipedia *Multivector* and Wikipedia *Blade (geometry)* (two independent authoritative references); rigorous blade/k-vector distinction Lounesto [[source.lounesto-2001]]; grade language Hestenes & Sobczyk [[source.hestenes-sobczyk-1984]]; exterior origin Grassmann [[source.grassmann-1844]]; door texts [[source.doran-lasenby-2003]] [[source.macdonald-geometric-algebra]].
