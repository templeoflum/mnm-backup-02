# incident — rename missed the visualizer's path-builder — f0 — trace·audits·path

stamp: 20260629-103148 UTC · status: **root-caused — fix + guard follow** · surfaced opening the first new unit (zine-builder) after the address-shorten rename ([[frame.address-folders-shorten]], 21833db)

## what happened

Opening `211/zine-builder/index.html` via the **live visualizer** (refresh → browse into the unit → click the file) returned **404**. The URL was **full long-form for every segment**:
`…/2.m.g.c.0667.structure-maintains-order/21.mv.gd.co.0778.labor-installs-practice/211.mvv.gdd.coo.0815.motion-builds-form/zine-builder/index.html` — folders that no longer exist after the rename to `{digit}.{triad}`.

## root cause

The shorten-rename changed `server.resolve()` to emit `{digit}.{triad}` and updated tooltip/label data, but **missed the visualizer's file-path builder.** `lattice.f2…html` `addrPath()` (the file `lattice.bat` launches) builds:

```js
parts.push(`${sub}.${a.role}.${a.mode}.${a.register}.${a.ratio}.${TRIADS[sub]}`);  // full long form
```

`window.open(addrPath(...) + '/' + sub + '/' + file)` (open a file in a new tab) uses it → long-form URL → 404. **Reading and navigating** use `/list/{digits}` and `/read/{digits}` — digit-keyed, already short — so they worked, masking the break.

## why it wasn't caught

1. **Tested the wrong path.** The rename verify (E2) confirmed *navigate* + *read-content* — both digit-keyed endpoints, already short. The **only** consumer of `addrPath`'s full path is `window.open` (open a file). It was never exercised. Reading a file's content ≠ opening its URL.
2. **The safety sweep was a literal `git grep`.** `addrPath` *generates* the long form by template — there is no literal old-name string to grep. The risk register's "grep once more" (and the re-grep during this analysis) cannot see a generated path. Kin to [[declared-is-not-executed]]: the frame declared "no long-form path-ref left" — true for literals, false for generators.
3. It only manifests on a **new unit added after the rename** (zine-builder); nothing pre-existing was opened-as-a-file post-rename to surface it.

## blast radius

- **live (the bug):** `211/lattice.f2…html` — launched by `lattice.bat`.
- **latent / dormant (not launched):** `220/lattice.html` (same builder); `211/lattice.f0,f1` (older folds, frozen as trail — an even earlier form, no triad). Left as-is; flagged here.

## fix + guard

- `addrPath` → `` `${sub}.${TRIADS[sub]}` `` (short, = `server.resolve()`).
- `test_visualizer_paths.py` — reads the `lattice.bat`-launched visualizer and asserts `addrPath` builds the short form (**red** against pre-fix f2). Catches the class: a client path-builder diverging from `server.resolve()`.

## landing

22 trace·audits·path → the rename was complete for everything that **resolves** by digits; it missed the one place that **constructs** a filesystem path on the client. The catch-gap is the lesson, carried into the guard: **test the open-file path, not just read; and a literal grep cannot audit a generated path.**
