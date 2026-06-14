---
name: newtons-method-optimization
type: object
object-type: algorithm
essence: fit a parabola using curvature (the Hessian) and jump to its minimum — second-order descent with quadratic convergence
field: [field.numerical-optimization, field.numerical-analysis]
status: established
state: float
attribution: root-finding from I. Newton (1669), J. Raphson (1690), T. Simpson (1740, who noted the optimization use); modern matrix form is a later synthesis
formalized: true
source: [source.newton-1669, source.nocedal-wright-1999, source.boyd-vandenberghe-2004]
depends-on: [field.numerical-optimization]
used-by: []
---

**statement (plain)** — to minimize a smooth function, don't just look at the slope (gradient) — also use the curvature (second derivative / Hessian). At each point, fit a parabola matching the function's slope and curvature, then jump to that parabola's bottom. Near a minimum this roughly doubles the number of correct digits each step (quadratic convergence). The price: you must form and invert the Hessian, and far from the minimum it can step badly, so it is usually damped with a step size or line search.

**statement (formal)** — to minimize f: ℝⁿ → ℝ (twice differentiable), iterate
x_{k+1} = x_k − [∇²f(x_k)]⁻¹ ∇f(x_k),
i.e. apply Newton's root-finding iteration to the stationarity equation ∇f(x) = 0; ∇²f is the Hessian. Geometrically this fits a quadratic to f at x_k with matching gradient and Hessian and moves to its extremum — so if f is quadratic the exact minimizer is reached in one step. For strongly convex f with Lipschitz Hessian and a starting point close enough to the minimizer x*, convergence is quadratic:
‖x_{k+1} − x*‖ ≤ ½ ‖x_k − x*‖² (up to the relevant constant).
The damped/relaxed form uses x_{k+1} = x_k − γ [∇²f]⁻¹ ∇f with 0 < γ ≤ 1 chosen by Armijo/Wolfe line search. **[confirmed]**

**status** — established.

**method** — second-order: uses gradient and Hessian. Strengths: quadratic local convergence, affine invariance. Weaknesses: cost of forming/inverting the Hessian (O(n³)), and the Hessian may be indefinite far from the optimum — addressed by damping, trust regions, modified factorizations, or quasi-Newton approximations (BFGS, etc.). Contrast first-order [[object.gradient-descent]].

**lineage** — the underlying root-finding iteration is Newton's: *De analysi* (written 1669, publ. 1711), applied to polynomials [[source.newton-1669]]; Joseph Raphson (1690) gave the reusable iterative form; Thomas Simpson (1740) framed it for general nonlinear equations and explicitly noted its use for optimization by setting the gradient to zero. The modern gradient/Hessian matrix statement is a later synthesis. **[confirmed as attribution]** *(name conventional; optimization form post-dates Newton.)*

**sources** — origin: [[source.newton-1669]]; codification/door: [[source.nocedal-wright-1999]] (Nocedal & Wright, ch. on Newton and quasi-Newton methods); convex view and convergence: [[source.boyd-vandenberghe-2004]]. Cross-checked against Wikipedia "Newton's method in optimization."
