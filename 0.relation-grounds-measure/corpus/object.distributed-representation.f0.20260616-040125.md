---
name: distributed-representation
type: object
object-type: concept
essence: representing an entity as a pattern of activity over many features, so meaning is distributed across dimensions and each dimension participates in many entities
field: ["[[field.representation-learning-embeddings]]"]
status: established
state: settled
attribution: connectionist roots (Hinton/PDP, 1986); applied to words by Bengio et al. (2003); framed as a learning prior by Bengio, Courville & Vincent (2013)
formalized: false
source: ["[[source.bengio-2003]]", "[[source.bengio-2013]]", "[[source.goodfellow-2016]]"]
depends-on: []
used-by: ["[[object.word2vec-skip-gram]]", "[[object.self-supervised-pretraining]]"]
aliases: ["object.distributed-representation"]
---

**statement (plain)** — a distributed representation encodes an item as a dense vector of many features rather than a single symbol or one-hot indicator. No single dimension means one thing on its own; meaning lives in the pattern across dimensions, and each dimension is reused across many items. This is the opposite of a "local" (one-symbol-per-concept) representation. The payoff is generalization: because similar items get nearby vectors, a model can transfer what it learned about one item to related, even unseen, ones.

**statement (formal/formula)** — an item x is mapped to a vector e(x) ∈ ℝ^d with d much smaller than the vocabulary/cardinality; the representation is *distributed* in that no coordinate is dedicated to a single item, and the number of distinguishable configurations grows combinatorially (roughly exponentially) in d rather than linearly as for one-hot codes. Similarity is read off geometrically (e.g. cosine / dot product).

**basis** — Bengio et al. (2003) learn a distributed representation for words jointly with a language model, showing it generalizes across word sequences and fights the curse of dimensionality. [[source.bengio-2003]] Bengio, Courville & Vincent (2013) elevate "distributed representation" to one of the central priors of representation learning, noting the combinatorial advantage in representational capacity. [[source.bengio-2013]] *Deep Learning* (2016, Ch. 15) gives the textbook treatment and contrasts distributed vs. symbolic/local codes. [[source.goodfellow-2016]] **[confirmed]**

**limits** — "distributed" is a property of a representation, not a single algorithm; the geometric-similarity reading is empirical, and which factors a learned representation actually disentangles is not guaranteed. The connectionist origin (PDP, 1986) is carried as lineage, single-source here, **[candidate, partially confirmed]**.

**sources** — [[source.bengio-2003]] · [[source.bengio-2013]] · [[source.goodfellow-2016]]
