# incident report — the dispatch full-page auto-reload wiped the operator's in-progress paperwork — f0

Clerk, 20260711, OSHA standing directive; cord was pulled (full-floor halt) by
the operator, reason "dispatch refreshed killed paperwork I was working on."
Process + design incident: a real destructive mechanism (full-page reload),
triggered by clerk's commit cadence. The FIX is deliberately NOT in this report
— the operator's directive is report first, then discuss the fix as a group,
not implement one (no spot fix).

## §1 — what happened

While clerk was rapidly iterating the harness modules (many small commits in a
tuning loop with the operator), the operator was writing text in the dispatch
paperwork. The dispatch's live-reload — a poller that calls a full-page
`location.reload()` whenever the served file's Last-Modified changes — fired
because a clerk commit changed `dispatch-frame-mock.html` on disk. The reload
destroyed all transient page state, including the paperwork text the operator
was mid-composing. The text lived only in the browser (never saved), so it is
unrecoverable. The operator pulled the cord.

## §2 — root cause

**The reload MECHANISM is the fault, not a missing guard.** The dispatch keeps
itself "never stale" with `(function liveReload(){…})` (`dispatch-frame-mock.html`
~L652-671): every 3s it HEAD-polls its own URL and, on a changed Last-Modified,
calls `location.reload()`. A full-page reload is a sledgehammer — it wipes
EVERY piece of transient UI state: the composer, paperwork drafts, scroll
position, which message is open, everything.

The one guard (L663-666) is far too narrow:
```
const a = document.activeElement;
if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA')) return;  // hold while typing
location.reload();
```
- It holds ONLY for a focused `INPUT`/`TEXTAREA`. The dispatch's editable
  paperwork surfaces are `contenteditable` `[data-edit]` elements (made editable
  at ~L707), which are NEITHER — so the guard never fires for them.
- Even for a covered field, it checks `document.activeElement` at the poll tick
  only — text typed but not focused-at-that-instant (clicked away, focus moved)
  is unprotected.
Either gap loses work.

**The deeper design fault:** live *content* already flows per-section WITHOUT any
full reload — the chat re-renders its own list (~4s), seat cards poll /presence,
approvals and the tracker poll, each touching only its own DOM. So the full-page
reload exists for exactly ONE thing: picking up a new *build* of the dispatch
code (i.e. clerk shipping edits). That is a dev-time convenience that was allowed
to destroy runtime work. Freshness of DATA never required nuking the page;
freshness of CODE was implemented with the bluntest possible tool.

**Compounding:** clerk's rapid commit cadence during the module tuning made the
reload fire often, turning a latent hazard into a live one. [[operator-watches-live]]
(commit-after-every-change) collided with a page that reloads on every commit.

## §3 — damage

The operator lost in-progress paperwork text — unrecoverable (browser-only, never
persisted). The floor was halted. Real cost beyond the text: trust — a "never
stale" convenience took the operator's own work, which is the opposite of what an
instrument should do (the harness's own doctrine: instruments point at loads,
never harm the worker). No data/history loss on disk; forward-recoverable at the
mechanism level.

## §4 — correction (DECISION DEFERRED — group discussion, per the operator)

The operator was explicit: **do NOT spot-fix this** (guarding the reload or
stashing drafts patches the symptom of a mechanism that shouldn't swing). The
fix is to be DISCUSSED and SETTLED by the group before anyone implements — clerk
has one proposal, lantern has another; weigh them side by side. [[dont-build-on-unsettled-ground]]-style: propose · discuss · settle · then build.

Candidate approaches on the table (NOT chosen here):
- **clerk:** kill the auto full-reload entirely; replace with a passive "new build
  ready ▸ refresh" signal the operator clicks when HE is ready (human picks the
  moment → can never fire mid-work). Then move panes toward independent
  self-refreshing components (the toy-browser already does exactly this) — which
  is also the harness "console" architecture we're heading toward.
- **lantern:** (his idea — to be brought to the discussion).

**Interim, to stop the bleeding without a spot fix:** clerk pauses any commit that
changes `dispatch-frame-mock.html` (the only file that triggers the reload) until
the mechanism is settled and fixed. Report/board/module-file work is unaffected
(different files → no dispatch reload). The discussion + settled fix is the next
step; this report is the record that opens it.
