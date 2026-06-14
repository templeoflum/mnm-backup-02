---
name: urysohn-lemma
type: object
object-type: theorem
essence: in a normal space, any two disjoint closed sets can be separated by a continuous [0,1]-valued function — and this characterizes normality
field: [field.point-set-topology]
status: proven
state: float
attribution: Pavel Urysohn (1925), third appendix of his memoir in Mathematische Annalen 94
formalized: true
source: [source.urysohn-1925, source.munkres-topology]
depends-on: [object.topological-space]
used-by: []
---

**statement (plain)** — in a "normal" space (one where any two separate closed pieces can be wrapped in disjoint open neighborhoods), you can always build a single continuous dial that reads exactly 0 on one closed piece and exactly 1 on the other, sliding smoothly between. The remarkable part: having such a separating function for every pair of disjoint closed sets is not just a consequence of normality — it is exactly the same thing as being normal. It is the bridge from a purely set-theoretic separation property to actual continuous real-valued functions.

**statement (formal)** — let X be a normal topological space (T₄: a T₁ space in which any two disjoint closed sets have disjoint open neighborhoods) and let A, B ⊆ X be disjoint closed sets. Then there exists a continuous function f : X → [0,1] with f(A) = {0} and f(B) = {1}. Conversely, if every pair of disjoint closed sets in a (T₁) space admits such a function, the space is normal — so the lemma is an **iff** characterization of normality. **[confirmed]**

**status** — proven.

**proof** — the classic construction inserts open sets indexed by dyadic rationals in [0,1]: using normality repeatedly, build a family {U_q} of open sets (q dyadic in [0,1]) with A ⊆ U_q, U_q ∩ B = ∅, and closure(U_p) ⊆ U_q whenever p < q; then define f(x) = inf{q : x ∈ U_q} (and f = 1 off all U_q). The nested structure makes f continuous. Full proof in Munkres, *Topology*, §33 [[source.munkres-topology]]. **[confirmed]**

**significance** — Urysohn's lemma is the key lemma behind the **Tietze extension theorem** and the **Urysohn metrization theorem**; it is the standard tool for producing continuous functions on abstract spaces. **[confirmed]**

**lineage** — due to **Pavel Samuilovich Urysohn**, appearing in the **third appendix of his memoir, *Mathematische Annalen* 94 (1925), 262–295** [[source.urysohn-1925]] — **[confirmed]** for year/venue (multi-source); exact page range **[confirmed as attribution]** (primary not opened). Note the name "Urysohn lemma" is occasionally conflated with the Urysohn metrization theorem — distinct results. **[confirmed]**

**door** — Munkres, *Topology*, §33 (the Urysohn lemma) [[source.munkres-topology]].

**sources** — [[source.urysohn-1925]], [[source.munkres-topology]]; cross-checked against nLab ("Urysohn's lemma") and Encyclopedia of Mathematics ("Urysohn lemma"). **[confirmed]**
