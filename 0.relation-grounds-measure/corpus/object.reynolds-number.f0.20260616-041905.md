---
name: reynolds-number
type: object
object-type: concept
essence: the dimensionless ratio of inertial to viscous forces that governs the character of a flow and the onset of turbulence
field: [field.fluid-dynamics-hydrodynamic-stability]
status: established
state: settled
attribution: Osborne Reynolds (1883); named "Reynolds number" by Sommerfeld (1908)
formalized: true
source: [source.reynolds-1883, source.drazin-reid-1981]
depends-on: [object.navier-stokes-equations]
used-by: [object.hydrodynamic-stability, object.orr-sommerfeld-equation]
---

**statement (plain)** — the Reynolds number is a single dimensionless quantity that compares the strength of inertial (momentum) forces in a flow to viscous (frictional) forces. Low Reynolds number means viscosity dominates and the flow is smooth and laminar; high Reynolds number means inertia dominates and the flow tends to become unstable and turbulent. Reynolds showed experimentally that the transition from laminar to turbulent pipe flow occurs near a critical value of this number, independent of the particular fluid, velocity, or pipe size taken separately.

**statement (formal)** — Re = ρUL/μ = UL/ν, where U is a characteristic velocity, L a characteristic length, ρ density, μ dynamic viscosity, and ν = μ/ρ kinematic viscosity. It is the ratio of the inertial term (**u**·∇)**u** to the viscous term ν∇²**u** in the Navier–Stokes equations. For pipe flow Reynolds found transition near Re ≈ 2000 (critical value depends on disturbance level and geometry). **[confirmed]**

**basis** — empirical and dimensional. **Support** — Reynolds's 1883 dye experiments established the dimensionless transition criterion directly [[source.reynolds-1883]]; the grouping also follows from nondimensionalizing the Navier–Stokes equations, where Re is the sole parameter for incompressible flow without free surfaces. Confirmed across countless experiments and flow configurations. **Limits** — the *critical* Reynolds number is not universal: it depends strongly on geometry, surface roughness, and the amplitude of incoming disturbances (pipe flow is linearly stable at all Re yet transitions subcritically); the number indexes the regime but does not by itself predict transition. **[confirmed]**

**door** — [[source.drazin-reid-1981]]; the name "Reynolds number" was given by Sommerfeld (1908). **[confirmed]**
