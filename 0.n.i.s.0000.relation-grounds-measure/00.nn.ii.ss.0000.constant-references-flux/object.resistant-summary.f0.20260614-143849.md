---
name: resistant-summary
type: object
object-type: concept
essence: summaries built from ranks/order — median, hinges, MAD — that a few extreme points cannot distort
field: [field.exploratory-data-analysis, field.mathematical-statistics]
status: established
state: float
attribution: order-based summaries are classical; resistant/robust framing for EDA from J. W. Tukey (1977); MAD traced to C. F. Gauss (1816)
formalized: true
source: [source.tukey-1977, source.nist-sematech-eda]
depends-on: []
used-by: [object.box-plot]
---

**statement (plain)** — pick summaries that don't get dragged around by a handful of weird values. The median (the middle value) and the hinges (the quarter-points) hold their ground even if you replace up to half the data with garbage; the average and the standard deviation do not — one runaway point can move them as far as you like.

**statement** — a *resistant* summary is one whose value changes only slightly when a small fraction of the data is altered arbitrarily; the related notion of a *robust* statistic resists small departures from model assumptions. Center is summarized by the **median**, spread by the **interquartile range / hinge spread** and the **median absolute deviation (MAD)** — MAD = median(|xᵢ − median(x)|), with consistency constant ≈ **1.4826** at the Gaussian. The **breakdown point** of the median and of the MAD is **50%** (they tolerate up to half the data being corrupted), whereas the mean and standard deviation have breakdown point 0 — a single outlier can send them to infinity. **[confirmed]**

**basis** — these summaries are the numeric backbone of EDA: every part of the box plot (median, hinges, whiskers) is resistant, so the display reports the bulk of the data honestly while flagging outliers separately rather than absorbing them. [[object.box-plot]] [[field.mathematical-statistics]]

**lineage** — order-statistic summaries (median, quartiles) are classical; Tukey gave them their central, named role in EDA (median, *hinges*, fences) in *Exploratory Data Analysis* (1977) [[source.tukey-1977]]. The MAD's earliest known mention is C. F. Gauss (1816) on the accuracy of observations; its robustness/breakdown framing belongs to the modern robust-statistics tradition (Tukey, Hampel, Huber). The NIST/SEMATECH e-Handbook documents resistant statistics as EDA practice [[source.nist-sematech-eda]]. **[confirmed]** (MAD ← Gauss 1816: **[confirmed as attribution]**.)

**sources** — [[source.tukey-1977]] (median/hinges in EDA), [[source.nist-sematech-eda]] (resistant statistics).
