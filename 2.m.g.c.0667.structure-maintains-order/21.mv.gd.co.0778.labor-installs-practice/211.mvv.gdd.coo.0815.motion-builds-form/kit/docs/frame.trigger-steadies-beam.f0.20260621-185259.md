# frame — trigger · steadies · beam — f0 — [reviewed · crystallized]

> Reviewed-draft record (triad blessed, slices confirmed). Live work continues in [[frame.trigger-steadies-beam.f1]].

Make the scope reliable as a genuine instrument: a real trigger system (level · slope · hold-off · hysteresis) that locks any signal steady. Built on the crystallized [[frame.scope-shows-mode]] scope.

## §1 — agreement · at a glance
- **a genuine scope's reliability IS its trigger** (operator word). The current trigger is minimal — fixed level 0.5, rising-only, latest-crossing, auto free-run — so it stands a clean sine but not everything.
- **the two failures to fix** (operator-observed):
  - **(a) jitter/shimmer on busy signals** — it triggers on the wrong crossing or on noise → **HOLD-OFF + HYSTERESIS**.
  - **(b) won't lock some signals at all** — they don't cross the fixed mid-level → **adjustable LEVEL + SLOPE**.
- These are controls on the **existing buffered-trigger-window scan** (`scope.js`, ch A), not a new render path — the renderer + scanning are crystallized.
- **NOT this frame:** the rate-extrapolation drift on modulated signals · brightness/flicker (operator didn't flag them) · the renderer.
- **OPEN — triad?** `trigger·steadies·beam` (proposed) / other — operator authors.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — trigger LEVEL + SLOPE**  ○ todo  *(fixes "won't lock some signals")*
goal: the sweep locks at an adjustable level, on a chosen slope — so any signal locks where you want it.
- ○ trigger **level** control in the scope panel (replaces the hardcoded 0.5); in the signal's range
- ○ **slope**: rising | falling
- ○ the scan uses level+slope instead of the fixed rising-through-0.5

**slice 2 — HOLD-OFF**  ○ todo  *(fixes jitter on busy signals)*
goal: a re-arm delay after each window so a busy / multi-crossing waveform locks on the SAME crossing every frame, not a different one.
- ○ hold-off control (seconds); the scan skips crossings within the hold-off after the chosen one
- ○ verify a harmonic-rich / multi-crossing signal stops shimmering

**slice 3 — HYSTERESIS**  ○ todo  *(noise immunity)*
goal: a band around the level so noise near it doesn't false-trigger (the shimmer).
- ○ require crossing level−h → level+h (a margin), not just touching the level
- ○ sensible default; expose only if it needs hand-tuning

**slice 4 — trigger MODE (auto | normal)**  ○ todo  *(optional; supports "won't lock")*
goal: auto (free-run if no trigger — today) vs normal (redraw only on a real trigger; hold the last good window if none, so it doesn't free-run-drift).
- ○ auto | normal selector; normal holds the last triggered window when no trigger fires

## §3 — trace · DAG & status
```
slice1 level+slope ─┐
slice2 hold-off ────┼─→ a trigger that locks ANY signal steady (instrument-grade)
slice3 hysteresis ──┘
slice4 mode (auto|normal) — optional, rides alongside
```
- **status:** forming — the renderer + scanning are crystallized ([[frame.scope-shows-mode]]); this frame hardens the **trigger** for reliability. Targets: lock busy signals without shimmer (hold-off + hysteresis) · lock any signal (level + slope). **Awaiting operator review of this draft before building.**
- **touches:** `kit/src/scope.js` (the buffered-trigger scan — level/slope/hold-off/hysteresis/mode) · `kit/src/workbench.js` (trigger controls in the scope panel) · `dev/scope-bench.html` (add a busy/harmonic + an offset test signal to calibrate against).
- **lineage:** f0, no prior. Builds on the crystallized [[frame.scope-shows-mode]].
- mode: builder window · `.live` while building (crystallize on close).
