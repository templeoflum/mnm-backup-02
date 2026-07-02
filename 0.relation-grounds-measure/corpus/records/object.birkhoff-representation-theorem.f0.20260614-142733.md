---
name: birkhoff-representation-theorem
type: object
object-type: theorem
essence: every finite distributive lattice is the lattice of down-sets of its join-irreducibles — a duality between finite distributive lattices and finite posets
field: ["[[field.order-lattice-theory]]"]
status: proven
state: settled
attribution: Garrett Birkhoff (1937, "Rings of sets")
formalized: true
source: ["[[source.birkhoff-1937]]", "[[source.davey-priestley-2002]]"]
depends-on: ["[[object.lattice]]", "[[object.partial-order]]"]
used-by: []
---

**statement (plain)** — any finite lattice whose meet and join distribute over each other can be rebuilt entirely from a smaller skeleton: its "join-irreducible" elements (those not the join of two smaller elements), ordered among themselves. The lattice is exactly the collection of down-closed sets of that skeleton, with union and intersection as join and meet. So finite distributive lattices and finite partial orders are two views of the same thing.

**statement (formal)** — every finite distributive lattice L is isomorphic to the lattice O(J(L)) of down-sets (order ideals / lower sets) of the poset J(L) of its join-irreducible elements, ordered by inclusion. The maps L → O(J(L)), a ↦ {j ∈ J(L) : j ≤ a}, and the reverse, taking a down-set to the join of its elements, are mutually inverse lattice isomorphisms. This gives a one-to-one correspondence (a duality) between finite distributive lattices and finite posets. **[confirmed]**

**status** — proven.

**lineage** — Garrett Birkhoff, "Rings of sets," *Duke Mathematical Journal* **3** (1937), 443–454 [[source.birkhoff-1937]]. (Distinct from his 1940 treatise [[source.birkhoff-1940]] and from the ergodic/dynamical Birkhoff papers of 1927 and 1931.) **[confirmed]**

**proof** — reference. The forward map is a lattice homomorphism because in a distributive lattice an element's set of join-irreducibles below it respects meets and joins; finiteness guarantees every element is the join of the join-irreducibles beneath it (injectivity) and every down-set arises this way (surjectivity). Full proof: Davey & Priestley, *Introduction to Lattices and Order*, ch. 5 [[source.davey-priestley-2002]]. **[confirmed]**

**sources** — [[source.birkhoff-1937]] (original); [[source.davey-priestley-2002]] (door, ch. 5); corroborated by the Wikipedia *Birkhoff's representation theorem* article and nLab (*distributive lattice*) for the statement and the finite-poset duality. **[confirmed]**
