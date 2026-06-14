---
name: strange-attractor
type: object
object-type: structure
essence: a bounded attracting set on which a deterministic flow is chaotic — fractal geometry, sensitive dependence, no settling to a point or loop
field: [field.dynamical-systems]
status: standard-concept
state: float
attribution: first concrete example E. N. Lorenz (1963); term "strange attractor" coined by D. Ruelle & F. Takens (1971); chaos formalized by R. L. Devaney (1986/1989)
formalized: true
source: [source.lorenz-1963, source.ruelle-takens-1971, source.devaney-1989, source.strogatz-nonlinear]
depends-on: [object.dynamical-system, field.differential-geometry]
used-by: []
---

**statement (plain)** — some deterministic systems, given no randomness at all, never settle to a fixed point or a repeating loop. Instead their trajectories are drawn onto a bounded set with intricate fractal structure — a strange attractor — and on it nearby trajectories pull apart exponentially fast, so tiny differences in the start blow up: the butterfly effect. The motion is fully determined yet practically unpredictable. This requires at least three dimensions in a continuous flow (the [[poincare-bendixson-theorem]] forbids it in the plane).

**statement (formal)** — an **attractor** is a compact invariant set A with a neighborhood (basin) whose trajectories converge to A and which contains a dense orbit. It is a **strange attractor** when the dynamics restricted to A are **chaotic**. In the standard (Devaney) formulation, a map f on an invariant set is chaotic if:
1. **sensitive dependence on initial conditions** — there is δ > 0 such that for every x and every neighborhood, some nearby point eventually separates by more than δ;
2. **topological transitivity** — for any two open sets U, V some iterate carries U into V;
3. **dense periodic points**.
(Banks et al. 1992: conditions 2 and 3 on an infinite metric space imply condition 1.) "Strange" further connotes non-integer (fractal) dimension of A. **[confirmed]**

**lineage** — the first explicit example is the [[Lorenz attractor]] of [[Edward Lorenz]], "Deterministic Nonperiodic Flow," *J. Atmos. Sci.* 20 (1963), 130–141 — a three-variable convection model with aperiodic, sensitively-dependent flow [[source.lorenz-1963]]. The name "strange attractor" was coined by [[David Ruelle]] and [[Floris Takens]], "On the Nature of Turbulence," *Comm. Math. Phys.* 20 (1971), 167–192, who proposed it as the mechanism of turbulence [[source.ruelle-takens-1971]]. The three-part topological definition of chaos is due to [[Robert Devaney]], *An Introduction to Chaotic Dynamical Systems* (1986/1989) [[source.devaney-1989]]; the one-dimensional result "period three implies chaos" is Li & Yorke (1975), building on Sharkovskii. **[confirmed]** — primary papers (Lorenz 1963; Ruelle–Takens 1971) have venue/pages opened; Devaney's definition cross-checked against Wikipedia and standard texts.

**sources** — Lorenz, *J. Atmos. Sci.* 20:130–141 (AMS record); Ruelle & Takens, *Comm. Math. Phys.* 20:167–192 (Project Euclid/Springer); Wikipedia "Chaos theory" (Devaney definition, Li–Yorke); Strogatz, *Nonlinear Dynamics and Chaos*, ch. 9 (door).
