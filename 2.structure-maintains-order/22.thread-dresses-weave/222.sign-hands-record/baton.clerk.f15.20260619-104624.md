# baton — clerk — f15

closed: 20260619-104624 · gait: [hold] (operator closing up; resumes by FEEL-TESTING the ratio module, then greenlights the embed) · folds from [[baton.clerk.f14]]

## TEST GUIDE — what to try when you're back (this session's work)

Open the kit workbench (`211/kit/index.html` via the local server). Drop the **`ratio`** part from the palette. It's the standalone ratio module — dial it in isolation before we embed it in the smart param. Things to feel-test:

1. **inert default** — a fresh `ratio` part sits at ratio **1.000 (unison)**, mult 1×, offset 0 → its **φ tracks the heart 1:1**. That's the "passes the heart through unchanged until dialed" baseline. Confirm it feels right as the neutral state.
2. **input selector** (turns · distance · phase · sin · cos) — switch it, watch the `in` / `φ` / `sync` readouts. Accumulators (turns/distance) climb; bounded (phase/sin/cos) fold. Focus the part → the **scope plots φ**.
3. **ratio scrub + bookmarks** — drag it (0,1]; click bookmarks (1:1, 2:3, 3:4, 1/φ…). A bookmark lights ONLY when the value matches; free-dial → none lit.
4. **mult** magnitude + **reverse** toggle (sign = direction); **offset**.
5. **right-drag a control** (ratio/mult/offset) → its **min/max/default** config menu opens. Change them → the control reconfigures. (The menu's own scrubs don't get menus — no regress.)
6. **click a control** (switch to **interact** mode first) → the **properties panel** (right inspector) shows that control's **step**; change step → its drag/arrow grid retunes.
7. **drag feel** — scrubs now **pointer-lock** on drag (drag far past the old screen-edge stall, it keeps going). A bare click never locks.

**Tell me:** does the (0,1]/unison framing, the inert default, and the config-menu + step affordances feel right? Anything to adjust BEFORE they get baked into every smart param by the embed.

## state (live threads — 2, healthy)

- **THE RATIO MODULE — built + rig 33/33 green this session.** Home `211/kit` (`ratio.js` pure math, `ratio-system.js` the part). Domain **(0,1] with 1=unison**, inert default r=1/m=1/o=0, input-node selector, library bookmarks, per-control min/max/def right-drag menus, properties-panel step. Spec: [[frame.ratio-system.f1]] (STALE — see snag). Catalog source: `200 — parameter loop system.f0` (only its Layer-2 ratio catalog is trusted).
- **THE EMBED — designed, NOT built (the next pull).** The module becomes each smart param's **drive**: replace the param's right-side animation menu (3 scrubs) with the **full module, full-size, extending right**; **flip the sides** (right-drag LEFT half → module, RIGHT half → min/max/def); rewire param drive to consume the module's φ. Touches shared `smartparam.js` + the workbench drive loop for EVERY param — invasive.

## next pull (ONE — gated on operator's feel-test)

**On the operator's word after his feel-test: build the embed (chunk 3).** Module → smart param's drive dropdown (full-size right), flipped sides, drive = module φ. Then fold the frame f1→f2 capturing the whole feature. Do NOT start the embed before his feel-test/greenlight.

## snags

- **frame.ratio-system.f1 is STALE** — still says `ratio ∈ [0,1)`, no config menus/inert/input-selector. Deferred the fold to f2 until the embed lands (one fold, not two). The COMMITS carry the true current state; don't trust f1's body until folded.
- **scrub-dead-drag incident this session — RESOLVED** (`incident.scrub-dead-drag.f0`, fixed forward, not reverted; guard `scrubDrag` landed + seen to fail on the bug). The scrub now pointer-locks on drag; left-only drag guard added. If anything scrub-ish feels off, that's the place to look.
- LF→CRLF git warnings on every kit commit (cosmetic).
- **pre-existing uncommitted (NOT mine, untouched)**: `201/manifest.live.md`, `222/log.session.f13+f14`, branch-0 `quarantine/` + `mythic library/` — dirty since session start.

## wants-word

- the feel-test verdict (test guide above) — esp. the inert/unison default and the config-menu + step affordances, before the embed bakes them in.
- the embed layout when we get there (module full-size extending right from the param).

## carry

- **OS migration note filed** this session: `222 — note.os-migration.f0` — starting point for the Windows→MacBook switch (~1mo out). Launchers/hooks/`python3`/memory-dir copy; content transfers clean.
- **New memory**: `comments-make-no-mechanism-claims` — comments/docs say WHAT + navigation, terse, NO how/why claims; and never consume such a claim as truth (took scrub's "deliberate no-lock" comment as ground → built a workaround around a bug). Plus extended `reproduce-the-real-repro`: prove a guard is real by watching it FAIL on the bug; headless isn't the only path (headed Playwright confirmed the Pointer Lock the rig couldn't).
- **Resume:** read this baton's test guide → operator feel-tests the `ratio` part → on his word, build the embed (chunk 3) → then fold frame f1→f2. Rig is the correctness gate (`node dev/verify.mjs`, expect 33/33); feel is the operator's.
