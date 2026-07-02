---
name: spike-timing-dependent-plasticity
type: object
object-type: concept
essence: the refinement of Hebb's rule — a synapse strengthens or weakens depending on the millisecond order of pre- and post-synaptic firing
field: ["[[field.synaptic-plasticity]]"]
status: established
state: float
attribution: the timing-precise account of Hebbian plasticity (Markram; Bi & Poo, late 1990s)
formalized: false
source: ["[[source.hebb-1949]]"]
depends-on: ["[[object.hebbian-plasticity]]"]
used-by: []
---

**statement (plain)** — whether a synapse gets stronger or weaker turns on *order and timing*. If the presynaptic neuron fires a few milliseconds *before* the postsynaptic one, the synapse is strengthened (long-term potentiation); if it fires just *after*, the synapse is weakened (long-term depression). Timing matters because the pre-before-post order is a signal of causation — the earlier cell may have helped cause the later one to fire.

**statement (mechanism)** — the timing-precise form of Hebbian plasticity [[object.hebbian-plasticity]]: LTP for causal (pre→post) order, LTD for anti-causal (post→pre), within a narrow temporal window (tens of ms). Corrects the popular "fire together" slogan, which omits both timing and the weakening half.

**basis** — established from paired-recording experiments (Markram et al.; Bi & Poo, late 1990s); a core mechanism in learning and memory. *Support* — widely replicated; inspires timing-based learning rules in neuromorphic computing. *Limits* — window shape and sign vary by synapse type and region; not a single universal curve. **[confirmed as attribution]**

**sources** — [[source.hebb-1949]] (the Hebbian root; STDP primary sources — Bi & Poo 1998 — to add before settling). **[confirmed as attribution]**
