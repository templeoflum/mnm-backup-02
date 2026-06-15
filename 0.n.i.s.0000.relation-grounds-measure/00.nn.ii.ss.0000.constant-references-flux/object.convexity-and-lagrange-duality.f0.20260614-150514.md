---
name: convexity-and-lagrange-duality
type: object
object-type: concept
essence: when the problem is convex, local optima are global and a dual lower-bound problem closes the gap — the structural ground of tractable optimization
field: [field.numerical-optimization]
status: established
state: verified
attribution: convex-analysis foundations Lagrange (1788, multipliers), W. Fenchel (1949, conjugacy); codified R. T. Rockafellar (1970); LP duality von Neumann/Dantzig–Gale–Kuhn–Tucker (late 1940s–1951)
formalized: true
source: [source.lagrange-1788, source.rockafellar-1970, source.boyd-vandenberghe-2004, source.kuhn-tucker-1951, source.nocedal-wright-1999]
depends-on: [field.numerical-optimization, object.kkt-conditions]
used-by: [object.simplex-method]
---

**statement (plain)** — a function is convex if its graph bows upward — the line between any two points on it stays above the graph. Convex problems are the "easy" optimization problems: every local minimum is automatically a global minimum, so a downhill method cannot get trapped. Duality builds, from any problem, a companion ("dual") problem whose every value is a lower bound on the original ("primal"). The gap between them is always ≥ 0 (weak duality); for convex problems it usually closes to zero (strong duality), so solving either solves both — and the dual multipliers are exactly the KKT multipliers.

**statement (formal)** — f is convex on a convex set C if f(θx + (1−θ)y) ≤ θf(x) + (1−θ)f(y) for all x, y ∈ C, θ ∈ [0,1]. **Property:** for a convex objective over a convex feasible set, every local minimizer is a global minimizer. **Lagrange dual:** for min f₀(x) s.t. f_i(x) ≤ 0, h_j(x) = 0, define the Lagrangian L(x, λ, ν) = f₀ + Σ λ_i f_i + Σ ν_j h_j and the dual function g(λ, ν) = inf_x L(x, λ, ν); g is concave (infimum of affine functions in (λ, ν)). **Weak duality:** for any λ ≥ 0 and any feasible x, g(λ, ν) ≤ f₀(x); hence d* = sup g ≤ p* = inf f₀ always. **Strong duality:** d* = p*, which holds for convex problems under a constraint qualification — e.g. **Slater's condition** (a strictly feasible point exists). At strong duality, primal–dual optimal pairs satisfy the [[object.kkt-conditions]]. **[confirmed]**

**status** — established (definitions and weak duality hold unconditionally; the local=global property and strong duality are proven under stated convexity/qualification hypotheses).

**method** — convexity is the dividing line of optimization: convex problems admit global guarantees and efficient methods (interior-point, simplex for the linear case [[object.simplex-method]]); nonconvex ones generally do not. Duality yields certificates of optimality (a dual feasible point bounds the primal), decomposition, and sensitivity (multipliers = shadow prices). Conjugacy (Legendre–Fenchel transform) is the analytic engine behind dual derivations.

**lineage** — convex multipliers trace to Lagrange (1788) [[source.lagrange-1788]]; modern convex analysis (conjugate functions, subdifferentials) was shaped by Werner Fenchel (1949) and codified in R. T. Rockafellar, *Convex Analysis* (1970) [[source.rockafellar-1970]]. Linear-programming duality emerged in the late 1940s (von Neumann's observation to Dantzig; formalized by Gale–Kuhn–Tucker, 1951) and the general nonlinear saddle-point/duality picture sits alongside the [[object.kkt-conditions]] [[source.kuhn-tucker-1951]]. **[confirmed as attribution]** *(multi-rooted: LP duality and convex-analysis duality converge; lineage preserved.)*

**sources** — foundations: [[source.lagrange-1788]], [[source.rockafellar-1970]]; teaching door: [[source.boyd-vandenberghe-2004]] (Boyd & Vandenberghe, chs. 3–5, free online); duality origin: [[source.kuhn-tucker-1951]]; codification: [[source.nocedal-wright-1999]]. Cross-checked against Wikipedia "Strong duality" / "Convex function" and the Boyd–Vandenberghe duality notes.
