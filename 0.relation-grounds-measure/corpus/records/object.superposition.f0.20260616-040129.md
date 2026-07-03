---
name: superposition
type: object
object-type: concept
essence: a network represents more features than it has dimensions by storing sparse features as overlapping, non-orthogonal directions — the cause of polysemantic neurons
field: ["[[field.mechanistic-interpretability]]"]
status: empirical
state: settled
attribution: Elhage et al. (2022), "Toy Models of Superposition"; ties to Olah et al. circuits program
formalized: true
source: ["[[source.elhage-2022]]", "[[source.bereska-2024]]"]
depends-on: ["[[object.circuits-feature]]"]
used-by: []
---

**statement (plain)** — superposition is the phenomenon of a neural network encoding more distinct features than it has neurons (dimensions) by assigning features to overlapping directions rather than to individual neurons. This works when features are **sparse** (rarely co-active): the model tolerates the interference between overlapping features because collisions are rare. The visible symptom is **polysemanticity** — a single neuron firing for several unrelated concepts.

**statement (formal)** — in the toy model, a linear-plus-ReLU autoencoder must represent n features in m < n dimensions. As feature sparsity increases, the optimal solution shifts from representing only the top-m features orthogonally to packing many features as non-orthogonal directions, accepting interference. Elhage et al. show this transition is a **phase change** in sparsity and that the resulting feature geometry organizes into structures related to uniform polytopes. [[source.elhage-2022]]

**basis** — empirical, established in fully-analyzable toy models. **Support:** "Toy Models of Superposition" exhibits superposition, the sparsity-driven phase change, the polytope geometry, and a link to adversarial examples in models small enough to understand completely [[source.elhage-2022]]; adopted as a core concept in mech-interp reviews and the motivation for sparse-autoencoder feature extraction [[source.bereska-2024]]. **[confirmed]** **Limits:** the clean results are in *toy* models; the claim that large production models use superposition the same way is an extrapolation supported by, but not proven from, the toy setting. The concept rests on the features-as-directions view (see [[object.circuits-feature]]); if features are not directions, the framing weakens. **[confirmed]**
