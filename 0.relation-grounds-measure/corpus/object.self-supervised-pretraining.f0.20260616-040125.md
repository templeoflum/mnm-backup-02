---
name: self-supervised-pretraining
type: object
object-type: method
essence: learn a general-purpose representation from unlabeled data by solving a proxy task built from the data itself, then transfer it to downstream tasks
field: [field.representation-learning-embeddings]
status: empirical
state: settled
attribution: greedy layer-wise unsupervised pretraining (Hinton 2006; Bengio 2007), framed in the 2013 review and Deep Learning (2016); word2vec is an early self-supervised instance
formalized: false
source: [source.bengio-2013, source.goodfellow-2016, source.mikolov-2013a]
depends-on: [object.distributed-representation]
used-by: []
aliases: ["object.self-supervised-pretraining"]
---

**statement (plain)** — instead of needing human labels, you create a learning signal out of the data itself — hide part of the input and predict it from the rest (predict a word from its context, a masked patch from its neighbors, the next frame). Training on this "pretext" task forces the model to build a representation that captures the structure of the data. That pretrained representation is then reused — fine-tuned or used as features — on a downstream task where labels are scarce. This is the engine behind word embeddings and, later, large pretrained language and vision models.

**statement (method)** — (1) define a pretext task whose targets are derived automatically from unlabeled inputs; (2) train an encoder on the pretext task over a large corpus to produce a representation; (3) **transfer** — fine-tune the encoder, or freeze it and train a small head, on the downstream task. The transfer step rests on the assumption that the pretext-task representation shares explanatory factors with the downstream task.

**basis** — Bengio, Courville & Vincent (2013) review unsupervised feature learning and greedy layer-wise pretraining as ways to learn representations without labels, and frame transfer/disentanglement as the goal. [[source.bengio-2013]] *Deep Learning* (2016, Ch. 15) covers unsupervised pretraining, transfer learning, and domain adaptation as the mechanism for reusing learned representations. [[source.goodfellow-2016]] word2vec (Mikolov et al. 2013) is a concrete early self-supervised instance: the "predict-the-context" pretext task yields embeddings reused across NLP tasks. [[source.mikolov-2013a]] **[confirmed]**

**limits** — "self-supervised pretraining" is a family of methods, not one algorithm or a proven guarantee; transfer can fail when pretext and downstream distributions or factors diverge (negative transfer); the value of pretraining is empirical and task-dependent. The term "self-supervised" postdates some of the cited foundational work (which uses "unsupervised pretraining"); carried here as the modern umbrella label, **[candidate, partially confirmed]**. Rests on [[object.distributed-representation]].

**sources** — [[source.bengio-2013]] · [[source.goodfellow-2016]] · [[source.mikolov-2013a]]
