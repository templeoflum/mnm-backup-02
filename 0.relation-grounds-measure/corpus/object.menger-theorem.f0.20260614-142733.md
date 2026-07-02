---
name: menger-theorem
type: object
object-type: theorem
essence: the minimum cut separating two vertices equals the maximum number of disjoint paths between them — the duality at the root of connectivity
field: ["[[field.graph-theory]]"]
status: proven
state: settled
attribution: Karl Menger (1927)
formalized: true
source: ["[[source.menger-1927]]", "[[source.diestel-graph-theory]]"]
depends-on: ["[[object.graph]]"]
used-by: []
---

**statement (plain)** — the fewest things you must remove to cut all routes between two points equals the most routes you can run between them that never overlap. Sever a small set and you've blocked every path; pack many disjoint paths and you've forced the blocker to be large. The two numbers are always equal.

**statement (formal)** — let G be a finite [[object.graph]] and x, y two vertices.
- **Vertex version** (x, y non-adjacent): the minimum number of vertices whose removal separates x from y equals the maximum number of internally vertex-disjoint x–y paths.
- **Edge version:** the minimum number of edges whose removal separates x from y equals the maximum number of edge-disjoint x–y paths.
**[confirmed]**

**status** — proven.

**proof (reference)** — standard proofs are by induction on edges, or by the augmenting-path / flow argument. See [[source.diestel-graph-theory]], Ch. 3 (connectivity). **[confirmed]**

**lineage** — proved by **Karl Menger**, "Zur allgemeinen Kurventheorie," *Fundamenta Mathematicae* 10 (1927), pp. 96–115 [[source.menger-1927]], arising from his work in curve theory / topology. **[confirmed]**

**relation** — Menger's theorem is the unweighted, undirected seed of the **max-flow min-cut theorem** (Ford–Fulkerson, 1956), its weighted edge generalization, which is itself a special case of **linear-programming strong duality**. The infinite-graph extension is the Erdős–Menger conjecture, proved by Aharoni and Berger. **[confirmed]**

**door** — Diestel, *Graph Theory*, Ch. 3 [[source.diestel-graph-theory]].

**sources** — Menger 1927 (origin); Wikipedia "Menger's theorem" and Bondy–Murty §9.1 (both versions, max-flow min-cut relation, generalizations). ≥2 independent sources. **[confirmed]**
