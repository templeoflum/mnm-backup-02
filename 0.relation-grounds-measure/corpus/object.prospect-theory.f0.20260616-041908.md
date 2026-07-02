---
name: prospect-theory
type: object
object-type: model
essence: a descriptive theory of choice under risk — value is reckoned over gains and losses from a reference point, with loss aversion and nonlinear probability weighting
field: ["[[field.choice-architecture-behavioral-economics]]"]
status: established
state: settled
attribution: Daniel Kahneman & Amos Tversky (1979); cumulative version Tversky & Kahneman (1992)
formalized: true
source: ["[[source.kahneman-tversky-1979]]", "[[source.kahneman-2011]]"]
depends-on: []
used-by: []
---

**statement (plain)** — people do not evaluate outcomes by final wealth (as expected-utility theory assumes) but by gains and losses relative to a reference point. Losses loom larger than equal-sized gains (loss aversion); the value function is concave for gains and convex for losses (diminishing sensitivity); and people overweight small probabilities and underweight moderate-to-large ones. These produce risk-aversion for gains, risk-seeking for losses, and the certainty effect.

**statement (formal)** — choice over a prospect is V = Σ π(pᵢ)·v(xᵢ), where v is a value function defined over deviations x from a reference point (v concave for x>0, convex for x<0, steeper for x<0 so v(−x) < −v(x)), and π is a decision-weight function nonlinear in probability (π(p) > p for small p). In the 1992 cumulative version, weights are applied to cumulative rather than individual probabilities, extending the model to many outcomes and ranking it as rank-dependent.

**basis** — empirical and formal. Support: built to explain robust violations of expected utility (Allais paradox, the common-ratio and common-consequence effects, the reflection effect, the isolation effect) observed in choice experiments [[source.kahneman-tversky-1979]]; the value/weighting shapes are recovered repeatedly and underpin endowment, framing, and default effects synthesized in [[source.kahneman-2011]]. Limits: parameters (reference point, loss-aversion coefficient λ, weighting curvature) are estimated, not derived; the reference point is sometimes ambiguous; effect sizes attenuate with experience, market discipline, and incentives. **[confirmed]**

**sources** — [[source.kahneman-tversky-1979]] (origin), [[source.kahneman-2011]] (synthesis). Verified against *Econometrica* record, Wikipedia "Prospect theory," and the Econometric Society listing. **[confirmed]**
