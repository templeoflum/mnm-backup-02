# frame — reorg: src/dev/docs project layout (kit becomes the standard)

home: `kit` (project frame, co-located) · mode: builder window · status: **IN PROGRESS — paperwork sorted into `docs/` (13 of 14; this frame stays at root as the live control doc, moves last). Remaining: 22 `.js` → `src/` + the 3 reference edits.** · from the intake this session · sibling of [[frame.unify.f0]]

Tidy kit's own folder into the standard shape every future project inherits. This is the *organizing* pass only — moving files into bins. No *reducing* (purge / rename-system / fold-cleanup) — that's the cycle-close, after TS.

## the target layout

```
kit/
  .unit          ← unit marker (must stay at root — it marks the folder)
  index.html     ← the launcher (stays outside for a clean launch)
  README.md      ← what it is + how to run
  src/           ← everything the app runs (the 22 modules)
  dev/           ← the dev environment (rig, shots) — already exists
  docs/          ← the project's paperwork (frames, pins, incidents, bug)
```

## why it's safe (the intake findings)

- **The import graph is flat siblings** — every module imports `./x.js`. Moving all 22 `.js` *together* into `src/` preserves every inter-module import unchanged (siblings stay siblings). Nothing internal rewires.
- **`.unit` makes kit opaque to the lattice** — "witness skips everything below here"; the manifest books it once. So this reorg is **invisible to the lattice/addressing** — no manifest update, no three-point dance. `src`/`dev`/`docs` are plain dev folders, NOT lattice addresses.
- So the whole move touches exactly **three reference sites** (below).

## the moves (git mv — preserve the file-by-file trail)

| → `src/` (22 `.js`) | main, workbench, button, toggle, selector, field, readout, meter, slider, disclosure, pad, layout, binding, scrub, scope, menu, smartparam, ratio, ratio-system, clock, clock.proof, unit-circle |
|---|---|
| → `docs/` (14 `.md`) | frame.unify, frame.readouts f0–f3, frame.heartdrive, frame.ratio-system f0–f1, pin.radial-param, incident.scope-focus-miss, incident.scrub-dead-drag, audit.kit-rig, **bug.pool** (moves out of `dev/`) — *all 13 moved this step* — **+ this frame** (moves last) |
| stay at root (3) | `index.html`, `.unit`, `README.md` |
| `dev/` keeps | `verify.mjs`, `shots/`, `.gitignore` |

## the three reference edits (what keeps it running)

| site | now | after |
|---|---|---|
| `index.html:114` | `<script type="module" src="./main.js">` | `./src/main.js` |
| `index.html:119-121` | live-reload file list | prefix each entry `src/` |
| `verify.mjs:512` | `await import('/ratio.js')` | `/src/ratio.js` |

## build sequence (chunk × slice × rung)

1. **make folders** — `src/`, `docs/` (`dev/` exists).
2. **move modules** — `git mv` the 22 `.js` → `src/`.
3. **move paperwork** — `git mv` the 12 `.md` → `docs/` (incl. `bug.pool` from `dev/` and this frame).
4. **edit the 3 reference sites** — re-path so the page + rig resolve.
5. **run the rig** — `node dev/verify.mjs`, expect 33/33. This is the **gross-breakage / regression net**: a bad move 404s a module and checks fall over. It is NOT a correctness claim and NOT the proceed-gate.
6. **operator eyes** — open `index.html`, confirm it loads + works. **This is the proceed-gate.**
7. **commit** — one reorg commit (moves + edits together; no broken intermediate state on the floor).

## the standard this sets

`.unit` + `index.html` + `README.md` at root; `src/` (code) · `dev/` (equipment) · `docs/` (paperwork). This becomes the project-foundation template every future project inherits. Internal folders are plain dev names because the unit is opaque to the lattice — addressing stops at the `.unit` boundary. (Capture as a foundation template later, once a second project confirms the shape — don't lock it on one instance.)

## deferred / NOT this pass (cycle-close reduce work)

- **3 possibly-dead modules** — `meter.js`, `layout.js`, `disclosure.js` are in no import. Verify dead-or-future before any purge.
- **the live-reload list is already stale** — lists `meter` (unused), omits `slider`/`layout`/`disclosure`. This pass only re-paths the existing entries; the correctness fix waits.
- **README stale** — "Scaffold only" (long past); points to `frame.kit.f0` / `frame.unit-marker.f0` "at 210" (pre-co-location).
- **fold cleanup** — readouts f0–f3, ratio-system f0–f1 unconsolidated.
- **prune the 6 presence rig-checks** ([[audit.kit-rig.f0]]).

## laws (carried)

git mv preserves the trail, never overwrite · the unit is opaque — addressing stops at `.unit`, internal folders are plain · buildless, no deps ([[buildless-unit-default]]) · direct manipulation ([[operator-builds-by-hand]]) · settle before build ([[log.scope-overbuild]]) · **the rig is a regression / gross-breakage net, NOT a proceed-gate — green ≠ correct; the proceed-gate is operator eyes + real use** ([[checks-are-a-net-not-a-gate]], [[audit.kit-rig.f0]]).
