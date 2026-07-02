---
name: topological-space
type: object
object-type: definition
essence: a set together with a collection of open sets closed under arbitrary union and finite intersection — the minimal structure carrying continuity
field: ["[[field.point-set-topology]]"]
status: standard
state: settled
attribution: neighborhood axioms Hausdorff (1914); closure axioms Kuratowski (1922); open-set formulation generalized from Fréchet's metric spaces (1906), open structures Alexandroff (1925)
formalized: true
source: ["[[source.hausdorff-1914]]", "[[source.kuratowski-1922-closure]]", "[[source.frechet-1906]]", "[[source.munkres-topology]]"]
depends-on: []
used-by: ["[[object.compactness]]", "[[object.connectedness]]", "[[object.tychonoff-theorem]]", "[[object.urysohn-lemma]]"]
---

**statement (plain)** — a topological space is a set of points together with a chosen family of "open" subsets that says which points are "near" which, without using distance. The rules are minimal: the whole space and the empty set count as open; you can take the union of any number of open sets and stay open; you can intersect finitely many open sets and stay open. This bare structure is exactly enough to define continuity, limits, and convergence.

**statement (formal)** — a topological space is a pair (X, τ) where X is a set and τ ⊆ 𝒫(X) is a family of subsets (the open sets) such that: (i) ∅ ∈ τ and X ∈ τ; (ii) τ is closed under arbitrary unions — if {Uᵢ} ⊆ τ then ⋃ᵢ Uᵢ ∈ τ; (iii) τ is closed under finite intersections — if U, V ∈ τ then U ∩ V ∈ τ. The members of τ are the open sets; their complements are closed. **[confirmed]**

**status** — standard definition; equivalent formulations via closed sets, neighborhood systems ([[object.topological-space]] à la Hausdorff), the closure operator (Kuratowski axioms), or interior/boundary operators. **[confirmed]**

**equivalence note** — the closure-operator (Kuratowski) axioms — A ⊆ cl(A), cl(A∪B) = cl(A)∪cl(B), cl(cl(A)) = cl(A), cl(∅) = ∅ — determine the same structure as the open-set axioms; so do Hausdorff's neighborhood axioms. The open-set definition is the modern default. **[confirmed]**

**lineage** — the modern open-set notion crystallized in the early 20th century. M. Fréchet (1906) abstracted metric/limit structure (espaces métriques, classes (L)) [[source.frechet-1906]]; F. Hausdorff (*Grundzüge der Mengenlehre*, 1914) gave the first widely adopted axiomatization, via **neighborhood** axioms including the separation condition now called the Hausdorff (T₂) axiom [[source.hausdorff-1914]]; C. Kuratowski (1922) axiomatized topology through the **closure** operator [[source.kuratowski-1922-closure]]; P. S. Alexandroff (1925) is credited with introducing open topological structures explicitly. The four original Hausdorff axioms included separation, now dropped from the bare definition. **[confirmed]**

**door** — Munkres, *Topology*, §12 (topological spaces) [[source.munkres-topology]].

**sources** — [[source.hausdorff-1914]], [[source.kuratowski-1922-closure]], [[source.frechet-1906]], [[source.munkres-topology]]; cross-checked against Encyclopedia of Mathematics ("Topological space") and Wikipedia ("Axiomatic foundations of topological spaces"). **[confirmed]**
