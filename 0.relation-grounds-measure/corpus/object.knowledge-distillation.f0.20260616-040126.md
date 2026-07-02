---
name: knowledge-distillation
type: object
object-type: method
essence: train a student model on a teacher's softened output distribution, transferring the teacher's "dark knowledge"
field: [field.knowledge-dataset-distillation]
status: established
state: settled
attribution: Hinton, Vinyals & Dean (2015), generalizing Buciluă et al. (2006)
formalized: true
source: [source.hinton-2015, source.gou-2021]
depends-on: [object.model-compression, object.soft-targets-temperature]
used-by: []
aliases: ["object.knowledge-distillation"]
---

**statement (plain)** — instead of training a small student only on ground-truth (hard) labels, train it to match the *full probability distribution* a large teacher assigns over classes. The teacher's relative confidences across the wrong classes ("dark knowledge") carry information the hard label omits, so the student learns more from each example. Generalizes model compression from matching labels to matching distributions.

**statement (formal)** — the student minimizes a distillation loss, typically L = α · H(y, σ(z_s)) + β · T² · KL( σ(z_t/T) ∥ σ(z_s/T) ), where z_s, z_t are student/teacher logits, σ is softmax, T the temperature, H cross-entropy with the true label y; the T² factor rescales the soft-target gradient. At T→∞ the soft-target term approaches matching logits (the Buciluă/Caruana regime).

**basis** — Hinton, Vinyals & Dean (2015) introduced the method and showed gains on MNIST and a commercial acoustic model. [[source.hinton-2015]] [[object.model-compression]] [[object.soft-targets-temperature]] The Gou et al. survey documents the broad downstream family (response/feature/relation-based; offline/online/self). [[source.gou-2021]] **Limits** — student accuracy is teacher-bounded; gains depend on temperature, loss weighting, and the teacher–student capacity gap; a too-large gap can hurt transfer. **[confirmed]**
