---
name: rices-theorem
type: object
object-type: theorem
essence: every non-trivial property of what a program computes (its function, not its text) is undecidable
field: ["[[field.computability-theory]]"]
status: proven
state: settled
attribution: Henry Gordon Rice (1953; dissertation 1951)
formalized: true
source: ["[[source.rice-1953]]", "[[source.sipser]]", "[[source.rogers-1967]]"]
depends-on: ["[[object.halting-problem]]", "[[object.recursive-and-recursively-enumerable-sets]]", "[[object.church-turing-thesis]]"]
used-by: []
---

**statement (plain)** — pick any property that depends only on what a program computes (its input-output behavior), not on how it is written, and that some programs have and some lack. Then no algorithm can decide, for an arbitrary program, whether it has that property. "Does this program compute the constant-zero function?" "Does it ever output 7?" — all undecidable. Only the two trivial properties (held by all programs, or by none) are decidable. It is the sweeping generalization of the halting problem.

**statement (formal)** — let `φ₀, φ₁, …` be an admissible numbering of the partial recursive functions. A set `P ⊆ ℕ` of indices is **extensional** (semantic) if `φ_m = φ_n ⟹ (m ∈ P ⟺ n ∈ P)`, and **non-trivial** if `P ≠ ∅` and `P ≠ ℕ`. Rice's theorem: every non-trivial extensional `P` is **undecidable**; equivalently, the only decidable index sets are `∅` and `ℕ`. **[confirmed]**

**status** — proven.

**proof** — reduction from the halting problem. WLOG the everywhere-undefined function's index `e₀ ∉ P` (else use the complement). Pick `a ∈ P`. Given `⟨M, w⟩`, build a machine that, on any input `x`, first simulates `M` on `w` and only then runs `φ_a(x)`; its index lies in `P` iff `M` halts on `w`. A decider for `P` would thus decide halting — contradiction. [[source.sipser]] [[source.rogers-1967]] "Algorithm = Turing machine" invokes the [[object.church-turing-thesis]]. **[confirmed]**

**lineage** — proved by **Henry Gordon Rice** in his 1951 Syracuse doctoral dissertation, published as "Classes of Recursively Enumerable Sets and Their Decision Problems," *Trans. Amer. Math. Soc.* 74(2) (1953), 358–366. [[source.rice-1953]] **[confirmed]**

**door** — Sipser, *Introduction to the Theory of Computation* (Rice's theorem appears in problems, §5) [[source.sipser]]; Rogers, *Theory of Recursive Functions and Effective Computability*, §5.2–5.3 [[source.rogers-1967]].

**sources** — [[source.rice-1953]] (origin); [[source.rices-theorem-wikipedia]] (Wikipedia — formal index-set statement, "only decidable index sets are ∅ and ℕ", paper citation); [[source.sipser]], [[source.rogers-1967]] (proof / codification). **[confirmed]**
