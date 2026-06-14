---
name: latin-square
type: object
object-type: design
essence: an n×n arrangement, each treatment once per row and once per column — block two nuisance factors at once
field: [field.experimental-design]
status: established
state: float
attribution: combinatorial object — L. Euler (1782); brought into experimental design by R. A. Fisher (1920s) and tabulated by Fisher & Yates (1938)
formalized: true
source: [source.euler-1782, source.fisher-1935, source.fisher-yates-1938, source.cochran-cox-1950]
depends-on: [object.randomization, object.replication-and-blocking]
used-by: [object.analysis-of-variance]
---

**statement (plain)** — lay your treatments out in a square grid so that each treatment appears exactly once in every row and exactly once in every column. Rows handle one nuisance source, columns handle another, so a single square removes **two** unwanted sources of variation at once — and it needs only n² runs for n treatments, versus n³ for the full three-way layout.

**statement** — a Latin square of order n is an n×n array filled with n symbols (treatments) such that each symbol occurs exactly once in each row and exactly once in each column. As an experimental design it uses the two directions (rows, columns) as two **blocking factors**, controlling two nuisance variables simultaneously, on the assumption of no interaction between rows, columns, and treatments. It is a realization of the blocking principle ([[object.replication-and-blocking]]) and is analyzed by [[object.analysis-of-variance]]. **[confirmed]**

**basis** — established. A standard blocking design of the [[field.experimental-design]].

**lineage** — the combinatorial object dates to Leonhard Euler, *Recherches sur une nouvelle espèce de quarrés magiques* (1782), where he studied such squares (and the related Graeco-Latin squares) — the source of the name [[source.euler-1782]]. Its application to designed experiments is due to R. A. Fisher, who recommended Latin squares for agricultural field trials in the 1920s [[source.fisher-1935]]; Fisher and Frank Yates developed sets of squares and published them in *Statistical Tables for Biological, Agricultural and Medical Research* (1938) [[source.fisher-yates-1938]]. **[confirmed]**

**door** — [[source.cochran-cox-1950]]; [[source.montgomery-doe]].

**sources** — [[source.euler-1782]], [[source.fisher-1935]], [[source.fisher-yates-1938]], [[source.cochran-cox-1950]].
