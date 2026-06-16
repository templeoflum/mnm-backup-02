---
name: vector-space-model
type: object
object-type: model
essence: represent documents and queries as vectors in a space whose axes are terms, and rank by the similarity between query and document vectors
field: [field.information-retrieval]
status: established
state: float
attribution: Gerard Salton and colleagues, SMART project, Cornell (Salton, Wong & Yang 1975)
formalized: true
source: [source.salton-1975, source.manning-2008]
depends-on: [object.tf-idf]
used-by: []
---

**statement (plain)** — each document and each query is turned into a list of numbers, one per term in the vocabulary, where the number is the weight of that term (often tf-idf). Documents and the query then live as points/vectors in the same high-dimensional "term space." A document is ranked by how close its vector points in the same direction as the query's — usually measured by the cosine of the angle between them, so that documents sharing the query's important terms score highest regardless of length.

**statement (formal/formula)** — for a vocabulary of terms t = 1..M, document d is the vector V(d) = (w_{1,d}, …, w_{M,d}) and query q the vector V(q); the cosine similarity is

sim(q, d) = (V(q) · V(d)) / (‖V(q)‖ · ‖V(d)‖) = Σ_t w_{t,q} w_{t,d} / (√Σ_t w_{t,q}² · √Σ_t w_{t,d}²).

Weights w are commonly tf-idf. Normalizing by the vector lengths removes the effect of document length. **[confirmed]**

**basis** — the model is a representational choice, not a theorem: it assumes terms can be treated as orthogonal axes (ignoring synonymy/polysemy and term dependence) and that direction-similarity tracks relevance. Its support is empirical and practical — it underlies the SMART system and decades of working retrieval engines, and remains the textbook baseline for ranked retrieval. Limits: the orthogonality/independence assumption is false in language, motivating later models (latent semantic indexing, probabilistic and neural retrieval). Stated as the founding model in Salton, Wong & Yang (1975) and codified as standard in Manning, Raghavan & Schütze (2008, Ch. 6). **[confirmed]**
