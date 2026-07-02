---
name: likelihood-ratio-test
type: object
object-type: method
essence: form the ratio of the two hypotheses' likelihoods and compare it to a threshold — the optimal detector under both Bayes and Neyman–Pearson criteria
field: ["[[field.detection-estimation-theory]]", "[[field.mathematical-statistics]]"]
status: established
state: settled
attribution: likelihood-ratio criterion from Neyman & Pearson (1933); cast as the optimal signal detector / receiver by Peterson, Birdsall & Fox (1954)
formalized: true
source: ["[[source.neyman-pearson-1933]]", "[[source.peterson-birdsall-fox-1954]]", "[[source.van-trees-1968]]", "[[source.kay-1993]]"]
depends-on: ["[[object.neyman-pearson-lemma]]"]
used-by: ["[[object.matched-filter]]"]
---

**statement (plain)** — to decide whether a noisy observation came from "signal present" or "signal absent," compute how much more likely the data is under each hypothesis, take the ratio, and announce "present" when that ratio crosses a fixed level. This single test is the optimal detector under every reasonable design rule — minimize average cost (Bayes), or fix the false-alarm rate and maximize detection (Neyman–Pearson) — only the threshold changes.

**statement (formal)** — with observation x and hypotheses H₀ (noise) vs H₁ (signal + noise) having densities p(x∣H₀), p(x∣H₁), the likelihood ratio is
  Λ(x) = p(x∣H₁) / p(x∣H₀).
Decide H₁ iff Λ(x) > γ. The threshold γ is set by the operating criterion:
- **Bayes / minimum-risk:** γ = [(C₁₀ − C₀₀) P(H₀)] / [(C₀₁ − C₁₁) P(H₁)], i.e. costs times priors (the special case of 0/1 cost and equal priors gives the maximum-a-posteriori, then maximum-likelihood, detector).
- **Neyman–Pearson:** γ chosen so the false-alarm probability P_FA = P(Λ > γ ∣ H₀) equals a fixed α; this maximizes the detection probability P_D — optimality is exactly the [[object.neyman-pearson-lemma]]. **[confirmed]**
The detection/false-alarm trade-off traced as γ varies is the **receiver operating characteristic (ROC)**.

**status** — established (the unifying optimality results are proven theorems; "likelihood-ratio test" names the method built on them).

**method** — the test is *sufficient*: the scalar Λ(x) (or any monotone function such as the log-likelihood ratio ln Λ) carries all the information the data hold about the decision, collapsing a high-dimensional observation to one number compared with one threshold. For Gaussian observations the log-likelihood ratio is quadratic in x and, for a known signal in noise, reduces to a linear correlation against the signal template — the [[object.matched-filter]].

**lineage** — the likelihood-ratio criterion and its optimality for two simple hypotheses are due to Jerzy Neyman & Egon S. Pearson, "On the Problem of the Most Efficient Tests of Statistical Hypotheses," *Phil. Trans. R. Soc. A* 231 (1933):289–337 [[source.neyman-pearson-1933]] — see [[object.neyman-pearson-lemma]]. Its recasting as the optimal *signal detector* (a physical receiver whose output is the likelihood ratio, optimal under the Neyman–Pearson, ideal-observer/Siegert, and Woodward–Davies criteria alike), together with the ROC, is W. W. Peterson, T. G. Birdsall & W. C. Fox, "The theory of signal detectability," *Trans. IRE Prof. Group Inf. Theory* 4 (1954):171–212 [[source.peterson-birdsall-fox-1954]]. Codified for engineering in Van Trees Part I [[source.van-trees-1968]] and Kay vol. II [[source.kay-1993]]. **[confirmed]**

**sources** — Neyman & Pearson (1933) [[source.neyman-pearson-1933]]; Peterson, Birdsall & Fox (1954) [[source.peterson-birdsall-fox-1954]]; Van Trees, *Detection, Estimation, and Modulation Theory, Part I* [[source.van-trees-1968]]; Kay, *Fundamentals of Statistical Signal Processing, Vol. II: Detection Theory* [[source.kay-1993]]. Cross-checked against Wikipedia "Likelihood-ratio test" and "Detection theory." **[confirmed]**
