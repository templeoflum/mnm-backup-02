---
name: mikolov-2013b
type: source
essence: improvements to Skip-gram — negative sampling, frequent-word subsampling, phrase vectors; the additive compositionality result
kind: paper
author: Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado, Jeffrey Dean
year: 2013
venue: Advances in Neural Information Processing Systems 26 (NeurIPS/NIPS 2013), pp. 3111–3119
state: settled
links: [field.representation-learning-embeddings, object.word2vec-skip-gram, object.distributed-representation]
aliases: ["source.mikolov-2013b"]
---

Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado, Jeffrey Dean, "Distributed Representations of Words and Phrases and their Compositionality," in *Advances in Neural Information Processing Systems 26* (NIPS 2013), Lake Tahoe, NV, Dec 5–8 2013, pp. 3111–3119.

Extends the Skip-gram model with: negative sampling (a cheap alternative to hierarchical softmax), subsampling of frequent words (speed + better representations), and a phrase-detection step yielding vectors for phrases. Documents the additive compositionality / linear-analogy regularity (e.g. vec("Russia") + vec("river") ≈ vec("Volga River")).

Open access via papers.nips.cc (NIPS 2013, paper 5021); preprint arXiv:1310.4546.

**[confirmed]** — title, authors, NIPS-2013 venue, page range cross-checked against papers.nips.cc and the arXiv record.
