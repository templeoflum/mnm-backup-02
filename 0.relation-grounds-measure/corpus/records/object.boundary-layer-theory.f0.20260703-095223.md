---
name: boundary-layer-theory
type: object
object-type: concept
essence: at high Reynolds number, viscous effects are confined to a thin layer near a surface; outside it the flow is effectively inviscid
field: ["[[field.fluid-dynamics]]"]
status: established
state: float
attribution: Ludwig Prandtl (1904)
formalized: 1904
source: ["[[source.prandtl-1904]]"]
depends-on: []
used-by: []
---

**statement (plain)** — When a fluid of low viscosity flows past a solid surface, the no-slip condition forces the velocity to drop from the free-stream value to zero right at the wall. Prandtl showed this adjustment happens in a very thin layer near the surface — the boundary layer — where viscosity dominates, while just outside it the flow can be treated as inviscid. This split makes high-Reynolds-number flows tractable and explains both skin-friction drag and, where the layer detaches, form drag.

**statement (formal)** — For Reynolds number Re → ∞, the Navier–Stokes equations reduce, within a layer of thickness δ ~ L·Re^(−1/2), to Prandtl's boundary-layer equations (streamwise momentum with pressure imposed by the outer flow, ∂p/∂y ≈ 0 across the layer). **Flow separation** occurs where an adverse pressure gradient reverses the near-wall flow and the boundary layer leaves the surface, producing wakes, stall, and pressure drag [[source.prandtl-1904]] **[confirmed as attribution]**.

**relevance** — the physics under streamlining and drag reduction: shaping a surface to keep the boundary layer attached (SHAPE), and the separation point as a locus for flow control. See [[object.reynolds-number]] for the transition parameter and [[object.flow-control-taxonomy]] for the control craft.
