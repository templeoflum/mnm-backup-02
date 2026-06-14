---
name: dynamic-programming
type: object
object-type: concept
essence: solve once, remember — break a problem into overlapping subproblems and reuse their solutions via the principle of optimality
field: [field.algorithms, field.numerical-optimization]
status: proven
state: float
attribution: Richard Bellman (1950s, RAND); named and codified in Bellman, "Dynamic Programming" (1957)
formalized: true
source: [source.bellman-1957, source.clrs]
depends-on: [object.landau-notation]
used-by: []
---

**statement (plain)** — a method for problems that break into smaller subproblems which recur. Instead of resolving the same subproblem over and over, solve each once and store the answer, then build up. It applies when a problem has *optimal substructure* (an optimal solution is built from optimal solutions of its parts) and *overlapping subproblems* (the same parts come up repeatedly). If the parts don't overlap, plain divide-and-conquer suffices instead.

**statement (formal)** — let a problem's optimal value satisfy a recurrence over states, e.g. the **Bellman equation** V(s) = opt_a { r(s,a) + V(s′) } where s′ is the state reached by decision a. The **principle of optimality**: an optimal policy has the property that, whatever the initial state and first decision, the remaining decisions form an optimal policy for the resulting state. Solving the recurrence with memoization (top-down) or tabulation (bottom-up) over the state space yields the global optimum in time proportional to (number of states) × (work per transition). **[confirmed]**

**status** — proven (an established method; the principle of optimality is provable for problems with the stated substructure).

**method** — two implementations of the same idea: (i) *top-down memoization* — recurse, caching each subproblem's result; (ii) *bottom-up tabulation* — fill a table from smallest subproblems upward. Both turn an exponential naive recursion into polynomial time when subproblems overlap. Classic instances: shortest paths (Bellman–Ford, Floyd–Warshall), edit distance, knapsack, matrix-chain order, optimal binary search trees. **[confirmed]**

**lineage** — Richard Bellman developed the theory at the RAND Corporation in the early 1950s; key publications are "The Theory of Dynamic Programming," *Bull. Amer. Math. Soc.* 60 (1954), and the monograph *Dynamic Programming*, Princeton University Press, 1957 [[source.bellman-1957]], which names the method and states the principle of optimality. By Bellman's own account the name "dynamic programming" was chosen partly to shield mathematical research from a research-averse Defense Secretary. **[confirmed]** **[candidate, attribution: the naming anecdote is from Bellman's autobiography — self-reported]**

**door** — [[source.clrs]] ch. 14 (dynamic programming); [[source.erickson-algorithms]] (dynamic programming chapter).

**sources** — [[source.bellman-1957]], [[source.clrs]]; Wikipedia "Dynamic programming"; Bellman, *Bull. AMS* 60 (1954).
