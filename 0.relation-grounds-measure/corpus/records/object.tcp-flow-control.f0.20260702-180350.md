---
name: tcp-flow-control
type: object
object-type: concept
essence: TCP's receiver-driven brake — the receiver advertises how much buffer room is free, and the sender may not send past it
field: ["[[field.distributed-systems-flow-control]]"]
status: established
state: float
attribution: TCP, RFC 793 (1981); the receive-window mechanism
formalized: false
source: ["[[source.rfc793-1981]]", "[[source.kurose-ross]]"]
depends-on: []
used-by: []
---

**statement (plain)** — in TCP the receiver continuously tells the sender how much spare room is in its buffer — the *receive window* — carried in the same acknowledgements that confirm delivered data. The sender must keep its unacknowledged data within that window. If the receiver falls behind, the window shrinks; if its buffer fills, it advertises a window of **zero** and the sender stops entirely, sending only small "window probes" until room reopens. The brake rides the same channel as the work.

**statement (mechanism)** — `rwnd = ReceiveBuffer − (LastByteReceived − LastByteReadByApplication)`; the sender holds `LastByteSent − LastByteAcked ≤ rwnd`. Zero-window triggers the persist timer and periodic probes.

**basis** — specified in [[source.rfc793-1981]]; standard textbook treatment in [[source.kurose-ross]] ch. 3. *Distinction* — flow control protects the *receiver* (a slow endpoint); it is not congestion control [[object.congestion-control]], which protects the shared network. The actual send limit is the minimum of the two windows. **[confirmed]**

**sources** — [[source.rfc793-1981]] (the specification); [[source.kurose-ross]] (door). **[confirmed]**
