---
name: digital-filter
type: object
object-type: definition
essence: a discrete-time LTI system that reshapes a signal's spectrum via a difference equation — FIR (no feedback) or IIR (feedback)
field: [field.digital-signal-processing]
status: established
state: settled
attribution: the core operational object of DSP; codified in the DSP textbook tradition (Oppenheim & Schafer, 1975)
formalized: true
source: [source.oppenheim-schafer-1975, source.smith-dspguide]
depends-on: [object.z-transform, object.discrete-fourier-transform]
used-by: []
---

**statement (plain)** — a digital filter is a computation that takes a stream of samples in and puts a stream of samples out, selectively passing or attenuating frequency bands (low-pass, high-pass, band-pass, etc.). Two families: an **FIR** (finite impulse response) filter computes each output purely from a finite window of inputs — no feedback, so its response to a single spike dies out after a fixed number of samples; an **IIR** (infinite impulse response) filter feeds past outputs back in, so its impulse response can ring on indefinitely. FIR trades more computation for guaranteed stability and exactly linear phase; IIR gets sharp responses cheaply but must be checked for stability.

**statement (formula)** — a causal linear constant-coefficient difference equation:

  y[n] = Σ_{i=0}^{M} b_i x[n−i] − Σ_{k=1}^{N} a_k y[n−k].

- **FIR / nonrecursive**: all a_k = 0, so y[n] = Σ_{i=0}^{M} b_i x[n−i] — a convolution of the input with the finite impulse response {b_i}.
- **IIR / recursive**: some a_k ≠ 0 (feedback on past outputs), giving a generally infinite impulse response.

The transfer function (via the [[object.z-transform]]) is H(z) = B(z)/A(z) = (Σ b_i z^{−i}) / (1 + Σ a_k z^{−k}); the **zeros** come from B(z) (feedforward), the **poles** from A(z) (feedback). The frequency response is H(e^{jω}). **[confirmed]**

**basis / properties** — a digital filter is a discrete-time LTI system, so it is fully characterized by its impulse response h[n], and its action is convolution: y[n] = (h * x)[n]. An FIR filter is **always BIBO-stable** (finite sum) and can be made **exactly linear-phase** by symmetric coefficients. An IIR filter is **stable iff all poles lie inside the unit circle** (the [[object.z-transform]] ROC includes the unit circle). Spectral analysis and fast filtering route through the [[object.discrete-fourier-transform]] / [[object.fast-fourier-transform]] (fast convolution). **[confirmed]** — FIR/IIR definitions, difference equation, recursive vs nonrecursive, and stability criterion corroborated across DSP references (dsprelated/Smith free books, GeeksforGeeks, CircuitGlobe, Testbook).

**lineage** — the difference-equation/impulse-response formulation of discrete-time filters is core to the DSP textbook tradition, canonically Oppenheim & Schafer [[source.oppenheim-schafer-1975]]; the FIR/IIR terminology and design practice are standard across the literature.

**door** — Smith, *The Scientist and Engineer's Guide to DSP*, the FIR/IIR chapters [[source.smith-dspguide]]; Oppenheim & Schafer [[source.oppenheim-schafer-1975]]; Lyons, *Understanding DSP* [[source.lyons-understanding-dsp]].
