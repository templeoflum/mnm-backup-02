---
name: goms
type: object
object-type: model
essence: a predictive model of skilled task performance as Goals, Operators, Methods, and Selection rules
field: [field.human-computer-interaction]
status: established
state: settled
attribution: Stuart Card, Thomas Moran & Allen Newell (1983)
formalized: true
source: [source.card-moran-newell-1983]
depends-on: []
used-by: []
aliases: ["object.goms"]
---

**statement (plain)** — GOMS models how a skilled user accomplishes a task on a computer by decomposing the activity into four parts: Goals (what the user wants to achieve), Operators (the elementary actions available — keystrokes, mouse moves, perceptions), Methods (learned sequences of operators that accomplish a goal), and Selection rules (how the user chooses between competing methods). From this decomposition, with timing estimates for the operators, one can predict how long an error-free expert will take — engineering the interface before building it.

**statement (formula)** — no single equation; a structured estimation method. Predicted task time = sum of the durations of the operators in the chosen method. The simplest member, the [[Keystroke-Level Model]] (KLM; Card & Moran 1980), uses six operators — K (keystroke), P (point), H (home hands), D (draw), M (mental preparation), R (system response) — each with a standard time, e.g. M ≈ 1.35 s, K ≈ 0.2 s; total time = Σ operator times. **[confirmed]**

**basis** — built on the [[Model Human Processor]], an engineering approximation of the human as coupled perceptual, cognitive, and motor processors with parameterized cycle times, also from Card, Moran & Newell (1983). GOMS is a calculable cognitive-engineering model validated against measured expert performance; it predicts skilled, error-free behavior and does not model learning or error. Established and formalized as an analysis technique. **[confirmed]**

**lineage** — introduced by [[Stuart Card]], [[Thomas Moran]], and [[Allen Newell]] in *The Psychology of Human-Computer Interaction* (1983) [[source.card-moran-newell-1983]]; KLM preceded it (Card & Moran, 1980). A family of later variants (CMN-GOMS, NGOMSL, CPM-GOMS) extended the original. **[confirmed]**

**sources** — [[source.card-moran-newell-1983]] (origin, *The Psychology of Human-Computer Interaction*). Cross-checked against the [[GOMS]] Wikipedia article.
