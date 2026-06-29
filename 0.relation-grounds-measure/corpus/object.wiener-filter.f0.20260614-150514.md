---
name: wiener-filter
type: object
object-type: method
essence: the linear time-invariant filter that minimizes mean-square error in estimating a stationary signal buried in additive noise
field: [field.detection-estimation-theory, field.digital-signal-processing]
status: established
state: settled
attribution: Norbert Wiener (1942 classified report, publ. 1949); discrete-time independently Andrey Kolmogorov (1941)
formalized: true
source: [source.wiener-1949, source.kolmogorov-1941, source.kay-1993]
depends-on: [object.mmse-estimator]
used-by: [object.kalman-filter]
---

**statement (plain)** — given a signal of interest mixed with noise, both treated as stationary random processes with known statistics, the Wiener filter is the linear filter that gives the smoothest, most accurate estimate of the signal in the average-squared-error sense. It is the best possible *linear* filter built only from the signals' correlation structure.

**statement (formal)** — to estimate a desired stationary process d[n] from an observed stationary process x[n], the optimal LTI filter w minimizes E{ |d[n] − ŵᵀx|² }. The optimum satisfies the **Wiener–Hopf normal equations**
  R_xx w = r_dx,
where R_xx is the (Toeplitz) autocorrelation matrix of x and r_dx the cross-correlation of d with x; equivalently in the frequency domain the noncausal solution is W(f) = S_dx(f) / S_xx(f), a ratio of (cross-)power spectral densities. **[confirmed]**

**status** — established.

**method** — the Wiener filter is the **linear MMSE estimator** ([[object.mmse-estimator]]) specialized to stationary processes and an LTI filter structure. The Wiener–Hopf equations are the *orthogonality principle* — error orthogonal to the data — written for stationary signals; the causal (one-sided) solution requires spectral factorization (the Wiener–Hopf technique). For finite filters the equations are solved efficiently by the Levinson–Durbin recursion. **[confirmed]**

**lineage** — Norbert Wiener developed the theory in a classified NDRC report (1942), *Extrapolation, Interpolation, and Smoothing of Stationary Time Series* (nicknamed the "yellow peril"), formally published as *Extrapolation, Interpolation, and Smoothing of Stationary Time Series, with Engineering Applications* (MIT Press / Wiley, 1949) [[source.wiener-1949]]. The discrete-time problem was solved independently and earlier by Andrey N. Kolmogorov, "Stationary sequences in Hilbert space" (1941, in Russian) [[source.kolmogorov-1941]] — hence "Wiener–Kolmogorov filtering." The Wiener filter is the steady-state, stationary special case later subsumed by the recursive [[object.kalman-filter]]. **[confirmed]**

**sources** — Wiener (1949) [[source.wiener-1949]]; Kolmogorov (1941) [[source.kolmogorov-1941]]; Kay, *Fundamentals of Statistical Signal Processing, Vol. I: Estimation Theory* [[source.kay-1993]]. Cross-checked against Wikipedia "Wiener filter" and "Wiener–Hopf equations." The Wiener and Kolmogorov originals are cited from the secondary literature — **[confirmed as attribution]** for the originals; the optimality and Wiener–Hopf statements are **[confirmed]**.
