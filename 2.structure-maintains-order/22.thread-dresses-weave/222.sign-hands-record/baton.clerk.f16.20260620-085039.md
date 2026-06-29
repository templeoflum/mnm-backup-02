# baton — clerk — f16

closed: 20260620-085039 · gait: [hold] (operator burnt out after a long stretch — resting, resumes FRESH; first thing back is the "something feels off" on the ratio node, then the embed stays gated on his word) · folds from [[baton.clerk.f15]]

## what landed this session

The operator feel-tested the ratio module. Verdict: mostly good. Two fixes asked + done:

1. **Shared depth-menu (menu.js).** The ratio node's per-control config dropdown (min/max/default on each ratio/mult/offset control) was implemented differently from the smart param's menu. Pulled BOTH into one shared module — `createDepthMenu` + `wireDepthDrag`. Right-drag DOWN a control reveals levels by depth (1→min · 2→min/max · 3→min/max/default), latches, click-outside closes. Replaced the ratio node's instant-open `.kr-cfg` and the smart param's inline `.sp-menu`. **Operator's call: the ratio config should NEVER have been instant-open — depth-reveal is how it should've been built the first time, not a "cost."** So this is settled, not an open trade-off. Pre-pays the embed (menus already share one format). Commit `764e715`.
2. **Native context menu killed page-wide** — one `contextmenu` preventDefault in `main.js`. Right-drag is a control gesture here; the value-zone right-click reset still works (element handlers still run). Commit `59b4b36`.

Rig 33/33 green (updated the 3 menu checks to `.kmenu`; deepened the ratio-config drag to 96px so all 3 levels reveal). No console errors.

## state (live threads — 3, healthy)

- **THE RATIO MODULE — built; config menus now on the shared depth-menu format.** Home `211/kit`. `menu.js` (shared depth-menu), `ratio.js` (pure math, rig-checked), `ratio-system.js` (the part), `smartparam.js` (also uses `menu.js` now). Domain (0,1] with 1=unison, inert default r=1/m=1/o=0.
- **"SOMETHING FEELS OFF" — undiagnosed (new this session).** After the shared-menu change, the operator said something still feels a bit off — did NOT name what. Could be the menu feel, the ratio node generally, or unrelated. Do NOT guess-fix; first thing back is to have him point at it. See wants-word.
- **THE EMBED — designed, NOT built (the gated follow-on).** Module becomes each smart param's drive: replace the param's right-side animation menu with the full module (full-size, extending right); flip the sides (right-drag LEFT half → module, RIGHT → min/max/def); rewire param drive to consume the module's φ. Invasive — touches shared `smartparam.js` + the workbench drive loop for EVERY param. Still gated on the operator's word.

## next pull (ONE)

**When the operator is back fresh: have him point at what "feels off" on the ratio node, diagnose it together, adjust.** THEN the embed remains the gated follow-on (do not start the embed before his greenlight, and likely not before the off-feel is resolved).

## snags

- **the undiagnosed "feels off"** — top of the list, needs the operator to name it. Don't fix blind.
- **frame.ratio-system.f1 STALE** — still says `ratio ∈ [0,1)`, no config menus / inert / input-selector, and now also doesn't mention the shared menu. The COMMITS carry true state. Fold f1→f2 when the embed lands (one fold, not many).
- LF→CRLF git warnings on every kit commit (cosmetic).
- **pre-existing uncommitted (NOT mine, untouched since session start)**: `201/manifest.live.md`, `222/log.session.f13+f14`, branch-0 `quarantine/` + `mythic library/`.

## wants-word

- **what specifically feels off** about the ratio node / menu (he'll point when fresh) — the whole next pull hinges on this.
- the embed layout when we get there (module full-size extending right from the param).

## carry

- **No new memory this session.** The "instant-open was wrong, depth-reveal is right" is captured here + in the commit, not worth a memory file (it's project-specific, the corpus/git holds it).
- **Resume:** read this baton → operator (rested) names what feels off → diagnose + adjust together → embed stays gated on his word. Rig is the correctness gate (`node dev/verify.mjs` from `211/kit`, expect 33/33; it self-serves port 8917 — kill any stale rig holding that port first). No tsc installed in this env; the rig + "no console errors" is the runtime gate.
