---
name: shannon-entropy
type: object
object-type: definition
essence: the average uncertainty (in bits) of a random source — H(X) = -Σ p log p
field: [field.information-theory]
status: proven
state: float
attribution: Claude E. Shannon (1948); precursors Nyquist (1924), Hartley (1928)
formalized: true
source: [source.shannon-1948, source.shannon-weaver-1949, source.cover-thomas-1991, source.mackay-itila, source.nyquist-1924, source.hartley-1928]
depends-on: [field.probability-theory]
used-by: [object.source-coding-theorem, object.mutual-information, object.noisy-channel-coding-theorem, object.kullback-leibler-divergence]
---

**statement (plain)** — entropy measures how uncertain you are about the outcome of a random source, in bits. A fair coin has 1 bit of entropy; a two-headed coin has 0 (no surprise). The more spread-out and unpredictable the outcomes, the higher the entropy. It is also the average number of yes/no questions needed to pin down an outcome — and the floor on how few bits can encode it.

**statement (formal)** — for a discrete random variable X taking values x with probabilities p(x), the Shannon entropy is
H(X) = − Σ_x p(x) log p(x),
with the convention 0 log 0 = 0. With log base 2 the unit is the **bit** (base e gives **nats**). Equivalently H(X) = E[ −log p(X) ], the expected [[surprisal]]. **[confirmed]**

**status** — a definition, not a theorem. Its uniqueness is a theorem: Shannon's 1948 axiomatic characterization (continuity, monotonicity for equiprobable outcomes, and the grouping/additivity axiom) forces H to equal −K Σ p log p up to the choice of base K. **[confirmed]**

**properties** — H(X) ≥ 0; H is maximized (= log n) by the uniform distribution over n outcomes and minimized (= 0) by a point mass; it is concave in p. **[confirmed]**

**proof (uniqueness)** — see Shannon 1948, §6 and Appendix 2 [[source.shannon-1948]]; textbook treatment in Cover & Thomas ch. 2 [[source.cover-thomas-1991]] and MacKay ch. 2–4 [[source.mackay-itila]].

**lineage** — the logarithmic measure of information predates Shannon: R. V. L. Hartley (1928) used log of the number of messages [[source.hartley-1928]], building on H. Nyquist (1924) [[source.nyquist-1924]]. Shannon's advance was the **probability-weighted** form and its operational meaning via the coding theorems. The symbol H and the entropy analogy trace to statistical mechanics (Boltzmann/Gibbs); the name was famously suggested to Shannon by von Neumann (anecdotal). **[confirmed as attribution]**

**door** — Cover & Thomas, *Elements of Information Theory*, ch. 2 [[source.cover-thomas-1991]]; free: MacKay, *Information Theory, Inference, and Learning Algorithms* [[source.mackay-itila]].

**sources** — [[source.shannon-1948]], [[source.shannon-weaver-1949]], [[source.cover-thomas-1991]], [[source.mackay-itila]], [[source.nyquist-1924]], [[source.hartley-1928]].
