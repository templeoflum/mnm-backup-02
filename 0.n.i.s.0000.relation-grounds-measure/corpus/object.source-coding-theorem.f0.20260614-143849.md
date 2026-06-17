---
name: source-coding-theorem
type: object
object-type: theorem
essence: entropy is the exact floor on lossless compression — you can approach H bits/symbol but not beat it
field: [field.information-theory]
status: proven
state: settled
attribution: Claude E. Shannon (1948)
formalized: true
source: [source.shannon-1948, source.shannon-weaver-1949, source.cover-thomas-1991, source.mackay-itila]
depends-on: [object.shannon-entropy]
used-by: []
---

**statement (plain)** — you cannot compress a random source below its entropy without losing information, and you can get as close to the entropy as you like. If a source has entropy H bits per symbol, then long messages need on average about H bits per symbol to store losslessly — fewer than that, and loss becomes virtually certain; a little more than that, and lossless coding is achievable. This is the **noiseless** coding theorem (no channel noise).

**statement (formal)** — let X₁, X₂, … be i.i.d. with entropy H(X). For any rate R > H(X) there exist, for N large enough, lossless codes mapping N-symbol blocks to NR bits with probability of decoding error → 0; conversely for any R < H(X) the error probability → 1 as N → ∞. Equivalently, the optimal expected codeword length L* per symbol satisfies H(X) ≤ L* < H(X) + 1 for a single symbol, and L*/N → H(X) for blocks (using a uniquely decodable / prefix code, base-2 logs). **[confirmed]**

**status** — proven.

**proof** — Shannon 1948 establishes it via the **typical set**: by the asymptotic equipartition property, almost all probability mass concentrates on ≈ 2^{NH} equally-likely typical sequences, which need ≈ NH bits to index; atypical sequences are negligible [[source.shannon-1948]]. The converse uses Kraft's inequality. Textbook proofs: Cover & Thomas ch. 3 and ch. 5 [[source.cover-thomas-1991]]; MacKay ch. 4 [[source.mackay-itila]].

**door** — Cover & Thomas ch. 5 (data compression) [[source.cover-thomas-1991]]; free: MacKay ch. 4–6 [[source.mackay-itila]].

**sources** — [[source.shannon-1948]], [[source.shannon-weaver-1949]], [[source.cover-thomas-1991]], [[source.mackay-itila]].
