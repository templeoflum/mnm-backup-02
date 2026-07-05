---
name: facco-2017
type: source
essence: Facco-d'Errico-Rodriguez-Laio's TWO-NN — intrinsic dimension from only the first two nearest neighbors
kind: paper
author: E. Facco; M. d'Errico; A. Rodriguez; A. Laio
year: 2017
venue: Scientific Reports 7, 12140 (2017); DOI 10.1038/s41598-017-11873-y
state: settled
links: ["[[object.two-nn-estimator]]", "[[field.manifold-learning]]"]
---

E. Facco, M. d'Errico, A. Rodriguez, A. Laio, "Estimating the intrinsic dimension of datasets by a minimal neighborhood information," *Scientific Reports* 7, 12140 (2017).

Role — the TWO-NN estimator: proves (Eqs. 5–6) that under locally constant density the ratio μ = r₂/r₁ of second- to first-neighbor distance is Pareto(1, d), density cancelling; the estimator (Eq. 7) fits −log(1−F(μ))/log(μ) = d as a line through the origin, discarding the top 10% of μ for robustness. The closed-form Pareto MLE d̂ = N/Σᵢ log μᵢ does NOT appear here — it is attributable to Denti–Doimo–Laio–Mira (2022). **[confirmed]**
