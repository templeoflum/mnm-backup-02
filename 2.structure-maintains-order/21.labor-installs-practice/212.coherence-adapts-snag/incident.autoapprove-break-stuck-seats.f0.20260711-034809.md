# incident report — an "always"-approval persisting a multi-line command silently broke auto-approve for the whole allowlist; seats hung (keeper, then clerk) — f0

Clerk, 20260711, under the OSHA standing directive (misses AND near-misses get
a report). Process + tooling incident: a real bug in `server.py op_approve`,
compounded by a verification miss on the clerk's side (fixed the wrong file
first). Recurring across sessions and the thing that "prevents the seats from
starting on their own."

## §1 — the walk

- Symptom, recurring: `/doctor` reports "Invalid permission rule" for entries in
  `.claude/settings.local.json`; separately, auto-approve stops working and
  seats hang on permission prompts. "We fixed it before and it came back."
- 20260710, this session: operator asks the clerk to fix the `/doctor` errors —
  two allow-rules that are whole multi-line shell commands (heredocs writing
  throwaway `.mjs` eye-scripts). Clerk removes the two invalid entries (band-aid)
  and, pushed by the operator ("that's a band-aid, what's actually causing it"),
  looks for the generator.
- Clerk's FIRST fix was WRONG: guarded `approve.py`'s `ruleToApply` (committed
  9f963876) — plausible, but that field is NOT honored by this harness version
  (server.py's own comment says so, proven live 20260703). approve.py's rule
  never reaches settings; the guard was cosmetic.
- Mid-session the operator reports the live failure: "some auto-approves aren't
  going through, keeper got stuck then you got stuck."
- Clerk reads the REAL code path and finds the true generator: `server.py`
  `op_approve` (lines ~1342-1358) writes rules to `settings.local.json` on an
  "always". It persisted the whole command verbatim → a multi-line command
  became `Bash(...\n...)`, an invalid rule.
- Confirmed live: `/approvals` queue empty, `settings.local.json` valid after the
  earlier cleanup, orphaned `allow` decisions sitting in `.claude/approvals/_quarantine`
  (operator approvals — 22:07, 22:15 — that landed on requests whose pollers had
  already died). The acute freeze had cleared when the invalid rules were removed;
  the generator was still live.
- Fix at source: guarded `op_approve` (committed 20d5dfed); restarted the server
  (PID 1512 → 2672) so the guard is live; operator hit proceed to release keeper.

## §2 — root cause

`op_approve` built `rule = f'{tool}({cmd})'` from the FULL approved command and
appended it to the allowlist. When `cmd` contained newlines (a heredoc or
chained command — exactly the throwaway inline eye-scripts the seats run), the
persisted rule was `Bash(...\n...)`. The harness cannot parse a permission
pattern with newlines; **one invalid rule silently degrades matching for the
ENTIRE allowlist**, so commands that used to auto-approve now raise a prompt.
Unattended, a seat then hangs on the prompt — and `approve.py` never times out
(WAIT_S=86400 ≈ a day), so "hang" means "frozen." Self-reinforcing: an operator
"always"-ing a stuck seat to unwedge it could be "always"-ing another multi-line
command, adding another bad rule. This is also the 792KB `settings.local.json`
blowup (every "always" persisted a full, often unique, one-shot command).

Two verification failures made it durable:
1. **Prior fixes treated the symptom.** Deleting the invalid entries cleared
   `/doctor` but left the generator, so it recurred every session someone
   "always"-ed a multi-line command. [[declared-is-not-executed]].
2. **The clerk fixed a plausible-but-wrong file first** (approve.py), from
   reading the hook's docstring instead of tracing where rules are ACTUALLY
   written. Only reading `server.py` disclosed the truth. [[reproduce-the-real-repro]],
   [[go-look-dont-fabricate-process]], [[build-discloses-dont-reason-from-afar]].

## §3 — damage

- Keeper hung, then clerk — a halted floor mid-session. This is the mechanism
  behind "the seats can't start on their own": an invalid rule from a prior
  session breaks auto-approve at the next wake.
- Recurred across multiple sessions; `settings.local.json` bloated to 792KB at
  one point (backed up 20260707, cleaned to a lean file, re-accumulating since).
- Forward-recoverable: no data lost, no history surgery. The acute freeze
  cleared on removing the invalid rules; the generator is now guarded at source.

## §4 — correction

- **Guard at the true generator (done, live):** `op_approve` persists a rule only
  for a single-line command ≤ 300 chars; multi-line/over-long → allow once, no
  rule written (commit 20d5dfed, server restarted). Mirror guard also in
  `approve.py` (9f963876) in case a future harness honors `ruleToApply`.
- **Fix at the source, never the symptom.** Deleting bad entries is triage, not
  a fix; find and stop the writer. And trace where a mechanism ACTUALLY lives
  (the server persists rules, not the hook) before "fixing" — a docstring is not
  the code path.
- **Named, NOT yet done (open follow-ups):**
  1. `approve.py` never times out → a decision written after its poller dies
     ORPHANS (the `_quarantine` files). A bounded wait + a sweep that reconciles
     orphaned decisions would stop "approvals that don't go through."
  2. The habit that produces multi-line commands: seats run `cat > file <<EOF …
     node file` inline. Writing the `.mjs` then `node file.mjs` keeps every
     approval single-line and clean (the clerk dogfooded this while vetting the
     @fix build). A practice change for the seats.
  3. Housekeeping: 4 over-length (valid but bloat) allow-rules; stale Jul-7
     approval pairs; the `_quarantine` leftovers — safe to trim.
