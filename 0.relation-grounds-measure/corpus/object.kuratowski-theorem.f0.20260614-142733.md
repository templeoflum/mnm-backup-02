---
name: kuratowski-theorem
type: object
object-type: theorem
essence: a graph is planar iff it contains no subdivision of K5 or K3,3 — the forbidden-subgraph test for planarity
field: ["[[field.graph-theory]]"]
status: proven
state: settled
attribution: Kazimierz Kuratowski (1930); independently/unpublished Frink–Smith (1930) and reportedly Pontryagin (ca. 1927); minor form due to Wagner (1937)
formalized: true
source: ["[[source.kuratowski-1930]]", "[[source.diestel-graph-theory]]"]
depends-on: ["[[object.graph]]"]
used-by: []
---

**statement (plain)** — a network can be drawn in the plane without any edges crossing exactly when it does not secretly contain one of just two troublemakers: the five-point complete graph K5, or the "three houses, three utilities" graph K3,3 — even allowing extra dots placed along their edges. Two small obstructions decide planarity for every graph.

**statement (formal)** — a finite [[object.graph]] G is planar **iff** G contains no subgraph that is a *subdivision* (homeomorph) of K₅ (complete graph on 5 vertices) or K₃,₃ (complete bipartite graph on 3+3 vertices). A subdivision replaces edges by internally-disjoint paths. **[confirmed]**

**status** — proven.

**proof (reference)** — necessity is easy (K₅ and K₃,₃ are themselves non-planar by an Euler-formula count, and subdivision/subgraph preserves non-planarity); sufficiency — that any non-planar graph must contain such a subdivision — is the substance. See [[source.diestel-graph-theory]], Ch. 4. The equivalent *minor* form (Wagner 1937): G is planar iff it has neither K₅ nor K₃,₃ as a minor; for these two graphs the subdivision and minor versions coincide. **[confirmed]**

**lineage (contested)** — published by **Kazimierz Kuratowski**, "Sur le problème des courbes gauches en topologie," *Fundamenta Mathematicae* 15 (1930) [[source.kuratowski-1930]]. **Orrin Frink and Paul A. Smith** obtained it independently in 1930 but did not publish; **Karl Menger** independently handled the cubic case (1930); in Soviet literature it is the "Pontryagin–Kuratowski theorem," **Lev Pontryagin** reportedly having a proof ca. 1927 that he never published. Published priority and the standard name are Kuratowski's. **[confirmed]**

**door** — Diestel, *Graph Theory*, Ch. 4 (planarity) [[source.diestel-graph-theory]].

**sources** — Kuratowski 1930 (origin); Wikipedia "Kuratowski's theorem" and "Wagner's theorem," plus Bondy–Murty §10.5 (statement, subdivision form, contested attribution, minor-form equivalence). ≥2 independent sources. **[confirmed]**
