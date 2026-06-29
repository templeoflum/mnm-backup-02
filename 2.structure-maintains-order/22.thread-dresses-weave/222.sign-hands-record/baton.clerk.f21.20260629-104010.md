# baton — clerk — f21

closed: 20260629-104010 · gait: [work] · folds [[baton.clerk.f20]]

**next pull = editor slice 2 — place an atom** (drop an image / text block onto the page), per [[frame.editor-composes-zine]] chunk A. Slice 1 (the sized SVG page) is built + **eye-confirmed**; the unit is live at **211**.

## what landed this session (all committed)
- **event-suite intake + walk.** Three builder stubs (zine / class / flyer) received from keeper's quarantine onto the clerk's dock (200); **zine-builder framed and installed at 211**. Suite shape + tooling captured in `211/zine-builder/note.zine-builder-walk.f0`: two surfaces (**hub · compose**) on one property (**iterate**); in-house, **no Adobe**, buildless browser JS; the hub is served by a **deploy-push** (lattice→Pages, its own future frame); Canva out of the spine; editor first, hub second, flyer last.
- **[[frame.editor-composes-zine]] f0** — triad blessed, SVG settled; chunk A→D, MVP-first.
- **editor slice 1** — `src/page.js` (sized SVG page, viewBox = the physical page) + `page.proof.js` 5/5 + `index.html` + `package.json` (ESM); **eye-confirmed (index loads, page renders + resizes).**
- **snag walked — the rename's addrPath 404.** The address-shorten rename missed the visualizer's **generated** long-form path builder; opening the new unit 404'd. → [[incident.rename-missed-addrpath]], fixed `lattice.f2 addrPath` (→ `${sub}.${TRIADS[sub]}`), guard `test_visualizer_paths.py` (red-first), corrected `frame.address-folders-shorten`. Reload the visualizer to load it (operator confirmed: index loads now).
- **process — receive-before-walk.** → [[incident.intake-out-of-order]]: we walked before docking; receive-first is an **intentional** clerk step (not an auto-scan).

## state (live threads — 1)
1. **zine-builder editor build** — at 211, chunk A slice 1 done; slices 2–8 + later (scatter · Drive-submissions · PDF-export Fork B) ahead. Hub + deploy-system are separate, later.

## loose ends (operator: note + address later)
- **latent addrPath copies** — `220/lattice.html` has the same long-form builder but is **not launched** by `lattice.bat` (dormant); `211/lattice.f0,f1` are frozen folds. → fix `220/lattice.html` or leave dormant.
- **`settings.local.json`** — ~20 long-form paths in the permission allowlist (cause prompts, never a 404) → clean when convenient.
- **zine-builder unbooked in the ledger** — the deferred **per-project manifest.count** ([[frame.unit-marker]]'s multi-seat piece); unit relocations leave no ledger row until it's built. Context in [[incident.intake-out-of-order]].
- **class-builder + flyer-content-builder** — at the 200 dock, unframed; their own frames when their season comes (flyer last).

## wants-word
- 220/lattice.html — fix the latent addrPath, or leave dormant?
- otherwise resume straight to slice 2.

## carry
- **operator builds by hand** — the editor is a direct-manipulation instrument; slices center the hand, not a coder catalog.
- **checks are a net** — node-proof green ≠ done; the operator's eye is the gate.
- **a literal grep can't audit a generated path** — the addrPath lesson; the guard covers that class now. Test the *open-file* path, not just read.
