---
name: stigmergy
type: object
object-type: concept
essence: indirect coordination in which the trace an action leaves in a shared environment stimulates the next action, so agents coordinate through the medium rather than directly
field: [field.stigmergy]
status: established
state: settled
attribution: Pierre-Paul Grassé (1959); generalized by Theraulaz & Bonabeau (1999) and Heylighen (2016)
formalized: 1959
source: [source.grasse-1959, source.theraulaz-bonabeau-1999, source.heylighen-2016]
depends-on: []
used-by: [object.ant-colony-optimization, object.quantitative-vs-qualitative-stigmergy]
aliases: ["object.stigmergy"]
---

**statement (plain).** Stigmergy is a mechanism of indirect coordination: an agent's action modifies a shared environment, and that modification (the trace) is the stimulus that triggers a subsequent action — by the same or another agent. Coordination is achieved through the environment, without direct agent-to-agent communication, central control, or shared plan. The name derives from Greek *stigma* (mark) + *ergon* (work): work that marks the environment so as to incite further work. [confirmed]

**basis.** Grassé introduced the concept to explain termite nest reconstruction: a worker deposits a soil pellet, the deposit raises the local stimulus, and the raised stimulus attracts further deposits, so columns and arches self-organize without any termite holding a blueprint [[source.grasse-1959]]. Theraulaz & Bonabeau reviewed and codified the idea for the science of collective behavior, distinguishing degree-based from kind-based forms [[source.theraulaz-bonabeau-1999]]. Heylighen generalized it to a component model (agent, action, medium, trace, condition) and argued it underlies coordination far beyond insects [[source.heylighen-2016]]. [confirmed]

**limits.** Stigmergy is a coordination mechanism, not a guarantee of optimal or stable outcomes: positive feedback through traces can amplify errors as readily as useful structure, and decay/evaporation of traces is generally required to keep the system adaptive. Whether a given collective behavior is "stigmergic" can be contested, since the boundary between sematectonic (structure-as-stimulus) and sign-based (dedicated-marker) stigmergy is not sharp [[source.heylighen-2016]]. [confirmed]
