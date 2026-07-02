---
name: metrological-traceability
type: object
object-type: principle
essence: metrological traceability — an unbroken, documented chain of calibrations linking a result to the SI
field: ["[[field.metrology]]"]
status: in-force
state: settled
attribution: defined in the VIM (JCGM 200:2012, entry 2.41); operationalized by ILAC and ISO/IEC 17025
formalized: true
source: ["[[source.vim-2012]]", "[[source.gum-2008]]"]
depends-on: ["[[object.si-base-units]]", "[[object.si-defining-constants]]", "[[object.measurement-uncertainty-gum]]"]
used-by: []
---

**statement (plain)** — a measurement is trustworthy only if you can trace it, step by step, back to an agreed reference — ultimately the SI. Each step is a calibration against a better standard, and each step adds a little uncertainty. Traceability is the documented ladder from your instrument up to the definition of the unit, with the uncertainty tallied all the way.

**statement (precise)** — metrological traceability is the "property of a measurement result whereby the result can be related to a reference through a documented unbroken chain of calibrations, each contributing to the measurement uncertainty." The reference may be the definition of a measurement unit through its practical realization, a measurement procedure, or a measurement standard. Traceability requires an established calibration hierarchy; the specification of the reference must include the time it was used. **[confirmed as attribution]** (verbatim VIM3 entry 2.41 and its notes)

**status** — in force; the cornerstone requirement of calibration laboratories under ISO/IEC 17025 and ILAC.

**lineage** — defined in the [[source.vim-2012|International Vocabulary of Metrology]] (VIM3, JCGM 200:2012, entry 2.41), maintained by JCGM Working Group 2. In practice the chain terminates in a realization of an [[object.si-base-units|SI base unit]] — and since 2019, ultimately in the [[object.si-defining-constants]]. Each link carries a stated [[object.measurement-uncertainty-gum|measurement uncertainty]] evaluated per the GUM. The International Laboratory Accreditation Cooperation (ILAC) names the elements required to confirm traceability (unbroken chain, documented uncertainty, documented procedure, accredited competence, traceability to the SI, calibration intervals). **[confirmed]**

**sources** — [[source.vim-2012]] (VIM3 definition 2.41); [[source.gum-2008]] (uncertainty contributed by each link).
