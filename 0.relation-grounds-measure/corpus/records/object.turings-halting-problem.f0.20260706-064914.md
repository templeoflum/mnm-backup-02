---
name: turings-halting-problem
type: object
object-type: theorem
essence: no algorithm can decide, for every program and input, whether that program halts — the first proof of a concrete, well-defined problem that no computer can solve
field: ["[[field.computability-theory]]"]
status: proven
state: settled
attribution: Alan Turing (1936)
formalized: false
source: ["[[source.turing-1936]]"]
depends-on: []
used-by: []
---

**statement (plain)** — Suppose a procedure H could decide, for any program P and input, whether P halts. Build a program D that asks H about itself and then loops iff H says it halts (and halts iff H says it loops). H's verdict on D is wrong either way — so H cannot exist.

**statement (framework)** — a **proven** undecidability result, established by diagonalization, defining the limits of algorithmic computation; equivalent to the unsolvability of the Entscheidungsproblem and foundational for computer science. Kin to Gödel and Cantor. Proven.

**basis** — Turing's "On Computable Numbers" (1936) [[source.turing-1936]]. **[confirmed as attribution]**

**sources** — [[source.turing-1936]].
