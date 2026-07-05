---
name: semantic-role-labeling
type: object
object-type: method
essence: automatically labeling who-did-what-to-whom — mapping sentence constituents to frame elements or numbered arguments
field: ["[[field.frame-semantics]]"]
status: established
state: settled
attribution: task crystallized by FrameNet + PropBank annotation; neural baseline He–Lee–Lewis–Zettlemoyer (2017)
formalized: false
source: ["[[source.palmer-2005]]", "[[source.baker-fillmore-lowe-1998]]", "[[source.he-2017]]"]
depends-on: ["[[object.semantic-frame]]"]
used-by: []
---

**statement (plain)** — the computational cash-out of sixty years of thematic-role theory: given a sentence, find each predicate and label its arguments with their roles. Trained against FrameNet (frames + frame elements) or PropBank (verb-specific Arg0/Arg1, Dowty's proto-roles operationalized — prose link, [[source.dowty-1991]]).

**basis** — resources: FrameNet (1998) and PropBank (2005) made the task benchmarkable; neural SRL (He et al. 2017 and successors) is the modern baseline. Psycholinguistic face of the same structure: N400/P600 responses to thematic-role violations (Kuperberg and colleagues — prose reference, no record; the dive cites the line without a specific paper). [[source.palmer-2005]] [[source.he-2017]] **[confirmed]**
