# incident report — seats froze on native EDIT prompts (invalid settings rule → acceptEdits lost → edits prompt → prompts bypass the dashboard); + a clerk misdiagnosis (prescribed a relaunch that wasn't needed) — f0

Clerk, 20260711, OSHA standing directive. Downstream twin of
[[incident.autoapprove-break-stuck-seats.f0]] (the invalid-rule generator);
this one is the FREEZE mechanism it produced, plus a verification miss on the
clerk's side. Resolved.

## §1 — the walk

- `settings.local.json` carried invalid multi-line allow rules (from a prior
  "always" on an inline heredoc command — see the twin incident).
- An invalid rule breaks the harness's permission matching for the WHOLE
  allowlist: `defaultMode: acceptEdits` and every `Edit/Write(...)` allow rule
  stop applying. Result: every Edit/Write raises a NATIVE "Do you want to make
  this edit?" prompt.
- Native Edit/Write prompts do NOT pass through `approve.py` (this harness routes
  only COMMAND prompts, Bash/PowerShell, through the PermissionRequest hook). So
  an edit prompt writes NO request file → never reaches the dispatch queue → the
  dashboard's auto-approve toggle can't see or clear it. An unattended seat on
  such a prompt FREEZES (keeper, on a `corpus.index.f5…md` edit; clerk earlier).
- Clerk removed the invalid rules from `settings.local.json`. Permission matching
  healed — but an ALREADY-SHOWN prompt can't be retroactively un-prompted, so the
  stuck edit still needed a manual "proceed"; keeper's subsequent edits then went
  through silently under the now-valid `acceptEdits`.
- **Clerk misdiagnosed the recovery path.** Clerk asserted "settings load only at
  launch, so keeper's session is stale and needs a RELAUNCH," and prescribed a
  town restart. The operator did NOT restart — the earlier settings cleanup had
  already fixed it. Correcting the record: **`settings.local.json` applies to a
  RUNNING session; cleaning the file heals the live session — no relaunch needed.**

## §2 — root cause

- **Upstream:** an invalid multi-line rule in the allowlist (generator fixed in
  the twin incident — `op_approve` guard, commit 20d5dfed).
- **Freeze mechanism (the new finding):** one invalid rule disables the entire
  allowlist's live matching → `acceptEdits` is lost → Edit/Write prompt natively →
  and native edit prompts STRUCTURALLY bypass both `approve.py` and the dashboard
  auto-approver → invisible and unclearable from the surface → an unattended seat
  hangs. Command prompts recover (they route through the hook + queue); EDIT
  prompts do not — that asymmetry is why keeper looked "stuck again" after the
  command side was fixed.
- **Diagnostic miss:** clerk reasoned from an assumption ("load-at-launch")
  instead of testing it, and prescribed a relaunch the fix didn't require. The
  operator's plain question ("is this because you restarted the server?") and his
  correction ("I didn't restart, your last fix worked") is what surfaced the true
  path. [[reproduce-the-real-repro]], [[vocabulary-of-potential-not-claim]],
  [[operator-word-over-stale-docs]].

## §3 — damage

Keeper and clerk froze on edit prompts; friction on every keeper corpus edit
this session (each needed a manual proceed) until the settings were cleaned.
Forward-recoverable, no data lost. Resolved by the settings cleanup alone — no
relaunch, no history surgery. The clerk's wrong relaunch advice cost only words
(the operator caught it before acting).

## §4 — correction

- **Upstream guard (done, live):** `op_approve` no longer persists multi-line /
  over-long commands as rules (20d5dfed, server restarted). Keeping the allowlist
  valid keeps `acceptEdits` + the allow rules live → edits never prompt → no
  freeze. This is THE fix that prevents recurrence.
- **Correct the mental model:** `settings.local.json` is applied to running
  sessions, not only at launch. A corrupted allowlist degrades live sessions; a
  cleaned one heals them. Do not prescribe a relaunch as if settings were
  frozen-at-launch. State mechanism claims as hypotheses and TEST them.
- **Residual structural risk (named, OPEN — not yet closed):** native Edit/Write
  prompts bypass `approve.py` and the dashboard, so ANY edit prompt freezes an
  unattended seat invisibly — not just from settings breakage, but any time a seat
  edits OUTSIDE its allow-domain (or `acceptEdits` is ever off). Options to weigh
  (operator's call, not done):
  1. Ensure each seat's allow-domain actually covers its real edit paths, so edits
     auto-match without relying on the global `acceptEdits` (verify keeper's
     `Edit(/0.relation-grounds-measure/**)` pattern matches its true paths).
  2. A settings-integrity check at seat wake that refuses to proceed / warns
     loudly if the allowlist won't parse — fail loud, not silent-degrade.
  3. If the harness can be made to fire PermissionRequest for Edit/Write too,
     route edit prompts to the dashboard so the auto-toggle can clear them.
