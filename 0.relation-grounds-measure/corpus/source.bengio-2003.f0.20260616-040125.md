---
name: bengio-2003
type: source
essence: introduces a neural language model that learns a distributed representation of words jointly with a probability model of word sequences
kind: paper
author: Yoshua Bengio, Réjean Ducharme, Pascal Vincent, Christian Jauvin
year: 2003
venue: Journal of Machine Learning Research, vol. 3, pp. 1137–1155
state: settled
links: ["[[field.representation-learning-embeddings]]", "[[object.distributed-representation]]"]
aliases: ["source.bengio-2003"]
---

Yoshua Bengio, Réjean Ducharme, Pascal Vincent, Christian Jauvin, "A Neural Probabilistic Language Model," *Journal of Machine Learning Research* 3 (2003), 1137–1155.

Learns a continuous "distributed representation for words" (a feature vector per word) simultaneously with the parameters of a probability function for word sequences, so that semantically similar words get nearby vectors — generalizing to unseen sequences and attacking the curse of dimensionality in statistical language modeling. The originating work for learned word embeddings, ~12 years before word2vec.

Open access at jmlr.org/papers/v3/bengio03a.html (PDF available). Byline often miscited as "Janvin" — the JMLR record reads "Christian Jauvin."

**[confirmed]** — title, authors, venue, volume/pages cross-checked against the JMLR record and ACM DL.
