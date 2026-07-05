---
name: word-problem-for-groups
type: object
object-type: concept
essence: the algorithmic question of whether a word in the generators equals the identity — undecidable in general (Novikov–Boone), linear-time for hyperbolic groups (Gromov)
field: ["[[field.geometric-group-theory]]"]
status: proven
state: settled
attribution: posed M. Dehn (1911); undecidable Novikov (1955), Boone (1958); linear for hyperbolic Gromov (1987)
formalized: true
source: ["[[source.novikov-1955]]", "[[source.boone-1958]]", "[[source.gromov-1987]]"]
depends-on: ["[[object.cayley-graph]]"]
used-by: []
---

**statement (plain)** — given a group by generators and relations, and handed a product of generators, can a machine always decide whether it multiplies out to the identity? Dehn asked it in 1911. Novikov and Boone proved: no — there are finitely presented groups where no algorithm can decide. Yet for the well-behaved (word-hyperbolic) groups, Gromov showed it is not just decidable but linear-time.

**statement (formal)** — for a finite presentation ⟨S | R⟩, the word problem asks for an algorithm deciding, for w ∈ (S ∪ S⁻¹)*, whether w =_G 1. It is undecidable for some finitely presented groups (Novikov 1955, Boone 1958); solvable in linear time for word-hyperbolic groups (Gromov 1987). **[confirmed]**

**basis** — one of Dehn's three decision problems (word, conjugacy, isomorphism); the founding negative result of combinatorial/geometric group theory. Reachability of the identity in the Cayley graph.
