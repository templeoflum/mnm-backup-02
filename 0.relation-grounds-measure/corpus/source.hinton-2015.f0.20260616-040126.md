---
name: hinton-2015
type: source
essence: founding paper of knowledge distillation — transfer via softened soft-target probabilities and softmax temperature
kind: preprint
author: Geoffrey Hinton, Oriol Vinyals, Jeff Dean
year: 2015
venue: NIPS 2014 Deep Learning Workshop; arXiv:1503.02531
state: settled
links: ["[[field.knowledge-dataset-distillation]]", "[[object.knowledge-distillation]]", "[[object.soft-targets-temperature]]", "[[object.model-compression]]"]
aliases: ["source.hinton-2015"]
---

**citation** — G. Hinton, O. Vinyals, J. Dean, "Distilling the Knowledge in a Neural Network," presented at the NIPS 2014 Deep Learning Workshop; arXiv:1503.02531 [stat.ML], 9 March 2015.

**contains** — distillation: train a compact student on the *soft targets* — the full class-probability distribution — produced by a cumbersome teacher (or ensemble). The softmax is computed with a raised *temperature* T so the teacher's relative confidences across wrong classes ("dark knowledge") are not crushed toward 0/1; the student is trained at the same high T (typically T in 1–10), optionally combined with the true hard labels. Demonstrated on MNIST and on a commercial acoustic model. Generalizes Buciluă et al. (2006) from matching logits/labels to matching softened distributions.

**access** — open on arXiv (abs/1503.02531); widely mirrored. Frequently cited as "Hinton et al. 2015" though presented at the 2014 workshop. **[confirmed]**
