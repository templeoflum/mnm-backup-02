---
name: sift
type: object
object-type: method
essence: Scale-Invariant Feature Transform — detect keypoints at difference-of-Gaussians scale-space extrema, assign scale and orientation, and describe them with normalized gradient histograms
field: ["[[field.scale-space-theory]]"]
status: established
state: settled
attribution: David G. Lowe (1999, 2004)
formalized: true
source: ["[[source.lowe-2004]]"]
depends-on: ["[[object.scale-space]]", "[[object.automatic-scale-selection]]"]
used-by: []
---

**statement (plain)** — SIFT finds distinctive points in an image that can be re-found when the image is scaled, rotated, or re-lit. It locates them as peaks across the blurred scale-stack, pins a scale and a dominant orientation to each, then summarizes the surrounding gradients into a normalized fingerprint. Those fingerprints match the same physical point across very different photos.

**statement (formal)** — keypoints = extrema of the difference-of-Gaussians pyramid (≈ σ²∇²G) over space and scale; each is assigned scale and a dominant gradient orientation; the descriptor is a grid of gradient-orientation histograms, normalized and clamped at 0.2 for illumination invariance. **[confirmed]**

**basis** — Lowe (1999, 2004); the canonical applied instance of scale-space + automatic scale selection. Extended to full affine invariance by ASIFT (Morel–Yu 2009).
