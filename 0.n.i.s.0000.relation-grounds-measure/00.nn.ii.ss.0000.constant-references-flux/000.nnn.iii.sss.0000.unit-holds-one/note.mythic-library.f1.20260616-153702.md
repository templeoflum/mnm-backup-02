# note — mythic-library — f1 · intake catalog (post-cleanup)

opened 20260616-153702 · keeper · gait [walk] · folds from [[note.mythic-library.f0]]
subject: the `mythic library/` folder in **000** (unit·holds·one) — prior project, now stripped to data + concepts, awaiting grounding.

**Status: still QUARANTINED.** Cleanup changed the *shape*, not the trust. Nothing here is signed; nothing crosses into the corpus or any branch until grounded.

f0 = pre-cleanup survey snapshot (what was dropped, full breadth). This fold = what remains and why.

---

## cleanup performed (operator-agreed, this session)

Operator's call: *"we're really just looking to get the data and concepts out, anything else can go — it's all backed up."* Executed in two passes.

**Pass 1 — machinery (unambiguous):** removed `.git` (849M nested repo — the bulk), `.github`, `.gitignore`, `.claude`, `.pytest_cache`, all `__pycache__` (8) + `*.pyc` (37). → resolved **E1** (no more repo-inside-repo floor hazard).

**Pass 2 — tooling + derived layers (agreed cut):** removed `scripts/` (pipeline), `validation/` (suite code), `integration/` (bridge code), `tests/`, `data/` (164M — 137M binary db + derived extractions), `outputs/` (17M — generated reports/metrics/audits), and `CHANGELOG.md` · `INTEGRATION_SETUP.md` · `requirements.txt` · `explore.bat`.

Net: **2.0 GB → 985 MB.** All removed material exists in the operator's backup of the source repo; recoverable if ever needed. Rationale: we re-ground into *our* system with *our* methods, so the old code is not needed; the derived `data/`/`outputs/` are contaminated and regenerable from source, so they are not kept as ground.

**E2 (path-length casualties) — RESOLVED before the cut.** The 8 files that never reached disk (all in the one over-long north-american text) were recovered from the nested git's object store *by blob SHA* (`git ls-tree` → `git cat-file -p` — bypasses the path that `git show` choked on) and rewritten under a shortened folder: `texts/north-american/mississippi-valley/` (was `…myths-and-legends-of-the-mississippi-valley-and-th`). Filenames shortened (dropped the repeated text-id prefix; `seg_002` truncated). `best.txt` and `gutenberg.txt` are byte-identical (same blob). The text is now whole — nothing was actually lost in the drop.

---

## what remains (985M — all content)

| area | files | size | what it is | layer |
|------|------:|-----:|------------|-------|
| `texts/` | 4737 | 978M | source texts, `{tradition}/{text-id}/` = SOURCES.md + downloads/ + normalized/ + segments/ | **SOURCE** |
| `ACP/` | 127 | 5.0M | the protocol: schema (axes/primordials/relationships) + 997 archetypes (JSON-LD) | **CONCEPT / CLAIM** |
| `miroglyph/` | 43 | 1.6M | browser explorer tool (Atlas/Codex/Chronicle + Journey Mapper) | **TOOL → hand off** |
| `sources/` | 12 | 929K | build-metadata: master_catalog.csv, curated_sources, corpus_audit, schema | meta / provenance |
| `docs/` | 6 | 132K | DEVELOPMENT.md (Phases 1–12), gap_analysis_v3.md — the project's honest record | meta |
| `README.md` | — | 19K | the manifest of claims | meta |

### texts/ by tradition (33) — unchanged from f0
indian 1189 · european 705 · celtic 350 · roman 264 · greek 238 · japanese 222 · chinese 211 · norse 172 · persian 164 · anthology 156 · siberian 108 · north-american 106 · mesopotamian 93 · polynesian 87 · egyptian 86 · southeast-asian 82 · mesoamerican 46 · oceanic 42 · australian-aboriginal 37 · south-american 31 · slavic 28 · arctic 15 · korean 15 · hebrew 14 · germanic 10 · zoroastrian 8 · turkic 3 · levantine 2 · tibetan 2 · baltic 1 · mongol 1 · other 1

---

## contamination read (carry from f0 — provisional)

The cut hardened the boundary: the noisiest derived layers (`data/`, `outputs/`) are gone. What remains splits:
- **SOURCE (likely groundable):** `texts/` — public-domain, per-text `SOURCES.md`. Each still needs provenance + public-domain status checked, and the normalize/segment processing examined (processing can inject error).
- **CONCEPT/CLAIM (quarantine):** `ACP/` — the 8D coordinates and relationship ontology. Reformat target, but believe none of the coordinates on sight.
- **record-of-claims (read, don't trust):** `README.md`, `docs/` — useful precisely as *what was claimed*, to refute against.

**The tell (carried):** the original falsification failed — *1D "same tradition?" (|r|=0.36) beat the full 8D ACP (|r|=0.09)* — and "Verdict: STRONG" came from changing the question (v1→v2), not confirming the claim. (#221: findings protecting a stale frame.)

### claims to refute-or-confirm (checklist — none checked)
- [ ] text/tradition count ("132/32" vs on-disk tree, which reads higher)
- [ ] "997 archetypes, 60+ systems, 95% rich+"
- [ ] 8D coordinates + empirical weights (creation-destruction 2.17 … ascent-descent 0.20)
- [ ] "Validation STRONG / 6 tests pass" vs the buried v1 failure
- [ ] "87.5% expert concordance" — who were the experts? (likely model-generated)
- [ ] DB-scale claims (4000 segments / 173 entities / 28104 mentions / 579 motifs) — **note: the DB is now cut; verify against texts directly or from backup**
- [ ] the 18 cross-cultural "patterns"

---

## edges

- **E1 — RESOLVED** (nested .git removed).
- **E2 — RESOLVED** (8 casualties recovered to `texts/north-american/mississippi-valley/`).
- **E3 — open:** the 985M tree is **untracked in our repo**. Separate decision (deferred): commit it into our git, or hold as working material to mine? Not committing under `mythic library/` until settled.
- **E4 — closed** (build cruft removed in pass 1).

---

## walked vs. not

- **walked:** top-level shape (now cleaned), texts/ tradition breakdown, README claims, sample text layout, manifest reconciliation, path-length recovery.
- **not walked:** inside any tradition (4737 files), `docs/DEVELOPMENT.md` (the honest Phase 1–12 log), the ACP schema + archetype JSON-LD, `sources/` metadata, the miroglyph tool.

---

## next pulls (for discussion)

1. **Read `docs/DEVELOPMENT.md`** — the project's own session log; fastest route to *done vs. claimed*. (my lean for the next pull)
2. **Settle the corpus format** for mythic source texts — extend `template.corpus-records`, or a myth-specific shape.
3. **Decide intake order** — texts first (operator's stated order), then ACP.
4. **E3** — whether/how the tree enters our git.

This note grows as the walk continues. Held provisionally throughout.
