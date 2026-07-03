---
name: turbulent-entrainment
type: object
object-type: model
essence: a turbulent jet or plume draws in ambient fluid at a rate proportional to its local velocity, setting how it spreads and dilutes with distance
field: ["[[field.fluid-dynamics-hydrodynamic-stability]]"]
status: established
state: float
attribution: Morton, Taylor & Turner (1956) — the entrainment assumption
formalized: 1956
source: ["[[source.morton-taylor-turner-1956]]"]
depends-on: []
used-by: []
---

**statement (plain)** — A jet or buoyant plume travelling through still fluid does not stay a tidy stream: its turbulent edges continuously pull in surrounding fluid, so it widens and slows as it goes. The MTT model captures this with one assumption — the inflow speed at the plume's edge is proportional to the plume's own vertical velocity — and from it derives how radius, velocity, and buoyancy change with height.

**statement (formal)** — With self-similar Gaussian (or top-hat) profiles, the entrainment velocity is uₑ = α·w (α the entrainment coefficient, w the centerline velocity). Conservation of mass, momentum, and buoyancy flux then gives, for a pure plume in a uniform environment, radius growing linearly with height (b ∝ z) and velocity decaying as w ∝ z^(−1/3) [[source.morton-taylor-turner-1956]] **[confirmed]**.

**relevance** — the physics of coherence-over-distance (HOLD): how a directed flow maintains itself while inevitably mixing with its surroundings. Applies to smokestack plumes, ventilation, volcanic columns, and any sustained jet.
