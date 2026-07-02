---
name: jordan-1978
type: source
essence: Harry Jordan's Finite Element Machine work — the origin of the barrier as a parallel-computing synchronization primitive
kind: paper
author: Harry F. Jordan
year: 1978
venue: work on the Finite Element Machine, NASA Langley Research Center (late 1970s)
state: float
links: ["[[object.synchronization-barrier]]"]
---

Harry F. Jordan's late-1970s work on the **Finite Element Machine** (a parallel computer for structural analysis built and tested at NASA Langley Research Center) is credited as the origin of the **barrier** as an explicit synchronization primitive — a point every processor must reach before any may continue.

Contains — the barrier construct for coordinating parallel processes on a shared-memory machine, later standard across parallel-programming models (POSIX threads' `pthread_barrier_wait`, implicit barriers in OpenMP and MPI).

Access — attributed via the Finite Element Machine literature (NASA Langley); the exact 1978 publication not independently pinned this pass — origin corroborated, precise citation to verify before settling. **[candidate, partially confirmed]**
