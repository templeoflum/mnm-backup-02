---
name: drum-buffer-rope
type: object
object-type: method
essence: the TOC production-scheduling method that paces the whole line to the constraint (drum), protects it with a time buffer (buffer), and ties material release to its tempo (rope)
field: ["[[field.theory-of-constraints]]"]
status: established
state: settled
attribution: Eliyahu M. Goldratt (named with Robert E. Fox)
formalized: 1986 (named in The Race; logic introduced in The Goal, 1984)
source: ["[[source.goldratt-fox-1986]]", "[[source.cox-schleier-2010]]"]
depends-on: ["[[object.theory-of-constraints]]"]
used-by: []
aliases: ["object.drum-buffer-rope"]
---

statement (plain): a scheduling and flow-control method for constraint-governed production:
- Drum — the constraint sets the pace ("beat") of the entire system; the master schedule is built on the constraint's capacity.
- Buffer — a time buffer of work is placed ahead of the constraint so it is never starved by upstream variability; buffers may also protect shipping and assembly points.
- Rope — material release into the system is tied to the constraint's consumption rate, like a rope pulling material in only as fast as the drum can use it, preventing excess work-in-process.

basis: the underlying logic is introduced narratively in *The Goal* (1984); it is formally named and presented as drum-buffer-rope in Goldratt & Fox's *The Race* (1986) [[source.goldratt-fox-1986]] [confirmed], and reviewed as a mature scheduling technique (with buffer management) in the 2010 Handbook [[source.cox-schleier-2010]] [confirmed].

limits: DBR is an operational scheduling method, not a theorem; its benefit depends on a stable, identifiable physical constraint. Where the bottleneck wanders or capacity is balanced across many resources, simplified DBR (and later variants) and careful buffer sizing are required, and the method's advantage over alternative scheduling approaches becomes case-dependent. [confirmed]
