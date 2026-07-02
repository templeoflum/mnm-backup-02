---
name: lattice
type: object
object-type: definition
essence: a poset where every pair has a meet (greatest lower bound) and a join (least upper bound) — order and algebra in one structure
field: ["[[field.order-lattice-theory]]"]
status: definition
state: settled
attribution: concept from Dedekind ("Dualgruppe," 1897/1900) and Schröder; established as a discipline by Birkhoff and Ore (1930s)
formalized: true
source: ["[[source.davey-priestley-2002]]", "[[source.birkhoff-1940]]", "[[source.dedekind-1897]]"]
depends-on: ["[[object.partial-order]]"]
used-by: ["[[object.knaster-tarski-theorem]]", "[[object.birkhoff-representation-theorem]]"]
aliases: ["object.lattice"]
---

**statement (plain)** — a lattice is an ordered set in which any two elements have both a single "closest thing above both" (their join) and a single "closest thing below both" (their meet). Subsets under inclusion form a lattice: join is union, meet is intersection.

**statement (formal)** — order-theoretic: a lattice is a poset (L, ≤) in which every pair {a, b} has a least upper bound a ∨ b (join) and a greatest lower bound a ∧ b (meet). Algebraic: a set L with two binary operations ∧, ∨ that are each commutative, associative, and idempotent and satisfy the absorption laws a ∨ (a ∧ b) = a and a ∧ (a ∨ b) = a; the order is recovered by a ≤ b ⇔ a ∧ b = a. The two definitions are equivalent. A **complete lattice** is one in which every subset (not just every pair) has a join and a meet. **[confirmed]**

**proof** — none; definition. The equivalence of the order-theoretic and algebraic definitions is a standard theorem (Davey & Priestley, ch. 2).

**lineage** — the structure originates with [[Richard Dedekind]] (his "Dualgruppe," 1897 and 1900) and Ernst Schröder; [[source.dedekind-1897]]. It was established as an independent discipline in the 1930s by [[Garrett Birkhoff]] and Øystein Ore — Ore preferred the term "structure," but "lattice" prevailed [[source.birkhoff-1940]]. **[confirmed]**

**door** — Davey & Priestley, *Introduction to Lattices and Order*, ch. 2 [[source.davey-priestley-2002]].

**sources** — [[source.davey-priestley-2002]]; [[source.birkhoff-1940]]; [[source.dedekind-1897]]; nLab (*lattice*) and Encyclopedia of Mathematics (*Lattice*) for both definitions and the Dedekind/Birkhoff/Ore lineage. **[confirmed]**
