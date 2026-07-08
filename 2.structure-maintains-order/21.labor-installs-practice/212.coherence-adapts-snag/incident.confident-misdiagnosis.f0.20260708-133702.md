# incident report — confident misdiagnosis of a self-inflicted bug as a server bug — f0

Keeper, 20260708, under the operator's standing directive ("misses get an
incident report... NEAR MISSES also get one"). Keeper's own miss, filed at the
operator's direction alongside clerk's same-class miss the same hour. Process
incident: the failure is keeper's confidence discipline, not any tool.

## §1 — what happened

The operator flagged that keeper's board memos rendered the seat name twice
("| keeper | keeper ..."). Keeper investigated: read the raw `comms/board.md`
(saw the stored body began "keeper ...") and read `board.py`'s `post()` (saw it
sends handle and body as SEPARATE fields to the dispatch server). From that
partial evidence keeper asserted, on the board and with confidence — *"the
double isn't me typing it; the dispatch server prepends the handle to the body
on store; every seat's memo doubles; this very memo will prove it"* — and
routed the "fix" to the server (clerk's tooling). Clerk pushed back with the
decisive check keeper had skipped: clerk's own memos read UNdoubled in the same
file, from the same server — so the server cannot be prepending. The real cause
was keeper's own invocation: `board.py post` takes the handle from
`GIT_AUTHOR_NAME` and treats everything after `post` as the body; keeper was
passing "keeper" as an extra positional arg, which became the body's first word.
A self-inflicted call error, diagnosed as someone else's server bug.

## §2 — root cause

Confidence that outran the evidence. Keeper checked ONE consistent fact (the
code sends handle+body separately) and promoted a hypothesis ("the server
prepends") to a stated finding — "this memo will prove it" — without running the
disproving cross-check that settles it: *do OTHER seats double?* They did not,
which falsifies the server theory in one look. This is the exact class the
operator had coached keeper on the same session ([[vocabulary-of-potential-not-claim]],
[[hold-positions-provisionally]]): getting swept into the *feeling* of a clean
explanation rather than what IS. It also mis-routed the fix (blamed the shared
server instead of keeper's own hand), the same misattribution the incident's
deeper lesson warns against — confidence is earned by outside/adversarial
verification, never by a self-consistent story.

## §3 — damage

Small, fully recovered. A wrong diagnosis was posted confidently and a fix
mis-routed to clerk's server for a few minutes; the doubled names sat on the
board until the real one-line fix (drop the positional arg) landed, proven
UNdoubled against the raw file. No data lost, no history surgery. The real cost
was attention: clerk's, to run the check keeper skipped, and the operator's, to
name the confidence. The friction the whole model exists to remove.

## §4 — correction

- **Vocabulary of potential, not claim.** Mark a hypothesis AS a hypothesis
  ("might be / unverified"); reserve claim-words ("is / proves / confirmed") for
  what is actually cross-checked. Scale confidence to the verification done.
- **Run the disproving case before asserting.** Before blaming a shared
  component, run the one check that would FALSIFY the theory (here: do peers show
  the same symptom?). A self-consistent story is not verification.
- Correct invocation recorded so the mechanical error cannot recur:
  [[board-py-post-invocation]] (handle from `GIT_AUTHOR_NAME`, no positional).
- Filed under the standing miss/near-miss directive; the confidence lesson is
  now a written incident, not only a verbal owning — structural, so it holds.
