---
name: representation-theorem-measurement
type: object
object-type: theorem
essence: an empirical relational structure can be mapped, order-preservingly, into a numerical relational structure — measurement as homomorphism
field: ["[[field.representational-measurement-theory]]"]
status: proven
state: settled
attribution: framework Krantz–Luce–Suppes–Tversky (1971), building on Hölder (1901)
formalized: true
source: ["[[source.krantz-luce-suppes-tversky-1971]]", "[[source.sep-measurement]]", "[[source.holder-1901]]"]
depends-on: []
used-by: ["[[object.uniqueness-theorem-measurement]]", "[[object.additive-conjoint-measurement]]"]
---

**statement (plain)** — measurement is building a faithful map from things to numbers. If a set of objects has empirical relations among them (one is heavier, this combines with that), a representation theorem proves you can assign numbers so the number-relations mirror the empirical ones exactly. The numbers don't add new information and don't lose any — they just re-present the structure already there.

**statement (formal)** — given an empirical relational structure 𝔄 = ⟨A, R₁, …, Rₙ⟩ (a domain A with empirical relations/operations) satisfying stated axioms, a *representation theorem* asserts the existence of a homomorphism φ: 𝔄 → ℜ into a numerical relational structure ℜ = ⟨ℝ, S₁, …, Sₙ⟩, i.e. φ maps each empirical relation Rᵢ onto the corresponding numerical relation Sᵢ in a structure-preserving way (for an order ≿ and concatenation ∘: a ≿ b ⇔ φ(a) ≥ φ(b), and φ(a ∘ b) = φ(a) + φ(b) in the additive/extensive case). **[confirmed]**

**status** — proven (a theorem schema; a specific representation theorem is proved for each axiomatized structure — extensive, conjoint, difference, etc.).

**basis** — measurement defined as "the construction of mappings from empirical relational structures into numerical relational structures" (Krantz et al. 1971: 9); the scale is the homomorphism, a many-to-one structure-preserving map. Two results are sought for each structure: *existence* (the representation theorem) and *uniqueness* (the [[object.uniqueness-theorem-measurement]]). The extensive (additive) case descends from Hölder's 1901 axioms for magnitudes; the canonical extensive case yields a ratio scale. **[confirmed]**

**lineage** — paradigm codified in D. H. Krantz, R. D. Luce, P. Suppes & A. Tversky, *Foundations of Measurement*, vol. I (Academic Press, 1971) [[source.krantz-luce-suppes-tversky-1971]]; axiomatic root O. Hölder, "Die Axiome der Quantität und die Lehre vom Mass" (1901) [[source.holder-1901]]; earlier representational ideas in Helmholtz (1887) and Russell. **[confirmed]**

**sources** — KLST 1971 [[source.krantz-luce-suppes-tversky-1971]]; SEP, "Measurement in Science" [[source.sep-measurement]]; Hölder (1901) [[source.holder-1901]].
