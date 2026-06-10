# Log — fable — f0 — 20260610-035801

New operator arrival. First walk of the structure through the branch-2 lens. Walking only — no audit, no paperwork, no touching. This is the notepad.

Placement note: type table routes logs to 222 (sign·hands·record). This log sits at 201 by instruction — an arriving operator gets manifested at intake before working the floor. Whether operator-arrival logs belong at 201 or 222 is a [float] to settle later, not a decision made here.

---

C [03:58:01] create: log.fable.f0.20260610-035801.md | -→201 | operator arrival walk log. registered in manifest.live.

---

## The walk

O [03:58] the walls — what exists and what doesn't | 2→1→0 | 2→100 |
root 0 (relation·grounds·measure) has no directory on this branch. the keystone describes it; the floor doesn't hold it. roots 1 and 2 are built. within them, cells 120 (logic·describes·state) and 212 (coherence·adapts·snag) are unbuilt — directories appear on demand, not pre-built. that reads as intentional breathing (don't build rooms before they hold something), but 212 is named in the keystone as where feature inventory lives (per dream.warehouse-settled.f3 correction) and it has no walls yet. landing: the structure is grown, not stamped. fine. the absent root 0 is worth one question to the operator someday: does specification live on another branch, or is it waiting?

O [04:00] intake is clean — the 20x leaf works the way the keystone says it should | 200→201→202 | 20 |
one unsigned package at 200 (TS_measurement_handoff, 46 files), counted at 201 (count.ts-handoff.f0 — a genuinely good count: enumerated, categorized, honesty-flagged, state-of-200 footer), schedule folded to f4 at 202 with a new chunk O for the sort. receive → count → schedule, each step its own document, nothing skipped. this is the textbook path and it was actually walked. receiving holds exactly one thing and knows what it is. landing: intake is the healthiest room in the building.

O [04:02] the manifest is strong but the ledger has known lies in it | 201 | 201→221 |
manifest.live.md is append-only, three-point format (timestamp, op, file, from→to, notes), 176-file seed baseline plus live rows. but: survey.ceilingtest f0/f1/f2 and dream.test.f0 have create/fold rows and no delete rows — the files are gone from the floor. the ledger says they exist; the disk says they don't. /reconcile already sees this ("8 missing — legitimate") so the three-point principle (201: one breaks, you'll see it) is proven working — the instrument caught the drift. but seeing drift and amending the ledger are different acts, and the amendment hasn't happened. also: one out-of-order row (the 07:49:15 write filed above the 07:11:28 create block). landing: the books balance only because reconcile holds the correction in memory instead of ink.

O [04:04] fold-numbering has three small frays | 201→221 | 20→22 |
(1) two manifest.session.f0 files, different timestamps — same scope, two zeroth folds. a fold-number collision the ceiling can't see. (2) audit.lattice uses p1–p4 instead of fN — predates the fold convention, never renamed. (3) manifest.live.md itself carries no fold or timestamp — presumably deliberate (a live document never folds), but the naming convention doesn't bless the exception anywhere. landing: the convention is settled; the legacy isn't fully converted to it.

O [04:06] duplicates sit on the books as two originals | 100·220·110·211·111 | 2→1 |
roughly a dozen files exist at two addresses and the seed registered both without noting either as a copy: findings.md, HANDOFF.md, TS_3D/4D/fingerprint/formulas.html, ux_plan.md, spline_continuity_BRIEF.md, "spline_continuity_v2 (4).html" at both 100 and 220. FINDINGS_ternary_TS.md and TS_BRIEF.md at both 111 and 220. tsnew-trace.html at both 110 and 211. which is canonical? the ledger doesn't say. landing: an inventory that counts the same goods on two shelves will reconcile clean and still mislead the picker. this intersects chunk G1 (address the 220 pile) and chunk O3.

O [04:08] naming hygiene is zoned — sloppy where allowed, but also where not | 100→220 | 22→20 |
220 (trim·cleans·slack) holds 42 files of legacy names — spaces, em-dashes, parens, no type, no stamp. that's by design: principle 220, accumulation before order. but cell 100 holds the same kind of untyped strays (findings.md, riemann-dependency-map.md, ternary-field-notes.md, the-anatomy-of-an-edge.md, "spline_continuity_v2 (4).html" — a Windows copy-counter baked into a filename) and 100 is not an accumulation zone. 121 has two more (the-surveyor-of-the-plane.md, the_two_who_built.md — the latter underscored, the former hyphenated). and note.scratch.f0 at 111 is a 4-byte stub left over from instrument testing. landing: the slack is supposed to pool at 220. it's pooling at 100 too.

O [04:10] the logs themselves — the format matured and it shows | 222 | 22→0 |
log.session f0–f6, every fold preserved, no overwrites. the C/O/D lattice-trail format in f5/f6 is genuinely good — a change row reads like a manifest entry, an observation carries its trail, a decision lands with its reasoning. early folds are looser; the format settled through use, which is the keystone's own claim about settling. frays: timestamps inside f6 are not monotonic in one stretch; everything is scoped "session" so there's no per-operation or per-operator thread to pull; and the C rows duplicate manifest rows by design (two readings of one path) but nothing states which is authoritative when they disagree. landing: the logs are not messy. they are the best-kept records in the building after the counts. the mess is in what's around them, not in them.

O [04:12] the schedule chain is readable end to end | 202 | 20→21 |
f0→f4, each fold says what changed since the last, f4 is lean and points at the open work without restating settled chunks. the gate map is the routing discipline made visible. open work as scheduled: chunk O (the 46-file sort, O1–O5), G1 (address the 220 pile), 0.7 (retire manifest.session — three of them sitting at 201 waiting for it), browser verification of client features 0.3–0.6, and the regressed Stage-2 fold-in (don't touch until framed at 210 — the schedule already says so). the fold ceiling is 39; nothing is near it. landing: nothing is lost. the system knows where everything is going — it just hasn't carried some of it there yet.

---

## Where the sloppiness actually lives (notepad summary, not findings)

1. ledger gaps — deletes that happened on the floor but never got rows (survey.ceilingtest ×3, dream.test ×1)
2. duplicates registered as originals at two addresses, no canonical marked (~12 files)
3. untyped/unstamped strays outside the sanctioned accumulation zone (cell 100 especially, 121 lightly)
4. fold-number collision (manifest.session.f0 ×2) and unconverted legacy numbering (audit.lattice.p1–p4)
5. a 4-byte test stub on the books at 111
6. minor: non-monotonic timestamps inside manifest and log f6

None of this is urgent. All of it is already half-known by the system itself — reconcile sees #1, chunk G1/O3 point at #2 and #3. The warehouse doesn't need rescue; it needs its own open chunks worked in order.

D [04:14] no decisions taken | 201→0 | walk only. sorting precedes doing, and this walk is the input to a future sort, not the sort.

---

## Second pass — division of labor settled, walk findings sorted

O [04:18] correction — the missing walls were a lens artifact | 100→221 | 221 |
root 0, cell 120, and cell 212 exist as empty directories. git worktrees don't materialize empty folders, so the walk saw absence where there was only emptiness. observation #1 corrected: the structure is whole; the worktree view is partial. landing: verify against reality includes verifying the instrument you're looking through. the reference frame (this worktree) was the stale thing, not the structure.

D [04:19] division of labor settled | 1→2→0 | both operators signed |
branch 1 dreams material, sifts it (102→112→122), plays with built artifacts, and may reconfigure content in place — UI nudges, rewording, quick rearrangements. branch 2 owns frames, schedule, builds, audits, reviews, logs, and routing approval. the operational test: **if a change needs a ledger row, it's branch 2 work** — content-in-place is branch 1's wiggle room. boundary crossings land at 200 unsigned in both directions; reconcile and audits are the net that makes the play safe, so logging discipline stays on this side and the wandering stays free. document types: dream/float/myth/edge/sketch/parked theirs, frame/schedule/manifest/count/audit/review/log ours, survey/extract drafted by either and signed by 2. open remainder: where verified-done work routes (2→0, root 0 empty) — wants an answer when the first build fully verifies, not before.

C [04:20:49] fold: schedule.lattice.f5.20260610-042049.md | 202→202 | f4→f5. division of labor recorded as ground note. walk observations sorted into new chunk P (warehouse hygiene, P1–P5). correction about empty directories recorded. A–O unchanged.

C [04:20:49] create: frame.hygiene.f0.20260610-042049.md | -→210 | hygiene frame: P1 ledger amendments, P5 stub delete, P2 duplicates, P3 strays, P4 numbering legacy. shape per slice: propose → sign → execute one at a time → verify via /reconcile. nothing executes without sign-off.

D [04:22] the proper process, confirmed by walking it | 20→21→22 | log → schedule → frame |
observations and decisions landed in the log first (this document). the schedule folded so the work is sorted before it's done (202: sorting precedes doing). the frame laid the shape of the build without building (210: frame before you build). manifest rows written for both creates. count/ledger/manifest in sync: two new artifacts, two rows, zero mutations to existing files beyond append-entries. the build itself waits at the gate.

---

## Third pass — hygiene executed, whole pass authorized

D [04:30] operator authorized the whole pass | 210→211 | sign-off delegated, conservative rules bind |
"do you think you can handle the whole pass" — taken as the signature for P1–P5 under the frame's ground rules, tightened: byte-identical → trim, divergent → annotate only, no renames of branch-1 working files without branch 1 present. a location is not a permission, but a delegation is one — bounded by the frame it signed.

C [04:35] instrument started for verification only | 211 | server on :8000 |
mutations done manually with hand-written rows (the instrument auto-logs to log.session at 222 — using it would have split this pass's record across two logs). /reconcile used as the read-only gate, before and after.

O [04:40] the ledger gap runs both directions | 201→221 | 221→112 |
the walk found deletes without rows. /reconcile found the mirror: six files created last session WITH log entries but WITHOUT manifest rows (myth.the-two-flatlanders f0–f3, frame.warehouse.f1, schedule.lattice.f3 — everything post-seed from the 0609 afternoon). the log knew; the ledger didn't. two readings of the same path, and one reading went unwritten. landing: the cross-check between log and manifest is itself an audit step, and it wasn't being run.

C [04:44:17] P1 executed | 201→201 | 15 rows |
6 retroactive registrations, 7 retroactive deletes (dream.test, extract.research.f2, lattice.f2-0608, survey.ceilingtest ×4), 2 explanatory notes (CLAUDE.md at root, TS_measurement_handoff/ — scan blind spots, cannot be cleared honestly by rows; H13 proposed instead).

C [04:44:17] P5 executed | 111→- | stub read first |
note.scratch.f0 content was "yooo" (4 bytes, instrument-test residue). verified against reality before deleting — it was exactly what it looked like. deleted, row written.

C [04:44:17] P2 executed | 220→100·111·211 | count.duplicates.f0 at 201 |
all 12 pairs SHA256-identical — zero divergence, zero information loss, all git-recoverable. 11 copies trimmed at 220, 1 at 110. each trim: delete row + canonical re-placement note, so the ledger's last word on every survivor points where it lives. 220 pile: 42 → 31.

C [04:44:17] P3+P4 executed as annotate-only | 100·121·201·221 | 13 note rows |
no renames. the pre-convention files at 100/121 are branch 1's working material — renaming their references without them present would be surgery in their room while they're out. ledger-noted as kept references, rename deferred to a joint session. manifest.session.f0 collision and audit.lattice.pN annotated as historical, kept as-is.

C [04:50] verify: /reconcile after the pass | 201 | 0 unregistered, 175/175 registered, 2 missing |
both remaining missing are the explained blind spots. the books match the floor everywhere the instrument can see.

O [04:52] scan blind spots are wider than the two flagged items | 211→112 | edge |
/scan walks 3-digit cells only. root and directories were known. the third blind spot wasn't: leaf-depth files — every review.* doc at 22 is invisible to both the unregistered and missing checks. off-book entirely, consistent only by accident. also: op_reconcile keys last-location by filename alone, so a deliberate same-name-at-two-addresses case would get one "last word." both noted in frame.hygiene.f1 edges and proposed as H13.

C [04:55] fold: frame.hygiene.f1.20260610-044417.md | 210→210 | f0→f1, execution record + edges
C [04:55] fold: schedule.lattice.f6.20260610-044417.md | 202→202 | f5→f6, P done, H13 proposed, O next

D [04:57] pass closed | 2→0 | chunk P done |
13 files deleted (all verified disposable or byte-identical first), 0 moved, 0 renamed, 56 ledger rows written, 3 documents created, 2 folded. open residuals carried properly: P3 renames → joint session, H13 → wants a frame, end-of-session reconcile as practice → [float] proposed in schedule.lattice.f6 notes. instrument stopped after verification — left as found.

---

## Fourth pass — incident: the vanishing dream logs

O [05:10] dream.fable and dream.fable-settled reported missing mid-dream | 112 | 112→221 |
operator reported branch 1's active dream documents gone from both the instrument and Windows Explorer, concurrent with this session's hygiene pass. traced before touching anything, per instruction. finding: all five files intact in the 1-mind worktree, uncommitted, existing in exactly one of the five checkouts on this machine. nothing was deleted — this session's 13 deletes were explicit named paths, none dream.*, all inside the 2-warehouse tree. no instrument writes ever reached this session's server (no 20260610 log.session at 222 — the server would have created one).

O [05:15] three layers, one incident | 112 | 211→112 |
(1) my verification server ran on the shared port :8000 rooted in THIS tree during the dream's settling folds — any instrument view in that window showed the warehouse tree, no dream files in it. (2) operator's Explorer check was against the MAIN tree — a different checkout the dream files were never in. (3) the server running on :8000 as of the trace is rooted in the main tree, so the instrument now shows a tree containing neither branch's recent work, and the client UI never says which tree it serves. full write-up with topology table, containment evidence, and the named near-miss (instrument writes during the window would have cross-contaminated trees with consistent-looking books): edge.worktree-visibility.f0 at 112.

C [05:17:52] create: edge.worktree-visibility.f0.20260610-051752.md | -→112 | incident log. five fix candidates listed as [float] — per-tree ports, server announces root, startup guard, commit cadence, operating discipline. none implemented.

D [05:20] log precedes plan precedes fix | 112→210 | honored |
the incident is on the books at 112 before any fix is framed. my own part in it is named plainly: I checked the port was free before starting the server, but never asked whether anything else on this machine EXPECTED the port — a location is not a permission, and a free port is not a clear runway. the fix discussion starts from the edge doc's candidates when the operator calls for it. the main-tree server left running, untouched — not mine to stop.
