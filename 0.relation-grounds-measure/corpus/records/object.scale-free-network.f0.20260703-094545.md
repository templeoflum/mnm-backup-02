---
name: scale-free-network
type: object
object-type: concept
essence: a network whose degree distribution follows a power law P(k)~k^−γ, so a few high-degree hubs dominate connectivity at every scale
field: ["[[field.network-science]]"]
status: empirical
state: float
attribution: Barabási & Albert (1999)
formalized: 1999
source: ["[[source.barabasi-albert-1999]]", "[[source.albert-barabasi-2002]]", "[[source.barabasi-linked-2002]]"]
depends-on: ["[[object.preferential-attachment]]"]
used-by: []
---

**statement (plain)** — A scale-free network has no typical node degree: instead of most nodes having roughly the same number of links (as in a random graph), the number of links per node follows a power law, so there is a continuous hierarchy from a vast majority of low-degree nodes up to a handful of enormously connected hubs. "Scale-free" means the distribution looks the same at every magnification — no characteristic scale.

**statement (formal)** — The degree distribution obeys P(k) ~ k^−γ, empirically with 2 < γ < 3 for most observed networks; the variance (and, for γ ≤ 3, higher moments) diverges as network size grows, which is why a single "average degree" fails to characterize the network [[source.albert-barabasi-2002]] **[confirmed as attribution]**.

**consequences** — hubs make the network **robust to random failure** (a randomly removed node is almost always low-degree) yet **fragile to targeted attack** (removing the few hubs fragments it), and they shorten path lengths and accelerate spreading (information, disease, influence). The hub is therefore both the network's carrier and its lever — the control point where a channeler acts [[source.barabasi-linked-2002]] **[confirmed]**. Produced by growth + [[object.preferential-attachment]].
