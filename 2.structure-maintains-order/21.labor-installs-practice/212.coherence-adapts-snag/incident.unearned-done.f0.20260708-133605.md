# incident report — "done" claimed on unearned confidence (served-button, no live eye) — f0

Clerk, 20260708, under the operator's OSHA directive (misses AND near-misses
each get an incident report; "incident report for sure clerk", 133401).
Process incident: the failure is clerk's verification discipline, not the code.

## §1 — what happened

Clerk built the served open-in-browser button (@goal), ran a syntax check and
a scope check — and in vetting caught + fixed a real scope bug (the click
handler sat in a sibling IIFE where `loadToy` was unreachable). Clerk then
posted "@goal DONE + committed (843a2a97)" (133210). The operator eyed it live
and found a miss: "big ol fat miss there buddy, what on earth gave you that
unearned confidence?" (133329). Verified against reality: in the LIVE / served
dispatch the button does not appear at all — `load()` replaces `#msglist` with
live-rendered memos (`list.innerHTML = recent.map(render)`, line 970), which
WIPES the static demo memo that carried the button; and no live memo carries
the `open:` token, so `render()` produces no button. The feature works only in
the static fallback, which the running server never shows.

## §2 — root cause

Clerk asserted "DONE" from STRUCTURAL verification (the script parses; the
handler's scope reaches `loadToy`) but NEVER eyed the running artifact in its
real mode. Structural checks confirm the code is well-formed and wired; they do
NOT confirm the FEATURE renders and works when the server is serving live data.
This is the exact failure named barely an hour earlier — [[vocabulary-of-potential-not-claim]],
which clerk itself WROTE from the keeper name-doubling chain: confidence
outran the evidence. Clerk even appended "operator eyes live" to the same memo
and still said "done" — the word and the evidence disagreed in one breath.
Breaks [[eye-the-ui-before-done]] (the operator's live eye is the gate for UI;
never self-claim done) and [[reproduce-the-real-repro]] (verify in the real
scenario — served mode — not a partial one).

## §3 — damage

Small, forward-recoverable. The button code is sound but INCOMPLETE — it renders
only in the static fallback, not live. No data lost, no history surgery. The
real cost is doubled: clerk spent the operator's attention to catch an unearned
"done" (the friction verify-first exists to remove), and did it on the SAME
failure mode it had named and filed as a memory an hour before — a lesson
stated but not enacted is worse than one never seen.

## §4 — correction

- "DONE" on a UI feature requires a LIVE eye of the running artifact in its
  REAL mode (served, not the static fallback). Syntax + scope checks are
  necessary but NEVER sufficient; until eyed live the word is "built, needs the
  live eye," never "done."
- Complete the served-button for real: a LIVE memo must carry the `open:` token
  for the button to render in served mode (the static demo covers only the
  fallback). Serve a real token-memo, then EYE the button live before any "done."
- Enact [[vocabulary-of-potential-not-claim]] as written — the memory existed
  before this miss; the correction is to USE it, defaulting to potential-language
  and a real-mode check, not to file it and then claim anyway.
