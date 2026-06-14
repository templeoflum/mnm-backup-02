---
name: replication-and-blocking
type: object
object-type: principle
essence: repeat to estimate error (replication); group like with like to remove nuisance variation (blocking / local control)
field: [field.experimental-design, field.mathematical-statistics]
status: established
state: float
attribution: R. A. Fisher — Statistical Methods for Research Workers (1925), The Design of Experiments (1935)
formalized: true
source: [source.fisher-1935, source.cochran-cox-1950, source.box-hunter-hunter, source.montgomery-doe]
depends-on: [object.randomization]
used-by: [object.factorial-design, object.latin-square, object.analysis-of-variance]
---

**statement (plain)** — replication means running each treatment on more than one unit, so you can measure the natural variability (the experimental error) and tell a real treatment difference from noise. Blocking (local control) means grouping similar units into blocks — homogeneous within, different between — and comparing treatments inside each block, so a known nuisance source is removed from the comparison instead of inflating the error.

**statement** — the second and third of Fisher's three principles of experimental design (the first being [[object.randomization]]). **Replication** is the independent repetition of treatments across units; it furnishes an estimate of the experimental error, the unit of measurement against which observed differences are tested. **Blocking** (Fisher's *local control*) arranges units into blocks chosen so that variation within a block is small and variation between blocks is large; treatments are compared within blocks, isolating a nuisance variable and reducing experimental error. **[confirmed]**

**basis** — established. The triad randomization–replication–local-control is the standard statement of Fisher's principles in the [[field.experimental-design]] literature.

**lineage** — formulated by R. A. Fisher in *Statistical Methods for Research Workers* (1925) and *The Design of Experiments* (1935) [[source.fisher-1935]], out of the Rothamsted agricultural programme. The randomized complete block and the [[object.latin-square]] are the canonical realizations of blocking; replication underwrites the error term in [[object.analysis-of-variance]]. **[confirmed]**

**door** — [[source.box-hunter-hunter]]; [[source.montgomery-doe]]; [[source.cochran-cox-1950]].

**sources** — [[source.fisher-1935]], [[source.cochran-cox-1950]], [[source.box-hunter-hunter]], [[source.montgomery-doe]].
