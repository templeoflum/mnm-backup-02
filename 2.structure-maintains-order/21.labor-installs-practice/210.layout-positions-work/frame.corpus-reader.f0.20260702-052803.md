# frame — reader · resolves · web — f0 — [spec forming · not built · triad proposed/unblessed · placement OPEN · rung 1 is a pilot]

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
- **triad — PROPOSED, unblessed [float]:** `reader · resolves · web`. Awaits operator.
- **placement OPEN:** the unit co-located with what it reads (branch 0, corpus-adjacent)
  vs 211 where the kit lives. Operator's call; frame moves with it if needed.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**chunk A — the read path** *(prove it, then parse it)*
- **slice 1 — read-path pilot**  ○ — prove ONE of: (a) browser directory-picker reading
  `0/corpus/` live from an opened page (target browser named at pilot), or (b) fallback: a
  node script compiling the corpus → a data snapshot the page loads (regenerate-on-change).
  Confirm: the page reports **2007 files** and shows one record's raw text. No mechanism
  claims — the pilot is the claim.
- **slice 2 — parser + resolver**  ○ — frontmatter ref keys (`links`/`field`/`source`/
  `depends-on`/`used-by`, quoted wikilinks) + body `[[links]]`; resolver: handle → newest
  fold. Confirm by reconciling against known ground truth: 2001 handles · 6259 refs ·
  4402 body links · 91 unresolved names.

**chunk B — the graph**
- **slice 3 — render floor**  ○ — canvas, nodes colored by type (field/source/object),
  pan/zoom, seeded static layout first.
- **slice 4 — layout at scale**  ○ — force sim tuned for ~2000 nodes / ~10k edges.
- **slice 5 — typed edges + legend**  ○ — `depends-on` solid · `field` dotted · `source`
  dashed · body prose-links faint; **unresolved person-names as distinct ghost style** (the
  parked entity layer, visible as absence — carried from [[frame.wiki-bridge.f1]]).
- **slice 6 — focus mode**  ○ — click node → depth 1–2 neighborhood; the reading view at
  this scale (the global view is a hairball in any tool).

**chunk C — reading**
- **slice 7 — reading pane**  ○ — click node → record rendered read-only beside the graph.
- **slice 8 — find**  ○ — jump by handle / name filter.

**deferred:** canon/state filters · entity records themselves (a corpus-schema question,
keeper + operator) · export/print.

## §3 — trace · DAG & status
```
A1 read-pilot ─→ A2 parse+resolve ─┬─→ B3 render ─→ B4 scale ─→ B5 typed edges ─→ B6 focus
                                   └─→ C7 reading pane ─→ C8 find
```
- **status:** spec forming · not built · triad unblessed · placement open · rung 1 = pilot.
- **opens for the operator:** (1) triad bless/reword · (2) placement (branch 0 vs 211) ·
  (3) go on slice 1.
- **builds on:** [[audit.wiki-bridge-alias-incident.f0]] · [[frame.wiki-bridge.f1]] (graph
  responsibility moves here) · `template.corpus-records.f8` (quoted refs stand, aliases
  retired) · [[buildless-unit-default]] · [[pilot-before-mass-pass]].
- **freeze note:** f0 is the spec; fold f0→f1 at the first build-tracking update.
- mode: clerk · framing at 210 · before build, on the operator's go.
