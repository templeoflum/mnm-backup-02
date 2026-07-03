---
name: lddmm
type: object
object-type: method
essence: Large Deformation Diffeomorphic Metric Mapping — register one image onto another by the geodesic flow of a time-varying velocity field, minimizing kinetic energy plus a matching term
field: ["[[field.computational-anatomy]]"]
status: established
state: float
attribution: M. F. Beg, M. Miller, A. Trouvé, L. Younes (2005)
formalized: true
source: ["[[source.beg-miller-trouve-younes-2005]]", "[[source.dupuis-grenander-miller-1998]]"]
depends-on: ["[[object.deformable-template]]"]
used-by: []
---

**statement (plain)** — to match two anatomies, LDDMM finds the smoothest possible flow of warps that carries one onto the other, charging a kinetic-energy cost along the way. The cheapest such flow is a geodesic, and its total cost is a genuine distance between the shapes — so registration and shape-distance are the same computation.

**statement (formal)** — find φ = Φ₁, the endpoint of the flow Φ̇_t = v_t(Φ_t), minimizing ∫₀¹ ‖v_t‖²_V dt + (1/σ²)‖I₀∘φ⁻¹ − I₁‖²; the optimal flow is a geodesic in the diffeomorphism group under a Sobolev (V) metric. **[confirmed]**

**basis** — Beg–Miller–Trouvé–Younes (2005); existence guaranteed by Dupuis–Grenander–Miller (1998). Code lineage: LDDMM, ANTS, DARTEL.
