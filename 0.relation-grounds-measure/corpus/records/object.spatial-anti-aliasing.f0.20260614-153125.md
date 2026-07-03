---
name: spatial-anti-aliasing
type: object
object-type: method
essence: suppress aliasing by band-limiting the scene before (or as) it is sampled — prefiltering / area-sampling so each pixel reflects an averaged region, not one point
field: ["[[field.digital-signal-processing]]", "[[field.digital-signal-processing]]"]
status: established
state: settled
attribution: prefiltering cure for rendering proposed by Franklin C. Crow (1977); rooted in the sampling theorem (band-limit before sampling)
formalized: true
source: ["[[source.crow-1977]]", "[[source.foley-vandam-1982]]", "[[source.glassner-1995]]", "[[source.pharr-pbr]]"]
depends-on: ["[[object.aliasing-in-rendering]]", "[[object.sampling-theorem]]", "[[object.convolution-theorem]]"]
used-by: ["[[object.supersampling]]"]
---

**statement (plain)** — to stop aliasing you remove the too-fine detail before it can fold into false patterns. Instead of asking "what color is the scene at the exact center of this pixel?" you ask "what is the average color over the area this pixel covers?" Mathematically you blur (filter) the continuous image to throw away frequencies finer than the pixel grid can carry, and only then read off pixel values. A pixel on a slanted edge then becomes a blend of both sides — a smooth grey ramp — rather than a hard black-or-white step, and the staircase softens.

**statement** — spatial anti-aliasing reduces aliasing by attenuating spatial frequencies above the Nyquist limit of the output grid before sampling. Ideal prefiltering convolves the continuous image with a low-pass filter (an ideal sinc, or a practical Gaussian/box/tent/windowed-sinc) and samples the result; by the [[object.convolution-theorem]] this multiplies the spectrum by the filter's transfer function, so out-of-band frequencies are suppressed rather than aliased. Equivalently each pixel integrates a weighted area of the image (area sampling) instead of one point sample. **[confirmed]**

**basis** — Crow [[source.crow-1977]] proposed prefiltering as the recognized cure for rendering aliasing, gave a method for evaluating filters, and showed prefiltering applied to hidden-surface algorithms. The signal-processing justification is the [[object.sampling-theorem]]: a signal sampled at rate f_s is reconstructible only if it is band-limited below f_s/2, so the correct defense is to band-limit (low-pass filter) before sampling — confirmed by the standard treatments. Foley & van Dam [[source.foley-vandam-1982]], Glassner [[source.glassner-1995]], and the PBR book [[source.pharr-pbr]] all frame anti-aliasing as filtering/reconstruction governed by sampling theory.

**lineage** — the prefilter-before-sampling principle is the sampling theorem applied in reverse (kill the high band so it can't alias). Crow (1977) is the origin for rendering; he distinguished prefiltering (filter the continuous image, then sample) from postfiltering. Supersample-then-downsample ([[object.supersampling]]) is a numerical approximation to ideal prefiltering when the continuous image cannot be filtered analytically; stochastic sampling ([[object.stochastic-sampling]]) is the alternative strategy of trading aliasing for noise rather than removing the high band. **[confirmed]**

**sources** — Crow, *CACM* 20(11) 1977 [[source.crow-1977]]; Foley & van Dam (1982) [[source.foley-vandam-1982]]; Glassner, *Principles of Digital Image Synthesis* (1995) [[source.glassner-1995]]; Pharr, Jakob & Humphreys, *Physically Based Rendering* (pbr-book.org) [[source.pharr-pbr]]; Wikipedia "Spatial anti-aliasing" (Nyquist/prefiltering framing) — secondary corroboration.
