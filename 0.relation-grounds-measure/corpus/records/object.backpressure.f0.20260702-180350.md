---
name: backpressure
type: object
object-type: concept
essence: a consumer signals its capacity back upstream so a fast producer can't overwhelm it — demand flows against the direction of data
field: ["[[field.distributed-systems-flow-control]]"]
status: established
state: float
attribution: reactive-programming formulation of flow control; Reactive Streams spec (2015)
formalized: false
source: ["[[source.reactive-streams-2015]]"]
depends-on: []
used-by: []
---

**statement (plain)** — when a producer can generate work faster than a consumer can handle it, backpressure is the consumer pushing back: it signals how much it is ready to accept, and the producer must not exceed that. The demand signal travels *upstream*, against the flow of data. It is flow control [[object.tcp-flow-control]] restated for in-process and reactive pipelines rather than network sockets — the receiving side is never forced to buffer arbitrary amounts.

**statement (mechanism)** — in Reactive Streams, the Subscriber calls `Subscription.request(n)` and the Publisher may emit at most the outstanding demand. Other realizations: a bounded queue whose full `put()` blocks the producer; or deliberate *decoupling* (Apache Kafka's persistent log), where there is no back-signal and backpressure instead shows up as growing **consumer lag** — throughput is preserved but backlog can grow silently until retention expires.

**basis** — standardized in [[source.reactive-streams-2015]] (adopted into the JDK as `java.util.concurrent.Flow`). *Support* — Akka Streams, Project Reactor, RxJava `Flowable`. *Limits* — the decoupled (Kafka) design trades the instant automatic stop for throughput and must re-introduce explicit flow control and lag monitoring. **[confirmed]**

**sources** — [[source.reactive-streams-2015]] (the specification). **[confirmed]**
