---
name: lie-algebra
type: object
object-type: definition
essence: a vector space with a bracket [x,y] that is bilinear, alternating, and obeys the Jacobi identity — the infinitesimal shadow of a Lie group
field: [field.lie-theory, field.linear-algebra]
status: standard
state: settled
attribution: structure from S. Lie (1870s) & W. Killing (1880s) as "infinitesimal transformations"; term "Lie algebra" coined by H. Weyl (1934)
formalized: true
source: [source.lie-1873, source.lie-engel-1888, source.weyl-1934, source.hall-lie, source.kirillov-lie]
depends-on: []
used-by: [object.lie-group-lie-algebra-correspondence, object.exponential-map-lie, object.baker-campbell-hausdorff-formula, object.semisimple-classification]
aliases: ["object.lie-algebra"]
---

**statement (plain)** — a Lie algebra is a vector space carrying a "bracket" operation [x,y] that measures how far two elements fail to commute. The bracket is linear in each slot, gives zero when you bracket something with itself, and satisfies a balancing law (the Jacobi identity). It is the linearized, infinitesimal version of a Lie group: the tangent space at the identity, with the bracket recording the group's non-commutativity to first order.

**statement (formal)** — a [[Lie algebra]] over a field (or commutative ring) k is a k-vector space (module) 𝔤 with a bilinear map [·,·]: 𝔤 × 𝔤 → 𝔤 satisfying, for all x, y, z:
1. alternating: [x, x] = 0 (which forces antisymmetry [x, y] = −[y, x]);
2. Jacobi identity: [x, [y, z]] + [y, [z, x]] + [z, [x, y]] = 0.
The bracket is generally non-associative. **[confirmed]**

(Over a field of characteristic ≠ 2, antisymmetry and the alternating property are equivalent; in characteristic 2 the alternating condition [x,x]=0 is the stronger one and is the correct axiom.)

**proof / status** — a definition, standard and stable. The canonical example: for any associative algebra, [x, y] = xy − yx satisfies both axioms; for a Lie group, the bracket on left-invariant vector fields (equivalently on the tangent space at the identity) gives its Lie algebra.

**lineage (naming contested in time, not in substance)** — the *structures* arose as the "infinitesimal transformations" / "infinitesimal group" of a continuous transformation group: [[Sophus Lie]] in the 1870s ([[source.lie-1873]], [[source.lie-engel-1888]]) and, independently, [[Wilhelm Killing]] in the 1880s. The name "Lie algebra" was coined by [[Hermann Weyl]] in 1934, replacing "infinitesimal group." [[source.weyl-1934]] **[confirmed]** (Weyl-1934 carried as **[confirmed as attribution]** — original 1934 text not opened.)

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations* [[source.hall-lie]]; A. Kirillov Jr. (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.lie-1873]], [[source.lie-engel-1888]], [[source.weyl-1934]], [[source.hall-lie]], [[source.kirillov-lie]]; cross-checked against Encyclopedia of Mathematics (entry "Lie algebra") and Wikipedia. **[confirmed]**
