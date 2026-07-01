# baton — lantern — f8

closed: 20260701-104949 · gait: [hold] — operator closing out mid-dream; the SF02 imagery/concept-pool thread is open and live · folds from [[baton.lantern.f7]]

> placement: lantern's baton at **122** (the mind wing's home — signed divergence from the 222 template, carried). This cycle: **reordered the SF02 dream** on the operator's steer — imagery + concept pools come FIRST, prompts fall out of them (not the reverse). Walked the full **SF002 seed folder** (recorded) and the **branch-0 corpus** (understood its shape); mid-way through **compiling a clustered concept pool from the corpus** when the operator stepped out.

## state (live threads — 3)

1. **dream.sf02-zine — OPEN and live at 102.** One file, append-only (`102 — dream.sf02-zine.f0`). Two appends committed this cycle: (a) the **seed-folder walk** — flat inventory of `G:\...\SF002\text\seed`, five families held plural (A: his theme index `themes.md` + `titles.md` + `phrases.md` · B: cosmology origin-variants · C: thought-experiment cousins of the repo myths · D: a linked political/extraction cycle · E: singletons), plus a raw imagery catalog; (b) **titles+phrases landed** note. Big multi-MB narrative files were **sampled at openings only**, flagged for targeted mining if we pull lines. **Key reframe:** SF02 = hand-composed **collage**, three indistinguishable streams (community · stripped-corpus · operator's new), corpus bits as **tuning-forks**, strip-on-entry, density-as-medium, the signature page. Prompt-set drafted but **deferred** (imagery first).

2. **corpus compile — IN PROGRESS, not yet written.** The corpus is a **2000-record grounding DB at `0/corpus/`** (157 field · 829 source · 1014 object; one `.unit`; catalogued by `corpus.index.f5`). Distinct from the seed — it's curated knowledge, not voice-material. Each record carries a one-line `essence`. Operator chose **"broad pool, clustered"** — pull essences across ALL fields (technical + esoteric + mythic; **do NOT taste-filter out dry math terms — his `titles.md` mines "cohomology / Cauchy sequence / the critical line / state space"**), group into thematic clusters, **collect-phase (candidates gathered, not selected)**. I extracted all **1170 field+object essences** to a temp file (`$TEMP/corpus_essences.txt`) — likely gone next session; **re-derive** with the command in snags. The clustering itself is unstarted.

3. **carried, not mine:** `myth.cosmos.f2` shared mapping pass (121) still paused. zine-builder build (clerk, 211) + event-building quarantine (keeper, 000) untouched — own paths only.

## next pull (one)
**Produce the clustered corpus concept/theme pool.** Re-run the extraction (snags), read the 1170 essences, cluster them into thematic pools (essence pulled per concept), **broad + inclusive**, collect-phase. Land it as a **dream-companion doc at 102** near the SF02 dream (mind branch — my territory), clearly marked collect (not a sift). Then the SHARED sift decides which become tuning-forks.

## snags
- **re-derive the essence pool** (deterministic, ~30s) — from `0/corpus/`:
  ```
  for f in field.*.md; do h=$(echo "$f"|sed -E 's/^field\.//; s/\.f[0-9]+\..*//'); e=$(grep -m1 '^essence:' "$f"|sed 's/^essence:[[:space:]]*//'); echo "FIELD	$h	$e"; done
  for f in object.*.md; do h=$(echo "$f"|sed -E 's/^object\.//; s/\.f[0-9]+\..*//'); e=$(grep -m1 '^essence:' "$f"|sed 's/^essence:[[:space:]]*//'); fld=$(grep -m1 '^field:' "$f"|sed 's/^field:[[:space:]]*//; s/[][]//g; s/field\.//g'); echo "OBJ	$h	[$fld]	$e"; done
  ```
- `titles.gdoc`/`phrases.gdoc` were cloud-only stubs; operator exported them to `.md` — now readable. Any future `.gdoc` in the seed folder needs the same export (File→Download→Markdown), it can't be read off disk.

## wants-word (operator's)
- **collect only, no solo sift.** Gathering candidates for the pool is fine; **selecting which become tuning-forks is the shared sift, later.**
- **imagery/concept pools before prompts** — the prompt set (drafted, in the dream's last-but-one append) stays parked until the pools exist.
- the dream is append-only; don't recut earlier passes to "fix" them — the sift sorts.

## gait
**[hold]** — operator closing out mid-dream. Floor clean (two dream appends committed, own path; this baton here). The corpus compile is understood and scoped but unwritten; resume at the next pull. Branch-0 corpus is READ-only for me (keeper's ground); the pool I produce is a mind-branch artifact at 102.
