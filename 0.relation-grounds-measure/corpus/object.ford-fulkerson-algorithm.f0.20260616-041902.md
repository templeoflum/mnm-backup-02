---
name: ford-fulkerson-algorithm
type: object
object-type: algorithm
essence: the augmenting-path method — repeatedly push flow along an s–t path in the residual network until none remains
field: ["[[field.network-flow-theory]]"]
status: established
state: settled
attribution: L. R. Ford Jr. & D. R. Fulkerson (1956)
formalized: 1956
source: ["[[source.ford-fulkerson-1956]]", "[[source.clrs]]", "[[source.schrijver-2003]]"]
depends-on: ["[[object.residual-network]]", "[[object.max-flow-min-cut-theorem]]"]
used-by: ["[[object.edmonds-karp-algorithm]]"]
aliases: ["object.ford-fulkerson-algorithm"]
---

**statement (plain)** — Start from the zero flow. While there exists a path from source s to sink t in the residual network, find such an augmenting path, determine its bottleneck (the minimum residual capacity along it), and increase the flow by that amount, updating residual capacities. When no augmenting path remains, the current flow is maximum.

**statement (formal)** — Initialize f ≡ 0. Repeat: build the residual network G_f; if an s–t path p exists in G_f, let c_f(p) = min over arcs (u,v) on p of residual capacity c_f(u,v), and augment f along p by c_f(p); else stop. Output f. Termination correctness follows from the max-flow min-cut theorem: absence of an augmenting path certifies optimality.

**basis** — Method introduced and proved correct in the founding paper [[source.ford-fulkerson-1956]] **[confirmed]**, and standard in algorithms texts [[source.clrs]] **[confirmed]**.

**limits** — With unspecified path choice the method need not run in polynomial time: on integer capacities it terminates after at most the max-flow-value augmentations (so weakly polynomial in the capacities, not strongly polynomial), and with irrational capacities it may fail to terminate or converge to the wrong value. These deficiencies motivated the shortest-augmenting-path refinement [[source.schrijver-2003]] **[confirmed]**.
