---
name: signal-detection-theory
type: object
object-type: model
essence: separates sensory sensitivity (d′) from decision criterion (bias) in detection — via the ROC
field: ["[[field.psychophysics]]"]
status: established
state: settled
attribution: Peterson, Birdsall & Fox (1954) and Tanner & Swets (1954); consolidated by Green & Swets (1966)
formalized: true
source: ["[[source.green-swets-1966]]", "[[source.gescheider-1997]]"]
depends-on: []
used-by: []
---

**statement (plain)** — whether someone says "I detect it" mixes two different things: how well their senses actually pick the signal out of noise, and how willing they are to say "yes." Signal detection theory pulls these apart. It gives one number for true **sensitivity** and another for the **decision criterion** (response bias), so a cautious and a reckless observer with the *same* eyes get the same sensitivity score.

**statement (formula)** — model the internal evidence as two overlapping Gaussian distributions (noise vs. signal+noise) on a decision axis; the observer says "yes" when evidence exceeds a criterion. In the equal-variance Gaussian case sensitivity is

d′ = z(H) − z(F),

where H is the hit rate, F the false-alarm rate, and z(·) the inverse standard-normal CDF (z-score). The criterion is c = −½·[z(H) + z(F)]. Sweeping the criterion traces the **receiver operating characteristic (ROC)**: a plot of hit rate against false-alarm rate; d′ is monotonically related to the area under the ROC. **[confirmed]**

**basis / empirical support & limits** — a normative/measurement model rather than an empirical regularity: it answers Green & Swets' critique that classical threshold methods confound sensitivity with response bias. The equal-variance Gaussian assumption is an idealization (ROCs are often asymmetric, requiring unequal-variance d′ or nonparametric area measures); d′ estimates are unstable when H or F approach 0 or 1. **[confirmed]**

**lineage** — grew out of statistical decision theory and radar/electrical engineering (Neyman–Pearson hypothesis testing). The theoretical side was developed by W. W. Peterson, T. G. Birdsall & W. C. Fox (1954); W. P. Tanner & J. A. Swets (1954, *Psychological Review*) carried it into perception. The canonical psychophysics text is Green & Swets, *Signal Detection Theory and Psychophysics* (1966) [[source.green-swets-1966]]. **[confirmed]** *(primary engineering papers not opened; their priority is corroborated across two independent secondary sources — carried as attribution.)*

**door** — [[source.green-swets-1966]]; [[source.gescheider-1997]]; Wikipedia "Detection theory."

**sources** — [[source.green-swets-1966]], [[source.gescheider-1997]]; Wikipedia "Detection theory"; Springer reference works on signal detection theory.
