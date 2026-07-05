---
name: minimum-generating-set-problem
type: object
object-type: concept
essence: computing d(G), the least number of generators of a finite group — solvable in polynomial time (Lucchini–Thakkar 2024)
field: ["[[field.geometric-group-theory]]"]
status: proven
state: settled
attribution: polynomial-time algorithm Lucchini–Thakkar (2024); Arvind–Torán DSPACE(log²n)
formalized: true
source: ["[[source.lucchini-thakkar-2024]]"]
depends-on: []
used-by: []
---

**statement (plain)** — what is the smallest number of elements you need to build a given finite group? Call it d(G). Naively you would test enormous numbers of subsets. Lucchini and Thakkar showed that, once a chief series is known, only a polynomially bounded family of subsets must be tested — so d(G) can be computed in polynomial time.

**statement (formal)** — d(G) = min{|S| : ⟨S⟩ = G}. Given a chief series of a finite group G, at most |G|^{13/5} subsets need be tested; hence the minimum generating set problem is in polynomial time (Lucchini–Thakkar 2024). Arvind & Torán: the problem is in DSPACE(log²n). **[confirmed]**

**basis** — a computational counterpart to the generation theorems (cf. the two-generator theorem for mapping class groups); connects generation to complexity theory.
