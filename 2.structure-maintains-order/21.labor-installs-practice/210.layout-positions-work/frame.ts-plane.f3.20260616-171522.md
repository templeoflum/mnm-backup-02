# frame — ts-plane — f3

address: 210 (layout·positions·work) · mode: builder window · status: **REFOCUSED — the static space (one atom, one job)** · scope: `plane` unit (project `ts`, at 211/ts) · folds from [[frame.ts-plane.f2]] · spine [[frame.ts-formula.f3]]

We over-packed (motion, rigidity, sphere-closure, projection all crammed into one file) and lost the thread. Refocus (operator, 20260616): **one atom = one job.** The plane is the unit's **static stage** — the space, with nothing moving on it.

## the plane's one job

**The smooth κ-morph.** Curvature swept continuously — hyperbolic (κ<0) ← euclidean (0) → spherical (κ>0) — each *clearly being what it is*, no snaps. Bounded disk, geodesic grid (Theorema Egregium): rings spread (κ<0) / square (0) / bunch toward the rim (κ>0), one formula through zero. That smooth transition IS the plane.

## what it holds (live, plane.js)

- **κ** — master curvature dial (the morph)
- **algebra** — Cayley–Klein, **derived from κ** (complex/dual/split): the unit "circle" |z|²=1 + null set. A face of the geometry-type, not a free axis.
- **chart** — cartesian/polar (method/gauge, free)
- **detent** — κ=0 landing
- **no transform** — z = the raw unit coord; the stage is static.

## the decomposition (atoms)

| atom | where | status |
|------|-------|--------|
| **plane = the space** | live `plane.js` | this — the smooth morph |
| **motion** (isometry/tilt) | the **MERGE** (unit riding the stage) | deferred; code in the backup |
| **rigidity spectrum** (affine/projective) | its **own atom** | deferred; code in the backup |

## the code-fold convention (this buildless stack)

Code can't fold by `fN` (the shell imports `./plane.js` literally; file-you-edit = file-that-runs). So: **the live file stays `plane.js`; versions are timestamped backup copies `plane.<UTC>.js`** kept accessible on the floor (not buried in git). The full packed version (motion + rigidity + closure + tilt) is at **`plane.20260616-165442.js`** — pull from there when building those atoms. tsconfig excludes `plane.*.js` backups + `diag.render.js` from the typecheck. (frames + logs still fold the normal `fN` way — this is only for running code.)

## open / what's left to explore (plane-only)

- **the sphere's closure, done SMOOTHLY** — showing the sphere is closed *within* the morph, not the snappy whole-canvas way (that version is in the backup). The honest unfinished edge of "show what the sphere IS."
- **smoothness audit** — confirm the morph has no snaps across the whole κ sweep (the backup's closure broke it; the static version should be clean — verify live).
- equipment: `diag.render.js` (CPU shader-port; sheets A curvature-morph, B chart×κ).

## out (named, deferred)

motion → the merge · rigidity → own atom · sphere-closure-machinery (snappy) → reintroduce smoothly or not at all · scheduling → [[frame.ts-schedule.f0]] · the frontier (∞-topos/condensed) → off the toy.

## laws (carried)

one atom = one job — don't pack · faithful before pretty · a question halts — reason, don't justify ([[questions-halt]]) · let the build expose ([[stay-lucid]]) · slow is the speed.
