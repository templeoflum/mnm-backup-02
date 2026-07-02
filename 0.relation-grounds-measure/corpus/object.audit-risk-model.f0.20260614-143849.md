---
name: audit-risk-model
type: object
object-type: model
essence: audit risk factors into inherent × control × detection risk — AR = IR × CR × DR
field: ["[[field.auditing-tradition]]", "[[field.mathematical-statistics]]"]
status: established
state: settled
attribution: codified by the AICPA (AU section 350 / AU-C 530) and the IAASB (ISA 200); developed in the auditing literature through the 1970s–80s
formalized: true
source: ["[[source.au-c-350]]", "[[source.au-c-200]]", "[[source.montgomerys-auditing]]", "[[source.arens-elder-beasley]]"]
depends-on: ["[[object.materiality]]", "[[object.audit-sampling]]"]
used-by: []
---

**statement (plain)** — the chance an auditor gives a clean opinion on financial statements that are actually materially wrong can be broken into three multiplied pieces: how error-prone the item is by nature (inherent risk), how likely the client's own controls are to miss the error (control risk), and how likely the auditor's own procedures are to miss it (detection risk). The auditor sets an acceptable overall risk, judges the first two, and solves for how much detection risk is allowable — which sets how much testing to do.

**statement** — audit risk (AR) is modeled as the product
AR = IR × CR × DR,
where IR is inherent risk, CR is control risk, and DR is detection risk. Audit risk is "the risk that the auditor expresses an inappropriate audit opinion when the financial statements are materially misstated." The auditor fixes a target AR and assessed IR and CR, then solves DR = AR / (IR × CR); detection risk therefore varies **inversely** with the assessed risk of material misstatement (IR × CR). **[confirmed]**

**basis** — codified in AICPA guidance: the model is described in [[source.au-c-350]] (formerly AU 350, *Audit Sampling*) and rests on the overall-objectives definitions of audit risk and its components in [[source.au-c-200]]; the IAASB states the parallel definition in ISA 200. The component definitions: inherent risk = susceptibility of an assertion to material misstatement before considering controls; control risk = risk that the entity's internal control fails to prevent or detect such misstatement on a timely basis; detection risk = risk that the auditor's procedures fail to detect an existing material misstatement. **[confirmed]**

**lineage** — IR × CR is together the **risk of material misstatement (RMM)**, a framing the AICPA adopted in the risk-assessment standards (the "audit risk" suite). The model is the standard pedagogical and planning device in [[source.arens-elder-beasley]] and [[source.montgomerys-auditing]]. It is a planning heuristic, not a precise probability calculus — the components are largely judged, not measured.

**sources** — [[source.au-c-350]], [[source.au-c-200]], [[source.arens-elder-beasley]], [[source.montgomerys-auditing]]; cross-checked against the Wikipedia "Audit risk" article (formula and component definitions concur).
