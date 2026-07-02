---
name: mutual-information
type: object
object-type: definition
essence: the bits two variables share — how much knowing one reduces uncertainty about the other
field: ["[[field.information-theory]]"]
status: established
state: settled
attribution: Claude E. Shannon (1948)
formalized: true
source: ["[[source.shannon-1948]]", "[[source.shannon-weaver-1949]]", "[[source.cover-thomas-1991]]", "[[source.mackay-itila]]"]
depends-on: ["[[object.shannon-entropy]]", "[[object.kullback-leibler-divergence]]"]
used-by: ["[[object.noisy-channel-coding-theorem]]"]
---

**statement (plain)** — mutual information measures how much two random quantities tell you about each other: the average number of bits of uncertainty about X that vanish once you learn Y (and vice versa — it is symmetric). It is zero exactly when X and Y are independent (learning one says nothing about the other), and large when they are tightly coupled.

**statement (formal)** — for random variables X, Y with joint distribution p(x,y) and marginals p(x), p(y),
I(X;Y) = Σ_{x,y} p(x,y) log [ p(x,y) / (p(x)p(y)) ].
Equivalently
I(X;Y) = H(X) − H(X|Y) = H(Y) − H(Y|X) = H(X) + H(Y) − H(X,Y)
= D_KL( p(x,y) ‖ p(x)p(y) ),
the [[object.kullback-leibler-divergence]] of the joint from the product of marginals. **[confirmed]**

**status** — a definition; the listed identities are theorems (chain rule for entropy). The form as a KL divergence gives the key properties below.

**properties** — I(X;Y) = I(Y;X) (symmetric); I(X;Y) ≥ 0, with equality iff X and Y are independent (from nonnegativity of KL divergence / Gibbs' inequality); I(X;X) = H(X). **[confirmed]**

**door** — Cover & Thomas ch. 2 [[source.cover-thomas-1991]]; free: MacKay ch. 8 [[source.mackay-itila]].

**sources** — [[source.shannon-1948]], [[source.shannon-weaver-1949]], [[source.cover-thomas-1991]], [[source.mackay-itila]].
