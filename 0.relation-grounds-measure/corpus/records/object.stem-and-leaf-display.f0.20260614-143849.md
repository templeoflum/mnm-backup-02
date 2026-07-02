---
name: stem-and-leaf-display
type: object
object-type: method
essence: a histogram-like display that sorts data into rows by leading digits while keeping the actual digits visible
field: ["[[field.exploratory-data-analysis]]", "[[field.data-visualization]]"]
status: established
state: settled
attribution: J. W. Tukey (codified in Exploratory Data Analysis, 1977); precursor Arthur Bowley, early 1900s
formalized: false
source: ["[[source.tukey-1977]]", "[[source.nist-sematech-eda]]"]
depends-on: []
used-by: []
---

**statement (plain)** — split each number into a "stem" (its leading digits) and a "leaf" (its last digit). List the stems in a column and write each value's leaf next to its stem, in order. You get the shape of the distribution like a histogram, but the original numbers are still there to read.

**statement** — a stem-and-leaf display (stemplot) presents quantitative data graphically, similar to a histogram, to show the shape of a distribution while **retaining the original data** to at least two significant digits in sorted order. The "stem" is the unique set of leading digits; the "leaves" are the trailing final digits placed in a row beside the matching stem and ordered. Because values stay legible and sorted, the display eases the move to order-based (non-parametric) inference. **[confirmed]**

**basis** — a core EDA paper-and-pencil display: it doubles as a sorted data table and a distribution picture, so the analyst loses no information while reading shape, gaps, clusters, and outliers directly. [[field.exploratory-data-analysis]] [[field.data-visualization]]

**lineage** — the modern stem-and-leaf display was introduced by John W. Tukey and codified in *Exploratory Data Analysis* (1977) [[source.tukey-1977]]; stemplots came into common use in the 1980s following that book, aided by the monospaced output of period computing. The concept is traced to Arthur Bowley's work in the early 1900s. The NIST/SEMATECH e-Handbook treats it as a standard EDA graphic [[source.nist-sematech-eda]]. **[confirmed]** (Bowley precursor: **[candidate, single-source / popular accounts]**.)

**sources** — [[source.tukey-1977]] (origin), [[source.nist-sematech-eda]] (EDA technique).
