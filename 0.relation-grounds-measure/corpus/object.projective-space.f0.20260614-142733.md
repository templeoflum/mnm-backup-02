---
name: projective-space
type: object
object-type: definition
essence: the space of lines through the origin of a vector space — affine space completed with points at infinity
field: [field.projective-geometry, field.linear-algebra]
status: standard
state: settled
attribution: synthesized from Poncelet (1822) and von Staudt (1847); axiomatized by Veblen & Young (1910–18); coordinate construction is the modern standard
formalized: true
source: [source.poncelet-1822, source.von-staudt-1847, source.veblen-young-1910, source.coxeter-projective]
depends-on: []
used-by: [object.principle-of-duality, object.desargues-theorem, object.pappus-hexagon-theorem, object.cross-ratio]
aliases: ["object.projective-space"]
---

**statement (plain)** — projective space of dimension n is what you get by taking ordinary (affine) n-space and adding, for every direction, one extra "point at infinity" where all the parallel lines of that direction meet. Then any two distinct lines in a plane always meet at exactly one point — there are no exceptions for parallels. Equivalently, a point of projective space is a line through the origin of a vector space one dimension higher.

**statement (formal)** — for a field (or division ring) F and integer n ≥ 0, the projective space P(V) of an (n+1)-dimensional F-vector space V is the set of 1-dimensional linear subspaces of V; equivalently
  Pⁿ(F) = (Fⁿ⁺¹ \ {0}) / ∼,  where x ∼ λx for all λ ∈ F*.
A point is written in homogeneous coordinates (x₀ : x₁ : … : xₙ), not all zero, identified up to nonzero scalar. A projective plane P²(F) (n = 2) satisfies the incidence axioms: (i) any two distinct points lie on a unique line; (ii) any two distinct lines meet in a unique point; (iii) there exist four points, no three collinear. **[confirmed]**

**proof / status** — this is a definition, not a theorem; its content is that the coordinate construction and the synthetic axiom system describe the same objects. The decisive structural fact (a theorem) is that a projective space of dimension ≥ 3 satisfies [[object.desargues-theorem]] **iff** it is isomorphic to P(V) for some vector space V over a division ring — i.e. the synthetic and algebraic definitions coincide exactly in dimension ≥ 3. See [[source.veblen-young-1910]]. **[confirmed]**

**lineage** — the modern object has two streams. The **synthetic/visual** stream runs Desargues → Poncelet (*Traité*, 1822) [[source.poncelet-1822]] → von Staudt (*Geometrie der Lage*, 1847, coordinate-free) [[source.von-staudt-1847]], completed by the axioms of Veblen & Young (1910–18) [[source.veblen-young-1910]]. The **algebraic/coordinate** stream presents Pⁿ(F) via homogeneous coordinates over a field; this is the standard textbook construction (e.g. [[source.coxeter-projective]]). The two are reconciled by the coordinatization theorem above. **[confirmed]**

*cross-ref:* Klein's Erlangen program (see [[field.coordinate-systems-erlangen-program]], [[source.klein-1872]]) recasts projective space as the homogeneous space of the projective linear group PGL; share that body, do not duplicate.

**sources** — Wikipedia "Projective space" and "Projective plane" (homogeneous-coordinate and axiom definitions); [[source.veblen-young-1910]] (axioms + coordinatization); [[source.coxeter-projective]] (door text). **[confirmed]**
