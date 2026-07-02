---
name: just-in-time
type: object
object-type: principle
essence: produce and move only what is needed, when it is needed, in the amount needed — pull from downstream demand rather than push from forecast
field: ["[[field.toyota-production-system]]"]
status: established
state: float
attribution: one of the two pillars of the Toyota Production System (Ohno)
formalized: false
source: ["[[source.ohno-1988]]", "[[source.liker-2004]]"]
depends-on: []
used-by: ["[[object.kanban]]"]
---

**statement (plain)** — make and move exactly what the next step actually needs, exactly when it needs it, and no more. Instead of pushing parts forward on a forecast and piling up inventory, each step *pulls* from the one after it, so the whole line is paced by real downstream demand. Inventory — which hides defects, ties up capital, and lets problems accumulate unseen — is treated as waste to be driven out; the reduced buffer also *exposes* problems, forcing them to be fixed.

**statement (principle)** — just-in-time is one of the two pillars of the Toyota Production System (the other being jidoka [[object.jidoka]]) [[source.ohno-1988]]. Its shop-floor mechanism is the *kanban* pull signal; its aim is continuous one-piece flow.

**basis** — the system's architect [[source.ohno-1988]] and the standard codification [[source.liker-2004]]. *Support* — foundational to lean production worldwide. *Limits* — the low-buffer, tightly-coupled design is fragile to supply shocks (a tension with slack-as-safety [[object.normal-accident-theory]]); Toyota itself later added selective buffers. **[confirmed]**

**sources** — [[source.ohno-1988]] (the pillar); [[source.liker-2004]] (codification). **[confirmed]**
