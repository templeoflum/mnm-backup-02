---
name: preferential-attachment
type: object
object-type: mechanism
essence: in a growing network, new nodes connect to existing nodes with probability proportional to their current degree — "the rich get richer"
field: ["[[field.network-science-scale-free]]"]
status: established
state: float
attribution: Barabási & Albert (1999); antecedents in Yule (1925) and Simon (1955) as the Yule–Simon process
formalized: 1999
source: ["[[source.barabasi-albert-1999]]", "[[source.albert-barabasi-2002]]"]
depends-on: []
used-by: ["[[object.scale-free-network]]"]
---

**statement (plain)** — When a network grows by adding nodes one at a time, and each new node's links are directed to existing nodes with probability proportional to how many links those nodes already have, high-degree nodes accumulate new links faster than low-degree ones. Over time a few nodes become very large hubs while most stay small.

**statement (formal)** — In the Barabási–Albert model, a new node attaches m edges, choosing an existing node i with probability Π(kᵢ) = kᵢ / Σⱼ kⱼ, where kᵢ is the current degree of node i. Growth (continual node addition) plus this rule drives the degree distribution to a stationary power law P(k) ~ k^−3 [[source.barabasi-albert-1999]] **[confirmed]**.

**lineage** — the same "rich get richer" dynamic appears earlier as the Yule process (1925, species-per-genus) and Simon's model (1955, word frequencies / city sizes) — the Yule–Simon distribution; Barabási & Albert rediscovered and named it in the network setting [[source.albert-barabasi-2002]] **[confirmed as attribution]**. Generates the scale-free topology; concentrating flow and influence through the resulting hubs is the network's control point.
