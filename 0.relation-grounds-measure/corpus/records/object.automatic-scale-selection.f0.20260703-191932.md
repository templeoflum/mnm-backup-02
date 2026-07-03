---
name: automatic-scale-selection
type: object
object-type: method
essence: detecting features at the scales where scale-normalized derivatives take extrema — Lindeberg's rule that turns scale-space into a scale-invariant detector
field: ["[[field.scale-space-theory]]"]
status: established
state: float
attribution: T. Lindeberg (1998)
formalized: true
source: ["[[source.lindeberg-1998]]"]
depends-on: ["[[object.scale-space]]"]
used-by: ["[[object.sift]]"]
---

**statement (plain)** — scale-space holds every scale; automatic scale selection tells you which scale matters *here*. At each location you look along the scale axis and pick the scale where a normalized response peaks — that peak scale rides with the object's size, so the detector responds the same whether the object is near or far.

**statement (formal)** — select the scale t̂(x) = argmax_t (t^{γ} · |D L(x;t)|) for a normalized differential operator D (e.g. the Laplacian, γ=1); the (x,t̂) scale-space extrema of γ-normalized derivatives are the scale-covariant feature points. **[confirmed]**

**basis** — Lindeberg (1998); the mechanism SIFT uses (difference-of-Gaussians extrema across scale).
