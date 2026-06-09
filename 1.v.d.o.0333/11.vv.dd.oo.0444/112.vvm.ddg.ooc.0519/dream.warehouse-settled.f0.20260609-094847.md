# dream.warehouse-settled — f0

address: 112
sources: dream.warehouse.f0 + f1 at 102, server.py at 211, manifest.live.md at 201

the dream walked the warehouse at night. this document walks it in daylight and marks what's real.

---

## what the dream found

five instruments, one retirement, three corrections.

**five instruments:**
1. transaction log (manifest.live.md) — already exists, keep it
2. reconciliation — new, the warehouse checking itself
3. count — AI-written scoped movement narratives
4. audit — AI-led conceptual verification, human-reviewed
5. View 2 — health dashboard showing dock, grid, transactions, reconciliation

**one retirement:**
manifest.session — 444 lines doing six jobs. distribute the jobs, retire the file.

**three corrections from review:**
- the human looks, the AI holds the clipboard. counts, audits, inventories, reconciliations are all AI-written, human-reviewed.
- file selection persists across View 0 and View 2. same room, different lighting. View 1 doesn't participate.
- the warehouse needs a drop zone — a surface, not a list. where files land at 200.

---

## what already works

these exist and do what they should:

| thing | what it does | status |
|-------|-------------|--------|
| `trace()` in server.py | every mutation auto-appends to manifest.live.md AND session log at 222 | working. the ledger writes itself. |
| `/scan` | counts files at all 27 cells, returns `{counts: {addr: N}}` | working. filesystem truth. |
| `/manifest` | reads manifest.live.md, returns last 50 entries reversed | working. transaction history. |
| `/receive` | places file at 200 (or specified addr), traces it | working. unsigned intake. |
| `/move`, `/fold`, `/create`, `/write`, `/delete` | mutations with automatic tracing | working. all traced. |
| View 2 left column | file list for current address | working. follows address, not view. |
| View 2 center | 27-cell grid with file counts from /scan | working. the floor map. |
| View 2 right column | manifest trail from /manifest | working. recent transactions. |

---

## what's buildable now

### 1. `/reconcile` endpoint — the warehouse checks itself

**what it does:** compares filesystem reality (/scan) against the transaction log (manifest.live.md). finds files the ledger doesn't know about (unregistered) and ledger entries pointing to files that aren't there (missing).

**what we have:** `/scan` already walks all 27 cells and counts files. `op_manifest()` already parses manifest.live.md into structured entries. the reconcile function combines them.

**what we need to add to server.py:**

`op_scan_files()` — enhanced scan that returns file NAMES per cell, not just counts. the current `op_scan()` only counts. reconciliation needs to compare specific files.

`op_reconcile()` — the new function:
- calls `op_scan_files()` to get every file at every address
- reads ALL manifest.live.md entries (not just last 50)
- for each file on disk: is there a manifest entry that put it there? if no → unregistered
- for each manifest entry with a `to` address: is the file actually there? if not, is there a later entry that moved it? if neither → missing
- returns: `{ clean: true/false, unregistered: [{file, addr}], missing: [{file, expected_addr, last_op}] }`

**GET `/reconcile`** — the HTTP route. returns the reconciliation result.

**scope:** ~40-60 lines of python. stdlib only. no new dependencies.

### 2. persistent file selection across views

**what it does:** when you select a file in View 0 (reading) and switch to View 2 (warehouse), that file is already selected — primed to send. when you select a file in View 2 and switch to View 0, it's already primed to read. the address stays too. same room, different lighting.

**what we have:** the views already share an address state (the numpad selects address, views respond). file selection likely lives inside each view's rendering logic independently.

**what we need:** lift file selection to shared state alongside address. when View 0 highlights a file in its list and the user switches to View 2, View 2's file list shows the same file highlighted with the destination grid ready. when View 2 selects a file and the user switches to View 0, the reader opens that file.

**scope:** client-side JS only. no server changes. depends on how the current lattice.html manages state — needs a read of the instrument to size precisely.

### 3. drop zone at 200

**what it does:** a drag-and-drop surface in View 2 where external files land as unsigned intake. drag a file from your desktop onto the surface → file content gets read → `/receive` fires → file appears at 200 → reconciliation flags it as a new unsigned arrival.

**what we have:** `/receive` already accepts file + content and places it at 200 with tracing. the server side is done.

**what we need:** HTML5 drag-and-drop area in View 2. `dragover`/`drop` event handlers. `FileReader` to get file content. POST to `/receive`. visual feedback — the surface highlights on dragover, shows the file name on drop, updates the file list.

**scope:** client-side JS + HTML. ~30-50 lines. no server changes. the `/receive` endpoint already does exactly what's needed.

### 4. health indicator in View 2

**what it does:** on View 2 load, calls `/reconcile`. shows a simple indicator: "clean" (everything matches) or "N unregistered, M missing" (drift detected). clicking the indicator shows the discrepancy list.

**what we have:** the right column already shows the manifest trail. the health indicator sits above it or beside it — a single line that summarizes the reconciliation result.

**what we need:** fetch `/reconcile` on view 2 activation. render result as a status line. if discrepancies exist, clicking expands to show the list. unregistered files could optionally show in the left column with a different indicator (the "unsigned" marker from the dream).

**scope:** client-side JS. depends on #1 (the /reconcile endpoint existing).

---

## what changes in practice

### manifest.session retirement

the six jobs go to their natural homes:

| job | was in manifest.session | goes to | how |
|-----|------------------------|---------|-----|
| inventory by address | hand-maintained tables | `/scan` (already automated) | stop maintaining. /scan is the truth. |
| feature inventory | View 0/1/2 capabilities list | 211 build log (AI-written when features ship) | new document type at 211 when needed |
| status verb definitions | staged/claimed/signed/etc | keystone (if protocol settles) or 200 | decide when the verbs settle. not now. |
| settled/floating/blocked | hand-maintained snapshot | nowhere. state is distributed across documents. | the keystone carries [settled]/[float]. dreams carry vision state. frames carry build state. stop centralizing. |
| intake/outflow ledger | 67 hand-maintained entries | manifest.live.md (already automated) | stop maintaining. the transaction log is the truth. |
| chunk inventory | A through K, gated | schedule at 202 (its actual home) | move when schedule work begins |

**the retirement is not a delete.** manifest.session.f1 stays where it is as a historical record. we stop updating it. manifest.live.md and /scan are the living instruments.

### AI-written paperwork

the dream clarified roles:

**the AI does:** counts, audits, reconciliation reports, inventory snapshots, movement narratives. anything that requires walking aisles, counting boxes, comparing lists, stitching transaction entries into stories.

**the human does:** looks, plays, discusses, directs, makes surgical edits. asks the questions. decides what's settled. the moment of attention — looking at the thing and understanding what it is.

**in practice:** after a sorting operation, the AI produces the count document via `/create` at 201. after a build session, the AI produces the audit via `/create` at 221. the human reviews, corrects, and the document folds if corrections are needed.

---

## build sequence

dependency order — each item unlocks the next:

**A. `/reconcile` endpoint** (server.py)
- add `op_scan_files()` — returns `{files: {addr: [filenames]}}`
- add `op_reconcile()` — compares scan_files vs manifest entries
- add GET `/reconcile` route
- no client changes. testable via curl immediately.

**B. health indicator** (lattice.html, View 2)
- fetch `/reconcile` on View 2 activation
- render status line in right column
- expand to show discrepancies on click
- depends on A.

**C. drop zone** (lattice.html, View 2)
- HTML5 drag-and-drop surface
- reads file content, POSTs to `/receive`
- updates file list and triggers reconciliation refresh
- independent of A/B but more useful with B (you drop a file, the health indicator shows "+1 unregistered").

**D. persistent file selection** (lattice.html, shared state)
- lift selection to shared state
- View 0 and View 2 read from same selection
- View 1 ignores it
- independent of A/B/C. can be built in any order.

A is the foundation. B depends on A. C and D are independent of everything. four items, two of which can run in parallel.

---

## what waits

these emerged in the dream but don't have clear builds yet:

- **cardiogram instrument** (~9 in f1) — file count, movement rate, discrepancy trend over time. needs historical reconciliation data that doesn't exist yet. waits until the reconciliation has been running long enough to have a time series.

- **simplified status verbs** (~8 in f1) — unsigned / confirmed / archived. the current seven verbs haven't been enforced by anything. simplifying them is a protocol decision, not a build. waits until the receiving/sending flow is used enough to know which verbs actually matter.

- **unsigned indicators in file list** (~10 in f1) — marking files the ledger doesn't know about with a visual indicator. depends on reconciliation data (A) and a UI decision about how to show it. could be part of B or a separate pass.

- **targeted spot-checks after mutations** (~11 in f1) — instead of full reconciliation after every move, just verify the specific file landed. optimization. waits until full reconciliation proves to be too slow (it might not be — 27 cells is small).

- **auto-detection of external file drops** (~12 in f1) — server detects files that appeared without going through /receive. this IS the reconciliation — unregistered files are exactly this. comes free with A.

---

## edges

where the dream meets reality and the fit isn't clean:

- **manifest.live.md is partial.** it only knows about operations since the server was built. pre-existing files (most of the system) have no manifest entries. the reconciliation will flag ALL of them as unregistered on first run. this is correct — they ARE unregistered from the ledger's perspective. but it means the first reconciliation output will be noisy. options: (a) accept the noise and sign the existing files into the ledger via a one-time bulk registration, (b) add an "initial inventory" manifest entry for everything /scan finds on first run, (c) only reconcile going forward and treat pre-existing files as baseline. option (b) feels right — one-time seeding.

- **the replay approach vs. the snapshot approach.** f0 dreamed about replaying the entire transaction log to compute expected state. this is rigorous but complex — you'd need to handle creates, moves, deletes, folds in sequence. the simpler approach: just check whether each file on disk appears in ANY manifest entry with a matching `to` address. less rigorous (doesn't catch if a file was moved away and then a different file with the same name was created) but covers 95% of cases and is much simpler to build. start simple, add replay if the simple version misses real discrepancies.

- **file selection persistence and View 1.** the dream says View 1 doesn't participate in file selection — it sees structure, not individual files. but what happens to the selection when you pass through View 1? does it persist silently (you can't see it but it's still there when you return to View 0 or 2)? or does it clear? persisting silently feels right — you ascend to the observatory, you come back down, the file is still on the desk where you left it.

- **the drop zone and non-text files.** `/receive` currently writes content as UTF-8 text. dropping a PNG or PDF won't work correctly. options: (a) restrict the drop zone to text/markdown files, (b) add binary file support to `/receive` (base64 encoding or multipart form), (c) defer binary support until it's needed. (a) is honest about current capabilities. (c) is the dream's answer — build what you need, not what you might need.
