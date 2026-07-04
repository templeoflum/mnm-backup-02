---
name: entanglement-renormalization
type: object
object-type: method
essence: MERA — a tensor network that renormalizes entanglement scale by scale, whose geometry is a discrete slice of AdS
field: ["[[field.quantum-gravity]]"]
status: established
state: float
attribution: MERA — G. Vidal (2007); holographic reading — B. Swingle (2009/2012); QEC mechanics — Pastawski–Yoshida–Harlow–Preskill (2015)
formalized: true
source: ["[[source.swingle-2012]]", "[[source.pastawski-2015]]"]
depends-on: []
used-by: []
---

**statement (plain)** — MERA compresses a quantum state by peeling off entanglement one length-scale at a time, stacking the layers into a network. Swingle's observation: that stack *looks like* — has the metric structure of — a slice of anti-de Sitter space. The network you build to handle entanglement is a picture of emergent space.

**basis** — MERA is an established variational method for critical systems; its holographic reading (Swingle 2012) makes the geometry-from-entanglement program constructive, and the HaPPY holographic codes (Pastawski et al. 2015) sharpen it: the bulk/boundary map is a quantum error-correcting code, bulk locality a code property. [[source.swingle-2012]] [[source.pastawski-2015]] **[confirmed]** — `established` for the method; the holographic identification itself rides with the program's conjectures ([[object.spacetime-from-entanglement]], prose link).
