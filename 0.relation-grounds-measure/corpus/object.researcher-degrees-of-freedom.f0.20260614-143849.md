---
name: researcher-degrees-of-freedom
type: object
object-type: concept
essence: the undisclosed analytic choices (p-hacking) — sample size, covariates, outcomes, exclusions — that let a researcher push a result below p < .05
field: [field.preregistration-open-science]
status: established
state: settled
attribution: term coined/popularized by Simmons, Nelson & Simonsohn, 2011
formalized: false
source: [source.simmons-nelson-simonsohn-2011, source.ioannidis-2005]
depends-on: []
used-by: [object.replication-crisis]
aliases: ["object.researcher-degrees-of-freedom"]
---

**statement (plain)** — researcher degrees of freedom are all the small, defensible-sounding choices a researcher makes while analyzing data — when to stop collecting, which outliers to drop, which measures to report, which controls to add. Each choice seems reasonable on its own, but trying several and keeping whichever gives p < .05 (called p-hacking) makes it easy to find a "significant" result even when nothing real is there.

**statement** — researcher degrees of freedom denote the flexibility in data collection, analysis, and reporting available to a researcher: choosing sample size / optional stopping, using covariates, selecting among dependent variables, and reporting subsets of conditions. Exploiting this flexibility to obtain significance — p-hacking — drives the actual false-positive rate far above the nominal α = .05. The remedy proposed alongside the concept is disclosure and pre-specification, i.e. [[object.preregistration]]. **[confirmed]**

**basis/origin** — the term was coined/popularized by Simmons, Nelson & Simonsohn, "False-Positive Psychology," *Psychological Science* 22(11) (2011):1359–1366, which proposed six author-disclosure requirements and four reviewer guidelines. **[confirmed as attribution]**

**lineage** — primary coinage Simmons-Nelson-Simonsohn 2011. The related "garden of forking paths" (Gelman & Loken) frames the same flexibility even without intentional hacking. [[source.ioannidis-2005]] independently modeled how such flexibility inflates false findings. NOTE: Simmons-Nelson-Simonsohn 2011 (false-positive psychology) is distinct from Ioannidis 2005 (most published findings false) — different papers, authors, venues. **[confirmed]**

**sources** — Simmons, Nelson & Simonsohn 2011 [[source.simmons-nelson-simonsohn-2011]]; Ioannidis 2005 [[source.ioannidis-2005]].
