# note — pool & portability — f0

The shape settled in discussion (operator 20260629), before chunk C. Forward
design; not yet built. Reshapes the pile (slice 4) and informs export (chunk D).

## spine: static-first

The editor stays a **single static page** — upload content → compose → export.
No backend. That portability *is* the feature: forks anywhere, anyone runs it.
Everything connected is optional and hangs off this core.

## the pile is a SOURCE PROVIDER, not a fixed thing

The editor asks a pool for *list items* + *this item's content*; it does not know
the backend. Providers slot behind one interface:

- **upload pool** — in-memory `FileList`. Pure static. Built (slice 4). Always present, the default.
- **local folder pool** — `showDirectoryPicker()` (**File System Access API**): reads AND writes a
  real folder **entirely client-side** — still a static page, **zero portability cost**. Caveat:
  Chromium-only, secure context (https / localhost). The first connected provider to build.
- **Drive pool** — OAuth + network. Can be backend-less (client-side Google API, static-hostable)
  but drags in auth → **rides the hub/deploy system** (already parked), not the portable core. Later.

## export mirrors it (the terminal seam, Fork B)

Render pages → Blob → download = fully static. If a folder provider is connected, also offer
"export into that folder." Same swappable-seam idea as the pile, on the output end.

## consequence for slice 7 (save/iterate)

Persistence follows the same logic: **no folder** → a downloadable project file (JSON) re-opened by
upload, and/or `localStorage`; **folder connected** → write the project file there. The portable
baseline (project file) is what chunk C builds; folder-write arrives with the local-folder provider.

links: [[frame.editor-composes-zine]] · [[note.zine-builder-walk.f0]]
