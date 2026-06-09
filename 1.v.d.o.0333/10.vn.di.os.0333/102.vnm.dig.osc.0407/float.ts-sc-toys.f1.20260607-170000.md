# float — ts & sc toy decisions — f1 — 20260607-170000

sorted from f0 answers. settled = no further discussion needed. unsettled = needs talking through.

---

## settled (20)

**1. 3D camera** — proper camera (yaw/pitch/distance). [accepted leaning]

**2. canvas scaling** — fixed viewport + manual zoom. [confirmed]

**3. trail persistence** — configurable, default OFF. afterglow was rarely used in practice. cpf, sample rate, and timebase were more interesting to play with. [overrides leaning — default was long trail, user says no trail by default]

**4. oscillation** — include in trace toy. [accepted leaning]

**5. legacy displacement** — include as comparison toggle. [accepted leaning]

**9. trail on formula switch** — clear canvas. [accepted leaning]

**10. 4D projection in formulas toy** — orthographic only, fixed w-angles. [accepted leaning]

**11. default view slots** — 2 default, up to 4. [accepted leaning]

**12. slot layout** — horizontal for 2, grid for 4, responsive. [accepted leaning]

**14. n-dimensional UI** — no UI until a formula exists. [accepted leaning]

**18. dual trace in caliper** — include here, not defer. [accepted leaning]

**22. performance at depth 15+** — flag it, handle during implementation. [accepted leaning]

**23. dual-trace system split** — correct as proposed (composition/caliper/assembly). [accepted leaning]

**24. join visual** — circles, yellow when dragged. [accepted leaning]

**26. playhead** — defer to assembly. [accepted leaning]

**27. source picker max** — cap at 9 in single mode. [accepted leaning]

**28. decompose drawLadder** — yes, break into focused passes. [accepted leaning]

**29. hot indicator extension** — yes, red border on channel monitor. [accepted leaning]

**30. collapsible channel groups** — no, keep flat. [accepted leaning]

**31. educational text** — inline. [accepted leaning]

---

## unsettled (11)

**6. sampling trigger** — user wants manual, not auto. freeze/hold from the source material is a feature to carry forward. "sample a range and freeze" — capture a range of data, do something with it. live data isn't helpful unless it's static. this rethinks the measurement model: not "always measuring" but "measure when asked, then hold." needs discussion on what "sample a range" means mechanically.

**7. snapshot format** — user wants to rework entirely. the original was built for a chat thread. now we want: headless options, programmatic generation, snapshots stored and accessible, reloadable settings. this is bigger than text-vs-JSON — it's a data pipeline question.

**8. time-varying measurement** — user wants both instantaneous and time-averaged, with resolution/depth control. unsure on specifics. the question is whether both views give genuinely different information. needs discussion on what "resolution depth control" means and whether the two modes produce meaningfully different readings.

**13. linked cameras** — user unsure. the purpose is comparison, so maybe 4D angles should link too? "not sure I understand it though." needs explanation of what linking 4D angles means vs keeping them independent, and what each gives you for comparison.

**15. feature snap distance** — user says "this is a precision instrument, we want to be precise." disagrees with generous 20px snapping but doesn't specify what instead. needs discussion: tight snapping (small radius)? pixel-exact clicking? snap with precision indicator?

**16. warp** — fixed for now, but the concept is reframed. user says the warp isn't the ruler's character — it's a tool for measuring distortion from a baseline. adjustable eventually. partially settled (fixed now) but the conceptual framing changes what "adjustable" would mean later.

**17. meeting threshold** — user doesn't understand this one. "what about different modes? do we lose anything by not having them?" needs explanation of what the meeting threshold does, what fixed vs scaled means practically, and whether multiple modes add anything.

**19. deep-depth UX** — explicitly deferred to implementation. user needs to play with the toys, record data and screenshots, and work through it hands-on. not unsettled conceptually — just can't be answered without the toys running.

**20. overlay draw order** — user unsure. "is this something we make an option?" needs discussion: does the user ever want measurement behind structure? or is fixed order always correct?

**21. overlays across views** — user wants caliper measurements to work across views. "you place it in the primary view but you get measurements from it in all views." the comparison thesis: same measurement, different projections. needs discussion on how cross-view measurement would work mechanically.

**25. periodic nature** — user agrees no two copies for display, but questions whether the curve should be periodic at all. "that was done so the audio would loop cleanly while I played with it, is that right? is that what we want this to do?" needs to look at it from more angles. the periodicity itself is in question, not just the display.

---
