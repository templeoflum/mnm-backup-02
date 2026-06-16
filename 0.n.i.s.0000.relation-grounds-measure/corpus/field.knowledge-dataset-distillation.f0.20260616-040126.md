---
name: knowledge-dataset-distillation
type: field
essence: compressing the knowledge of a large model (or a large dataset) into a smaller, cheaper surrogate that approximates its behavior
canon: structure
grade: s
state: settled
links: [field.information-theory, source.hinton-2015, source.bucilua-2006, source.wang-2018, source.gou-2021]
---

**origin** — model compression introduced by Buciluă, Caruana & Niculescu-Mizil, "Model Compression," *KDD* (2006): a small student is trained to mimic the function of a large ensemble teacher, reaching comparable accuracy "1000 times smaller and 1000 times faster." [[source.bucilua-2006]] **[confirmed]**

**codification** — Hinton, Vinyals & Dean, "Distilling the Knowledge in a Neural Network" (NIPS 2014 Deep Learning Workshop; arXiv:1503.02531, 2015) generalized compression into *knowledge distillation*: train the student on the teacher's softened class-probability outputs ("soft targets") produced with a raised softmax temperature. This is the founding text of the modern field. [[source.hinton-2015]] **[confirmed]**

**lineage** — the *dataset*-distillation branch was opened by Wang, Zhu, Torralba & Efros, "Dataset Distillation" (arXiv:1811.10959, 2018): hold the model fixed and instead synthesize a tiny set of training points that, fed to the learner, approximate training on the full corpus (60,000 MNIST images → 10 synthetic images). [[source.wang-2018]] **[confirmed]**

**door** — Gou, Yu, Maybank & Tao, "Knowledge Distillation: A Survey," *International Journal of Computer Vision* 129(6):1789–1819 (2021) — the standard survey entry into the field. [[source.gou-2021]] **[confirmed]**

*grade [s] — origin, codification, and door all present (dataset branch carried as lineage).*
