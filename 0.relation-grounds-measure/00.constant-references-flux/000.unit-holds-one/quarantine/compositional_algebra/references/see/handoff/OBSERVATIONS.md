# Observations

The posture: pattern-spotting. Running notes on patterns noticed in the work but not yet crystallized into discipline, framework change, or critique entry.

Distinct from neighbors:
- **[../DEV_LOG.md](../DEV_LOG.md)** — what *happened* (chronological, accumulating)
- **OPEN_QUESTIONS.md** — what's *uncertain* (specific decisions pending)
- **[../CRITIQUE.md](../CRITIQUE.md)** — what *falls short* (gap between claim and delivery)
- **[../../know/disciplines/](../../know/disciplines/)** — what's *named and stable* (disciplines with multiple incidents)

An observation lives here while it's a pattern-being-noticed. When it matures, it gets *promoted*:
- To a **discipline section** in `development_discipline.md` if it's a process pattern operating across sessions
- To a **framework change** if it suggests the framework itself should evolve
- To a **CRITIQUE entry** if it reveals a gap between claim and delivery
- To a **roadmap entry** if it points at work the project should do

Observations don't expire by themselves. They can sit here for months. The pruning rule: when an observation is promoted, the original entry is removed (or moved to an archive section, TBD when the first promotion happens).

---

## Active observations

### 2026-05-27 — sessions surface and crystallize their own implicit disciplines

**Pattern:** Three disciplines were named explicitly this session — *development discipline overall* (with 9 initial items), *posture-naming* (added mid-session as #9), *session-ending* (added at session end as #10). All three had been operating implicitly across many prior sessions; the operator pointed at them and asked to formalize. The naming was synthesis of evidence, not invention.

**Where it shows up:**
- DEV_LOG Sessions 1–N+2: dozens of implicit operations of these disciplines, never named
- Session N+3: operator says "we haven't formalized a dev discipline" — discipline doc emerges; SURVEY's posture-word notation noticed → posture-naming discipline emerges
- Session N+4 (this session): operator says "we should probably define an ending session protocol and catalog it too" — session-ending discipline emerges

**Why it might matter:**
- Suggests there are *more* implicit disciplines still operating that haven't been named yet
- Suggests the rhythm of "operator points at implicit practice → discipline crystallized" is itself a meta-discipline (call it *discipline-discovery*, or maybe just the operator's role in keeping the framework honest about itself)
- The development_discipline.md doc may want a "How disciplines emerge" meta-section eventually
- The check at any session end: "what have we been doing this session that we haven't named?"

**Promotion candidate:** could become a meta-discipline in `know/disciplines/` ("Discipline-discovery: at session boundaries, ask what's been operating implicitly that deserves naming"). Or could remain an observation. Hold and watch — if it appears again in future sessions, it earns a discipline section.

**Update (Session N+5):** the pattern appeared again. This session: session-starting discipline named (extending pattern from N+4's session-ending). Additionally: the see/know/do model itself was a master-craftsman frame the operator had been working with implicitly — explicitly naming it as the project's first principle landed this session as a major reorganization. Three named instances of "operator points at implicit pattern → discipline/architecture crystallized" now. The promotion candidate is stronger; next session that surfaces a fourth instance, this becomes a discipline.

---

### 2026-05-28 — AI defaults to product-shipping vocabulary despite CHARTER prohibition

**Pattern:** Drafting the MVPoC pivot plan in Session N+7, the AI (Claude) repeatedly used "ship," "ships," "shipped," "ship F2," etc. — language the CHARTER explicitly forbids ("No shipping. No release date. No version-1.0 milestone. No product."). Operator caught it directly: *"we dont care about 'shipping' gross, we dont have users and we're a solo developer."* The slip happened despite CHARTER being part of the read-first chain and despite the project's stated framing.

**Where it shows up:**
- Session N+7 (this session): seven instances of "ship"-language in the drafted `mvpoc_pivot.md`; corrected after operator pushback.
- Probably earlier sessions too — would need to grep DEV_LOG for similar product-vocab slips that may have passed unnoticed.

**Why it might matter:** AI defaults toward product-development vocabulary because that's the dominant register in training data for software work. This project is categorically not in that register (CHARTER: "No product. There are no users, only all."). The slip is not malicious or even sycophantic — it's the AI's gravitational pull toward standard software-eng framing. If unchecked, it would slowly product-ize the project's self-description over time. The CHARTER's job is exactly to refuse this gravity; AI working on the project has to actively resist it.

**Promotion candidate:** memory entry (already done — `memory/not_a_product.md`). May also belong as a section in `know/disciplines/honesty.md` or a new `know/disciplines/no_product.md` — explicit guidance about resisting product-vocabulary gravity. Hold one more incident before promoting; the memory may be sufficient.

---

### 2026-05-28 — vocabulary graduates by living somewhere, not by earning it

**Pattern:** Framework-level preset bundles (Mythic celebrant, Watercolor, Storybook, Quiet voice, etc.) were authored against the originating spline score and stayed in `know/references/*.md` after that work was removed. Nobody had asked "is this framework-general?" — the bundles just remained where they were named. The operator's reframe this session: *"the only presets we should have should be those in calibration; we havent earned any graduation to framework level yet."* The pattern is that vocabulary accidentally ascends through proximity to the framework directory; the discipline of *earned graduation* needs to actively pull things back down when they didn't earn the ascent.

**Where it shows up:**
- Session N+8 (this session): the originating work was removed; its framework-level presets stayed; operator named the gap.
- Probably earlier: any decision that placed a preset in `know/references/` rather than `do/works/{work}/` without an explicit graduation-criteria pass.

**Why it might matter:** The framework's discipline already commits to *honest accounting* (CHARTER) and *no formal claims beyond what's earned* (formalization roadmap). This pattern is the operational analog: *no preset bundles beyond what's earned.* The framework's claim that it factors works from framework is undercut when work-specific bundles live framework-level. The graduation discipline needs an active pull-down step, not just a passive "if it earns its way up, it ascends" rule.

**Promotion candidate:** discipline. Could become `know/disciplines/earned_graduation.md` or a section in `know/disciplines/define_before_reference.md` (the natural neighbor — both are about *not naming what you haven't earned*). Hold one more incident before naming. The calibration-completeness plan executing will be a second incident if work-local presets get authored cleanly there.

---

### 2026-05-28 — mechanical witnesses can themselves have blind spots

**Pattern:** The validator (a mechanical witness over framework invariants) was silently failing for ~24% of its dead-link checks because of a regex bug — pre-stripping inline-code spans before applying the link regex clobbered any link whose *text* was backticked (the common pattern of a bracketed code-styled filename followed by a parenthesized path, used everywhere in this codebase). The bug surfaced only because the operator asked "how exactly did we arrive at 301 edges?" during an audit of a downstream tool (extract_network_map.py, which had the same bug copied from the validator). Fixing the regex surfaced 18 previously-hidden dead links.

**Where it shows up:**
- Session N+6 (this session): network map extraction count audited → regex bug → validator had same bug → 18 hidden findings → fixed.
- Possible earlier instances: any time the validator reported clean while quiet drift was accumulating. Hard to know without going back through the dev log.

**Why it might matter:** The framework's commitment to *machine-witnessed* invariants (validator + workbench F4) is honest only if the witnesses themselves get audited. The witness becomes load-bearing; if the witness has a blind spot, the framework drifts confidently in that direction. The operator's habit of asking "how did we get here?" against a suspicious number is what surfaced this. That habit is itself a meta-discipline: don't trust a tool just because it reports clean.

**Promotion candidate:** discipline. "Audit the auditor" or similar — periodically verify the validator's checks against ground-truth, especially after any change to the validator's logic. Could become a section in `know/disciplines/audit_after_change.md` (the natural neighbor) rather than its own discipline. Hold one more incident before deciding shape.

---

### 2026-05-27 — walk-it-through discipline (mid-execution course-correction)

**Pattern:** Twice this session-arc the operator stopped the AI mid-execution to enforce conceptualize-first-then-execute. The first time: when AI started running `git mv` after the operator said "let's design around the see/know/do principle." Second time, implicit: the catalog-the-broken-links request before running the moves a second time.

**Where it shows up:**
- Session N+5: "hold on now, we are conceptualizing we need to walk it through and map it out first we arent changing anything yet"
- Session N+5: "once we agree on that i think the next step is to catalog every link we will break with our cahnges so we can go and fix them afterwatrds"
- Probably earlier sessions too (would need to grep dev log)

**Why it might matter:** Even with explicit operator authorization to make a change ("im not opposed to breaking every link"), the operator wants conceptualization → mapping → catalog → execution as the discipline. Skipping the mapping step is treated as a discipline violation, not a speed-up. This is consistent with define-before-reference at the meta level — define what you're about to do before doing it.

**Promotion candidate:** discipline. Could be named "conceptualization-before-execution" or similar. Adjacent to define-before-reference but distinct (it's about action sequencing within a session, not vocabulary in the framework). Hold and watch for one more incident.

---

## How to write an entry

Each entry has:

- **Date noticed** — `YYYY-MM-DD`
- **Pattern** — what's been recurring
- **Where it shows up** — specific incidents
- **Why it might matter** — what the pattern points at
- **Promotion candidate** — which destination this might mature into (discipline / framework change / critique / roadmap)

Keep entries short. They're not full essays; they're the rough cut of pattern recognition before it crystallizes.

Example shape:

```
### 2026-05-27 — observation title

**Pattern:** [one or two sentences]

**Where it shows up:**
- [incident 1]
- [incident 2]

**Why it might matter:** [one sentence]

**Promotion candidate:** [discipline / framework change / critique / roadmap]
```
