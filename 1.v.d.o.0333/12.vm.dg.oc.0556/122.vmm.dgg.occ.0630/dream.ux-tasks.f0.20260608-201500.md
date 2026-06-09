# dream.ux — tasks

address: 122
scope: ux instrument — short running list, what's next, what's broken

---

## bugs

- [ ] file list doesn't refresh after create/fold/move — requires manual page reload. the file cache doesn't invalidate on server mutations. (View 0 + View 2)
- [ ] manifest trail in View 2 is a stub — only shows server-traced operations since server was built. pre-existing files invisible. not a reconciled inventory.

## tasks

- [ ] plan the real manifest system — what does the manifest want to be? right now it might be trying to do several jobs: transaction log, inventory, contract ledger. needs its own focused discussion, then a frame at 210.
- [x] update keystone (CLAUDE.md) — 112 rewritten (edge tracking), 211 rewritten (build with ceiling), 212 rewritten (folding), section 2 rewritten as mindset not map, 100/101 promoted to [settled], 221 promoted to [settled], document types expanded, routing honesty clause, document-types-as-context-carriers added. installed from sketch.keystone.f2 at 100.
- [x] settle dream.ux-settled questions — 27 questions answered from code in f2, reviewed with user, folded to f3. 20 settled, 2 corrected, 5 floating.
- [ ] View 1 rethink — verb grid is noise, sierpinski is signal. what's the actual instrument set?
- [ ] verify View 2 warehouse works smoothly — routing, file counts, move operations, manifest trail. end-to-end check.
- [x] implement fold ceiling — 39+0 (3+9+27 checkpoint tree + origin). bounded depth forces cleanup. DONE — FOLD_CEILING constant, checks in op_fold + name, error in /create, ceiling in response.
- [ ] make all files foldable — even dumped files start at f0 on first fold. server needs to handle files without fold numbers in their names.
- [ ] work out gates through use — only real gate so far is file movement. others need to emerge from practice, not be designed upfront.
- [ ] template stamping on create — server stamps type-aware templates. any generated file gets f0.timestamp. pattern is clear from existing docs (dream headers, frame chunks, log entries).
