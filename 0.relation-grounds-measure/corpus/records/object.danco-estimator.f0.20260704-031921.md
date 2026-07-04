---
name: danco-estimator
type: object
object-type: method
essence: dimension by matching the joint law of neighbor norms and angles against synthetic data of known d, by minimum KL divergence
field: ["[[field.manifold-learning]]"]
status: established
state: float
attribution: Ceruti, Bassis, Rozza, Lombardi, Casiraghi & Campadelli (2012 arXiv; 2014 Pattern Recognition)
formalized: true
source: ["[[source.ceruti-2014]]"]
depends-on: ["[[object.intrinsic-dimension]]"]
used-by: []
---

**statement (plain)** — instead of trusting one statistic, DANCo fingerprints a neighborhood twice — how normalized neighbor distances concentrate, and how angles between neighbor pairs concentrate — then asks: synthetic data of *which* dimension produces this same joint fingerprint? The best-matching d wins.

**statement (formal)** — estimates d by minimizing a Kullback–Leibler divergence between the joint pdf of (normalized nearest-neighbor distances, pairwise angles) observed on the data and the same joint pdf computed on synthetic reference data of known dimension. FastDANCo precomputes the dimension-/N-dependent reference quantities. **[confirmed]**

**basis** — built to reduce the systematic *underestimation* that afflicts most estimators on high-dimensional, nonlinearly-embedded manifolds; antecedent high-ID estimators in the same school: MIND (Rozza et al., *Machine Learning* 89, 2012). [[source.ceruti-2014]]
