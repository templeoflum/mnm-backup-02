---
name: distributed-version-control
type: object
object-type: concept
essence: every clone holds the full history; no single central repository is privileged — commits are local, sharing is peer-to-peer
field: ["[[field.version-control-theory]]"]
status: established
state: settled
attribution: DVCS model popularized by Git (Torvalds 2005), BitKeeper, Mercurial; documented Chacon & Straub, Pro Git
formalized: false
source: ["[[source.chacon-straub-pro-git]]", "[[source.torvalds-hamano-git-2005]]"]
depends-on: ["[[object.commit-dag]]"]
used-by: []
---

**statement (plain)** — in a distributed version control system every developer's copy is a full repository: it has the entire history, not just the latest files. You commit locally without contacting a server, and you share by pushing and pulling between repositories. There is no technically privileged central server — any repo can sync with any other; a "central" repo is a social convention, not a structural requirement. This contrasts with centralized systems (CVS, Subversion), where one server holds the history and clients hold only a working copy.

**statement** — a distributed VCS gives each participant a complete replica of the [[object.commit-dag|commit history DAG]]. Operations (commit, branch, merge, log, diff) are local and offline-capable. Synchronization is the exchange of missing commit objects between repositories (fetch/push), after which each side reconciles divergent history by [[object.three-way-merge|merging]] (or rebasing). Because histories diverge and rejoin independently on many machines, the model relies on the DAG (multi-parent merges) and on [[object.content-addressable-storage|content addressing]] (so an object fetched from any peer is identified and verified by the same hash everywhere). Centralized VCS, by contrast, keeps the authoritative history on one server and serializes commits through it. **[confirmed]**

**basis** — Pro Git, *Getting Started — About Version Control*, contrasts local, centralized (CVS, Subversion, Perforce), and distributed (Git, Mercurial, Bazaar) VCS, stating that in a DVCS clients "fully mirror the repository, including its full history," so any server failure can be restored from any clone. Confirmed by the git-scm book and independent treatments of DVCS architecture. **[confirmed]**

**lineage** — the centralized model descends from [[source.rochkind-1975|SCCS]] / [[source.tichy-1985|RCS]] (per-file, single-host) through CVS and Subversion. The distributed model was carried by BitKeeper (proprietary), then by Git and Mercurial in 2005. Git's creation was triggered when the Linux kernel lost free use of BitKeeper in April 2005; Linus Torvalds wrote Git over the following weeks, maintainership passing to Junio Hamano. **[confirmed as attribution]** (the BitKeeper trigger and April-2005 timeline are well attested; recorded as lineage, not re-derived). **[confirmed]**

**sources** — [[source.chacon-straub-pro-git]], [[source.torvalds-hamano-git-2005]].
