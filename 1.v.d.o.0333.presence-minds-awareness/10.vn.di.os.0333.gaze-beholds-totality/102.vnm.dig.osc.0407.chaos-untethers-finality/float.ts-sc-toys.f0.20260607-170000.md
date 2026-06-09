# float — ts & sc toy decisions — 20260607-170000

all open decisions from the tsnew and splinenew toy sketches. each has a leaning — confirm, override, or leave blank to accept the leaning.

format: **question** / leaning / your answer

---

## tsnew-trace (the root toy)

**1. 3D camera for the trace toy?**
simple perspective (divide by z+offset) or proper camera (yaw/pitch/distance)?
leaning: proper camera — small code, lets you rotate the view.
answer:

**2. canvas scaling?**
auto-fit the form to the viewport, or fixed viewport with manual zoom?
leaning: fixed viewport + manual zoom scrub.
answer: fixed + manual

**3. trail persistence?**
infinite trail (never clears), rolling window (last N points), or configurable?
leaning: configurable — default long trail, option to cap.
answer: configruable, default no trail, afterglow was actually rarely sused in practice, cool feature to have but not ee non be deafult, the cpf and sample rate and time base weer more intersting to play with

**4. include oscillation?**
pendulum blend (nonlinear phase distortion) in the trace toy, or defer to later?
leaning: include — it's one if-statement, changes the trajectory character significantly.
answer: 

**5. include legacy displacement mode?**
the old non-proportional displacement rule, as a comparison toggle?
leaning: yes — shows what the proportional rule actually does by showing what happens without it.
answer:

---

## tsnew-scope (measurement)

**6. sampling trigger?**
auto-measure on every parameter change, or manual "measure" button?
leaning: auto on parameter change + separate "capture" button for high-res.
answer: i thin manual acutally, a sort of sample a range and just freee, live data isnt really very helpful unless its static so samplinga range for data could maybe be useful right like hold measure to capture adn range adn do somerhingh with thth data aotherwisre the way freeze and hold worked in the source matierl was def a feature to carry over want to make sure we dotn miss that

**7. snapshot format?**
plain text, JSON, or both?
leaning: both — display as text, export as JSON.
answer:this was built around being devleped ina chat threa, we can totalty re work this now, we praorbly want headless optoons, the idea is the snapshots are for you to process data and also to reload setting so we want them store d an accesible and prgomargticcly generable

**8. time-varying measurement?**
instantaneous values or time-averaged? (the form breathes — PCA ratios vary over time)
leaning: fixed-phase sampling (current behavior) — shape measurement, not dynamics.
answer: i think time average but with reosultio ndpth control maybe? im not sure on this one we might need to discuss it more becuase i think haveing some verison of both is proably right, its all about having the optio nto look at things diffrentyl here and how they rleate so if they give us genieouly differne views and angel we want them becuase it helps us relate thigns somehow or another so the goal is to determeine fi it can add new info or not

---

## tsnew-formulas (multiple generators)

**9. trail on formula switch?**
clear the canvas when switching formulas, or overlay?
leaning: clear. maybe a compare mode later in assembly.
answer:

**10. 4D projection in this toy?**
how basic? orthographic only with fixed w-angles, or include perspective?
leaning: orthographic only with fixed w-angles. full projection is its own toy.
answer:

---

## tsnew-projection (multi-view + nD stubs)

**11. default view slot count?**
how many canvases side by side at startup?
leaning: 2 default, up to 4.
answer:

**12. slot layout?**
horizontal split, vertical split, or 2×2 grid?
leaning: horizontal for 2, grid for 4. responsive to window shape.
answer:

**13. linked cameras?**
when two slots are linked, what syncs? just 3D camera, or 4D angles too?
leaning: linked = same yaw/pitch/zoom, independent 4D angles.
answer: this one im not sure on, the idea is comparsion so i feel like 4Ds shuold mybae be lniked too? not sure ii udnerstnad it though

**14. n-dimensional UI?**
any controls for the 5D+ stubs, or just code plug-points with no UI until needed?
leaning: no UI until a formula exists to exercise them.
answer:

---

## tsnew-caliper (feature measurement)

**15. feature snap distance?**
how close does a click need to be to snap to a feature?
leaning: generous (20px radius) with visual highlight of nearest feature.
answer: this is a precisson instrument so, we want oot be precisise

**16. warp configurable or hard-wired?**
should the per-ruler warp (how the grid distorts measurement) be user-configurable, or fixed per ruler type?
leaning: hard-wired — the warp IS the ruler's character.
answer: fixed for now, the idea is for it it tbe adjustble thoughotmeasure distortitions so its not the rulers characters its a characters of being able to measure distriton from a  baseline

**17. meeting threshold scaling?**
fixed threshold for trace meeting detection, or scale with form extent?
leaning: scaled — threshold = fraction of rmax.
answer: waht about diffent mods? do we lose anything by not having them and gain anytihng by having them? not sure i und estand this one

**18. dual trace in caliper toy or defer to assembly?**
the second trace + meeting analysis — build it here or wait for assembly?
leaning: include here — meeting analysis is a caliper measurement.
answer:

---

## tsnew-assembly (the full TS instrument)

**19. deep-depth UX?**
at depth > 10, rates are microscopic and the form is enormous. how to handle?
options: auto-adapt timebase / presets for deep depths / document the manual process
leaning: no clear lean yet. this is a real usability gap.
answer: gonna have to play with this one i nthe toys, this is where being abloe to record data for yo uto anyls will help, i can record thign sand say here this lookded good, and pair it with screenshots and you can go ah ya thats why 

**20. overlay draw order?**
fixed order (reference → extent → structural → shape → measurement) or z-sorting?
leaning: fixed order.
answer: not sure, again is this something we make an option?

**21. overlays in all views or primary only?**
when multi-view is active, do structural/measurement overlays draw in every slot?
leaning: all views, except caliper lines which are primary-only.
answer:i mean i geuss the idea is you eventaulyl measure diffent formauls so we somehow wan tthe calipers to work across views too right? you place it in the primary view but yo uet measuermetns from it in all views right? thta the comparison at work, weve gotta talk this one thorugh a bit

**22. performance at depth 15+?**
how to handle slowdown? reduce trail length / skip frames / LOD on overlays / don't over-design?
leaning: flag it, don't over-design. handle during implementation.
answer:

**23. dual-trace system split?**
dual trace lives in composition (engine), meeting analysis in caliper (measurement), two-trail visualization in assembly (rendering). correct split?
leaning: yes — each piece where it belongs functionally.
answer:

---

## splinenew-curve (the root toy)

**24. join visual?**
circles, yellow when dragged — same as current?
leaning: yes.
answer:

**25. periodic display?**
show the wrap explicitly (two copies of the curve) or keep implicit (t=0 at left, t=1 at right)?
leaning: keep implicit — two copies would be confusing.
answer: agreed two copoes is confusing, honestly thought worth revisinting the periodcoi nature of it, thatswas done so tha duio would loop cleanly whil i playe dwithit, is that right? is that what we want this to do? hard to say we gotta look at it fro mmore angles

---

## splinenew-ladder (derivative stack)

**26. playhead in ladder toy or defer?**
the sweeping playhead across all rows — include here or wait for assembly?
leaning: defer to assembly — playhead is presentation, not measurement.
answer:

---

## splinenew-routing (channels + audio)

**27. source picker max in single mode?**
single (global polynomial) is C-infinity so any order is meaningful. cap at 9? higher?
leaning: keep 9 — beyond that, polynomial coefficients get noisy.
answer:

---

## splinenew-assembly (the full spline instrument)

**28. decompose drawLadder?**
break the 160-line monolithic function into focused passes (drawGrid, drawBreaks, drawCurve, drawJoins, drawPrediction, drawInfluence, drawCombs)?
leaning: yes — clarity over brevity.
answer:

**29. extend "hot" indicator to channel monitor?**
when a channel reads a broken derivative, add a subtle red border to the whole monitor (not just the picker)?
leaning: yes.
answer:

**30. collapsible channel groups?**
make the 4 channel groups (transform, appearance, gates, sound) collapsible?
leaning: no — 13 channels is manageable flat.
answer:

**31. educational text inline or external?**
the mode-specific explanations — keep inline in the HTML, or load from external md files?
leaning: inline — ~30 lines, needs dynamic values, not worth external loading.
answer:

---

## how to use this

- fill in "answer:" with your decision — a word, a sentence, whatever feels right
- if the leaning is fine, just write "yes" or "agreed" or leave blank
- if you want something different, say what
- anything left blank = accept the leaning
- questions you want to discuss further, write "discuss" and we'll talk through it

---
