---
name: metropolis-hastings-algorithm
type: object
object-type: algorithm
essence: propose a move, accept it with a probability that uses only the unnormalized target — the resulting chain has the target as its equilibrium
field: [field.monte-carlo-methods]
status: established
state: float
attribution: Metropolis, Rosenbluth, Rosenbluth, Teller & Teller (1953, symmetric case); generalized to asymmetric proposals by W. K. Hastings (1970)
formalized: true
source: [source.metropolis-1953, source.hastings-1970, source.robert-casella, source.mackay-itila]
depends-on: [object.markov-chain-monte-carlo]
used-by: [object.gibbs-sampler]
---

**statement (plain)** — from the current state, propose a new state at random. Compute how much more (or less) probable the proposed state is under the target, with a correction if your proposal mechanism is lopsided. Accept the proposal with that probability; otherwise stay put. Repeating this builds a chain that, run long enough, visits states in proportion to the target — and you only ever need the target up to an unknown normalizing constant.

**statement (formal)** — given target π (known up to a constant) and proposal density g(·|x), from state x draw a candidate x' ~ g(·|x) and accept it with probability
  α(x, x') = min{ 1, [π(x') g(x|x')] / [π(x) g(x'|x)] }.
If accepted, move to x'; else remain at x. The chain satisfies **detailed balance** with respect to π, so π is its stationary distribution. The **Metropolis** special case takes a symmetric proposal (g(x'|x) = g(x|x')), reducing α to min{1, π(x')/π(x)}. **[confirmed]**

**basis** — a constructive way to meet the reversibility condition of [[object.markov-chain-monte-carlo]]: the acceptance rule is exactly what makes π(x)P(x,x') = π(x')P(x',x) hold, forcing π to be stationary. Normalizing constants cancel in the ratio, which is why only the unnormalized target is needed. **[confirmed]**

**lineage** — the symmetric algorithm is Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller & E. Teller, "Equation of State Calculations by Fast Computing Machines" (1953) [[source.metropolis-1953]]. W. K. Hastings, *Biometrika* 57 (1970):97–109, generalized it to asymmetric proposals by adding the proposal ratio g(x|x')/g(x'|x), and brought it to statistics [[source.hastings-1970]]. **[confirmed]** Hastings (1970) and Metropolis et al. (1953) are distinct papers — the combined name credits both.

**sources** — [[source.metropolis-1953]], [[source.hastings-1970]]; door texts [[source.robert-casella]], [[source.mackay-itila]]; cross-checked against Wikipedia "Metropolis–Hastings algorithm" and the Hastings biography (probability.ca). **[confirmed]**
