---
name: jacobson-1988
type: source
essence: Jacobson & Karels, "Congestion Avoidance and Control" — introduced TCP congestion control (slow-start, AIMD), distinct from receiver flow control
kind: paper
author: Van Jacobson; Michael J. Karels
year: 1988
venue: ACM SIGCOMM '88; Computer Communication Review 18(4), 314–329
state: float
links: ["[[object.congestion-control]]", "[[field.distributed-systems-flow-control]]"]
---

Van Jacobson (with Michael J. Karels), "Congestion Avoidance and Control," *Proc. ACM SIGCOMM '88*, *Computer Communication Review* 18, no. 4 (1988): 314–329.

Contains — the paper that gave TCP its congestion-control algorithms after the 1986 "congestion collapse" of the early Internet: slow-start, congestion avoidance with additive-increase/multiplicative-decrease (AIMD), and RTT-based retransmit timing. Establishes the distinction load-bearing for this cluster — congestion control protects the *shared network* (sender infers capacity from loss), whereas flow control protects the *receiver* (receiver advertises its window); the actual send limit is the minimum of the two.

Access — DOI 10.1145/52324.52356; open PDF at ee.lbl.gov. Citation web-corroborated 20260702. **[confirmed]**
