# sketch — spline-ui — f0 — 20260607-160000

controls, selectors, text descriptions. baseline.

---

## what it does

the full control surface of the instrument. mode selection, parameter scrubs, derivative source pickers, visualization toggles, playback, and the educational text panel that explains what the user is seeing.

## mode selector

segmented button row: local spline / coupled spline / global polynomial. switching mode triggers `buildLadder()` + `draw()` + `setText()`. tension scrub shows/hides based on mode (only visible in coupled).

## scrub controls

generic scrub widget pattern (same drag-to-change model as the TS instrument):

| scrub | key | range | step | integer? |
|-------|-----|-------|------|----------|
| continuity C_n | order | 0–12 | 0.05 | yes |
| segments | segs | 2–12 | 0.04 | yes |
| tension | tension | 0–1 | 0.01 | no |
| play speed | speed | 0.05–∞ | 0.01 | no |

changing order: rebuilds ladder (row count changes), refreshes pickers, updates text.
changing segments: generates new random shape, rebuilds ladder in global mode.

## derivative source pickers

`d:N` scrub per channel. displayed inline in each channel's monitor box. scrub to change order, or click to increment (+1, wrap to 0). max order = `order` in spline modes, 9 in global mode.

`refreshPickers()`: clamps all drivers to max order, marks "hot" if the channel is driven by a broken order (d > order in spline mode). hot pickers are red-highlighted.

## visualization toggles

all segmented button rows:

| toggle | options | what it controls |
|--------|---------|-----------------|
| detail | clean / standard / full | master rendering density gate |
| combs | off / curvature | curvature comb visualization |
| influence | all / ghost / heat / tug / off | post-drag feedback mode |
| prediction | off / reach-zones / hover-preview / both | pre-drag preview mode |
| polarity | unipolar / bipolar | channel normalization mode |

## playback

play/pause button toggles `playing`. starts the animation loop, activates audio. button text toggles between "play" and "pause".

random shape button: generates new join values via `randShape()`.

## text panel

two sections: `read` (main description) and `note` (deeper explanation).

`setText()` generates mode-specific educational text:
- **independent mode**: explains the continuity order, what's broken where, the Runge onset at high order, the cross-medium point.
- **coupled mode**: explains the tension slider, the spectrum from coupled to local, the controlled influence vs Runge.
- **global mode**: explains the single polynomial, C-infinity, Runge's phenomenon, the cautionary twin of the spline.

the text is substantial (~100 words per mode). it's teaching material embedded in the instrument.

## layout

two-column responsive grid:
- left column: the ladder (stacked derivative canvases)
- right column (sticky): channel monitors + text panel

at narrow widths: single column.

## what it depends on

- everything: controls set parameters that affect every other part

---
