---
name: palm-distribution
type: object
object-type: definition
essence: the conditional law of a point process "given there is a point at a specified location" — defined rigorously by disintegrating the Campbell measure
field: [field.point-process-statistics]
status: established
state: verified
attribution: C. Palm (1943, stationary case on the line); rigorous general theory Kaplan, Matthes–Kerstan–Mecke, Mecke (1960s–70s)
formalized: true
source: [source.palm-1943, source.coeurjolly-moller-waagepetersen-2016, source.daley-vere-jones-1988]
depends-on: [object.poisson-point-process, object.campbells-theorem, field.measure-theory]
used-by: []
---

**statement (plain)** — the Palm distribution answers "what does the rest of the pattern look like, given that there is a point right here?" Conditioning on the event {a point sits exactly at location x} is conditioning on a probability-zero event, so it cannot be done naively; Palm calculus makes it rigorous by disintegrating the Campbell measure. The *reduced* Palm distribution describes the other points only, with the conditioning point removed.

**statement (formal)** — let N be a point process on S with intensity measure Λ. The (reduced) Campbell measure is
C^!(B × F) = E[ Σ_{x∈N} 1(x∈B) 1(N∖{x} ∈ F) ].
Since C^!(B × F) ≤ (a multiple of) Λ(B) in B, under regularity it disintegrates (Daley & Vere-Jones, §13.1) as
C^!(B × F) = ∫_B P^!_x(F) Λ(dx),
where P^!_x is, for Λ-almost every x, a probability measure on point configurations — the **reduced Palm distribution** of N given a point at x. The non-reduced Palm distribution is the law of (the reduced configuration) ∪ {x}. Higher-order Palm distributions P^!_{x₁,…,xₙ} come from the n-th reduced Campbell measure and the joint intensity ρ^{(n)} (Coeurjolly–Møller–Waagepetersen, eqs. 7, 14). **[confirmed]**

The key identity tying it back to expectations is the **Campbell–Mecke formula** (refined Campbell theorem):
E[ Σ_{x∈N} h(x, N∖{x}) ] = ∫_S E_{P^!_x}[ h(x, ·) ] Λ(dx)
(Coeurjolly et al., eq. 12). For the Poisson process this reduces to the **Mecke / Slivnyak–Mecke equation**: P^!_x equals the law of N itself (the reduced Palm distribution of a Poisson process is the same Poisson process). **[confirmed]**

**status** — established.

**lineage** — introduced by C. Palm (1943) [[source.palm-1943]] for stationary point processes on the real line, in telephone-traffic theory. The rigorous, general (multi-dimensional / abstract-space) theory via Campbell-measure disintegration was developed mainly in probability theory through the 1960s–70s (Kaplan; Matthes, Kerstan & Mecke; Mecke 1967) — carried here as lineage, primary works not opened. **[confirmed as attribution]** for the originators; the modern definition itself is **[confirmed]** (Coeurjolly et al. + Daley & Vere-Jones).

**door** — Coeurjolly, Møller & Waagepetersen, "A tutorial on Palm distributions for spatial point processes" [[source.coeurjolly-moller-waagepetersen-2016]]; Daley & Vere-Jones, §13 [[source.daley-vere-jones-1988]].

**sources** — [[source.palm-1943]], [[source.coeurjolly-moller-waagepetersen-2016]], [[source.daley-vere-jones-1988]].
