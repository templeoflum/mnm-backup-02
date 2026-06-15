---
name: computational-environment-capture
type: object
object-type: method
essence: record and package the exact software, versions, and OS an analysis ran in — via package pins or containers — so the same computation runs identically elsewhere
field: [field.reproducibility-engineering]
status: established
state: settled
attribution: practitioner practice; conventions codified by The Turing Way (2019+); container approach popularized via Docker (2013)
formalized: false
source: [source.turing-way-2019, source.peng-2011, source.stodden-2014]
depends-on: [object.research-compendium, object.reproducible-research]
used-by: []
---

**statement (plain)** — code rarely runs the same way on two different machines, because the operating system, the libraries, and their exact versions differ. Computational environment capture is the practice of recording and packaging that whole context — the exact software and versions, and sometimes the operating system itself — so that someone else can recreate it and get identical results, even on different hardware. The two main routes are: list and pin the software versions (package management), or ship the entire environment in a container or virtual machine.

**statement** — a method for making the software context of an analysis explicit and portable, supplying the third principle of a [[object.research-compendium]] ("the computational environment should be specified"). *The Turing Way* splits the tools into two categories: (1) **package management systems**, which "install and keep track of the software (and critically versions of software) used on a system" — capturing software and versions only; and (2) **virtual machines and containers**, which "replicate an entire computational environment — including the operating system and customised settings." Containers (e.g. Docker) are lighter than VMs because they "only contain the software and files explicitly defined within them" rather than bundling a full OS, and they help capture the full provenance of an analysis by linking the environment to data and code. **[confirmed]**

**basis** — the method exists because reproducibility (running the same code on the same data → the same result) fails silently when the environment drifts: a different library version can change the output. Capturing the environment closes that gap and lets others "reproduce what you did computationally at a particular time as closely as possible, even if they do not have access to exactly the same hardware." It is the technical completion of [[object.reproducible-research]] and the compendium. Engineering practice, not a theorem; authority from adoption (Docker, Singularity/Apptainer, Conda, `renv`, Binder) and from *The Turing Way* / Carpentries curricula. **[confirmed]**

**lineage** — distributed practitioner origin rather than a single coining: package-pinning and virtualization predate the reproducibility framing, and the container wave follows Docker's 2013 release. The reproducibility-specific synthesis is codified in *The Turing Way*, "Capturing Computational Environments" / "Containers" [[source.turing-way-2019]], with motivation in Peng 2011 [[source.peng-2011]] and Stodden, Leisch & Peng (2014) [[source.stodden-2014]]. Because there is no single originating author, the *attribution* is carried as **[candidate, distributed practitioner origin]** while the method and its definitions are **[confirmed]**.

**sources** — *The Turing Way* "Capturing Computational Environments" and "Containers" [[source.turing-way-2019]]; Peng 2011 [[source.peng-2011]]; Stodden et al. 2014 [[source.stodden-2014]].
