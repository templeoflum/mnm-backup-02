---
name: additive-conjoint-measurement
type: object
object-type: theorem
essence: measure two attributes jointly from the order on their combinations — fundamental measurement without a concatenation operation
field: [field.representational-measurement-theory, field.psychophysics]
status: proven
state: float
attribution: R. D. Luce & J. W. Tukey (1964); independently Debreu (1960); anticipated by Hölder (1901)
formalized: true
source: [source.luce-tukey-1964, source.debreu-1960, source.krantz-luce-suppes-tversky-1971, source.sep-measurement]
depends-on: [object.representation-theorem-measurement]
used-by: []
---

**statement (plain)** — you usually measure by combining like with like (put two weights on a pan). Conjoint measurement shows you can measure even when nothing combines, as long as two factors jointly produce an ordered outcome. By watching only how the *ordering* of outcomes responds to trading one factor against the other, you can place numbers on each factor that simply *add up* to track the outcome. It gave the behavioral sciences a way to do genuine fundamental measurement without a physical concatenation.

**statement (formal)** — let ≿ be an order on a product set A × X. If ≿ satisfies the conjoint axioms — weak order; *independence* (single cancellation); the *Thomsen condition* (double cancellation); *restricted solvability*; the *Archimedean* condition; and essentialness of both components — then there exist real-valued functions φ_A on A and φ_X on X such that
(a, x) ≿ (b, y) ⇔ φ_A(a) + φ_X(x) ≥ φ_A(b) + φ_X(y).
The φ's are interval scales sharing a common unit (uniqueness: positive affine with a common multiplier). **[confirmed]**

**status** — proven (Luce & Tukey 1964; generalized in KLST 1971, vol. I).

**basis** — "a new type of fundamental measurement": no antecedent extensive operation is needed; the additive representation is forced by the order on combinations alone (Luce & Tukey 1964). This is why it matters for psychology/economics, where concatenation is rarely available. **[confirmed]**

**lineage** — R. D. Luce & J. W. Tukey, "Simultaneous conjoint measurement: a new type of fundamental measurement," *J. Math. Psychol.* 1, no. 1 (1964):1–27 [[source.luce-tukey-1964]] — the founding algebraic exposition. Independently and earlier discovered topologically by G. Debreu (1960) in cardinal utility theory [[source.debreu-1960]]; features anticipated by Hölder (1901) [[source.holder-1901]]. Codified and extended in Krantz–Luce–Suppes–Tversky, *Foundations of Measurement*, vol. I (1971) [[source.krantz-luce-suppes-tversky-1971]]. **Trap noted:** Luce–Tukey 1964 is a distinct work from the 1971 KLST treatise — do not conflate. **[confirmed]**

**sources** — Luce & Tukey (1964) [[source.luce-tukey-1964]]; Wikipedia, "Theory of conjoint measurement" (for Debreu/Hölder lineage and axiom set); SEP, "Measurement in Science" [[source.sep-measurement]]; KLST 1971 [[source.krantz-luce-suppes-tversky-1971]].
