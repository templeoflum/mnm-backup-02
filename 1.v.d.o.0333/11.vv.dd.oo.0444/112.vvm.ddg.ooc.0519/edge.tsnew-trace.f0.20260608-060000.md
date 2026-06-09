# Edge — tsnew-trace — f0 — 20260608-060000

Where the edges are. The first build traced against its origins — where things arrive smooth, where they arrive rough, where new curves graft in at the seam.

Sources: 111/FINDINGS_ternary_TS.md, 101/sketch.tsnew-trace.f0, 102/float.ts-sc-toys.f3, 210/frame.tsnew-trace.f0, 211/tsnew-trace.html

---

## continuous

- the three subsystems (composition, cascade, proportion) arrived in code exactly as the sketch named them, names intact. `buildRaw()` is `buildRaw()`.
- the 5×5 SE(4) matrix, left-multiplication, seed `[D,0,0,0,1]`, self-scaling displacement `d = k × (k+1)^(C-1) × D` — all present in code as specified in sketch and keystone.
- both schedules (SCHED_4D 6-plane, SCHED_3D 3-plane) match the sketch's two-schedule minimum.
- all 7 settled decisions from 102 landed: one buildRaw always 5×5, both schedules, legacy toggle, trail configurable default off, oscillation included, proper orbit camera, fixed viewport + manual zoom.
- definition of done from the frame at 210 reads as a checklist of things the build does. depth 1-19, camera orbits drag/zooms scroll, trail toggle, oscillation toggle, composed/legacy toggle, single HTML no server, settled vocabulary.
- vocabulary table from the frame (depth not level, trace not beam, proportional not self-scale) — settled vocabulary throughout.
- dependency chain held: nothing pulled forward from downstream toys. no measurement, no formula comparison, no 4D projection beyond orthographic w-drop. scope, formulas, projection, caliper — all absent as specified.
- the reciprocal ternary from FINDINGS (TS scales outward ×3 per cycle, address resolves inward ÷3 per digit) is alive in the running code at k=2.

---

## breaks

- `_chain[]` — sketch said "build the chain showing the point after each step, for the skeleton overlay later — not drawn in the trace toy, but the data structure should exist." the build does not build `_chain`. the pieces don't touch here — the data structure the sketch called for is absent, deferred until the overlay toy needs it.
- per-depth rate override — sketch listed it as a control ("per-depth rate: override cascade at one depth, 0–10×"). frame at 210 listed it too. the build has neither the control nor the mechanism. the sketch's cascade included `depthMult(d)` as a per-depth override array defaulting to 1.0; the build simplified to `rateFor(level) = Math.pow(1/ratio, level)`. mechanism and control dropped together.
- auto-fit with COM centering — not in the sketch or frame. emerged during the build. the sketch said "fixed viewport + manual zoom" and decision 102 confirmed it, but the form's extent varies too wildly for pure manual zoom. the sketch saw this tension: "auto-fit means measuring the extent, which is scope's job." the build grafted in a middle ground — not full scope measurement, just enough tracking to keep the form visible. new curve at the seam, forced by contact with the real problem.

---

## reading

the thread from research through sketch through decision through frame through build is smooth. the build is what the sketch described. the two dropped items (_chain, per-depth rate) are roughness — small discontinuities where the build simplified past what the sketch specified. the COM/auto-fit addition is a graft — a new piece that emerged at the seam between plan and reality, solving a problem the sketch anticipated but deferred. the FINDINGS' structural warning — angular/rotational structure is provably unaddressable — is honored: the trace toy stays in the radial/scaling half. the TS_BRIEF's risk warning — don't oversell — is honored by the toy's nature: it makes no claims. it draws a dot.

[float]

---
