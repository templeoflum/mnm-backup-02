---
name: gittins-index
type: object
object-type: theorem
essence: for a family of independent discounted-reward bandits, an optimal policy plays at each step the arm of highest dynamic allocation (Gittins) index
field: ["[[field.explore-exploit-cognitive-search]]"]
status: proven
state: settled
attribution: Gittins & Jones (1974); definitive account Gittins (1979)
formalized: 1974
source: ["[[source.gittins-1979]]", "[[source.lattimore-szepesvari-2020]]"]
depends-on: ["[[object.multi-armed-bandit]]"]
used-by: []
aliases: ["object.gittins-index"]
---

**statement (plain)** — for the discounted multi-armed bandit with independent arms (only the played arm changes state), the otherwise high-dimensional optimal policy decomposes: assign each arm a scalar index computable from that arm alone, and always play the arm of highest current index. This is the Gittins index theorem; it breaks the curse of dimensionality for this problem class.

**statement (formal)** — for arm i in state x with discount factor β, the Gittins index is
  ν_i(x) = sup_{τ>0}  E[ Σ_{t=0}^{τ-1} β^t R_i(x_t) | x_0 = x ] / E[ Σ_{t=0}^{τ-1} β^t | x_0 = x ],
the supremum over stopping times τ of the discounted reward rate. The index policy (play argmax_i ν_i) maximises expected total discounted reward.

**proof/derivation** — established by Gittins and Jones (1974) and given its definitive treatment with the dynamic-allocation-index framework in [[source.gittins-1979]] **[confirmed as attribution]**. Multiple independent proofs exist (Gittins's interchange argument, Weber's "fair charge / prevailing charge" argument, Whittle's Lagrangian/restart formulation), all presented in [[source.lattimore-szepesvari-2020]] **[confirmed]**.

**limits** — optimality requires independent arms, geometric discounting, and that only the active arm evolves; it does not hold in general for finite-horizon (undiscounted), restless, or arm-acquiring bandits, where the index is at best a heuristic.
