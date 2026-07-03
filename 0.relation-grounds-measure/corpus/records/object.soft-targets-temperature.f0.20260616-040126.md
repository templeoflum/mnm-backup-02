---
name: soft-targets-temperature
type: object
object-type: concept
essence: softened class probabilities, produced by a raised softmax temperature, that expose a model's relative cross-class confidences
field: ["[[field.model-compression]]"]
status: established
state: settled
attribution: Hinton, Vinyals & Dean (2015)
formalized: true
source: ["[[source.hinton-2015]]", "[[source.gou-2021]]"]
depends-on: []
used-by: ["[[object.knowledge-distillation]]"]
---

**statement (plain)** — a soft target is the teacher's full probability vector over classes, not the one-hot hard label. Raising the softmax temperature T spreads probability mass off the top class so the smaller probabilities on the other classes — which encode how the teacher relates the classes ("dark knowledge") — become large enough to teach the student. At T=1 this is the ordinary softmax; higher T (commonly 1–10) gives softer, more informative targets.

**statement (formal)** — for logits z_i, the tempered softmax is p_i = exp(z_i / T) / Σ_j exp(z_j / T). T=1 recovers the standard softmax; T→∞ approaches a uniform distribution; T→0 approaches the one-hot argmax. Distillation trains the student with the same T as the teacher, then deploys it at T=1. The soft-target gradient scales as 1/T², which is why the distillation loss is multiplied by T².

**basis** — defined and used by Hinton, Vinyals & Dean (2015); the temperature-softened soft target is the mechanism by which dark knowledge transfers. [[source.hinton-2015]] The Gou et al. survey classifies these as "response-based knowledge." [[source.gou-2021]] **Limits** — the optimal T is empirical and task-dependent; too high washes out the signal toward uniform, too low collapses back to hard labels. **[confirmed]**
