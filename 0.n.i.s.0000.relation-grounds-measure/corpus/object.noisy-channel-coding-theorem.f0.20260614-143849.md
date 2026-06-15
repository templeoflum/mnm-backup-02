---
name: noisy-channel-coding-theorem
type: object
object-type: theorem
essence: every noisy channel has a capacity C; below C you can transmit with arbitrarily small error, above C you cannot
field: [field.information-theory]
status: proven
state: settled
attribution: Claude E. Shannon (1948); first rigorous proof of the discrete case by A. Feinstein (1954)
formalized: true
source: [source.shannon-1948, source.shannon-weaver-1949, source.cover-thomas-1991, source.mackay-itila]
depends-on: [object.mutual-information, object.shannon-entropy, field.probability-theory]
used-by: []
---

**statement (plain)** — even over a noisy channel, you can communicate almost error-free, as long as you don't try to send faster than the channel's capacity. Every channel has a number C (its capacity, in bits per use). Send at any rate below C and, with clever enough coding over long blocks, the error probability can be pushed as close to zero as you want. Try to send above C and reliable communication is impossible — error is bounded away from zero. The surprise was that noise limits the *rate*, not the *reliability*.

**statement (formal)** — for a discrete memoryless channel with transition law p(y|x), define the capacity
C = max_{p(x)} I(X;Y),
the [[object.mutual-information]] maximized over input distributions. **Achievability:** for every R < C and every ε > 0, for N large enough there exists a block code of length N and rate ≥ R with maximal probability of error ≤ ε. **Converse:** any code with rate R > C has error probability bounded away from 0 (and → 1; the strong converse). **[confirmed]**

**status** — proven.

**lineage (proof)** — Shannon 1948 stated the theorem and gave a proof sketch via random coding and jointly-typical decoding [[source.shannon-1948]]. The first fully rigorous proof for the discrete memoryless case is due to Amiel Feinstein (1954); the converse and strong converse were sharpened by Fano and by Wolfowitz. Textbook proof: Cover & Thomas ch. 7 [[source.cover-thomas-1991]]; MacKay ch. 9–10 [[source.mackay-itila]]. **[confirmed]**

**door** — Cover & Thomas ch. 7 (channel capacity) [[source.cover-thomas-1991]]; free: MacKay ch. 9–11 [[source.mackay-itila]].

**sources** — [[source.shannon-1948]], [[source.shannon-weaver-1949]], [[source.cover-thomas-1991]], [[source.mackay-itila]].
