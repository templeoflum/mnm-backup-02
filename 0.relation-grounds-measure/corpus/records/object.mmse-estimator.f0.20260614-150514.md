---
name: mmse-estimator
type: object
object-type: concept
essence: the Bayesian estimator minimizing expected squared error is the posterior mean; its companion MAP estimator is the posterior mode
field: ["[[field.detection-estimation-theory]]", "[[field.mathematical-statistics]]"]
status: established
state: settled
attribution: Bayesian estimation tradition; codified for signal processing by Van Trees (1968) and Kay (1993)
formalized: true
source: ["[[source.van-trees-1968]]", "[[source.kay-1993]]", "[[source.cramer-1946]]"]
depends-on: []
used-by: ["[[object.wiener-filter]]", "[[object.kalman-filter]]"]
---

**statement (plain)** — when you estimate an unknown quantity from data and judge estimates by their average squared error, the single best estimate is the *posterior mean*: the average of the unknown given everything the data tell you. A close relative, the MAP estimate, instead picks the most probable single value (the peak of the posterior). MMSE balances; MAP commits.

**statement (formal)** — for an unknown θ and observation x with posterior p(θ∣x):
- **MMSE:** θ̂_MMSE(x) = argmin_{θ̂} E{ ‖θ̂ − θ‖² ∣ x } = **E[θ ∣ x]**, the posterior mean. Equivalent characterization — the **orthogonality principle**: the error is uncorrelated with every function of the data, E{(θ̂_MMSE − θ) g(x)} = 0 for all g. **[confirmed]**
- **MAP:** θ̂_MAP(x) = argmax_θ p(θ∣x) = argmax_θ [ p(x∣θ) p(θ) ], the posterior mode. **[confirmed]**

**status** — proven (the posterior-mean result is a theorem; MAP is a definition with proven relations to MMSE and to maximum likelihood).

**method / relations** —
- with a *flat (uninformative) prior*, MAP reduces to the **maximum-likelihood estimator**; as data accumulate, posterior, MAP, and MMSE converge.
- for a **Gaussian posterior** the mean equals the mode, so MMSE = MAP exactly — the case that makes the [[object.kalman-filter]] simultaneously the minimum-variance and the maximum-a-posteriori estimator.
- restricting MMSE to *linear* estimators θ̂ = Wx + b gives the **linear MMSE (LMMSE)** estimator, whose stationary-process / LTI form is the [[object.wiener-filter]] and whose recursive dynamical form is the [[object.kalman-filter]].
- the achievable variance of any unbiased estimator is floored by the [[object.cramer-rao-bound]]. **[confirmed]**

**lineage** — Bayesian squared-error and posterior-mode estimation grow from the Laplace–Gauss least-squares and inverse-probability tradition; the modern decision-theoretic framing (loss → optimal estimator) is in Harald Cramér, *Mathematical Methods of Statistics* (1946) [[source.cramer-1946]]. Codified for detection & estimation by Van Trees Part I (Bayesian estimation, ch. 2) [[source.van-trees-1968]] and Kay vol. I (ch. 10–12) [[source.kay-1993]]. **[confirmed]**

**sources** — Van Trees, *Detection, Estimation, and Modulation Theory, Part I* [[source.van-trees-1968]]; Kay, *Fundamentals of Statistical Signal Processing, Vol. I: Estimation Theory* [[source.kay-1993]]; Cramér, *Mathematical Methods of Statistics* [[source.cramer-1946]]. Cross-checked against Wikipedia "Minimum mean square error" and "Maximum a posteriori estimation." **[confirmed]**
