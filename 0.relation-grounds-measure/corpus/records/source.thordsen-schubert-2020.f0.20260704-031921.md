---
name: thordsen-schubert-2020
type: source
essence: ABID — angle-based intrinsic dimensionality: dimension from the distribution of angles between neighbor direction vectors
kind: paper
author: E. Thordsen; E. Schubert
year: 2020
venue: SISAP 2020, LNCS 12440, 218–232 (arXiv:2006.12880); journal version Information Systems 108, 101989 (2022)
state: settled
links: ["[[object.abid-estimator]]", "[[field.manifold-learning]]"]
---

E. Thordsen & E. Schubert, "ABID: Angle Based Intrinsic Dimensionality," SISAP 2020, LNCS 12440, pp. 218–232; extended journal version "ABID: Angle Based Intrinsic Dimensionality — Theory and analysis," *Information Systems* 108, 101989 (2022). TU Dortmund University.

Role — uses angles between pairs of neighbor direction vectors rather than distances: for uniform d-dimensional neighborhoods E[cosθ]=0, Var(cosθ)=1/d, so d̂ ≈ 1/E[cos²θ]. Theorem 1: P(θ) ∝ sin(θ)^(d−2); Theorem 2 gives the cosine distribution via the Beta function. Antecedents: Kriegel–Schubert–Zimek angle-based outlier detection (KDD 2008); Cai–Fan–Jiang angle distributions on spheres (JMLR 2013). **[confirmed]**
