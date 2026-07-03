---
name: learned-canonicalization
type: object
object-type: method
essence: learning the canonicalization function itself — a small equivariant network that maps each input to its canonical pose, freeing the main model from architectural symmetry constraints
field: ["[[field.geometric-deep-learning]]"]
status: established
state: float
attribution: S.-O. Kaba, A. Mondal, Y. Zhang, Y. Bengio, S. Ravanbakhsh (2023)
formalized: true
source: ["[[source.kaba-2023]]"]
depends-on: ["[[object.canonicalization]]"]
used-by: []
---

**statement (plain)** — rather than hand-designing how to put an input into canonical pose, train a network to do it. A small equivariant module predicts the group element that canonicalizes the input; the (unconstrained) main network then processes the canonical form. This matches purpose-built equivariant architectures across image classification, N-body dynamics, and point-cloud tasks.

**statement (formal)** — learn h: X → G (equivariant) so that c(x) = h(x)⁻¹·x is canonical; any downstream f then gives f∘c invariant/equivariant, with h trained jointly rather than fixed. **[confirmed]**

**basis** — Kaba et al. (ICML 2023); an instance of the canonicalization concept with a *learned* representative map.
