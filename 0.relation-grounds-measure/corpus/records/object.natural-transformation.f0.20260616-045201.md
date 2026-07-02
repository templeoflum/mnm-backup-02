---
name: natural-transformation
type: object
object-type: concept
essence: a map between two functors that is coherent across every arrow — the formal meaning of a "natural" transformation
field: ["[[field.category-theory]]"]
status: established
state: settled
attribution: S. Eilenberg & S. Mac Lane (1945)
formalized: true
source: ["[[source.eilenberg-maclane-1945]]", "[[source.maclane-1971]]"]
depends-on: ["[[object.functor-definition]]", "[[object.category-definition]]"]
used-by: ["[[object.adjunction]]", "[[object.yoneda-lemma]]"]
---

**statement (plain)** — given two functors that both go from category **C** to category **D**, a natural transformation is a family of arrows, one at each object, that turns the first functor into the second *and* respects every arrow of **C** at once. "Natural" is the precise version of the everyday phrase "this construction works the same way for all objects, without making arbitrary choices" — e.g. the map from a finite-dimensional vector space to its double dual is natural, while the map to its single dual is not. Making *this* notion rigorous is what forced the definitions of functor and category in the first place.

**statement (formal)** — for functors F, G : **C** → **D**, a natural transformation η : F ⇒ G is a family of morphisms η_A : F(A) → G(A) (one per object A of **C**) such that for every morphism f : A → B the **naturality square commutes**: G(f) ∘ η_A = η_B ∘ F(f). If every η_A is an isomorphism, η is a *natural isomorphism* (Eilenberg & Mac Lane's "natural equivalence"). **[confirmed]**

**basis** — the title concept of Eilenberg & Mac Lane (1945), "General Theory of Natural Equivalences" — the object the whole 1945 paper exists to define [[source.eilenberg-maclane-1945]]; standard treatment in Mac Lane (1971), Ch. I [[source.maclane-1971]]. **Limits**: naturality is a property *relative to a chosen pair of functors and a chosen square*; a transformation can be natural for one indexing and not another, and "natural" is not a uniqueness claim — there can be many natural transformations between the same functors (the hom-set of the functor category). **[confirmed]**
