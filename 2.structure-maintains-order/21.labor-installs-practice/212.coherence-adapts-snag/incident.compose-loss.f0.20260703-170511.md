# incident report — compose loss (the reload ate the operator's draft) — f0

Clerk, 20260703, on the operator's word ("we need to write an incident
report on it before anything resumes, with an RCA"). The operator pulled the
E-stop over it — the cord's first use for a genuine near-miss, and the
report gates the resume, as it should.

## §1 — what happened

The operator was typing a message in the dispatch view. The lattice page
reloaded under him and the draft was destroyed — unsaved input text lives
only in browser memory, and a reload clears it. Unrecoverable; one message
lost, length unknown.

## §2 — timeline

1. ~16:52–16:58 — operator working in dispatch, chat panes + compose live
   (the compose-always-focused change had just landed, inviting exactly this
   kind of in-flight typing).
2. Same window — clerk made FOUR live edits to `lattice.f2.html` (focus
   behavior 11:52 local, drag-reveal 11:57, two fast-poll edits ~12:02,
   the last two uncommitted at the time of the pull).
3. Each save changed the file's mtime. The client's hot-reload watcher
   (lattice.f2.html:4067 — HEAD poll every 1.5s, `location.reload()` on a
   Last-Modified change) fired within 1.5s of a save.
4. A reload landed while the operator's draft sat unposted in the input.
   Text gone. Operator pulled the E-stop; the wall caught clerk mid-tool
   (arming the replacement watcher); floor froze clean.

## §3 — root cause

**Two mechanisms colliding, both working as designed:**

1. **Hot-reload reloads on every file save** — built for the operator's own
   dev cycle (edit → see it), it makes every clerk edit to the live client
   an instant forced refresh of the operator's open tab. The file you edit
   is the file that runs — the buildless virtue, showing its sharp edge.
2. **Compose drafts had no persistence** — input state lived in browser
   memory only, so ANY reload (hot-reload, manual, crash) destroys whatever
   is mid-type.

Root: **unprotected volatile state on a surface that reloads by design.**
The trigger (clerk editing during active operator use) is a contributing
practice failure, not the root — even without clerk's edits, a manual
refresh or crash would eat a draft the same way.

## §4 — contributing factors

- Clerk edited the live client file repeatedly while the operator was
  actively working in it, without announcing — no floor-hold practice for
  the client file the way there is for harness surgery.
- The compose-always-focused upgrade (same hour) increased time-with-draft
  exactly when edit frequency peaked.
- Latency work made the edits bursty: several small saves, each its own
  reload.

## §5 — fixes

- **F1 (structural, lands with this report): drafts persist.** Every compose
  input (dispatch bar, memos box) saves to localStorage on each keystroke,
  keyed per channel; restored on load; cleared only on successful post. A
  reload — any reload — hands the draft back.
- **F2 (practice, standing from now): the client file gets floor-hold
  manners.** While the operator is live in the lattice, clerk batches client
  edits and announces in-thread before saving, so a reload never lands
  unseen. One save per batch, not per thought.
- **F3 (noted, not built): gentler hot-reload** — e.g. defer reload while an
  input has text. Deferred: F1 removes the harm; deferring reloads risks
  stale-surface confusion, and the fresh page is usually wanted.

## §6 — the cord's first real pull

The E-stop was pulled for a genuine near-miss and the system behaved to
spec: full freeze mid-tool, clean state at the wall, work resumed only on
the operator's clear + word, report before resume. Andon culture held —
the pull was cheap, answered, and thanked.
