---
name: residual-network
type: object
object-type: concept
essence: the auxiliary network of leftover and cancellable capacity that drives augmenting-path flow algorithms
field: ["[[field.network-flow-theory]]"]
status: established
state: settled
attribution: implicit in Ford & Fulkerson (1956); formalized in the algorithmic literature
formalized: 1956
source: ["[[source.ford-fulkerson-1956]]", "[[source.clrs]]", "[[source.schrijver-2003]]"]
depends-on: []
used-by: ["[[object.edmonds-karp-algorithm]]", "[[object.ford-fulkerson-algorithm]]", "[[object.max-flow-min-cut-theorem]]"]
---

**statement (plain)** — Given a flow f on a network, the residual network records, for each arc, how much additional flow could still be sent and how much existing flow could be pushed back. A forward arc (u, v) with capacity c and flow f gets residual capacity c − f (room to add); it also induces a reverse arc (v, u) with residual capacity f (room to cancel). An augmenting path is any s–t path through arcs of strictly positive residual capacity.

**statement (formal)** — For network (V, E, c) and feasible flow f, the residual capacity is c_f(u, v) = c(u, v) − f(u, v) + f(v, u). The residual network is G_f = (V, E_f) with E_f = { (u, v) : c_f(u, v) > 0 }. A maximum flow is reached exactly when t is unreachable from s in G_f.

**basis** — The cancellation/leftover bookkeeping underlies the labeling method of the founding paper [[source.ford-fulkerson-1956]] **[confirmed]** and is the standard formal device used to state and prove augmenting-path algorithms and the optimality certificate [[source.clrs]] **[confirmed]**.

**limits** — The residual network is defined relative to a particular flow f and must be recomputed (or incrementally maintained) after each augmentation; it is a derived structure, not a fixed property of the input network [[source.schrijver-2003]] **[confirmed]**.
