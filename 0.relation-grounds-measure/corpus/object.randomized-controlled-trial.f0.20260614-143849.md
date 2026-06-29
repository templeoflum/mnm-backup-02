---
name: randomized-controlled-trial
type: object
object-type: design
essence: random allocation to treatment vs concurrent control — Fisher's randomization carried into medicine
field: [field.experimental-design, field.mathematical-statistics]
status: established
state: settled
attribution: design principle R. A. Fisher (1925/1935); first modern RCT — MRC streptomycin trial, A. Bradford Hill, BMJ 1948; precursor James Lind (1747)
formalized: true
source: [source.mrc-streptomycin-1948, source.james-lind-1747, source.fisher-1935, source.montgomery-doe]
depends-on: [object.randomization, object.replication-and-blocking]
used-by: []
---

**statement (plain)** — to test a treatment fairly, take a group of subjects, split them into a treatment arm and a control arm **by a chance device**, then compare outcomes. Random allocation makes the arms comparable in expectation (even for unknown factors) and gives a valid test; the concurrent control rules out time and selection effects. It is Fisher's [[object.randomization]] principle applied to clinical and field testing.

**statement** — a randomized controlled trial is a comparative experiment in which experimental units (often patients) are assigned to a treatment group or a concurrent control group by a randomization mechanism, and outcomes are compared. It imports the experimental-design principles — [[object.randomization]], concurrent controls, and (where used) blinding — into the testing of interventions. **[confirmed]**

**basis** — established. The dominant standard of evidence in clinical research and a central design of the applied [[field.experimental-design]].

**lineage** — the underlying design principle is Fisher's [[source.fisher-1935]] randomization (1925/1935). The **MRC trial of streptomycin for pulmonary tuberculosis** (BMJ 2:769–782, 1948), designed by the statistician **Austin Bradford Hill**, is widely regarded as the first modern randomized controlled trial: treatment allocation was by random numbers with concealed assignment and concurrent controls [[source.mrc-streptomycin-1948]]. An important pre-randomization precursor is **James Lind's 1747 scurvy trial** aboard HMS Salisbury — a controlled comparison without randomization [[source.james-lind-1747]]. **[confirmed]**

**door** — [[source.montgomery-doe]]; the James Lind Library for the historical record.

**sources** — [[source.mrc-streptomycin-1948]], [[source.james-lind-1747]], [[source.fisher-1935]], [[source.montgomery-doe]].
