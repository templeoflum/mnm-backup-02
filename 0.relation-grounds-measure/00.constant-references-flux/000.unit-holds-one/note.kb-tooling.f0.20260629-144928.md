# note — kb-tooling intake — f0

intake of four outside resources the operator surfaced 20260629. groomed, read on ground (not READMEs), held. keeper does not decide adopt — that call is operator + clerk (it's a systems change). this is the findings the call gets made on.

## provenance

read from shallow clones in scratch (not placed in the tree):

| artifact | url | ref read | type |
|---|---|---|---|
| llm-wiki gist | gist.github.com/karpathy/442a6bf555914893e9891c11519de94f | — | pattern, no code |
| claude-obsidian | github.com/AgriciDaniel/claude-obsidian | cb93ff6 (v1.9.2) | claude-code skills + scripts |
| claude-canvas | github.com/AgriciDaniel/claude-canvas | 05b808c | claude-code skills + python |
| best-practices | github.com/AgriciDaniel/best-practices | 03b6b34 (v1.0.0) | discipline kernel (markdown) |

## what they are (verified)

**karpathy gist** — a *pattern*, not code. three layers: immutable raw sources → an LLM-maintained wiki (entity/concept pages, cross-refs, summaries) → a schema. three verbs: ingest / query / lint. it is the lattice's architecture arrived at independently; the divergence is who decides placement (gist: the LLM; lattice: the human front-loads it).

**claude-obsidian** — that gist, built, as ~15 markdown skills + scripts. architecture is literal: `.raw/` (sources) → `wiki/` (`index.md`, `log.md`, `hot.md` cache, `sources/ entities/ concepts/ domains/`) → `CLAUDE.md` (schema). self-contained in one folder.
- **runtime, corrected:** does NOT require the Obsidian app. wiki-ingest has a transport fallback chain whose floor is *"filesystem — Claude's Write/Edit tools… (final floor; always works)."* the app, obsidian-cli, MCP are optional accelerators. (the README's "requires Obsidian" is wrong for the engine.)
- **posture:** lint says *"ask before auto-fixing anything"*; PARA mode leaves ingests in `incoming/` *"for user review."* review gate is native. the one autonomous habit is a PostToolUse hook that auto-`git add`s after ingest — breaks keeper L3/L4 (own paths, commit after the operator sees). turn it off.
- has its own address system (`.vault-meta/address-counter.txt`, `address:` frontmatter). scoped to the corpus that's a complement, not a collision — keystone addresses untouched.

**claude-canvas** — generates Obsidian `.canvas` JSON (nodes, zones, positions; 12 template archetypes). the skills make the files; **the Obsidian app + Advanced Canvas plugin render and let you drag/edit them. python 3.10 for layout.** this one genuinely needs the app — it's the visual surface, not a file-only tool.

**best-practices** — a discipline kernel: stance + engineering kernel (six cuts) + agent kernel + a runnable loop. by its own words *"not enforcement… a meditation… compose with superpowers if you need rationalization guards."* portable markdown.

## fit findings

**wiki → corpus knowledge base.** clean. lives self-contained in the corpus folder at 000, nothing reaches the addressed lattice. the collision objection (raised then withdrawn): the corpus interior isn't lattice-addressed (keystone 220 — accumulates before organized), so there's nothing for its filing to fight. adapt = (1) auto-commit hook off, (2) pick PARA "leave for review" mode, (3) keep it boxed in the corpus.

**app → viewer over the same notes.** confirmed: `.md` is just files; Obsidian opens a *folder* non-destructively, builds graph/backlinks from the `[[links]]` already in the notes, adds only its own `.obsidian/` config. it does not rewrite notes unless edited through it. so the lattice keeps using the identical files (addressing, git, tooling unchanged) and Obsidian is a parallel window — one source of truth, two readers. could point at the whole repo to graph the entire lattice, not just the corpus. footnote: Obsidian resolves `[[links]]` by title/path, our memory uses `[[slug]]` — mostly compatible, occasional resolution mismatch to tidy.

**canvas → needs the app.** if canvas is the interaction surface, the path is: install the Obsidian app (one move → canvas rendering *and* the wiki's graph view), run the two plugins as the AI hands that build into it. cost stated plainly: Obsidian becomes the viewing environment.

## the best-practices harvest

checked at mechanism level (does our phrasing *achieve* the result), not vocabulary level.

both kernels are mostly *meditation* — well-phrased values a willing reader internalizes; neither self-enforces (best-practices says so outright). the real axis is **value vs check**: a value needs a catcher to fire; a check with a firing condition fires itself.

- **ours under-fires from phrasing alone.** evidence: the size of the correction-memory pile (each entry exists because saying the principle didn't stop the drift), and live this session — "evidence over vibes" did not catch two unverified README claims; the operator did. **our actual enforcement mechanism is the operator in the loop + a few structural artifacts** (commit-live L4, baton close-out, frame-before-build, manifest ledger) — those fire whether or not anyone feels rigorous, and best-practices has no equivalent.
- **what's worth lifting** is not their words (we hold the values) but the few cuts shaped as *triggers* instead of aspirations:
  - *"if a task has no verification path, refuse it until it does"* — a refusal gate. ours ("verify against reality") is a value, no trigger.
  - *the runnable loop* forces undo-plan + blast-radius as checkpoints you fill — ours leaves both implicit; [[clear-handles-before-tree-move]] was a missing undo plan.
  - *line-by-line diff-review procedure* ("function exists? open the file. tests pass? run them.") — a sequence, not the value "verify."
  - *"skepticism is not new information"* · *"can't name it cleanly → don't understand it yet"* · *"no abstraction without three real callers"* — sharper single cuts.
- **one genuine divergence by domain:** *"delete more than you add, code is liability."* opposite of our 212/220 fold-and-preserve. their world ships code; ours accretes a corpus. not a gap to fill — a difference to know.

**takeaway:** don't adopt the kernel (redundant with our values). the keep is the *shape* — where a principle matters, convert it from a value we hope fires into a check that fires itself. that's a real method gap, harvested.

## held for operator + clerk

- adopt the wiki engine into the corpus? (systems change — clerk architects/installs)
- install the Obsidian app as the interaction/visual surface (gates canvas)?
- adopt canvas, or just the app's native canvas?
- the harvest: turn the four sharper cuts into actual checks somewhere — keystone? a skill? (authoring call, not keeper's)

clones sit in scratch, not placed. say the word and clerk carries them in; keeper does not decide their destination.

## corrections logged this pass

two README-sourced claims I made before reading the code, both wrong, both caught by the operator pushing: "claude-obsidian requires the Obsidian app" (it doesn't — filesystem floor) and "we already encode best-practices" (vibe pattern-match, not verified). recorded as the working example behind the harvest's central finding: phrasing didn't catch them.
