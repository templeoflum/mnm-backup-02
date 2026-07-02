---
name: intrinsic-dimension-manifold-learning
type: field
essence: recovering the low-dimensional structure (coordinates and intrinsic dimension) of high-dimensional data assumed to lie near a low-dimensional manifold
canon: structure
grade: s
state: settled
links: ["[[field.representation-learning-embeddings]]", "[[field.differential-geometry]]", "[[field.linear-algebra]]", "[[field.numerical-optimization]]", "[[source.tenenbaum-2000]]", "[[source.roweis-2000]]", "[[source.levina-2004]]", "[[source.lee-2007]]", "[[source.goodfellow-2016]]"]
aliases: ["field.intrinsic-dimension-manifold-learning"]
---

**origin** — the field crystallizes in two back-to-back *Science* papers (December 22, 2000): Tenenbaum, de Silva & Langford, "A Global Geometric Framework for Nonlinear Dimensionality Reduction," *Science* 290(5500), 2319–2323 (Isomap), and Roweis & Saul, "Nonlinear Dimensionality Reduction by Locally Linear Embedding," *Science* 290(5500), 2323–2326 (LLE). Together they recast dimensionality reduction as *manifold learning*: recover the global low-dimensional coordinates of data sampled from a nonlinear manifold, beyond what linear PCA/MDS can reach. [[source.tenenbaum-2000]] [[source.roweis-2000]] **[confirmed]** (Earlier lineage: classical PCA (Pearson 1901 / Hotelling 1933) and multidimensional scaling — carried as lineage; the 2000 papers are the nonlinear/manifold origin.)

**codification** — the companion problem — estimating the *intrinsic dimension* of the data itself — is given a clean, widely-used maximum-likelihood estimator by Levina & Bickel, "Maximum Likelihood Estimation of Intrinsic Dimension," *Advances in Neural Information Processing Systems 17* (NIPS 2004), 777–784, which derives the estimator from the distances to near neighbors via a Poisson-process approximation. [[source.levina-2004]] **[confirmed]** The manifold-learning program (Isomap, LLE, Laplacian eigenmaps, intrinsic-dimension estimation) consolidates over the following decade into a recognized subfield of representation learning and nonlinear dimensionality reduction.

**door** — Lee & Verleysen, *Nonlinear Dimensionality Reduction*, Springer (Information Science and Statistics), 2007, is the standard textbook door — unifying intrinsic-dimension estimation, Isomap, LLE, and related spectral methods under one framework. [[source.lee-2007]] **[confirmed]** Goodfellow, Bengio & Courville, *Deep Learning* (2016), Ch. 5 (intrinsic/manifold) and Ch. 15 connect the topic to modern representation learning. [[source.goodfellow-2016]] **[confirmed]**

*grade [s] — origin (Tenenbaum 2000 / Roweis 2000) + codification (Levina 2004) + door (Lee 2007) all present.*
