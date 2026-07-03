---
name: navier-stokes-equations
type: object
object-type: model
essence: the partial differential equations governing the motion of a viscous fluid — conservation of momentum with a viscous stress term
field: ["[[field.fluid-dynamics]]"]
status: established
state: settled
attribution: Navier (1822, molecular derivation) & Stokes (1845, continuum derivation); re-derived by Cauchy (1823), Poisson (1829), Saint-Venant (1837)
formalized: true
source: ["[[source.navier-1822]]", "[[source.stokes-1845]]", "[[source.drazin-reid-1981]]"]
depends-on: []
used-by: ["[[object.hydrodynamic-stability]]", "[[object.orr-sommerfeld-equation]]", "[[object.reynolds-number]]"]
---

**statement (plain)** — the Navier–Stokes equations express Newton's second law for a fluid: the rate of change of momentum of a fluid element equals the sum of pressure forces, viscous (internal-friction) forces, and body forces. Together with mass conservation they determine the velocity and pressure fields of a viscous fluid as functions of space and time. They are the governing equations of fluid dynamics and the starting point for the stability analyses of the field.

**statement (formal)** — for an incompressible Newtonian fluid of constant density ρ and kinematic viscosity ν, with velocity field **u** and pressure p:
∂**u**/∂t + (**u**·∇)**u** = −(1/ρ)∇p + ν∇²**u** + **f**, together with ∇·**u** = 0 (incompressibility).
The term ν∇²**u** is the viscous stress contribution that distinguishes these from Euler's inviscid equations; **f** is the body force per unit mass. **[confirmed]**

**basis** — derived as a continuum model: Navier (1822) obtained the equations from a molecular-force argument [[source.navier-1822]]; Stokes (1845) gave the now-standard continuum derivation from a linear (Newtonian) stress–strain-rate constitutive law [[source.stokes-1845]]. **Support** — agree with an enormous range of experiments across laminar and turbulent regimes; the universal model of viscous flow. **Limits** — the equations are a continuum approximation (break down at molecular/rarefied scales, large Knudsen number) and assume a Newtonian constitutive relation (non-Newtonian fluids need other models); global existence and smoothness of solutions in three dimensions remains an open Clay Millennium Problem. **[confirmed]**

**lineage** — Navier's 1822 derivation reached the correct equations from a physically questionable molecular model; the equation was independently re-derived by Cauchy (1823), Poisson (1829), Saint-Venant (1837), and definitively by Stokes (1845) on continuum grounds — hence the joint name. **[confirmed]**

**door** — [[source.drazin-reid-1981]] (governing equations); see also Batchelor, *An Introduction to Fluid Dynamics*. **[confirmed]**
