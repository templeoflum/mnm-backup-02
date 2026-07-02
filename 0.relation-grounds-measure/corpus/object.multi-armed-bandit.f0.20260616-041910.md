---
name: multi-armed-bandit
type: object
object-type: model
essence: a sequential decision model in which an agent repeatedly chooses among arms of unknown reward distribution to maximize cumulative reward
field: ["[[field.explore-exploit-cognitive-search]]"]
status: established
state: settled
attribution: Robbins (1952); regret/index theory developed by Gittins (1979) and Lai & Robbins (1985)
formalized: 1952
source: ["[[source.robbins-1952]]", "[[source.gittins-1979]]", "[[source.lattimore-szepesvari-2020]]"]
depends-on: ["[[object.explore-exploit-tradeoff]]"]
used-by: ["[[object.gittins-index]]"]
---

**statement (plain)** — a decision maker faces K "arms" (actions), each returning rewards from a fixed but unknown distribution. At each step the agent pulls one arm, observes its reward, and updates its beliefs; the goal is to maximise total reward (equivalently, minimise regret against always pulling the best arm) over a horizon. The model is the canonical formalisation of the explore–exploit trade-off.

**statement (formal)** — at time t the agent selects arm A_t and receives reward X_{A_t,t}. Regret after n steps is R_n = n·μ* − E[Σ_{t=1}^n X_{A_t,t}], where μ* is the mean of the best arm. Optimal policies make R_n grow as slowly as possible.

**basis** — the two-armed form is introduced as the sequential-design problem [[source.robbins-1952]] **[confirmed]**. Gittins gives an optimal index solution for the discounted-reward family [[source.gittins-1979]], and the model with its regret theory (lower bounds, UCB, Thompson sampling, index methods) is treated systematically in [[source.lattimore-szepesvari-2020]] **[confirmed]**.

**limits** — the classic stochastic bandit assumes independent arms with stationary distributions and no context; extensions (contextual, adversarial, restless, non-stationary bandits) relax these and generally lack the clean index optimality of the discounted independent case.
