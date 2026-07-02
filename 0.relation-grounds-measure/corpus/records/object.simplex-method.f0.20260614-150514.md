---
name: simplex-method
type: object
object-type: algorithm
essence: walk the edges of the feasible polytope vertex to vertex, improving the objective, until you reach an optimal corner
field: ["[[field.numerical-optimization]]"]
status: established
state: settled
attribution: George B. Dantzig (1947)
formalized: true
source: ["[[source.dantzig-1947]]", "[[source.nocedal-wright-1999]]", "[[source.boyd-vandenberghe-2004]]"]
depends-on: ["[[object.convexity-and-lagrange-duality]]"]
used-by: []
---

**statement (plain)** — for a linear program (maximize/minimize a linear objective subject to linear inequalities), the feasible region is a convex polytope and an optimum sits at a corner (vertex). The simplex method finds a starting corner, then repeatedly steps along an edge to an adjacent corner that improves the objective — each such step is a "pivot." When no neighboring corner is better, that corner is optimal. The dominant practical method for linear programming since 1947.

**statement (formal)** — for the LP min cᵀx s.t. Ax = b, x ≥ 0 (standard form), basic feasible solutions correspond to vertices of the feasible polyhedron. The algorithm maintains a basis, and at each iteration selects an entering variable (a nonbasic column with negative reduced cost) and a leaving variable (by the minimum-ratio test), performing a pivot that moves to an adjacent vertex of greater objective value. Termination is at a vertex with no improving direction (optimal) or detection of unboundedness. A Phase I procedure finds an initial feasible vertex; Phase II optimizes. Worst-case complexity is exponential — Klee & Minty (1972) constructed an LP (the Klee–Minty cube) forcing the method to visit exponentially many vertices — yet it is remarkably efficient in practice. **[confirmed]**

**status** — established (correct and finite under anti-cycling rules such as Bland's; one of the most-used algorithms of the 20th century).

**method** — operates on the [[object.convexity-and-lagrange-duality]] structure of the feasible set (a convex polytope); related to LP duality (the optimal simplex basis yields dual multipliers). Polynomial-time alternatives (Khachiyan's ellipsoid 1979, Karmarkar's interior-point 1984) exist, but simplex remains the standard workhorse.

**lineage** — devised by George B. Dantzig in 1947 while working on US Air Force planning problems; the inclusion of an explicit linear objective function (mid-1947) made the problem tractable. **[confirmed as attribution]** *(Dantzig's 1947 work; widely cited as one of the top algorithms of the century.)*

**sources** — origin: [[source.dantzig-1947]]; codification/door: [[source.nocedal-wright-1999]] (Nocedal & Wright, linear-programming chapters); convex context: [[source.boyd-vandenberghe-2004]]. Cross-checked against Wikipedia "Simplex algorithm" and Springer *Encyclopedia of Optimization* ("Linear Programming").
