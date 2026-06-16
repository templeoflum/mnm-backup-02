---
name: interoceptive-accuracy
type: object
object-type: metric
essence: the objective performance dimension of interoception — how well a person detects their own bodily signals on an objective task, distinct from self-report and from metacognitive awareness
field: [field.interoception]
status: established
state: settled
attribution: heartbeat-tracking measure (Schandry 1981); three-dimension framework (Garfinkel et al. 2015)
formalized: 1981 (measure); 2015 (dimensional framework)
source: [source.schandry-1981, source.garfinkel-2015]
depends-on: [object.heartbeat-counting-task, object.interoception]
used-by: []
---

**statement (plain)** — Interoceptive accuracy is the objective, performance-based dimension of interoception: a person's measured ability to detect their own internal bodily signals (paradigmatically the heartbeat) on a task scored against ground truth. It is one of three dissociable dimensions, separated from **interoceptive sensibility** (self-reported belief about one's interoceptive ability) and **interoceptive awareness** (metacognitive correspondence between confidence and accuracy).

**statement (formal/formula)** — In the Schandry heartbeat-counting task, accuracy is commonly scored as
`1 − (|recorded beats − counted beats| / recorded beats)`,
averaged over intervals, yielding a value in (−∞, 1] bounded near 1 for perfect tracking. Metacognitive awareness is operationalized as the trial-by-trial correlation (or AUROC) between confidence ratings and accuracy.

**basis** — Schandry (1981) introduced the mental heartbeat-tracking measure that operationalizes cardiac interoceptive accuracy [[source.schandry-1981]] **[confirmed]**. Garfinkel, Seth, Barrett, Suzuki & Critchley (2015) showed empirically that accuracy, sensibility and awareness are dissociable, establishing accuracy as the objective construct distinct from the other two [[source.garfinkel-2015]] **[confirmed]**.

*Limits* — the validity of heartbeat-counting as a measure of *accuracy* is contested: counted-vs-recorded scores correlate with beliefs about resting heart rate and with time-estimation strategies, so counting may index knowledge/expectation rather than true cardiac perception. Heartbeat *detection* (synchrony judgement) tasks and other modalities (respiratory, gastric) are used to address this; no single gold-standard measure has settled.
