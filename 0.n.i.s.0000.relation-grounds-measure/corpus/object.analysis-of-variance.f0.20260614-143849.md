---
name: analysis-of-variance
type: object
object-type: method
essence: partition total variance into sources, then test treatment effects against error with the F-ratio
field: [field.experimental-design, field.mathematical-statistics]
status: established
state: settled
attribution: R. A. Fisher — variance introduced 1918; first applied in Studies in Crop Variation I (1921); popularized in Statistical Methods for Research Workers (1925); F distribution named for Fisher by G. W. Snedecor
formalized: true
source: [source.fisher-1922, source.fisher-1935, source.cochran-cox-1950, source.montgomery-doe]
depends-on: [object.replication-and-blocking, object.randomization]
used-by: []
---

**statement (plain)** — split the total spread (variance) in the data into named pieces: how much is due to the treatments, how much to blocks, and how much is leftover noise (error). Then compare the between-treatments spread to the within-groups spread as a ratio (the F-ratio). A large ratio says the treatments differ by more than chance would produce.

**statement** — analysis of variance (ANOVA) is a method that decomposes the total variability of a response into additive components attributable to identified sources (treatments, blocks, interactions) and a residual error term, displayed in an analysis-of-variance table. Treatment effects are tested by the **F-test**, the ratio of the between-groups mean square to the within-groups (error) mean square, referred to the F distribution. It is the inferential engine for analyzing designed experiments, including [[object.factorial-design]] and the [[object.latin-square]]. **[confirmed]**

**basis** — established. The standard analysis tool of the [[field.experimental-design]] and a core method of [[field.mathematical-statistics]].

**lineage** — R. A. Fisher introduced the concept of **variance** in "The Correlation Between Relatives on the Supposition of Mendelian Inheritance" (1918); first applied the analysis of variance to data in "Studies in Crop Variation I" (1921) and developed it through the Rothamsted work [[source.fisher-1922]]. It became widely known via the analysis-of-variance table in *Statistical Methods for Research Workers* (1925) and was tied to experimental design in *The Design of Experiments* (1935) [[source.fisher-1935]]. The **F distribution** was named for Fisher by **George W. Snedecor**. **[confirmed]**

**door** — [[source.montgomery-doe]]; [[source.cochran-cox-1950]].

**sources** — [[source.fisher-1922]], [[source.fisher-1935]], [[source.cochran-cox-1950]], [[source.montgomery-doe]].
