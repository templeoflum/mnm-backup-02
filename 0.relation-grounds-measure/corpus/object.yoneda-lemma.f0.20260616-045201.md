---
name: yoneda-lemma
type: object
object-type: theorem
essence: an object is completely determined by the maps into it — natural transformations out of a representable functor are exactly the elements of the target functor
field: [field.category-theory]
status: proven
state: settled
attribution: Nobuo Yoneda (c. 1954); named and popularized by Saunders Mac Lane
formalized: true
source: [source.maclane-1971, source.riehl-2016]
depends-on: [object.natural-transformation, object.functor-definition, object.category-definition]
used-by: []
aliases: ["object.yoneda-lemma"]
---

**statement (plain)** — to know an object, it is enough to know all the maps coming into it (or out of it) from every other object, together with how those maps behave. Formally, the natural transformations from the "maps-into-A" functor to any functor F are in exact one-to-one correspondence with the elements of F(A). A corollary (the Yoneda embedding) is that an object is determined up to unique isomorphism by its pattern of incoming arrows — the categorical version of "you are what you relate to," generalizing Cayley's theorem for groups.

**statement (formal)** — let **C** be a locally small category, A an object, and F : **C** → **Set** a functor. Write h^A = Hom(A, −). Then there is a bijection, natural in both A and F,
  Nat(h^A, F) ≅ F(A),
sending a natural transformation η to η_A(1_A). For the contravariant case use h_A = Hom(−, A) and F : **C**ᵒᵖ → **Set**. The **Yoneda embedding** **C** ↪ [**C**ᵒᵖ, **Set**], A ↦ Hom(−, A), is full and faithful. **[confirmed]**

**proof / derivation** — direct: define Φ : Nat(h^A, F) → F(A) by Φ(η) = η_A(1_A), and Ψ : F(A) → Nat(h^A, F) by Ψ(x)_B(g) = F(g)(x) for g : A → B. Naturality of η forces η_B(g) = η_B(g ∘ 1_A) = F(g)(η_A(1_A)), so Ψ ∘ Φ = id; and Φ(Ψ(x)) = F(1_A)(x) = x, so Φ ∘ Ψ = id. Both maps are natural in A and F, giving the natural isomorphism. Proof given in Mac Lane (1971), Ch. III §2 [[source.maclane-1971]] and Riehl (2016), Ch. 2 [[source.riehl-2016]]. **[confirmed]**

**lineage** — the result is attributed to Nobuo Yoneda from a 1954/55 research visit to Paris; Saunders Mac Lane, then gathering material for a book on category theory, learned it from Yoneda in an interview at the Gare du Nord and named it the "Yoneda lemma." Yoneda is reported never to have written the lemma down himself; its diffusion is through Mac Lane's text. Naming attribution per Yoshiki Kinoshita (1996). [[source.maclane-1971]] **[confirmed as attribution]**
