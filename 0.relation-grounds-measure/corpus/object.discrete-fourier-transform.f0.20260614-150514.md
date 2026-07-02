---
name: discrete-fourier-transform
type: object
object-type: definition
essence: the finite, sampled Fourier transform — maps N time samples to N frequency coefficients via roots of unity
field: ["[[field.digital-signal-processing]]", "[[field.harmonic-fourier-analysis]]"]
status: established
state: settled
attribution: the discrete/finite analogue of the Fourier transform; the standard definition codified in the DSP literature (Oppenheim & Schafer, 1975)
formalized: true
source: ["[[source.oppenheim-schafer-1975]]", "[[source.smith-dspguide]]"]
depends-on: []
used-by: ["[[object.fast-fourier-transform]]", "[[object.sampling-theorem]]", "[[object.digital-filter]]", "[[object.z-transform]]"]
---

**statement (plain)** — the DFT turns a finite list of N evenly spaced signal samples into N numbers describing the signal's frequency content. Each output coefficient says how much of one particular sinusoid (frequency k/N cycles per sample) is present, in amplitude and phase. It is the Fourier transform made finite and exact, so a computer can run it.

**statement (formula)** — for a length-N sequence x[0..N−1], the (forward / analysis) DFT is

  X[k] = Σ_{n=0}^{N−1} x[n] · e^{−j 2π k n / N},   k = 0, 1, …, N−1.

The inverse (synthesis) DFT is

  x[n] = (1/N) Σ_{k=0}^{N−1} X[k] · e^{+j 2π k n / N},   n = 0, 1, …, N−1.

Writing W_N = e^{−j 2π / N} (a primitive N-th root of unity), X[k] = Σ_n x[n] W_N^{kn} — the DFT is multiplication by the N×N matrix [W_N^{kn}]. **[confirmed]**

**basis / properties** — the DFT is invertible (the inverse above recovers x exactly), linear, and the matrix [W_N^{kn}] is (up to a 1/N scaling) unitary, so it preserves energy (Parseval). It is the transform whose periodization underlies the [[object.sampling-theorem]] and whose direct evaluation costs O(N²) operations — the cost the [[object.fast-fourier-transform]] cuts to O(N log N). The DFT implicitly treats x as one period of a periodic sequence, so circular (cyclic) convolution, not linear convolution, is its natural product. **[confirmed]**

**lineage** — the DFT is the discrete, finite-support specialization of the continuous Fourier transform (Fourier, 1807/1822); as the object actually computed in DSP it was codified in the textbook tradition, canonically Oppenheim & Schafer [[source.oppenheim-schafer-1975]]. Formula corroborated across DSP course notes (UFL, Michigan EECS, Oxford, NYU) and dspguide [[source.smith-dspguide]].

**door** — Smith, *The Scientist and Engineer's Guide to DSP*, the DFT chapters [[source.smith-dspguide]]; Oppenheim & Schafer [[source.oppenheim-schafer-1975]].
