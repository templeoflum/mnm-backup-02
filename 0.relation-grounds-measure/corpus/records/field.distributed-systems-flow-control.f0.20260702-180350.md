---
name: distributed-systems-flow-control
type: field
essence: keeping a fast producer from overwhelming a slow consumer or a shared channel — flow control, backpressure, and congestion control in networked and concurrent systems
canon: structure
grade: t
state: float
links: ["[[source.rfc793-1981]]", "[[source.jacobson-1988]]", "[[source.reactive-streams-2015]]", "[[source.kurose-ross]]", "[[object.tcp-flow-control]]", "[[object.congestion-control]]", "[[object.backpressure]]"]
---

How systems that move data or work between producers and consumers stop the fast side from swamping the slow side — a recurring coordination problem across networking, message systems, and reactive/concurrent programming. The governing distinction is *who* is being protected: the receiving endpoint (flow control / backpressure) or the shared channel between them (congestion control).

**origin** — TCP's sliding-window **flow control** (the receiver-advertised window) in the Transmission Control Protocol, RFC 793 (1981). [[source.rfc793-1981]] **[confirmed as attribution]**

**codification** — Van Jacobson & Karels, "Congestion Avoidance and Control" (SIGCOMM 1988), which gave TCP its congestion-control algorithms after the 1986 congestion collapse and sharpened the flow-vs-congestion distinction. [[source.jacobson-1988]] The reactive-programming lineage restates the same problem as **backpressure**: the Reactive Streams specification (2015), demand signalled from consumer to producer. [[source.reactive-streams-2015]] **[confirmed]**

**door** — Kurose & Ross, *Computer Networking: A Top-Down Approach*, transport-layer chapter. [[source.kurose-ross]]

*grade [t] — origin (RFC 793) + codification (Jacobson 1988; Reactive Streams 2015) + door (Kurose–Ross) present; thin, from a single intake (Asymmetry dive, re-mine 20260702). Synchronization primitives (barriers) and message-queue backpressure (Kafka consumer-lag) are near neighbours not yet extracted.*
