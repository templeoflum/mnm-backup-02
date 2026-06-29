---
name: recursive-and-recursively-enumerable-sets
type: object
object-type: definition
essence: the two basic grades of solvability — decidable (recursive) vs merely listable / semidecidable (recursively enumerable)
field: [field.computability-theory]
status: established
state: settled
attribution: notions due to Kleene and Emil Post (Post 1944); complementation theorem credited to Post / Kleene
formalized: true
source: [source.kleene-1952, source.post-1936, source.rogers-1967, source.sipser]
depends-on: [object.turing-machine, object.church-turing-thesis, object.halting-problem]
used-by: [object.rices-theorem]
---

**statement (plain)** — a set of natural numbers is **recursive** (decidable) if some algorithm, given any number, always halts and correctly answers yes/no to membership. It is **recursively enumerable** (r.e. / semidecidable / Turing-recognizable) if some algorithm halts exactly on the members — it confirms membership but may run forever on non-members. Equivalently, an r.e. set is one whose members can be mechanically listed. Decidable is strictly stronger: every recursive set is r.e., but not conversely.

**statement (formal)** — for `A ⊆ ℕ`: `A` is **recursive** iff its characteristic function `χ_A` is total recursive (a Turing machine decides `A`). `A` is **recursively enumerable** iff `A = ∅` or `A = range(f)` for some total recursive `f`, equivalently `A = dom(φ_e)` for some `e` (some machine halts exactly on `A`). **Post's complementation theorem:** `A` is recursive iff both `A` and its complement `ℕ \ A` are r.e. The halting set `K = {e : φ_e(e)↓}` is r.e. but not recursive, so the inclusion recursive ⊊ r.e. is strict. **[confirmed]**

**status** — proven (definitions plus the complementation theorem and the strictness witness `K`).

**proof** — complementation theorem: if both `A` and `Ā` are r.e., dovetail their two semideciders on input `x`; exactly one halts, deciding `x ∈ A` — so `A` is recursive. The converse is immediate (a decider yields semideciders for both). [[source.rogers-1967]] [[source.sipser]] Strictness: `K` is r.e. (run `φ_e(e)`) but not recursive by the [[object.halting-problem]]. **[confirmed]**

**lineage** — the formal apparatus of recursive and recursively enumerable sets was developed by Stephen Kleene and Emil Post; Post's 1944 address ("Recursively enumerable sets of positive integers and their decision problems") is the standard origin of the systematic study, and Kleene's *Introduction to Metamathematics* (1952) codified the terminology. [[source.post-1936]] [[source.kleene-1952]] The complementation theorem is commonly attributed to Post (and Kleene). [[source.recursively-enumerable-wikipedia]] **[confirmed]** Note: the present source.post-1936 handle covers Post's 1936 origin contribution; his decisive r.e.-sets paper is **1944** — carried here as lineage pending a dedicated source. **[candidate, source granularity]**

**door** — Rogers, *Theory of Recursive Functions and Effective Computability*, ch. 5 [[source.rogers-1967]]; Sipser, §3.2 & §4 (decidable vs Turing-recognizable) [[source.sipser]].

**sources** — [[source.kleene-1952]] (codification of the notions); [[source.recursively-enumerable-wikipedia]] (Wikipedia, "Computably enumerable set" — definitions, Post's complementation theorem, `K` as r.e. non-recursive); [[source.rogers-1967]], [[source.sipser]] (proofs). **[confirmed]**
