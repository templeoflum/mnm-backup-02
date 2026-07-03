---
name: fail-safe-defaults
type: object
object-type: principle
essence: base access decisions on permission, not exclusion — the default is deny, so a design or implementation error fails toward the safe (closed) state
field: ["[[field.safety-engineering]]"]
status: established
state: float
attribution: Saltzer & Schroeder (1975), one of eight security design principles; the safety-engineering cousin is the "de-energize-to-safe" convention
formalized: false
source: ["[[source.saltzer-schroeder-1975]]"]
depends-on: []
used-by: []
---

**statement (plain)** — design so that the absence of a positive decision means *no*, not *yes*. Access (or action) is granted only by an explicit, affirmative condition; everything else is denied by default. The point is the direction of failure: when something goes wrong — a bug, a missing rule, a lost signal — a permission-based scheme fails by *refusing*, which is the safe outcome, whereas an exclusion-based scheme fails by *allowing*.

**statement (principle)** — Saltzer & Schroeder (1975): "Base access decisions on permission rather than exclusion… A conservative design must be based on arguments why objects should be accessible, rather than why they should not… a design or implementation mistake in a mechanism that gives explicit permission tends to fail by refusing permission, a safe situation." The safety-engineering analogue is **de-energize-to-safe**: the safe state requires no energy and no signal, so removing the active command drops the system to safe (cf. the deadman's switch, fail-open vs fail-secure locks).

**basis** — one of the eight enduring design principles in [[source.saltzer-schroeder-1975]], still taught as canonical security doctrine fifty years on. *Support* — pervasive in security and safety engineering (default-deny firewalls, allow-lists, de-energize-to-safe interlocks). *Limits* — a pure default-deny can trade availability for safety; the principle governs the *direction* of failure, not its cost. **[confirmed]**

**sources** — [[source.saltzer-schroeder-1975]] (the original codification). **[confirmed]**
