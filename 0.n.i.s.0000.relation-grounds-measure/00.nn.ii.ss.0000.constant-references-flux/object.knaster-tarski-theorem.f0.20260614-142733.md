---
name: knaster-tarski-theorem
type: object
object-type: theorem
essence: a monotone map on a complete lattice has fixed points, and they themselves form a complete lattice (with a least and a greatest)
field: [field.order-lattice-theory]
status: proven
state: float
attribution: power-set case Knaster & Tarski (1928); general complete-lattice form Tarski (1955)
formalized: true
source: [source.tarski-1955, source.birkhoff-1940]
depends-on: [object.lattice, object.partial-order]
used-by: []
---

**statement (plain)** — take any complete lattice (an ordered set where every collection has a top and a bottom bound) and any order-preserving map on it (bigger inputs give bigger-or-equal outputs). Then the map must have a fixed point — an element it leaves unchanged. More: the set of all its fixed points is itself a complete lattice, so there is a smallest and a largest fixed point. This underwrites recursive definitions in logic and program semantics.

**statement (formal)** — let (L, ≤) be a complete lattice and f : L → L an order-preserving (monotone) function. Then the set P of fixed points of f is non-empty and forms a complete lattice under ≤. In particular f has a least fixed point ⋀{x : f(x) ≤ x} and a greatest fixed point ⋁{x : x ≤ f(x)}. **[confirmed]**

**status** — proven.

**lineage** — an earlier, special case (L the power set of a set, ordered by inclusion) was given by Bronisław Knaster and Alfred Tarski in 1928. The general complete-lattice form — and the result that the fixed-point set is itself a complete lattice — was stated by Tarski in "A lattice-theoretical fixpoint theorem and its applications," *Pacific J. Math.* **5** (1955), 285–309; for that reason it is also called Tarski's fixed-point theorem [[source.tarski-1955]]. **[confirmed]**

**proof** — for the least fixed point: let A = {x ∈ L : f(x) ≤ x} (the "post-fixed-down" set; non-empty since the top ⊤ ∈ A). Set u = ⋀A. For x ∈ A, u ≤ x so f(u) ≤ f(x) ≤ x; taking the meet over A gives f(u) ≤ u, so u ∈ A. Monotonicity then gives f(f(u)) ≤ f(u), so f(u) ∈ A and u ≤ f(u); hence f(u) = u, the least fixed point. The greatest fixed point is dual. The fixed-point set's completeness follows by applying the argument within order intervals. **[confirmed]**

**sources** — [[source.tarski-1955]] (general form, citation); [[source.birkhoff-1940]] (complete-lattice setting); corroborated by the Wikipedia *Knaster–Tarski theorem* article for statement, history, and the 1928 power-set case. **[confirmed]**
