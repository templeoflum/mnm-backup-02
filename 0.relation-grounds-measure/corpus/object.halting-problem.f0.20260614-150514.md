---
name: halting-problem
type: object
object-type: theorem
essence: no algorithm can decide, for every program-input pair, whether the program eventually halts
field: ["[[field.computability-theory]]"]
status: proven
state: settled
attribution: undecidability core proved by Turing (1936) and Church (1936); the name "halting problem" and modern framing due to Martin Davis (1958)
formalized: true
source: ["[[source.turing-1936]]", "[[source.church-1936]]", "[[source.davis-1958]]", "[[source.sipser]]", "[[source.rogers-1967]]"]
depends-on: ["[[object.turing-machine]]", "[[object.church-turing-thesis]]", "[[object.universal-turing-machine]]"]
used-by: ["[[object.rices-theorem]]", "[[object.recursive-and-recursively-enumerable-sets]]"]
---

**statement (plain)** — there is no general procedure that, given any program and any input, always correctly answers "does this program eventually stop?" Some such questions you can answer case by case, but no single algorithm answers all of them. The reason is self-reference: if such a decider existed, you could build a program that asks the decider about itself and then does the opposite, which is a contradiction.

**statement (formal)** — let `⟨M⟩` encode a Turing machine `M`. The halting set `K₀ = { ⟨M, w⟩ : M halts on input w }` is **not recursive (undecidable)**: no Turing machine computes its characteristic function. Equivalently, the diagonal halting set `K = { ⟨M⟩ : M halts on input ⟨M⟩ }` is undecidable. Proof by contradiction/diagonalization: assume a decider `H`; build `D` that on input `⟨M⟩` halts iff `H` says `M` does not halt on `⟨M⟩`; running `D` on `⟨D⟩` halts iff it does not. **[confirmed]**

**status** — proven (undecidable).

**proof** — the contradiction-via-diagonalization argument above is standard (Sipser Thm 4.11; Rogers ch. 1). [[source.sipser]] [[source.rogers-1967]] The construction presupposes that programs can be encoded and run as data — i.e. the [[object.universal-turing-machine]] — and that "algorithm" means Turing machine — i.e. the [[object.church-turing-thesis]]. **[confirmed]**

**lineage** — historically contested in naming, not in substance. Turing's 1936 paper proved the undecidability of the **Entscheidungsproblem** and of a "printing"/"circle-free" problem computably equivalent to halting, but did **not** state "the halting problem" nor give the now-standard self-referential proof. [[source.turing-1936]] Church (1936) independently proved undecidability for the λ-calculus. [[source.church-1936]] The term **"halting problem"** and its modern presentation were introduced by **Martin Davis** in *Computability and Unsolvability* (1958; he had used the term in lectures from c. 1952). [[source.davis-1958]] **[confirmed]** Scholarly note: recent history-of-logic work (Hamkins–Hudelson 2024) argues the self-referential proof should be attributed to the post-Turing tradition, not to Turing's text itself — carried here as lineage. **[candidate, attribution of the modern proof]**

**door** — Sipser, *Introduction to the Theory of Computation*, §4.2 [[source.sipser]]; Rogers, ch. 1 [[source.rogers-1967]].

**sources** — [[source.turing-1936]], [[source.church-1936]] (origin of the undecidability); [[source.davis-1958]] (the name and modern framing); [[source.sipser]] (standard proof). **[confirmed]**
