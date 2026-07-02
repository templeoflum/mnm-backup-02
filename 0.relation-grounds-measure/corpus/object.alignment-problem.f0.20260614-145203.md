---
name: alignment-problem
type: object
object-type: concept
essence: the challenge of getting an AI system to actually pursue the goals its designers intend, not just the literal objective it was given
field: ["[[field.ai-alignment-praxis]]"]
status: established
state: settled
attribution: roots in Wiener (1960); modern framing Bostrom (2014), Russell (2019); outer/inner split via Hubinger et al. (2019)
formalized: false
source: ["[[source.bostrom-2014]]", "[[source.russell-2019]]", "[[source.amodei-2016]]"]
depends-on: []
used-by: ["[[object.reward-hacking]]", "[[object.rlhf]]", "[[object.scalable-oversight]]", "[[object.corrigibility]]"]
aliases: ["object.alignment-problem"]
---

**statement (plain)** — the alignment problem is the problem of building AI systems that do what we actually want, rather than what we literally said. You can rarely write down your true intent exactly, so an optimizer pointed at a written objective ("the specification") can satisfy that objective while doing something you never meant — and the gap widens as the system gets more capable. The "specification problem" is the part of this that is about the objective being wrong; even a perfect objective leaves the further problem of the trained system actually adopting it.

**statement** — split, in current praxis, into two sub-problems. **Outer alignment** (the specification problem): specifying an objective / reward function that captures the designer's true intent. **Inner alignment**: ensuring the system actually trained on that objective robustly pursues it rather than a correlated proxy that breaks under distribution shift (goal misgeneralization). A system is "aligned" when both hold. The field is **living and contested** — definitions of "alignment," "intent," and the outer/inner boundary are actively debated. **[confirmed]**

**status** — established as the field's organizing concept; not a formal theorem (it is a problem statement, not a proven result).

**lineage** — the control framing dates to Norbert Wiener (1960): if we use a machine whose operation we cannot effectively interfere with, "we had better be quite sure that the purpose put into the machine is the purpose which we really desire." **[confirmed as attribution]** [[field.cybernetics-control-theory]] The modern AI framing is carried by Bostrom, *Superintelligence* (2014) [[source.bostrom-2014]] and Russell, *Human Compatible* (2019), who reframes the standard model of AI (optimize a fixed given objective) as itself the error [[source.russell-2019]]. "Concrete Problems in AI Safety" (2016) turned it into an empirical ML agenda [[source.amodei-2016]]. The outer/inner-alignment vocabulary is usually traced to Hubinger et al., "Risks from Learned Optimization" (2019) — carried as lineage, single-source here, **[candidate, attribution]**. See also [[object.reward-hacking]] (specification failure made concrete).

**sources** — [[source.bostrom-2014]] · [[source.russell-2019]] · [[source.amodei-2016]]
