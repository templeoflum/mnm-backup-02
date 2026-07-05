# census — met3or — f0 — delivery·receives·material

stamp: 20260705-114355 UTC · clerk's intake walk of the docked archive · **received, unsigned** (endorses nothing; this is a faithful inventory, not a plan — the sift and the frame come after, shared)

met3or is at the dock (200) as one unit (d542834). The operator's aim: repack this
archive into a workable project — a dial-by-hand brand/content suite (social posts,
cinematics, music) he can tune himself. This walk maps what's actually here so the
frame has ground. It cuts nothing and decides nothing.

---

## what it is

An artifact archive of the MET∃OR artist-rebrand exploration, recovered from a
conversation transcript + working files. 123 files (+ this census), ~69MB. Its own
README calls it "the reference archive for recovering lost ideas" — many directions
drifted or were abandoned; several carry ideas worth mining. Handle **@ro3tem.met3or**.

## the grammar (the spec everything else derives from)

The brand is defined as a rule-set, not an image — `brand_kit/README.md` (rev 1.2.1).
Seven invariant laws; any artifact satisfying them is the mark:

1. **color palindrome** — letters carry amber–blue–green–green–blue–amber (+ − 0 0 − +); the word isn't a palindrome, its colors always are.
2. **displaced axis** — the mirror axis passes through T (the zero), 24 units left of true center (Δ24, dimensioned never hidden).
3. **the C₁ clause** — exactly one element per composition may break mirror physics (canonically: R's reflection refuses to flip).
4. **the twin is never absent** — every composition holds both worlds; transforms relocate them, never delete.
5. **the eye is generated, not drawn** — appears only where a thing overlaps its reflection (vesica at the seam).
6. **colors are wavelengths** — λ 470/530/590 nm, transposed down 41 octaves → ≈290/257/231 Hz (the sonic logo).
7. **three at every scale** — any element subdivides into three (recursive ternary; the seam is a ruler of thirds and ninths).

Palette: amber `#f0a94a` (+1, 590nm), green `#4ade80` (0, 530nm), blue `#5aa7e8` (−1, 470nm); bg `#0a0f16`, ink `#e6edf3`, muted `#66707f`, border `#222b38`. Type: monospace throughout.

## full inventory (by category)

| dir | files | size | what |
|---|---|---|---|
| `brand_kit/` | 16 | 463K | final assets: avatar, feed_grammar (the canonical doc), story_seam, wordmarks (dark/transparent), 3 highlight covers (+/0/−). PNG + SVG masters + its own README (the grammar). |
| `standalone/` | 27 | 260K | the 27 transcript widgets, live + editable in a browser (host CSS vars wrapped in). the project's visual history. |
| `thumbs/` | 27 | 2.0M | still PNG of each standalone widget. |
| `covers/` | 4 | 1.0M | feral, fevered, grammar_seam, triptych covers. |
| `covers_evolution/` | 5 | 1.2M | the cover drafting lineage (pre-instruments → drafted → triptych_final). |
| `engine/` | 3 | 48K | `render.py` (524 lines, the reel renderer), `triptych.py` (139, the 3-pane cover), `met3or_engine_interactive.html` (the living-wordmark dial). |
| `interactive/` | 1 | 16K | `met3or_engine.html` — appears identical to engine/'s interactive HTML (a duplicate to confirm). |
| `kit/` | 1 | 12K | `build_kit.py` (154 lines) — derives every brand asset from the grammar. |
| `studies/` + `later_studies/` | 3+3 | 32K | mechanism R&D: study_a_beam (CRT beam/phosphor), study_b_blink (saccades), study_c_proportion (shell breathing). two copies. |
| `reel/` | 1 | 46M | `met3or_seam_session_001.mp4` — rendered output of render.py. |
| `reference/` | 2 | 18M | `audio.wav` (8M), `cover_sheet.npy` (9M) — heavy intermediates. |
| root | 4 | — | `README.md`, `recovered_contact_sheet.png` (labeled montage of all 27, "start here"), `met3or-thought-garden.tsx` (360-line React map of the conversation), `.unit`. |

Weight: the reel (46M) + reference (18M) are 64M of the 69M. Everything source-and-usable
(brand kit, widgets, engine, kit, studies, covers) is ~5M.

## functional core (what runs — observed, not judged)

- **`kit/build_kit.py`** — grammar → SVG/PNG assets generator. The letterforms are paths at base coords; assets derive from the laws. Needs `cairosvg` + a mono font. This is the closest thing to a "generator" already here.
- **`engine/met3or_engine_interactive.html`** — "Living Wordmark Engine", pure browser HTML, the dial-by-hand surface in seed form. Runs standalone.
- **`engine/render.py`** — deterministic reel renderer (numpy/PIL/wave), seeded 121. Carries the CANON geometry + a self-check. Heavy; produces the mp4 + audio.
- **`engine/triptych.py`** — 3-pane cover generator. **Portability snag: hardcoded `/home/claude/...` paths + a Linux DejaVu font path + needs `cover_sheet.npy`.** Won't run here as-is (the one sandbox-bound file found).

## lost ideas the README flags for recovery

1. `draft_c_reduced_avatar_glyph` — the pure-event minimal mark, never developed (README calls it arguably cleaner than the full wordmark at small sizes).
2. `met3or_type_specimen_recursion` — the recursive ternary tree graphic (never made the kit).
3. `met3or_sonic_logo_light_transposition` — the "play the light" sonic toy (wavelengths → pitches, never rebuilt standalone).
4. `draft_b_lattice_component_card` — the wordmark-as-UI-component framing.
5. the `mtr.121` / `mtr121` metadata styling from the early cards.

README also names two explicit REJECTS kept as cautionary: `seam_session_psychedelic_feedback` and `seam_session_glow_trails_on_established_sheet` ("destroyed everything the logo stood for").

## open questions for the frame (not answered here)

- what "workable project / suite" means concretely: the dial-by-hand generator (tune the grammar's free parameters by hand → export posts/covers/reels), or first a clean salvage-and-organize of the archive, or both in sequence?
- what the suite must OUTPUT: still posts · story covers · the reel/cinematics · the sonic logo / music · all of them?
- the duplicated pairs (interactive engine ×2, studies ×2) — collapse in the repack?
- the git-tracking call on the 64M of heavy media (reel + reference) — still the operator's, flagged at receive.
- where a workable met3or lives once framed: it moves off the dock to the build floor (211) only after a frame exists at 210 (the intake order).

---

20 intake·stages·priority → the archive is walked and mapped; nothing sifted, nothing built. The frame (210) is the next step, and it's shared.
