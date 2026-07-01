# audit — kb-tooling security vet (claude-obsidian) — f0

clerk, 20260701. Vet of the `claude-obsidian` repo before any adoption, prompted by the
operator's supply-chain concern: **markdown skills / vendored code carrying references that
pass vetting benign and flip malicious later** (threshold- or date-triggered rug-pull).
Feeds the adopt decision in [[note.kb-tooling.f1]]. Verdict: **do not run their code — build
our own bridge.**

## scope + method

- **target:** frozen clone `%TEMP%\cobsidian` @ cb93ff6 (v1.9.2), read-only. Not tracked;
  our copy cannot retroactively change.
- **method:** static egress/exec sweep across all skills/scripts/hooks/plugins + read of the
  concrete bootstrap scripts (didn't infer from filenames — the f0 README-claim errors are
  the reason). Hunted: URLs, `curl/wget/urllib/requests`, `pip/npm install`, `subprocess/
  eval/exec`, submodules, and "fetch/download/latest" instructions in the skill prompts.
- **the threat framing that shaped it:** a pinned SHA freezes a repo's *files*, **not what
  they point to**. So the residual attack surface after freezing a local copy is entirely
  *runtime egress* — anything fetched, installed, or executed off-SHA. That's what the sweep
  targeted.

## findings

**1. cobsidian's own code is security-conscious — not the villain.** Evidence, not vibes:
`bin/setup-retrieve.sh` has an explicit **data-egress consent prompt** (default *No*), a
localhost-only gate on the ollama probe (refuses off-localhost without `--allow-remote-ollama`),
and a **synthetic-only floor** that never leaves the machine. Off-machine POSTs of page bodies
happen only on a typed `y`. Good hygiene; no sneaky exfiltration found in the scripts read.

**2. Adopting it whole is a large code surface we don't need for a viewer.** Running it means
trusting + maintaining a **python retrieval pipeline** (`bm25-index / rerank / contextual-prefix
/ retrieve`, wants `python3` + `ollama`), the `bin/setup-*.sh` bootstraps, CI, `agents/`, and
optional MCP/REST-API integrations. All of that is the *retrieval engine* — none is the
"viewer over our notes" the adoption actually wants.

**3. Real risk item — closest to the flip-attack, and least vettable.** The repo **vendors four
third-party Obsidian community plugins as minified `main.js`**: `thino`, `calendar`,
`obsidian-banners`, `obsidian-excalidraw-plugin`. Opaque bundled JS, auto-loaded when Obsidian
opens the vault, unvettable by reading. Broader: **Obsidian's community-plugin registry is where
the rug-pull literally lives** — a plugin can turn malicious on auto-update. This layer is the
one to keep at arm's length; the markdown is not the danger.

**4. The wanted parts are inert.** The wiki structure (`wiki/{concepts,entities,sources,meta}`,
`.raw/`, `[[links]]`, index/log/hot) is **zero code — a folder convention + markdown**. The
Obsidian app is a mainstream, non-destructive viewer over plain `.md`. Neither requires running
a single line of cobsidian's code.

## verdict — build our own bridge

- **read as reference, run nothing:** the wiki folder schema + `CLAUDE.md` schema + skill
  *prompts* as pattern — all inert markdown (same posture as reading the karpathy gist).
- **carry in / execute: none of it** — no python scripts, no `bin/` bootstraps, no hooks, and
  **especially not `.obsidian/plugins/`**.
- **Obsidian app** = a separate, reasonable trust decision (official installer). Defensive
  posture: install the app, **no community plugins** (or vet each individually, later),
  **plugin auto-update off**.
- **the bridge is tiny + buildless:** our own wiki convention over the corpus at `0`, a minimal
  `.obsidian` vault config, and a **`[[slug]]` ↔ title/path resolution sweep** (our memory uses
  `[[slug]]`; Obsidian resolves by title/path — the one real reconciliation).

## residual risk

- **the Obsidian app itself** — trusted as a mainstream Electron app via official installer; not
  independently audited by us. Community plugins are the higher-risk layer and are excluded.
- **what a static sweep can miss** — obfuscated egress in the minified plugin bundles was not
  reverse-engineered; the mitigation is not running them at all, rather than clearing them.
- this vet clears a *decision* (don't adopt their code), not a codebase for execution.

links: [[note.kb-tooling.f1]] · frame for the build → `frame.wiki-bridge` (210) · [[dont-adopt-the-materials-ontology]]
