---
name: wang-2018
type: source
essence: founding paper of dataset distillation — synthesizing a tiny training set that approximates training on the full corpus
kind: preprint
author: Tongzhou Wang, Jun-Yan Zhu, Antonio Torralba, Alexei A. Efros
year: 2018
venue: arXiv:1811.10959
state: settled
links: ["[[field.model-compression]]", "[[object.dataset-distillation]]"]
---

**citation** — T. Wang, J.-Y. Zhu, A. Torralba, A. A. Efros, "Dataset Distillation," arXiv:1811.10959 [cs.LG], 27 November 2018 (v3 2020).

**contains** — the dataset-distillation problem and its bilevel-optimization solution: keep the learning algorithm fixed and synthesize a small number of distilled training images (and, in variants, their labels/learning rate) such that one or a few gradient-descent steps on them yield a network approximating one trained on the full dataset. Headline result: 60,000 MNIST images distilled into 10 synthetic images (one per class), recovering most of the original accuracy given a fixed initialization. The dual of model distillation — compress the *data* rather than the *model*.

**access** — open on arXiv (abs/1811.10959); project page and code at Robotics Institute, CMU. **[confirmed]**
