# audit — schedule genre — f0 — the second drift, and why the first fix caused it

address: 221 (trace·audits·path)
cut: 20260615, on operator word — he opened schedule.lattice.f10 and could not read it as a nav document; it had picked up "a bunch of recall language." Order: trace why, cut the audit, then reshape f10 to a clean nav doc.
extends: [[audit.schedule-folds.f0]] (the first drift — scope narrowing, f4→f8). This is the SECOND drift, distinct, and it post-dates that audit.

## the two drifts are different

| | drift #1 (audit.schedule-folds.f0) | drift #2 (this audit) |
|---|---|---|
| what | the master index narrowed to the current season | the schedule turned from a nav doc into a journal |
| axis | **scope** — how much of the work is shown | **genre** — what kind of document it is |
| span | f4 → f8 | f9 → f10 |
| caught | f8, by the operator's eye | f10, by the operator's eye |
| fixed by | f9 restoration + the accumulator rule | this audit + the f10 reshape |

Drift #1 was a 202 document losing its **coverage**. Drift #2 is a 202 document taking on **222's job**. Naming them apart matters: the fix for #1 is what opened the door to #2.

## the mechanism — the cure for #1 caused #2

The accumulator rule (operator word 20260612, written to stop drift #1): *the schedule accumulates — append in place, fold only on completion-cleanup or format-change.* Correct rule. But it bundled two different motions under one word, **append**:

1. appending **sorted work** — a new chunk, a new row, a re-sort, a status flip. This is 202 (schedule·sorts·inventory). The schedule's actual job.
2. appending **records of work** — "SWEEP EXECUTED," "TEN DECISIONS — operator word," "W2 RUN — 5 of 7 built," "nul CAUSE HUNTED." This is recall. This is 222 (sign·hands·record).

The rule said "append in place." The natural reflex during a working session is to append a **dated narrative entry of what just happened** — so motion 2 is what actually got appended, session after session. The schedule grew a journal inside itself.

## the evidence, fold by fold

- **f0 (06-05)** — pure nav doc. Gate map + chunk tables (`slice | description | catches | gates | status`). Forward-looking. Zero recall.
- **f3 (06-09)** — nav intact, but grows a **"Changes since f2"** changelog block (first backward-looking prose) + a "Schedule notes" tail.
- **f7 (06-10)** — the **"Annotations / accumulation since the fold"** section appears: dated narrative entries (`[timestamp] **X — DONE**`). The journal is born. Older chunks start collapsing to "A–P: unchanged."
- **f9 (06-12)** — restoration fold (fixes drift #1: full index restated). BUT the **"Append below this line"** section is now official, and it grows to **~30 dated narrative paragraphs** (decisions, root-causes, operator-words, per-session build logs). That section is a session log wearing a schedule's filename — indistinguishable in genre from the log.session entries at 222.
- **f10 (06-15)** — completion-cleanup fold. It cleaned the *done season* out, but instead of returning to a nav doc it compressed the real nav inventory (gate map + chunk tables) into **one dense paragraph** ("STANDING INVENTORY — chunks, compressed") and kept the recall apparatus: a "THE SEASON JUST CLOSED" retrospective, roadmap prose, and a fresh "Append below this line." The document inverted — nav became a footnote, recall became the body. This is the state the operator could no longer read as a nav doc.

## the root, in keystone terms

The schedule lives at **202 — schedule·sorts·inventory**. Its job is to *sort and show the forward map*: what is the work, how is it sorted, what gates what, what is the status. The recall — what happened, when, by whose word — is **222 — sign·hands·record**. The drift is a 202 instrument absorbing 222's function. Every dated narrative entry in the schedule is a 222 log line in the wrong house.

The operator's standing instruction names the correct behavior exactly: *the schedule should reflect completions as we do them — if work is completed the schedule reflects it — but it should not accrue notes on it.* A completion is a **status flip on a row** (202, in place), not a **narrative entry about the completion** (222).

## the system already half-knew

- **R4 (task-list format)** has been open the whole time; the schedule's own folds tagged themselves "exhibit #2, exhibit #3" for it.
- the **per-type fold-trigger watch-item** named the missing rule; drift #1's audit half-answered it (accumulator class defined).
- neither reached the genre question — they were both about *when to fold*, not *what genre the document is*. This audit answers the genre question: **the schedule is a sorted forward map; it carries status, never story.**

## correction applied

- **schedule.lattice → reshaped in place** (this session, operator word) to a clean nav doc: gate map + chunk/slice/gate/status tables + the season sequence. Status flips in place as work completes; **no dated narrative, no "by operator word," no retrospective prose.** A completion is a row state, not a log entry.
- **the recall moves to 222** — the dated narrative (decisions, root-causes, operator-words, per-session build logs) belongs in the session logs / decision log already at 222, and in the baton. The schedule cites a status; it does not tell a story.
- **completion-cleanup folds** now just **delete done rows** — no "SEASON JUST CLOSED" retrospective, because that record already lives at 222.
- **not repaired backward** — f0–f10 stay as they lie (f9's append-log is preserved trail). Mis-folds carry forward per standing practice.

## residue for the books

- The per-type fold-trigger watch-item gains a companion: a **per-type GENRE line** — 202 sorts (status, forward), 222 records (story, dated). The accumulator-vs-versioned distinction was about fold timing; this is about document function.
- Watch the reshaped schedule for the same reflex returning: the pull to append a narrative entry at a completion is strong (it is how a working session thinks). The discipline is to flip the row here and write the story at 222.
- The naming/keystone rework (deferred to the fresh-start) should carry the genre distinction into whatever the schedule becomes.
