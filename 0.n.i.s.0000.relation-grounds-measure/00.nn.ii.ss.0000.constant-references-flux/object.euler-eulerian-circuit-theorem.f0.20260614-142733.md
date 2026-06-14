---
name: euler-eulerian-circuit-theorem
type: object
object-type: theorem
essence: a connected graph has an Eulerian circuit iff every vertex has even degree — with the handshaking lemma, the founding result of graph theory
field: [field.graph-theory]
status: proven
state: float
attribution: Leonhard Euler, Seven Bridges of Königsberg, 1736 (presented 1735; printed 1741); sufficiency rigorously completed by Carl Hierholzer (1873)
formalized: true
source: [source.euler-1736, source.diestel-graph-theory]
depends-on: [object.graph]
used-by: []
---

**statement (plain)** — you can walk a network crossing every edge exactly once and return to where you started precisely when the network is connected and every junction has an even number of edges. Euler's original question — can you stroll Königsberg crossing each of its seven bridges once? — has the answer no, because all four land masses meet an odd number of bridges. A companion fact, the handshaking lemma, says the number of junctions with an odd number of edges is always even.

**statement (formal)** — let G be a connected [[object.graph]] (loops/multi-edges allowed).
- **Eulerian circuit:** a closed walk using every edge exactly once exists **iff every vertex has even degree**. An open Eulerian *trail* (not returning to start) exists iff exactly two vertices have odd degree.
- **Degree-sum formula (handshaking):** Σ_{v∈V} deg(v) = 2|E|.
- **Handshaking lemma:** the number of vertices of odd degree is even.
**[confirmed]**

**status** — proven.

**proof** — the degree-sum formula is double counting: count incident (vertex, edge) pairs by summing degrees, and again by noting each edge contributes 2; equality gives Σ deg(v) = 2|E|, whence an even number of odd-degree vertices. For the circuit: *necessity* is Euler's — each visit to a vertex uses two distinct edges, so every vertex needs even degree. *Sufficiency* (the converse — even degrees force a circuit) Euler asserted but did not fully prove; the first rigorous proof is Carl Hierholzer's (1873), by repeatedly extracting and splicing closed sub-trails. See [[source.diestel-graph-theory]], Ch. 1. **[confirmed]**

**lineage** — Euler solved the Königsberg problem and presented it to the St Petersburg Academy in 1735; the paper "Solutio problematis ad geometriam situs pertinentis" carries date 1736 and was printed 1741 [[source.euler-1736]]. The Königsberg graph has all four vertices of odd degree (degrees 3,3,3,5), so no Eulerian trail or circuit exists. This is universally regarded as the founding result of the [[field.graph-theory]] and a forerunner of topology (geometria situs). The even-degree-implies-circuit direction is credited to Hierholzer (published 1873, posthumously). **[confirmed]**

**door** — Diestel, *Graph Theory*, Ch. 1 [[source.diestel-graph-theory]].

**sources** — Euler 1736 (origin, necessity); Wolfram MathWorld "Königsberg Bridge Problem" and Wikipedia "Seven Bridges of Königsberg" / "Eulerian path" (statement, degrees, Hierholzer sufficiency); Wikipedia "Handshaking lemma" (degree-sum, double counting). ≥2 independent sources. **[confirmed]**
