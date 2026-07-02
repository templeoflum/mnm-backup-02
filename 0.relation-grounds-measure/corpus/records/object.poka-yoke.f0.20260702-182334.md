---
name: poka-yoke
type: object
object-type: method
essence: mistake-proofing — shape the process so the wrong action is physically impossible or immediately self-evident
field: ["[[field.toyota-production-system]]"]
status: established
state: float
attribution: Shigeo Shingo, within the Toyota Production System (Zero Quality Control, 1985/1986)
formalized: false
source: ["[[source.shingo-1986]]"]
depends-on: []
used-by: []
---

**statement (plain)** — instead of catching mistakes by inspecting after the fact, design the task so the mistake cannot be made, or so it announces itself the instant it happens. The connector that only fits one way; the microwave that won't run with its door open; the fixture that won't accept a part loaded backwards. The safe outcome is pushed into the geometry of the thing itself, so it does not depend on attention.

**statement (mechanism)** — Shingo distinguishes *control* poka-yoke (stops the process / makes the error impossible) from *warning* poka-yoke (signals the error), paired with **source inspection** — check at the point where an error would originate, not downstream [[source.shingo-1986]]. Kin to jidoka [[object.jidoka]] (defect caught at source) and to fail-safe design [[object.fail-safe-vs-fail-secure]].

**basis** — systematized by Shingo [[source.shingo-1986]] as part of the Toyota method. *Support* — pervasive in manufacturing, medical-device and software UX design (input validation, affordances). *Limits* — best for well-understood, repeatable errors; cannot pre-empt novel failure modes. **[confirmed]**

**sources** — [[source.shingo-1986]] (the systematization). **[confirmed]**
