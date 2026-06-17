---
name: lie-group
type: object
object-type: definition
essence: a group that is also a smooth manifold, with multiplication and inversion smooth — continuous symmetry made differentiable
field: [field.lie-theory, field.differential-geometry, field.group-theory]
status: standard
state: settled
attribution: Sophus Lie (1870s), continuous transformation groups; modern global/manifold formulation by É. Cartan, H. Weyl, L. Pontryagin (early–mid 20th c.)
formalized: true
source: [source.lie-1873, source.lie-engel-1888, source.hall-lie, source.kirillov-lie]
depends-on: []
used-by: [object.exponential-map-lie, object.lie-group-lie-algebra-correspondence, object.baker-campbell-hausdorff-formula]
---

**statement (plain)** — a Lie group is a set that is at once a group (you can multiply two elements and invert any element) and a smooth space (a manifold, locally like ordinary Euclidean space), with the two structures compatible: multiplying and inverting are smooth operations. It is the mathematical home of *continuous* symmetry — rotations of a sphere, for instance, form a Lie group because you can rotate by any amount and slide smoothly between rotations.

**statement (formal)** — a [[Lie group]] is a smooth (real- or complex-analytic) manifold G equipped with a group structure such that the map
G × G → G, (x, y) ↦ x·y⁻¹
is smooth (analytic). Equivalently, multiplication m: G × G → G and inversion i: G → G are both smooth. **[confirmed]**

Hilbert's fifth problem (settled 1952, Gleason–Montgomery–Zippin) shows the analytic requirement is not extra: a topological group whose underlying space is a finite-dimensional topological manifold is automatically a Lie group. **[confirmed]**

**proof / status** — a definition, not a theorem; standard and stable across the literature. The equivalence of the "smooth" and "analytic" formulations, and the Hilbert-5th reduction from "topological manifold," are theorems supporting the robustness of the definition.

**lineage** — [[Sophus Lie]] introduced *continuous transformation groups* in the 1870s ([[source.lie-1873]]; codified in Lie & Engel, *Theorie der Transformationsgruppen*, 1888–1893 [[source.lie-engel-1888]]). Lie worked locally (germs of transformations); the global manifold definition as it stands today was shaped by Cartan, Weyl, and Pontryagin in the early-to-mid 20th century. **[confirmed]**

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations* [[source.hall-lie]]; free entry via A. Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras* (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.lie-1873]], [[source.lie-engel-1888]], [[source.hall-lie]], [[source.kirillov-lie]]; cross-checked against Encyclopedia of Mathematics (entry "Lie group") and Wikipedia. **[confirmed]**
