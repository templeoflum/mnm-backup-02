# float — ts & sc toy decisions — f2 — 20260607-170000

the 11 unsettled from f1, with operator observations folded in. same format — answer line, blank = accept the new leaning.

---

**6. scope measurement model**
your instinct: manual, not auto. freeze/hold. "sample a range."
my read: the current instrument already works this way — measure once, hold until next measure. what you're describing is: **measure on demand, hold the numbers, animate freely between measurements.** the capture button is the primary action, not a special mode. live updating readouts replaced by frozen snapshots you choose when to take.
new leaning: measure on demand + hold. the "range" part = how many cycles to sample over (ties into #8).
answer:

**7. snapshot pipeline**
your instinct: rework for headless/programmatic use. store, reload, process.
my read: two kinds of snapshot — **settings** (all parameters as JSON, reloadable) and **data** (measurements as JSON, comparable across snapshots). both written to files at an address. headless generation (run without browser) is a bigger ask — defer to after the toys exist.
new leaning: JSON settings (reloadable) + JSON data (processable), saved as files. headless deferred.
answer:

**8. time-varying measurement**
your instinct: both instantaneous and averaged, with resolution control.
my read: instantaneous = sample right now, numbers depend on when you measure (the form breathes). averaged = sample across N cycles, breathing washes out, you get the mean shape. the DIFFERENCE between them = the breathing amplitude, which is itself a measurement. "resolution depth" = how many cycles to average over.
new leaning: two modes — **snapshot** (one sample, instantaneous) and **survey** (averaged over N cycles, N configurable). both give genuinely different info. the breathing amplitude is a third derived measurement.
answer:

**9. (was 13) linked cameras**
you said: "not sure I understand it."
explanation: each view has two layers of viewing — 3D camera (rotating the sculpture) and 4D angles (choosing which cross-section of 4D to show). linking options:
- link 3D only: same physical viewpoint, different 4D slices → compare cross-sections
- link 4D only: same slice, different viewpoints → compare angles on the same slice
- link both: identical views, useless
- link neither: fully independent
new leaning: **two separate toggles** — "link 3D cameras" and "link 4D angles." gives you all combinations. most useful: linked 3D + independent 4D (compare cross-sections from the same viewpoint).
answer: still not sure i undertand this one, the point isnt to have indopepent camera views yet, the point is to have the exact same camera view of diferetn formuals so you can compaore them, the camea are asuppsoed to be linked across every vie exactly mabye there sconfusion here

**10. (was 15) feature snap — precision**
you said: "precision instrument, want to be precise."
three options:
a) **tight snap** (5-8px): must click close to the feature. precise but fiddly.
b) **generous detection + explicit indicator**: wide detection radius, but the feature you'll snap to is highlighted before you click. forgiveness in clicking, precision in what gets selected.
c) **crosshair mode**: no snapping. click anywhere, measure from that exact point. features are reference markers only.
new leaning: option (b) — generous detection, explicit highlight. you see exactly what you'll measure before committing. the precision is in the feedback, not the click radius.
answer: my leaning is all 3 + snap threhold or reolsution or something

**11. (was 16) warp reframe**
you said: "not the ruler's character — a tool for measuring distortion from a baseline."
my read: agreed on the reframe. fixed for now (settled). the conceptual shift: warp = observation distortion, not ruler identity. when adjustable later, it means "change the observation grid resolution and see how distortion changes."
new leaning: **fixed for now. log the reframe. adjustable = observation resolution control, not ruler configuration.** nothing changes for the toy build.
answer:

**12. (was 17) meeting threshold**
you asked: "what about different modes?"
explanation: the threshold = how close two traces need to be to count as "meeting." fixed threshold (say 0.05 units) doesn't adapt to form size — too tight at large forms, too wide at small forms. scaled threshold (fraction of rmax) adapts automatically.
having both: fixed detects absolute proximity (two forms nearly touch in space). scaled detects relative proximity (two forms are proportionally close). different info in edge cases.
new leaning: **scaled as default, fixed available as option.** lose nothing by having both.
answer:

**13. (was 19) deep-depth UX**
you said: play with it in the toys, record data and screenshots, work through it hands-on.
new leaning: **deferred to implementation.** no decision needed now. the toys will surface the answer.
answer:

**14. (was 20) overlay draw order**
you asked: "make it an option?"
my read: reordering adds UI complexity for a rare need. counter-proposal: **fixed order, but each overlay is individually togglable.** if caliper lines obscure the reference shape, turn off the caliper — don't reorder layers. the overlay groups already support individual toggles.
new leaning: fixed order + individual toggles.
answer:

**15. (was 21) cross-view caliper**
you said: "place it in primary, get measurements in all views."
my read: this works mechanically. the caliper selects features in 3D/4D world space (not screen space). each view projects the same features through its own camera. the measurement value is identical across views (it's a world-space distance). the drawn line looks different in each view because the projection is different. same measurement, different visual.
new leaning: **caliper features stored in world space. drawn in all views. measurement is view-independent, visualization is view-dependent.**
answer:

**16. (was 25) periodic nature**
you asked: "was that just for audio looping? is that what we want?"
my read: periodicity serves two things — clean audio looping AND the continuity thesis (the loop seam is itself a join that obeys the same continuity order). without periodicity: endpoints have boundary effects, no looping, the instrument changes character. with periodicity: every point is interior, clean looping, the seam demonstrates continuity.
new leaning: **periodic as default, non-periodic as an option.** periodic is the cleaner demonstration. non-periodic adds boundary behavior as a second thing to study. audio loops in periodic, plays once in non-periodic.
answer:

---

## how to use this

same as f0 — fill in answer, blank = accept new leaning, "discuss" if still unclear.

---
