---
name: von-neumann-mean-ergodic-theorem
type: object
object-type: theorem
essence: the Cesàro averages of a unitary (or isometric) operator converge in norm to the orthogonal projection onto the invariant subspace
field: [field.ergodic-theory-equidistribution, field.functional-analysis]
status: proven
state: settled
attribution: J. von Neumann (1932; proved 1931)
formalized: true
source: [source.von-neumann-1932, source.walters-1982, source.halmos-1956, source.einsiedler-ward]
depends-on: []
used-by: []
---

**statement (plain)** — view a measure-preserving system through the Hilbert space of square-integrable functions, where the system acts as an operator that preserves length. Then the running averages of repeated applications of the operator converge — in the mean-square (L²) sense, not pointwise — to the projection onto the functions the operator leaves fixed. This is the "mean" or "statistical" ergodic theorem, distinguished from Birkhoff's almost-everywhere version.

**statement (formal)** — let H be a Hilbert space and U : H → H an isometry (in particular a unitary operator). Let P be the orthogonal projection onto the closed subspace of U-invariant vectors {h : Uh = h}. Then for every h ∈ H,

  limₙ→∞ ‖ (1/n) Σₖ₌₀ⁿ⁻¹ Uᵏh − Ph ‖ = 0,

i.e. the Cesàro averages converge in norm to Ph. Applied to U the Koopman operator (Uf = f ∘ T) of a measure-preserving T on L²(X, μ), this gives L²-convergence of the time averages. **[confirmed]**

**status** — proven.

**proof** — the classical proof uses the **spectral theorem** for unitary operators (Stone–von Neumann spectral resolution); a short modern proof decomposes H = ker(U − I) ⊕ closure(range(U − I)) and shows the averages vanish on the second summand. See Walters, ch. 1 [[source.walters-1982]] and Einsiedler & Ward [[source.einsiedler-ward]]. **[confirmed]**

**lineage** — published as J. von Neumann, "Proof of the quasi-ergodic hypothesis," *PNAS* 18 (1932), 70–82 [[source.von-neumann-1932]]. The Hilbert-space (Koopman operator) viewpoint that made the theorem possible is due to B. O. Koopman (1931). Von Neumann's result preceded and stimulated Birkhoff's pointwise theorem [[object.birkhoff-pointwise-ergodic-theorem]], though Birkhoff's paper appeared first in print — a documented priority subtlety. **[confirmed as attribution]**

**door** — Walters, ch. 1 [[source.walters-1982]]; Halmos, *Lectures on Ergodic Theory* (1956) [[source.halmos-1956]].

**sources** — Encyclopedia of Mathematics, "Von Neumann ergodic theorem"; PlanetMath, "von Neumann's ergodic theorem"; [[source.von-neumann-1932]]; [[source.walters-1982]]. **[confirmed]**
