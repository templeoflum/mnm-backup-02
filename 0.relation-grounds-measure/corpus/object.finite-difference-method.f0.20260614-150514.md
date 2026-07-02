---
name: finite-difference-method
type: object
object-type: method
essence: approximate derivatives by differences on a grid — turn a differential equation into a solvable algebraic system; stability gated by the CFL condition
field: ["[[field.numerical-analysis]]"]
status: established
attribution: differences for ODEs from Euler (18th c.); PDE theory and the CFL stability condition from Courant, Friedrichs & Lewy (1928)
formalized: true
state: settled
source: ["[[source.courant-friedrichs-lewy-1928]]", "[[source.suli-mayers-2003]]"]
depends-on: ["[[object.epsilon-delta-limit]]"]
used-by: []
aliases: ["object.finite-difference-method"]
---

**statement (plain)** — to solve a differential equation on a computer, lay down a grid of points and replace each derivative with a difference of nearby grid values (a slope estimated from neighbors). The differential equation becomes a big system of algebraic equations you can solve. For time-dependent problems there is a catch: the time step can't be too large relative to the space step, or the scheme blows up — that ceiling is the CFL condition.

**statement (formal)** — on a grid of spacing h, derivatives are approximated by difference quotients, e.g. forward f′(x) ≈ (f(x+h) − f(x))/h (O(h) accurate), central f′(x) ≈ (f(x+h) − f(x−h))/(2h) (O(h²)), second derivative f″(x) ≈ (f(x+h) − 2f(x) + f(x−h))/h². For an explicit scheme for a hyperbolic PDE with wave speed u, time step Δt and space step Δx, the **Courant–Friedrichs–Lewy condition** requires the Courant number
C = u Δt / Δx ≤ C_max
(C_max = 1 for the basic explicit scheme): the numerical domain of dependence must contain the analytic one, else the scheme is unstable. Lax equivalence: for a consistent scheme, stability ⇔ convergence. **[confirmed]**

**method/derivation** — difference formulas come from Taylor expansion (subtracting/combining f(x±h) expansions cancels terms and exposes the derivative plus a truncation error in powers of h). Substituting these into the differential operator and enforcing the equation at every interior grid point yields a (often sparse, banded) linear system solved by [[object.gaussian-elimination-lu]] or iteration. Two error sources: **truncation error** (from the difference approximation, → 0 as h → 0) and rounding; refinement is constrained by stability (CFL) and by [[object.numerical-stability-backward-error]].

**lineage** — finite differences for ordinary differential equations trace to Euler (18th c.); Runge and Kutta extended numerical ODE integration (late 19th c.). The theoretical foundation for solving PDEs of mathematical physics by finite differences, and the stability/convergence condition, is Courant, Friedrichs & Lewy's 1928 paper [[source.courant-friedrichs-lewy-1928]]; later developed by Richardson (weather prediction), von Neumann (stability analysis), and Lax. **[confirmed]**

**sources** — [[source.courant-friedrichs-lewy-1928]] (foundational paper + CFL); [[source.suli-mayers-2003]] (door, finite-difference chapters); corroborated by Thomée's history "From finite differences to finite elements" and Wikipedia (CFL condition). **[confirmed]**
