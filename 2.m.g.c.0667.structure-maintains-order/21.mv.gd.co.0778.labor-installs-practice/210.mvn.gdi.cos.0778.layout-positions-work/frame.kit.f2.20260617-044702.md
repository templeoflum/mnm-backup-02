# frame — kit (the UI library) — f2 — feel first, the R&D bench

address: 210 (layout·positions·work) · mode: builder window · status: **BUILDING — bench up, hand-tuning the feel** · scope: `kit` (211/kit) · folds from [[frame.kit.f1]]

f1 set the two halves (engine + controls) and an engine-first path. f2 **flips the priority** (operator) and sharpens the suite's purpose.

## the flip (operator, settled)

- **feel is first; the loop engine is least priority.** Getting *parameter manipulation* right — how it feels in the hand — comes before any of the phase/resolver math. `phase.js` stands built but parked.
- **the suite is a UI R&D bench, not a component showcase.** Its job: let the operator **hand-tune the feel by feel**, and **play with placement** — live, in-browser, *no code round-trips*. "This isn't something we can go back and forth on to dial in" — so the tuning must be in his hands, not mine.

## the move: expose the parameters of the parameters

Every constant that shaped the scrub's feel was hidden in the code (the round-trip trap). f2 lifts them into a live **`Feel`** object — `sensitivity · precisionDiv · logBase · ctrlMult · ctrlShiftMult · depthBase` — read by reference at event time. A shared `Feel` retunes many scrubs at once. The bench puts **knobs on the Feel** (controls tuning a control) against wide **subjects** you sweep; change a knob, feel it on the next drag tick.

Needs both ends of range at once: **fine high-precision AND massive sweeps.** That lives in `sensitivity` + the `precisionDiv` curve (vertical-drag precision) + log mode. Restored the full **Ctrl/Shift/Alt arrow-depth tiers** (8 tiers × `depthBase`) — the resolution-snapping depth the operator called "super handy" (I'd over-simplified it to Shift×10).

## built this fold (211/kit)

- `scrub.js` — `Feel` object + live constants; `createScrub` returns `feel`; depth tiers restored.
- `main.js` — the bench: 2 wide subjects (linear ±1e9, log 1e-6..1e9) sharing one live `Feel`; 6 feel knobs that mutate it live; **draggable panels** (drag a header to place it anywhere).
- `index.html` — panel/bench styling.
- still: no tooltips, vocab-neutral, buildless, tsc-strict clean.

## open / next (operator drives)

- **the drag MODEL itself.** Current model = horizontal value + vertical precision (an XY-pad). Operator: "nice but not fluid." f2 exposes the *constants* of this model to tune first; if the ceiling is the model (not its numbers), the next lever is **alternative drag models** (e.g. velocity/acceleration mapping, dead-zone, pure-horizontal+modifier-precision) — try them as swappable feels.
- **placement play depth** — basic float-drag is in; a real layout mode (snap, save arrangements) is further out.
- **save a dialed-in feel** — once a good feel is found, persist it (the `Feel` object is plain data — trivial to serialize).
- the loop engine (`phase.js`) resumes only after the feel settles.

## laws (carried)

feel before math · expose the knobs, don't round-trip · one atom = one job ([[one-atom-one-job]]) · buildless, no deps ([[buildless-unit-default]]) · vocab-neutral core · no tooltips (settle the surface post-R&D) · a question halts ([[questions-halt]]).
