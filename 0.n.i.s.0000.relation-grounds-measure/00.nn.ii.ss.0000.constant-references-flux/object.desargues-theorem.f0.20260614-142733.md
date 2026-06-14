---
name: desargues-theorem
type: object
object-type: theorem
essence: two triangles are in perspective from a point iff they are in perspective from a line
field: [field.projective-geometry]
status: proven
state: float
attribution: Girard Desargues (c. 1639); first printed by Abraham Bosse (1648), as Desargues never published it himself
formalized: true
source: [source.desargues-1639, source.bosse-1648, source.coxeter-projective]
depends-on: [object.projective-space, object.principle-of-duality]
used-by: []
---

**statement (plain)** — take two triangles. If the three lines joining their corresponding corners all pass through one common point (the triangles are "in perspective from a point" — imagine one casting a shadow of the other from a light source), then the three points where their corresponding sides meet all lie on one common line (they are "in perspective from a line"). And the converse holds too. The two conditions are equivalent.

**statement (formal)** — let ABC and A′B′C′ be triangles in a projective plane. They are **centrally perspective** (perspective from a point) if the lines AA′, BB′, CC′ are concurrent at a point O (the center). They are **axially perspective** (perspective from a line) if the three intersection points
  X = BC ∩ B′C′,  Y = CA ∩ C′A′,  Z = AB ∩ A′B′
are collinear (on the axis). Desargues's theorem: **central perspectivity ⟺ axial perspectivity.** **[confirmed]**

**proof / status** — proven. In a projective space of dimension ≥ 3 it is a theorem of pure incidence (provable directly; a clean proof embeds the plane configuration in 3-space, "lifts" one triangle out of the plane, and projects). In a projective *plane* it is **not** a consequence of the incidence axioms alone — it is equivalent to the plane being coordinatizable over a division ring (a "Desarguesian plane"); non-Desarguesian planes exist where it fails. See [[object.projective-space]] (coordinatization theorem) and [[source.coxeter-projective]]. **[confirmed]**

**self-duality** — under [[object.principle-of-duality]] the theorem is self-dual: dualizing interchanges central and axial perspectivity, mapping the statement to its own converse. This is why a single configuration carries both directions. **[confirmed]**

**lineage** — **Girard Desargues** (1591–1661) is the namesake; the result belongs to his projective work of c. 1639 [[source.desargues-1639]]. Desargues never published the theorem himself — its first printed appearance is the 1648 appendix "Manière universelle de Mr Desargues, pour pratiquer la perspective" issued by his pupil **Abraham Bosse** [[source.bosse-1648]]. **[confirmed as attribution]** on the Bosse-1648 first-printing; **[confirmed]** on Desargues authorship.

**sources** — Wikipedia "Desargues's theorem"; Britannica "Desargues's theorem"; [[source.coxeter-projective]]. Attribution/first-printing: [[source.bosse-1648]]. **[confirmed]**
