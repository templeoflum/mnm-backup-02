---
name: exploratory-data-analysis
type: object
object-type: approach
essence: examine data through graphics and resistant summaries to reveal structure and suggest hypotheses, before formal modeling
field: [field.exploratory-data-analysis, field.mathematical-statistics, field.data-visualization]
status: established
state: settled
attribution: J. W. Tukey, developed 1971–1977, codified in Exploratory Data Analysis (Addison-Wesley, 1977)
formalized: false
source: [source.tukey-1977, source.tukey-1972, source.nist-sematech-eda]
depends-on: []
used-by: []
---

**statement (plain)** — look at the data first. Before fitting models or running hypothesis tests, draw pictures and compute summaries that survive bad points, so the data itself can reveal its shape, its surprises, and the questions worth asking. Exploration suggests hypotheses; confirmation tests them — and they are different jobs.

**statement** — Exploratory data analysis (EDA) is an approach/philosophy for data analysis that employs a variety of techniques (mostly graphical) to maximize insight into a data set, uncover underlying structure, extract important variables, detect outliers and anomalies, and suggest hypotheses — while postponing the usual assumptions about which model the data follow. It is set opposite *confirmatory* data analysis (CDA): hypothesis testing, p-values, estimation. EDA is "not a mere collection of techniques; EDA is a philosophy as to how we dissect a data set; what we look for; how we look; and how we interpret." **[confirmed]**

**basis** — Tukey held that statistics had over-emphasized confirmatory inference (hypothesis testing) and under-emphasized using data to *suggest* hypotheses; he favored simple, paper-and-pencil, outlier-tolerant displays and resistant measures (median, hinges) so a single bad value cannot dominate what the analyst sees. [[field.exploratory-data-analysis]] [[field.mathematical-statistics]]

**lineage** — the term and program were developed by J. W. Tukey across 1971–1977, with the precursor "Some graphical and semigraphical displays" [[source.tukey-1972]] and codified in his book *Exploratory Data Analysis* (Addison-Wesley, 1977) [[source.tukey-1977]]. The free NIST/SEMATECH *e-Handbook of Statistical Methods* gives the standard modern statement of EDA as approach/philosophy [[source.nist-sematech-eda]]. Tukey's advocacy fed the development of statistical-computing systems (S at Bell Labs, later S-PLUS and R). **[confirmed]**

**sources** — [[source.tukey-1977]] (origin), [[source.tukey-1972]] (precursor), [[source.nist-sematech-eda]] (modern definition / door).
