---
name: birkhoff-pointwise-ergodic-theorem
type: object
object-type: theorem
essence: for a measure-preserving map, the time average of an integrable function converges almost everywhere; under ergodicity it equals the space average
field: [field.ergodic-theory-equidistribution, field.dynamical-systems]
status: proven
state: verified
attribution: G. D. Birkhoff (1931)
formalized: true
source: [source.birkhoff-1931, source.walters-1982, source.halmos-1956, source.einsiedler-ward]
depends-on: [object.poincare-recurrence-theorem]
used-by: []
---

**statement (plain)** — if you watch a system that conserves its measure and you average a measurement over a single orbit as time goes to infinity, that long-run time average settles down to a definite value for almost every starting point. When the system is ergodic — when it cannot be split into smaller invariant pieces — that time average is the same for almost every starting point and equals the average of the measurement over the whole space. Time average = space average.

**statement (formal)** — let (X, Σ, μ) be a σ-finite measure space and T : X → X a measure-preserving transformation. For every f ∈ L¹(X, Σ, μ), the limit

  f̄(x) = limₙ→∞ (1/n) Σₖ₌₀ⁿ⁻¹ f(Tᵏx)

exists for μ-almost every x, with f̄ ∈ L¹, f̄ ∘ T = f̄ a.e., and (when μ(X) < ∞) ∫_X f̄ dμ = ∫_X f dμ. If T is **ergodic** and μ(X) = 1, then f̄(x) = ∫_X f dμ for almost every x. **[confirmed]**

**status** — proven.

**proof** — Birkhoff's original argument and the standard modern proof rest on a **maximal ergodic theorem** (a maximal inequality on the partial sums); the [[object.poincare-recurrence-theorem]] is the qualitative precursor. See Walters, *An Introduction to Ergodic Theory*, ch. 1 [[source.walters-1982]], and Einsiedler & Ward, *Ergodic Theory with a View Towards Number Theory* [[source.einsiedler-ward]]. **[confirmed]**

**lineage** — published as G. D. Birkhoff, "Proof of the ergodic theorem," *PNAS* 17 (1931), 656–660 [[source.birkhoff-1931]]. Birkhoff's pointwise (almost-everywhere) result is the companion to von Neumann's mean (L²) theorem; see [[object.von-neumann-mean-ergodic-theorem]]. Although Birkhoff's paper appeared in print first, von Neumann had proved the mean theorem earlier (1931) and communicated it to Birkhoff and Koopman — a documented priority subtlety. **[confirmed as attribution]**

**door** — Walters, ch. 1 [[source.walters-1982]]; Halmos, *Lectures on Ergodic Theory* (1956) [[source.halmos-1956]].

**sources** — Encyclopedia of Mathematics, "Birkhoff ergodic theorem"; Wolfram MathWorld, "Birkhoff's Ergodic Theorem"; [[source.birkhoff-1931]]; [[source.walters-1982]]. **[confirmed]**
