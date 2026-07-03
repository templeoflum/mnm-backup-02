---
name: alarm-management
type: object
object-type: practice
essence: engineering the set of control-room alarms so each demands a real operator action, within a rate a human can handle, without floods or nuisance alarms
field: ["[[field.human-factors-supervisory-control]]"]
status: established
state: float
attribution: EEMUA 191 (1999); ANSI/ISA-18.2 (2009/2016)
formalized: true
source: ["[[source.eemua-191]]"]
depends-on: []
used-by: []
---

**statement (plain)** — An alarm exists to tell the operator that a specific action is needed now. Alarm management is the discipline of keeping the alarm system in that state: every configured alarm should be valid, prioritized, and actionable; the alarm rate should stay within what a human can absorb (EEMUA benchmarks a handful per hour in steady state, not per minute); and the system should avoid **alarm floods** (bursts on an upset that bury the important ones), standing alarms, and chattering nuisance alarms that train the operator to ignore them.

**relevance** — the concrete lever for protecting operator situation awareness ([[object.situation-awareness]]) in a control room or dispatch desk: a flood destroys the picture at exactly the moment it matters most. Governed by EEMUA 191 and ANSI/ISA-18.2, and paired with the "dark cockpit / quiet-dark" philosophy — a quiet board means normal, so any lit alarm is a real signal [[source.eemua-191]] **[confirmed as attribution]**.
