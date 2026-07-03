---
name: congestion-control
type: object
object-type: concept
essence: TCP's network-driven brake — the sender infers the shared network's capacity from loss and delay and throttles itself, distinct from receiver flow control
field: ["[[field.flow-control]]"]
status: established
state: float
attribution: Jacobson & Karels (1988), after the 1986 Internet congestion collapse
formalized: false
source: ["[[source.jacobson-1988]]", "[[source.kurose-ross]]"]
depends-on: []
used-by: []
---

**statement (plain)** — the sender cannot see the shared network directly, so it *infers* how much the path can carry from the signals it does get — mainly packet loss and rising delay — and limits itself with a *congestion window*. It starts cautiously and ramps up (slow-start), then probes gently upward and backs off sharply on loss (AIMD: additive increase, multiplicative decrease). This protects the network between endpoints, a different job from flow control's protection of the receiver.

**statement (mechanism)** — the sender maintains `cwnd`; the effective send limit is `min(rwnd, cwnd)`. Slow-start grows `cwnd` exponentially to a threshold; congestion avoidance then grows it additively (+1 MSS/RTT) and halves it on loss (AIMD).

**basis** — introduced in [[source.jacobson-1988]] to end the 1986 congestion collapse; standard treatment in [[source.kurose-ross]]. *Distinction* — congestion control protects the *shared network*; flow control [[object.tcp-flow-control]] protects the *receiver*. The two run simultaneously and the tighter one governs. **[confirmed]**

**sources** — [[source.jacobson-1988]] (origin); [[source.kurose-ross]] (door). **[confirmed]**
