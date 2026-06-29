# dream.warehouse — f0

address: 102
scope: manifest / count / ledger / inventory / audit / sending / receiving — the whole configuration tracking system

constraint: shape and feel, not build spec. what do these roles want to be, how do they talk to each other, how do they mechanically separate.

---

## bounds

what exists now:

**manifest.live.md** — server-written transaction log. one flat table. only knows what happened through server.py since it was built. 22 entries. View 2 reads this via /manifest endpoint. partial — pre-existing files invisible.

**manifest.session.f1** — hand-written mega-ledger. 444 lines. tries to be everything: file inventory by address, feature inventory, status verb definitions, settled/floating/blocked state snapshot, intake/outflow history with 67 entries. last updated 20260607. already stale.

**count.instrument-rebuild.f0** — movement log for one operation. what moved, from where, to where, why. 50 lines. clean, bounded, done.

**count.research-sort.f0** — movement log for one operation. includes error recovery (active instrument caught in bulk move). 120 lines. includes running "current state" snapshot.

**audit.lattice.f0 + p1-p4** — fresh-eyes verification. walked the system, compared to claims. 125+ findings across 5 files.

**audit.session.f0** — blind walk. built independent picture, then compared to every manifest/frame/log claim. 55 discrepancies. zero fixed, report only.

**View 2 (warehouse)** — three columns: file list (intake + current address), 27-cell destination grid with file counts from /scan, manifest trail (last 40 from manifest.live.md). select → destination → move.

**server endpoints** — /manifest (reads manifest.live.md as table), /scan (counts files per cell), /move (moves file between cells), /receive (unsigned intake to 200).

---

## what's tangled

the manifest is doing at least four jobs:
1. **transaction log** — what happened, when (manifest.live.md does this)
2. **inventory** — what's where right now (/scan does this independently)
3. **contract ledger** — signed/received/delivered status verbs (manifest.session.f1 defines these but nothing enforces them)
4. **state snapshot** — what's settled, what's floating, what's blocked (manifest.session.f1 carries this but it drifts immediately)

the count is doing one job cleanly but lives at the same address (201) as the manifest.

the audit walks the filesystem and compares to claims — but has no machine-readable reference to compare against. it's a human operation every time.

View 2 shows two of the four jobs (transaction log + inventory scan) but not the other two (contract status + state snapshot).

---

## questions this dream wants to answer

1. should these four jobs be four separate documents, or can some naturally combine?
2. what's the minimum mechanical system that makes auditing automatic — filesystem scan vs manifest diff?
3. where does the "three-point update" actually live — is it a document discipline or a server enforcement?
4. what does View 2 need to show to make the warehouse useful as a daily instrument?
5. how do counts relate to the manifest — are they entries in the ledger, or separate operation logs?
6. what are the actual status verbs that matter in practice — the seven defined in manifest.session.f1, or fewer?
7. does the receiving/sending process need its own document type, or is it just manifest entries?

---

## ~0 — first pass

### ~0 — the triads already know

the triads at leaf 20 say it plainly:

- 200: delivery · receives · material
- 201: manifest · confirms · count
- 202: schedule · sorts · inventory

three verbs. three jobs. receives, confirms, sorts.

the manifest doesn't track. it doesn't record. it doesn't snapshot. it CONFIRMS. and what does it confirm? the COUNT. not the state, not the features, not what's settled or floating. the count. how many, where, does it match.

manifest.session.f1 is 444 lines because it's doing six jobs that belong to six different instruments. the triads say this file wants to be split.

leaf 21:
- 210: layout · positions · work
- 211: motion · builds · form
- 212: coherence · adapts · snag

leaf 22:
- 220: trim · cleans · slack
- 221: trace · audits · path
- 222: sign · hands · record

three leaves, three pipelines:
- 20: receive → confirm → sort (INTAKE)
- 21: position → build → adapt (BUILD)
- 22: clean → audit → record (PRESERVE)

material flows: intake (20) → build (21) → preserve (22). this is the breathing of branch 2. and the breath goes in both directions — 20 receives from outside, 22 records for posterity, 21 is where the work happens in between.

### ~1 — what manifest.session.f1 is actually doing

six jobs tangled into one file:

1. **inventory by address** — what files live at each cell (sections with tables per address). this is a MAP. it says "100 has 17 files, here they are." /scan already does this mechanically. this job wants to be automated.

2. **feature inventory** — what View 0/1/2 can do, status of each feature. this is a BUILD LOG. it belongs at 211 or near the instrument, not at 201. it describes what the tool does, not where files are.

3. **status verb definitions** — staged/claimed/signed/delivered/received/archived/retired. this is a PROTOCOL. it defines how movements work. it belongs in the keystone or at 200 (where receiving happens). it's the grammar of the dock.

4. **settled/floating/blocked state snapshot** — what decisions have been made, what's still forming. this is a STATE MAP. it drifts immediately after writing because decisions keep happening. it wants to be generated, not hand-maintained.

5. **intake/outflow ledger** — 67 entries of what moved when. this is a TRANSACTION LOG. raw movement records. this is what manifest.live.md partially does via the server, and what count documents do manually. three sources for the same information.

6. **chunk inventory** — A through K, gated by dependencies. this is a SCHEDULE. it's literally the schedule's job (202). it drifted here because the manifest became a catch-all.

six jobs. three of them have natural homes elsewhere. two of them want to be automated. one of them (the status verbs) is protocol that should be declared once and referenced.

### ~2 — what the count documents teach

count.instrument-rebuild.f0 and count.research-sort.f0 are the cleanest documents in the system. 50 lines and 120 lines. each one:

- scoped to ONE operation
- records MOVEMENTS: what, from, to, why
- includes ERROR RECOVERY when things go wrong
- ends with a CURRENT STATE snapshot

the count is the narrative of a specific operation's movements. it's not trying to be the manifest. it's not trying to be the inventory. it's a STORY: "we moved these things for this reason, this went wrong, we fixed it, here's where we ended up."

the manifest.live.md (server-written) is the opposite — it's a flat table of every mutation the server sees. no scoping, no narrative, no why. just: timestamp, operation, file, from, to.

these are two DIFFERENT kinds of transaction records:
- **count** = scoped narrative (human-written, operation-specific, includes reasoning)
- **manifest.live** = universal log (machine-written, all operations, no reasoning)

both are needed. neither replaces the other.

### ~3 — what the audit teaches about reconciliation

the two audits (lattice.f0 + session.f0) did the same thing: walked the filesystem, built an independent picture, compared to claims. 125+ findings across both.

the mechanical part of this — "filesystem says X files at address Y, manifest says Z" — could be automated. the server already has /scan (filesystem truth). if it also had the manifest's claims, it could diff them.

the CONCEPTUAL part — "this file is at the wrong address" or "this description is stale" — can't be automated. that requires understanding what the file IS, not just where it IS.

so there are TWO audits hiding in the audit:
1. **mechanical reconciliation** — do the numbers match? are files where we said they'd be? (automatable)
2. **conceptual audit** — is this the right place for this file? is this description accurate? (human only)

the manifest (201) wants to do #1 automatically. the audit (221) keeps doing #2 by hand.

### ~4 — what "three-point update" really means

the keystone says: "three-point update: filesystem + instrument + manifest."

in practice this means: when you move a file, update three things:
1. the filesystem (actually move the file)
2. the instrument (the lattice display — FILES object, caches)
3. the manifest (the record of what happened)

but the server already does #1 and #3 together — /move moves the file AND appends to manifest.live.md. #2 is broken (file cache doesn't invalidate).

what if the three points aren't three things you UPDATE, but three things you CHECK?

- filesystem: what's actually on disk (/scan)
- instrument: what the display shows (cached file lists)
- manifest: what the ledger claims (transaction log)

the three-point update becomes a three-point RECONCILIATION. after every mutation, check: do all three agree? if yes, clean. if no, flag it.

this is what "manifest · confirms · count" means. the manifest CONFIRMS. it doesn't record — it verifies. the recording is the transaction log. the confirming is the reconciliation.

### ~5 — the proposed separation

| role | address | document type | who writes it | what it does |
|------|---------|---------------|---------------|-------------|
| receiving | 200 | (server /receive) | server | unsigned material arrives, gets timestamped |
| transaction log | 201 | manifest.live.md | server | flat record of every mutation — timestamp, op, file, from, to |
| reconciliation | 201 | manifest | server-generated | compares /scan vs transaction log, flags drift |
| operation count | 201 | count | human | scoped movement narrative for specific operations |
| sorting | 202 | schedule | human | sorts confirmed inventory into actionable chunks |
| verification | 221 | audit | human | blind walk, conceptual catches, reference-frame checking |
| session record | 222 | log | human + server | C/O/D entries, lattice trail format |

what changes from current:
- manifest.live.md stays as the TRANSACTION LOG (what it already is)
- NEW: a reconciliation function that diffs /scan against the transaction log
- manifest.session goes away — its six jobs distributed to their natural homes
- count documents stay as they are — scoped, narrative, human
- audit stays as it is — human conceptual verification
- the inventory-by-address job becomes automated (/scan already does it)
- the feature inventory moves to 211 (build tracking)
- the settled/floating/blocked list moves to... where? maybe it IS the keystone's job. or maybe it's a state document that gets generated.

### ~6 — what View 2 wants to show

right now View 2 is: file list (left), destination grid (center), manifest trail (right).

what if View 2 showed the HEALTH of the system?

**left column: the dock**
- intake at 200 (unsigned arrivals) — same as now
- current address files — same as now
- selected file → destination picker — same as now

**center: the grid**
- 27-cell destination grid with file counts — same as now
- BUT: cells where the count doesn't match the expected count get a drift indicator
- click a drifted cell to see what's off

**right column: the ledger**
- recent transactions (from manifest.live.md) — same as now
- PLUS: reconciliation status. a simple display: "clean" or "N discrepancies"
- click to see the discrepancies
- the reconciliation runs automatically on page load and after every mutation

this makes View 2 the system's health dashboard. you glance at it and know: is everything where it should be? is anything drifting?

### ~7 — the /reconcile endpoint dream

a new server endpoint: GET /reconcile

it does:
1. runs /scan (gets filesystem truth — file counts and names per cell)
2. reads the transaction log (manifest.live.md — what the server thinks happened)
3. replays the transaction log from the beginning to compute expected state
4. compares expected state to actual state
5. returns: { clean: true/false, discrepancies: [...] }

a discrepancy is: "expected file X at address Y, found it at Z" or "file X exists at Y but no transaction brought it there" or "transaction says file X moved to Y but it's not there."

the mechanical audit. every time you open View 2, it runs. the health indicator updates. drift becomes visible immediately instead of accumulating until someone does a blind walk.

the HUMAN audit at 221 still catches: "this file shouldn't be at this address" or "this description is stale" or "this document type is wrong." conceptual things the machine can't see. but the machine catches the mechanical things automatically.

### ~8 — the sending/receiving process

right now /receive puts files at 200 (unsigned intake). /move moves files between cells. there's no formal "sending" — you just move things.

what if sending and receiving were symmetric?

- **receive**: file arrives at 200, unsigned. appears in View 2 dock. operator inspects, signs (confirms), moves to destination.
- **send**: operator selects file, picks destination. the file moves. the transaction log records it. the reconciliation confirms the move landed.

the "signature" in the status verbs (manifest.session.f1) is the confirmation step. in practice, confirmation IS the three-point check: did the file arrive? does the instrument show it? does the ledger agree?

the status verbs could simplify from seven (staged/claimed/signed/delivered/received/archived/retired) to three:
- **unsigned** — arrived but not confirmed
- **confirmed** — all three points agree
- **archived** — preserved, no longer active

or maybe even two: unsigned and confirmed. archived is just "confirmed and no longer being worked on." you know it's archived because it hasn't appeared in recent transactions.

### ~9 — what about the settled/floating/blocked state?

manifest.session.f1 carries a big "state snapshot" section. what's settled, what's floating, what's blocked. this is valuable but drifts immediately.

where does this live?

option A: the keystone. the keystone IS the settled state. if something is settled, it should be in the keystone with [settled]. if it's floating, it should be in the keystone with [float]. the keystone already does this.

option B: a generated state document. the server could scan all .md files for [settled] and [float] tags, compile them into a state report. automated, always current.

option C: it doesn't need to live anywhere as a single document. the state is DISTRIBUTED across the documents that carry it. the keystone carries system-level state. the frames carry build state. the dreams carry vision state. the schedule carries work state. looking for state in one place is the wrong instinct — the state is everywhere, and the instruments (View 0 file reader, View 1 structural view) show you the state by showing you the documents.

option C feels right. the impulse to snapshot everything into one document is the impulse to centralize. but the system is distributed by design. the manifest should confirm the COUNT (are files where they should be), not the STATE (what's settled and what's floating). state lives in the documents themselves.

### ~10 — the breathing pair revisited

the audit noted that branch 2 breathes: leaf 20 (intake) ↔ leaf 22 (preservation). the session review confirmed: most movement oscillates between receiving (20) and recording (22).

in the dream: the dock (20) and the record (22) are the inhale and exhale. leaf 21 (build) is the held breath — where the actual transformation happens.

the warehouse (View 2) should show this breathing. left side: the dock (20, inhale). right side: the record (22, exhale). center: the grid (21, the structure holding it all).

this maps to what View 2 already does. left: file list (dock). center: destination grid (structure). right: manifest trail (record). the layout is already correct. it just needs the health layer (reconciliation) to make the breathing visible.

### ~11 — what this means for the server

current server mutation flow:
1. operation happens (/move, /create, /fold, /delete)
2. file is mutated on disk
3. manifest.live.md is appended with a row
4. response returned to client

proposed flow:
1. operation happens
2. file is mutated on disk
3. transaction log appended (same as now, manifest.live.md)
4. reconciliation runs (new — /scan vs expected state)
5. response includes reconciliation status
6. client updates health indicator

the reconciliation doesn't need to be full /scan on every mutation — that'd be slow. it could be targeted: after a /move from 100 to 201, just check that the file is at 201 and not at 100. spot-check, not full scan.

or: full reconciliation runs on View 2 load (page load = full health check), and spot-checks run after each mutation.

### ~12 — connections and loose threads

- the dream.ux dreamed about a "density map" in View 1 — file counts visualized as heat. /scan already provides this data. the warehouse grid already shows counts. could View 1 show the same data differently — as weight, pressure, density? the observatory witnessing the warehouse's state?

- the fold ceiling (39 slots) relates to reconciliation — when folds accumulate, the system stops. what if reconciliation also triggered at fold boundaries? "you have 3 unreconciled discrepancies, resolve them before the next fold." the fold ceiling AND the reconciliation ceiling as dual pressure valves.

- count documents are the human narrative of what happened. session logs are the human narrative of what was thought. what's the relationship? a count is a subset of a session — the movement portion extracted into its own document. could the session log generate counts automatically? every C entry with a "from→to" is a count entry.

- the manifest triad says "manifest · confirms · count." the log triad says "sign · hands · record." the audit triad says "trace · audits · path." confirming, handing over, auditing — three verbs, three aspects of the same thing: making sure what happened is what should have happened. the whole leaf 22 is about TRUTH VERIFICATION at different scales.

- receiving (200) is "delivery · receives · material." but in the digital system, what does "receiving" mean? it means: a file appeared that wasn't here before. the server could detect this — new files in any address that aren't in the transaction log. "unregistered arrival detected at address 111." this would catch manual file drops, external tool outputs, anything the server didn't mediate.

- the "unsigned" concept is powerful. everything that arrives is unsigned until the operator confirms it. what if the reconciliation marked all unregistered files as "unsigned"? they show up in View 2 with a different indicator — "I see this file but I don't know where it came from." the operator signs it (acknowledges it, adds it to the ledger) or rejects it (moves to 200 for intake processing or deletes).

### summary of the dream

the warehouse system wants to be five clean instruments:

1. **transaction log** (manifest.live.md at 201) — machine-written flat record of every mutation. what it already is. keep it.
2. **reconciliation** (new, at 201) — machine-generated comparison of filesystem vs transaction log. the three-point check, automated. what the manifest WANTS to be.
3. **count** (at 201) — human-written scoped movement narratives. what they already are. keep them.
4. **audit** (at 221) — human conceptual verification. what it already is. keep it.
5. **View 2** — the health dashboard. shows the dock, the grid, the transactions, and the reconciliation status. what it's becoming.

the mega-manifest (manifest.session.f1) gets retired. its six jobs go to their natural homes:
- inventory → automated (/scan)
- feature tracking → 211 (build log)
- status verbs → keystone or 200 protocol
- settled/floating → distributed across documents, not centralized
- intake/outflow → transaction log (manifest.live.md)
- chunk planning → schedule (202)

the key insight: **manifest · confirms · count**. the manifest doesn't record. it confirms. the transaction log records. the manifest reconciles.
