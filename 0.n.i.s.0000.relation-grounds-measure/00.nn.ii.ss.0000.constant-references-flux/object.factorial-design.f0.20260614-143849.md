---
name: factorial-design
type: object
object-type: design
essence: vary all factors together over every combination — read main effects and interactions from one experiment
field: [field.experimental-design]
status: established
state: verified
attribution: R. A. Fisher — "The Arrangement of Field Experiments" (1926); term "factorial" coined in The Design of Experiments (1935); 19th-c. precursors Lawes & Gilbert at Rothamsted
formalized: true
source: [source.fisher-1926, source.fisher-1935, source.box-hunter-hunter, source.montgomery-doe]
depends-on: [object.randomization, object.replication-and-blocking]
used-by: []
---

**statement (plain)** — instead of studying one factor at a time, test every combination of the factors' levels in a single experiment. This costs no more runs than studying one factor alone to the same accuracy, and — crucially — it reveals **interactions**: cases where the effect of one factor depends on the level of another, which one-factor-at-a-time experiments can never see.

**statement** — a factorial design (or factorial experiment) is a design in which every combination of the levels of two or more factors is included. It yields estimates of each factor's **main effect** and of the **interactions** between factors. Its efficiency: the effect of several factors, and their interactions, can be determined with the same number of trials needed to determine any one effect alone to the same precision — a decisive advantage over the one-factor-at-a-time (OFAT) approach. **[confirmed]**

**basis** — established. Foundational design of the [[field.experimental-design]], analyzed via [[object.analysis-of-variance]] and built on [[object.randomization]] and [[object.replication-and-blocking]].

**lineage** — promoted by R. A. Fisher in "The Arrangement of Field Experiments" (1926) [[source.fisher-1926]], where he argued complex designs outperform asking "Nature ... one question at a time." The term **factorial** appears in print apparently first in Fisher's *The Design of Experiments* (1935) [[source.fisher-1935]]. Earlier 19th-century use of factorial-type field arrangements is credited to J. B. Lawes and J. H. Gilbert at the Rothamsted Experimental Station. **[confirmed]**

**door** — [[source.box-hunter-hunter]] (esp. on 2^k designs); [[source.montgomery-doe]].

**sources** — [[source.fisher-1926]], [[source.fisher-1935]], [[source.box-hunter-hunter]], [[source.montgomery-doe]].
