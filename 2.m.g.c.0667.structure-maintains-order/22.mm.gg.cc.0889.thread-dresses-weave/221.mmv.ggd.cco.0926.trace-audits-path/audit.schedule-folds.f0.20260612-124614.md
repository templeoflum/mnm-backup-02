# audit — schedule folds — f0 — how the master index eroded

address: 221 (trace·audits·path)
cut: 20260612, on operator word — he opened schedule.lattice.f8 expecting the master index of all work and found the current season's task list. Order: restore, then trace where we went wrong. Both misses named by him at the order: the clerk's (kept folding what should accumulate) and his own (watched the f-count rise without checking).

## the rule, as the operator stated it (20260612)

**The schedule is the schedule — it just accumulates.** Adding new work is appending; rearranging is reorganizing; both happen in place, no fold. A fold is earned only by:
1. **completion cleanup** — done work cleaned out of the living layer, or
2. **format change** — the document's shape deliberately redrawn.

This rule was not on the books before today. The general fold guideline ("integration or rupture earns a fold" — carried in memory since 20260610) was the only trigger in play, and it is the wrong trigger for this document class. That gap is the root of everything below.

## the trail, fold by fold, judged against the rule

| fold | date | what earned it (as written) | verdict under the rule |
|------|------|------------------------------|------------------------|
| f0→f1 | 06-05 | manifest rebuilt, audit findings resolved, arrivals | **earned** — completion cleanup (audit findings), early format still forming |
| f1→f2 | 06-06 | frame.core executed; A1–A3/A7/A8, B1/B6, C2 done | **earned** — completion cleanup |
| f2→f3 | 06-09 | warehouse frame executed (H done), A6 resolved; D/F/J dropped | **earned** — completion cleanup + deliberate reorg |
| f3→f4 | 06-09 | TS handoff received, chunk O ADDED | **unearned** — pure addition. Should have been an append. **First wrong fold, and the erosion mechanism is born in the same fold: "A–H: unchanged from f3."** |
| f4→f5 | 06-10 | division of labor noted, chunk P ADDED | **unearned** — pure addition. "A–O: unchanged from f4." |
| f5→f6 | 06-10 | chunk P executed in full | **earned** — completion cleanup. But the referencing pattern rides along. |
| f6→f7 | 06-10 | "Integration earns the fold" — task combine; chunks Q, R ADDED | **unearned in the main** — mostly addition; the fold reason cites the general document rule verbatim, the clearest evidence the wrong trigger was driving. Small closures (their Q6, T14→R8) don't carry it. |
| f7→f8 | 06-12 | season sorted in the tasks-compiled review | **fold trigger arguable** (a real re-sort happened — could read as format change), **but the format change was never discussed and it dropped the document's function**: gate map gone, all chunk tables gone, everything resting compressed to one paragraph. The master index ceased to exist anywhere current. |

## the mechanism (how, not just where)

1. **Wrong trigger applied.** "Integration earns the fold" is the general rule for versioned documents. The schedule is an **accumulator** — closer kin to the manifest than to a frame. Its folds are earned only by completion cleanup or format change. No per-type trigger existed, so the general one filled the vacuum.
2. **Over-folding made restatement expensive, and referencing was the discount.** Each unearned fold raised the cost of restating the whole index, so "unchanged from fN" crept in (born at f4, the first unearned fold — not a coincidence). Each fold thereafter carried less. f8 just completed a curve that started four folds earlier.
3. **The question that would have caught it was on the books, unanswered.** "Fold-discipline per-type triggers" has been a named watch-item since before f7 and was carried in f8's own standing line. We named the exact missing rule and let it ride as a watch-item while the miss it would have prevented was actively unfolding in the same document carrying it.
4. **The system flagged the symptom while committing it.** f8 tags itself "exhibit #2" for R4 (task-list format). The format question was visibly open; f8's shape was an implicit answer to it that skipped propose → discuss → settle entirely.
5. **No tripwire on fold rate.** Nothing watches f-count per document type. H14 (fold ceiling UI) watches only the f39 error. Eight folds in seven days on a document that should accumulate drew no signal; the operator caught it by eye, late — his named miss, and the cheaper fix is instrumentation, not vigilance.

## the misses, named

- **Clerk:** folded the schedule on integration four times (f4, f5, f7, and the compression half of f8); let referencing hollow the index; answered the open R4 format question implicitly instead of surfacing it. The f8 compression was a drafting choice made live during the review, never proposed.
- **Operator (his own word):** watched the f-count rise without checking the document; the schedule going f4→f8 in three days should have been the tell.

## correction applied

- **schedule.lattice.f9** — restoration fold, earned as format correction by operator word. Full master index restated whole; the accumulator rule written into its header. From f9 forward the schedule accumulates in place.
- **Memory recarved** — fold-discipline-nuance gains the document-class distinction: accumulator documents (schedule, manifest-class) fold only on completion cleanup or format change; integration does NOT earn their folds.
- **Not repaired backward** — f4–f8 stay as they lie, named here. Mis-folds carry forward per standing practice.

## residue for the books

- The per-type fold-trigger watch-item is now half-answered: accumulator class defined by operator word. Triggers for the remaining types (log? count? survey?) still float — the watch-item stays open, narrowed.
- A fold-rate signal (per-type, in the lattice or /reconcile) is a candidate task — would have caught this at f5. Proposed for the W5/W6 neighborhood, operator's call whether it enters the season or rests.
