---
name: local-intrinsic-dimensionality
type: object
object-type: definition
essence: dimension as a per-point quantity — the extreme-value-theoretic rate at which neighborhood measure grows with radius at a query point
field: ["[[field.manifold-learning]]"]
status: established
state: float
attribution: M. E. Houle (foundation, SISAP 2017); estimation Amsaleg et al. (KDD 2015)
formalized: true
source: ["[[source.houle-2017]]", "[[source.amsaleg-2015]]", "[[source.pestov-2007]]"]
depends-on: ["[[object.intrinsic-dimension]]"]
used-by: []
---

**statement (plain)** — a dataset needn't have one dimension; each point can sit in a region of its own dimensionality. LID makes dimension local: at a query point, how fast does the amount of data grow as you widen the neighborhood? That growth rate is the local dimension.

**statement (formal)** — LID at a query point is the rate parameter governing how the probability measure of a ball scales with its radius, characterized extreme-value-theoretically from the distribution of neighbor distances (Houle 2017); estimators from neighbor-distance samples in Amsaleg et al. (2015; DMKD 2018). **[confirmed]**

**basis** — with Pestov's axiomatic, measure-relative ID (curse-of-dimensionality-reflecting, not a single manifold invariant) and HIDALGO's heterogeneous-ID mixtures (Allegra et al. 2020), LID grounds the reading that dimension is local, multiscale, and domain-relative — measured, never assumed. [[source.houle-2017]] [[source.amsaleg-2015]] [[source.pestov-2007]]
