---
name: tenenbaum-2000
type: source
essence: introduces Isomap — nonlinear dimensionality reduction by estimating geodesic distances on a neighborhood graph, then classical MDS
kind: article
author: Joshua B. Tenenbaum, Vin de Silva, John C. Langford
year: 2000
venue: Science, vol. 290, no. 5500, pp. 2319–2323
state: settled
links: [field.intrinsic-dimension-manifold-learning, object.isomap, object.intrinsic-dimension]
---

Joshua B. Tenenbaum, Vin de Silva, John C. Langford, "A Global Geometric Framework for Nonlinear Dimensionality Reduction," *Science* 290(5500) (22 December 2000), 2319–2323. DOI: 10.1126/science.290.5500.2319.

Introduces Isomap (isometric feature mapping). For data sampled from a nonlinear manifold, Euclidean distance in the ambient space mismeasures distance along the manifold; Isomap instead estimates *geodesic* distances by computing shortest paths through a k-nearest-neighbor graph, then applies classical multidimensional scaling (MDS) to the resulting distance matrix to recover a global low-dimensional embedding. Demonstrated on the "Swiss roll," face-image, and handwritten-digit datasets; the residual-variance-vs-dimension curve also gives an estimate of intrinsic dimension.

Access: published in *Science*; widely available via science.org (DOI above) and author/course copies. One of the two December 2000 *Science* papers (with Roweis & Saul) that launched manifold learning.

**[confirmed]** — authors, title, *Science* 290(5500):2319–2323, and 2000 date cross-checked against multiple independent listings.
