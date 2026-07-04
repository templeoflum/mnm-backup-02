---
name: mackay-ghahramani-2005
type: source
essence: the MacKay–Ghahramani correction to Levina–Bickel — pool inverse estimators via the likelihood, don't average estimators
kind: notes
author: D. J. C. MacKay; Z. Ghahramani
year: 2005
venue: web note, Inference Group, Cavendish Laboratory, University of Cambridge
state: float
links: ["[[source.levina-2004]]", "[[object.maximum-likelihood-intrinsic-dimension-estimator]]", "[[field.manifold-learning]]"]
---

D. J. C. MacKay & Z. Ghahramani, "Comments on 'Maximum Likelihood Estimation of Intrinsic Dimension' by E. Levina and P. Bickel (2004)," web note (2005).

Role — argues one should average the *inverses* 1/m̂ of the per-point estimators and then invert (a pooled-likelihood estimator), rather than averaging the estimators, removing the small-k positive bias of the Levina–Bickel MLE. Their dictum: "never average anything without consulting a likelihood function." **[confirmed]**
