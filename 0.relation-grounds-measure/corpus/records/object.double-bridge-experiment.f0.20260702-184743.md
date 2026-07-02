---
name: double-bridge-experiment
type: object
object-type: concept
essence: the classic experiment showing ant colonies converge on the shorter of two paths purely through pheromone positive feedback — no measuring, no leader
field: ["[[field.stigmergy]]"]
status: established
state: float
attribution: Goss, Aron, Deneubourg & Pasteels (1989), on the Argentine ant
formalized: false
source: ["[[source.goss-1989]]"]
depends-on: []
used-by: []
---

**statement (plain)** — offer an ant colony two bridges of different lengths between nest and food. The colony reliably converges on the shorter one — but not because any ant measures it. Ants crossing the short branch complete the round trip faster, so they lay pheromone on it more often per unit time; the trail there grows faster, recruiting still more ants (positive feedback), until the colony has effectively "chosen" the short path. Selection emerges from timing and reinforcement alone.

**statement (mechanism)** — the empirical basis for pheromone-trail shortest-path finding and the direct antecedent of Ant Colony Optimization [[object.ant-colony-optimization]]: reinforce-by-use (deposit) plus decay (evaporation) on a shared medium. A canonical demonstration of quantitative marker-based stigmergy [[object.sematectonic-vs-sign-based-stigmergy]].

**basis** — Goss et al. (1989) [[source.goss-1989]], Argentine ant (*Linepithema humile*), with Monte-Carlo modelling of the branch-choice distribution. *Support* — foundational, widely replicated; the seed of swarm intelligence. *Limits* — pure positive feedback can lock onto an early path; evaporation is the needed "forgetting." **[confirmed]**

**sources** — [[source.goss-1989]] (the experiment). **[confirmed]**
