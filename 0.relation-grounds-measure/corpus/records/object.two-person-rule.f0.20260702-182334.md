---
name: two-person-rule
type: object
object-type: concept
essence: a control requiring two authorized people to carry out a critical action — either can refuse alone, but doing it needs both
field: ["[[field.high-reliability-orgs-safety-engineering]]"]
status: established
state: float
attribution: U.S. nuclear command (two-person concept, AFI 91-104); the operational form of separation of privilege
formalized: false
source: ["[[source.afi-91-104]]", "[[source.blair-2004]]"]
depends-on: ["[[object.separation-of-privilege]]"]
used-by: []
---

**statement (plain)** — no one person can complete the critical act alone. Two authorized people, each able to detect an incorrect or unauthorized step, must both act — the canonical case being the Minuteman launch, where two crews independently validate the order and two keys turn simultaneously in slots placed too far apart for one person to reach. The built-in asymmetry: *refusing* is unilateral (either person can stop it), while *proceeding* requires both.

**statement (mechanism)** — the organizational realization of separation of privilege [[object.separation-of-privilege]]; codified for U.S. nuclear weapons as the two-person concept [[source.afi-91-104]].

**basis** — the standard [[source.afi-91-104]] defines the rule; the cautionary empirical footnote is Blair's account that the Minuteman enabling codes sat at 00000000 for years [[source.blair-2004]] — the procedure is only as strong as the commitment to follow it (the same culture-over-mechanism lesson as andon [[object.andon]]). *Support* — nuclear surety, dual-control in finance and security. *Limits* — decays silently when commitment lapses. **[confirmed as attribution]**

**sources** — [[source.afi-91-104]] (the rule); [[source.blair-2004]] (the cautionary case). **[confirmed as attribution]**
