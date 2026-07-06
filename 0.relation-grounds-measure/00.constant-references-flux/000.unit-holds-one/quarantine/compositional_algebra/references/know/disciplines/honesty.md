# Honesty discipline (earned vs gestural)

**The rule:** every formal-mathematical or formal-architectural claim in the framework is marked as either *earned* (the framework can demonstrate the content the vocabulary implies) or *gestural* (the vocabulary names a shape but the content is not yet delivered).

**Why:** the framework borrows vocabulary from spline math, type theory, and category theory because that vocabulary organizes thinking. But the borrowed vocabulary implies proven content (associativity, structure preservation, derivable continuity conditions). If the framework uses the vocabulary without earning the content, it makes claims it cannot back. Worse, it teaches operators to treat gestural claims as load-bearing — which compounds.

**How it shows up:**
- The **Formal:** / **Informal:** convention. Wherever a framework document uses **Formal:** to introduce a type-signature or category-theoretic framing, an accompanying **Informal:** section gives the load-bearing explanation. The Formal: framing is *not* the substantive content; the Informal: section is.
- The [formalization roadmap](../formalization_roadmap.md) tracks earned vs unearned stages (Spline stages S1–S5; Algebra stages A1–A4). What's earned is named; what's pending is named.
- New formal-vocabulary gestures are not added going forward. Existing ones are grandfathered for stability; they are not extended.
- Documents that make formal claims (the framework README, layer references) carry inline acknowledgment that the formal framing is currently aspirational.

**Anti-pattern:** treating a **Formal:** framing as if it had been proven; adding a new "this layer is a functor over X" claim without delivering the categorical content; promoting "spline" from name to derivation without committing movements to polynomial form.

**Dev-log incident:** the "Honesty pass: formalization roadmap added" entry (Session 7) captures the moment this discipline was made explicit. Before that entry, the framework was using formal vocabulary without an audit trail. The roadmap closed that gap.

---

## Related

- [Define before reference](define_before_reference.md) — vocabulary must exist before being referenced (a companion at a different scale)
- [Two-level verification](two_level_verification.md) — separates L1 evidence from L2 claims (another honesty practice)

## See also

- [`../formalization_roadmap.md`](../formalization_roadmap.md) — the earning paths for what's currently gestural
- [`../../see/CRITIQUE.md`](../../see/CRITIQUE.md) — where unearned claims get named as gaps
