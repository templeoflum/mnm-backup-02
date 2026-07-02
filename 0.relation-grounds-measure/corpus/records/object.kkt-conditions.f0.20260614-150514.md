---
name: kkt-conditions
type: object
object-type: theorem
essence: first-order necessary conditions for a constrained optimum — Lagrange multipliers extended to inequalities, with complementary slackness
field: ["[[field.numerical-optimization]]"]
status: proven
state: settled
attribution: W. Karush (1939 master's thesis); independently H. W. Kuhn & A. W. Tucker (1951); generalizes Lagrange multipliers (Lagrange 1788)
formalized: true
source: ["[[source.karush-1939]]", "[[source.kuhn-tucker-1951]]", "[[source.lagrange-1788]]", "[[source.nocedal-wright-1999]]", "[[source.boyd-vandenberghe-2004]]"]
depends-on: ["[[object.gradient-descent]]"]
used-by: ["[[object.convexity-and-lagrange-duality]]"]
---

**statement (plain)** — at a solution of a constrained minimization problem, the slope of the objective must be balanced by the slopes of the active constraints, weighted by non-negative "multipliers." A constraint that is not tight (has slack) gets multiplier zero — this is complementary slackness. These four conditions (stationarity, feasibility, non-negative multipliers, complementary slackness) are necessary for an optimum when a regularity condition (constraint qualification) holds; they extend the method of Lagrange multipliers from equalities to inequalities.

**statement (formal)** — for the problem min f(x) s.t. g_i(x) ≤ 0 (i = 1..m), h_j(x) = 0 (j = 1..ℓ), with f, g, h differentiable, a point x* (under a constraint qualification such as LICQ) that is a local minimizer satisfies, for some multipliers μ_i, λ_j:
1. **stationarity** — ∇f(x*) + Σ_i μ_i ∇g_i(x*) + Σ_j λ_j ∇h_j(x*) = 0;
2. **primal feasibility** — g_i(x*) ≤ 0, h_j(x*) = 0;
3. **dual feasibility** — μ_i ≥ 0;
4. **complementary slackness** — μ_i g_i(x*) = 0 for all i.
For convex problems satisfying a constraint qualification (e.g. Slater's condition), the KKT conditions are also sufficient for global optimality. With no inequality constraints (m = 0) they reduce to the classical Lagrange-multiplier conditions. **[confirmed]**

**status** — proven (necessary under a constraint qualification; necessary-and-sufficient in the convex case).

**method** — the Lagrangian L(x, μ, λ) = f + Σ μ_i g_i + Σ λ_j h_j; stationarity is ∇_x L = 0. Constraint qualifications (LICQ, MFCQ, Slater) rule out degenerate geometry where multipliers fail to exist. KKT is the analytic backbone of constrained-optimization algorithms (interior-point, SQP) and is the bridge to [[object.convexity-and-lagrange-duality]] (KKT points are primal–dual optimal under strong duality).

**lineage** — the necessary conditions were stated by William Karush in his 1939 unpublished University of Chicago master's thesis [[source.karush-1939]]; independently rediscovered and published by Harold W. Kuhn and Albert W. Tucker, "Nonlinear Programming," *Proc. 2nd Berkeley Symposium on Mathematical Statistics and Probability* (1951) [[source.kuhn-tucker-1951]] — originally "Kuhn–Tucker conditions," renamed once Karush's priority was recognized. Both generalize Lagrange's multipliers [[source.lagrange-1788]]. **[confirmed]** *(contested attribution preserved as lineage: Karush 1939 thesis vs. Kuhn–Tucker 1951 publication.)*

**sources** — origins: [[source.karush-1939]], [[source.kuhn-tucker-1951]]; ancestor: [[source.lagrange-1788]]; doors: [[source.nocedal-wright-1999]] (Nocedal & Wright, theory of constrained optimization), [[source.boyd-vandenberghe-2004]] (Boyd & Vandenberghe ch. 5). Cross-checked against Wikipedia "Karush–Kuhn–Tucker conditions."
