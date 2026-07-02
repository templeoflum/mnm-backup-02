---
name: synchronization-barrier
type: object
object-type: concept
essence: a coordination point where every participant must arrive before any may proceed — many independent arrivals converted into one collective release
field: ["[[field.distributed-systems-flow-control]]"]
status: established
state: float
attribution: Harry Jordan, Finite Element Machine, NASA Langley (late 1970s)
formalized: false
source: ["[[source.jordan-1978]]"]
depends-on: []
used-by: []
---

**statement (plain)** — a barrier is a line every thread or process in a group must reach before any of them is allowed to cross. Early arrivals wait, blocked, until the last one arrives; then all are released together. It converts many independent "I'm ready to go" decisions into a single synchronized, unanimous go — the slowest participant gates the whole group.

**statement (mechanism)** — standard in shared-memory and message-passing parallelism: POSIX threads' `pthread_barrier_wait`, and the implicit barriers at the end of parallel regions in OpenMP and collectives in MPI. Origin credited to Jordan's Finite Element Machine work [[source.jordan-1978]].

**basis** — a core primitive of parallel computing [[source.jordan-1978]]. *Support* — ubiquitous in HPC and data-parallel frameworks (bulk-synchronous parallel). *Limits* — the barrier is a global serialization point: the whole group waits on its slowest member, so load imbalance and stragglers directly cost throughput. **[confirmed as attribution]**

**sources** — [[source.jordan-1978]] (origin; precise citation to verify before settling). **[confirmed as attribution]**
