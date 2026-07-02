---
name: jidoka
type: object
object-type: principle
essence: autonomation — "automation with a human touch"; a machine (or process) that stops itself the instant an abnormality appears, so defects are never passed on and one human can oversee many machines
field: ["[[field.toyota-production-system]]"]
status: established
state: float
attribution: one of the two pillars of the Toyota Production System (Ohno); origin in Sakichi Toyoda's self-stopping loom (1896 / 1924 Type-G)
formalized: false
source: ["[[source.ohno-1988]]", "[[source.liker-2004]]"]
depends-on: []
used-by: ["[[object.andon]]"]
---

**statement (plain)** — build the machine or process so that it detects its own faults and *stops itself* rather than continuing to produce bad output. Two payoffs: a defect is caught at its source instead of being built into everything downstream, and a person no longer has to stand and watch a running machine — they intervene only when it stops, so one worker can tend many machines. The deeper move is that stopping is designed to be normal and cheap, and *continuing while broken* is the failure.

**statement (principle)** — jidoka (自働化), "autonomation" or "automation with a human touch," is one of the two pillars of the Toyota Production System (the other being just-in-time) [[source.ohno-1988]]. Its origin is Sakichi Toyoda's automatic loom, which stopped when a thread broke. In modern practice jidoka is the principle behind the andon signal [[object.andon]] and behind "stop the line to build quality in" (Liker's Principle 5).

**basis** — documented by the system's own architect [[source.ohno-1988]] and in the standard English codification [[source.liker-2004]]. *Support* — foundational across lean manufacturing and, by analogy, in software (fail-fast, circuit breakers). *Limits* — realized only where management responds to a stop with help rather than blame; the mechanism is inert without the culture (see the andon case evidence). **[confirmed]**

**sources** — [[source.ohno-1988]] (the pillar, first-hand); [[source.liker-2004]] (codification, Principle 5). **[confirmed]**
