---
name: kullback-leibler-divergence
type: object
object-type: definition
essence: the relative entropy — extra bits paid for coding P's data with a model Q; ≥ 0, asymmetric
field: [field.information-theory, field.mathematical-statistics]
status: established
state: verified
attribution: S. Kullback and R. A. Leibler (1951); the underlying inequality is Gibbs'; the quantity is the relative form of Shannon's 1948 entropy
formalized: true
source: [source.kullback-leibler-1951, source.cover-thomas-1991, source.mackay-itila, source.shannon-1948]
depends-on: [object.shannon-entropy, field.probability-theory]
used-by: [object.mutual-information]
---

**statement (plain)** — KL divergence (relative entropy) measures how different one probability distribution is from another: specifically, the average number of *extra* bits you waste when you encode data that truly follows P using a code built for a different distribution Q. It is zero only when P and Q are identical, never negative, and it is **not symmetric** — D(P‖Q) generally differs from D(Q‖P) — so it is a directed measure, not a true distance.

**statement (formal)** — for distributions P, Q on the same space,
discrete: D_KL(P ‖ Q) = Σ_x P(x) log [ P(x) / Q(x) ],
continuous: D_KL(P ‖ Q) = ∫ p(x) log [ p(x) / q(x) ] dx,
with conventions 0 log(0/q) = 0 and p log(p/0) = ∞ (so it is finite only if P is absolutely continuous w.r.t. Q). **[confirmed]**

**status** — a definition; nonnegativity is a theorem.

**properties** — D_KL(P‖Q) ≥ 0, with equality iff P = Q (**Gibbs' inequality**, via Jensen's inequality on the convex −log); asymmetric and not a metric (violates symmetry and the triangle inequality). [[object.mutual-information]] is the special case I(X;Y) = D_KL( p(x,y) ‖ p(x)p(y) ). **[confirmed]**

**lineage (naming)** — introduced by Solomon Kullback and Richard A. Leibler, "On Information and Sufficiency," *Annals of Mathematical Statistics* 22 (1951) 79–86 [[source.kullback-leibler-1951]]. They did **not** name the asymmetric quantity "divergence": they called it the "mean information for discrimination ... per observation," I(1:2), and used "divergence" for the **symmetrized** J = I(1:2) + I(2:1); Kullback later preferred "discrimination information." The modern usage "KL divergence" for the asymmetric form is a later convention. Trap to avoid: this is the **1951** statistical lineage, distinct from Shannon's **1948** founding paper [[source.shannon-1948]]. **[confirmed]**

**door** — Cover & Thomas ch. 2 (relative entropy) [[source.cover-thomas-1991]]; free: MacKay ch. 2 [[source.mackay-itila]].

**sources** — [[source.kullback-leibler-1951]], [[source.cover-thomas-1991]], [[source.mackay-itila]], [[source.shannon-1948]].
