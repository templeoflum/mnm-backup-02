---
name: lyapunov-stability
type: object
object-type: theorem
essence: an equilibrium is stable if a "downhill" energy-like function exists — decide stability without solving the equations
field: ["[[field.dynamical-systems]]"]
status: proven
state: settled
attribution: A. M. Lyapunov, doctoral thesis (1892); rediscovered in the West mid-20th century
formalized: true
source: ["[[source.lyapunov-1892]]", "[[source.strogatz-nonlinear]]", "[[source.hirsch-smale-devaney]]"]
depends-on: ["[[object.dynamical-system]]"]
used-by: []
aliases: ["object.lyapunov-stability"]
---

**statement (plain)** — an equilibrium is Lyapunov stable if trajectories that start close enough stay close forever; it is asymptotically stable if they also drift back into it over time. Lyapunov's "second method" is the practical test: if you can find a positive energy-like function that is zero only at the equilibrium and never increases along trajectories, the equilibrium is stable — and you never had to solve the differential equation to know it.

**statement (formal)** — for ẋ = f(x) with equilibrium x_e:
- **stability**: for every ε > 0 there is δ > 0 such that ‖x(0) − x_e‖ < δ implies ‖x(t) − x_e‖ < ε for all t ≥ 0.
- **asymptotic stability**: stable, and additionally x(t) → x_e as t → ∞ for all x(0) sufficiently near x_e.

**Lyapunov's direct (second) method** — if there is a continuously differentiable V on a neighborhood of x_e with
- V(x_e) = 0 and V(x) > 0 for x ≠ x_e (positive definite), and
- V̇(x) = ∇V(x)·f(x) ≤ 0 along trajectories (negative semidefinite),
then x_e is stable; if V̇(x) < 0 for x ≠ x_e (negative definite), x_e is asymptotically stable. V is a **Lyapunov function**. **[confirmed]**

**status** — proven.

**lineage** — [[Aleksandr Lyapunov]], doctoral thesis *The General Problem of the Stability of Motion* (1892), the first systematic treatment of stability for ODE solutions and the origin of both the first (linearization) and second (direct) methods [[source.lyapunov-1892]]. The work was little-noticed for decades and was taken up in the West by control and aerospace engineers in the mid-20th century. **[confirmed]** — Lyapunov's thesis is cited via translations and secondary sources (Wikipedia, IMA survey), not the original Russian text; defense institution (Kharkov Mathematical Society; sources also name Moscow/Kharkov University) carried as a minor variance.

**sources** — Wikipedia "Lyapunov stability" and "Aleksandr Lyapunov"; Parks, "A. M. Lyapunov's stability theory—100 years on," *IMA J. Math. Control Inf.* 9(4) (1992); Strogatz, *Nonlinear Dynamics and Chaos* (door).
