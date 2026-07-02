---
name: box-plot
type: object
object-type: method
essence: a one-glance display of a distribution via the five-number summary — median, two hinges, two whiskers — with outliers shown individually
field: [field.exploratory-data-analysis, field.data-visualization]
status: established
state: settled
attribution: J. W. Tukey (box-and-whisker plot, ~1970, codified 1977); range-bar precursor Mary Eleanor Spear (1952)
formalized: false
source: [source.tukey-1977, source.nist-sematech-eda]
depends-on: [object.resistant-summary]
used-by: []
aliases: ["object.box-plot"]
---

**statement (plain)** — a box plot draws a box from the lower quarter-point to the upper quarter-point of the data, with a line at the median; "whiskers" reach out to the most extreme points that aren't unusually far, and any points beyond that are drawn one by one as outliers. One small picture shows center, spread, skew, and stragglers at once.

**statement** — the box-and-whisker plot (box plot) is a standardized display of a numeric distribution built on the **five-number summary**: minimum, lower hinge (≈ first quartile, 25th percentile), median, upper hinge (≈ third quartile, 75th percentile), maximum. The box spans the two hinges (the middle ~50% of the data); a line marks the median. Whiskers extend, by the common **1.5 × IQR rule**, to the most extreme observations still within 1.5 interquartile ranges of the hinges; points beyond are plotted individually as outliers. In Tukey's original work the **hinges** were used rather than quartiles (Tukey 1977, p. 39). **[confirmed]**

**basis** — the box plot is the canonical EDA graphic: every element is a resistant summary (median, hinges), so the picture is not distorted by a few extreme points, and outliers are made visible rather than hidden. [[object.resistant-summary]] [[field.data-visualization]]

**lineage** — John W. Tukey introduced the box-and-whisker plot around 1970 and codified it in *Exploratory Data Analysis* (1977) [[source.tukey-1977]]; his form became the standard. A precursor, the "range-bar method," appeared in Mary Eleanor Spear's *Charting Statistics* (1952). The NIST/SEMATECH e-Handbook documents the modern construction and the 1.5 IQR convention [[source.nist-sematech-eda]]. **[confirmed]** (Spear precursor: **[candidate, single-source / popular accounts]**.)

**sources** — [[source.tukey-1977]] (origin, hinges p.39), [[source.nist-sematech-eda]] (construction, 1.5 IQR rule).
