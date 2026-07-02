---
name: poisson-point-process
type: object
object-type: definition
essence: the random point pattern with Poisson-distributed counts and independent scattering — the "no interaction" benchmark process
field: [field.point-process-statistics]
status: established
state: settled
attribution: distributional precursor Poisson (1837); modern point-process formulation Palm (1943), Khinchin (1955), Kingman (1993)
formalized: true
source: [source.poisson-1837, source.kingman-1993, source.coeurjolly-moller-waagepetersen-2016, source.daley-vere-jones-1988]
depends-on: []
used-by: [object.campbells-theorem, object.palm-distribution, object.palm-khinchine-theorem]
aliases: ["object.poisson-point-process"]
---

**statement (plain)** — scatter points at random so that (1) the number of points falling in any region is Poisson-distributed with mean equal to that region's "intensity," and (2) the counts in disjoint regions are independent. The result is the Poisson point process: the canonical pattern with no interaction between points — the null model of "complete spatial randomness" against which clustering or repulsion is measured.

**statement (formal)** — let Λ be a locally finite (σ-finite) measure on a space S, the *intensity measure*. A point process N is a Poisson point process with intensity Λ iff:
1. for every bounded Borel B ⊆ S, the count N(B) is Poisson-distributed with mean Λ(B), i.e. P(N(B)=k) = e^{−Λ(B)} Λ(B)^k / k!;
2. (complete independence / independent scattering) for any finite collection of pairwise-disjoint Borel sets B₁,…,Bₙ, the counts N(B₁),…,N(Bₙ) are mutually independent.
When Λ has a density ρ w.r.t. Lebesgue measure, ρ is the *intensity function*; ρ ≡ λ constant gives the *homogeneous* process, otherwise *inhomogeneous*. Equivalently (Coeurjolly–Møller–Waagepetersen, eq. 1): conditional on N(B)=n, the n points are i.i.d. with density ∝ ρ on B. **[confirmed]**

**status** — established (a definition with a standard existence/uniqueness theory; the process exists for any locally finite Λ).

**lineage** — the *distribution* dates to S. D. Poisson (1837) [[source.poisson-1837]]; the random *point pattern* as an object was developed by C. Palm (1943) and A. Khinchin (1955) in telephone-traffic and queueing theory, and given its standard modern monograph treatment by J. F. C. Kingman (1993) [[source.kingman-1993]]. **[confirmed]**

**door** — Kingman, *Poisson Processes* (1993) [[source.kingman-1993]]; Daley & Vere-Jones, *An Introduction to the Theory of Point Processes* [[source.daley-vere-jones-1988]]; tutorial-level: [[source.coeurjolly-moller-waagepetersen-2016]].

**sources** — [[source.poisson-1837]], [[source.kingman-1993]], [[source.coeurjolly-moller-waagepetersen-2016]], [[source.daley-vere-jones-1988]]. Two independent sources state the count-plus-independence definition (Kingman; Coeurjolly et al., corroborated by ScienceDirect/nLab summaries).
