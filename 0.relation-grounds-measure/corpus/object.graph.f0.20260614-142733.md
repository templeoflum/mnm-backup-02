---
name: graph
type: object
object-type: definition
essence: a set of vertices together with edges joining pairs of them — the atom of the field
field: [field.graph-theory]
status: foundational
state: settled
attribution: abstraction implicit in Euler (1736); modern set-theoretic definition standardized through the 20th century (Kőnig 1936; the term "graph" from Sylvester 1878)
formalized: true
source: [source.euler-1736, source.konig-1936, source.diestel-graph-theory]
depends-on: []
used-by: [object.euler-eulerian-circuit-theorem, object.four-color-theorem, object.kuratowski-theorem, object.menger-theorem, object.dijkstra-shortest-path-algorithm]
aliases: ["object.graph"]
---

**statement (plain)** — a graph is a collection of points, called vertices, some pairs of which are joined by lines, called edges. It records only what is connected to what — geometry and route inside each point are discarded. The [[field.graph-theory]] is the study of these objects.

**statement (formal)** — a (simple, finite, undirected) graph is an ordered pair G = (V, E) where V is a finite set of *vertices* and E is a set of *edges*, each edge an unordered pair {u, v} of distinct vertices. Two vertices joined by an edge are *adjacent*; the *degree* deg(v) is the number of edges incident to v. Variants relax this: *multigraphs* allow multiple edges between a pair and *loops* at a vertex (needed to model Euler's bridges); *directed graphs* (digraphs) take E ⊆ V × V of ordered pairs. **[confirmed]**

**status** — foundational definition, not a theorem; the carrier on which every other object in the field is stated.

**lineage** — the abstraction is implicit in Euler's 1736 reduction of the [[source.euler-1736]] Königsberg problem to land-masses-and-bridges, where he observed that the route inside each land mass is irrelevant and only the sequence of crossings matters. The word "graph" in this sense was introduced by J. J. Sylvester (1878). The modern systematic set-theoretic treatment is consolidated in Kőnig's 1936 treatise [[source.konig-1936]], the first book devoted to the subject. **[confirmed]**

**door** — Diestel, *Graph Theory*, §1.1 (definitions) [[source.diestel-graph-theory]].

**sources** — Euler 1736 (origin of the abstraction); Kőnig 1936 (first treatise); Diestel (standard modern definitions); cross-checked against nLab and Wikipedia "Graph (discrete mathematics)." **[confirmed]**
