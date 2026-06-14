---
name: fitts-law
type: object
object-type: law
essence: time to point at a target grows with distance and shrinks with target size — a log law of aimed movement
field: [field.human-computer-interaction]
status: empirical
state: float
attribution: Paul M. Fitts (1954); Shannon form by I. Scott MacKenzie (1992)
formalized: true
source: [source.fitts-1954, source.card-moran-newell-1983]
depends-on: [field.human-computer-interaction]
used-by: []
---

**statement (plain)** — the time to move and point at a target depends on how far away the target is and how big it is: farther and smaller takes longer, nearer and larger is quicker. The relationship is logarithmic — doubling the distance does not double the time — so target difficulty can be measured as a single number, the index of difficulty, in "bits." It is a robust empirical regularity of rapid aimed movement, used to predict and compare pointing performance.

**statement (formula)** — for movement amplitude (distance) A and target width W,
index of difficulty ID = log₂(2A / W),
and movement time MT = a + b · ID = a + b · log₂(2A / W),
with a and b empirical constants fit per task/device. The widely used [[Shannon formulation]] (MacKenzie 1992) sets ID = log₂(A/W + 1), which fits data better and is the basis of the ISO 9241-9 pointing-device standard. **[confirmed]**

**basis** — empirical. Fitts (1954) framed aimed movement as transmitting information through a noisy human motor channel: distance A acts like signal, tolerance W like noise, so capacity-style log₂ enters by analogy to Shannon's channel theorem. The law is validated by experiment, not derived as a theorem — the information-theoretic reading is motivating analogy, not proof. **[confirmed]**

**lineage** — introduced by [[Paul Fitts]] in 1954 from reciprocal-tapping and disc-transfer experiments [[source.fitts-1954]]. Carried into [[human–computer interaction]] as a core predictive tool by [[Card, Moran & Newell]] (1983) [[source.card-moran-newell-1983]]. The now-standard "Shannon formulation," ID = log₂(A/W + 1), is due to I. Scott MacKenzie (1989/1992) and was adopted into ISO 9241-9. **[confirmed]**

**sources** — [[source.fitts-1954]] (origin paper, *J. Exp. Psychol.* 47(6):381–391); [[source.card-moran-newell-1983]] (HCI canon). Cross-checked against the [[Fitts's law]] Wikipedia article.
