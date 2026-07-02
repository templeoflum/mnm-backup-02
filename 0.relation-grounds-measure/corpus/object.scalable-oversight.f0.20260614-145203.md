---
name: scalable-oversight
type: object
object-type: method
essence: supervising a system on tasks too hard or too large for a human to evaluate directly — by decomposing, amplifying, or pitting models against each other
field: ["[[field.ai-alignment-praxis]]"]
status: established
state: settled
attribution: problem posed in Amodei et al. (2016); iterated amplification (Christiano et al. 2018), debate (Irving et al. 2018) as approaches
formalized: partial
source: ["[[source.amodei-2016]]", "[[source.christiano-2018]]"]
depends-on: ["[[object.alignment-problem]]", "[[object.rlhf]]"]
used-by: []
aliases: ["object.scalable-oversight"]
---

**statement (plain)** — how do you give correct feedback to an AI on tasks you yourself can't fully check — because they're too hard, too numerous, or beyond human expertise? Scalable oversight is the cluster of methods for stretching limited, fallible human judgment far enough to keep training reliable even as the system approaches and exceeds human-level performance. The recurring trick: break the hard task into pieces a human *can* judge, or have AIs help the human judge.

**statement** — **scalable oversight**: providing reliable supervision (labels, rewards, critiques) that "remains effective past the point that models start to achieve broadly human-level performance" (Amodei et al. 2016). Leading proposed mechanisms: **iterated amplification (IDA)** — recursively decompose a hard problem into human-checkable subproblems and amplify [[source.christiano-2018]]; **AI safety via debate** — two AIs argue, a human judges (Irving, Christiano & Amodei, 2018); **recursive reward modeling** (Leike et al. 2018); evaluated via "sandwiching" (Cotra 2021). The field is **living and largely open** — no method is established as sufficient for superhuman systems. **[confirmed]**

**status** — established as a named research agenda; specific methods remain partial / unproven at scale.

**lineage** — posed as one of the five "Concrete Problems in AI Safety" (2016) under "scalable oversight" [[source.amodei-2016]]. Iterated amplification stated in Christiano, Shlegeris & Amodei, "Supervising strong learners by amplifying weak experts," arXiv:1810.08575 (2018) [[source.christiano-2018]]. Debate (arXiv:1805.00899, 2018) and recursive reward modeling carried as lineage, **[confirmed as attribution]**. Builds on [[object.rlhf]] (human feedback is the substrate being scaled) and serves [[object.alignment-problem]]. **[confirmed]**

**sources** — [[source.amodei-2016]] · [[source.christiano-2018]]
