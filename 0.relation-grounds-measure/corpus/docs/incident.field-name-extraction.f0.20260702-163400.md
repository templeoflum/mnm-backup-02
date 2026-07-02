# incident report — field-name extraction (the mine read by its labels, not its contents) — f0

keeper, 20260702, on the operator's word (lantern's mail carried the priority; the confirmed miss surfaced in [[dream.fable-2]] passes ~30–31). The corpus's region-#2 (esoteric) and region-#3 (coordination/cognition/channel/foundations/ML) builds ran an extraction that **researched each field's name from the web and never read the source documents.** The field canon landed; every document's own theses, syntheses, and specific sources fell out. A single-word stamp (`PROCESSED`) certified the result as done, with no vocabulary to mark that a *field had been derived* but a *document had not been mined*. **No bytes lost** — the mine is intact on disk; the damage is coverage (freight unextracted) and a false maturity signal (records marked `settled`/processed that were never content-mined). Full state-of-the-corpus findings + per-file map: [[audit.raw-extraction-fidelity]]. This report is the process RCA.

*(`incident` enters the document-type vocabulary here — the keystone's type list is open/[float], types join on use. Filed in `corpus/docs/` as a ground paper: the failure is the corpus's own, and the evidence is the records.)*

## §1 — timeline

1. **20260615–0616 — the three region builds run.** Region #2 esoteric from `research07–09`; region #3 (33 locked fields) across three orchestrated runs, **one web-research agent per field name**, with per-batch audit + reconcile + hard-review. +344 records → corpus 1429. Graph-clean each batch (reciprocity/dangling/dupes), sources deduped. The build was *procedurally careful* — the care was spent on graph hygiene and field canon, never on whether the documents were read.
2. **The stamp is set.** `raw.index` marks the dives + `research01–12` `PROCESSED`; region #2 "DONE & settled"; region #3 "EXTRACTED TO FLOAT." `PROCESSED` was internally understood as "a field was derived and its canon extracted" — but the word carries "the document became records," and nothing in the register distinguished the two.
3. **~20260702 (dream.fable-2, passes ~30–31) — lantern catches one.** The Asymmetry-of-Safe-Systems dive carries a full andon/jidoka/backpressure/stop-asymmetry payload; none became records, though the collect line named it explicitly. One confirmed content loss — which meant the mine could hold others, unseen.
4. **20260702 — full content-level audit (this pass, keeper).** All 21 raw files walked, item-by-item against 2188 records. The single miss generalized: **18/18 substantive documents fields-only or partial.** Only research09-Target-3A (`object.hermetic-drift`) was genuinely content-mined.

## §2 — root cause

**The extraction ran backwards: it researched the field name and matched the web's canon, when it should have read the document and mined the document's freight.** A field-name agent handed "stigmergy" independently rediscovers Grassé and Heylighen — the same names the dive cites — producing the *appearance* of extraction (overlapping records) without ever opening the source. The tell is everywhere in the result: records cite sources their own source document never mentions (the HRO cluster cites Roberts 1990 + Leveson 2009, absent from the Asymmetry dive; the esoterica stubs cite the Sledge library list, not `research07–09`), and cite *different works by the same author* than the documents use (hills-2015 not the doc's hills-2012; cohen-2007 not aston-jones-2005).

Two failures, one root:

1. **The process certified derived-a-field as mined-a-document.** The orchestration's unit of work was the *field name*, not the *document*. Its quality gates (graph reciprocity, dedup, canon review) all measured the field's internal soundness — none asked "does this record trace to a section of the source?" A careful pass over the wrong unit produces confident, clean, thin records. Procedural rigor is not fidelity: the batch audits were real and still missed everything, because they verified the field against its canon, not the field against the document.
2. **The stamp had no word for the difference.** `PROCESSED` is one state where reality has two: *fields-derived* (canon researched from the web) and *content-mined* (document read and extracted). With only the coarse word, the register could not have told the truth even if someone had asked it — the overclaim was baked into the vocabulary, not a lapse in filling it.

Contributing factor — **why it stayed hidden:** the false records are *plausible and locally correct*. `field.stigmergy` genuinely describes stigmergy; it is simply not this document's stigmergy. Nothing reads wrong at the record level; the gap is only visible by holding the source document beside the record and checking section-by-section — which no gate did until this audit. (Same family as the alias incident and the shared-index miss: a local signal — the record looks right, the exit code is 0 — trusted over the shared ground.)

## §3 — damage

- **Bytes: zero lost.** All 21 raw documents intact in `library/raw/`; the mine is fully re-mineable.
- **Coverage: the freight is unextracted.** The six dives' theses (stop-asymmetry, explore-then-reinforce, SHAPE/STEER/HOLD, the channeling grammars) and `research01–12`'s frontier/specialist sources never became records. Map in [[audit.raw-extraction-fidelity]] §per-file.
- **Maturity signal: false where it matters most.** Region #2's records carry `state: settled` — a dial that asserts the record was reconciled and content-checked against a named source. For all but research09-3A, that content-check never happened; `settled` claims an extraction that did not occur. Region #3 sits at `float` (honest as far as it goes), but its `PROCESSED` register stamp overclaimed.
- **Scope, bounded:** the loss is confined to the region-#2/#3 raw-research extraction. The earlier archaeological-canon corpus (measuring/mind/structure, the three compiled-card dives) is a separate lineage, not implicated by this audit.

## §4 — corrective (proposed to the operator, not self-ratified)

1. **Extraction reads the source first, corroborates on the web second — never the reverse.** The unit of extraction is the *document*, not the field name. A field name may be researched to enrich canon, but only *after* the document's own theses/sources are mined, and the record must trace to a section of the source. This single inversion closes failure 1.
2. **The stamp carries the two-state distinction** — **fields-derived** vs **content-mined** — already applied to `raw.index` this pass. No document is marked mined until a reader checked it against the records item-by-item. Closes failure 2.
3. **Re-gate the false-settled records.** The region-#2 esoteric records marked `settled` on an extraction that did not happen should drop to `float` (or a truthful marker) until re-mined — a settled dial must not assert an unperformed content-check. Flagged for the operator; a state change across ~20 records, not self-cut.
4. **Extraction verifies against the document's sections, not the field's expected canon.** The gate that failed asked "is the field's canon present?" The gate that catches this asks "is each of the document's sections represented, or explicitly ruled out?" Absence must be logged (the [[dont-hardcap-configurable-inputs]]/no-silent-caps discipline applied to extraction: what was dropped gets named).
5. **The re-mine is the remediation of record.** "What was missed gets mined out or explicitly ruled out, on the record either way" (operator). The backlog is prioritized in the audit doc; the re-mine is a scoped forward pass, source-first, awaiting the operator's word on sequencing — not started, because re-running the flawed method's successor without settling it would repeat the fast/false-fill this incident is about.

## §5 — cross-reference

- **lantern:** [[dream.fable-2]] passes ~30–31 — the catch; the Asymmetry miss traced in full, and the naming of the mechanism (agents researched field names, never mined the dives' content).
- **keeper (this seat):** [[audit.raw-extraction-fidelity]] — the content-level audit, per-file verdicts, re-mine backlog; `raw.index` stamp correction (commit `fbc55ee`); this report.
- **the register:** `raw.index` now carries the fields-derived / content-mined correction banner + per-region corrections.

links: [[audit.raw-extraction-fidelity]] · [[dream.fable-2]] · commit `fbc55ee` · [[audit.shared-index-race.f0]] (same family: a local signal — clean graph / exit 0 / plausible record — trusted over the shared ground) · [[audit.wiki-bridge-alias-incident.f0]] (same family)
