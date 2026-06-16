---
name: adjunction
type: object
object-type: concept
essence: a pair of functors related by a natural hom-set bijection — the most pervasive "best possible" / universal construction in mathematics
field: [field.category-theory]
status: established
state: float
attribution: Daniel M. Kan (1958)
formalized: true
source: [source.kan-1958, source.maclane-1971]
depends-on: [object.functor-definition, object.natural-transformation, object.category-definition]
used-by: []
---

**statement (plain)** — two functors going opposite ways between categories are *adjoint* when maps out of the "free" construction match up perfectly with maps into the "underlying" construction. Free group on a set / forgetful map back to its set; tensoring / hom; product / diagonal; limits / colimits — a huge fraction of mathematical constructions turn out to be one half of an adjoint pair. Adjunction is the categorical formalization of "the best (most efficient) solution to a problem," and Mac Lane's slogan is that adjoints arise everywhere.

**statement (formal)** — functors F : **C** → **D** and G : **D** → **C** form an adjunction F ⊣ G (F left adjoint, G right adjoint) when there is a bijection
  Hom_**D**(F A, B) ≅ Hom_**C**(A, G B),
natural in A and B. Equivalently, an adjunction is given by a unit η : 1_**C** ⇒ G F and counit ε : F G ⇒ 1_**D** satisfying the triangle identities (εF)(Fη) = 1_F and (Gε)(ηG) = 1_G. Left adjoints preserve colimits; right adjoints preserve limits. **[confirmed]**

**basis** — defined and named in Kan (1958), "Adjoint Functors," which showed the notion's ubiquity and introduced it alongside Kan extensions [[source.kan-1958]]; the central organizing concept of Mac Lane (1971), Ch. IV, with the adjoint functor theorems for existence [[source.maclane-1971]]. **Limits**: an adjoint need not exist — existence is governed by the (general/special) adjoint functor theorems, which require completeness plus a solution-set or smallness condition; the hom-set bijection must be *natural*, not merely a size match; left and right adjoints, when they exist, are unique up to natural isomorphism. **[confirmed]**
