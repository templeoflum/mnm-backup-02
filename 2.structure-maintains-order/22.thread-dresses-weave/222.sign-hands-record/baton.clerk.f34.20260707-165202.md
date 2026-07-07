# baton — clerk — f34

closed: 20260707-165202 · gait: [HOLD] · folds [[baton.clerk.f33]]

## NEXT PULL (one) = EARN THE ALL-CLEAR, then the operator's word to resume
Run `python .claude/seats/allclear.py` (the hardcoded clearance gate — clerk-only,
first-call). It prints NOT CLEAR + names what fails. To reach CLEAR:
- **[watchdog]** — run the ADVERSARIAL guard-test (deliberately start the exact stray
  `python -m http.server 8000`, in the SAME breath run `portguard.py guard`, confirm it
  KILLS the stray in <1s + server.py survives + localhost stays reachable — tiny window,
  watched), then arm portguard guard as a live Monitor (`while true; portguard.py guard; sleep 3`).
- **[barrier-1]** — THIS wake is a fresh session, so the registry now HAS the `apprentice`
  type. Spawn one (Agent, agentType 'apprentice') on a harmless task, confirm it has NO Bash,
  and write `.claude/status/apprentice.noshell.proof`. That is the empirical proof.
- **[dispatch]** already passes.
When `allclear.py` exits 0 → clerk gives first-call clearance → operator gives the final word
(his backup button beside the e-stop = layer 2). **NO apprentices, NO dispatch work resumes before then.**

## STATE (3 live threads)
1. **CATASTROPHIC INCIDENT — e-stop was disabled, WORK HALTED** — `incident.dispatch-estop-disabled.f0` (212).
   A clerk apprentice's capture-rig bound :8000 (`http.server`), silently shadowed the real
   server/e-stop via IPv6-first localhost; hid because board.py uses IPv4. Root cause = a
   CAPABILITY escape (full-tool apprentices, instruction-only containment). MADE-SAFE (stray
   killed, server restored, nothing lost). Barriers built + committed: no-shell apprentice type
   (`.claude/agents/apprentice.md`) · portguard watchdog (detection proven, KILL path unproven) ·
   allclear hardcoded gate. Earn-path = NEXT PULL.
2. **the dispatch mock (211) — built heavily this session, now HALTED.** Committed + vetted:
   live chat (fetch /channel + composer /post) · no-reflow directional message-expansion ·
   close-on-read fix · tap-to-answer (yes/no/hold/go + sign) · tracker-pin · auto-update (S2) ·
   chat-send bug fix · /tasks endpoint (server.py — NEEDS a restart to go live). OPERATOR
   FEEDBACK COLLECTED, NOT built (post-clearance): tracker → one-task + one-bar + SOLID bg ·
   tap-buttons VANISH on click · friction#2 (buttons must show WHAT you answer) · every-message-
   a-desk (3 zones, click=paperwork) · 4-emoji selector replacing 012B · cabinet+tracker move up ·
   chat permanently half-screen · ONE-LINE hard rule · [hold]=received-wrong signal.
3. **season plan FRAMED** (`frame.season.f0`, 210) — goal = fluid interaction + work-while-talk;
   S1 handshake → S2 push-visibility → S3 dispatch-fold (REPLACE the S3 view) → S4 commit-gate
   (scale) → S5 andon; memory-garden deferred to its sift. Operator blessed the schedule. The
   ~/@ split (~=handle, @=tool) is clerk's floor, awaiting the migration call; the full
   symbol-grammar = lantern's miroglyph cycle (OPEN: dream.miroglyph.f0, 102).

## SNAGS
- allclear = NOT CLEAR: [watchdog] not armed + [barrier-1] needs the spawn-test.
- portguard KILL path (guard mode) UNPROVEN — the adversarial test proves it; controlled, tiny window.
- /tasks committed but inert until a server.py restart (operator's surface).
- close-out tire-spin: i over-confirmed a yes already given — lean the confirms; but a HAZARDOUS
  action still earns one explicit confirm (that stays).
- manifest witness backlog uncommitted (shared/auto — reconcile when next committing the manifest).

## WANTS-WORD
- the operator's FINAL all-clear (after allclear exits 0).
- the adversarial guard-test nod (it re-creates the hazard, controlled).
- the ~/@ migration call (re-parse legacy @seat, or hard-switch).
- the dispatch redesign + deploy (his surface) — all post-clearance.

## gait [HOLD] — the floor is SAFE but WORK IS HALTED by the incident. Nothing builds, no
apprentices spin, no dispatch work resumes until `allclear.py` passes + the operator's word.
First act next session, after the sit: the earn-path, not the build.
