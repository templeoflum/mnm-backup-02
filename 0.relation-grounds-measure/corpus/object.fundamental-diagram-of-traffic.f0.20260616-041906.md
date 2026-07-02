---
name: fundamental-diagram-of-traffic
type: object
object-type: concept
essence: the empirical relation among flow, density, and speed of traffic — the flow-density curve (and equivalent speed-density, speed-flow forms) that closes macroscopic models
field: [field.traffic-flow-theory]
status: empirical
state: settled
attribution: B. D. Greenshields (1935), first quantitative form
formalized: 1935
source: [source.greenshields-1935, source.treiber-kesting-2013]
depends-on: []
used-by: [object.greenshields-model, object.kinematic-wave-traffic, object.lwr-model]
aliases: ["object.fundamental-diagram-of-traffic"]
---

# fundamental-diagram-of-traffic

**statement (plain).** Traffic flow, density, and mean speed are not independent: empirically they satisfy a relation usually drawn as a flow-density curve (equivalently speed-density or speed-flow). Flow rises with density at low densities (free flow), reaches a maximum (capacity) at a critical density, then falls toward zero as density approaches the jam value (congestion). The curve's exact shape is empirical and varies with road and conditions.

**statement (formal/formula).** The state identity is q = k·v, where q is flow (veh/time), k is density (veh/distance), and v is mean speed. The fundamental diagram is the empirical closure q = Q(k) (or v = V(k)), with Q(0) = 0, Q(k_jam) = 0, and a maximum q_max (capacity) at a critical density k_c.

**basis (empirical).** First measured by Greenshields (1935) using photographic methods, who fit an approximately linear speed-density relation and the resulting parabolic flow-density curve [[source.greenshields-1935]] [confirmed]. *Support:* the flow-density-speed relation is the empirical foundation closing the LWR and most macroscopic models and is treated as the field's central observable [[source.treiber-kesting-2013]] [confirmed]. *Limits:* real data show scatter, a free-flow vs congested branch, capacity drop, and hysteresis; no single functional form (Greenshields, Greenberg, Underwood, triangular, etc.) fits all regimes, so the diagram is understood as an empirical relation with multiple competing parameterizations [[source.treiber-kesting-2013]] [confirmed].
