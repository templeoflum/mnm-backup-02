---
name: law-of-requisite-variety
type: object
object-type: law
essence: only variety can destroy variety — a regulator must match the disturbance's variety to control it
field: ["[[field.cybernetics-control-theory]]"]
status: established
state: settled
attribution: W. Ross Ashby, An Introduction to Cybernetics (1956); good-regulator extension Conant & Ashby (1970)
formalized: true
source: ["[[source.ashby-1956]]"]
depends-on: ["[[object.feedback-loop]]"]
used-by: []
aliases: ["object.law-of-requisite-variety"]
---

**statement (plain)** — to keep a system's outcome under control, the controller must be able to take at least as many distinct actions as there are distinct disturbances it has to absorb. A regulator with too few responses cannot cancel a richer set of upsets — variety can only be countered by variety. The slogan: "only variety can destroy variety."

**statement** — let V_D be the variety (the log of the count of distinguishable states) of the disturbances, V_R the variety available to the regulator, and V_O the variety remaining in the outcome. Then with a deterministic regulator the best achievable is
V_O ≥ V_D − V_R.
The outcome variety (the residual disturbance the system fails to control) cannot be pushed below V_D − V_R; only by raising V_R can V_O be reduced. **[confirmed]**

**basis** — the law is an information/state-counting bound on regulation: a control loop ([[object.feedback-loop]]) can only suppress as much disturbance variety as it can generate compensating variety. It sets a hard limit on what any regulator, governor, or controller can achieve, independent of mechanism — a cybernetic analogue of a conservation law. Ashby derives it in *An Introduction to Cybernetics* (1956) from the regulator/disturbance table [[source.ashby-1956]]. **[confirmed]**

**lineage** — formulated by W. Ross Ashby, 1956 [[source.ashby-1956]] **[confirmed]**. Extended by the Conant–Ashby **good regulator theorem** (1970): "every good regulator of a system must be a model of that system" **[confirmed as attribution]** (Conant & Ashby 1970, *Int. J. Systems Science*; original not opened here).

**sources** — [[source.ashby-1956]] (statement and derivation). Cross-checked against Wikipedia "Variety (cybernetics)" / "An Introduction to Cybernetics." **[confirmed]**
