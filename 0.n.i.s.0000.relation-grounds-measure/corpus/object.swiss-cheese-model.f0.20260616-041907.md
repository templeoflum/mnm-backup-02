---
name: swiss-cheese-model
type: object
object-type: model
essence: accidents occur only when holes in successive layers of defense momentarily line up, letting a hazard pass through all of them
field: [field.high-reliability-orgs-safety-engineering]
status: established
state: settled
attribution: James Reason, Human Error (1990); restated in BMJ (2000); error layers built on Rasmussen's SRK levels
formalized: true
source: [source.reason-1990, source.rasmussen-1983]
depends-on: []
used-by: [object.defense-in-depth]
---

**statement (plain)** — picture a system's defenses as a stack of Swiss-cheese slices. Each slice is a barrier (a procedure, an alarm, a checklist, a supervisor), and each has holes — weaknesses. The holes move and open and close over time. Usually a hazard is blocked by some slice. An accident happens only in the rare moment when holes in every slice line up, opening a clear path straight through all the defenses.

**statement (model)** — Reason distinguishes two sources of the holes. **Active failures** are unsafe acts at the sharp end — slips and lapses (skill-based), and mistakes (rule- and knowledge-based) — committed by people in direct contact with the system; their effects are usually immediate. **Latent conditions** are "resident pathogens" placed in the system earlier by design, management, training, or maintenance decisions; they lie dormant and combine with active failures and local triggers to breach the defenses. The cognitive layering of error types is taken from Rasmussen's skill-/rule-/knowledge-based levels of performance.

**basis** — set out in Reason, *Human Error* (1990), as the organizational-accident model, and restated for a wide audience in J. Reason, "Human error: models and management," *BMJ* 320 (2000) 768–770 [[source.reason-1990]]. The slip/lapse-vs-mistake error taxonomy that populates the slices rests on Rasmussen's SRK framework [[source.rasmussen-1983]]. *Support* — adopted across aviation, healthcare, and process safety as the standard picture of layered defense. *Limits* — critics note the model is descriptive rather than predictive (it does not say where the holes are or when they will align) and can encourage post-hoc "hole alignment" storytelling. **[confirmed]**

**sources** — [[source.reason-1990]] (the model, active/latent distinction); [[source.rasmussen-1983]] (skill/rule/knowledge levels underlying the error taxonomy). **[confirmed]**
