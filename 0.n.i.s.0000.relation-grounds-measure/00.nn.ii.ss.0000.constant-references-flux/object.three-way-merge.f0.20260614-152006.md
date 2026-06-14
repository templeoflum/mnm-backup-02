---
name: three-way-merge
type: object
object-type: method
essence: reconcile two versions by comparing each against their common ancestor; agree → take the change, both change differently → conflict
field: [field.version-control-theory]
status: established
state: float
attribution: diff3 algorithm (Unix, first published 1979); standard VCS merge method (documented Chacon & Straub, Pro Git)
formalized: true
source: [source.chacon-straub-pro-git, source.torvalds-hamano-git-2005]
depends-on: [object.commit-dag]
used-by: []
---

**statement (plain)** — to merge two changed versions of a file, you also look at the version they both came from (the common ancestor). For each section: if only one side changed it, take that change; if both sides made the same change, take it once; if both sides changed it differently, that's a conflict for a human to resolve. Using the ancestor as a reference is what lets the merge tell a real edit from unchanged text.

**statement** — given two descendants A and B and their common ancestor C (the "base"), three-way merge compares A↔C and B↔C section by section. Where A = C, output B (B's change). Where B = C, output A (A's change). Where A = B, output that (same change both sides). Where A, B, and C all differ, mark a **conflict**. The base C disambiguates which side actually edited a region — information a two-way diff of A and B alone cannot recover. In a VCS the base is the [[object.commit-dag|merge-base]] (lowest common ancestor of the two commits in the history DAG). **[confirmed]**

**basis** — the rule set (agree → take change; three-way disagreement → conflict) and the necessity of the common ancestor are stated identically by the Wikipedia treatment of version-control merge and by Pro Git's merge documentation. The classic implementation is the Unix **diff3** program (first published 1979). Confirmed across two independent authoritative sources. **[confirmed]**

**lineage** — three-way merging "was the central innovation that allowed the switch from file-locking based revision control systems to merge-based revision control systems" — i.e. it made it safe for multiple people to edit the same file concurrently and reconcile afterward, rather than locking. diff3's first publication is dated 1979 as part of Unix. **[confirmed as attribution]** (the "central innovation" framing is from the cited secondary source, not independently re-derived). Git uses three-way merge as its base merge algorithm, with the merge-base supplied by the commit DAG. **[confirmed]**

**sources** — [[source.chacon-straub-pro-git]], [[source.torvalds-hamano-git-2005]].
