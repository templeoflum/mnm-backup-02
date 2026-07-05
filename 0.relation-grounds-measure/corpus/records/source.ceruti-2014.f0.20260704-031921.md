---
name: ceruti-2014
type: source
essence: DANCo — intrinsic dimension from the joint concentration of norms and angles, matched to synthetic data by KL divergence
kind: paper
author: C. Ceruti; S. Bassis; A. Rozza; G. Lombardi; E. Casiraghi; P. Campadelli
year: 2014
venue: Pattern Recognition 47(8), 2569–2581 (2014); arXiv:1206.3881 (2012)
state: settled
links: ["[[object.danco-estimator]]", "[[field.manifold-learning]]"]
---

C. Ceruti, S. Bassis, A. Rozza, G. Lombardi, E. Casiraghi, P. Campadelli, "DANCo: An intrinsic dimensionality estimator exploiting angle and norm concentration," *Pattern Recognition* 47(8), 2569–2581 (2014). arXiv precursor "DANCo: Dimensionality from Angle and Norm Concentration," arXiv:1206.3881 (2012). Università degli Studi di Milano.

Role — jointly exploits concentration of normalized nearest-neighbor distances and of angles on couples of neighboring points; picks the d minimizing a Kullback–Leibler divergence against synthetic reference data of known dimension; designed against the underestimation afflicting most estimators on high-dimensional nonlinearly-embedded manifolds. FastDANCo precomputes for speed. **[confirmed]**
