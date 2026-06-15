---
name: connectedness
type: object
object-type: definition
essence: a space is connected when it cannot be split into two disjoint nonempty open pieces — topological "all of one piece"
field: [field.point-set-topology]
status: standard
state: float
attribution: modern partition definition arose independently — N. J. Lennes (1911), F. Riesz (1906/08), F. Hausdorff (1914); earlier Cantor (1883); commonly "Lennes-Hausdorff definition"
formalized: true
source: [source.lennes-1911, source.hausdorff-1914, source.munkres-topology]
depends-on: [object.topological-space]
used-by: []
---

**statement (plain)** — a space is connected if you cannot break it cleanly into two separate nonempty open chunks — it hangs together as one piece. Equivalently, the only subsets that are simultaneously open and closed are the trivial ones (the whole space and the empty set), and any continuous map from the space into a two-point on/off set must be constant — there is no clean dividing line to switch across.

**statement (formal)** — a topological space X is **connected** if it cannot be written as X = U ∪ V with U, V open, nonempty, and disjoint (such a pair is a separation/disconnection). Equivalent characterizations: (i) the only **clopen** (both open and closed) subsets of X are ∅ and X; (ii) X is not a union of two nonempty **separated** sets (sets each disjoint from the other's closure); (iii) every continuous map X → {0,1} (discrete two-point space) is constant. A subset is connected in its subspace topology. **[confirmed]**

**status** — standard definition.

**relation** — connectedness is the topological substrate of the [[object.intermediate-value-theorem]]: the continuous image of a connected space is connected, and connected subsets of ℝ are exactly the intervals. **[confirmed]**

**lineage** — the notion has long roots (Listing 1847; the modern point-set germ in **G. Cantor, 1883**). The modern **partition definition** (no splitting into two separated/disjoint nonempty open sets) appeared **independently** in the early 20th century with **N. J. Lennes (1911)** [[source.lennes-1911]], **F. Riesz** (c. 1906–08), and **F. Hausdorff** (*Grundzüge der Mengenlehre*, 1914) [[source.hausdorff-1914]]. European topologists first credited Hausdorff (his 1914 book was the common source); by his 1944 *Mengenlehre* Hausdorff had found Lennes's earlier version, after which it was often called the **"Lennes-Hausdorff definition."** Carried as multiple-origin lineage, not flattened to one name. **[confirmed]**

**door** — Munkres, *Topology*, §23 (connected spaces) [[source.munkres-topology]].

**sources** — [[source.lennes-1911]], [[source.hausdorff-1914]], [[source.munkres-topology]]; cross-checked against Wikipedia ("Connected space") and the Moore *Historia Mathematica* 35 (2008) survey on the evolution of "connected." **[confirmed]**
