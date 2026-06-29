---
name: network-flow-theory
type: field
essence: flows in capacitated networks — moving a divisible commodity from source to sink along arcs of bounded capacity, and the duality between maximum flow and minimum cut
canon: structure
grade: s
state: settled
links: [field.algorithms, field.graph-theory, source.ford-fulkerson-1956, source.edmonds-karp-1972, source.dinic-1970, source.schrijver-2003, source.clrs]
---

Network flow theory studies the routing of a divisible commodity through a directed graph whose arcs carry capacity limits, from a source to a sink, and the combinatorial duality that bounds it.

**origin** — L.R. Ford Jr. & D.R. Fulkerson formulated the maximum-flow problem and proved the max-flow min-cut theorem, giving the augmenting-path method [[source.ford-fulkerson-1956]] **[confirmed]**.

**codification** — the field's algorithmic and polyhedral core was consolidated through the strongly/polynomially-bounded augmenting-path analyses of Edmonds & Karp [[source.edmonds-karp-1972]] and Dinic [[source.dinic-1970]], and surveyed comprehensively in Schrijver's treatise [[source.schrijver-2003]] **[confirmed]**.

**door** — standard algorithms textbooks present the maximum-flow problem, Ford-Fulkerson, Edmonds-Karp, and max-flow min-cut as a teaching unit [[source.clrs]] **[confirmed]**.

**lineage** — the max-flow min-cut theorem was established in 1956 by Ford & Fulkerson and, independently, by P. Elias, A. Feinstein & C.E. Shannon ("A note on the maximum flow through a network," IRE Transactions on Information Theory, 1956); the dual-priority founding is recorded, not flattened **[confirmed]**.

*grade [s] — origin, codification, and door all present.*
