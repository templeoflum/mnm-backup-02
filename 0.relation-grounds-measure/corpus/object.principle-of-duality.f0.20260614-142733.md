---
name: principle-of-duality
type: object
object-type: principle
essence: in the projective plane, point and line are interchangeable — every theorem has a valid dual
field: ["[[field.projective-geometry]]"]
status: standard
state: settled
attribution: stated independently by Poncelet (1822, via poles/polars) and Gergonne (1825–26, as a free-standing principle; coined "duality"); priority disputed
formalized: true
source: ["[[source.poncelet-1822]]", "[[source.gergonne-1826]]", "[[source.coxeter-projective]]"]
depends-on: ["[[object.projective-space]]"]
used-by: ["[[object.desargues-theorem]]", "[[object.pappus-hexagon-theorem]]"]
aliases: ["object.principle-of-duality"]
---

**statement (plain)** — in the projective plane, points and lines play perfectly symmetric roles. If you take any true theorem and swap "point" with "line," "lies on" with "passes through," "collinear" with "concurrent," and "the line joining two points" with "the point where two lines meet," you get another true theorem — the dual. So every result comes for free in a mirror-image pair (and some, like Desargues's and Pappus's, are their own mirror image).

**statement (formal)** — let Σ be the axiom system of the projective plane (incidence axioms i–iii). The dual Σ* obtained by interchanging the primitive terms "point" ↔ "line" and "incident" with itself is logically equivalent to Σ (the axioms imply their own duals). Hence for any statement φ provable from Σ, the dual statement φ* (formed by the term interchange above) is also provable from Σ. In a projective space of dimension n the duality is point ↔ hyperplane. **[confirmed]**

**proof** — the principle is a metatheorem: it follows because the projective-plane axioms can be written as self-dual statements, so any deduction can be dualized term-by-term into a valid deduction of the dual. (In coordinate terms, plane duality is realized concretely by a correlation / the pole–polar map of a conic, or by P²(F) ↔ P²(F)* sending a point to the line of its dual coordinates.) See [[source.coxeter-projective]]. **[confirmed]**

**lineage (contested attribution)** — two independent originators in the 1820s. **J.-V. Poncelet** developed poles and polars with respect to a conic in his *Traité des propriétés projectives des figures* (1822) [[source.poncelet-1822]] and held duality to be a *consequence* of that theory. **J. D. Gergonne** stated the principle explicitly as a free-standing logical principle (independent of polars) and coined the terms *dualité* and *polaire*, publishing dual propositions in side-by-side columns in his *Annales* (c. 1825–26) [[source.gergonne-1826]]. The two became rivals over priority; Julius Plücker later extended duality to higher dimensions. Carry both Poncelet and Gergonne. **[candidate, priority contested — both confirmed as genuine independent claimants]**

**dual pairs (examples)** — [[object.desargues-theorem]] is self-dual; [[object.pappus-hexagon-theorem]] is self-dual; Pascal's theorem (hexagon inscribed in a conic) and Brianchon's theorem (hexagon circumscribed about a conic) are a dual pair. **[confirmed]**

**sources** — Wikipedia "Duality (projective geometry)"; cs.cas.cz "Duality Principle" note; Wikipedia "Joseph Diez Gergonne"; [[source.coxeter-projective]]. **[confirmed]**
