---
name: measurement-uncertainty-gum
type: object
object-type: framework
essence: measurement uncertainty and the GUM — the standard method for stating how much a measured value can be trusted
field: [field.metrology]
status: in-force
state: settled
attribution: GUM first published 1993 (BIPM, IEC, IFCC, ISO, IUPAC, IUPAP, OIML), corrected 1995; current edition JCGM 100:2008 (= ISO/IEC Guide 98-3:2008), maintained by JCGM/WG1
formalized: true
source: [source.gum-2008, source.vim-2012]
depends-on: []
used-by: [object.metrological-traceability]
---

**statement (plain)** — no measurement is exact; every result carries a doubt. The GUM is the agreed recipe for putting a number on that doubt. It says to gather every source of error, treat each as a small spread, combine them, and report the result with an interval and a confidence level — so that measurements made anywhere can be compared honestly.

**statement (precise)** — measurement uncertainty is a non-negative parameter characterizing the dispersion of the values attributed to a measurand. The GUM standardizes its evaluation:
- **Type A** evaluation — from the statistical analysis of repeated observations;
- **Type B** evaluation — from other information (calibration data, judgement, handbook values);
- individual contributions expressed as **standard uncertainties**, combined via the law of propagation of uncertainty into a **combined standard uncertainty** u_c;
- multiplied by a **coverage factor** k to give an **expanded uncertainty** U = k·u_c defining an interval at a stated coverage probability. **[confirmed]**

**status** — in force; adopted by the major National Measurement Institutes and required under accreditation (ISO/IEC 17025).

**lineage** — originated in ISO Technical Advisory Group 4 (TAG4); the GUM was first published in 1993 jointly by seven international organizations (BIPM, IEC, IFCC, ISO, IUPAC, IUPAP, OIML) as ISO Guide 98:1993, and corrected/reprinted in 1995. Responsibility passed to the Joint Committee for Guides in Metrology (JCGM); the current edition is JCGM 100:2008 [[source.gum-2008]] (= ISO/IEC Guide 98-3:2008), maintained by JCGM Working Group 1. Companion definitions live in the [[source.vim-2012|VIM]]. **[confirmed]**

**sources** — [[source.gum-2008]] (the GUM, JCGM 100:2008); [[source.vim-2012]] (VIM, terms of uncertainty and traceability).
