---
name: importance-sampling
type: object
object-type: method
essence: sample from an easier distribution and reweight by the likelihood ratio — recovers the right expectation and can slash variance
field: [field.monte-carlo-methods]
status: established
state: verified
attribution: statistical-physics origin — Goertzel (1949), Kahn (1949), Kahn & Harris/Marshall (1951–53); introduced to statistics by Kloek & van Dijk (1978)
formalized: true
source: [source.kahn-harris-1951, source.robert-casella, source.mackay-itila]
depends-on: [object.monte-carlo-integration]
used-by: []
---

**statement (plain)** — sometimes you want the average of a function under a distribution that is hard or wasteful to sample from. Instead, sample from a convenient distribution and correct each sample by a weight — how much more or less likely it was under the target than under the one you actually sampled. The weighted average estimates the same quantity. Chosen well, the convenient distribution puts samples where they matter most and the estimate is far less noisy; chosen badly, the weights blow up and it is worse.

**statement (formal)** — to estimate E_p[f(X)] = ∫ f(x) p(x) dx, draw X₁,…,X_N from a proposal q with q(x) > 0 wherever f(x)p(x) ≠ 0, and form
  Î = (1/N) Σ_{i=1}^N f(X_i) w(X_i),  w(x) = p(x)/q(x).
Since E_q[f w] = ∫ f(x) (p/q) q dx = ∫ f p dx, the estimator is **unbiased** for E_p[f]. Its variance is minimized (theoretically zero for fixed-sign f) by the optimal proposal q*(x) ∝ |f(x)| p(x). When p or q is known only up to a constant, the **self-normalized** variant divides by Σ w(X_i) (consistent, slightly biased). **[confirmed]**

**basis** — a change-of-measure on top of [[object.monte-carlo-integration]]: the likelihood ratio p/q (a Radon–Nikodym derivative) re-expresses the target expectation as a q-expectation, so the law of large numbers and CLT apply to the weighted samples. It is a **variance-reduction** technique, not a sampler for π itself. **[confirmed]**

**lineage** — arose in statistical physics / neutron-transport Monte Carlo: Goertzel (1949) and Kahn (1949), formalized in Kahn & Harris / Kahn & Marshall (1951–53) [[source.kahn-harris-1951]]; introduced to statistics generally via Kloek & van Dijk (1978). The exact "first" attribution differs across sources. **[candidate, attribution] — origin is a cluster of 1949–1953 physics papers rather than one canonical paper; carried as lineage.** The estimator identity itself is **[confirmed]**.

**sources** — [[source.kahn-harris-1951]]; door texts [[source.robert-casella]], [[source.mackay-itila]]; cross-checked against Wikipedia "Importance sampling" and a machine-learning importance-weighting survey. **[confirmed]** (estimator); **[candidate, attribution]** (origin).
