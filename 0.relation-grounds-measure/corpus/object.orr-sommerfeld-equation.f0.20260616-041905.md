---
name: orr-sommerfeld-equation
type: object
object-type: equation
essence: the linear eigenvalue equation governing two-dimensional disturbances to a viscous parallel shear flow
field: ["[[field.fluid-dynamics-hydrodynamic-stability]]"]
status: established
state: settled
attribution: William McFadden Orr (1907) & Arnold Sommerfeld (1908), independently
formalized: true
source: ["[[source.orr-1907]]", "[[source.sommerfeld-1908]]", "[[source.drazin-reid-1981]]"]
depends-on: ["[[object.navier-stokes-equations]]", "[[object.reynolds-number]]"]
used-by: ["[[object.hydrodynamic-stability]]"]
aliases: ["object.orr-sommerfeld-equation"]
---

**statement (plain)** — the Orr–Sommerfeld equation is the central equation of viscous shear-flow stability. Take a steady parallel flow, add a small wavelike disturbance, and linearize the Navier–Stokes equations about the base flow; the result is a fourth-order ordinary differential equation whose eigenvalues determine whether the disturbance grows (instability) or decays (stability). Solving it as an eigenvalue problem in the Reynolds number and disturbance wavenumber yields the stability boundary (neutral curve) and the critical Reynolds number for a given flow profile.

**statement (formal)** — for a base velocity profile U(y) and a disturbance streamfunction perturbation φ(y)·exp[iα(x − ct)], the Orr–Sommerfeld equation is
(U − c)(φ″ − α²φ) − U″φ = −(i)/(αRe) (φ⁗ − 2α²φ″ + α⁴φ),
where α is the streamwise wavenumber, c the (complex) phase speed, Re the Reynolds number, and primes denote d/dy. Im(c) > 0 signals instability. In the inviscid limit Re → ∞ it reduces to the **Rayleigh equation** (U − c)(φ″ − α²φ) − U″φ = 0. **[confirmed]**

**basis** — derivation by linearization of the incompressible Navier–Stokes equations about a parallel base flow [[source.navier-stokes-equations]]. **Support** — derived independently by Orr (1907) [[source.orr-1907]] and Sommerfeld (1908) [[source.sommerfeld-1908]]; its solutions (e.g. for plane Poiseuille and Blasius boundary-layer flow) predict Tollmien–Schlichting instability waves later confirmed experimentally; Squire's theorem (1933) justifies the two-dimensional restriction for finding the lowest critical Re. **Limits** — it is a *linear* theory: it captures the onset of modal instability but not nonlinear saturation, transient (non-modal) growth, or subcritical transition (as in pipe flow, where the equation predicts linear stability at all Re despite observed turbulence). **[confirmed]**

**door** — [[source.drazin-reid-1981]] (ch. 4); Schmid & Henningson, *Stability and Transition in Shear Flows*. **[confirmed]**
