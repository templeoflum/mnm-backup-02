---
name: dataset-distillation
type: object
object-type: method
essence: synthesize a tiny training set that, fed to a fixed learner, approximates training on the full dataset
field: ["[[field.knowledge-dataset-distillation]]"]
status: established
state: settled
attribution: Wang, Zhu, Torralba & Efros (2018)
formalized: true
source: ["[[source.wang-2018]]", "[[source.gou-2021]]"]
depends-on: []
used-by: []
aliases: ["object.dataset-distillation"]
---

**statement (plain)** — the dual of model distillation: keep the model and learning algorithm fixed, and compress the *data*. Synthesize a small number of artificial training examples such that a network trained on them performs nearly as well as one trained on the entire original dataset. The synthetic points are learned, not sampled, and need not look like real data.

**statement (formal)** — a bilevel optimization: the outer loop optimizes synthetic data x̃ (and in variants labels and learning rate) to minimize the loss, on real validation data, of a model produced by the inner loop — one or a few gradient-descent steps initialized from θ₀ and trained on x̃. Gradients flow back through the inner training steps to update x̃. Original setting fixes θ₀ per distillation.

**basis** — Wang, Zhu, Torralba & Efros (2018) introduced the formulation and distilled 60,000 MNIST images into 10 synthetic images (one per class), recovering most of the original accuracy in a few gradient steps. [[source.wang-2018]] Surveys place dataset distillation as the data-side counterpart to knowledge distillation. [[source.gou-2021]] **Limits** — the original method's distilled set is tied to the network initialization and architecture used to make it, and the bilevel optimization is costly; later work (gradient/trajectory/distribution matching) addresses generalization across initializations. **[confirmed]**
