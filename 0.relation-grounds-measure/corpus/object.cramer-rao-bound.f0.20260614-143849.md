---
name: cramer-rao-bound
type: object
object-type: theorem
essence: no unbiased estimator can have variance below the reciprocal of the Fisher information
field: [field.mathematical-statistics, field.information-theory]
status: proven
state: settled
attribution: C. R. Rao (1945) & H. Cramér (1946), independently; earlier Aitken–Silverstone (1942), Fréchet (1943), Darmois (1945)
formalized: true
source: [source.rao-1945, source.cramer-1946, source.fisher-1922, source.casella-berger, source.wasserman-aos]
depends-on: [object.maximum-likelihood-estimation]
used-by: []
aliases: ["object.cramer-rao-bound"]
---

**statement (plain)** — there is a floor on how precise an unbiased estimator can be. The floor is set by the Fisher information — how sharply the data's distribution changes as the parameter changes. The more information the data carry about the parameter, the smaller the achievable variance; no unbiased estimator can beat 1 over the Fisher information.

**statement (formal)** — let X have density f(x; θ) satisfying regularity conditions, and let T(X) be an unbiased estimator of θ. Define the Fisher information

  I(θ) = E_θ[(∂/∂θ log f(X; θ))²] = −E_θ[∂²/∂θ² log f(X; θ)].

Then

  Var_θ(T) ≥ 1 / I(θ).

For a biased estimator with E_θ T = ψ(θ): Var_θ(T) ≥ ψ′(θ)² / I(θ). In the multiparameter case, Cov_θ(T) ⪰ I(θ)⁻¹ (Loewner order), where I(θ) is the Fisher information matrix. An estimator meeting the bound is **efficient**; equality holds iff the score is an affine function of T (the exponential-family / "Cramér–Rao regularity" case). **[confirmed]**

**regularity conditions** — (i) the support of f does not depend on θ; (ii) ∂/∂θ log f(x; θ) exists and is finite where f > 0; (iii) differentiation under the integral sign is valid (interchange of ∂_θ and ∫ dx). When the support depends on θ (e.g. Uniform[0,θ]) the bound need not hold. **[confirmed]**

**status** — proven.

**proof** — Cauchy–Schwarz applied to the estimator T and the score function ∂_θ log f, using E_θ[score] = 0 and Cov(T, score) = ψ′(θ). See Casella & Berger ch. 7 [[source.casella-berger]] or Wasserman [[source.wasserman-aos]].

**lineage (contested / multiple discovery)** — published independently by **C. R. Rao (1945)** [[source.rao-1945]] (finite-sample, derived overnight after a student's question) and **H. Cramér (1946)** in *Mathematical Methods of Statistics* [[source.cramer-1946]]. Earlier related forms: **Aitken & Silverstone (1942)**, **Maurice Fréchet (1943)**, and **Georges Darmois (1945)** — hence occasionally the "Fréchet–Darmois–Cramér–Rao" inequality. The Fisher information itself is Fisher (1922/1925) [[source.fisher-1922]]. **[confirmed]**

**door** — Casella & Berger, *Statistical Inference*, §7.3 [[source.casella-berger]]; Wasserman, *All of Statistics* [[source.wasserman-aos]].

**sources** — Rao (1945) [[source.rao-1945]]; Cramér (1946) [[source.cramer-1946]]; Fisher (1922) [[source.fisher-1922]]; Casella & Berger [[source.casella-berger]]; Wasserman [[source.wasserman-aos]]. Attribution cross-checked against Wikipedia and Scholarpedia "Cramér–Rao bound." **[confirmed]**
