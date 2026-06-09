# Frame — intake — f1 — 260606-144500 [float]

Fold from f0. Survey complete, research read and witnessed. f0 preserved.

## 0 — Research grounding

### 0.0 — Survey (I1) — DONE

All 12 compilations + 3 existing research docs read. Full reflections written per compilation. Output: survey.research.f0.260606-133820.md at 111 with cumulative attribution map. Extraction and cross-reference now complete (0.1, 0.2).

### 0.1 — Extract (I2) — DONE

46 verified, 30 applied, 6 speculative. Three-tier tagging separates published source from our mappings. Output: extract.research.f0.260606-145200.md at 111.

### 0.2 — Cross-reference (I4) — DONE

No significant contradictions. Actionable leads confirmed or strengthened. Operation doc structure sound, vocabulary outdated, methodology now grounded. Push 003 "compost" had usable seeds. Three unique items not covered by compilations (curvature signatures, Wolff, permutation pairs). Output: crossref.research.f0.260606-150300.md at 111.

---

## 1 — Carry forward

### 1.0 — Source policy (F1) — SETTLED

Leave legacy files alone completely. No annotation, no headers, no fixing. Take what's in them and rebuild forward with settled vocabulary and current vision. The old files are what they were — the new work is what they become.

### 1.1 — TS rebuild (K1) — PROMOTED

Promoted to own frame: frame.ts-rebuild.f0.20260607-100000.md at 210. Scope too large for two line items — 4 HTML instruments in a lineage chain, multiple plan/findings docs, vocabulary reconciliation, addressing decisions. Own chunks, slices, rungs.

### 1.2 — TS naming and addressing — PROMOTED

Merged into frame.ts-rebuild.f0 as chunks 1–3.

---

## 2 — Interface

### 2.0 — State persistence (B3) — DONE

Added saveState() to go() + three V1 spinner functions. All paths that change currentAddr now persist. Minimap clicks, spinner steps, depth changes, right-click resets all save.

### 2.1 — Dynamic FILES (B8) — DONE

Replaced static FILES object with async cache-and-fetch system. loadFiles(digits) fetches Python http.server directory listings, parses hrefs, caches per address. fileCount/fileList read from cache synchronously. Wired into renderSelector, renderScope, renderIdentity. No hardcoded file arrays.

### 2.2 — Keyboard nav for V0 (B5) — [settled]

Original plan (tree-walk) built and thrown out — wrong metaphor. V0 jumps, V1 walks. [settled]

- left alt + digit: set digit 0 (branch) — WORKING
- space + digit: set digit 1 (leaf) — WORKING, keydown/keyup held-state tracking
- right alt + digit: set digit 2 (cell) — WORKING, left/right alt distinguished via e.code
- bare digit: set last digit — WORKING
- backspace: shallow (remove last digit) — WORKING
- parseDigitKey handles Digit*, Numpad*, e.key fallback — WORKING

### 2.3 — Debug and testing tools — DONE

Emerged from dream run. Not planned in f0.
- Debug overlay: collapsible panel, state display, key event log, error catch, eval input. Toggle via #debug-toggle. WORKING.
- eyes.js (playwright harness): headless browser tests, screenshots to 110 (watches). WORKING.
- eyes-test.js, eyes-numpad-diag.js: test scripts at project root. WORKING.
- Hot reload (Last-Modified polling): WORKING. Was broken — browser cached HEAD responses. Fixed: `cache: 'no-store'` on all fetch calls.

### 2.4 — Addr bar — DONE

Emerged from dream run. Shared across all views — constant reference point. The keystone of the interface. [settled]

---

## Execution order

```
0.0 (survey) — DONE
0.1 (extract) — DONE
0.2 (cross-reference) — DONE
1.0 (source policy) — SETTLED
1.1 (TS rebuild) — unblocked, 0.1 complete
1.2 (TS naming) — with 1.1
2.0 (persistence) — DONE
2.1 (dynamic FILES) — DONE
2.2 (keyboard nav) — [settled] — left alt d0, space d1, right alt d2, bare last, backspace shallow
2.3 (debug/testing) — DONE (hot reload fixed)
2.4 (addr bar) — DONE
```

---

## Research routing

```
200 (receiving) → branch 2 (sort, audit, clean) → branch 1 guides (working knowledge) → branch 0 (ground, when solid)
```

First test of this flow: survey read at 200, output placed at 111 (branch 1 guides). Research is now in guides. Not yet ground.
