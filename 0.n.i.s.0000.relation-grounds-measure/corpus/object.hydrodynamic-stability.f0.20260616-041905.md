---
name: hydrodynamic-stability
type: object
object-type: concept
essence: the study of whether a fluid flow persists or breaks down under small disturbances — the framework for the laminar-to-turbulent transition
field: [field.fluid-dynamics-hydrodynamic-stability]
status: established
state: float
attribution: Helmholtz & Kelvin (shear-layer instability, 1868–1871); Rayleigh (inviscid criteria, 1880); Reynolds (transition, 1883); Orr & Sommerfeld (viscous theory, 1907–1908)
formalized: true
source: [source.reynolds-1883, source.rayleigh-1880, source.drazin-reid-1981]
depends-on: [object.navier-stokes-equations, object.reynolds-number, object.orr-sommerfeld-equation]
used-by: []
---

**statement (plain)** — hydrodynamic stability asks whether a given steady or laminar fluid flow will persist when slightly disturbed, or whether the disturbances grow and drive the flow to a different state — typically turbulence. The core method is to superpose a small perturbation on a base flow, linearize the governing equations, and determine whether the perturbation grows or decays; the threshold (often a critical Reynolds number, Rayleigh number, or Taylor number) marks the onset of instability. It is the conceptual frame uniting the field: Navier–Stokes supplies the dynamics, the Reynolds number indexes the regime, and the Orr–Sommerfeld / Rayleigh equations are the tools.

**statement (formal)** — a base flow is *linearly stable* if every normal-mode disturbance ∝ exp[iα(x − ct)] decays, i.e. all eigenvalues c of the linearized operator (e.g. the Orr–Sommerfeld eigenvalue problem) satisfy Im(c) < 0; *neutrally stable* when Im(c) = 0; *unstable* when some mode has Im(c) > 0. Inviscid parallel flows obey **Rayleigh's necessary condition**: instability requires an inflection point in the base velocity profile, U″ = 0 somewhere. **[confirmed]**

**basis** — empirical and methodological. **Support** — Reynolds (1883) established transition empirically and the dimensionless threshold [[source.reynolds-1883]]; Rayleigh (1880) gave the first inviscid stability theory and the inflection-point criterion [[source.rayleigh-1880]]; the Kelvin–Helmholtz and Rayleigh–Bénard / Taylor–Couette instabilities are textbook confirmed cases. **Limits** — linear (modal) stability is necessary but not sufficient to predict transition: many shear flows (pipe, plane Couette) are linearly stable yet transition subcritically via finite-amplitude disturbances and non-modal transient growth; the full transition problem remains only partially solved. **[confirmed]**

**door** — [[source.drazin-reid-1981]]; Chandrasekhar, *Hydrodynamic and Hydromagnetic Stability* (1961); Schmid & Henningson (2001). **[confirmed]**
