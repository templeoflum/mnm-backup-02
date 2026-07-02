---
name: roweis-2000
type: source
essence: introduces Locally Linear Embedding (LLE) — preserve local linear reconstruction weights, then solve an eigenproblem for a global low-dimensional embedding
kind: article
author: Sam T. Roweis, Lawrence K. Saul
year: 2000
venue: Science, vol. 290, no. 5500, pp. 2323–2326
state: settled
links: ["[[field.intrinsic-dimension-manifold-learning]]", "[[object.locally-linear-embedding]]"]
---

Sam T. Roweis, Lawrence K. Saul, "Nonlinear Dimensionality Reduction by Locally Linear Embedding," *Science* 290(5500) (22 December 2000), 2323–2326. DOI: 10.1126/science.290.5500.2323.

Introduces Locally Linear Embedding (LLE). Each data point is reconstructed as a weighted linear combination of its k nearest neighbors; the reconstruction weights, which capture the local geometry and are invariant to rotation/scaling/translation, are computed by least squares. LLE then finds the low-dimensional coordinates that are best reconstructed by those same fixed weights, via a sparse eigenvalue problem. No iterative nonlinear optimization or local minima; a single global embedding.

Access: published in *Science*; available via science.org (DOI above), PubMed (PMID 11125150), and author copies. The companion to Tenenbaum et al. in the same *Science* issue.

**[confirmed]** — authors, title, *Science* 290(5500):2323–2326, 2000 date cross-checked against *Science*, PubMed, and independent reference listings.
