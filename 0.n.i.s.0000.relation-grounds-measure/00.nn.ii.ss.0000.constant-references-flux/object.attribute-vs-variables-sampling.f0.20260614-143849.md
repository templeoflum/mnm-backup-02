---
name: attribute-vs-variables-sampling
type: object
object-type: method
essence: the two purposes of audit sampling — attribute sampling estimates a deviation rate (controls); variables sampling estimates a monetary amount (substantive)
field: [field.auditing-tradition, field.mathematical-statistics]
status: established
state: float
attribution: AICPA audit-sampling guidance (AU 350 / AU-C 530) and the AICPA Audit Guide, Audit Sampling
formalized: true
source: [source.au-c-530, source.arens-elder-beasley, source.montgomerys-auditing]
depends-on: [object.audit-sampling]
used-by: []
---

**statement (plain)** — audit sampling comes in two flavors for two jobs. **Attribute sampling** answers a yes/no question — did a control work or not? — and estimates how often it failed (a rate). It is used to test controls. **Variables sampling** answers a "how much?" question — it estimates a dollar amount, such as the total misstatement in an account balance — and is used in substantive tests of details.

**statement** — **attribute sampling** is used in **tests of controls**; it measures the **rate of deviation** (how often a control fails to operate as designed). Sample size is a function of (1) the acceptable risk of overreliance / assessing control risk too low, (2) the tolerable deviation rate, (3) the expected population deviation rate, and (4) population size. **Variables sampling** (classical variables sampling and its monetary-unit / probability-proportional-to-size variant, PPS) is used in **substantive tests of details** to estimate a **monetary amount** of misstatement. **[confirmed]**

**basis** — the controls-vs-substantive split and its sampling correlates are AICPA standard treatment in [[source.au-c-530]] and the AICPA Audit Guide, *Audit Sampling*; presented as a core distinction in [[source.arens-elder-beasley]] and [[source.montgomerys-auditing]]. Attribute sampling rests on the binomial/hypergeometric model of a proportion; classical variables sampling on the normal approximation to a mean/total. **[confirmed]**

**lineage** — both are specializations of [[object.audit-sampling]]; the statistical machinery descends from the probability-sampling strand of Vance [[source.vance-1950]] and Trueblood [[source.trueblood-1956]] and from mathematical statistics. Attribute sampling supports the control-risk (CR) assessment and variables sampling the detection-risk (DR) testing in the [[object.audit-risk-model]]; both are bounded by [[object.materiality]] (tolerable rate / tolerable misstatement).

**sources** — [[source.au-c-530]], [[source.arens-elder-beasley]], [[source.montgomerys-auditing]]; cross-checked against AICPA Audit Guide summaries and accounting study references for the attribute/variables purpose split and the four sample-size factors.
