---
name: hebbian-plasticity
type: object
object-type: principle
essence: synapses that are used strengthen — a connection grows when the presynaptic cell repeatedly takes part in firing the postsynaptic one
field: ["[[field.synaptic-plasticity]]"]
status: established
state: float
attribution: Donald Hebb (1949); popularized as "neurons that fire together wire together" (Carla Shatz)
formalized: false
source: ["[[source.hebb-1949]]"]
depends-on: []
used-by: ["[[object.spike-timing-dependent-plasticity]]"]
---

**statement (plain)** — when one neuron repeatedly helps fire another, the connection between them strengthens; use makes the pathway more efficient. This is the cellular version of "reinforce by use." The popular slogan "neurons that fire together wire together" captures it but oversimplifies in three ways: it flattens Hebb's *causal ordering* into mere co-activation; it omits the equally-important weakening of unused connections; and, taken alone, pure Hebbian strengthening is unstable (runaway excitation) and *blind* — local, with no notion of a global goal.

**statement (principle)** — Hebb's postulate (1949): if A "repeatedly or persistently takes part in firing" B, A's efficiency in firing B increases [[source.hebb-1949]]. Refined as spike-timing-dependent plasticity [[object.spike-timing-dependent-plasticity]] and balanced by homeostatic plasticity.

**basis** — foundational neuroscience, borne out by LTP/LTD research. *Support* — the standard account of associative learning at the synapse; basis of Hebbian learning rules in artificial neural networks. *Limits* — blind and local (no global objective), unstable without homeostatic control; a real disanalogy to *goal-directed* search like foraging or problem-solving. **[confirmed as attribution]**

**sources** — [[source.hebb-1949]] (the postulate). **[confirmed as attribution]**
