---
name: congestion-ceiling-of-stigmergy
type: object
object-type: concept
essence: stigmergy does not scale without limit — past some density the shared medium congests and coordination degrades below even non-interacting agents
field: ["[[field.stigmergy]]"]
status: established
state: float
attribution: Hunt, Jones & Hauert (2019), high-density robot swarms
formalized: false
source: ["[[source.hunt-hauert-2019]]"]
depends-on: []
used-by: []
---

**statement (plain)** — adding more agents to a stigmergic system does not keep improving it. Past a threshold the shared medium gets congested — traces overlap and interfere, physical interactions become the bottleneck — and coordination gets *worse*, not better. Hunt, Jones & Hauert showed a stigmergic avoidance algorithm in robot swarms became "first no better, then inferior to" non-interacting random walkers beyond a few hundred agents; termite-style deposition robots worsened past three or four units.

**statement (framework)** — the honest counterweight to "stigmergy scales for free." The fix when the ceiling is hit is to *partition the medium* (separate trails, boards, zones) or add a thin articulation-work layer [[object.articulation-work]] — not to add more agents to the same trace.

**basis** — Hunt, Jones & Hauert 2019 (Kilobots to N>300, simulation to N=400) [[source.hunt-hauert-2019]]. *Support* — consistent with earlier deposition-robot results. *Limits* — thresholds are system-specific (depend on medium, decay rate, density); the finding bounds naive scaling, it does not forbid large stigmergic systems that partition well. **[confirmed as attribution]**

**sources** — [[source.hunt-hauert-2019]] (the scaling test). **[confirmed as attribution]**
