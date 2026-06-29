# note — zine-builder walk — f0 — 20260629-082019

The shape of the zine-builder, got by walking it this session. Not a frame, not a plan — the shape, so we don't lose it. Knobs left as knobs. Co-located with the event-building material it concerns; quarantine, untracked.

## suite context (standing decisions that emerged in the walk)

- **layered kit.** The kit is the ethos, not the oscilloscope: an agnostic, reusable dev suite for any software (UI + signal/clock). These content tools share that ethos, geared at content output. They **sit on the kit and consume it** (a free-canvas drag/place surface is a UI-kit consumer) — not merged-flat, not fully-separate. One ethos, two layers.
- **no Adobe.** In-house as much as possible. Photoshop / InDesign absolutely out. Small, focused, fast tools — quick to load, quick to export, one job each, no monolith bloat.
- **external services** allowed only as programmatic plumbing (Forms / Drive for intake). **Canva** = external design monolith — kept OUT of the spine; at most a swappable terminal export target, or for the flyer track. Never where a zine lives (own-your-artifact). Deciding principle: a zine never lives somewhere we don't own.
- **tech-stack default**: buildless browser JS — the file you edit is the file that runs — like the existing kit.
- **glitch / image-treatment is OUT of scope** — that's a separate kit/suite (digital-art track). ("datamosh" in the keeper's census is a wrong term; the material isn't that. Left for the keeper.)
- **build order**: zine-builder **#1** (opening to outside submissions this round), class-builder #2, flyer-builder last.
- nothing is "done" — classes/zines evolve; the suite exists to streamline the *recurring* dev loop, not produce-and-walk-away.

## the shape

The pipeline collapsed. Pile, compose, impose, export all fold into each other. The true reduction:

**two surfaces you touch — HUB and COMPOSE — on one property, ITERATE.**

### HUB (seed / orient) — the front
- public-facing, **per-issue**, **two-faced**: a contributor lands; you author (theme + prompts) per issue.
- **seeds cohesion** — publishes a loose theme + prompts as *guidelines, not gates*. Cohesion holds two ways: seeded upstream (prompts) + judged downstream (your in-theme call at compose).
- asks for **printable material only** — writing of any length, or images. Never layout.
- knobs (deferred to build, not shape): how a prompt is served (pick vs. dealt), collect-vs-handoff boundary (probably both), whether it shows submitted/past work back.

### COMPOSE (the workbench) — where it all happens
- everything from material-in to PDF-out lives here.
- **the pile** = compose's input drawer: submitted material + your own, gathered + tagged (contributor / prompt / form).
- **triage is not a stage** — selecting what's in-theme and what to use *is* compose (you look at the pile and decide).
- **placement** = your hands. Free-canvas (A) **and** presets (B) — presets for efficiency, free-canvas for freedom; **no preset is canon**, just an option.
- two natures under one surface: the **hand-surface** (creative, manual) + the **machines** (imposition: reading-order → print signatures; export → PDF — both deterministic transforms compose runs). Matters at build (separate atoms behind one surface), not for the shape.

### ITERATE — a property, not a stage
- reopen any issue, evolve it, prior versions kept (folds). "Never done" as a standing condition, not a step at the end.

### submissions
- **content only** — writing of any length, or images; anything printable is valid.
- contributors **never design a page**. You own composition, imposition, export — all of it.

## not decided (knobs / build-time)
- prompt delivery, hub boundary, A/B preset specifics, pile-as-panel vs. pile-as-stage.
- **print-ready PDF** (bleed / crop / CMYK) is the hardest in-house build — possible swappable export backend; reason through at build.

## tooling — build vs. buy (walk cont.)

**Intra-zine build order: the EDITOR (compose) is first.** The HUB is secondary — it's for submitted content, not the priority. Build the maker, then the intake.

**The shape splits into two pieces + a bucket** (forced by public-vs-local):
- **editor / compose** — local instrument, your hands; drops onto the existing kit stack (buildless browser JS, local, git).
- **hub** — public; outside contributors must reach it.
- joined by a **shared bucket** (Drive) — hub writes, editor reads.

**Map:**
| piece | build / buy |
|---|---|
| compose surface · the pile · imposition · iterate | **build** — fits the kit stack as-is |
| submissions bucket + intake | **use** — Forms + Drive (plumbing) |
| print-ready PDF export | **open (Fork B)** — in-house JS vs. service; the one swappable terminal seam |
| public hub hosting | **resolved (Fork A)** — below |

**Fork A resolved — where the hub lives:**
- the lattice is **local-only** (no remote) — keep it that way.
- the hub is **developed in-lattice as a unit** (worked from inside; ethos intact).
- **served by a deploy push**: only its static output goes out to a GitHub Pages repo. That public repo is a **deploy target, not a workplace** — same own-your-artifact principle as Canva/PDF. It's the only outward-facing seam in the whole zine-builder. (GitHub Pages is static — it can't *take* submissions; capture is the Form, store is Drive.)

**General insight — its own frame later: a `lattice → Pages` deploy system.** Pages will be wanted for all sorts of things; the deploy mechanism should be shared, not per-unit. Anti-clutter principles: one shared deployer tool · push straight to the remote Pages branch (no public-repo checkouts in the lattice) · each unit declares its target in one line. Open fork: repo granularity (many small project-repos = isolation + free subpath URLs, vs. one shared deploys-repo). The zine-hub is this system's first consumer.

## next
- **first build = the EDITOR (compose)** — the maker. Frame it at 210, then it moves to 211. (Doesn't need Fork B resolved — PDF is the end of the pipe.)
- still open: **Fork B** (print-PDF export) · the **deploy-system** frame (general infra, when the hub's turn comes).
- **NOT at a frame yet.** Shape + tooling are walked; the editor frame is the next step.
