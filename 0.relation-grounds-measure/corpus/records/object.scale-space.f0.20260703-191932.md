---
name: scale-space
type: object
object-type: concept
essence: the family of a signal blurred at every scale by a Gaussian — the uncommitted multi-scale representation; the scale-normalized Laplacian σ²∇²G is what makes feature detection scale-invariant
field: ["[[field.scale-space-theory]]"]
status: established
state: settled
attribution: Witkin/Koenderink lineage; systematized by T. Lindeberg (1994)
formalized: true
source: ["[[source.lindeberg-1994]]", "[[source.koenderink-vandoorn-1992]]"]
depends-on: []
used-by: ["[[object.automatic-scale-selection]]", "[[object.sift]]"]
---

**statement (plain)** — you cannot know in advance at what scale the important structure in an image lives, so scale-space keeps *all* scales at once: blur the image by Gaussians of every width and stack the results. Structure that survives across scales is meaningful; features found this way can be made not to care about the object's size.

**statement (formal)** — the (linear, Gaussian) scale-space of f is L(·;t) = g(·;t) * f for Gaussians g of variance t ≥ 0; scale-space extrema are scale-covariant, and the scale-normalized Laplacian σ²∇²G (t·∇²L) is required for true scale invariance. **[confirmed]**

**basis** — Lindeberg (1994); Koenderink & van Doorn receptive-field model. The representation underlying automatic scale selection and SIFT.
