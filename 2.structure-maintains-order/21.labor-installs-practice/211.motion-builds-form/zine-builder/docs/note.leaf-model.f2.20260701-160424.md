# note — leaf model & page naming — f2

Folds [[note.leaf-model.f1]] — corrects the side-suffix definition. f1 said `a`=outer /
`b`=inner; on eyeing the built slice 14 the operator caught that this can't hold for both
covers (they face opposite ways). The scheme is otherwise unchanged.

## LOCKED — the leaf model

A zine is a stack of **leaves**, each leaf a sheet with **two sides**. You **add/remove
leaves (pairs), never single pages**. Default = **2 cover leaves** C1·C2. Adding a leaf
inserts a 2-side pair between the covers. Nav shows **one chip per leaf**.

## LOCKED — the naming convention

Two coordinate systems, kept separate because they answer different questions:

- **Physical / imposition address** (not reader-facing):
  - covers `C1a C1b C2a C2b` — cover 1, cover 2
  - interior leaves `L1a L1b L2a L2b …`
  - **side suffix follows the leaf's READING ORDER**: `a` = the side met **first** on
    opening the zine, `b` = second.
- **Reader-facing page numbers** — their own sequence; carried only by interior sides
  (`L1a` = page 1, `L1b` = page 2…). Covers carry none.

Imposition is the **map between the two systems** (impose.js / slice 8).

### the correction (f1 → f2): a/b is reading order, NOT outer/inner

`a`/`b` cannot mean outer/inner, because the two covers face **opposite ways** — their
outer faces can't both be `a`. What is consistent is reading order:

- **C1** (front leaf): `a` = front cover (met first) → here `a` is the outer face.
- **C2** (back leaf): `a` = inside back (met first), **`b` = back cover** — the outer face,
  and the very last surface of the zine.

So **outer/inner is a derived property that flips**: the outer cover is `C1a` on the front
leaf but `C2b` on the back leaf. The whole strip then reads straight through,
`C1a C1b … C2a C2b`, last side = back cover.

Everything else from f1 still holds:
- **positional, not semantic** — `C1/C2` is cover-ordering, not front/back; stays true for
  palindrome / double-front forms.
- **no leaf# vs page# collision** — leaf/cover labels are the imposition slot; page numbers
  are the reading sequence; they never name the same thing.
- **leaf numbers are addressing-only** — the reader never sees them.
- **C vs L is a behavioral split** — covers are undeletable, default-present.

links: [[frame.editor-composes-zine]] (chunk F, slice 14/15) · [[note.pool-and-portability.f0]] · [[note.leaf-model.f1]] · [[note.leaf-model.f0]]
