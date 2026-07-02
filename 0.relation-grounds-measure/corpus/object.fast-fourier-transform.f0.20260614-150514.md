---
name: fast-fourier-transform
type: object
object-type: algorithm
essence: computes the DFT in O(N log N) instead of O(N²) by divide-and-conquer over the factors of N
field: ["[[field.digital-signal-processing]]", "[[field.algorithms]]", "[[field.harmonic-fourier-analysis]]"]
status: established
state: settled
attribution: Cooley & Tukey (1965) — popularized; rediscovery of an algorithm Gauss used in 1805
formalized: true
source: ["[[source.cooley-tukey-1965]]", "[[source.oppenheim-schafer-1975]]"]
depends-on: ["[[object.discrete-fourier-transform]]"]
used-by: []
aliases: ["object.fast-fourier-transform"]
---

**statement (plain)** — the fast Fourier transform is not a different transform; it is a fast way to compute the [[object.discrete-fourier-transform]]. Computing the DFT straight from the definition costs about N² multiply-adds. The FFT exploits the structure of the roots of unity to split one length-N DFT into smaller DFTs recursively, dropping the cost to about N log N. For N = 10⁶ this is the difference between ~10¹² and ~2×10⁷ operations — it is what made real-time digital signal processing practical.

**statement (formal)** — for N = N₁N₂, the index map n = N₂ n₁ + n₂, k = k₁ + N₁ k₂ factors the DFT sum

  X[k] = Σ_{n=0}^{N−1} x[n] W_N^{kn},  W_N = e^{−j 2π/N},

into an inner set of N₁ DFTs of length N₂, a multiplication by **twiddle factors** W_N^{n₂ k₁}, and an outer set of N₂ DFTs of length N₁. Applied recursively (radix-2: N = 2^m, splitting even- and odd-indexed samples — decimation in time/frequency), the arithmetic cost is **Θ(N log N)** versus Θ(N²) for direct evaluation. **[confirmed]**

**method** — radix-2 decimation-in-time: split x into even-indexed and odd-indexed subsequences, take the length-N/2 DFT of each, then combine with twiddle factors via the butterfly E[k] + W_N^k O[k] / E[k] − W_N^k O[k]. Recurse to base case. The recurrence T(N) = 2T(N/2) + O(N) gives T(N) = O(N log N). Variants: decimation-in-frequency, mixed-radix and prime-factor algorithms for composite N, and Bluestein/Rader's for prime N. **[confirmed]**

**lineage** — published by **J. W. Cooley & J. W. Tukey, 1965** [[source.cooley-tukey-1965]], "An Algorithm for the Machine Calculation of Complex Fourier Series," *Math. Comp.* 19(90), 297–301 — the paper that popularized the FFT and triggered the modern DSP field. The same divide-and-conquer scheme was used by **C. F. Gauss around 1805** (interpolating the orbits of the asteroids Pallas and Juno) but he never analyzed its asymptotic cost and the connection went unrecognized until years after 1965. **[confirmed]** — Cooley–Tukey paper details and the Gauss precursor corroborated by Wikipedia and multiple algorithms course notes.

**door** — Oppenheim & Schafer (codification) [[source.oppenheim-schafer-1975]]; the Cooley–Tukey paper itself [[source.cooley-tukey-1965]].
