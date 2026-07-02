---
name: rao-blackwell-theorem
type: object
object-type: theorem
essence: conditioning an estimator on a sufficient statistic never increases its risk under any convex loss — so improve estimators by Rao–Blackwellization
field: ["[[field.mathematical-statistics]]"]
status: proven
state: settled
attribution: C. R. Rao (1945) & D. Blackwell (1947), independently; named and extended (with completeness) by Lehmann & Scheffé (1950)
formalized: true
source: ["[[source.rao-1945]]", "[[source.blackwell-1947]]", "[[source.lehmann-scheffe-1950]]", "[[source.casella-berger]]"]
depends-on: ["[[object.fisher-neyman-factorization-theorem]]"]
used-by: []
---

**statement (plain)** — if you have an estimator, you can always make it at least as good by averaging it over the data given a sufficient statistic. The new estimator keeps the same bias but has variance no larger than the original — and it depends on the data only through the sufficient statistic. This "Rao–Blackwellization" is the standard way to refine a crude estimator.

**statement (formal)** — let δ(X) be an estimator of θ with finite risk under a convex loss L, and let T be a sufficient statistic for θ. Define the conditional estimator

  δ*(T) = E[δ(X) | T].

(This is well-defined and free of θ because T is sufficient.) Then for every θ,

  R(θ, δ*) ≤ R(θ, δ),   where R(θ, ·) = E_θ L(θ, ·).

For squared-error loss with δ unbiased: δ* is unbiased and Var_θ(δ*) ≤ Var_θ(δ), with strict inequality unless δ is already a function of T. **[confirmed]**

**status** — proven.

**proof** — Jensen's inequality applied to the convex loss conditional on T; for variance, the law of total variance Var(δ) = Var(E[δ|T]) + E[Var(δ|T)]. See Casella & Berger §7.3.3 [[source.casella-berger]].

**companion (uniqueness)** — if T is additionally **complete**, the Rao–Blackwellized estimator is the unique uniformly minimum-variance unbiased estimator (UMVUE) — the Lehmann–Scheffé theorem [[source.lehmann-scheffe-1950]]. **[confirmed]**

**lineage** — the one-parameter result appears in **Rao (1945)** [[source.rao-1945]] and independently in **Blackwell (1947)** [[source.blackwell-1947]]. **Lehmann & Scheffé (1950)** named it the "Rao–Blackwell theorem" and added completeness; Berkson (1955) coined "Rao–Blackwellization." **[confirmed]**

**door** — Casella & Berger, *Statistical Inference*, §7.3.3 [[source.casella-berger]].

**sources** — Rao (1945) [[source.rao-1945]]; Blackwell (1947) [[source.blackwell-1947]]; Lehmann & Scheffé (1950) [[source.lehmann-scheffe-1950]]; Casella & Berger [[source.casella-berger]]. Cross-checked against Scholarpedia "Rao–Blackwell theorem" and Wikipedia. **[confirmed]**
