---
name: reactive-streams-2015
type: source
essence: the Reactive Streams specification — a standard for asynchronous stream processing with non-blocking backpressure, later adopted into the JDK as java.util.concurrent.Flow
kind: standard
author: Reactive Streams Special Interest Group (Lightbend, Netflix, Pivotal, Red Hat, et al.)
year: 2015
venue: reactive-streams.org, specification v1.0.0 (adopted into JDK 9 as java.util.concurrent.Flow, 2017)
state: float
links: ["[[object.backpressure]]", "[[field.flow-control]]"]
---

Reactive Streams specification, v1.0.0 (reactive-streams.org, 2015); the four interfaces (Publisher, Subscriber, Subscription, Processor) were adopted verbatim into the JDK as `java.util.concurrent.Flow` in Java 9 (2017).

Contains — the standard defines "asynchronous stream processing with non-blocking backpressure." Its core inversion: rather than a Publisher pushing data, the Subscriber signals demand via `Subscription.request(n)`, and the Publisher may emit no more than the outstanding demand — so a slow consumer is never forced to buffer unboundedly. Reference implementations include Akka Streams, Project Reactor, and RxJava (whose backpressure-aware `Flowable` contrasts with the unbacked `Observable`).

Access — open spec + TCK at reactive-streams.org / GitHub. **[confirmed as attribution]**
