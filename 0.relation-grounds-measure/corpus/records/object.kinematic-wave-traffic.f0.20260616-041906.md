---
name: kinematic-wave-traffic
type: object
object-type: concept
essence: traffic disturbances propagate as kinematic waves at the local slope of the flow-density curve, steepening into shock waves where they converge
field: ["[[field.traffic-flow-theory]]"]
status: established
state: settled
attribution: M. J. Lighthill & G. B. Whitham (1955); P. I. Richards (1956)
formalized: 1955–1956
source: ["[[source.lighthill-whitham-1955]]", "[[source.richards-1956]]", "[[source.treiber-kesting-2013]]"]
depends-on: ["[[object.lwr-model]]", "[[object.fundamental-diagram-of-traffic]]"]
used-by: ["[[object.phantom-traffic-jam]]"]
---

# kinematic-wave-traffic

**statement (plain).** In the continuum theory, a change in traffic density does not stay put — it travels along the road as a wave whose speed is the slope of the flow-density curve at that density. These "kinematic" waves carry no momentum of their own; they are properties of the conservation law plus the fundamental diagram. Where faster waves catch slower ones (e.g. a queue forming behind a bottleneck), they pile up into a sharp discontinuity — a shock wave — that moves at the chord slope between the two states.

**statement (formal/formula).** Wave (characteristic) speed: c(ρ) = dQ/dρ = d(ρv)/dρ. Shock speed (Rankine–Hugoniot for the scalar conservation law ∂ρ/∂t + ∂Q/∂x = 0): s = (Q(ρ₂) − Q(ρ₁)) / (ρ₂ − ρ₁), the slope of the chord joining the upstream and downstream states on the flow-density curve.

**basis (method).** Derived from the LWR conservation law: kinematic waves are the characteristics of the hyperbolic scalar conservation law, and shocks are its admissible discontinuities. Lighthill & Whitham (1955) introduced the kinematic-wave propagation of density "humps" [[source.lighthill-whitham-1955]] and Richards (1956) the shock-wave construction [[source.richards-1956]] [confirmed]. *Support:* shock and wave structure reproduce queue formation, dissipation, and bottleneck propagation and are standard in modern treatments [[source.treiber-kesting-2013]] [confirmed]. *Limits:* as a first-order theory it idealizes shocks as instantaneous discontinuities and omits acceleration/relaxation effects, so finer oscillatory and hysteretic phenomena require higher-order or microscopic models [[source.treiber-kesting-2013]] [confirmed].
