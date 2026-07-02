---
name: bucilua-2006
type: source
essence: introduces model compression — training a small fast "student" to mimic a large ensemble "teacher"
kind: paper
author: Cristian Buciluă, Rich Caruana, Alexandru Niculescu-Mizil
year: 2006
venue: Proceedings of the 12th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD '06), pp. 535–541
state: settled
links: [field.knowledge-dataset-distillation, object.model-compression, object.knowledge-distillation]
aliases: ["source.bucilua-2006"]
---

**citation** — C. Buciluă, R. Caruana, A. Niculescu-Mizil, "Model Compression," in *Proceedings of the 12th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining* (KDD '06), Philadelphia, 2006, pp. 535–541. ACM. DOI 10.1145/1150402.1150464.

**contains** — the founding model-compression idea: a complex, high-accuracy ensemble is used to label a large pool of (often synthetically generated, via the MUNGE procedure) unlabeled data; a single small neural network is then trained to mimic those labels. The compressed net matches the ensemble's accuracy while being far smaller and faster. The precursor that Hinton et al. (2015) generalize into knowledge distillation.

**access** — primary PDF hosted at cs.cornell.edu/~caruana/compression.kdd06.pdf; also in ACM Digital Library (DOI above). Author surname appears as "Bucilă"/"Buciluă" across indexes. **[confirmed]**
