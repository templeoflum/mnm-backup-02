---
name: lwr-model
type: object
object-type: model
essence: first-order macroscopic continuum model of traffic — a scalar conservation law for vehicle density closed by a flow-density fundamental diagram
field: [field.traffic-flow-theory]
status: established
state: settled
attribution: M. J. Lighthill & G. B. Whitham (1955); P. I. Richards (1956), independently
formalized: 1955–1956
source: [source.lighthill-whitham-1955, source.richards-1956, source.treiber-kesting-2013]
depends-on: [object.fundamental-diagram-of-traffic]
used-by: [object.kinematic-wave-traffic]
---

# lwr-model

**statement (plain).** Traffic on a road is treated as a one-dimensional compressible continuum. Vehicle number is conserved, so the rate of change of density at a point plus the spatial gradient of flow is zero. The model is closed by assuming flow is a function of density alone (the fundamental diagram), making it a first-order ("first-order" = no separate momentum equation) scalar conservation law. Disturbances propagate as kinematic waves and can steepen into shock waves.

**statement (formal/formula).** Conservation law: ∂ρ/∂t + ∂q/∂x = 0, with flow q = Q(ρ) = ρ·v(ρ), where ρ is density, q is flow, v is mean speed, and Q(·) is the fundamental diagram. This is a hyperbolic scalar conservation law; characteristics (kinematic waves) travel at dQ/dρ, and weak solutions admit shocks where characteristics intersect.

**basis (method).** The model is derived from the conservation of vehicles plus a phenomenological closure (the fundamental diagram); Lighthill & Whitham (1955) supplied the kinematic-wave continuum and Richards (1956) the shock-wave treatment [[source.lighthill-whitham-1955]] [[source.richards-1956]] [confirmed]. *Support:* it captures shock waves, vehicle spillback, and bottleneck dynamics with minimal structure and remains a cornerstone of macroscopic traffic theory [[source.treiber-kesting-2013]] [confirmed]. *Limits:* being first-order, it cannot reproduce phenomena requiring finite acceleration or relaxation — stop-and-go oscillations, capacity drop, and hysteresis — which motivated higher-order (Payne–Whitham, ARZ) and microscopic models [[source.treiber-kesting-2013]] [confirmed].
