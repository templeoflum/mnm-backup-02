---
name: kalman-filter
type: object
object-type: algorithm
essence: a recursive predict-then-correct estimator giving the minimum-variance state estimate of a linear dynamical system from noisy measurements
field: ["[[field.detection-estimation-theory]]", "[[field.cybernetics-control-theory]]"]
status: established
state: settled
attribution: Rudolf E. Kálmán (1960, discrete-time); Kálmán & Bucy (1961, continuous-time)
formalized: true
source: ["[[source.kalman-1960]]", "[[source.kalman-bucy-1961]]", "[[source.kay-1993]]"]
depends-on: ["[[object.wiener-filter]]", "[[object.mmse-estimator]]"]
used-by: []
---

**statement (plain)** — track the hidden state of a system that evolves in time (a vehicle's position and velocity, say) from a stream of noisy measurements. At each step the filter predicts the next state from the model, then corrects that prediction using the new measurement, weighting the two by how much it trusts each. It runs recursively — only the latest estimate and its uncertainty are kept, not the whole history — and gives the best estimate in the minimum-mean-square-error sense for a linear Gaussian system.

**statement (formal)** — for the linear-Gaussian state-space model
  xₖ = Fₖ xₖ₋₁ + Bₖ uₖ + wₖ,  wₖ ~ N(0, Qₖ)
  zₖ = Hₖ xₖ + vₖ,        vₖ ~ N(0, Rₖ)
the filter alternates:
- **Predict:** x̂ₖ∣ₖ₋₁ = Fₖ x̂ₖ₋₁∣ₖ₋₁ + Bₖ uₖ ; Pₖ∣ₖ₋₁ = Fₖ Pₖ₋₁∣ₖ₋₁ Fₖᵀ + Qₖ.
- **Update:** Sₖ = Hₖ Pₖ∣ₖ₋₁ Hₖᵀ + Rₖ ; Kₖ = Pₖ∣ₖ₋₁ Hₖᵀ Sₖ⁻¹ ;
  x̂ₖ∣ₖ = x̂ₖ∣ₖ₋₁ + Kₖ(zₖ − Hₖ x̂ₖ∣ₖ₋₁) ; Pₖ∣ₖ = (I − Kₖ Hₖ) Pₖ∣ₖ₋₁.
Kₖ is the **Kalman gain**, zₖ − Hₖ x̂ₖ∣ₖ₋₁ the **innovation**. If Q, R are known the result is the best *linear* estimator in the MMSE sense; under Gaussian noise it is the optimal estimator outright (= posterior mean). **[confirmed]**

**status** — established.

**method** — the filter is the recursive form of the [[object.mmse-estimator]] propagated through a dynamical model: each update is a linear-MMSE correction (the gain is the cross-covariance times the inverse innovation covariance), and the Gaussian posterior stays Gaussian, so mean and covariance suffice. It generalizes the [[object.wiener-filter]] — same minimum-mean-square-error goal, but recursive, time-varying, and for nonstationary state-space models rather than a fixed LTI filter on stationary processes. Kálmán himself derived it by applying state variables to the Wiener problem. **[confirmed]**

**lineage** — Rudolf E. Kálmán, "A New Approach to Linear Filtering and Prediction Problems," *Trans. ASME—J. Basic Engineering* 82 ser. D (1960):35–45 [[source.kalman-1960]], for discrete time; the continuous-time version is Rudolf E. Kálmán & Richard S. Bucy, "New Results in Linear Filtering and Prediction Theory," *Trans. ASME—J. Basic Engineering* 83 ser. D (1961):95–108 [[source.kalman-bucy-1961]] (the **Kalman–Bucy filter**). Earlier related recursions are credited to Thorvald N. Thiele and to Peter Swerling; Stanley F. Schmidt produced the first major implementation (Apollo navigation), carried as lineage, not co-origin. **[confirmed]**

**sources** — Kálmán (1960) [[source.kalman-1960]]; Kálmán & Bucy (1961) [[source.kalman-bucy-1961]]; Kay, *Fundamentals of Statistical Signal Processing, Vol. I: Estimation Theory*, ch. 13 [[source.kay-1993]]. Cross-checked against Wikipedia "Kalman filter." **[confirmed]**
