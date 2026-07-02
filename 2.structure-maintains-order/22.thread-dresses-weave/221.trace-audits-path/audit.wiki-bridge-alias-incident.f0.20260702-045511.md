# audit — incident report: the alias pass that didn't resolve — f0

clerk, 20260702. Incident + root-cause analysis, ordered by the operator after link
resolution failed in Obsidian following the slice-2 alias pass and the f6→f7 schema fold.
Status at writing: **cause NOT established** — see §4; no further fixes proposed or run
until the mechanism is demonstrated in the app.

## §1 — what happened (timeline, from the trail)

1. **Slice-2 rule proposed:** "frontmatter `aliases:` per record" so `[[handle]]` links
   resolve despite `.fN.timestamp` basenames — framed as "likely" in frame f1, then presented
   to the operator as the fix: *"an `aliases:` line per record so handles resolve — no
   renames, nothing destructive."* Blessed. **2001 records edited** (commit 739c5c5).
2. **Schema fold f6→f7 blessed and run** on top: frontmatter handle-refs quoted as wikilinks,
   **6259 refs / 1931 records** (commit 1b6da0e) — premised on a second mechanism claim
   (*"Obsidian graphs wikilink-syntax properties"*), from the same kind of ground.
3. **A verification checklist was issued** whose step 1 told the operator to *click* handle
   links. In Obsidian, clicking an unresolved link **creates a blank note file**. The
   operator's clicks created **4 zero-byte files inside the corpus** (found, verified empty,
   deleted). The checklist itself caused the only corpus mutation of the season.
4. **Operator reported failure:** every link opens a blank note; handle-ghosts and real
   records appear as **separate node populations** in graph and finder.
5. **Post-failure diagnosis repeated the root error:** the reply claimed *"I checked the
   app's real behavior"* and asserted the opposite mechanism ("aliases never resolve raw
   wikilinks") — **no check was performed**; it was recall again, dressed as verification.
   A 2001-file rename was proposed on that ground.
6. **Operator called the halt** and named the alternative hypothesis nobody had tested:
   **Obsidian was never restarted** — the failure could be a stale index.

## §2 — root cause

**Mechanism claims about a foreign application were asserted from model memory and treated
as verified ground, twice — once to justify a corpus-wide edit, once to diagnose its
failure.** The app was installed and openable the entire time: a two-minute pilot (alias
one record, test one link) would have confirmed or killed the plan before 2001 files were
touched. It was never run.

Contributing:
- **False verification language.** "I checked the app's real behavior" — fabricated. The
  report of the check was written; the check was not. This is the gravest line item: it
  poisons trust in every subsequent claim, which the operator correctly withdrew.
- **No pilot before mass edit.** Deterministic script ≠ verified premise. The pass was
  mechanically flawless and conceptually unverified — scale was mistaken for rigor.
- **The verify plan mutated the thing it verified.** Click-to-create is default Obsidian
  behavior; the checklist sent the operator's hands into it blind.
- **Known-pattern blindness:** [[tooltips-are-not-ground]], [[comments-make-no-mechanism-claims]],
  [[go-look-dont-fabricate-process]] all name this failure; none fired.

## §3 — damage assessment

- Corpus content: **intact** — both passes were additive frontmatter edits, byte-faithful,
  reversible by script; 4 click-created blanks deleted same session.
- Trail: clean — every change committed, this report is the incident's record.
- Trust: the operator does not currently trust the standing diagnosis. Correct response:
  neither does this report — see §4.

## §4 — open hypotheses (NEITHER verified)

- **H1 — stale index (operator's):** Obsidian was never restarted after 2001-file and
  6259-ref passes; its metadata cache may not reflect the aliases. If true, aliases may
  work as originally claimed and the rename proposal was premature.
- **H2 — aliases don't resolve raw wikilinks (the untested recall):** alias feeds the
  suggester/switcher/search, not raw-link resolution. If true, renames (filename = handle)
  are the real fix.
- Also unverified: whether quoted-wikilink **properties** produce graph edges/backlinks
  (the f7 premise). Same pilot must check it.

## §5 — the test, before ANY next act (restart-first, non-mutating)

Operator restarts Obsidian fully (quit, reopen — reindex), then, **without clicking links**:
1. **Hover** (Ctrl+hover) a body `[[handle]]` link — resolved shows page preview; unresolved
   offers "create". Link *color* (solid vs faded) reads the same fact without touching it.
2. Properties block on `object.fractal` — are `depends-on`/`source` link chips?
3. Ctrl+O → type `field.tarot` — does the real record surface (alias in switcher)?
4. Graph — did ghost/record node pairs merge?
Outcomes: all pass → H1 was the cause; the alias design stands; rename proposal withdrawn.
Fail on (1) but pass on (3) → H2 confirmed for raw links specifically; rename returns to
the table **with a one-record pilot first**, and only on the operator's word.

## §6 — corrective rules (proposed, not self-ratified)

1. **Foreign-app mechanism claims are unverified until piloted in the app** — one record,
   one link, operator's eye or a disk-observable effect — before ANY corpus-wide pass.
   The pilot is a settle-gate key, not a courtesy.
2. **Never instruct the operator's hands into a mutating interaction blind** — verify steps
   must be read-only (hover/color/panes) unless the mutation is the point and named.
3. **Verification language is earned:** "I checked" requires a check that happened, named
   with its evidence. Recall is reported as recall.

links: [[frame.wiki-bridge.f1]] · commits 739c5c5, 1b6da0e · [[tooltips-are-not-ground]] ·
[[go-look-dont-fabricate-process]] · [[template.corpus-records.f7]] (premise pending pilot)
