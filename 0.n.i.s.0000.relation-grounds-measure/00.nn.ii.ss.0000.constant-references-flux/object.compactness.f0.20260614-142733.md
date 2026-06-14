---
name: compactness
type: object
object-type: definition
essence: a space is compact when every open cover has a finite subcover — abstracting closed-and-bounded into pure topology
field: [field.point-set-topology]
status: standard
state: float
attribution: open-cover/finite-subcover formulation grew from Heine-Borel; named "bicompactness" by Alexandroff & Urysohn (1923/1929 memoir); earlier covering notions Fréchet (1906), Riesz (1908)
formalized: true
source: [source.alexandroff-urysohn-1929, source.hausdorff-1914, source.munkres-topology]
depends-on: [object.topological-space]
used-by: [object.tychonoff-theorem, object.heine-borel-theorem]
---

**statement (plain)** — a space is compact if, no matter how you cover it with open patches, you can always pick out finitely many of those patches that already cover the whole thing. It is the topological way to say "no points escape to infinity and no edge is missing" — the abstract generalization of "closed and bounded" in ordinary space, but stated purely in terms of open sets, with no distance needed.

**statement (formal)** — a topological space X is **compact** if every open cover of X has a finite subcover: whenever {Uᵢ}ᵢ∈I ⊆ τ with ⋃ᵢ Uᵢ = X, there is a finite J ⊆ I with ⋃ⱼ∈J Uⱼ = X. A subset is compact if it is compact in the subspace topology. Equivalent: every family of closed sets with the finite intersection property has nonempty total intersection. **[confirmed]**

**status** — standard definition.

**relation to Heine-Borel** — in ℝⁿ, compactness coincides with closed-and-bounded; this is the [[object.heine-borel-theorem]], the concrete case from which the abstract open-cover definition was distilled. In general topological (or even metric) spaces the equivalence fails — compact ⇔ closed+bounded is special to ℝⁿ. **[confirmed]**

**lineage (terminology)** — several covering/sequential notions were proposed as the "right" finiteness condition: Fréchet (1906) and Riesz (1908) gave early versions tied to sequences and limit points. P. S. Alexandroff and P. S. Urysohn, in their *Mémoire sur les espaces topologiques compacts* (presented 1923, published 1929), introduced **bicompactness** — the open-cover/finite-subcover property quantified beyond countable covers — which was eventually adopted as the modern definition of "compact." The older "compact" (Fréchet) often meant sequentially/countably compact. [[source.alexandroff-urysohn-1929]] **[confirmed]**; exact venue/pages **[confirmed as attribution]** (primary not opened).

**door** — Munkres, *Topology*, §26 (compact spaces) [[source.munkres-topology]].

**sources** — [[source.alexandroff-urysohn-1929]], [[source.hausdorff-1914]], [[source.munkres-topology]]; cross-checked against nLab ("compact space") and Encyclopedia of Mathematics. **[confirmed]**
