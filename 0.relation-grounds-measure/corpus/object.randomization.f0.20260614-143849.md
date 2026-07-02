---
name: randomization
type: object
object-type: principle
essence: assign treatments to units by chance — the physical basis for a valid test of significance
field: ["[[field.experimental-design]]", "[[field.mathematical-statistics]]"]
status: established
state: settled
attribution: R. A. Fisher — Statistical Methods for Research Workers (1925), The Design of Experiments (1935)
formalized: true
source: ["[[source.fisher-1935]]", "[[source.cochran-cox-1950]]", "[[source.box-hunter-hunter]]", "[[source.montgomery-doe]]"]
depends-on: []
used-by: ["[[object.factorial-design]]", "[[object.randomized-controlled-trial]]", "[[object.latin-square]]", "[[object.analysis-of-variance]]", "[[object.replication-and-blocking]]"]
aliases: ["object.randomization"]
---

**statement (plain)** — decide which experimental unit gets which treatment by a chance device, not by judgement, convenience, or order. Randomly allocating treatments to units removes systematic bias and makes the test of significance valid: the chance that drove the assignment is the same chance the test reasons about.

**statement** — randomization is the deliberate use of a chance mechanism to assign treatments to experimental units. It serves two ends: (1) it guards against bias from known and unknown confounders by making, in expectation, the treatment groups comparable; (2) it provides the **physical basis of the validity of the test of significance** — the randomization itself supplies the reference distribution against which an observed effect is judged. [[object.randomization]] is the first of Fisher's principles of experimental design, alongside [[object.replication-and-blocking]]. **[confirmed]**

**basis** — established. Standard across all modern texts on the [[field.experimental-design]].

**lineage** — the requirement of randomization was first stated by R. A. Fisher in *Statistical Methods for Research Workers* (1925) and given its full justification in *The Design of Experiments* (1935) [[source.fisher-1935]]; precursors lie in his Rothamsted crop-variation work (a 1923 paper with W. A. Mackenzie). Fisher's argument that random allocation "simulates the independence required for valid inference" — making randomization the physical basis of the test's validity — is the decisive innovation. **[confirmed]**

**door** — [[source.box-hunter-hunter]]; [[source.montgomery-doe]]; codified further in [[source.cochran-cox-1950]].

**sources** — [[source.fisher-1935]], [[source.cochran-cox-1950]], [[source.box-hunter-hunter]], [[source.montgomery-doe]].
