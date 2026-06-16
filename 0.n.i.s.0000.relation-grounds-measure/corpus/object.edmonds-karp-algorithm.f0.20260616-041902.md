---
name: edmonds-karp-algorithm
type: object
object-type: algorithm
essence: Ford-Fulkerson with the shortest (fewest-arc) augmenting path chosen by BFS, giving a capacity-independent polynomial bound
field: [field.network-flow-theory]
status: established
state: float
attribution: Jack Edmonds & Richard M. Karp (1972); equivalent layered approach by Dinic (1970)
formalized: 1972
source: [source.edmonds-karp-1972, source.clrs, source.dinic-1970]
depends-on: [object.ford-fulkerson-algorithm, object.residual-network]
used-by: []
---

**statement (plain)** — Run the Ford-Fulkerson augmenting-path method, but at every step pick a shortest augmenting path — one with the fewest arcs — found by breadth-first search in the residual network. This choice forces the number of augmentations to be polynomial in the size of the graph alone, independent of the arc capacities.

**statement (formal)** — Each iteration finds an s–t path in G_f minimizing the number of arcs (BFS), then augments. The number of augmentations is O(VE), and with O(E) work per BFS the total time is O(VE^2). The shortest-path distances from s are nondecreasing across iterations, and each arc becomes critical (saturated as the bottleneck) at most O(V) times, which bounds the iteration count.

**basis** — Bound and proof given by Edmonds & Karp [[source.edmonds-karp-1972]] **[confirmed]**; presented as the canonical polynomial-time maximum-flow algorithm in algorithms texts [[source.clrs]] **[confirmed]**. The closely related layered-network / blocking-flow scheme of Dinic achieves the same family of bounds (O(V^2 E)) by augmenting along all shortest paths phase-by-phase [[source.dinic-1970]] **[confirmed]**.

**limits** — O(VE^2) is superseded on dense or specially structured graphs by Dinic's blocking-flow, push-relabel, and later near-linear algorithms; Edmonds-Karp is the baseline guarantee, not the best known bound [[source.dinic-1970]] **[confirmed]**.
