---
name: word2vec-skip-gram
type: object
object-type: algorithm
essence: learns dense word vectors by training a shallow model to predict context words from a target word, optimized with negative sampling
field: [field.representation-learning-embeddings]
status: empirical
state: float
attribution: Mikolov, Chen, Corrado & Dean (2013, CBOW + Skip-gram); Mikolov, Sutskever, Chen, Corrado & Dean (2013, negative sampling + phrases)
formalized: true
source: [source.mikolov-2013a, source.mikolov-2013b]
depends-on: [object.distributed-representation]
used-by: []
---

**statement (plain)** — word2vec learns a vector per word from raw text with no labels. The Skip-gram variant slides a window over the corpus and, for each target word, trains the model to predict the surrounding context words; CBOW does the reverse (predict the target from its context). After training, each word's learned vector is its embedding. Words used in similar contexts end up with nearby vectors, and simple vector arithmetic recovers analogies.

**statement (formal/formula)** — Skip-gram maximizes the average log-probability of context words within window c: (1/T) Σ_{t=1}^{T} Σ_{-c ≤ j ≤ c, j≠0} log p(w_{t+j} | w_t). The naive softmax p(w_O | w_I) = exp(v'_{w_O}·v_{w_I}) / Σ_w exp(v'_w·v_{w_I}) is intractable, so it is replaced by **negative sampling**: for each true (target, context) pair, maximize log σ(v'_{w_O}·v_{w_I}) + Σ_{i=1}^{k} E_{w_i∼P_n(w)}[log σ(−v'_{w_i}·v_{w_I})], drawing k "noise" words from a unigram-derived distribution P_n(w) (the 3/4-power unigram in practice). Frequent words are subsampled.

**basis** — Mikolov, Chen, Corrado & Dean (2013) introduce CBOW and Skip-gram and show high-quality vectors trainable on billions of words within a day, evaluated on a syntactic/semantic analogy benchmark. [[source.mikolov-2013a]] Mikolov, Sutskever, Chen, Corrado & Dean (2013) add negative sampling, frequent-word subsampling, and phrase vectors, and document the additive-compositionality regularity. [[source.mikolov-2013b]] **[confirmed]**

**limits** — the analogy/compositionality behavior is an empirical regularity, not a proven property; embedding quality is corpus- and hyperparameter-dependent; word2vec produces one static vector per word type (no context-sensitivity, no sub-word morphology — later addressed by GloVe, fastText, and contextual models). Rests on [[object.distributed-representation]].

**sources** — [[source.mikolov-2013a]] · [[source.mikolov-2013b]]
