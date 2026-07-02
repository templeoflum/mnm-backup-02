---
name: markov-chain-monte-carlo
type: object
object-type: method
essence: sample a hard distribution by running a Markov chain built to have that distribution as its long-run equilibrium
field: ["[[field.monte-carlo-methods]]"]
status: established
state: settled
attribution: Metropolis et al. (1953); generalized by Hastings (1970); convergence rests on Markov-chain ergodic theory
formalized: true
source: ["[[source.metropolis-1953]]", "[[source.hastings-1970]]", "[[source.robert-casella]]", "[[source.mackay-itila]]"]
depends-on: ["[[object.monte-carlo-integration]]"]
used-by: ["[[object.metropolis-hastings-algorithm]]", "[[object.gibbs-sampler]]"]
---

**statement (plain)** — when you cannot draw independent samples from a complicated distribution directly, build a step-by-step random walk (a Markov chain) whose rules are designed so that, after it runs long enough, the places it visits are distributed exactly like the target. Then treat the visited states as (correlated) samples and average over them. The trick converts "sample from π" into "design a chain that settles to π."

**statement (formal)** — to sample from a target distribution π, construct a Markov chain with transition kernel P having π as its **stationary (invariant) distribution**: ∫ π(dx) P(x, dy) = π(dy). If the chain is **ergodic** (irreducible, aperiodic, positive recurrent / Harris recurrent), its marginal law converges to π regardless of the start state, and the **ergodic theorem** gives (1/N) Σ_{t=1}^N f(X_t) → E_π[f] almost surely. A sufficient construction condition is **detailed balance** (reversibility): π(x) P(x, y) = π(y) P(y, x). **[confirmed]**

**basis** — combines [[object.monte-carlo-integration]] (averaging samples to estimate expectations) with Markov-chain limit theory: existence/uniqueness of the stationary distribution plus an ergodic theorem (a Markov-chain strong law). The samples are no longer independent, so the variance of the average involves autocorrelation, but consistency still holds. **[confirmed]**

**lineage** — the founding instance is the 1953 Metropolis algorithm for equilibrium statistical mechanics [[source.metropolis-1953]]; W. K. Hastings (1970) generalized it and framed MCMC for general statistical use [[source.hastings-1970]]; the [[object.gibbs-sampler]] (Geman & Geman 1984) and its 1990 statistical popularization (Gelfand & Smith) drove MCMC's spread. "MCMC" as an umbrella term postdates these founding methods. **[confirmed]**

**sources** — [[source.metropolis-1953]], [[source.hastings-1970]]; door texts [[source.robert-casella]], [[source.mackay-itila]]; cross-checked against the Robert & Casella MCMC-history account and Wikipedia. **[confirmed]**
