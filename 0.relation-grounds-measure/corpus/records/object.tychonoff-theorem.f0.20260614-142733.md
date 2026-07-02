---
name: tychonoff-theorem
type: object
object-type: theorem
essence: an arbitrary product of compact spaces is compact in the product topology — and this is equivalent to the axiom of choice
field: ["[[field.point-set-topology]]"]
status: proven
state: settled
attribution: Tychonoff (1930, powers of the unit interval; 1935 general statement & proof); general proof Čech (1937); equivalence to AC, Kelley (1950)
formalized: true
source: ["[[source.tychonoff-1935]]", "[[source.cech-1937]]", "[[source.kelley-1950]]", "[[source.munkres-topology]]"]
depends-on: ["[[object.compactness]]", "[[object.topological-space]]"]
used-by: []
---

**statement (plain)** — if you take any collection of compact spaces — even infinitely many — and form their product space, that product is again compact, using the product topology. This is one of the deepest and most useful facts in topology, and it secretly carries the full strength of the axiom of choice: assuming Tychonoff's theorem is logically the same as assuming you can always choose.

**statement (formal)** — let {Xᵢ}ᵢ∈I be any family of compact topological spaces. Then the product ∏ᵢ∈I Xᵢ, equipped with the **product (Tychonoff) topology** — the coarsest topology making all projections πᵢ continuous — is compact. Over ZF, this statement is **equivalent to the axiom of choice**. For Hausdorff factors, the weaker ultrafilter (Boolean prime ideal) theorem suffices. **[confirmed]**

**status** — proven.

**proof** — standard modern proof uses the finite-intersection-property characterization of [[object.compactness]] together with the ultrafilter lemma / Zorn's lemma (hence choice): every ultrafilter on the product converges because each projected ultrafilter converges in the compact factor. Full proof in Munkres, *Topology*, §37 [[source.munkres-topology]]. **[confirmed]**

**lineage** — A. N. Tychonoff proved the result in **1930 for powers of the closed unit interval** [0,1]^A, and stated the **general theorem with proof in his 1935** paper *"Über einen Funktionenraum"* (*Mathematische Annalen*), which also defined the product topology in this generality for the first time [[source.tychonoff-1935]]. The first fully transcribed proof of the general case is commonly attributed to **E. Čech (1937)**, in *"On bicompact spaces"* (*Annals of Mathematics*) [[source.cech-1937]] — **[confirmed as attribution]** (1937 date standard across references; some give Čech's independent contribution as 1939 — carried as minor contested point). J. L. **Kelley (1950)** proved that Tychonoff's theorem **implies the axiom of choice** in ZF, establishing the equivalence [[source.kelley-1950]]. **[confirmed]**

**door** — Munkres, *Topology*, §37 (the Tychonoff theorem) [[source.munkres-topology]].

**sources** — [[source.tychonoff-1935]], [[source.cech-1937]], [[source.kelley-1950]], [[source.munkres-topology]]; cross-checked against Wikipedia ("Tychonoff's theorem") and nLab ("Tychonoff theorem"). **[confirmed]**
