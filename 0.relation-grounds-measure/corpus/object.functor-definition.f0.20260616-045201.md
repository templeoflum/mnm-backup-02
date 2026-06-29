---
name: functor-definition
type: object
object-type: definition
essence: a structure-preserving map between categories — sends objects to objects and arrows to arrows, respecting composition and identities
field: [field.category-theory]
status: established
state: settled
attribution: S. Eilenberg & S. Mac Lane (1945)
formalized: true
source: [source.eilenberg-maclane-1945, source.maclane-1971]
depends-on: [object.category-definition]
used-by: [object.adjunction, object.natural-transformation, object.yoneda-lemma]
---

**statement (plain)** — a functor is a map *between whole categories* that carries each object to an object and each arrow to an arrow, in a way that keeps the wiring intact: it sends identities to identities and a composite of arrows to the composite of their images. It is the "morphism of categories." Familiar constructions are functors — the fundamental group of a space, the free group on a set, the dual of a vector space — each turns objects and maps of one kind into objects and maps of another, coherently.

**statement (formal)** — a (covariant) functor F : **C** → **D** assigns to each object A of **C** an object F(A) of **D**, and to each morphism f : A → B a morphism F(f) : F(A) → F(B), such that **F(1_A) = 1_{F(A)}** and **F(g ∘ f) = F(g) ∘ F(f)**. A *contravariant* functor reverses arrows: F(f) : F(B) → F(A) and F(g ∘ f) = F(f) ∘ F(g) (equivalently a functor on the opposite category **C**ᵒᵖ). **[confirmed]**

**basis** — introduced in Eilenberg & Mac Lane (1945) precisely to state when a transformation is "natural," requiring maps between categories [[source.eilenberg-maclane-1945]]; standard form in Mac Lane (1971), Ch. I [[source.maclane-1971]]. **Limits**: the bare definition does not distinguish well-behaved functors (faithful, full, (co)continuous, representable, adjoint) — those refinements carry the working content; "functor" alone is only the preservation axioms. **[confirmed]**
