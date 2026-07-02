---
name: dijkstra-shortest-path-algorithm
type: object
object-type: algorithm
essence: greedily grows a shortest-path tree from a source by always settling the nearest unsettled vertex
field: ["[[field.algorithms]]", "[[field.graph-theory]]"]
status: established
state: settled
attribution: Edsger W. Dijkstra (1959)
formalized: true
source: ["[[source.dijkstra-1959]]", "[[source.clrs]]"]
depends-on: ["[[object.landau-notation]]", "[[object.graph]]"]
used-by: []
aliases: ["object.dijkstra-shortest-path-algorithm"]
---

**statement (plain)** — finds the shortest path from one starting vertex to all others in a graph with non-negative edge weights. Keep a tentative distance to every vertex; repeatedly pick the unvisited vertex with the smallest tentative distance, mark it final, and relax its outgoing edges (update neighbours if going through it is shorter). Because weights are non-negative, the vertex you pick is never improved later — so you can settle it for good.

**statement (formal)** — input: a directed graph G = (V, E) with weights w : E → ℝ≥0 and a source s. Output: d(v) = shortest-path distance from s to every v ∈ V. Maintain a set S of settled vertices and a min-priority queue keyed by tentative distance. Initialize d(s)=0, d(v)=∞. While the queue is nonempty: extract the minimum-key vertex u, add it to S, and for each edge (u,v) relax: if d(u)+w(u,v) < d(v) then d(v) ← d(u)+w(u,v). **[confirmed]**

**complexity** — O((|V|+|E|) log |V|) with a binary-heap priority queue; O(|E| + |V| log |V|) with a Fibonacci heap. Correctness requires non-negative weights (for negative edges use Bellman–Ford). **[confirmed]**

**proof / method** — greedy with an exchange argument: when u is extracted with minimum tentative distance, d(u) already equals its true shortest distance, because any other s→u path must leave S through some frontier vertex whose tentative distance is ≥ d(u), and all remaining edges are non-negative, so it cannot be shorter. Induction on the order of extraction gives correctness for all vertices. **[confirmed]**

**lineage** — Edsger W. Dijkstra, "A Note on Two Problems in Connexion with Graphs," *Numerische Mathematik* 1 (1959), pp. 269–271 [[source.dijkstra-1959]]. The same note's "Problem 1" is a minimum-spanning-tree method. The priority-queue speedups are later (binary heaps; Fredman–Tarjan Fibonacci heaps, 1984). **[confirmed]**

**door** — [[source.clrs]] ch. 22 (single-source shortest paths); [[source.erickson-algorithms]] (shortest paths).

**sources** — [[source.dijkstra-1959]], [[source.clrs]]; Springer (DOI 10.1007/BF01386390); Wikipedia "Dijkstra's algorithm".
