---
name: phantom-traffic-jam
type: object
object-type: phenomenon
essence: a traffic jam that forms with no bottleneck, from an instability of dense free flow; the jam cluster propagates backward as a wave
field: ["[[field.traffic-flow-theory]]"]
status: empirical
state: float
attribution: Sugiyama et al. (2008), experimental; theory in the LWR / car-following instability tradition
formalized: 2008
source: ["[[source.sugiyama-2008]]"]
depends-on: ["[[object.kinematic-wave-traffic]]"]
used-by: []
---

**statement (plain)** — Above a critical vehicle density, uniform traffic flow becomes unstable: a driver's small braking is amplified by the drivers behind, and a stop-and-go cluster emerges spontaneously without any obstacle, lane drop, or accident. The jam region then travels *backward* against the direction of travel, at a roughly constant speed, as cars enter its front and leave its rear. This is the "phantom" jam — a jam from nothing but density and reaction delay.

**evidence** — Sugiyama et al. (2008) demonstrated it experimentally on a ~230 m circular track: 22 cars asked to hold a steady speed produced a spontaneous jam that propagated backward at ~20 km/h — "a bottleneck is only a trigger and not the essential origin of a traffic jam" [[source.sugiyama-2008]] **[confirmed]**. The backward-moving cluster is a kinematic wave ([[object.kinematic-wave-traffic]]).

**relevance** — the cleanest empirical case of the coherence ceiling (BREAKDOWN): coherent directed flow loses stability above a critical parameter, structurally parallel to laminar→turbulent transition in fluids ([[object.reynolds-number]]).
