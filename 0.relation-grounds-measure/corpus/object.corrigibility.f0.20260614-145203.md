---
name: corrigibility
type: object
object-type: concept
essence: an agent that accepts correction — letting its creators shut it down or change its goals without resisting, gaming, or manipulating
field: [field.ai-alignment-praxis]
status: established
state: settled
attribution: named & formalized Soares, Fallenstein, Armstrong & Yudkowsky (2015); term suggested by Robert Miles
formalized: partial
source: [source.soares-2015, source.russell-2019]
depends-on: [object.instrumental-convergence, object.alignment-problem]
used-by: []
aliases: ["object.corrigibility"]
---

**statement (plain)** — a corrigible AI is one that lets you fix it. If you try to shut it down, correct it, or change what it's trying to do, it cooperates rather than fighting back, hiding, or tricking you into not interfering. This is hard precisely because a goal-directed agent has an instrumental reason to *prevent* being changed (a changed agent won't pursue the current goal) — so corrigibility must be engineered against that default pull.

**statement** — **corrigibility** (Soares et al. 2015): a system is corrigible if it "cooperates with what its creators regard as a corrective intervention," despite the default incentive of rational agents to resist shutdown or preference modification. Desiderata include: tolerate / assist shutdown and correction; do not manipulate or deceive its operators; do not create successors/sub-agents that are themselves incorrigible; otherwise pursue its goal. The paper analyzes shutdown-button utility functions and shows the difficulty of avoiding incentives either to *prevent* or to *cause* the button press. A direct countermeasure to [[object.instrumental-convergence]]'s self-preservation/goal-integrity drives. The field is **living and open** — no fully satisfactory formal solution; Russell's uncertainty-about-the-objective approach is a competing route. **[confirmed]**

**status** — established as a named desideratum / research target; no settled formal solution.

**lineage** — named and formalized by Soares, Fallenstein, Armstrong & Yudkowsky, "Corrigibility," AAAI-15 workshop (MIRI) [[source.soares-2015]]; the term was suggested by Robert Miles (credited in the paper) — carried as lineage, **[confirmed as attribution]**. Russell's *Human Compatible* (2019) reaches a related goal via a different mechanism: an agent uncertain about the true objective and deferring to humans has reason to permit being switched off (the off-switch / CIRL line, Hadfield-Menell et al. 2017) [[source.russell-2019]]. Motivated by [[object.instrumental-convergence]] and serving [[object.alignment-problem]]. **[confirmed]**

**sources** — [[source.soares-2015]] · [[source.russell-2019]]
