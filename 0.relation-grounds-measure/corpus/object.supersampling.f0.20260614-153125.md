---
name: supersampling
type: object
object-type: method
essence: take several samples per pixel (often by rendering at higher resolution) and average them down — a brute-force numerical approximation to ideal prefiltering
field: [field.graphics-sampling-artifacts]
status: established
state: settled
attribution: a standard anti-aliasing technique codified in the rendering literature; not a single-author result
formalized: true
source: [source.foley-vandam-1982, source.glassner-1995, source.pharr-pbr]
depends-on: [object.spatial-anti-aliasing, object.aliasing-in-rendering, object.sampling-theorem]
used-by: []
aliases: ["object.supersampling"]
---

**statement (plain)** — render the image at more samples than you will display — for example compute it at 4× the resolution, or take several color samples inside each pixel — and then average those samples to get each final pixel. Because each output pixel is now the mean of many readings spread across its area, edges come out as smooth blends instead of hard steps, and the jaggies, moiré and edge-crawl of aliasing are reduced. It is the simplest, most reliable anti-aliasing method and also the most expensive, since the renderer does several times the shading work.

**statement** — supersampling (SSAA / FSAA) approximates the area integral of the image over each pixel by Monte-Carlo-style or grid averaging of N point samples per pixel, then reconstructs (downsamples) to the display grid. Increasing the sample rate raises the effective Nyquist limit so more of the scene's high frequencies fall inside the representable band; averaging the supersamples through a reconstruction filter is a discrete approximation to the ideal prefilter of [[object.spatial-anti-aliasing]]. Sample placement varies — regular grid, jittered grid, rotated grid (~26.6°, the 2:1 atan), random/stochastic, or Poisson-disc — trading residual aliasing against noise. **[confirmed]**

**basis** — supersampling is the canonical practical anti-aliaser in the standard texts: Foley & van Dam [[source.foley-vandam-1982]] and Glassner [[source.glassner-1995]] present it as supersample-then-filter; the PBR book [[source.pharr-pbr]] treats it within the sampling-and-reconstruction framework as numerical estimation of the pixel-area integral. The Nyquist/band-limit justification (raising the sample rate, then low-pass filtering on the way down) is the [[object.sampling-theorem]] applied to a finite sampler; confirmed by the Wikipedia "Supersampling" article, which states proper aliasing removal requires sampling at or above the Nyquist rate after an anti-aliasing filter and frames supersampling as a less-demanding approximation.

**lineage** — supersampling is a method, not a theorem, so no single attribution; it is the direct numerical realization of Crow's prefilter cure ([[object.spatial-anti-aliasing]], [[source.crow-1977]]) when the continuous image cannot be filtered analytically. Sample-pattern refinements connect to [[object.stochastic-sampling]] (Cook 1986): jittered and Poisson-disc patterns convert residual aliasing into less objectionable noise. The rotated-grid variant (RGSS/RGSSAA) and multisampling (MSAA, which supersamples coverage but shades once) are later engineering descendants — carried as context, not keystones. **[confirmed as attribution]**

**sources** — Foley & van Dam (1982) [[source.foley-vandam-1982]]; Glassner, *Principles of Digital Image Synthesis* (1995) [[source.glassner-1995]]; Pharr, Jakob & Humphreys, *Physically Based Rendering* (pbr-book.org) [[source.pharr-pbr]]; Wikipedia "Supersampling" and "Spatial anti-aliasing" (definition, sample patterns, Nyquist framing) — secondary corroboration.
