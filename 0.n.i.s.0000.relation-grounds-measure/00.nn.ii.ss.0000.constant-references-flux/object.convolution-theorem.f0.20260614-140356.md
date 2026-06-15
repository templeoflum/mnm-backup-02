---
name: convolution-theorem
type: object
object-type: theorem
essence: the Fourier transform turns convolution into pointwise multiplication (and vice versa)
field: [field.harmonic-fourier-analysis, field.real-analysis-limits]
status: proven
state: verified
attribution: classical (operational-calculus / Fourier–Laplace tradition); no single founder. NOT the Titchmarsh convolution theorem (a distinct result on supports).
formalized: false
source: [source.stein-shakarchi-2003, source.stein-weiss-1971]
depends-on: [object.fourier-transform]
used-by: [object.spatial-anti-aliasing]
---

**statement (plain)** — convolving two functions (sliding one across the other and integrating the overlap) corresponds, on the frequency side, to simply multiplying their Fourier transforms point by point. This is why filtering — a convolution in the time domain — becomes a multiplication in the frequency domain, and is the basis of fast convolution via the FFT.

**statement (formal)** — define the convolution (f ∗ g)(x) = ∫_{ℝⁿ} f(y) g(x − y) dy. Then for suitable f, g (e.g. f, g ∈ L¹(ℝⁿ)),
  (f ∗ g)^ = c · f̂ · ĝ   (Fourier transform of a convolution = product of transforms),
and dually
  (f · g)^ = c′ · (f̂ ∗ ĝ)   (transform of a product = convolution of transforms),
where the constants c, c′ depend on the chosen 2π-normalization convention (c = (2π)^{n/2} under the symmetric (2π)^{−n/2} convention; c = 1 under the e^{−2πi x·ξ} convention). **[confirmed]**

**status** — proven (an exercise once Fubini's theorem and the [[object.fourier-transform]] definition are in hand).

**proof** — substitute the integral definition of f ∗ g into the transform and exchange the order of integration (Fubini), using the translation property e^{−iξ·x} of the exponential; the cross-integral factors into f̂(ξ) · ĝ(ξ). See [[source.stein-shakarchi-2003]] and [[source.stein-weiss-1971]]. **[confirmed]**

**lineage** — the identity belongs to the classical operational calculus of the Fourier and Laplace transforms; it has no single contested founder and is presented in standard texts without attribution. An early appearance of the convolution-then-transform relation is in Borel's work on divergent series (1899). **Caution:** this is *not* the **Titchmarsh convolution theorem** (Titchmarsh 1926), which is a different statement about the support of a convolution. **[confirmed as attribution]**

**door** — Stein & Shakarchi, *Fourier Analysis: An Introduction*, ch. 5 [[source.stein-shakarchi-2003]]; Stein & Weiss for the Euclidean n-dimensional form [[source.stein-weiss-1971]].

**sources** — [[source.stein-shakarchi-2003]], [[source.stein-weiss-1971]]; formula cross-checked against the Wikipedia "Convolution theorem" article and Wolfram MathWorld (independent confirmation of the transform-of-convolution = product identity).
