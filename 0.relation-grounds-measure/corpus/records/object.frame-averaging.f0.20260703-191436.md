---
name: frame-averaging
type: object
object-type: method
essence: invariance/equivariance by averaging a network over an input-dependent subset (frame) of the symmetry group, instead of the whole group
field: ["[[field.geometric-deep-learning]]"]
status: established
state: settled
attribution: O. Puny et al. (2021)
formalized: true
source: ["[[source.puny-2021]]"]
depends-on: ["[[object.canonicalization]]"]
used-by: []
---

**statement (plain)** — averaging a model over an entire symmetry group is often impossible (the group is too big or continuous). Frame averaging picks, for each input, a small input-dependent slice of the group — a frame — and averages over just that. Chosen so the frame itself transforms correctly, the result is exactly invariant or equivariant while staying computable.

**statement (formal)** — for a frame map ℱ: X → 2^G with the equivariance ℱ(g·X) = g·ℱ(X), the frame average ⟨f⟩(X) = (1/|ℱ(X)|) Σ_{g∈ℱ(X)} g⁻¹·f(g·X) is G-invariant (or equivariant), approximating the full Reynolds/group average. **[confirmed]**

**basis** — Puny et al. (2021); a special, tractable case of canonicalization (an averaged rather than single representative).
