---
name: max-flow-min-cut-theorem
type: object
object-type: theorem
essence: in a capacitated network the maximum value of a feasible s–t flow equals the minimum capacity over all s–t cuts
field: [field.network-flow-theory]
status: proven
state: settled
attribution: L. R. Ford Jr. & D. R. Fulkerson (1956); independently P. Elias, A. Feinstein & C. E. Shannon (1956)
formalized: 1956
source: [source.ford-fulkerson-1956, source.schrijver-2003, source.clrs]
depends-on: [object.residual-network]
used-by: [object.ford-fulkerson-algorithm]
aliases: ["object.max-flow-min-cut-theorem"]
---

**statement (plain)** — In a directed network with a source s, a sink t, and a nonnegative capacity on each arc, the maximum value of any feasible flow from s to t is exactly equal to the minimum total capacity of an s–t cut (a partition of the vertices into a set containing s and a set containing t, charged for the arcs crossing from the s-side to the t-side).

**statement (formal)** — For a flow network N = (V, E, s, t, c) with c: E → ℝ≥0,
  max { |f| : f a feasible s–t flow } = min { c(S, T) : (S, T) an s–t cut, s ∈ S, t ∈ T },
where |f| is the net flow out of s and c(S, T) = Σ over arcs (u, v) with u ∈ S, v ∈ T of c(u, v).

**proof/derivation** — Weak duality gives |f| ≤ c(S, T) for every flow f and every cut (S, T), since the flow across any cut equals |f| and is bounded by the cut's forward capacity. Equality is shown by the augmenting-path argument: when Ford-Fulkerson terminates, no augmenting path exists in the residual network; letting S be the vertices reachable from s in the residual network gives an s–t cut all of whose forward arcs are saturated and whose backward arcs carry zero flow, so |f| = c(S, T), forcing both extrema to coincide [[source.ford-fulkerson-1956]] **[confirmed]**. Independently obtained the same year by Elias, Feinstein & Shannon for the information-flow setting [[source.schrijver-2003]] **[confirmed]**. Presented with full proof as a standard result in algorithms texts [[source.clrs]] **[confirmed]**.
