---
name: four-color-theorem
type: object
object-type: theorem
essence: every planar map can be colored with four colors so no two adjacent regions share one — the first major theorem proved by computer
field: ["[[field.graph-theory]]"]
status: proven
state: settled
attribution: conjectured Francis Guthrie (1852); proved Kenneth Appel & Wolfgang Haken (1976, published 1977, computer-assisted); formally verified in Coq by Georges Gonthier (2005)
formalized: true
source: ["[[source.appel-haken-1977]]", "[[source.diestel-graph-theory]]"]
depends-on: ["[[object.graph]]"]
used-by: []
aliases: ["object.four-color-theorem"]
---

**statement (plain)** — any map drawn in the plane can be colored with only four colors so that no two regions sharing a border get the same color. In graph terms: the regions become vertices, adjacency becomes edges, and any graph that can be drawn without crossings needs at most four colors.

**statement (formal)** — every planar [[object.graph]] is 4-colorable: its vertices can be assigned colors from a set of four so that adjacent vertices differ. Equivalently, the chromatic number of any planar graph is ≤ 4. (Regions meeting only at a point are not "adjacent.") **[confirmed]**

**status** — proven (computer-assisted).

**proof** — Appel and Haken's proof [[source.appel-haken-1977]] is by contradiction on a minimal counterexample, via two ingredients: an *unavoidable set* of configurations (one must appear in any triangulation) and *reducibility* (each such configuration cannot occur in a minimal counterexample). The unavoidable set was produced by a *discharging* argument; reducibility of its ~1,936 configurations (later trimmed to ~1,476/1,482) was checked by computer over roughly 1,200 hours — the first major theorem to depend essentially on machine computation, raising the question of surveyable proof. In **2005 Georges Gonthier** produced a complete machine-checked proof in the Coq proof assistant, removing reliance on unverified external programs. **[confirmed]**

**lineage** — conjectured by **Francis Guthrie** in 1852 (coloring a map of English counties), relayed via his brother Frederick to Augustus De Morgan (letter to Hamilton, 23 Oct 1852). A famous *flawed* "proof" by Alfred Kempe (1879) stood for 11 years until Percy Heawood (1890) found the gap — Kempe's chain argument did, however, yield the **five color theorem**. The full theorem fell only in 1976. **[confirmed]**

**door** — Diestel, *Graph Theory*, Ch. 5 (coloring) [[source.diestel-graph-theory]].

**sources** — Appel–Haken 1977 (the proof); Wikipedia "Four color theorem" and MacTutor "The four colour theorem" (Guthrie 1852, Kempe/Heawood, Appel–Haken 1976/77 announcement 21 June 1976, configuration counts, Gonthier 2005). ≥2 independent sources. **[confirmed]**
