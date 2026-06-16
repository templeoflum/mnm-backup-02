---
name: heartbeat-counting-task
type: object
object-type: method
essence: the mental heartbeat-tracking paradigm — silently counting felt heartbeats over timed intervals and comparing to ECG — the canonical operationalization of cardiac interoceptive accuracy
field: [field.interoception]
status: established
state: float
attribution: Rainer Schandry (1981)
formalized: 1981
source: [source.schandry-1981, source.garfinkel-2015]
depends-on: [object.interoception]
used-by: [object.interoceptive-accuracy]
---

**statement (plain)** — The heartbeat-counting (mental tracking) task asks a participant to silently count the heartbeats they feel during signalled time intervals of varying length, without taking a pulse or otherwise sensing the beat manually. The reported count is compared to the actual number of beats recorded by ECG over the same interval to produce a heartbeat perception score. It is the most widely used measure in the interoception literature.

**statement (formal/formula)** — Per-interval score and overall accuracy:
`accuracy = (1/n) Σ_intervals [ 1 − |N_recorded − N_counted| / N_recorded ]`,
with several intervals (commonly 25, 35, 45 s) and `n` the number of intervals; higher = better tracking.

**basis** — Introduced by Schandry (1981), who related counting performance to anxiety and trait emotional lability and established the procedure now bearing his name [[source.schandry-1981]] **[confirmed]**. Adopted as the standard operationalization of interoceptive accuracy and incorporated into the dissociation framework of Garfinkel et al. (2015) [[source.garfinkel-2015]] **[confirmed]**.

*Limits* — the task confounds true cardiac perception with prior beliefs about heart rate, time perception, and task demand (participants who know their resting rate can estimate counts). Performance improves with feedback of true rate, indicating it is not purely perceptual. Heartbeat-detection (synchrony) tasks and the method-comparison cautions of Garfinkel et al. are the standard correctives; the method is widely used but not validity-settled.
