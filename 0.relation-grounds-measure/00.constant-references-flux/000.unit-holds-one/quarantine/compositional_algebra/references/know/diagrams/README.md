# Diagrams

Visual reference for the framework's architecture and workflow. These are standalone HTML files; open them in a browser to view.

## Files

- `workflow_signal_flow.html` — Twelve-pass workflow signal flow. Shows what each pass consumes, produces, and provides architecturally. Color-coded by role (preparation, cross-modal application, voice fill, assembly). Companion to `framework/realization_workflow_reference.md`.

- `layer_architecture_map.html` — The nine layers in dependency order, each split into Identity (authored, constant per realization) and Trajectory (math-driven, varies per movement). Examples from Calibration's Realization A. Useful for finding where any specific property lives in the framework.

- `spline_signal_anatomy.html` — What one movement emits. Eight typed signals (Identity, Math vocabulary, Visual, Audio, Voice, Character, Object, Motif), each labeled with content and downstream consumer. Useful for spline authoring and for understanding how the spline connects to the workflow's downstream passes.

- `three_tier_composition.html` — How a realization spec decomposes into layer presets and atomic sub-function choices. Worked example using Calibration's Realization A. Useful for understanding what "preset-based composition" vs "atomic composition" actually means.

- `continuity_grades.html` — How the felt-quality function f_n crosses a movement join under each continuity grade (C⁰, C¹, C²). Three panels with plotted curves visualizing what each grade allows mathematically and produces felt-wise. Companion to `framework/transition_reference.md` and to the S2→S3 formalization in `framework/parameter_space_reference.md`.

## How to add new diagrams

Diagrams here are standalone HTML files with inline SVG. They support light and dark mode via `prefers-color-scheme`. When the architecture changes, regenerate the relevant diagram(s) and bump the framework VERSION.

Diagrams are companion documents to the prose references — they do not replace them. The reference text is authoritative; the diagram makes the structure visible at a glance.

## Diagrams to consider adding

- **Cross-modal substitution worked example** — three columns (image / audio / narrative) × two rows (substitution / outline) showing how the same identity renders across modalities. Deferred until more 12-pass tracked generations exist.
- **Generation lifecycle state machine** — live / frozen / superseded / edited transitions. Deferred until the lifecycle is more fully exercised across realizations.
