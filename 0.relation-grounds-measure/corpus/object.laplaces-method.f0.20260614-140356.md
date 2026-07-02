---
name: laplaces-method
type: object
object-type: theorem
essence: a real integral with a sharp exponential peak is dominated by the neighbourhood of its maximum — a Gaussian estimate
field: ["[[field.asymptotic-analysis]]"]
status: proven
state: settled
attribution: P.-S. Laplace (1774); systematized in Théorie analytique des probabilités (1812)
formalized: true
source: ["[[source.laplace-1774]]", "[[source.de-bruijn-1958]]", "[[source.bender-orszag]]"]
depends-on: ["[[object.asymptotic-expansion]]"]
used-by: ["[[object.method-of-steepest-descent]]", "[[object.watsons-lemma]]"]
aliases: ["object.laplaces-method"]
---

**statement (plain)** — to estimate an integral of e raised to a large multiple of some function, almost all the value comes from near where that function is largest. Approximating the function there by a downward parabola turns the integral into a Gaussian, giving a simple closed-form leading estimate.

**statement (formal)** — let f be twice continuously differentiable on [a,b] with a unique interior global maximum at x₀, f′(x₀) = 0, f″(x₀) < 0. Then as M → ∞
  ∫ₐᵇ e^{M f(x)} dx ∼ e^{M f(x₀)} · √(2π / (M |f″(x₀)|)).
More generally g(x) e^{M f(x)} with g(x₀) ≠ 0 gives the same with an extra factor g(x₀); the full asymptotic series follows from the higher derivatives at x₀. **[confirmed]**

**proof** — localize: outside any neighbourhood of x₀ the integrand is exponentially smaller. Near x₀ write f(x) ≈ f(x₀) + ½ f″(x₀)(x−x₀)²; substituting and extending the Gaussian integral to (−∞,∞) gives √(2π/(M|f″(x₀)|)). Rigour (Watson's lemma / dominated estimates) confirms the error is lower order. Full treatment in [[source.de-bruijn-1958]] and [[source.bender-orszag]]. **[confirmed]**

**lineage** — originates with P.-S. Laplace, "Mémoire sur la probabilité des causes par les événements" (1774) [[source.laplace-1774]]; developed in his *Théorie analytique des probabilités* (1812). The complex-analytic generalization is the [[object.method-of-steepest-descent]]. **[confirmed]**

**door** — [[source.bender-orszag]] ch. 6; [[source.de-bruijn-1958]] ch. 4.
