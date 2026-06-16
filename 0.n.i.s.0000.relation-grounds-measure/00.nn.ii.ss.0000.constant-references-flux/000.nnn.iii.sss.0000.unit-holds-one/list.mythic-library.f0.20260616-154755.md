# list — mythic-library — f0 · content census (the 132 texts)

opened 20260616-154755 · keeper · gait [walk] · companion to [[note.mythic-library.f1]]
the working spine for grounding: what texts exist, which carry real content, which are empty.

**Still quarantined.** This census measures *presence*, not *truth*. Each usable text still needs provenance + content examined before grounding.

---

## the count

| | texts |
|--|--:|
| catalogued (`sources/master_catalog.csv`) | 132 |
| on disk (text-id folders) | 132 |
| **usable** (≥5 KB normalized) | **95** |
| tiny (<5 KB, near-empty) | 1 (zoroastrian, 8 KB) |
| **empty** (0 bytes — stub + provenance only) | **36** |
| total normalized text | **98.1 MB** |

README claimed "132 texts, 96 with usable content" → **confirmed** (95 usable + 1 tiny ≈ 96).

---

## the unit (anatomy of one text)

`texts/{tradition}/{text-id}/`:
- **`SOURCES.md`** — provenance: origin, date, type, author, public-domain source URLs (Gutenberg / Sacred Texts / Archive / ETCSL). *Good — travels with each text.*
- **`downloads/`** — raw acquired files, one per translator/source. RAW.
- **`normalized/{id}_best.txt`** — the chosen clean full text. **← the groundable material.** (plus per-source `_{src}.txt` + `_metadata.json`)
- **`segments/`** — `segments.json` manifest + `seg_NNN_*.txt` chunks.

**Finding — segmentation is crude, low-value.** Strategy is `blank_line`; "segments" are arbitrary blank-line splits that swallow title pages, TOC, prefaces as if content (Aesop's seg_001 = the 1894 Macmillan title page + dedication). Not narrative units. `segments.json` also still carries a **stale absolute path** from the old location. → Ground from `_best.txt`; treat segmentation as derived noise to redo meaningfully or drop. Front-matter (publisher boilerplate, "all rights reserved", dedications) is mixed into normalized text and must be handled at grounding.

---

## usable texts by tradition (95)

| tradition | texts | KB |
|-----------|------:|---:|
| indian | 9 | 17173 |
| celtic | 5 | 8906 |
| hebrew | 1 | 8671 |
| north-american | 8 | 8493 |
| european | 6 | 7358 |
| greek | 9 | 7025 |
| african | 7 | 5601 |
| anthology | 3 | 5380 |
| roman | 4 | 4363 |
| polynesian | 5 | 3595 |
| southeast-asian | 3 | 3177 |
| germanic | 1 | 2995 |
| norse | 4 | 2690 |
| japanese | 3 | 2632 |
| siberian | 1 | 2200 |
| korean | 1 | 1665 |
| chinese | 6 | 1654 |
| oceanic | 1 | 1593 |
| mesoamerican | 2 | 1511 |
| egyptian | 5 | 935 |
| persian | 1 | 926 |
| arctic | 1 | 795 |
| australian-aboriginal | 1 | 558 |
| south-american | 1 | 206 |
| slavic | 3 | 184 |
| mesopotamian | 3 | 135 |
| zoroastrian | 1 | 8 |

(per-text byte/segment detail is deterministic — regenerate from the tree when grounding a tradition.)

---

## empties = acquisition wishlist (36)

Folders with `SOURCES.md` provenance but **no acquired content** — intended texts never downloaded. Not material; a *wanted-texts* backlog. Several are major:

**major / high-value:** mesopotamian/epic-of-gilgamesh · mesopotamian/atra-hasis · indian/rigveda · indian/dhammapada · celtic/táin-bó-cúailnge · egyptian/coffin-texts · levantine/baal-cycle · tibetan/tibetan-book-of-dead-evans · tibetan/epic-of-king-gesar · greek/bibliotheca-apollodorus · persian/the-conference-of-the-birds · mongol/secret-history-mongols · turkic/epic-of-manas · south-american/huarochiri-manuscript

**the rest:** african/{epic-of-sundiata, myths-and-legends-of-the-bantu, myths-legends-bantu, myths-of-ife, treasury-african-folklore, west-african-folk-tales} · anthology/pre-columbian-myths · australian-aboriginal/more-australian-legendary-tales · baltic/lithuanian-mythology · chinese/fēngshén-yǎnyì · japanese/kogoshui · mesoamerican/codex-chimalpopoca · north-american/navaho-origin-myths · oceanic/{oceanic-mythology-dixon, oceanic-mythology, pacific-island-legends} · polynesian/maui-thousand-tricks · slavic/{folk-tales-russian, songs-russian-people} · south-american/guarani-creation-myths · turkic/{book-of-dede-korkut, dede-korkut}

## duplicate stubs (same text, double-foldered — all empty)
- `african/myths-and-legends-of-the-bantu` ↔ `african/myths-legends-bantu`
- `oceanic/oceanic-mythology-dixon` ↔ `oceanic/oceanic-mythology`
- `turkic/book-of-dede-korkut` ↔ `turkic/dede-korkut`

---

## open decisions (for the operator)
1. **the 36 empties** — keep their `SOURCES.md` as an acquisition wishlist (drop the empty folders), or cut entirely?
2. **the duplicate stubs** — collapse each pair to one.
3. **grounding order** — by tradition (largest first: indian, celtic, hebrew?) or by significance, or smallest-first to prove the format?

next: settle the corpus format for myth texts, then ground tradition by tradition.
