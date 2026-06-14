---
name: lie-group-lie-algebra-correspondence
type: object
object-type: theorem
essence: Lie's three theorems — the dictionary between Lie groups and Lie algebras; every finite-dim real Lie algebra integrates to a unique simply connected Lie group
field: [field.lie-theory]
status: proven
state: float
attribution: local versions S. Lie (1870s–80s); global third theorem É. Cartan (1930) — hence "Cartan–Lie theorem"
formalized: true
source: [source.lie-engel-1888, source.cartan-1894, source.hall-lie, source.kirillov-lie]
depends-on: [object.lie-group, object.lie-algebra, object.exponential-map-lie]
used-by: [object.semisimple-classification]
---

**statement (plain)** — Lie groups and Lie algebras are two views of the same thing, linked by a precise dictionary. Differentiating a Lie group at its identity gives a Lie algebra; the [[object.exponential-map-lie]] goes back the other way. Lie's theorems pin down how faithful this dictionary is: subgroups match subalgebras, homomorphisms match (when the group is simply connected), and — the deepest part — *every* finite-dimensional real Lie algebra actually comes from some Lie group, with exactly one simply connected group for each algebra. The catch: the algebra only sees the group near the identity, so groups with the same algebra (like the rotation group SO(3) and its double cover SU(2)) are distinguished only by their global shape.

**statement (formal)** — let 𝔤 = Lie(G) be the [[Lie algebra]] of a [[Lie group]] G (the tangent space at the identity, equivalently the left-invariant vector fields under the bracket). Lie's three theorems (modern form):

- **First** (subgroups ↔ subalgebras): connected Lie subgroups H ⊆ G correspond bijectively to Lie subalgebras 𝔥 ⊆ 𝔤, via 𝔥 = Lie(H).
- **Second** (homomorphisms): if G is connected and simply connected, then for every Lie-algebra homomorphism φ: Lie(G) → Lie(K) there is a unique Lie-group homomorphism f: G → K with df_e = φ. (So Hom(G,K) ≅ Hom(Lie G, Lie K).)
- **Third / Cartan–Lie** (integration): every finite-dimensional real Lie algebra is isomorphic to the Lie algebra of some Lie group; equivalently, the functor G ↦ Lie(G) is an **equivalence of categories** between simply connected real Lie groups and finite-dimensional real Lie algebras. **[confirmed]**

**proof / status** — proven. Lie himself proved the local/infinitesimal versions (equivalence between finite-dimensional Lie algebras and *local* Lie groups, via local solvability of the Maurer–Cartan equation). The global third theorem — existence of a genuine (simply connected) global group for every finite-dimensional real Lie algebra — was completed by [[Élie Cartan]] and is therefore commonly called the **Cartan–Lie theorem**. Ado's theorem (every finite-dimensional Lie algebra has a faithful finite-dimensional representation) gives one route to the third theorem. **[confirmed]**

**lineage (contested naming)** — "Lie's third theorem" is historically Lie's *local* converse; the *global* statement was proved by Cartan and is, in second-half-20th-century literature, attributed to him ("Cartan's theorem" / "Cartan–Lie theorem"). Both names are in use; carried as lineage rather than settled. **[confirmed]** Cartan's date for the global result is usually given as 1930. [[source.cartan-1894]] is Cartan's 1894 thesis (classification work); his integration result is later — sourced here secondarily.

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations* [[source.hall-lie]]; A. Kirillov Jr. (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.lie-engel-1888]], [[source.cartan-1894]], [[source.hall-lie]], [[source.kirillov-lie]]; cross-checked against nLab ("Lie's three theorems"), Wikipedia ("Lie group–Lie algebra correspondence", "Lie's third theorem"). **[confirmed]**
