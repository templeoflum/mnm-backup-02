---
name: category-definition
type: object
object-type: definition
essence: a collection of objects and arrows (morphisms) with associative composition and identities — the primitive structure of the field
field: ["[[field.category-theory]]"]
status: established
state: settled
attribution: S. Eilenberg & S. Mac Lane (1945)
formalized: true
source: ["[[source.eilenberg-maclane-1945]]", "[[source.maclane-1971]]"]
depends-on: []
used-by: ["[[object.adjunction]]", "[[object.natural-transformation]]", "[[object.functor-definition]]", "[[object.yoneda-lemma]]"]
aliases: ["object.category-definition"]
---

**statement (plain)** — a category is a world of *things* (objects) and *arrows between things* (morphisms) that you can chain together. Each arrow has a source and a target; arrows that line up compose; every object has an identity arrow that does nothing; and composing is associative. Almost every kind of mathematical structure forms a category — sets and functions, groups and homomorphisms, spaces and continuous maps — so the definition is a uniform language for "structures and the maps that preserve them."

**statement (formal)** — a category **C** consists of: a class of objects ob(**C**); for each pair A, B a set Hom(A, B) of morphisms; a composition ∘ : Hom(B, C) × Hom(A, B) → Hom(A, C); and for each A an identity 1_A ∈ Hom(A, A); subject to **associativity** h ∘ (g ∘ f) = (h ∘ g) ∘ f whenever defined, and **identity** 1_B ∘ f = f = f ∘ 1_A for f ∈ Hom(A, B). **[confirmed]**

**basis** — defined in Eilenberg & Mac Lane (1945) §1 as the carrier for functors and natural transformations [[source.eilenberg-maclane-1945]]; presented in standard textbook form in Mac Lane (1971), Ch. I [[source.maclane-1971]]. **Limits**: "category" as originally given is a set-theoretic size notion (small vs. large/locally small categories) and must be handled with universes or classes to avoid the category-of-all-categories paradox; the definition fixes structure but says nothing about which categories are interesting. **[confirmed]**
