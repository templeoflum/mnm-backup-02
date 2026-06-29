---
name: partial-order
type: object
object-type: definition
essence: a reflexive, antisymmetric, transitive relation — the structure of "less than or equal," where some pairs may be incomparable
field: [field.order-lattice-theory]
status: definition
state: settled
attribution: axioms considered by Leibniz (c. 1690); definition first clearly formulated by Hausdorff (1914)
formalized: true
source: [source.davey-priestley-2002, source.hausdorff-1914]
depends-on: []
used-by: [object.lattice, object.zorn-lemma, object.knaster-tarski-theorem, object.birkhoff-representation-theorem]
---

**statement (plain)** — a partial order ranks the elements of a set, but only partly: it says when one element is "below or equal to" another, while allowing some pairs to be incomparable (neither below the other). Examples: subsets ordered by inclusion, or whole numbers ordered by divisibility.

**statement (formal)** — a partial order on a set P is a binary relation ≤ satisfying, for all x, y, z ∈ P:
- reflexivity: x ≤ x;
- antisymmetry: if x ≤ y and y ≤ x then x = y;
- transitivity: if x ≤ y and y ≤ z then x ≤ z.
The pair (P, ≤) is a partially ordered set (poset). A total (linear) order is a partial order in which any two elements are comparable (x ≤ y or y ≤ x for all x, y). **[confirmed]**

**proof** — none; this is a definition. The three axioms abstract the common behavior of "≤" on numbers, "⊆" on sets, and "divides" on integers.

**lineage** — the [[Encyclopedia of Mathematics]] notes the order axioms "had been considered by G. Leibniz around 1690," with the definition "first clearly formulated by F. Hausdorff" in his 1914 *Grundzüge der Mengenlehre* [[source.hausdorff-1914]]. **[confirmed]**

**door** — Davey & Priestley, *Introduction to Lattices and Order*, ch. 1 [[source.davey-priestley-2002]].

**sources** — [[source.davey-priestley-2002]]; [[source.hausdorff-1914]]; nLab (*partial order*) and Encyclopedia of Mathematics (*Partially ordered set*) for the three axioms and lineage. **[confirmed]**
