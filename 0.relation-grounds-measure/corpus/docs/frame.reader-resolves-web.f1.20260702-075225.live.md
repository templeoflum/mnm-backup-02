# frame — reader · resolves · web — f1 — [building · slice 1 ✓ (pilot proven) · triad blessed · placement settled: corpus root · live]

Folds [[frame.reader-resolves-web.f0]] (frozen origin) at the first build-tracking update.

The house's own reader over the corpus at `0/corpus/`: one buildless page that reads the
records, resolves `[[handle]]` → newest fold natively, and draws the graph Obsidian
structurally cannot — typed edges, our resolution, no write path. Born from the alias
incident ([[audit.wiki-bridge-alias-incident.f0]], 221): the corpus does not reshape for a
foreign reader again; the reader shapes itself to the corpus.

## §1 — agreement · at a glance

- **what:** a single plain HTML+JS file ([[buildless-unit-default]]: file you open = file
  that runs; no npm, no bundler; JSDoc + tsc --noEmit as the check). It reads the corpus,
  parses frontmatter (the five f7 quoted-wikilink ref keys) + body links, and renders:
  graph with **typed edges** · **focus mode** · **reading pane**. **No write path by
  construction** — it cannot create or modify a file, which is the property the foreign
  reader broke.
- **why ours:** the impedance is structural — Obsidian's identity is the filename; the
  corpus's identity is the handle, with the filename carrying identity+version
  (`type.scope.fN.timestamp.md`, inviolate). Resolution `[[handle]]` → newest fold is
  three lines when we own the resolver. Two corpus reshapes for the window were two too many.
- **the corpus is untouched by this build.** The unit is pure consumer. Obsidian remains
  installed as plain single-record reader + full-text search; its graph view is simply not
  the instrument.
- **pilot-first is the incident's standing rule:** every claim about browser/app behavior
  is proven at one-record scale before anything wider. Rung 1 of slice 1 IS a pilot.
- **triad — BLESSED (operator, 20260702):** `reader · resolves · web` — and **the triad IS
  the frame's name** (operator correction: not "corpus-reader"; the file slug carries it).
- **placement SETTLED (operator, 20260702, with the corpus restructure):** `reader.html`
  at the corpus root (the front desk); this frame at `corpus/docs/` (co-location).
- **precursor found:** [[frame.lineage-map.f0]] (keeper, 20260617, now at `docs/`) specs a
  corpus-derived dependency graph, buildless, handed to this seat — same destination; its
  ground knowledge (the concept-`depends-on` DAG) feeds slices 5–6.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**chunk A — the read path** *(prove it, then parse it)*
- **slice 1 — read-path pilot**  ✓ (20260702) — **path (a) PROVEN by demonstration** against
  the real corpus, windowless rig (plain DOM), zero page errors: `reader.html` at the corpus
  root, `<input webkitdirectory>` folder-pick from a `file://` page → **2000 records read,
  157 field · 829 source · 1014 object — reconciles exactly with ground truth** — and the
  first record's full text rendered. (Confirm target trued from f0's "2007 files": the
  restructure moved 2000 records into `records/`; the reader filters by record-name shape.)
  Snapshot fallback (b) not needed. Operator's eye: open `reader.html`, pick `0/corpus/` —
  read-only by construction, the picker cannot create files.
- **slice 1b — snapshot auto-load**  ✓ (20260702, operator ask: no pick-per-open) — path (b)
  built as the DEFAULT after all: `reader.snapshot.mjs` (front desk, beside the window)
  emits `reader.data.js` (derived, gitignored) which the page loads via plain `<script src>`
  — works from `file://`, zero clicks, tally shows `snapshot <stamp>`. Folder-pick stays as
  the LIVE override (tally flips to `live` — the truth while the keeper's mid-batch).
  `reader.refresh.cmd` = the operator's double-click regenerate. Rig-proven: no-pick open →
  full graph, stats identical to live, pick still overrides, zero errors.
- **slice 2 — parser + resolver**  ✓ (20260702) — frontmatter ref keys + body links parsed;
  resolver handle → newest fold; typed edge list built (`window.corpus`: records · byHandle ·
  edges · resolve · stats). **Reconciled EXACT against ground truth computed the same moment**
  (the floor moves — keeper live; session-stale numbers retired as a confirm source): at rig
  time 2175 records · 6459 refs · 4400 body links · 1210 targets · 80 ghosts, all six numbers
  matching; spot-checks: real handle resolves to its file, person-ghost stays null; the
  keeper's 174 fresh records parsed identically (cross-seat schema validation, free). Zero
  page errors.

**chunk B — the graph**
- **slice 3 — render floor**  ✓ (20260702) — full-bleed canvas 2D; one node per resolved
  handle, type colors; **deterministic golden-angle spiral** (type-ordered: fields center,
  sources mid-band, objects rim — reproducible shots, no randomness); drag-pan +
  cursor-centered wheel-zoom; hover readout (handle · fold · state). Rig-proven: paint
  (133k lit px), zoom k rises, pan shifts, hover resolves `field.tarot · f0 · settled`;
  zero page errors. **One real bug caught by the rig:** canvas is a replaced element —
  opposing insets don't stretch it (sat at 300×150); fixed with explicit width/height.
  Chunk-A's first-record proof panel retired in favor of the canvas (reading returns as
  slice 7). Operator eye = the visual gate; no baseline blessed yet.
- **slice 4 — layout at scale**  ✓ (20260702) — hand-rolled force engine, no imports:
  Barnes-Hut quadtree repulsion (θ²=0.81, depth-guarded) · degree-weighted springs over
  deduped undirected link pairs · weak centering · deterministic (spiral seed, zero
  randomness — shots reproducible) · sim runs live (pan/zoom during settle; auto-refit
  unless the hand has moved). Rig-proven at 2188 nodes / 10859 edges: settles in 348 ticks,
  0 NaN, **mean linked-pair distance 36 vs 220 arbitrary (ratio 0.165)** — the web pulls
  true. Observed shape: connected core + peripheral rings (self-linked clusters, honest) +
  dust halo of degree-0 records (the unwired fresh intake — pulls in as keeper links it).
- **slice 5 — typed edges + legend**  ✓ (20260702) — edges batched per style: structural
  (`depends-on`+`used-by`, one line) solid ink · `field` dotted blue · `source` dashed
  orange · `links` dash-dot violet · body faint gray; **ghosts enter the graph** — 80
  hollow gray nodes, force-pulled by their linkers (the entity layer visible as absence);
  degree-sized nodes (hubs read); legend overlay. Rig: all kinds painted, legend 10 rows.
- **slice 6 — focus mode**  ✓ (20260702) — click → depth-1 neighborhood (shift-click depth
  2, esc clears): rest dims to 7%, neighborhood edges brighten, labels on for ≤48 nodes.
  Drag-vs-click disambiguated at 4px.

**chunk C — reading**
- **slice 7 — reading pane**  ✓ (20260702) — click/find → right pane, raw record read-only
  (markdown render deferred); `[[handles]]` in the text are jump-links (click → focus+pane
  on the target); ghost pane lists its linkers as jump-links. Rig: jump chain proven
  (prime-number-theorem → riemann-zeta-function), ghost pane proven (Sophus Lie · linked
  by 3), esc clears both.
- **slice 8 — find**  ✓ (20260702) — header type-ahead over handles incl. ghosts
  (starts-with ranked first), enter/click → center + focus + pane. Rig-proven.

**chunk D — the views** *(operator, 20260702: build ALL, review together, cut what doesn't
earn its keep; the reader is the corpus's visualizer — same `window.corpus`, each view a
projection over it)*
- **slice 9 — view switcher**  ✓ (20260702) — header control renders from a `VIEWS`
  registry; hooks: enter/leave (position caching) · edges 'full'/'focus'/custom ·
  drawUnder/Over · drag/down/hover/click overrides · per-view legend rows · `positional:
  false` routes go() to web. Force layout = the `web` view (positions cached across
  switches; sim halts on leave); fit() now bbox-based; components computed once at load
  (87, shared ground for matrix/rings/multiples). Rig rebuilt as standing equipment
  (`docs/reader.rig.mjs` — iterates every registered view, screenshots, lit-pixel +
  zero-error checks). Web regression green: 348 ticks, focus/pane/find alive.
- **slice 10 — ternary**  ✓ (20260702) — barycentric triangle, corners field · source ·
  object; placement by neighborhood type mix; identical mixes spread by deterministic
  golden-angle spiral; 49 unwired records in a strip below; edges only in focus mode.
  Rig-proven, shot eyed: sources hug the field corner, a salmon chain runs the
  field–object edge, the ghost cluster sits at the object corner — composition structure
  the force layout never showed.
- **slice 11 — 3D web**  ✓ (20260702) — real 3D force: the Barnes-Hut engine generalized
  to an octree (same constants), Fibonacci-sphere seed (the 2D spiral generalized),
  orthographic projection, drag-orbit + wheel zoom, depth as 12 alpha bands (far fades;
  batching preserved). Positions cached across switches; deterministic. Rig green, shot
  eyed. Feel-gate = the operator's orbit on his machine.
- **slice 12 — matrix**  ✓ (20260702) — adjacency, axes ordered component → type → degree;
  cells colored by kind (cached world-space paths; below ~1.2px/cell a density mode draws
  fixed screen-space points — sub-pixel fills antialiased to nothing without it); records
  ON the diagonal as cell-sized marks (degree sizing bloated — capped); block boundaries
  for components ≥10; hover names the pair + kinds, cell click focuses the row record.
  One coordinate bug caught by the shot (mirrored cells collapsed onto the diagonal).
  Type-band quadrants + hub streaks read at full zoom-out. Rig green.
- **slice 13 — native-cycle rings**  ✓ (20260702) — **pilot finding first:** only the
  hexagrams carry native sequence in the data (`hexagram-01-…`); runes / tonalpohualli /
  tarot have none in handle or frontmatter (adding real sequence fields = corpus-schema,
  keeper + operator). Built honestly: every component as a circle, hubs (≥60% linked) at
  center, order = number-in-handle where most members carry one, else name order — the
  legend says which. Giant = chord diagram (radius capped or it dwarfs every closed system
  into dust). Rig asserts the order EXECUTED: hex01→hex02 = one circle-step (0.1147 rad).
- **slice 14 — small multiples**  ○ — all 87 components drawn tiny in a grid sorted by
  size; click → web view focused on that component.
- **slice 15 — hive plot**  ○ — three axes (one per type), nodes placed along them by
  degree, edges arc between axes; deterministic, no simulation.
- **review gate:** all seven land → operator eye across the full set → cut list. Building
  all is cheap; keeping all is not required.

**parked (operator, 20260702):** fold/time view — it reads the lattice's names (timestamps,
fN folds), not the corpus's content; that's the seed of a LATTICE-WIDE visualizer, planned
but its own later instrument, not this one. Export/print deprioritized (not cut).

**polish queue (behind chunk D now — operator's word: visualizing first):** label
de-overlap in tight focus clusters · markdown rendering in the pane · canon/state filters ·
entity records themselves (a corpus-schema question, keeper + operator).

## §3 — trace · DAG & status
```
A1 read-pilot ✓─→ A2 parse+resolve ✓─┬─→ B3 render ✓─→ B4 scale ✓─→ B5 typed edges ✓─→ B6 focus ✓
                                   └─→ C7 reading pane ✓─→ C8 find ✓
D9 switcher ○─→ D10 ternary ○ · D11 3D ○ · D12 matrix ○ · D13 rings ○ · D14 multiples ○ · D15 hive ○ ─→ review gate (operator cut list)
```
- **status: ALL EIGHT SLICES BUILT + BLESSED (operator, 20260702)** · then an
  **optimization pass** on his slow-report: two-speed drawing (light frames while the hand
  moves or the sim runs — 8 batched Path2D draw calls, ~0.8ms; full fidelity with all
  typed edges on rest, ~2–8ms, debounced 140ms) + spatial-grid hit-testing for hover/click
  (linear fallback mid-sim). Rig-measured; visuals at rest unchanged; focus/pane/find
  re-proven after. Feel-gate = the operator's hand on his own machine (headless numbers
  are dpr-1 — his eye rules).
- **found by the instrument, real topology:** 87 components — one main web (1653), and the
  **closed divination systems as rings** (I Ching 64+field, Elder Futhark 24+field, Aztec
  tonalpohualli 20+field, tarot…) — self-contained symbol systems, honestly disconnected.
  49 true singletons.
- **deferred (unchanged + new):** canon/state filters · entity records (corpus-schema,
  keeper+operator) · export/print · markdown rendering in the pane · label de-overlap in
  tight focus clusters.
- **solid-edge pass (69df833) BLESSED (operator eye, 20260702):** all edges solid, color
  carries kind (supersedes slice 5's dotted/dashed styles).
- **chunk D framed (operator, 20260702):** the reader IS the corpus's visualizer; seven
  view slices, build all, review gate cuts. Fold/time parked as the lattice-wide
  visualizer's seed. Polish queue moved behind the views. Next pull = slice 9 (switcher).
- **builds on:** [[audit.wiki-bridge-alias-incident.f0]] · [[frame.wiki-bridge.f1]] (graph
  responsibility moves here) · `template.corpus-records.f8` (quoted refs stand, aliases
  retired) · [[buildless-unit-default]] · [[pilot-before-mass-pass]].
- **freeze note:** f0 is the spec; fold f0→f1 at the first build-tracking update.
- mode: clerk · framing at 210 · before build, on the operator's go.
