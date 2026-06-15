---
name: z-transform
type: object
object-type: definition
essence: the discrete-time analogue of the Laplace transform — maps a sequence to a function of a complex variable z, with a region of convergence
field: [field.digital-signal-processing]
status: established
state: settled
attribution: the discrete-time counterpart of the Laplace transform; codified in the DSP/control literature (Oppenheim & Schafer, 1975)
formalized: true
source: [source.oppenheim-schafer-1975, source.smith-dspguide]
depends-on: [object.discrete-fourier-transform]
used-by: [object.digital-filter]
---

**statement (plain)** — the z-transform is the tool that turns a discrete-time signal or system into algebra. It maps a sequence into a function of a complex variable z; delays become factors of z⁻¹, so difference equations turn into polynomial/rational expressions you can manipulate. Where the sum converges (the region of convergence) and where the function blows up (poles) tells you whether a system is stable and how it behaves. It is to sampled signals what the Laplace transform is to continuous ones.

**statement (formula)** — the (bilateral) z-transform of a sequence x[n] is

  X(z) = Σ_{n=−∞}^{∞} x[n] z^{−n},   z ∈ ℂ,

defined on the set of z for which the sum converges absolutely (Σ |x[n] z^{−n}| < ∞) — the **region of convergence (ROC)**, an annulus in the z-plane bounded by circles. The unilateral z-transform sums from n = 0. On the unit circle z = e^{jω} the z-transform reduces to the discrete-time Fourier transform; the [[object.discrete-fourier-transform]] is its sampling at N equally spaced points on that circle. **[confirmed]**

**basis / properties** — the defining property is that a unit delay x[n−1] ↦ z⁻¹ X(z), making it the natural transform for linear constant-coefficient difference equations. The ROC contains no poles. A causal sequence has an ROC outside the outermost pole; a system is **BIBO-stable iff its ROC includes the unit circle** (for a causal system, iff all poles lie strictly inside the unit circle). These facts are what make it the design space for the [[object.digital-filter]] (transfer function H(z) = B(z)/A(z); poles = feedback, zeros = feedforward). **[confirmed]**

**lineage** — the z-transform is the discrete-time analogue of the Laplace transform; the modern definition, the ROC apparatus, and its filter/control use are codified in the DSP textbook tradition, canonically Oppenheim & Schafer [[source.oppenheim-schafer-1975]]. Formula and ROC properties corroborated across engineering references (LibreTexts, MIT OCW 6.003, UCT notes, Keysight).

**door** — Oppenheim & Schafer [[source.oppenheim-schafer-1975]]; Smith, *The Scientist and Engineer's Guide to DSP*, the z-transform chapter [[source.smith-dspguide]].
