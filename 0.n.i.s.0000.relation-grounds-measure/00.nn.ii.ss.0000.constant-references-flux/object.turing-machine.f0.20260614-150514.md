---
name: turing-machine
type: object
object-type: definition
essence: a finite control reading and writing one symbol at a time on an unbounded tape — the formal model of an effective procedure
field: [field.computability-theory]
status: proven
state: float
attribution: Alan M. Turing (1936), as the "automatic machine" (a-machine)
formalized: true
source: [source.turing-1936, source.sipser, source.rogers-1967]
depends-on: []
used-by: [object.universal-turing-machine, object.halting-problem, object.church-turing-thesis, object.rices-theorem, object.recursive-and-recursively-enumerable-sets]
---

**statement (plain)** — a Turing machine is an abstract device with a finite set of internal states and an unbounded tape divided into cells, each holding one symbol from a finite alphabet. A read/write head sits over one cell. At each step the machine looks at its current state and the scanned symbol, then (by a fixed rule table) writes a symbol, moves the head one cell left or right, and switches to a new state. It captures, with nothing left vague, what it means to follow a mechanical procedure step by step.

**statement (formal)** — a (deterministic, one-tape) Turing machine is a tuple. The Stanford Encyclopedia gives the quadruple form `T = (Q, Σ, s, δ)` with `Q` a finite set of states, `Σ` a finite tape alphabet, `s ∈ Q` the start state, and transition function `δ : (Q × Σ) → (Σ × {L, R} × Q)`. [[source.turing-machine-sep]] Textbook presentations (Sipser) use the 7-tuple `M = (Q, Σ, Γ, δ, q₀, q_accept, q_reject)` distinguishing input alphabet `Σ` from tape alphabet `Γ ⊇ Σ ∪ {⊔}` and naming explicit accept/reject states, with `δ : Q × Γ → Q × Γ × {L, R}`. [[source.sipser]] The two are equivalent presentations of the same model. **[confirmed]**

**status** — proven (a definition; well-defined and standard).

**proof** — not a theorem; this is the founding definition. Its standing rests on (i) Turing's own analysis reducing any human "computer" working by fixed rules to such a device, and (ii) the confluence theorem that Turing-computable functions coincide with the λ-definable and general recursive functions — see [[object.church-turing-thesis]]. **[confirmed]**

**lineage** — introduced by Alan M. Turing in "On Computable Numbers, with an Application to the Entscheidungsproblem" (1936), where he called it an **automatic machine** or **a-machine**, contrasted with a "choice machine" whose next move can depend on an external operator. [[source.turing-1936]] [[source.turing-machine-sep]] The name "Turing machine" is due to later usage (Church's 1937 review of Turing's paper popularized it). **[confirmed]**

**door** — Sipser, *Introduction to the Theory of Computation*, ch. 3 [[source.sipser]]; Rogers, *Theory of Recursive Functions and Effective Computability* [[source.rogers-1967]]; Turing's 1936 paper itself [[source.turing-1936]].

**sources** — [[source.turing-1936]] (origin); [[source.turing-machine-sep]] (Stanford Encyclopedia of Philosophy, "Turing Machines" — tuple definition, a-machine); [[source.sipser]] (7-tuple textbook definition). **[confirmed]**
