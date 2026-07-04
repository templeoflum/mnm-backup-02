---
name: two-nn-estimator
type: object
object-type: method
essence: intrinsic dimension from just two neighbors — μ = r₂/r₁ is Pareto with shape d, so a line fit on the empirical CDF reads off d
field: ["[[field.manifold-learning]]"]
status: established
state: float
attribution: Facco, d'Errico, Rodriguez & Laio (2017); closed-form Pareto MLE — Denti, Doimo, Laio & Mira (2022)
formalized: true
source: ["[[source.facco-2017]]", "[[source.denti-2022]]"]
depends-on: ["[[object.intrinsic-dimension]]"]
used-by: []
---

**statement (plain)** — for every point, take only the distances to its first and second nearest neighbors. Their ratio doesn't care how dense the data are — it only cares how many directions the data spread in. Collect the ratios, fit one straight line, and the slope is the dimension.

**statement (formal)** — with r₁, r₂ the 1st/2nd-neighbor distances and μ = r₂/r₁ ∈ [1,∞): under locally constant density, f(μ) = d·μ^(−d−1), F(μ) = 1 − μ^(−d) (Facco et al. Eqs. 5–6); the estimator (Eq. 7) fits −log(1−F(μ))/log(μ) = d through the origin on the empirical CDF, discarding the top 10% of μ. **[confirmed]**

**basis** — density cancels in the ratio, making TWO-NN robust to inhomogeneity at minimal neighborhood size. The closed-form Pareto MLE d̂ = N/Σᵢ log(μᵢ) is valid but absent from the 2017 paper — attributable to Denti–Doimo–Laio–Mira (2022), whose GRIDE generalizes the ratio to higher neighbor orders. [[source.facco-2017]] [[source.denti-2022]]
