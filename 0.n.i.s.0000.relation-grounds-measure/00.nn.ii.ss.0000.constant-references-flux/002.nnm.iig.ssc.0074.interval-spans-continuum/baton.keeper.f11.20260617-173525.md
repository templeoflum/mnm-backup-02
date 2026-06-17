# baton — keeper — f11

closed: 20260617-173525 · gait [hold] · folds from [[baton.keeper.f10]]

**Mandate (standing):** grow the library by grounding vetted, scholarly, citeable material into `field/source/object` records — slowly, honesty carried in `status`, never an editorial line. The corpus is the library the wings draw from, one `.unit` at `0/corpus/`.

## state (live threads — 3)

1. **Corpus at rest — calibrated this wake, intact.** 2000 records (157 field · 829 source · 1014 object), all settled, **0 float** (the 5 grep hits for `status:.*float` are index *narrative prose*, not frontmatter — verified false-positives). Ground reconciled against disk on open; matches f10 exactly. No drift.

2. **Well census RAN (read-only) — Bin-2's real size is now known.** The `raw-well/` (`000/quarantine/source-texts/raw-well/`, 166 `.txt`, 637M) cut **by work, not by file**: **99 distinct works → 66 COVERED (≥1 full text) · 33 HOLLOW (index/TOC scrape only, need re-acquisition).** The raw "61 stub files" was misleading — 28 were duplicate scrapes of works already held full; only 33 are genuine gaps. FULL texts ≈ **8.7M words**. **The 33 hollow works** (the re-acquisition list): rigveda · dhammapada · chuang-tzu · pyramid-texts · gnostic-gospels · orphic-hymns · fasti-ovid · lebor-gabala · táin-bó-cúailnge · conference-of-the-birds · baal-cycle · zend-avesta · upanishads · kojiki · myths-legends-bantu · myths-of-ife · yoruba-speaking-peoples · lithuanian-mythology · kogoshui · polynesian-mythology · 7 N-American (cherokee/navaho-origin/seneca/tlingit/tales-of-NA-indians/southeastern/hopi) · 4 Slavic (byliny/folk-tales-russian/sixty-slavonic/songs-russian-people). **46 covered works also carry a redundant stub/excerpt to drop.** Census scripts are throwaway in `%TEMP%` (`well_census.py` + `well_bywork.py` + `well_census.json`) — reproducible, NOT committed, will vanish; this baton is the durable record. **Census caveats:** (a) FULL is a heuristic (wordcount + prose-ratio), NOT verified — the 66 covered want a spot-check for abridgments (e.g. the mahābhārata full file is literally tagged `(abridged)`); (b) a few "hollow" partials may be near-complete short texts — `descent-of-ishtar` (1435w) likely whole, needs an eyeball not a re-fetch.

3. **Mythic-texts extraction = the agreed next arc, three jobs separated.** "Extract the text" is really three distinct jobs, only one mechanical: **(i) source grounding** → each full text becomes a citeable `source.*` record (keeper's, doable once covered set confirmed); **(ii) text → navigable segments** (book/chapter/verse) = seat 2's system work, keeper specs — the prior project's tossed `segmentation_results.json` was this; **(iii) figures/myths/motifs → object records** = branch-1 interpretation (lantern's `myth.cosmos`), NOT mechanical, NOT keeper's — a script auto-generating "Zeus is a sky-god" would import the material's ontology. Re-acquisition of the 33 (fetch the full pages behind the index scrapes) is **seat 2's fetcher**, spec'd by keeper.

## next pull (ONE)
**Hold — operator stepped away to focus on the build.** When keeper resumes, the unblocking move is the operator's call among: (a) **spec the re-acquisition fetcher** for the 33 hollow works → route to seat 2; (b) **spot-check the 66 covered** for abridgments/wrong-text before grounding; (c) **fold the census into a `count` record at `000`** (offered, operator deferred to baton-cut — currently preserved only here). Most natural first: confirm whether to record the census as ground, then decide re-acquisition vs. spot-check ordering.

## snags
- **E3 + new untracked drop:** `000/quarantine/` (~638M) UNTRACKED (operator's "decide later" stands). NEW this wake: `000/mythic library/` (6.0M — the prior project's `ACP/` + `miroglyph/`, the *well-head* we pulled ACP and source-texts FROM; not a mystery, operator confirmed). Also untracked. Do NOT `git add` either without his word.
- **Content-completeness is real and quantified now:** 33 works hollow; some have no clean single PD etext (f10 flagged coffin-texts had none; Apollodorus/Frazer-1921 + a PD Panchatantra still pending; `indian/pañchatantra` file is actually Phaedrus — mislabel).
- LF→CRLF cosmetic git warnings on record writes (autocrlf).
- Other seats (kit/clerk/lantern) commit in parallel — branch-1 (`myth.cosmos`) and branch-2 (`manifest.live.md`, `kit/`) files are theirs. One floor.

## wants-word
- **Record the census?** count-doc at `000`, or leave it in this baton.
- **Re-acquisition** — spec the fetcher (seat 2), and which works first / which to skip (no-PD-edition).
- **Bin-2 pantheon grounding scope** — still wants pinning before the source-grounding pass starts.
- **E3 + mythic library/** — commit, or keep holding.

## gait
**[hold]** — closed on the operator's word ("focus on the build, cut the baton") at a clean seam: corpus calibrated intact, census landed. Open by reading this baton + the keystone (CLAUDE.md). No mid-flight work left open.

## meta-arc (carry)
This wake was pure calibration + one read-only measurement — no records touched, floor stayed clean. Re-learned in practice: **report the honest cut, not the alarming raw number** — "61 stub files" became "33 hollow works" only after reconciling by work and catching the duplicate scrapes ([[dup-check-against-whole-corpus]] applied to acquisitions). The census is a *map, not a verification* — heuristic FULL flags still owe a spot-check before grounding ([[declared-is-not-executed]]: a classified-full file isn't a confirmed-full file). Extraction's three-job split holds the domain lines clean: keeper grounds sources, seat 2 builds the segmenter/fetcher, branch 1 reads the myths — keeper must not let a pipeline auto-author objects ([[dont-adopt-the-materials-ontology]]). No operator baton — his mid-flight folds here. The keystone is the shared ground; this file is only the seat.
