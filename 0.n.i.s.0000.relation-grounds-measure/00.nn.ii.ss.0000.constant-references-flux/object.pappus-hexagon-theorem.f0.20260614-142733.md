---
name: pappus-hexagon-theorem
type: object
object-type: theorem
essence: points alternating on two lines give a hexagon whose three pairs of opposite sides meet in three collinear points
field: [field.projective-geometry]
status: proven
state: float
attribution: Pappus of Alexandria, Collection Book VII (c. 320 CE); Hessenberg (1905) showed it implies Desargues
formalized: true
source: [source.pappus-collection, source.coxeter-projective]
depends-on: [object.projective-space, object.principle-of-duality]
used-by: [object.desargues-theorem]
---

**statement (plain)** — take two straight lines. Put three points A, B, C on the first and three points a, b, c on the second. Cross-connect them into a hexagon (A→b→C→a→B→c→A). The three pairs of "opposite" sides of that hexagon meet in three points — and those three points always lie on one straight line (the Pappus line). No matter how you placed the six points on their two lines, the three crossing points are collinear.

**statement (formal)** — let A, B, C be collinear (on line ℓ) and a, b, c be collinear (on line m). Define
  X = Ab ∩ aB,  Y = Ac ∩ aC,  Z = Bc ∩ bC.
Then X, Y, Z are collinear. (Equivalently: if the six vertices of a hexagon lie alternately on two lines, the three points of intersection of pairs of opposite sides are collinear.) **[confirmed]**

**proof / status** — proven. It holds in any projective plane coordinatized over a **commutative** field, and fails over any noncommutative division ring; planes in which it holds are called **pappian**. By the Artin–Wedderburn / coordinatization theory, Pappus's theorem is exactly the projective statement of commutativity of the underlying coordinate ring. **Hessenberg's theorem (1905):** Pappus's theorem implies [[object.desargues-theorem]] — so every pappian plane is Desarguesian (the converse fails). See [[source.coxeter-projective]]. **[confirmed]**

**self-duality** — under [[object.principle-of-duality]] the theorem is self-dual; the dual statement (about concurrent lines) is equivalent to the original. **[confirmed]**

**lineage** — **Pappus of Alexandria** (c. 290 – c. 350 CE) stated and proved it in his *Synagoge (Collection)*, Book VII (c. 320 CE) [[source.pappus-collection]] — the earliest known theorem of projective character, predating projective geometry as a discipline by ~1300 years. The implication-to-Desargues is due to **Gerhard Hessenberg (1905)**. **[confirmed as attribution]** on the Pappus authorship/dating; **[confirmed]** on the field-commutativity and Hessenberg facts.

**sources** — Wikipedia "Pappus's hexagon theorem"; Wolfram MathWorld "Pappus's Hexagon Theorem"; [[source.coxeter-projective]]. Attribution: [[source.pappus-collection]]. **[confirmed]**
