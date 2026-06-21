# frame — trigger · steadies · beam — f1 — [building · live]

Make the scope reliable as a genuine instrument: a real trigger system (level · slope · hold-off · hysteresis) that locks any signal steady. Built on the crystallized [[frame.scope-shows-mode]] scope.

## §1 — agreement · at a glance
- **a genuine scope's reliability IS its trigger** (operator word). The current trigger is minimal — fixed level 0.5, rising-only, latest-crossing, auto free-run — so it stands a clean sine but not everything.
- **the two failures to fix** (operator-observed):
  - **(a) jitter/shimmer on busy signals** — it triggers on the wrong crossing or on noise → **HOLD-OFF + HYSTERESIS**.
  - **(b) won't lock some signals at all** — they don't cross the fixed mid-level → **adjustable LEVEL + SLOPE**.
- These are controls on the **existing buffered-trigger-window scan** (`scope.js`, ch A), not a new render path — the renderer + scanning are crystallized.
- **NOT this frame:** the rate-extrapolation drift on modulated signals · brightness/flicker (operator didn't flag them) · the renderer.
- **triad `trigger·steadies·beam` — blessed** (operator word 20260621).

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — trigger LEVEL + SLOPE**  ✓ done  ·  (`77cfac4`)  *(fixes "won't lock some signals")*
- ✓ adjustable **level** (0..1) scrub + **slope** (rising|falling) selector in the panel; the scan uses them instead of the hardcoded mid-rising
- ✓ bench-verified: an offset sine (never crosses mid) **locks at level 0.8** (0.00% drift) where level 0.5 can't (1.04%)

**slice 2 — HOLD-OFF**  ▸ built · live eye-test on busy signals  ·  (`77cfac4`)  *(busy-signal jitter)*
- ✓ hold-off scrub; the forward trigger scan only re-fires ≥ hold-off after the last fire → locks one crossing per period
- ○ my harm test signal didn't multi-cross enough to *force* it (stands at holdoff=0); needs the operator's real busy signal to stress

**slice 3 — HYSTERESIS**  ▸ built · live eye-test  ·  (`77cfac4`)  *(noise immunity)*
- ✓ a band: armed past level−h, fires at level+h (default 0.02, configurable `hyst` scrub) → small wiggles don't false-trigger

**slice 4 — trigger MODE (auto | normal)**  ✓ done  ·  (`77cfac4`)
- ✓ auto (free-run if no trigger) | normal (no redraw if no trigger → the last window holds, no free-run-drift)

## §3 — trace · DAG & status
```
slice1 level+slope ─┐
slice2 hold-off ────┼─→ a trigger that locks ANY signal steady (instrument-grade)
slice3 hysteresis ──┘
slice4 mode (auto|normal) — optional, rides alongside
```
- **status:** **built** (`77cfac4`) — the trigger is now a real system: level/slope/hold-off/hysteresis/mode, all configurable in the panel + persisted. Forward trigger state machine (armed past far-band → fires at near-band of the slope → ≥ hold-off → latest valid). Calibrated on the bench: level locks the offset signal, harm stands clean, no errors. **Live eye-test owed:** the operator's real busy signals (to confirm hold-off + hysteresis quell the shimmer he saw — my deterministic test signals didn't reproduce it). Crystallize once the live eye blesses it.
- **touches (built):** `kit/src/scope.js` (forward trigger scan + setters) · `kit/src/workbench.js` (trig lvl/holdoff/hyst scrubs + slope/mode selectors, persisted) · `dev/scope-bench.html` (harm/offset/jit signals + trigger URL params).
- **lineage:** folds [[frame.trigger-steadies-beam.f0]] (reviewed draft, crystallized). Builds on the crystallized [[frame.scope-shows-mode]].
- mode: builder window · `.live` until the live eye-test blesses it, then crystallize.
