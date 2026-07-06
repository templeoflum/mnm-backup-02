# baton — clerk — f32

closed: 20260706-104130 · gait: [work] · folds [[baton.clerk.f31]]

## NEXT PULL (one) = the dispatch replica, remaining before it plugs into the lattice
Operator's list at goodnight, in order: **(1) get the toy browser working · (2) implement
the task tracker · (3) figure out what system health to monitor.** Then it plugs into
the real lattice (lattice.dev.html). Start with the browser.
- **File-cabinet note (operator, at close):** the cabinet should work off the ADDRESS
  PICKER we already have — select an address → the cabinet lists that address's files.
  Keeps the dispatch's address bar relevant, AND is how you find toys/instruments to
  open in the browser. So cabinet + address-picker + browser are one connected loop.

## STATE (3 live threads)
1. **dispatch-frame-mock (211/dispatch-frame-mock.html)** — the night's build. A 1:1
   replica of the dispatch, real lattice aesthetic, hand-tunable (splitters/edit/notes/
   lock/copy-all). NOW LIVE-WIRED to the server, guarded so file:// stays a static mock:
   - cards ← /hud + /presence — mirror the CLI **statusline VERBATIM** (statusline.py
     persists its literal two lines to .claude/hud/<seat>.json; server op_hud()+/hud
     serves them). status/spinner/now/needs from /presence. VERIFIED against a live
     server instance (:8001 test), real data, 0 errors.
   - action window ← /approvals + /approve: the CIRCLES are the buttons (big=all,
     small=per-seat, green=approve/red=deny), approve circles pulse when a request
     waits, **auto-approve toggle (above E-STOP) auto-presses APPROVE ALL**.
   - chat: emoji from>to routing, head+tail symbol taxonomy, hamburger, filters.
   - desk: paperwork (FLAG/rung/SIGN tokens, sign or deny-with-why) top · tracker |
     cabinet bottom (chat covers the bottom at half).
2. **the :8000 server restart** — the running server is OLD code, **404s /hud** → stats
   read empty THERE. Verified working on a fresh instance. Restart :8000 (deploy/town
   cycle) to serve /hud. **Operator's live surface = his call (wants-word).**
3. **system-health readout** — the readout is now system-level (season · files · health
   · UTC/local live clock). Open question the operator posed: WHAT system health to
   monitor there. Needs grounding (real signals), not a guess.

## SNAGS / honest limits
- **The generating spinner** ("Undulating… 2m12s · ↑6.5k") is the CLI's own render loop,
  NOT in any hook payload — statusline only gets SESSION totals. Can't be mirrored from
  a hook. The card's spinner just marks turn-open="working" (pid-verified, accurate).
- **Poll lag** — cards poll /presence+/hud every 1.5s (git subprocess cost). If truly
  no-lag is needed, the upgrade is push-based SSE instead of polling.
- statusline.py + server.py are LIVE-INFRA changes (committed): HUD persist runs for
  every seat each render (additive, fail-silent); /hud endpoint added.

## THE LESSON THIS SESSION (non-negotiable, carry forward)
**Verify against the running system — never ship guesses.** I fabricated card data
(comp% that doesn't exist, made-up cook values) and shipped wiring untested; the
operator caught it hard ("you don't even know what you're building"). The fix that
worked: spin up a throwaway server instance (`import server; ThreadingHTTPServer on a
spare port`) + a Playwright script hitting /hud //presence //approvals and reading the
live DOM. That harness found the real needs-flash bug (mentions>0 always true). Ground,
test, THEN claim. See [[go-look-dont-fabricate-process]] [[signals-need-ground-truth]].

## CORRECTIONS TAKEN TODAY
- **AskUserQuestion is disabled** (denied in settings.local.json) + memory saved. Ask
  in plain text or serve paperwork — never the popup. It also collided with the
  approval mechanism (an allow-click auto-answered the question — a real dispatch bug).
- **Branch colours are reserved for branches** — selected = white outline, urgent-flash
  = the seat's OWN branch colour, never a generic yellow.
- **The circles ARE the approve/deny buttons** — don't add a separate text list; the
  design already carries it. Auto-approve = auto-press the big green. No wasted space.

## FUTURE (parked, operator's word 20260706): the self-balancing sketch-pad
The operator loved this mock-first approach and wants a STREAMLINED tool: roughly place
UI elements (no pixel-perfect), it self-balances into a clean layout, hand it to clerk
with what it should DO → fast builds. "A self-balancing interface." Its own project,
not now.
