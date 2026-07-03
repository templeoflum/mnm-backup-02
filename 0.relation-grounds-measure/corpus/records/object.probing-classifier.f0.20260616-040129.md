---
name: probing-classifier
type: object
object-type: method
essence: train a simple (typically linear) classifier on a model's frozen intermediate activations to measure what information that layer makes readable, without changing the model
field: ["[[field.mechanistic-interpretability]]"]
status: empirical
state: settled
attribution: Alain & Bengio (2016) for the linear-probe formulation; widely used across NLP/representation analysis thereafter
formalized: true
source: ["[[source.alain-2016]]", "[[source.bereska-2024]]"]
depends-on: []
used-by: []
---

**statement (plain)** — a probe is a small auxiliary classifier (usually linear) trained on the activations of a chosen layer of a frozen, already-trained model. Its accuracy on some target property (a class label, a syntactic feature, a concept) is read as a measure of how much that property is linearly available in that layer's representation. The probe is trained independently and cannot affect the host model.

**statement (formal)** — given activations h(x) at a fixed layer and target labels y, fit a linear map g(h) = softmax(W·h + b) by minimizing cross-entropy over a labeled set, with the host model's weights frozen. The probe's held-out accuracy (or a related score) indexes the linear decodability of y from h. Alain & Bengio report this decodability rising roughly monotonically with depth in vision models. [[source.alain-2016]]

**basis** — empirically grounded and now a standard tool across interpretability and representation analysis. **Support:** cheap, model-agnostic, and directly measures linear availability of information; introduced and validated on Inception v3 and Resnet-50 [[source.alain-2016]] and catalogued as a core technique in mech-interp reviews [[source.bereska-2024]]. **[confirmed]** **Limits:** a probe measures *correlation/decodability*, not *use* — a property being linearly decodable does not show the model uses it; high-capacity probes can fit information the model does not exploit (the selectivity/control-task critique in the probing literature). Probing is read-out, not causal intervention. **[confirmed]**
