---
name: gibbs-sampler
type: object
object-type: algorithm
essence: cycle through the variables, each time redrawing one from its conditional given all the others — a Metropolis–Hastings scheme with acceptance always 1
field: ["[[field.monte-carlo-methods]]"]
status: established
state: settled
attribution: introduced & named by Stuart Geman & Donald Geman (1984); popularized in statistics by Gelfand & Smith (1990)
formalized: true
source: ["[[source.geman-geman-1984]]", "[[source.gelfand-smith-1990]]", "[[source.robert-casella]]", "[[source.mackay-itila]]"]
depends-on: ["[[object.markov-chain-monte-carlo]]", "[[object.metropolis-hastings-algorithm]]"]
used-by: []
---

**statement (plain)** — to sample a joint distribution over several variables, update one variable at a time: hold all the others fixed and draw the chosen variable from its conditional distribution given those fixed values. Sweep through every variable, then repeat. Even though each step only touches one coordinate, the sequence of full states converges to the joint target. It works whenever the one-variable conditionals are easy to sample even when the joint is not.

**statement (formal)** — for a target π(x₁,…,x_d), one sweep updates each coordinate in turn:
  x_i^{(t+1)} ~ π( x_i | x_1^{(t+1)},…,x_{i-1}^{(t+1)}, x_{i+1}^{(t)},…,x_d^{(t)} ),
sampling from the **full conditional** of x_i given the current values of all other coordinates. The resulting Markov chain has π as its stationary distribution. Each such conditional update is a [[object.metropolis-hastings-algorithm]] step whose acceptance probability is identically 1, so the Gibbs sampler is a special case of Metropolis–Hastings. **[confirmed]**

**basis** — inherits its correctness from [[object.markov-chain-monte-carlo]]: each full-conditional update leaves π invariant, and a full sweep (or random-scan) composition of π-invariant kernels is itself π-invariant; under mild conditions the chain is ergodic. The name honors J. W. Gibbs, by analogy with the Gibbs distribution in statistical physics. **[confirmed]**

**lineage** — introduced and named by **Stuart Geman & Donald Geman** (brothers — a single 1984 paper, not two authors of separate works), "Stochastic Relaxation, Gibbs Distributions, and the Bayesian Restoration of Images," *IEEE TPAMI* PAMI-6 (1984):721–741, for Bayesian image restoration [[source.geman-geman-1984]]. Brought into mainstream statistics by Gelfand & Smith, *JASA* 85 (1990):398–409 [[source.gelfand-smith-1990]]. Distinct from Geman & Geman vs. the unrelated Metropolis (1953) / Hastings (1970) lineage. **[confirmed]**

**sources** — [[source.geman-geman-1984]], [[source.gelfand-smith-1990]]; door texts [[source.robert-casella]], [[source.mackay-itila]]; cross-checked against Wikipedia "Gibbs sampling." **[confirmed]**
