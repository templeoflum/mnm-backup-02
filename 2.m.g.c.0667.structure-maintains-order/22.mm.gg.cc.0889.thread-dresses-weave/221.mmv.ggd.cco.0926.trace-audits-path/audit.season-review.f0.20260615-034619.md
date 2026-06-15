# audit — season review — f0 — the build-spine verified to season-close, keystone drift named

address: 221 (trace·audits·path)
cut: 20260615, on operator word — "lets go full audit mode." The deep review that grounds the meta-arc freeze. Clerk runs it in audit-mode (clerk is the whole of branch 2 right now; inspector is a real future seat, deferred to the fresh-start, not stood up before the freeze).

base reference: `audit.systems-sweep.f0.20260612-140236`. That sweep verified every claim on the books **up to 06-12**. This review **extends the trail forward** to season-close — the entire season tail (W5-close → W2 → Q2/Q3 → W4 → W3) was built *after* the sweep and had never been through a verification pass.

method: two parallel verification passes against the committed code and the on-disk config (one on the W3/Q2/Q3 harness, one on the W2/W4/W5-close client+server), plus a by-hand keystone-vs-practice read. Verdicts are code-read and file-presence; live-browser behavior was play-confirmed by the operator during the build sessions and is not re-litigated here.

**scope, stated up front:** ground's research wing (root 0) is OUT of frame. The corpus.index is mid-settle — its own log shows a verify pass in progress (6 of 1023 records settled, "open the verify season wide" is its next pull). 221 forbids verifying against moving ground. The two ledgers are distinct and must not be conflated: the **lattice manifest** (~1756, the floor's file census) is the clerk's books; the **corpus registry** (1023, ground's grounding database) is ground's. A hard file-count reconcile of the manifest also waits — ground is actively adding files, so the live count is *expected* to move; it was true at season-close and a hard reconcile is owed only once ground settles.

---

## I — THE BUILD-SPINE: verified forward to season-close

Every post-sweep build claim checked against the committed code. **The season built what it said it built.** All commits touch exactly what they claim.

| item | claim | verdict |
|------|-------|---------|
| W5-close scroll+pin (284f0cc) | sweep filters subfolder entries before /scan compare; fixes scroll-yank + pin-listener clobber | VERIFIED — lattice.f2:3327 |
| W5-close drag-select (f81c859) | `user-select:all` on both file-list selectors | VERIFIED — :222 |
| W2 C7 (3688b53) | log pane UTC | VERIFIED — :3220 `toISOString` |
| W2 0418 (3688b53) | reader clears on address change | VERIFIED — go() :1534 |
| W2 C4 (3688b53) | ratio line marks [0,1) asymmetry (0 solid / 1 dashed) | VERIFIED — :2295, CSS :551 |
| W2 fetch-banner (3688b53) | failed freshness beat raises server-down banner | VERIFIED — :3285/:3338 |
| W2 U-1 reveal (e0bec48) | server `/reveal` os.startfile + HUD folder button | VERIFIED — server.py:379, :950 |
| W2 universal-fold (96e6eef) | unnumbered→f0, canonical kept, clash bumps | VERIFIED — server.py:212 |
| W2 C3 (5899479) | center dot kept branch-colored, no change | VERIFIED — :2217 |
| W2 lattice.bat guard (674fc89/239d1d2) | detects LISTENING :8000, no second server/tab | VERIFIED — lattice.bat:6 |
| W4 memo board (W4) | server sole writer, /memo + /board, board at 222 | VERIFIED — server.py:681 |
| W4 memos panel | button/thread/compose/@mention/unseen-dot/3s poll | VERIFIED — :955/:1213 |
| W4 deep-link (e680e99) | `<addr> <file>` token jumps the viewer | VERIFIED — :1240/:1270 |
| W4 reader scroll fix (e2e751d) | scrollTop preserved across same-file re-render | VERIFIED — :1819 |
| Q2 statusline (62db6b2) | `seat · address · model`, no server calls | VERIFIED (address drift — see II.2) |
| Q3 witness (337ca70) | PostToolUse Write\|Edit; NEW→201 row, EDIT→222 line; server-down ok; never blocks | VERIFIED (logic sound; "unit-tested" — see II.3) |
| U-5 HUD (7d89f1d) | two-line ctx%/cost/tokens/rate-limits, no git | VERIFIED — statusline.py:49 |
| Q6 bodies (166f4eb/02891ef/cb3ffbd) | keeper/lantern free-in-wing + machinery-denied; clerk owns machinery | VERIFIED — posture genuinely encoded |
| Q9 wakes (b8d49af) | wake.py, leans injected/walking/calibrating, SessionStart | VERIFIED — wake.py:20 |
| Q1 orientation (template) | template only, per-address rollout deferred | VERIFIED — zero filled orientation files |

---

## II — WHAT THE BOOKS DON'T REFLECT (three findings)

The build is solid; these are the gaps the verification surfaced.

1. **The harness layer hangs entirely on the launchers.** There is no `.claude/settings.json`. Hooks (witness, wake), statusline, and per-seat permission posture bind **only** because `seat-clerk.cmd` / `seat-keeper.cmd` / `seat-lantern.cmd` pass `--settings .claude/seats/<seat>.json`. A seat launched any other way (bare `claude`) gets none of it — no witness, no wake, no permission posture. This is the load-bearing fragility behind "armed but never watched live": the entire W3 harness binds on the *next launcher-driven relaunch* and nowhere else. **Single point of failure, named.** (Disposition for the operator — is launcher-only binding intended, or should a `.claude/settings.json` carry a baseline?)

2. **Stale address claim — paper says 222, disk says 2.** The baton (f5) and schedule record clerk's statusline address as `"222 sign-hands-record"`. On disk it is `"2 structure-maintains-order"`; keeper=`"0 …"`, lantern=`"1 …"`. The seat files were renamed (mind→lantern d3ffac9, ground→keeper 01750fb) and the addresses dropped to root level after commit 62db6b2. The mechanism is correct; the recorded address strings are stale. Corrections-forward: named here, not back-edited.

3. **"Unit-tested" with no committed tests — recurring.** Both `witness.py` (Q3) and universal-fold (96e6eef) carry "unit-tested" in their commit messages, but **no test artifact exists in the repo** — only a stale `witness.cpython-314.pyc` proves witness was run once. The tests were session-local and never landed. This is the same pattern the systems-sweep booked ("bench shim was session-local"; kernel/test require() split "bridged by nothing"). The code itself reads correct in both cases; the *claim of verification* has no durable backing. **Pattern, not a one-off** — candidate watch-item: tests that run in-session must be committed, or the claim is unbacked.

---

## III — KEYSTONE vs PRACTICE: the drift register

The operator's named priority — the keystone (CLAUDE.md) is drifting from how we actually work, and a keystone update rides with the file-naming rework into the fresh-start. This register is the hand-off list for that future session. Each entry marked **KNOWN** (already booked elsewhere), **NEW** (surfaced here), or **TIGHT** (a place keystone and practice agree — load-bearing, leave it).

**D1 — routing / the gate vs the dream cycle [NEW, high-value].** Keystone says `routing: 1→2→(0 or 1)`, "operation dumps to configuration. configuration gates: verified → specification." Practice runs a different shape: the lived loop is the dream cycle `seed→100→112→122→202→build→seeds` (memory: dream-cycle-stages) — root-1-centric, not 1→2→0. And **root 0 ("specification," where verified work rests) has never been landed on** — sweep §I confirmed the whole root-0 tree exists empty; corpus.index defers where verified ground rests ("root 0 stays empty until then — fast fill is false fill"). The keystone describes a routing-to-specification practice has never exercised. **This is the single biggest keystone-vs-practice gap.**

**D2 — document-type registry [KNOWN, growing].** Keystone registers ~17 types (marked [float]); server enforces 12; practice uses ~24 (sweep: journal, list, essay, compass, map, play, bench, marginalia, float — unregistered). Since the sweep it has grown further: corpus.index introduced object-type vocabulary (`law · principle · method · algorithm · design · concept · criterion · framework · format`, status `established/empirical/open` — flagged for the operator at line 173), plus the `memo` type (W4, provisional) and the `orientation` template type. The keystone's type list is the most-drifted single section. Owned by the naming dream (dream.naming-grammar at 100); noted here as the keystone's worst drift.

**D3 — fold discipline under-specified [NEW].** Keystone 212 [float] is one line: "folding preserves the trail. new version enters, previous version stays. don't overwrite." Practice has a refined, operator-worded discipline not in the keystone (memory: fold-discipline-nuance; schedule f9 operating rule): folding ≠ editing — append/annotate is free, a fold is *earned* by integration or rupture; accumulator types (schedule, manifest-kin) fold only on completion-cleanup or discussed format-change. Stable enough to rise into the keystone at the rework.

**D4 — three-point update didn't hold [NEW].** Keystone 201 [float]: "filesystem + instrument + manifest. one breaks, you'll see it." In practice the manifest went **dead for two days** (06-10→06-12, ~368 unledgered files) and the three-point discipline did *not* surface it — only a full sweep did. The witness hook (Q3) is the new mechanism meant to keep the manifest live going forward. The keystone states a discipline that hasn't yet held; the repair exists but is unproven (binds on relaunch, see II.1). Reconcile the 201 language to what actually keeps the books live.

**D5 — the 39-ceiling, framing vs implementation [NEW, verify].** Keystone 211 [float]: "the build has a ceiling. 39 slots (3+9+27). the system stops, the operator decides what to shed." In practice 39 is implemented as a **per-cell file-count guard** in /create (B9). The schedule carries far more than 39 items. Unclear the keystone's "build has a ceiling" framing matches what 39 actually governs (per-cell file count). Flagged to *verify what 39 governs* before the keystone update touches 211 — not asserted as drift, asserted as unreconciled.

**D6 — floor practice L1–L6 not yet in keystone [KNOWN, by design].** The commit-per-change / no-merge / own-paths / one-floor practice lives in the seat file as a watch-item ("carves to keystone only after surviving use"). It is load-bearing now and has survived the season. Candidate to rise — correctly waiting, named so the rework remembers it.

**D7 — seat model: per-root vs per-trade [NEW, adjacent — seat file, not CLAUDE.md].** The seat file frames branch 2 as three trades (clerk 20x / builder 21x / inspector 22x). The live seats are per-root: clerk (2), keeper (0), lantern (1) — and clerk covers *all* of branch 2's internal trades. So "branch-2's three trades" and "one seat per root" coexist with an unresolved tension: are seats per-root or per-leaf-trade? Today: per-root, branch-2 trades all clerk. This is seat-file drift, adjacent to the keystone work — surfaced so the fresh-start seat model resolves it deliberately.

**TIGHT — origin/center/boundary.** Keystone: "the origin is exact. the center and boundary are approached, never reached." W2's C4 just rendered exactly this (0 reachable/solid, 1 dashed/open). Keystone and practice are tight here — load-bearing, confirmed in the UI, leave it. Noted as a place the drift register does *not* touch.

---

## IV — LOOSE ENDS, against the meta-arc freeze

The meta-arc: finish → freeze → deep-analyze → fresh templates → carry forward only (a) rebuilt TS + (b) properly-formatted research. Accounting for what is mid-flight at the boundary:

- **Awaiting first live look (binds on relaunch):** the W3 harness — bodies (Q6), wakes (Q9), witness (Q3), statusline/HUD (Q2/U-5). Verified-present, never watched live. First play-confirm is the operator's.
- **Deferred & named, ride past the freeze:** Q4 whisper · Q5 ask-gates · H14 fold-ceiling UI · Q7/Q8 polish · U-3 docked chat (next-season, lands on the W9 rebuilt client) · U-7 inbox / U-8 signing desk (W4 UI half, next-season). Confirm none are wanted before the freeze.
- **Standing snag, unbuilt:** witness-hardening (atomic append / retry). The witness silent-miss fired three times across the season; the clerk reconcile sweep held the books, but hardening stays the precondition before any autonomous multi-agent loop trusts the books unattended. The new witness hook (Q3) closes the *direct-write* gap but is itself the soft kind (never blocks, returns on failure) — it does not yet harden the underlying append.
- **The parked lattice seat board** (the U-5 miss) — still in `op_seats()` + the `/seats` route; needs a server restart to function; a revert candidate kept by operator word. Carries to the freeze decision.

---

## V — limits + next passes

- This pass verified the **build-spine and config** by code-read; it did not re-run the live browser (operator play-confirmed those during the builds) and did not touch the harness *running* (it binds on relaunch).
- **Not yet audited this season-review:** the dream/build cycle integrity (D area — does the lived cycle match the keystone cycle, where did it skip/improvise) is named but not deep-run here; parts touch mind's territory. The hard manifest reconcile waits on ground settling. These are the next passes if the operator wants the review wider.
- This f0 is the base reference for the next reconciliation, not gospel. Corrections land forward.

*Append below this line. Corrections forward, never backward.*
