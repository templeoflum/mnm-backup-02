# list — the regression list (tsr cycle 2, chunk 0.4)
**f0 · every behavior recorded by play, as a named check. this list runs after every install in chunks 1–2; an install that breaks a listed behavior does not sign. method noted per check; canvas-hash = before/after pixel comparison on the main canvas; state-grab = freeze → read state block → resume.**

## R-F · formulas (0.0)
- R-F1: formulaSel switches cleanly among all five; console stays clean. (state-grab per formula)
- R-F2: each formula's frozen signature triple remains distinct — staged@L0 [0,0,1] · freed [0.9939, 0.6648, …] · torus [0.8348, 0.0074, 0.3636] · epicyclic [0.9901, 0.0392, 0.3292]. (state-grab)
- R-F3: freed reads extent 160×160×160, |COM| 0 · torus reads hole 0.364, FA 0.7071… ± 4e-16 · lissajous@defaults reads prolate FA 1.00. (state-grab)
- R-F4: staged@L0 is a point seed at |COM| 80, extent 0×0×0. (state-grab)

## R-S · staged machinery (0.1)
- R-S1: levels advance via the scrub API (__apply) and the readout obeys cycle = ⌊level/2⌋ (1·c0, 2·c1, 4·c2). (toolbar read)
- R-S2: at level 4 the form is grown (extent ≈ 478×160×157 at k=2 defaults) and closure's verdict reads "filling" (not "CLOSED"). (state-grab)
- R-S3: kHole couples three readouts at once — declared hole limit (k−1)/(k+1) (k=2→0.333, k=3→0.500), displace ratio (2.00×→3.00×), symmetry digit (2→3). (state-grab at two k)
- R-S4: the measured hole prints BESIDE its k→ asymptote, never conflated. (state-grab)
- R-S5: every scrub exposes __key/__read/__apply and round-trips (apply 0.8 → read 0.8). (api probe)

## R-P · projection & beams (0.2)
- R-P1: viewX/Y/Z snap and re-render. (canvas-hash)
- R-P2: w-spin toggles a visible 4-D tumble; view4.wx/wy/wz apply; persp-w re-renders; stereoR applies. (canvas-hash + api)
- R-P3: p2Mode ∈ {mirror, antipodal, polar} — each visibly distinct from the last; values read from the options, never assumed. (canvas-hash)
- R-P4: p2Rel=independent unhooks beam 2 onto its own engine; b2rad/b2disp re-render. (canvas-hash)
- R-P5: oscillation (amp/blend) and p1lag visibly alter the trace. (canvas-hash)

## R-M · measure stage (0.3)
- R-M1: the state block renders complete when frozen — all rows from extent through net rot; freeze/resume round-trips. (state-grab)
- R-M2: caliper selects switch live (targets origin/COM/±maj/±mid/±min · rulers cartesian/polar/logpolar/spherical · modes 2/3-point); grid XY + grid-loc rows always visible. (read)
- R-M3: ● log appends a row (has-log class appears) · ⎘ copy serializes the log to clipboard JSON · ⤓ export downloads it · ↻ recall RESTORES every input from clipboard JSON. (api/source-verified; deep recall round-trip exercised at install 1.2)
- R-M4: the rotation/symmetry/signal panels populate frozen (φ, symmetry digits, signature ± lines). (state-grab)

## declared not-played (the list's refusal — these are unguarded until played)
strobe/timebase/cpf textures · gridPlane screen-vs-XY · grid overlay checkboxes beyond axes/refSph (those two verified in cycle 1 chunk 0) · canvas point-picking (synthetic-pointer rig limit) · selfChk behavior · save-image. an install touching these plays them FIRST.
