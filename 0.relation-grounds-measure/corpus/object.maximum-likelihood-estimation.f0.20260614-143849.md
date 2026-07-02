---
name: maximum-likelihood-estimation
type: object
object-type: method
essence: estimate a parameter by the value that makes the observed data most probable — maximize the likelihood
field: [field.mathematical-statistics]
status: established
state: settled
attribution: R. A. Fisher (1922, named and systematized; numerical use 1912); precursors Gauss, Laplace, Edgeworth
formalized: true
source: [source.fisher-1922, source.cramer-1946, source.casella-berger, source.wasserman-aos]
depends-on: []
used-by: [object.cramer-rao-bound]
aliases: ["object.maximum-likelihood-estimation"]
---

**statement (plain)** — given data and a family of candidate probability models indexed by a parameter, pick the parameter value under which the observed data would have been most probable. That value is the maximum likelihood estimate.

**statement (formal)** — let X₁,…,Xₙ be observed with joint density (or mass) f(x; θ), θ ∈ Θ. The likelihood is L(θ) = f(x₁,…,xₙ; θ), viewed as a function of θ with the data fixed; usually one maximizes the log-likelihood ℓ(θ) = log L(θ). The maximum likelihood estimator is

  θ̂ = argmax_{θ∈Θ} L(θ) = argmax_{θ∈Θ} ℓ(θ).

For i.i.d. data, ℓ(θ) = Σᵢ log f(xᵢ; θ), and (in the regular case) θ̂ solves the score equation ∂ℓ/∂θ = 0. **[confirmed]**

**properties** — under regularity conditions the MLE is consistent and asymptotically normal and efficient (CAN): √n(θ̂ − θ) → N(0, I(θ)⁻¹), attaining the [[object.cramer-rao-bound]] asymptotically; it is invariant under reparametrization and is a function of any sufficient statistic. Fisher (1922) gave heuristic arguments for consistency/efficiency later made rigorous (with regularity conditions) by Cramér, Wald, and others. **[confirmed]**

**status** — established method; large-sample optimality is a proven theorem under regularity. Fisher (1922) introduced "consistency," "efficiency," "likelihood," "sufficiency," and "specification."

**lineage** — the term and systematic theory are Fisher's, "On the Mathematical Foundations of Theoretical Statistics" (1922) [[source.fisher-1922]], with a numerical instance in his 1912 student paper. Earlier ad hoc uses appear in Gauss, Laplace, and Edgeworth; Fisher distinguished it sharply from inverse (Bayesian) probability. **[confirmed]**

**door** — Casella & Berger, *Statistical Inference*, ch. 7 [[source.casella-berger]]; Wasserman, *All of Statistics*, ch. 9 [[source.wasserman-aos]].

**sources** — Fisher (1922) [[source.fisher-1922]]; Cramér (1946) [[source.cramer-1946]]; Casella & Berger [[source.casella-berger]]; Wasserman [[source.wasserman-aos]]. Cross-checked against MacTutor/Stigler's "Epic Story of Maximum Likelihood" (Stat. Sci. 2007) and Aldrich's "R. A. Fisher and the making of maximum likelihood" (Stat. Sci. 1997). **[confirmed]**
