---
name: audit-sampling
type: object
object-type: method
essence: applying procedures to less than 100% of a population so the sample supports a conclusion about the whole
field: [field.auditing-tradition, field.mathematical-statistics]
status: established
state: float
attribution: statistical strand pioneered by L. L. Vance (1950) and R. M. Trueblood (1956); codified by the AICPA (AU 350 / AU-C 530)
formalized: true
source: [source.au-c-530, source.vance-1950, source.trueblood-1956, source.arens-elder-beasley, source.montgomerys-auditing]
depends-on: [object.materiality]
used-by: [object.audit-risk-model, object.attribute-vs-variables-sampling]
---

**statement (plain)** — auditors usually cannot test every transaction, so they test a sample and reason from it to the whole population. Sampling can be statistical (items chosen at random and results evaluated with probability theory, so the chance of a wrong conclusion can be measured) or nonstatistical (items chosen and results judged by the auditor). The risk that a correctly performed sample still leads to the wrong conclusion because it was not representative is "sampling risk."

**statement** — audit sampling is "the application of audit procedures to less than 100% of the items within a population of audit relevance such that all sampling units have a chance of selection in order to provide the auditor with a reasonable basis on which to draw conclusions about the entire population." **Statistical sampling** has two defining characteristics: (1) random selection of the sample items, and (2) use of probability theory / an appropriate statistical method to evaluate sample results, **including measurement of sampling risk**. Nonstatistical sampling lacks one or both and yields no measurable sampling risk. **[confirmed]**

**basis** — codified in [[source.au-c-530]] (*Audit Sampling*; formerly AU 350), whose stated objective (AU-C 530.04) is "to provide a reasonable basis for the auditor to draw conclusions about the population from which the sample is selected." The PCAOB parallel is AS 2315. The two-approach (statistical / nonstatistical) framing and the two characteristics of statistical sampling are AICPA standard text. **[confirmed]**

**lineage** — the statistical strand was opened by L. L. Vance, *Scientific Method for Auditing* (1950) [[source.vance-1950]] and R. M. Trueblood (1956) [[source.trueblood-1956]], bringing probability sampling into a tradition founded on Dicksee's verification practice [[source.dicksee-1892]]. The method splits by purpose into attribute sampling (tests of controls) and variables sampling (substantive tests) — see [[object.attribute-vs-variables-sampling]]. Sampling parameters are bounded by [[object.materiality]] (tolerable misstatement) and set detection risk in the [[object.audit-risk-model]].

**sources** — [[source.au-c-530]], [[source.vance-1950]], [[source.trueblood-1956]], [[source.arens-elder-beasley]], [[source.montgomerys-auditing]]; cross-checked against PCAOB AS 2315 and accounting references (Corporate Finance Institute) for the statistical/nonstatistical definitions.
