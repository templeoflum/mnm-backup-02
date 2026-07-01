# note — leaf model & page naming — f1

Folds [[note.leaf-model.f0]] — the OPEN naming question is now SETTLED (operator 20260701).
Not yet built; feeds slice 14 revision.

## LOCKED — the leaf model

A zine is a stack of **leaves**, each leaf has **two sides**. Paper has two sides, so you
**add/remove leaves (pairs), never single pages** — a front + back stay married. Default =
**2 cover leaves**. Adding a leaf inserts a 2-side pair between the covers. Nav strip shows
**one chip per leaf**, not per side.

## LOCKED — the naming convention

Two coordinate systems, kept separate because they answer different questions:

- **Physical / imposition address** (not reader-facing):
  - covers `C1a C1b C2a C2b` — cover 1, cover 2
  - interior leaves `L1a L1b L2a L2b …`
  - side suffix `a` = **outer** side · `b` = **inner** side
- **Reader-facing page numbers** — their own sequence (page 1, 2, 3…).

Imposition is the **map between the two systems** (impose.js / slice 8).

Why this settles the f0 sticking points:
1. **positional, not semantic** — `C1/C2` is cover-ordering, not front/back. Stays true for a
   palindrome zine (both "front"), double-front, or other forms. Same instinct as `a`/`b` =
   outer/inner. The address is the location; meaning is not pre-assigned.
2. **no leaf# vs page# collision** — leaf/cover labels are the imposition slot; page numbers are
   the reading sequence. They never name the same thing, so `L2` and "page 3/4" don't compete.
3. **leaf numbers are addressing-only** — the reader never sees them; the imposition engine needs
   them to tell leaf 1 from leaf 2. "Irrelevant to the reader" and "leaves have numbers" are both
   true — two audiences.
4. **C vs L is a behavioral split**, not a physical one — a cover is physically the outermost leaf,
   but covers behave differently (undeletable, default-present, may carry no page number), so they
   get their own class.

links: [[frame.editor-composes-zine]] (chunk F, slice 14/15) · [[note.pool-and-portability.f0]] · [[note.leaf-model.f0]]
