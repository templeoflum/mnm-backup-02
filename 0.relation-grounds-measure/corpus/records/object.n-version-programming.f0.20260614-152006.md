---
name: n-version-programming
type: object
object-type: method
essence: build N independent versions of the same spec and vote on their outputs, betting that independent faults will not coincide
field: ["[[field.software-testing]]"]
status: established
state: settled
attribution: Liming Chen & Algirdas Avižienis, COMPSAC 77 (1977)
formalized: false
source: ["[[source.avizienis-chen-1977]]", "[[source.knight-leveson-1986]]"]
depends-on: ["[[object.test-oracle]]"]
used-by: ["[[object.failure-independence-critique]]"]
---

**statement (plain)** — instead of writing one program and trying to make it perfect, write several (N) programs to the same specification, each by a separate team using different methods, and run them together. A voter compares their outputs at runtime and takes the majority. The bet is that mistakes made independently won't be the same mistake, so the versions won't all fail on the same input — a faulty version gets outvoted.

**statement** — **N-version programming (NVP)**, a.k.a. multiversion / multiple-version dissimilar software: from one specification, N ≥ 2 functionally equivalent programs are developed independently (different teams, ideally different algorithms and languages); at execution a **decision/voting mechanism** (e.g. majority vote) adjudicates their outputs to mask the failure of a minority of versions. The reliability gain rests on the **independence conjecture** — that independent programming effort makes identical faults in two or more versions improbable. **[confirmed]**

**basis** — a fault-tolerance *method*, not a theorem ("formalized: false"). Its justification is the central conjecture stated by its authors: "the independence of programming efforts will greatly reduce the probability of identical software faults occurring in two or more versions of the program" [[source.avizienis-chen-1977]]. That conjecture is exactly what [[object.failure-independence-critique]] later puts to experiment. The voter is a runtime oracle surrogate — see [[object.test-oracle]] — deciding correctness by agreement rather than by a known answer. **[confirmed]**

**lineage** — introduced by **Liming Chen & Algirdas Avižienis**, "On the Implementation of N-Version Programming for Software Fault Tolerance During Execution," *Proceedings of IEEE COMPSAC 77*, pp. 149–155, presented Chicago, November 1977 [[source.avizienis-chen-1977]] **[confirmed]**. (Author order on the paper is Chen then Avižienis; the field name pairs Avižienis–Chen.) The methodology was elaborated in subsequent Avižienis work ("The N-Version Approach to Fault-Tolerant Software," IEEE TSE, 1985). The independence assumption was challenged by [[object.failure-independence-critique]] (Knight & Leveson, 1986) [[source.knight-leveson-1986]]. **[confirmed]**

**sources** — [[source.avizienis-chen-1977]], [[source.knight-leveson-1986]]. Cross-checked: Wikipedia "N-version programming" + CUHK Lyu *Handbook of Software Reliability* chap. 2 / scirp reference record (COMPSAC 77, pp. 149–155, 1977; the independence conjecture wording).
