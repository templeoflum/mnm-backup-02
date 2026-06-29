---
name: np-completeness-cook-levin-theorem
type: object
object-type: theorem
essence: SAT is NP-complete — every NP problem reduces to Boolean satisfiability; the first complete problem
field: [field.algorithms, field.computability-theory]
status: proven
state: settled
attribution: proved independently by Stephen Cook (1971) and Leonid Levin (1973); breadth shown by Richard Karp (1972)
formalized: true
source: [source.cook-1971, source.levin-1973, source.karp-1972]
depends-on: [object.landau-notation]
used-by: [object.p-vs-np]
---

**statement (plain)** — there is a single problem — Boolean satisfiability (SAT), "is there an assignment of true/false to variables making this logical formula true?" — that is at least as hard as every problem in NP. Any NP problem can be rephrased as a SAT instance in polynomial time. SAT is therefore "NP-complete": in NP, and as hard as anything in NP.

**statement (formal)** — a language L is *NP-complete* if (i) L ∈ NP and (ii) every L′ ∈ NP is polynomial-time many-one reducible to L (L is NP-hard). **Cook–Levin theorem:** SAT (the set of satisfiable Boolean formulas) is NP-complete; the restriction 3-SAT is likewise NP-complete. **[confirmed]**

**status** — proven (1971/1973).

**proof / method** — given any L ∈ NP, decided by a nondeterministic Turing machine M in time p(n), and an input x, one constructs in polynomial time a Boolean formula φ_{M,x} whose variables encode the entire computation tableau — tape contents, head position, and machine state at each of the p(n) steps. Clauses enforce a valid start, valid transitions, and an accepting end. Then φ_{M,x} is satisfiable iff M accepts x. Hence L ≤_p SAT. **[confirmed]**

**lineage** — Stephen Cook proved SAT (and the tautology/theorem-proving problem) complete for NP in 1971 [[source.cook-1971]]; Leonid Levin independently obtained the result for universal search problems, published 1973 [[source.levin-1973]] (circulated c. 1971–72). Hence the joint name "Cook–Levin theorem." **[confirmed]** Richard Karp's 1972 "Reducibility Among Combinatorial Problems" reduced SAT to 21 natural combinatorial/graph problems, showing NP-completeness is pervasive [[source.karp-1972]]. **[confirmed]**

**method note** — NP-completeness gives the lever for [[object.p-vs-np]]: SAT ∈ P would force P = NP. Hardness for a new problem is shown by reducing a known NP-complete problem to it.

**door** — [[source.clrs]] ch. 34; [[source.erickson-algorithms]] (NP-hardness); [[source.knuth-1968]] (TAOCP) for the broader algorithmic context.

**sources** — [[source.cook-1971]], [[source.levin-1973]], [[source.karp-1972]]; Wikipedia "Cook–Levin theorem"; Karp's 21 NP-complete problems.
