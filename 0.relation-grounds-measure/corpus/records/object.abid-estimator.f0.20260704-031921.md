---
name: abid-estimator
type: object
object-type: method
essence: dimension from angles alone — in a uniform d-dimensional neighborhood Var(cosθ) = 1/d, so d̂ ≈ 1/E[cos²θ]
field: ["[[field.manifold-learning]]"]
status: established
state: settled
attribution: Thordsen & Schubert (SISAP 2020; Information Systems 2022)
formalized: true
source: ["[[source.thordsen-schubert-2020]]"]
depends-on: ["[[object.intrinsic-dimension]]"]
used-by: []
---

**statement (plain)** — look only at the *directions* from a point to its neighbors, never the lengths. In higher dimensions, random directions are closer to perpendicular; how tightly the cosines concentrate around zero reads off the dimension.

**statement (formal)** — for points uniform in a d-dimensional neighborhood, E[cosθ] = 0 and Var(cosθ) = E[cos²θ] = 1/d, so the core estimator is d̂ ≈ 1/E[cos²θ]. Full regularized form (Def. 1): ABID(X,c) = n² / Σᵢ Σⱼ (⟨xᵢ−c, xⱼ−c⟩ / (‖xᵢ−c‖·‖xⱼ−c‖))² — the reciprocal of the mean squared pairwise cosine over the n neighbors of center c (diagonal self-terms included; RABID, Def. 2, excludes them). Equals the reciprocal of the sum of squared eigenvalues of the cosine matrix. Theorem 1: P(θ) ∝ sin(θ)^(d−2). **[confirmed]**

**basis** — angle distributions on spheres (Cai–Fan–Jiang, JMLR 2013) and angle-based outlier detection (Kriegel–Schubert–Zimek, KDD 2008) are the antecedents; ABID/DANCo now serve as baseline estimators in LLM-representation ID studies. [[source.thordsen-schubert-2020]]
