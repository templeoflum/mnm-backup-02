---
name: sampling-theorem
type: object
object-type: theorem
essence: a bandlimited signal is completely determined by, and reconstructible from, samples taken at a rate of at least twice its bandwidth
field: [field.digital-signal-processing, field.information-theory, field.harmonic-fourier-analysis]
status: proven
state: float
attribution: rate bound Nyquist (1928); stated & proved Shannon (1949); independent precursors Whittaker (1915) & Kotelnikov (1933) — hence "Whittaker–Kotelnikov–Shannon (WKS) theorem"
formalized: true
source: [source.shannon-1949, source.nyquist-1928]
depends-on: [object.discrete-fourier-transform, field.harmonic-fourier-analysis]
used-by: []
---

**statement (plain)** — if a continuous signal contains no frequencies above B hertz, then it holds no more information than its values sampled at evenly spaced instants 1/(2B) seconds apart. From those samples the original signal can be reconstructed exactly. So sampling faster than twice the highest frequency loses nothing; sampling slower folds high frequencies down onto low ones (aliasing) and cannot be undone.

**statement (formal)** — let x(t) be bandlimited so that its Fourier transform X(f) = 0 for |f| > B. Then x(t) is completely determined by the samples x(n/f_s) provided the sampling rate f_s > 2B, and is recovered by the cardinal series

  x(t) = Σ_{n=−∞}^{∞} x(n T) · sinc( (t − nT) / T ),  T = 1/f_s,  sinc(u) = sin(πu)/(πu).

The threshold rate 2B is the **Nyquist rate**; f_s/2 is the **Nyquist frequency**. **[confirmed]**

**proof / method** — band-limiting makes X(f) supported on (−B, B). Sampling x(t) at rate f_s periodizes its spectrum into copies spaced f_s apart; if f_s > 2B the copies do not overlap, so an ideal low-pass filter (a brick wall at the Nyquist frequency) isolates the original X(f) and inverse-transforming gives back x(t) — equivalently the sinc-interpolation cardinal series above. If f_s ≤ 2B the spectral copies overlap (aliasing) and recovery fails. Shannon gives a clean version of this argument in [[source.shannon-1949]] and connects it to a finite-dimensional (geometric) view of bandlimited signals. **[confirmed]**

**lineage** — the result has independent threads, hence the compound name **Whittaker–Kotelnikov–Shannon (WKS)**:
- H. Nyquist (1928), [[source.nyquist-1928]] — the rate bound: 2B independent pulses per second through a bandwidth-B channel; did not treat reconstruction of a continuous signal. **[confirmed]**
- E. T. Whittaker (1915), *Proc. Royal Society of Edinburgh* — the cardinal interpolation series, as a problem in interpolation theory, without the radio/communication framing. **[confirmed]**
- V. A. Kotelnikov (1933) — first to state the sampling theorem in a communications context; unknown outside the USSR until the 1950s; known in Russia as Kotelnikov's theorem. **[confirmed]**
- C. E. Shannon (1949), [[source.shannon-1949]] — the statement-plus-proof that reached engineers and tied it to channel capacity; Shannon credits Whittaker, Nyquist, and Gabor. **[confirmed]**
- (the precise theorem-number Shannon assigned in the paper is reported variously — carried as a citation detail, not load-bearing: **[candidate, unconfirmed]**)

**door** — Oppenheim & Schafer (codification) [[source.oppenheim-schafer-1975]]; Smith, *The Scientist and Engineer's Guide to DSP*, ch. on sampling [[source.smith-dspguide]].
