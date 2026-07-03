---
name: geometric-deep-learning
type: field
essence: building invariance and equivariance to symmetry groups into neural networks — by canonicalization, frame averaging, or equivariant layers, learning over the orbit space X/G
canon: structure
grade: s
state: float
links: ["[[field.computational-anatomy]]", "[[source.puny-2021]]", "[[source.kaba-2023]]"]
---

**origin** — Group-equivariant network design; O. Puny et al., “Frame Averaging for Invariant and Equivariant Network Design” (arXiv:2110.03336, 2021) — replace the full group average by an average over an input-dependent frame ℱ(X) ⊂ G. [[source.puny-2021]] **[confirmed]**

**codification** — S.-O. Kaba et al., “Equivariance with Learned Canonicalization Functions” (ICML 2023) — learn an equivariant map to canonical representatives; the canonicalization perspective consolidated in Ma et al. (NeurIPS 2024) and the impossibility results of Dym–Lawrence–Siegel (ICML 2024). [[source.kaba-2023]] [[source.ma-2024]] [[source.dym-lawrence-siegel-2024]] **[confirmed]**

**door** — the frame-averaging (Puny) and learned-canonicalization (Kaba) papers are the entry points; broader context in the geometric-deep-learning literature (Bronstein et al.). [[source.puny-2021]] [[source.kaba-2023]]
