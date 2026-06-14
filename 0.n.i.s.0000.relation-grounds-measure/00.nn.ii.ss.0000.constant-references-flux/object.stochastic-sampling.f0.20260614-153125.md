---
name: stochastic-sampling
type: object
object-type: method
essence: sample at nonuniform (randomized) locations so frequencies above the Nyquist limit show up as benign noise instead of structured aliasing
field: [field.graphics-sampling-artifacts, field.monte-carlo-methods]
status: established
state: float
attribution: introduced for computer graphics by Robert L. Cook (1986); built on distributed ray tracing (Cook, Porter & Carpenter 1984)
formalized: true
source: [source.cook-1986, source.pharr-pbr, source.glassner-1995]
depends-on: [object.aliasing-in-rendering, object.sampling-theorem, field.monte-carlo-methods]
used-by: [object.supersampling]
---

**statement (plain)** — instead of placing samples on a regular grid, scatter them at slightly random positions. With a regular grid, detail finer than the grid folds into coherent false patterns (jaggies, moiré) that the eye latches onto. With randomized sample positions that same too-fine detail still cannot be captured, but it no longer folds into structured patterns — it scatters into noise of the right average brightness. The eye tolerates a bit of grain far better than it tolerates a marching staircase, so the image looks correct even though information was still lost. Randomizing where you sample also lets you average over things like motion, lens blur and soft shadows, by treating rendering as a Monte Carlo integral.

**statement** — stochastic sampling replaces a uniform sampling lattice with samples drawn from a nonuniform (e.g. jittered or Poisson-disc) distribution. Cook's result is that with appropriately randomized sample locations, signal energy above the Nyquist limit does not alias into coherent low-frequency artifacts but instead appears as broadband noise at the correct mean intensity; a Poisson-disc (minimum-distance) distribution reduces the noise magnitude relative to pure random ("white-noise") sampling. Distributing the rays stochastically turns point-sampling into a Monte Carlo estimator of the integrals in the rendering equation (over pixel area, time, lens, light). **[confirmed]**

**basis** — Cook's 1986 paper [[source.cook-1986]] is the origin: it argues aliasing artifacts in ray tracing / point sampling are a consequence of *regular* spacing, not of point sampling itself, and that nonuniform sampling converts above-Nyquist energy into less objectionable noise; it analyzes jittered and Poisson-disc patterns and frames distributed ray tracing as Monte Carlo integration. The relation to the [[object.sampling-theorem]] is exact — randomization does not recover lost frequencies (that remains impossible above Nyquist) but reshapes the unavoidable error from structured aliasing into noise. The PBR book [[source.pharr-pbr]] and Glassner [[source.glassner-1995]] codify stochastic/Monte Carlo sampling and reconstruction on this basis; dblp and ACM confirm the citation (ACM TOG 5(1):51–72, 1986). **[confirmed]**

**lineage** — the technique grew out of *distributed ray tracing* (Cook, Porter & Carpenter, *SIGGRAPH* 1984), which used jittered sampling for motion blur, depth of field and soft shadows; Cook (1986) generalized and gave the aliasing-as-noise analysis. The jittered/Poisson-disc patterns feed back into [[object.supersampling]] sample placement. Yellott (1983) had observed the Poisson-disc-like distribution of retinal cones as a biological anti-aliaser — carried as a cross-link, not a graphics keystone. **[confirmed as attribution]**

**sources** — Cook, "Stochastic Sampling in Computer Graphics," *ACM TOG* 5(1) 1986:51–72 [[source.cook-1986]]; Pharr, Jakob & Humphreys, *Physically Based Rendering* (pbr-book.org) [[source.pharr-pbr]]; Glassner, *Principles of Digital Image Synthesis* (1995) [[source.glassner-1995]]; dblp `journals/tog/Cook86`, ACM DOI 10.1145/7529.8927 (bibliographic confirmation) — secondary corroboration.
