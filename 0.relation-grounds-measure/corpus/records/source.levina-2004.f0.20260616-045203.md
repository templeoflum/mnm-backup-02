---
name: levina-2004
type: source
essence: maximum-likelihood estimator of intrinsic dimension from the distances to a point's nearest neighbors, via a Poisson-process approximation
kind: article
author: Elizaveta Levina, Peter J. Bickel
year: 2004
venue: Advances in Neural Information Processing Systems 17 (NIPS 2004), pp. 777–784
state: settled
links: ["[[field.manifold-learning]]", "[[object.intrinsic-dimension]]", "[[object.maximum-likelihood-intrinsic-dimension-estimator]]"]
---

Elizaveta Levina, Peter J. Bickel, "Maximum Likelihood Estimation of Intrinsic Dimension," in *Advances in Neural Information Processing Systems 17* (NIPS 2004), MIT Press, 2005, pp. 777–784.

Derives a maximum-likelihood estimator (the "MLE" / Levina–Bickel estimator) of the intrinsic dimension of data sampled from a manifold. Treats the observed neighbors within a small ball around a point as a Poisson process; the rate depends on the local dimension, and maximizing the likelihood yields a closed-form estimate based on the log-ratios of distances to successive nearest neighbors. Bias and variance are analyzed theoretically and by simulation; demonstrated on simulated manifolds and real datasets, outperforming the correlation-dimension and nearest-neighbor estimators compared against.

Access: open via the NeurIPS proceedings (papers.nips.cc / proceedings.neurips.cc, paper 2577); also indexed in the ACM DL. Pages 777–784 per the proceedings volume.

**[confirmed]** — authors, title, NIPS 2004 (NeurIPS proceedings vol. 17), pp. 777–784 cross-checked against the official NeurIPS proceedings and independent listings.
