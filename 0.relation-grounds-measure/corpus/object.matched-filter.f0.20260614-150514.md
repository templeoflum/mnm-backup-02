---
name: matched-filter
type: object
object-type: method
essence: correlate the observation against a time-reversed copy of the known signal — the linear filter that maximizes output signal-to-noise ratio
field: ["[[field.detection-estimation-theory]]", "[[field.digital-signal-processing]]"]
status: established
state: settled
attribution: D. O. North (1943, RCA report); term "matched filter" from Van Vleck & Middleton (1946)
formalized: true
source: ["[[source.north-1943]]", "[[source.van-vleck-middleton-1946]]", "[[source.van-trees-1968]]", "[[source.kay-1993]]"]
depends-on: ["[[object.likelihood-ratio-test]]"]
used-by: []
aliases: ["object.matched-filter"]
---

**statement (plain)** — to pull a known signal shape out of noise, run the data through the filter whose impulse response is that same signal flipped in time. Among all linear filters, this one gives the largest possible peak-to-noise ratio at the instant the signal lines up. It works by correlating the incoming data against a stored template of what you are looking for.

**statement (formal)** — to detect a known signal s(t) in additive noise, the linear filter h(t) maximizing the output signal-to-noise ratio at sampling instant T is the **time-reversed (and, complex case, conjugated) signal**:
  h(t) = s(T − t)   (white noise),
so the output is the correlation ∫ x(τ) s(τ) dτ. In discrete/vector form with observation x, signal s, and noise covariance R:
- **white noise** (R = σ²I): optimal filter ∝ s; statistic = sᴴx.
- **colored noise:** optimal filter h ∝ R⁻¹s; statistic = sᴴR⁻¹x (a *whitening* matched filter), with maximum SNR = sᴴR⁻¹s. **[confirmed]**

**status** — established (optimality is a proven consequence of the Cauchy–Schwarz inequality).

**method (derivation)** — output SNR = |hᴴs|² / (hᴴRh). By the Cauchy–Schwarz inequality applied to the inner product ⟨a,b⟩ = aᴴRb with a = h, the ratio is maximized when h ∝ R⁻¹s, giving max SNR = sᴴR⁻¹s. The matched filter is exactly the [[object.likelihood-ratio-test]] for a *known signal in Gaussian noise*: the log-likelihood ratio there reduces to the linear statistic sᴴR⁻¹x compared to a threshold — detector optimality and SNR-maximality coincide.

**lineage** — first derived by **D. O. North**, "An Analysis of the Factors which Determine Signal/Noise Discrimination in Pulsed-Carrier Systems," RCA Laboratories Technical Report PTR-6C (1943) — for which it was long called the **"North filter"** [[source.north-1943]]. The name **"matched filter"** is attributed to J. H. Van Vleck & D. Middleton (1946), arising from their wartime radar work [[source.van-vleck-middleton-1946]]. Codified in Van Trees Part I [[source.van-trees-1968]] and Kay vol. II [[source.kay-1993]]. **[confirmed]**

**sources** — North (1943) [[source.north-1943]]; Van Vleck & Middleton (1946) [[source.van-vleck-middleton-1946]]; Van Trees, *Detection, Estimation, and Modulation Theory, Part I* [[source.van-trees-1968]]; Kay, *Fundamentals of Statistical Signal Processing, Vol. II* [[source.kay-1993]]. Cross-checked against Wikipedia "Matched filter." North's report is cited from the secondary literature, not opened — **[confirmed as attribution]** for the 1943 origin; the optimality statement itself is **[confirmed]**.
