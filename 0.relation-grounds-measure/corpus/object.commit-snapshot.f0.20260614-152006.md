---
name: commit-snapshot
type: object
object-type: concept
essence: a commit records a full snapshot of the tracked tree at a point in time, not a diff against the previous version
field: [field.version-control-theory]
status: established
state: settled
attribution: Git model (Torvalds 2005; documented Chacon & Straub, Pro Git)
formalized: true
source: [source.chacon-straub-pro-git, source.torvalds-hamano-git-2005]
depends-on: [object.content-addressable-storage]
used-by: [object.commit-dag]
aliases: ["object.commit-snapshot"]
---

**statement (plain)** — a commit is a saved version of the whole project at one moment. In Git's model it stores a complete snapshot of the file tree, not a list of changes from the last version. Each commit also records who made it, when, a message, and a pointer back to the commit(s) it came from.

**statement** — a Git commit object references (1) a single top-level **tree** object — the root of a snapshot of the entire tracked directory; (2) zero or more **parent** commit pointers (zero for the initial commit, one for an ordinary commit, two or more for a merge); (3) **author** and **committer** identity plus timestamps; and (4) a commit **message**. The commit is named by the [[object.content-addressable-storage|SHA hash]] of its own content, so it is immutable: changing any field yields a different commit. **[confirmed]**

**basis** — Pro Git, *Git Internals — Git Objects*: a commit object's fields are `tree`, `parent`, `author`, `committer`, and message; `git cat-file -p` on a commit shows exactly these. Git stores snapshots, not differences — "the major difference between Git and nearly all other VCSs" is that Git thinks of its data as a stream of snapshots of a miniature filesystem. Confirmed independently by the git-scm internals chapter and the broader Git documentation. **[confirmed]**

**lineage** — the snapshot framing distinguishes Git from delta-based predecessors ([[source.rochkind-1975|SCCS]], [[source.tichy-1985|RCS]]), which stored successive versions as deltas against a baseline. Git introduced (2005) the whole-tree snapshot addressed by content hash; storage efficiency is recovered separately via packfile delta compression, which is an implementation detail, not the conceptual model. **[confirmed as attribution]** (snapshot-vs-delta framing per Pro Git; not independently re-derived here).

**sources** — [[source.chacon-straub-pro-git]], [[source.torvalds-hamano-git-2005]].
