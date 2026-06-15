---
name: fisher-neyman-factorization-theorem
type: object
object-type: theorem
essence: a statistic is sufficient iff the likelihood factors into a part depending on the data only through that statistic and a part free of the parameter
field: [field.mathematical-statistics]
status: proven
state: verified
attribution: sufficiency direction Fisher (1922); necessity Neyman (1935); general measure-theoretic proof Halmos & Savage (1949)
formalized: true
source: [source.fisher-1922, source.neyman-1935, source.halmos-savage-1949, source.cramer-1946, source.casella-berger]
depends-on: [field.probability-theory]
used-by: [object.rao-blackwell-theorem]
---

**statement (plain)** — a sufficient statistic is a summary of the data that captures everything the data say about the parameter — once you know it, the leftover detail is irrelevant. The factorization theorem gives a quick test: a statistic is sufficient exactly when the likelihood splits into two factors, one that touches the data only through that statistic (and may involve the parameter) and one that involves the data but not the parameter.

**statement (formal)** — let X have density/mass f(x; θ) with respect to a σ-finite measure. A statistic T(X) is **sufficient** for θ iff there exist nonnegative functions g and h such that

  f(x; θ) = g(T(x); θ) · h(x)   for all x and all θ ∈ Θ,

where h does not depend on θ. (Sufficiency means the conditional distribution of X given T = t does not depend on θ.) **[confirmed]**

**status** — proven.

**proof** — discrete case is elementary (Casella & Berger §6.2 [[source.casella-berger]]); the general dominated-family case is the Radon–Nikodym argument of Halmos & Savage (1949) [[source.halmos-savage-1949]].

**lineage** — Fisher (1922) introduced sufficiency and established the factorization criterion as **sufficient** for a statistic to be sufficient [[source.fisher-1922]]. Neyman (1935) supplied the **necessity** direction under regularity [[source.neyman-1935]] — hence "Fisher–Neyman." Halmos & Savage (1949) gave the general measure-theoretic proof for dominated families [[source.halmos-savage-1949]], so it is also called the Halmos–Savage factorization theorem. **[confirmed]**

**door** — Casella & Berger, *Statistical Inference*, §6.2 (Factorization Theorem 6.2.6) [[source.casella-berger]]; Cramér (1946) [[source.cramer-1946]].

**sources** — Fisher (1922) [[source.fisher-1922]]; Neyman (1935) [[source.neyman-1935]]; Halmos & Savage (1949) [[source.halmos-savage-1949]]; Casella & Berger [[source.casella-berger]]. Cross-checked against Wikipedia "Sufficient statistic" and the Neyman–Fisher theorem lecture notes (UIC). **[confirmed]**
