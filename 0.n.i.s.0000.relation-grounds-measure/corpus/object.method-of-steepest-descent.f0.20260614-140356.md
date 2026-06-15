---
name: method-of-steepest-descent
type: object
object-type: theorem
essence: deform a complex contour through a saddle point of the exponent and apply Laplace's method along the steepest path
field: [field.asymptotic-analysis, field.complex-analysis]
status: proven
state: settled
attribution: P. Debye (1909), crediting an 1863 idea of B. Riemann; roots in Cauchy
formalized: true
source: [source.debye-1909, source.riemann-1863, source.de-bruijn-1958, source.bender-orszag]
depends-on: [object.laplaces-method, object.cauchy-integral-theorem, object.asymptotic-expansion]
used-by: []
---

**statement (plain)** — the complex-analytic version of Laplace's method, also called the saddle-point method. For an integral of e raised to a large multiple of an analytic function along a contour, you slide the contour (allowed by Cauchy's theorem) so it passes through a saddle point of the exponent, taking the path where the real part falls off fastest and the imaginary part stays constant. On that path the oscillation is killed and Laplace's method gives the leading term.

**statement (formal)** — for I(λ) = ∫_C g(z) e^{λ f(z)} dz with f, g analytic and λ → ∞: deform C (Cauchy's theorem, [[object.cauchy-integral-theorem]]) to a contour C′ through a saddle point z₀ where f′(z₀) = 0, chosen so that Im f is constant (the steepest-descent path) and Re f decreases away from z₀. For a simple saddle (f″(z₀) ≠ 0),
  I(λ) ∼ g(z₀) e^{λ f(z₀)} · √(2π / (λ |f″(z₀)|)) · e^{iθ},
where θ is fixed by the direction of steepest descent (arg of the path so that λ f″(z₀)·(direction)² < 0). Multiple saddles: sum the contributions of the dominant ones. **[confirmed]**

**proof** — Cauchy's theorem permits the deformation; on the steepest-descent path Im f = const so e^{λf} = e^{iλ·const} e^{λ Re f} is non-oscillatory and peaked at z₀, reducing the integral to a real Laplace-method estimate. See [[object.laplaces-method]]; full development in [[source.de-bruijn-1958]] and [[source.bender-orszag]]. **[confirmed]**

**lineage** — established and popularized by Peter Debye (1909) in the asymptotics of Bessel/cylinder functions [[source.debye-1909]]; Debye explicitly credited the idea to an 1863 paper of Riemann [[source.riemann-1863]]. The method's roots also trace to Cauchy, and Siegel (1932) found Riemann using it in unpublished notes (→ Riemann–Siegel formula). Exact priority is genuinely contested; carried as the Debye–Riemann lineage. **[confirmed]**

**door** — [[source.bender-orszag]] ch. 6; [[source.de-bruijn-1958]] ch. 5.
