---
name: ergodicity-and-mixing
type: object
object-type: definition
essence: ergodic = the only invariant sets are null or co-null (the system is indecomposable); mixing = the dynamics asymptotically decorrelates any two sets
field: [field.ergodic-theory-equidistribution, field.dynamical-systems]
status: standard
state: settled
attribution: "metric transitivity" (= ergodicity) coined by G. D. Birkhoff & P. A. Smith (1928); mixing notions from Koopman, von Neumann, Hopf (1930s)
formalized: true
source: [source.walters-1982, source.birkhoff-1931, source.von-neumann-1932, source.halmos-1956, source.einsiedler-ward]
depends-on: []
used-by: []
---

**statement (plain)** — a measure-preserving system is **ergodic** if it cannot be split into two smaller pieces that the dynamics keeps separate: the only sets carried onto themselves are either negligible or everything. Ergodicity is exactly the condition that makes "time average = space average" hold (via Birkhoff). **Mixing** is a stronger kind of chaos: any two regions become statistically independent over time — the chance of landing in region B after many steps, given you started in A, approaches the unconditional size of B times the size of A. Mixing implies ergodic, but not conversely.

**statement (formal)** — let (X, Σ, μ) be a probability space and T : X → X measure-preserving.

- **Ergodic:** every T-invariant set A (i.e. T⁻¹A = A, up to null sets) satisfies μ(A) = 0 or μ(A) = 1. Equivalent: every T-invariant measurable function is constant a.e. Equivalent (metric transitivity): X cannot be partitioned into two invariant sets of positive measure.
- **(Strong) mixing:** for all A, B ∈ Σ,  limₙ→∞ μ(T⁻ⁿA ∩ B) = μ(A)·μ(B).
- **Weak mixing:** limₙ→∞ (1/n) Σₖ₌₀ⁿ⁻¹ | μ(T⁻ᵏA ∩ B) − μ(A)μ(B) | = 0 for all A, B.

Implications: strong mixing ⇒ weak mixing ⇒ ergodic; none of the reverse implications holds. **[confirmed]**

**status** — standard definition.

**proof / reference** — definitions and the implication chain are developed in Walters, ch. 1 [[source.walters-1982]] and Einsiedler & Ward [[source.einsiedler-ward]]; ergodicity's equivalence to "time average = space average" is the [[object.birkhoff-pointwise-ergodic-theorem]] corollary. **[confirmed]**

**lineage** — the property now called ergodicity was introduced under the name **"metric transitivity"** by G. D. Birkhoff and P. A. Smith, "Structure analysis of surface transformations" (Journal de Mathématiques / Liouville's Journal, 1928); its importance was recognized only after the 1931–32 ergodic theorems. The Hilbert-space operator view that underlies mixing is due to B. O. Koopman (1931); mixing and spectral notions were developed by J. von Neumann and E. Hopf in the 1930s. [[source.birkhoff-1931]] [[source.von-neumann-1932]] **[confirmed as attribution]**

**door** — Walters, ch. 1 [[source.walters-1982]]; Halmos, *Lectures on Ergodic Theory* (1956) [[source.halmos-1956]].

**sources** — Encyclopedia of Mathematics, "Ergodicity" (D. V. Anosov); standard ergodic-theory lecture notes (Quas; Sarig); PNAS history "Ergodic theorem, ergodic theory, and statistical mechanics"; [[source.walters-1982]]. **[confirmed]**
