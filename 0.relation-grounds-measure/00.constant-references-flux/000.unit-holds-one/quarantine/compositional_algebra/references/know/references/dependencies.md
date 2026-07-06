# Dependencies Reference

**Formal:**
```
Score : FrameworkBase × ScoreLocalExtensions → ExecutableSpline
Dependencies = BaseReferences × Presets × Extensions × FrameworkVersion
```

**Informal:** A spline score depends on the framework's layer references and may extend them with score-local additions. This reference defines how a score declares its dependencies, how a framework instance verifies it can satisfy them, and how extensions get promoted to base when they prove generally useful.

---

## The package model

A spline score is a package. The framework is its host. Compatibility is checkable, not assumed.

Two kinds of dependencies a score can have:

**Base framework dependencies.** Sub-functions, options, presets from `framework/` that the score uses. These exist in the host framework or they don't. Declared by reference.

**Score-local extensions.** Custom sub-functions, options, or presets that the score author created for this score specifically. These ship with the score, not with the framework. Live in `works/{work}/extensions/`.

A score using only base dependencies is fully portable. A score using extensions ships those extensions alongside it.

---

## Each work declares dependencies

Every work directory contains a `dependencies.md` file at its root:

```
works/{work}/
├── README.md
├── dependencies.md          ← declares what this score needs
├── extensions/              ← score-local vocabulary (if any)
│   └── ...
├── spline_reference.md
└── ... rest of work
```

If a work has no extensions, the `extensions/` directory is absent and `dependencies.md` declares only base dependencies.

---

## dependencies.md format

```
# {Work Name} — Framework Dependencies

## Framework version

Minimum required: {YYYYMMDD-HHMMSS}
Last tested against: {YYYYMMDD-HHMMSS}

## Base framework references used

### framework/medium_reference.md
Presets used: [list]
Sub-functions used: [list, or "all"]
Specific options used: [list — only if not using full preset]

### framework/visual_world_reference.md
Presets used: [list]
[etc.]

### framework/audio_aesthetic_reference.md
[as above]

### framework/voice_reference.md
Presets used: [list]
Atomic combinations used: [list — only if using atomic specs that don't compose to a preset]
Sub-functions used: [list, or "all"]

### framework/math_visual_reference.md
Primitives used: [list]

### framework/math_audio_reference.md
Primitives used: [list]

### framework/realization_workflow_reference.md
(no specific items to list — workflow either applies fully or doesn't)

### framework/prompt_construction_reference.md
(same)

## Cross-work realization adoptions

If this work uses any realization specs originally authored for another work, list them here. By copy semantics: realizations are copied into this work's realizations directory, not referenced across works. This section documents the provenance of any copied specs.

If the work has none: write "(none)".

Otherwise, per copy:

### works/{this-work}/realizations/{copied_realization}.md
- Originally from: works/{source-work}/realizations/{original}.md
- Copied at: {YYYYMMDD-HHMMSS}
- Modifications since copy: [list, or "none"]

## Score-local extensions

If the work has none: write "(none)".

Otherwise:

### extensions/{layer}_extensions.md
Defines: [list of custom presets, options, or sub-function additions]
Promotion candidates: [items that may belong in framework base if useful beyond this work]

## Compatibility notes

Free-form section. Document anything the framework needs to satisfy that isn't captured above. Examples:
- Requires Shape sub-field of Identity (introduced in framework {date})
- Requires audio-first surface composition (framework {date})
- Requires Voice translation discipline (framework {date})
- Requires N continuity grade support (e.g., C³+ not currently in framework)
```

---

## Extension file format

A score-local extension follows the same syntactic structure as a framework reference but lives in the score's directory and has narrower scope:

```
# {Layer} Extensions for {Work Name}

This file extends framework/{layer}_reference.md with score-local additions
required by {Work Name}. These extensions are not part of base framework
vocabulary and exist only within this score's directory.

## Custom presets

### {Preset name}
[Same format as framework reference presets: sub-function values, locks, identity]

Reason for being score-local: [why this isn't appropriate as a framework default]

## Custom sub-function options

### {Sub-function} : {New option}
[Same format as framework reference options: description, identity, when to use]

Reason for being score-local: [why this isn't appropriate as a framework default]

## Promotion notes

[Optional: which extensions, if any, the author would propose promoting to
framework base if multiple works adopt them]
```

Extensions follow the same authoring discipline as base references: define before use, no inventing vocabulary in mid-realization, honest provenance.

---

## Compatibility check protocol

When a framework instance loads a score, it runs a compatibility check:

```
1. Read works/{work}/dependencies.md
2. Compare declared "Framework version: minimum required" against framework/VERSION
   - If framework VERSION < minimum required: FAIL with specific version mismatch
3. For each base framework reference declared:
   a. Does this framework instance have that reference file?
   b. Does that reference define each preset declared in "Presets used"?
   c. Does that reference define each option declared in "Specific options used"?
   d. If anything missing: FAIL with specific list
4. For each score-local extension declared:
   a. Is the extension file present in works/{work}/extensions/?
   b. Does it follow extension format conventions?
   c. Does it define everything the score references?
   d. If anything missing: FAIL with specific list
5. Read compatibility notes
   - Each note describes a framework feature requirement; verify each is present
   - If anything missing: FAIL with specific list

If all checks pass: report SATISFIED.
If any check fails: report FAILED with the complete list of missing items.
```

No silent success. No "I'll figure it out." Either every dependency resolves, or the score reports specifically what's missing.

The result of this check goes into the generation header as the `Score dependencies satisfied` field.

---

## The promotion path

A score-local extension that proves generally useful can be promoted to framework base:

1. **Author the extension locally** in `works/{work}/extensions/`
2. **Use it for the score** — extension stays local during the score's iteration
3. **Recognize generality** — if another work would benefit, or if the extension fills a gap others have asked about, it's a promotion candidate
4. **Propose promotion** — flag in the score's `dependencies.md` under "Promotion candidates"
5. **Promote** — move the extension's content into the appropriate framework reference, add to base
6. **Update score** — score's `dependencies.md` removes from extensions, adds to base references list
7. **Attribution** — the framework reference notes the work that originated the extension

The promotion protocol prevents the framework from accumulating one-off vocabulary by accident — promotion is a deliberate act.

The inverse — base demoting to extension — should be very rare and only happens if a feature proves harmful or used by only one score and that score is being deprecated.

---

## Framework iteration policy for calibration

Calibration is the framework's primary iteration harness. During its development, vocabulary additions that surface from Calibration runs are added to **framework base directly**, not to extensions. This is the inverse of the general policy and reflects Calibration's role as harness rather than work: anything Calibration needs is, by definition, something the framework needs to test against.

This policy applies only to Calibration. Other authored works follow the standard authoring → local extension → promotion candidate path.

---

## What this enables

- **Portability** — a score is portable iff its declared dependencies are satisfied by the framework instance loading it
- **Extension without pollution** — custom vocabulary lives where it's used; the framework stays clean
- **Checkable compatibility** — loading either succeeds with all dependencies met, or fails with a specific list
- **Framework evolution discipline** — framework version stamps make it explicit when changes might break older scores; minimum-version declarations in scores prevent silent breakage
- **Deliberate promotion** — extensions promote into base only when promoted; no accidental vocabulary leak

---

## What this does not enable (out of scope)

- **Automatic resolution.** This is a manual check protocol, not an automated package manager. The check is performed by the operator loading the score; the result is recorded in the generation header.
- **Conflict resolution between extensions.** Two scores might define different versions of a preset (e.g., same name, different sub-function configuration) in their work-local definitions. Each score uses its own; the framework's base has neither. No conflict at the framework level. If both scores ever earn graduation, the conflict surfaces at promotion time and gets resolved deliberately.
- **Semantic versioning.** Framework versions are date-and-time stamps, not semver. Format: `YYYYMMDD-HHMMSS` (UTC, matching the generation ID timestamp format exactly). Bumped on every meaningful framework change — reference signatures, workflow, vocabulary, layer inputs. Not bumped on typo fixes or doc reformatting. Compatibility is currently coarse: framework version is either ≥ the score's minimum, or it isn't. Finer-grained compatibility (which specific features were introduced or removed at which version) lives in the framework's DEV_LOG and in compatibility notes within scores.