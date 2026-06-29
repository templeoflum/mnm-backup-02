---
name: commit-dag
type: object
object-type: concept
essence: project history is a directed acyclic graph of commits linked child-to-parent; branches and merges are paths and joins in it
field: [field.version-control-theory]
status: established
state: settled
attribution: Git history model (Torvalds 2005; documented Chacon & Straub, Pro Git)
formalized: true
source: [source.chacon-straub-pro-git, source.torvalds-hamano-git-2005]
depends-on: [object.commit-snapshot, object.content-addressable-storage]
used-by: [object.three-way-merge, object.distributed-version-control]
---

**statement (plain)** — the history of a project is a graph, not a straight line. Each commit points back to the commit (or commits) it grew out of. Following those pointers always moves backward toward the first commit and never loops, so the history forms a directed acyclic graph (DAG). Branches are just named starting points in this graph; a merge is a commit with two parents that joins two lines back together.

**statement** — let each commit be a node and each parent pointer a directed edge from child to parent. The resulting graph is **directed** (edges point from a commit to its predecessor) and **acyclic** (no commit is reachable as its own ancestor, since a commit's hash depends on its parents' hashes — a cycle would require a commit to be named before it exists). An ordinary commit has out-degree 1, the root commit out-degree 0, and a merge commit out-degree ≥ 2. A branch or tag is a movable reference (pointer) to one node; "reachability" from a ref defines which history it contains. **[confirmed]**

**basis** — Git's commit graph is universally described as a DAG in which edges run child→parent; acyclicity follows structurally because [[object.content-addressable-storage|content addressing]] makes a commit's identity depend on its parents, so back-references cannot form a loop. Acyclicity is what lets history be walked deterministically and lets ancestry queries (e.g. merge-base) terminate. Confirmed by the git-scm internals object graph description and multiple independent treatments of the Git DAG. **[confirmed]**

**lineage** — linear-history predecessors ([[source.rochkind-1975|SCCS]], [[source.tichy-1985|RCS]], and the CVS/SVN line) modeled revisions per-file or as mostly linear trunks with weaker branch/merge support. The first-class commit DAG over the whole tree, with cheap branching and multi-parent merges, is the Git/DVCS contribution — and is the structure that makes [[object.three-way-merge]] tractable (the common ancestor is the lowest common ancestor in this DAG). **[confirmed as attribution]**

**sources** — [[source.chacon-straub-pro-git]], [[source.torvalds-hamano-git-2005]].
