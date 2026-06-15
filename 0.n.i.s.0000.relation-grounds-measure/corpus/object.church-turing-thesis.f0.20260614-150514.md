---
name: church-turing-thesis
type: object
object-type: thesis
essence: the effectively calculable functions are exactly the Turing-computable ones — an unprovable identification of an informal notion with a formal one
field: [field.computability-theory]
status: established
state: verified
attribution: Alonzo Church (1936) and Alan M. Turing (1936) independently; named by Stephen Kleene (1952)
formalized: false
source: [source.church-1936, source.turing-1936, source.church-turing-sep, source.kleene-1952]
depends-on: [object.turing-machine]
used-by: [object.halting-problem, object.rices-theorem, object.recursive-and-recursively-enumerable-sets]
---

**statement (plain)** — every function that can be computed by any effective (mechanical, rule-of-thumb) procedure can be computed by a Turing machine, and vice versa. It says the intuitive idea of "what an algorithm can do" is captured exactly by the Turing-machine model. It is a thesis, not a theorem: it links a precise mathematical class to an informal notion, so it cannot be proved — only supported by evidence and falsified by a counterexample (none has been found).

**statement (formal)** — Church's form (1936): the notion of an effectively calculable function of positive integers is to be identified with the notion of a **recursive** (equivalently **λ-definable**) function. [[source.church-1936]] [[source.church-turing-sep]] Turing's form (1936): the functions computable by his machines (L.C.M.s) are exactly those a human computer could obtain by a "purely mechanical" / "rule of thumb" process. [[source.turing-1936]] [[source.church-turing-sep]] The two forms agree because λ-definable = general recursive = Turing-computable, all proven coextensive. **[confirmed]**

**status** — established (a thesis, **not a formal theorem**); it cannot be proved, since it equates a precisely delimited class with a "hitherto vaguely conceived totality." Universally accepted, never refuted.

**proof** — no proof exists or can exist in the usual sense. What is provable, and proved, is the **equivalence of the formalisms**: Church and Kleene showed λ-definability = general recursiveness; Turing showed Turing-computability = λ-definability. This confluence of independently-motivated models is the principal evidence for the thesis. **[confirmed]**

**lineage** — advanced independently in 1936 by Alonzo Church ("An Unsolvable Problem of Elementary Number Theory") [[source.church-1936]] and Alan M. Turing ("On Computable Numbers") [[source.turing-1936]]; Church published first. Stephen C. Kleene introduced the name "Church's thesis" (1952, *Introduction to Metamathematics*) and later "Church–Turing thesis." [[source.kleene-1952]] [[source.church-turing-sep]] Some authors prefer "Turing–Church thesis." **[confirmed]**

**door** — Stanford Encyclopedia, "The Church–Turing Thesis" [[source.church-turing-sep]]; Sipser, *Introduction to the Theory of Computation*, §3.3 [[source.sipser]].

**sources** — [[source.church-1936]], [[source.turing-1936]] (origins); [[source.church-turing-sep]] (SEP — statements, status as thesis, equivalence, Kleene's naming); [[source.kleene-1952]] (codification, naming). **[confirmed]**
