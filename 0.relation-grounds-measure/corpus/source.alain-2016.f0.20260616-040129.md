---
name: alain-2016
type: source
essence: introduces "linear classifier probes" — independent linear classifiers trained on frozen intermediate-layer activations to measure how linearly decodable a target is at each depth
kind: preprint
author: Guillaume Alain, Yoshua Bengio
year: 2016
venue: arXiv:1610.01644 (cs.LG); presented at ICLR 2017 Workshop
state: settled
links: ["[[object.probing-classifier]]", "[[field.mechanistic-interpretability-probing]]"]
aliases: ["source.alain-2016"]
---

**citation** — Guillaume Alain and Yoshua Bengio. "Understanding intermediate layers using linear classifier probes." arXiv preprint arXiv:1610.01644, 2016 (revised 2018). Also presented at the ICLR 2017 Workshop track.

**contains** — defines a "probe" as a linear classifier that uses only the hidden units of a chosen intermediate layer as features, trained entirely independently of (and without affecting) the host model, generally added after training. Reports experimentally that linear separability of features increases roughly monotonically with depth; applies the method to Inception v3 and Resnet-50 to diagnose layer roles and dynamics.

**access** — open access on arXiv (abs/1610.01644); PDF at arxiv.org/pdf/1610.01644. Abstract and method confirmed via arXiv and Semantic Scholar listings. **[confirmed]**
