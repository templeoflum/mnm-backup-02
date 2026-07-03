---
name: cayley-graph
type: object
object-type: definition
essence: the graph encoding a group with a chosen generating set — one vertex per element, an edge x→xs for each generator s; connected iff the set generates
field: ["[[field.geometric-group-theory]]"]
status: established
state: float
attribution: A. Cayley (1878)
formalized: true
source: ["[[source.delaharpe-2000]]"]
depends-on: []
used-by: ["[[object.word-problem-for-groups]]"]
---

**statement (plain)** — draw a dot for every element of a group, and from each dot draw an arrow to what you get by multiplying by each chosen generator. The resulting graph is a picture of the group. It is connected exactly when your chosen elements generate the group — so generation becomes a visible, geometric property, and the graph's large-scale shape is what geometric group theory studies.

**statement (formal)** — for a group G with generating set S, the Cayley graph Cay(G,S) has vertex set G and a directed edge g → gs for each g ∈ G, s ∈ S. Cay(G,S) is connected iff ⟨S⟩ = G; G acts on it by left multiplication (vertex-transitively). **[confirmed]**

**basis** — the foundational object linking a group to a metric space (word metric); quasi-isometry class of the Cayley graph is a group invariant (independent of finite S). Door: de la Harpe.
