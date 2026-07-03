---
name: reproducibility-replicability-distinction
type: object
object-type: concept
essence: the distinction between re-running the same data+code (reproducibility) and obtaining consistent results from a fresh, independent study (replicability) — two terms whose meanings are notoriously swapped across fields
field: ["[[field.reproducible-research]]", "[[field.preregistration-open-science]]"]
status: established
state: settled
attribution: distinction from Claerbout & Karrenbach (1992); contested across fields; consensus framing National Academies (2019)
formalized: false
source: ["[[source.claerbout-karrenbach-1992]]", "[[source.plesser-2018]]", "[[source.nasem-2019]]", "[[source.acm-badging-2020]]", "[[source.peng-2011]]"]
depends-on: ["[[object.reproducible-research]]"]
used-by: []
---

**statement (plain)** — there are two different things people mean when they ask whether a result "holds up." One is: can someone take your exact data and your exact code and get the same numbers back? The other is: if a new team runs a fresh study of the same question, collecting their own data, do they reach a consistent conclusion? In the now-dominant usage, the first is *reproducibility* and the second is *replicability* — but different communities have used the two words to mean the opposite of each other, so the labels must always be checked.

**statement** — a two-axis distinction over what is held fixed when a finding is re-checked. In the Claerbout / National Academies convention now widely adopted: **reproducibility** = "obtaining consistent results using the same input data; computational steps, methods, and code; and conditions of analysis" (same data + same code → same result); **replicability** = "obtaining consistent results across studies aimed at answering the same scientific question, each of which has obtained its own data" (new data, possibly new methods → consistent answer). The two are independent: a result can be reproducible without being replicable, and vice versa. **[confirmed]**

**basis** — the distinction is definitional, not provable; its value is operational — it separates "the pipeline runs and regenerates the figures" (an engineering property) from "the underlying scientific claim survives an independent test" (an epistemic property). Reproducibility is a prerequisite for trusting the computation; replicability is what protects against the [[object.replication-crisis]]. The terms also pull in a third, **repeatability** (same team, same setup, re-measured). **[confirmed]**

**lineage (contested — carried)** — the same-data/same-code vs new-data split traces to Claerbout & Karrenbach (1992) [[source.claerbout-karrenbach-1992]], surveyed by Plesser, "Reproducibility vs. Replicability: A Brief History of a Confused Terminology" (2018) [[source.plesser-2018]]. The terminology is **genuinely contested across fields**: many computer-science and metrology communities historically used the words in the *reverse* sense. The ACM "Artifact Review and Badging" v1.0 (2016) defined "reproducibility" for the different-team/different-setup case — opposite to Claerbout — then **swapped** the two terms in v1.1 on 24 August 2020 (advised by NISO) to align with the National Academies [[source.acm-badging-2020]]. The U.S. consensus framing is National Academies (2019) [[source.nasem-2019]]. Because the labels still flip by community, the *mapping of words to meanings* is carried as **[candidate, terminology contested across fields]** even though the underlying two concepts are **[confirmed]**.

**sources** — Claerbout & Karrenbach 1992 [[source.claerbout-karrenbach-1992]]; Plesser 2018 [[source.plesser-2018]]; National Academies 2019 [[source.nasem-2019]]; ACM Artifact Badging v1.1 2020 [[source.acm-badging-2020]]; Peng 2011 [[source.peng-2011]].
