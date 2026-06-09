# DIVE 1 — Operation Layer Landscape Compilation: Visualization/Frontend, Computation Environments, and Automation/Agent Integration

*Search-and-compile landscape. Current as of June 8, 2026. Reports documented facts only — no rankings or recommendations.*

## TL;DR
- This compiles 25 targets across three operation-layer domains, recording for each what it is, maturity/version, documented capabilities matched to the project's needs (tree rendering, real-time animation, canvas/iframe interop, touch, bundle size, JS↔Python bridging, reproducibility, agent-server definition), and sources.
- All three MATLAB/Simulink "agentic" targets were VERIFIED to exist under those exact names: MathWorks released the MATLAB Agentic Toolkit (April 13, 2026), the MATLAB MCP Core Server (Nov 2025), and the Simulink Agentic Toolkit (April 17, 2026), all on the official `matlab/` GitHub org.
- Several tools shipped major versions recently: pandas 3.0, ggplot2 4.0 (S7), PyMC 6.0, Vega-Lite 6, Three.js r184, MCP spec 2025-11-25. Where a version could not be verified or sources conflicted, it is flagged inline.

---

# SECTION 1.0 — Visualization & Frontend

## 1. D3.js
**(1) What it is.** D3 (Data-Driven Documents) is a free, open-source low-level JavaScript library for visualizing data using web standards (SVG, Canvas, HTML). It is not a charting library — it has no "chart" abstraction; you compose primitives (scales, shapes, selections, data joins). Created by Mike Bostock in 2011; maintained by Bostock and Philippe Rivière at Observable.
**(2) Maturity.** Stable/active. Current major version is D3 7.x (loaded as `d3@7`). The d3-hierarchy module is at 3.1.2 (npm lists "last published 4 years ago" for that module).
**(3) Key characteristics.**
- `d3-hierarchy` module implements tree, cluster (dendrogram), treemap, pack (circle-packing) layouts; supports Cartesian and polar/radial forms.
- `d3.hierarchy()` ingests nested JSON; `d3.stratify()` builds hierarchies from tabular data — relevant to a flat-file ternary-addressed tree.
- Renders to SVG or Canvas; provides transition/animation system (data joins for enter/update/exit), zoom, drag.
- Modular: most modules (d3-scale, d3-array, d3-interpolate) don't touch the DOM and work in React.
**(4) Capability match.** Directly supports TREE/HIERARCHY rendering (tidy tree, dendrogram, treemap, circle pack, radial). Real-time animation via transitions and data joins. Canvas embedding supported. Touch via d3-zoom/d3-drag. Bundle: modular — you can import only needed modules; full d3@7 bundle is larger but tree-shakeable.
**(5) Sources.** D3 Hierarchy/Tree docs (https://d3js.org/d3-hierarchy/tree); What is D3 (https://d3js.org/what-is-d3); d3-hierarchy npm (https://www.npmjs.com/package/d3-hierarchy); GitHub d3/d3-hierarchy.

## 2. Observable Plot
**(1) What it is.** A high-level, open-source JavaScript library for exploratory data visualization from Observable, built on D3. Concise API ("a histogram in one line vs ~50 in D3"). Officially described as D3's "high-level sister library."
**(2) Maturity.** Active. A 2023 third-party review covered version 0.6.11; current version is in the 0.6.x line (the project remains pre-1.0). [Exact latest 0.6.x patch not verified in gathered sources.]
**(3) Key characteristics.**
- Built on D3; returns an SVG element. Uses "marks" and "tidy data" model.
- Designed for rapid prototyping in notebooks; minimal post-render customization API (you drop to D3 for advanced interactivity).
- Maintained by Observable alongside D3 and Observable Framework.
**(4) Capability match.** Strong for quick statistical charts; relationship to D3 is direct (built on it, can combine). Tree/hierarchy: not a core focus (D3 used for those). Animation: limited native reactivity (grew up in Observable's reactive runtime). Renders SVG; embeddable.
**(5) Sources.** Plot for D3 Users (https://observablehq.com/@observablehq/plot-for-d3-users); Observable & D3 blog; vis4.net review of Observable Plot.

## 3. Vega-Lite
**(1) What it is.** A high-level declarative JSON grammar of interactive graphics from the UW Interactive Data Lab. Specs describe encodings from data to graphical marks; the compiler produces axes/legends/scales and compiles to lower-level Vega, rendered via HTML5 Canvas or SVG.
**(2) Maturity.** Stable/active. Latest version 6.4.3 (per the official Vega-Lite homepage). Schema referenced as `v6.json`.
**(3) Key characteristics.**
- Declarative JSON; supports layering, faceting, concatenation, repeat (composition algebra).
- Grammar of interaction via selections/params (pan, zoom, brushing, linked views, interactive legends).
- Compiles to Vega; bindings exist in many languages (e.g., Python via Altair).
- Vega-Embed embeds interactive views into web pages.
**(4) Capability match.** Strong declarative INTERACTIVITY (selections). Canvas or SVG output; embeddable via Vega-Embed (iframe-friendly). Tree/hierarchy: not a primary focus. Real-time point-trace animation: not its core model (it's selection-driven interactivity, not frame animation).
**(5) Sources.** Vega-Lite homepage (https://vega.github.io/vega-lite/); Vega project site; Wikipedia (Vega/Vega-Lite); interactive legend example.

## 4. Plotly
**(1) What it is.** Plotly.js is a standalone open-source (MIT) JS charting library built on D3 and stack.gl; it also powers plotly.py (Python) and Plotly.R. Produces statistical, scientific, 3D, financial charts.
**(2) Maturity.** Stable/active. Plotly.js is at 3.x (3.6.0 referenced via CDN `plotly-3.6.0.min.js`); plotly.py is at 6.x (docs generated for 6.8.0). plotly.js 3.0.0 released 2025-01-27.
**(3) Key characteristics.**
- 3D plotting via `scatter3d` (Scatter3d trace; lines/markers in 3D, projections, bubble).
- Animation via animation frames; `animation_frame`/`animation_group` in Plotly Express provide object-constancy across frames; community notes Scatter and Scatter3d animate, but Scattergl (WebGL) animation has documented issues.
- WebGL-accelerated trace types (scattergl) for large data.
**(4) Capability match.** Directly supports 3D scatter (scatter3d) — relevant to a 3D canvas projection. Animation frames support point traces/orbits. JS↔Python: same library available in JS and Python (figures are JSON, portable). Embeddable as standalone HTML. Bundle: relatively large (full plotly.js bundle).
**(5) Sources.** plotly.js GitHub (https://github.com/plotly/plotly.js/); plotly.py CHANGELOG; scatter_3d / Scatter3d API docs (plotly.com); Plotly community forum (scatter3d animation).

## 5. Bokeh
**(1) What it is.** A Python interactive visualization library that emits JS/BokehJS for rendering in browsers; can produce standalone HTML or run a Bokeh server for Python-backed interactive apps.
**(2) Maturity.** Stable/active. Release history in gathered docs: 3.7.0 (March 2025), 3.7.3 (May 2025), 3.8.0 (August 2025), 3.8.1 (November 2025); docs reference a 3.9.0 documentation build as latest.
**(3) Key characteristics.**
- Two embedding paths: standalone documents (`file_html`, `components`, `json_item`, `autoload_static`) and Bokeh server apps (`server_document`/`server_session`).
- BokehJS usable as a standalone JS library from CDN (`cdn.bokeh.org`); core `bokeh-x.y.z.min.js` plus optional widgets/tables/gl/mathjax bundles.
- Standalone HTML stores plot data directly in returned HTML; server enables Python callbacks for interaction.
- WebGL backend for performance (scatter/line glyphs).
**(4) Capability match.** Server-vs-standalone is a documented core distinction. Standalone HTML embedding fits the project's standalone-HTML instruments; iframe/embed supported. JS↔Python: Python authoring → JS rendering. CSP/CORS guidance documented for embedding server views.
**(5) Sources.** Bokeh Releases (https://docs.bokeh.org/en/latest/docs/releases.html); bokeh.embed reference; Bokeh server user guide; installation/CDN docs.

## 6. Altair
**(1) What it is.** Vega-Altair, a declarative statistical visualization library for Python built on top of the Vega-Lite JSON grammar. Originally by Jake VanderPlas and Brian Granger with the UW IDL.
**(2) Maturity.** Stable ("Production/Stable"). Latest stable 6.2.1 (PyPI, Jun 5, 2026); 6.1.0 (Apr 21, 2026). The older widely-cited line was 5.5.0. Requires Python ≥3.10. Recent builds track Vega-Lite 6.4.1.
**(3) Key characteristics.**
- Generates Vega-Lite specs from a Pythonic API; inherits Vega-Lite's grammar of interaction (selections, linked brushing).
- Exports to PNG/SVG, standalone HTML, JSON; uses vl-convert as default backend for static image export.
- Renders natively in JupyterLab/Notebook.
**(4) Capability match.** Python→declarative web viz; INLINE VISUALIZATION in notebooks; EXPORT to standalone HTML/PNG/SVG/JSON (reproducibility-friendly serialization). Tree/hierarchy and frame-animation are not core (inherits Vega-Lite's selection-based interactivity model).
**(5) Sources.** altair PyPI (https://pypi.org/project/altair/); vega/altair GitHub + releases; altair-viz.github.io.

## 7. Three.js / WebGL
**(1) What it is.** A widely used open-source 3D rendering library for the web, abstracting WebGL (and increasingly WebGPU). Provides scenes, cameras, meshes, materials, lights, loaders, controls.
**(2) Maturity.** Stable/active, very rapid release cadence (revision-numbered, ~monthly). The current revision is **r184** per the official threejs.org homepage; r182 was released Jun 1, 2026 (the project has logged 833 revisions), per github.com/mrdoob/three.js/releases. Gathered release notes reference r177→r178 migration and PRs in the r180+ range.
**(3) Key characteristics.**
- Animation loop via `requestAnimationFrame` (or `renderer.setAnimationLoop`).
- OrbitControls addon: orbit/dolly/pan; explicit TOUCH support (one-finger orbit, two-finger zoom/pan); damping/auto-rotate require `controls.update()` in the loop. Must be imported from `three/addons/controls/OrbitControls.js`.
- Increasing WebGPU backend; WebXR (AR/VR) support.
**(4) Capability match.** Directly supports the project's 3D canvas + orbit animations: real-time animation loop, OrbitControls for orbit/zoom, native touch/mobile gestures. Renders into a `<canvas>` (WebGL context). Bundle: core library plus addons (OrbitControls is a separate addon import).
**(5) Sources.** OrbitControls docs (https://threejs.org/docs/pages/OrbitControls.html); threejs.org homepage (r184); three.js GitHub Releases; migration guide r177→r178.

## 8. Canvas 2D API
**(1) What it is.** The HTML5 `<canvas>` 2D rendering context (`CanvasRenderingContext2D`) — a web standard, NOT a library. Specified in the WHATWG HTML Standard (§4.12.5) and documented on MDN. Ships natively in browsers; obtained via `canvas.getContext("2d")`.
**(2) Maturity.** Stable web standard (living standard, WHATWG).
**(3) Key characteristics.**
- Immediate-mode 2D drawing: rectangles (`fillRect`/`strokeRect`/`clearRect`), paths (`beginPath`/`moveTo`/`lineTo`/`arc`/Bézier/`fill`/`stroke`), text, images, pixel manipulation (`getImageData`/`putImageData`), gradients/patterns/shadows, and a transform matrix.
- No built-in scene graph (immediate-mode: redraw each frame); no built-in 3D (3D requires WebGL/WebGPU contexts on the same element).
- Animation by clear-and-redraw driven by `requestAnimationFrame`.
**(4) Capability match.** Natively supports point traces/orbit animation if you implement the redraw loop (requestAnimationFrame); zero dependencies/zero bundle (browser built-in). Tree rendering possible but must be coded manually (no layout primitives). Touch via standard DOM touch/pointer events. The project's standalone-HTML instruments could draw directly here with no build pipeline.
**(5) Sources.** MDN Canvas API (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API); MDN CanvasRenderingContext2D; WHATWG HTML Standard canvas section; MDN Canvas tutorial (Basic usage).

## 9. Manim (Community edition / ManimCE)
**(1) What it is.** A Python mathematical-animation engine; ManimCE is the community-maintained fork of 3Blue1Brown's (Grant Sanderson) original manim. Generates animations programmatically.
**(2) Maturity.** Active. Stable docs reference v0.19.x and v0.20.x (latest stable shown as v0.20.1; v0.19.0, v0.19.2 also documented). v0.19.0 replaced the external ffmpeg dependency with the pyav library.
**(3) Key characteristics.**
- Renders to VIDEO files (MP4 by default; also WebM, GIF; can output PNG image). Quality flags `-ql/-qm/-qh/-qp/-qk` (480p15 → 4K).
- Scene-based API (`Scene.construct`, `self.play(...)`); sections can emit separate output videos + JSON.
- Has a Jupyter `%%manim` magic and online playground.
**(4) Capability match.** Output is video, NOT web-embeddable interactive content — relevant constraint for the project's standalone-HTML interactive instruments. Excellent for precise mathematical animation (point traces/orbits) but as pre-rendered video, not live/interactive in a canvas. Python-based.
**(5) Sources.** Manim Community docs (https://docs.manim.community/); v0.19.0 changelog; Output Settings tutorial; ManimCommunity/manim GitHub releases.

## 10. ParaView / VTK (incl. VTK.js)
**(1) What it is.** VTK (Visualization Toolkit) is Kitware's open-source C++ system for 3D graphics, image processing, and scientific visualization; ParaView is the large-data scientific visualization application built on VTK. VTK.js is a JavaScript implementation of VTK for the web (WebGL/WebGPU/WebXR).
**(2) Maturity.** Stable/active. VTK.js gathered release posts span v26, v30, v35 (v35 is the latest referenced; "implementation of VTK as an ESM JavaScript library"). ParaView release notes referenced (e.g., 5.7 added vtkjs/Glance web export). [Exact current desktop VTK/ParaView numeric versions not pinned in gathered sources.]
**(3) Key characteristics.**
- VTK.js: interactive 2D/3D/higher-dimensional scientific viz in-browser (point clouds/LiDAR, molecular surfaces, volume rendering, AR/VR); leverages WebGL/WebGPU/WebXR.
- ParaView can export a scene to a standalone Kitware Glance HTML file (data + viewer bundled, openable offline in a browser) — since ParaView 5.7.0.
- trame: build Python apps leveraging VTK/ParaView with vtk.js. VTK/C++ can compile to WebAssembly to interact with VTK.js.
**(4) Capability match.** Targets scientific/volumetric visualization (overkill for a 27–39 node tree, but documented for 3D scientific data). VTK.js gives canvas/WebGL 3D in-browser; ParaView→Glance gives standalone HTML export. JS↔Python via trame/wasm.
**(5) Sources.** VTK.js v30/v35 release posts (kitware.com); VTK Flavors (vtk.org); VTK.js overview (kitware.github.io/vtk-js); ParaView/Glance export blog.

## 11. KaTeX / MathJax
**(1) What it is.** Two web math-typesetting libraries that render LaTeX math in HTML. KaTeX (by Emily Eisenberg and Sophie Alpert, MIT) emphasizes fast synchronous rendering; MathJax is the older, more feature-complete engine.
**(2) Maturity.** Both stable/active. A Jan 2026 secondary source cites KaTeX 0.16.27 and MathJax 4.0; other 2025 sources cite KaTeX 0.16.x and MathJax 3.x. [KaTeX is in the 0.16.x line; MathJax has a 3.x line with 4.0 referenced — exact "current" depends on source.]
**(3) Key characteristics.**
- KaTeX: renders synchronously without page reflow; layout based on Knuth's TeX; no dependencies; supports server-side rendering (`katex.renderToString` via Node → plain HTML). Documented limitations: no `\label`/`\eqref` equation referencing; follows LaTeX for aligned/matrix environments.
- MathJax: broader LaTeX feature support, better accessibility (tab-accessible, screen-reader context menu), more consistent cross-browser typography; v3 closed much of the speed gap.
- One analysis put a typical KaTeX page-weight contribution at ~347.5 kB; a 2025 benchmark (500 equations/page) had KaTeX ~1.8 s load / 15% CPU vs MathJax 4.0 ~4.2 s / 23% CPU.
**(4) Capability match.** Both render LaTeX math in standalone HTML (the project's markdown+HTML instruments). KaTeX: smaller, faster, pre-renderable (reproducible, flicker-free, bundle-friendly, no deps). MathJax: more features/accessibility at higher cost. Differences (speed/bundle vs feature/accessibility) are the documented distinction.
**(5) Sources.** KaTeX home/docs (https://katex.org/); KaTeX Common Issues; BigGo KaTeX vs MathJax (Nov 2025); IntMath comparison demo; dasroot.net (LaTeX in Markdown, Jan 2026).

---

# SECTION 1.1 — Computation Environments

## 1. Jupyter
**(1) What it is.** The standard interactive notebook ecosystem. Notebook 7 is built on JupyterLab components (JupyterLab 4 / Notebook 7 share a code base); ipywidgets provide interactive controls; nbconvert exports notebooks.
**(2) Maturity.** Stable/active. Gathered `jupyter --version` snapshots: JupyterLab 4.3.x, nbconvert 7.16.x, ipywidgets 8.1.x (8.1.8 on PyPI), notebook 7.x. The `jupyter` metapackage is 1.1.1.
**(3) Key characteristics.**
- Notebook 7 is based on JupyterLab 4 and no longer supports the classic Notebook extensions (e.g., `%matplotlib notebook`); interactive matplotlib now needs ipympl/`%matplotlib widget`.
- ipywidgets framework for interactive HTML widgets bound to the IPython kernel.
- nbconvert exports to HTML, PDF, etc.; notebooks stored as JSON (.ipynb).
**(4) Capability match.** INLINE VISUALIZATION via rich display + ipywidgets. EXPORT via nbconvert (HTML/PDF). JS↔Python via widget comm protocol. Reproducibility caveat: JSON format + arbitrary cell execution order leads to documented hidden-state/reproducibility issues (basis for marimo's critique).
**(5) Sources.** Jupyter Notebook 7 changelog (readthedocs); ipywidgets docs/PyPI; jupyter metapackage PyPI; ipywidgets issue #3968 (Notebook 7 widgets).

## 2. Marimo
**(1) What it is.** A reactive Python notebook stored as pure `.py` (not JSON). Cells re-execute automatically based on a statically-analyzed dependency DAG. Apache-2.0; requires Python ≥3.10.
**(2) Maturity.** Active, NumFOCUS-affiliated. [Exact version not in gathered sources, but actively released.]
**(3) Key characteristics (as documented/claimed).**
- Reactive execution: running/editing a cell re-runs dependent cells in topological order; deleting a cell scrubs its variables → "no hidden state."
- Stored as pure Python → git-friendly diffs, importable as modules, executable as scripts (`python notebook.py`), parameterizable by CLI args.
- Run modes: `marimo edit` (editor), `marimo run` (read-only web app, code hidden), export to HTML/ipynb/self-contained WASM bundle.
- Reproducibility: deterministic execution; `--sandbox` notebooks pin dependencies in a PEP 723 header and reproduce a fresh env via uv.
- AI-native: stored as Python (LLM-friendly); `marimo pair` exposes context to agents like Claude Code/Codex; `marimo convert` imports Jupyter .ipynb.
- Built-in UI elements bind to Python without callbacks (positioned against ipywidgets).
**(4) Marimo-vs-Jupyter in 2026 (what sources/docs claim).** marimo markets itself as "the Jupyter alternative": reactive (vs Jupyter's top-to-bottom manual execution), git-friendly pure-Python (vs JSON), reproducible/no-hidden-state, and AI-native (plaintext for agents). The reproducibility claims rest on published academic studies of GitHub Jupyter notebooks:
  - Pimentel, Murta, Braganholo & Freire, *"A Large-scale Study about Quality and Reproducibility of Jupyter Notebooks"* (MSR 2019, UFF/NYU): of 1.4M GitHub notebooks, 208,323 (24.11%) "finished their execution successfully," and "about 4% re-executed with the same result" (4.03%).
  - The same Pimentel et al. 2019 study found "36.36% have out-of-order cells" among notebooks with unambiguous execution order.
  - Wang, Li & Zeller 2021, *"Better Code, Better Sharing: On the Need of Analyzing Jupyter Notebooks"*: in a study of 1,000 notebooks, they "found more than 70% of notebooks not reproducible," attributing it to randomness, changed visualizations, and incorrect cell execution order. (marimo marketing has paraphrased this as "over 75% don't run.")
  - Third-party reviews corroborate the reactivity/git/reproducibility advantages while noting trade-offs (no duplicate variable definitions allowed; outputs not stored in the file).
**(5) Sources.** marimo GitHub (https://github.com/marimo-team/marimo); marimo docs/FAQ; marimo.io "vs Jupyter" and "dataflow" blog; pydevtools marimo reference; Pimentel et al. MSR 2019; Wang/Li/Zeller 2021; third-party Medium/onlyutkarsh comparisons.

## 3. Quarto
**(1) What it is.** An open-source scientific/technical publishing system (next-generation R Markdown) that renders markdown (.qmd) + executable code to HTML, PDF, websites, slides, dashboards, etc.
**(2) Maturity.** Stable/active. A gathered `quarto check` shows Version 1.9.37 (with bundled Pandoc 3.4.0, Typst 0.11.0, TinyTeX 2026). [The 1.x line; 1.9.x referenced.]
**(3) Key characteristics.**
- Multi-engine execution: knitr (R), jupyter (Python/others), and an opt-in julia engine. Pipeline: engine executes code → Markdown → Pandoc → output format.
- Executable code cells (```{python}/```{r}); per-cell and document YAML options; inline code; `output: asis` raw markdown.
- `freeze`/`cache` for reproducible/expensive computation; `.ipynb`, `.Rmd`, `.md`, and scripts accepted as input.
**(4) Capability match.** Markdown→HTML/PDF/site fits the project's markdown instruments. Executable code with reproducibility features (freeze/cache). Relationship to Jupyter/knitr: uses Jupyter (NBClient) for Python and knitr for R as its computational engines; can render existing .ipynb/.Rmd.
**(5) Sources.** Quarto execution options (https://quarto.org/docs/computations/execution-options.html); Using R (quarto.org); Quarto troubleshooting/check; "The Practical Guide" (look under the hood).

## 4. R / tidyverse
**(1) What it is.** R is a language/environment for statistical computing and graphics; the tidyverse is a collection of opinionated, interoperable R packages (dplyr, ggplot2, tibble, tidyr, readr, purrr, stringr, forcats, lubridate) sharing a design philosophy.
**(2) Maturity.** Stable/active (annual spring R releases). R 4.5.0 ("How About a Twenty-Six") released April 11, 2025; the CRAN NEWS file dates R 4.6.0 to 2026-04-24 (current as of this report). tidyverse meta-package 2.0.0 (component packages version independently). ggplot2 4.0.0 (Sept 2025; patch 4.0.1) — a major release replacing most of the S3 backend with the S7 object system (prior line 3.5.x).
**(3) Key characteristics.**
- ggplot2 implements "The Grammar of Graphics" — map data variables to aesthetics, choose geoms.
- tidyverse loaded via `library(tidyverse)`; consistent tidy-data conventions.
**(4) Capability match.** Statistical analysis + grammar-of-graphics plotting (ggplot2). R can be bridged from Python (reticulate) and used in Quarto via knitr. Reproducibility via renv. Not a web/canvas/animation tool per se.
**(5) Sources.** CRAN NEWS (https://cran.r-project.org/doc/manuals/r-release/NEWS.pdf); tidyverse CRAN page; ggplot2 4.0.0 announcement (tidyverse.org blog) + news; ggplot2.tidyverse.org.

## 5. pandas / Polars
**(1) What they are.** pandas is the established Python DataFrame library (eager, NumPy-oriented, row-major historically). Polars is a newer high-performance DataFrame library/query engine written in Rust, built on the Apache Arrow columnar format, with lazy evaluation and multithreading.
**(2) Maturity.** Both stable/active. pandas 3.0.0 released January 21, 2026 (major release; latest patch 3.0.3); final 2.x was 2.3.3 (Sept 29, 2025). [Task assumed "2.x" — now superseded by 3.0.] Polars latest 1.41.2 (PyPI, ~May 29, 2026); releases a minor version roughly every two weeks.
**(3) Key characteristics / differences (documented).**
- Polars: Rust core, Apache Arrow columnar memory (zero-copy, SIMD vectorization), multithreaded (uses all cores; not GIL-bound), lazy execution with query optimizer (predicate pushdown, projection pruning), streaming engine for larger-than-memory data; zero required dependencies. The pola.rs homepage states verbatim: "Compared to pandas, it can achieve more than 30x performance gains… The benchmark was performed on a c3-highmem-22 with scale factor 10 including I/O" (a TPC-H-derived benchmark); other third-party benchmarks cite 3–10x.
- pandas 3.0: dedicated string dtype by default (PyArrow-backed if available), Copy-on-Write as the only mode, microsecond default datetime resolution; broadest ecosystem interoperability.
**(4) Capability match.** Both are Python dataframes (data prep, not visualization). Polars vs pandas distinction (Rust/Arrow/lazy/parallel vs NumPy/eager/single-core, plus pandas' ecosystem maturity) is the documented contrast.
**(5) Sources.** pandas GitHub releases + v3.0.0 whatsnew + PyPI; Polars PyPI + pola.rs + docs.rs; JetBrains "Polars vs pandas"; DEV/dasroot 2025 comparisons.

## 6. statsmodels / PyMC / Stan
**(1) What they are / are for.**
- statsmodels: Python library for statistical modeling and econometrics (regression, time series, hypothesis tests).
- PyMC (formerly PyMC3): Python probabilistic programming for Bayesian modeling; advanced MCMC (NUTS) and variational inference (ADVI).
- Stan: a probabilistic programming language for Bayesian inference implementing HMC/NUTS (plus penalized MLE, variational inference); CmdStan is its command-line interface (with CmdStanPy/CmdStanR wrappers).
**(2) Maturity.** All stable/active. statsmodels 0.14.6 (Dec 5, 2025). PyMC reached 6.0.x (6.0.1, May 20, 2026; v5.x line was current into early 2026 — task said "v5.x?", now superseded). CmdStan 2.38.0 (Jan 13, 2026).
**(3) Key characteristics.** statsmodels integrates with NumPy/pandas, formula API. PyMC is an independent framework (does not use Stan); supports NUTS/ADVI. Stan is its own language; PyMC and Stan are separate Bayesian ecosystems.
**(4) Capability match.** Statistical/Bayesian modeling backends (not visualization/animation). Relevant only to any statistical layer; each targets a different modeling need (frequentist/econometric vs Python-native Bayesian vs language-based Bayesian).
**(5) Sources.** statsmodels PyPI; PyMC GitHub + PyPI/conda-forge; CmdStan guide + RELEASE-NOTES (stan-dev).

## 7. LaTeX / TikZ / PGFPlots
**(1) What they are.** LaTeX is a typesetting system. TikZ (front-end to the PGF system) produces vector graphics directly within TeX/LaTeX (paths, shapes, nodes, Bézier curves, diagrams). PGFPlots, built on TikZ, produces 2D/3D plots from data and/or mathematical functions (with automatic axes, ticks, legends, log scales).
**(2) Maturity.** Stable/mature. TikZ/PGF manual version 3.1.11a on CTAN (a secondary source cited 3.1.9a — minor-version ambiguity). PGFPlots manual titled version 1.18.2 (a secondary source dates 1.18.2 to Aug 14, 2025).
**(3) Key characteristics.**
- TikZ: outputs portable vector graphics across drivers (dvips/dvipdfm/pdftex); recursive acronym "TikZ ist kein Zeichenprogramm."
- PGFPlots: line, scatter, bar, area, mesh/surface, patch, contour, quiver, histogram, box plots, polar axes, ternary, Smith charts; each graph lives inside a `tikzpicture`.
**(4) Capability match.** Programmatic, reproducible vector graphics/plots embedded in LaTeX/PDF documents (publication output). TikZ produces diagrams; PGFPlots produces data/function plots. Not web/interactive.
**(5) Sources.** tikz.dev; PGF manual on CTAN (pgfmanual.pdf); tikz.dev/pgfplots; CTAN pgfplots package + pgfplots.pdf.

## 8. scikit-image / OpenCV
**(1) What they are / target.**
- scikit-image: a scientific image-processing toolbox for Python, built on NumPy and scipy.ndimage (segmentation, geometric transforms, color-space, filtering, morphology, feature detection). Uses RGB order, float conventions.
- OpenCV (`cv2`, distributed as opencv-python): a large performance-oriented computer-vision library (C++ core, Python bindings) for image/video processing, real-time CV, object detection, calibration. Uses BGR order, uint8 by default.
**(2) Maturity.** Both stable/active. scikit-image 0.26.0 (Dec 20, 2025). opencv-python 4.13.0.92 (Feb 5, 2026, wrapping OpenCV 4.13.0).
**(3) Key characteristics / difference.** scikit-image = scientific/algorithmic toolbox tightly integrated with the NumPy/SciPy ecosystem (RGB/float); OpenCV = broader, faster computer-vision library (BGR/uint8). The scikit-image docs themselves note the BGR-vs-RGB and dtype interoperability differences.
**(4) Capability match.** Image processing (not directly relevant to tree/animation/canvas unless processing raster output). Documented distinction: scientific toolbox vs high-performance CV library.
**(5) Sources.** scikit-image.org + PyPI + data_types user guide; opencv-python PyPI; docs.opencv.org.

---

# SECTION 1.2 — Automation & Agent Integration

## 1. MCP (Model Context Protocol)
**(1) What it is.** An open protocol (open-sourced by Anthropic, November 2024; maintained via an open spec on GitHub) that standardizes how LLM applications connect to external tools and data — "USB-C for AI." JSON-RPC 2.0 based; client-server architecture (host → client(s) → server(s)). Solves the N×M integration problem (turns N×M into N+M).
**(2) Maturity / spec version.** Stable/active and date-versioned. Current spec is 2025-11-25 (the official spec URL is modelcontextprotocol.io/specification/2025-11-25); prior dated versions include 2025-06-18. The spec is defined TypeScript-first in schema.ts (also exported as JSON).
**(3) How custom tools/servers are defined.**
- A server exposes three primitives: Tools (executable, model-controlled actions, with `tools/list` + `tools/call`), Resources (read-only contextual data, typically user/app-selected), and Prompts (reusable user-controlled templates).
- Capability negotiation on connect (`initialize` handshake) declares which primitives each side supports; dynamic updates via `notifications/.../list_changed`.
- Servers can be local processes or remote services; security/consent lives in the host, not the protocol.
**(4) Minimal server / transport.**
- Transports: stdio (local; server is a subprocess reading JSON-RPC on stdin, writing stdout, logging on stderr — "Clients SHOULD support stdio whenever possible") and Streamable HTTP (remote; HTTP POST/GET with SSE streaming). The Dec 19, 2025 transport blog confirms MCP will continue supporting exactly two official transports (stdio + Streamable HTTP), with custom transports allowed.
- Minimal server example (FastMCP, Python): decorate a function with `@server.tool` (or `@server.resource("uri")`), then `server.run(transport="stdio")`. Anthropic provides TypeScript and Python SDKs.
**(5) Sources.** Official spec (https://modelcontextprotocol.io/specification/2025-11-25); MCP transports (modelcontextprotocol.info/.../transports); MCP transport-future blog (Dec 19, 2025); FastMCP example via Medium (Laurent Kubaski); Google Cloud / Webfuse overviews.

## 2. SKILL.md format (Claude / Claude Code "Agent Skills")
**(1) What it is.** A SKILL.md file defines an "Agent Skill" — a directory containing a SKILL.md (plus optional `scripts/`, `references/`, `assets/`). The file starts with YAML frontmatter and a Markdown body of instructions.
**(2) Maturity / status.** Documented by Anthropic; released as an open standard on December 18, 2025 (spec at agentskills.io), adopted across multiple agents (Claude Code, OpenAI Codex CLI, Gemini CLI, GitHub Copilot, Cursor, VS Code).
**(3) YAML frontmatter fields.** Required: `name` (max 64 chars; lowercase letters, numbers, hyphens only; no reserved words like "claude"/"anthropic") and `description` (non-empty, max 1024 chars; should state what the skill does AND when to use it; written in third person). Optional/experimental fields include `allowed-tools`.
**(4) Progressive disclosure (documented 3 levels).**
- Level 1: at startup the agent pre-loads only each skill's name + description (~tens of tokens) into the system prompt.
- Level 2: if relevant, the agent reads the full SKILL.md body.
- Level 3: the agent loads additional bundled files (scripts/references/assets) only when needed. Skills can include executable code (e.g., a Python script) the agent runs as a tool without loading into context.
**(5) Sources.** Anthropic engineering blog "Equipping agents for the real world with Agent Skills" (anthropic.com); Claude API docs Agent Skills overview + best practices (platform.claude.com); agentskills.io (open standard).

## 3. MATLAB Agentic Toolkit — VERIFIED EXISTS
**(1) What it is.** An official MathWorks open-source toolkit that equips AI coding agents with MATLAB knowledge ("skills") and a live connection to MATLAB. Repo: github.com/matlab/matlab-agentic-toolkit.
**(2) Maturity / status.** Released April 13, 2026 (announced by Mike Croucher on The MATLAB Blog, "Introducing the MATLAB Agentic Toolkit"); the bundled MATLAB MCP Core Server receives updates "as often as every two weeks." Free and open-source; requires a local MATLAB installation and an AI service subscription.
**(3) Documented capabilities.**
- Automatically installs the MATLAB MCP Core Server to connect an agent to MATLAB; provides curated "skills" (self-contained SKILL.md files) for unit testing, app building, code review, debugging, code modernization.
- Goal: prevent agents from hallucinating toolbox functions, minimize token burn, write idiomatic MATLAB.
- Ships configurations for Claude Code, GitHub Copilot, OpenAI Codex, Sourcegraph Amp, Gemini CLI.
**(4) Capability match.** Custom-tool/agent-server definition for MATLAB: combines MCP tools + SKILL.md skills. Directly relevant to the project's custom-tool/agent-server angle (and ties to MCP + SKILL.md above).
**(5) Sources.** github.com/matlab/matlab-agentic-toolkit; MathWorks product page (mathworks.com/products/matlab-agentic-toolkit.html); MATLAB Blog intro (Mike Croucher, Apr 13, 2026); MATLAB Central discussion.

## 4. MATLAB MCP Core Server — VERIFIED EXISTS (official)
**(1) What it is.** MathWorks' official MCP server letting AI applications run MATLAB. Repo: github.com/matlab/matlab-mcp-core-server.
**(2) Maturity / status.** Released ~Nov 3, 2025 (announced on MathWorks AI and MATLAB blogs); updated to v0.3 (Dec 11, 2025) adding MCP Resources. Works with many MCP clients (Claude Desktop, VS Code, Gemini CLI, Cursor).
**(3) Documented capabilities.**
- Initial release provided 5 tools: detect installed toolboxes, check MATLAB code (via `checkcode`), run code, evaluate expressions, retrieve documentation (the "hands" of the agent).
- v0.3 added Resources (read-only structured context, e.g., MATLAB AI Coding Rules / coding guidelines) — the "eyes."
- Session modes: `new` / `auto` (default) / `existing` (connect to a running MATLAB, R2023a+); desktop vs nodesktop modes; telemetry on by default (opt-out via `--disable-telemetry`).
- License: usable only with MATLAB per the MathWorks license; not for shared/centralized multi-user use.
**(4) Related/separate.** A separate community server `Tsuchijo/matlab-mcp` (Python, via MATLAB Engine) also exists and is distinct from the official one. MathWorks also offers an MCP Framework for MATLAB Production Server (deploys MATLAB functions as MCP tools) and released a MATLAB MCP Client.
**(5) Sources.** github.com/matlab/matlab-mcp-core-server; MathWorks AI blog "Releasing the MATLAB MCP Core Server" (Nov 3, 2025) + v0.3 update (Dec 11, 2025); MATLAB Blog (Claude Desktop walkthrough); Tsuchijo/matlab-mcp (community).

## 5. Simulink Agentic Toolkit — VERIFIED EXISTS
**(1) What it is.** An official MathWorks toolkit that packages Model-Based Design expertise for AI coding agents, connecting them to Simulink via MCP. Repo: github.com/matlab/simulink-agentic-toolkit.
**(2) Maturity / status.** Released April 17, 2026 (announced by Guy Rouleau, "Simulink Agentic Toolkit," Guy on Simulink blog, blogs.mathworks.com); under active development ("Automated setup has been verified with basic workflows on each platform … please report issues"). Builds on the MATLAB MCP Core Server (downloaded during setup).
**(3) Documented capabilities.**
- Per the official `matlab/simulink-agentic-toolkit` README, it provides "7 MCP tools for reading, editing, querying, testing, and checking Simulink models" and "9 agent skills encoding MBD best practices."
- Gives agents structured access to Simulink models (architecture, signals, parameters, simulation behavior).
- Workflow: agent reads skills for domain knowledge, then calls MCP tools to interact with MATLAB/Simulink. Works with any MCP-supporting agent (Claude Code, GitHub Copilot, OpenAI Codex).
**(4) Capability match.** Extends the agentic/MCP pattern into Simulink modeling; same custom-tool + SKILL.md pattern as the MATLAB toolkit.
**(5) Sources.** github.com/matlab/simulink-agentic-toolkit (+ README); Guy on Simulink blog "Simulink Agentic Toolkit" (Guy Rouleau, Apr 17, 2026); MathWorks "Guide to Agentic AI with MATLAB" (mathworks.com campaign page).

## 6. Playwright
**(1) What it is.** An open-source Microsoft framework for cross-browser web automation and end-to-end testing, driving Chromium, Firefox, and WebKit through one API. Includes Playwright Test, a full test runner.
**(2) Maturity / version.** Stable/active. Latest 1.60.0 (released May 18, 2026; same version for the .NET/NuGet port). Prior: 1.59.0 (Apr 29, 2026), 1.57.0 (Dec 9, 2025), 1.55.0 (Aug 28, 2025).
**(3) Key characteristics.**
- Tests run headless by default (headed supported); as of v1.57 headed uses Chrome for Testing, headless uses chrome-headless-shell (Arm64 Linux still Chromium).
- Playwright Test: browser isolation (per-test contexts), auto-waiting, web-first assertions, parallel execution, Trace Viewer.
- Resilient locators (`getByRole`, `getByLabel`, `getByTestId`).
**(4) Playwright MCP (@playwright/mcp by Microsoft) — VERIFIED EXISTS.** Official Microsoft MCP server (repo github.com/microsoft/playwright-mcp; run via `npx @playwright/mcp@latest`). Operates on the page's accessibility tree (structured snapshots, not pixels/screenshots), assigning each interactive element a unique `ref` for deterministic interaction; documented as "fast/lightweight," "LLM-friendly" (no vision model needed), "deterministic." Optional vision capability via `--caps=vision`; a `browser_screenshot` tool exists but its description says to use `browser_snapshot` for actions. A separate community `@executeautomation/playwright-mcp-server` is distinct.
**(5) Sources.** playwright PyPI + playwright.dev release notes; npm/playwright; github.com/microsoft/playwright-mcp + playwright.dev/mcp.

### CI/CD patterns for markdown+HTML projects (documented, cross-cutting)
The project currently has no build pipeline. Documented patterns surfaced in this dive that bear on CI/CD for markdown+HTML instruments: (a) Quarto's `freeze`/`cache` for reproducible project renders and its CLI (`quarto render`) for converting .qmd/.ipynb/.md → HTML/sites in CI; (b) KaTeX server-side pre-rendering via Node (`katex.renderToString`) to ship plain HTML (flicker-free, reproducible) at build time; (c) Bokeh/Altair static exporters (`file_html`, vl-convert) to emit standalone HTML/images; (d) marimo's `marimo export` to HTML/WASM and `--sandbox` PEP 723 dependency pinning for reproducible runs; (e) Playwright (+Playwright MCP) for headless browser testing of standalone HTML instruments in CI. [These are documented capabilities of the individual tools; this report does not recommend a specific pipeline.]

---

## Caveats & Conflicts (consolidated)
- **Versions move fast.** This is a June 2026 snapshot. Three.js (revision-numbered, ~monthly; currently r184), Polars (~biweekly), Altair (weekly dev builds), and MCP (date-versioned) change rapidly.
- **Unverified/partial versions (flagged):** Observable Plot (in 0.6.x; exact latest patch not pinned), VTK/ParaView desktop numeric versions, KaTeX/MathJax (KaTeX 0.16.x; MathJax 3.x with 4.0 referenced — source-dependent), marimo (exact version not in gathered sources).
- **Source conflicts:** TikZ/PGF manual 3.1.11a (CTAN) vs 3.1.9a (secondary); PGFPlots 1.18.2 (manual) vs 1.18 (mirror); a Polars-version blog claim ("no 1.0 / 1.24.0") was contradicted by PyPI (1.41.2) and treated as unreliable.
- **Outdated task assumptions corrected:** pandas is now 3.0 (task said "2.x"); PyMC is now 6.0.x (task said "v5.x?").
- **All three MATLAB/Simulink "agentic" targets exist** under the exact names given (official MathWorks `matlab/` GitHub org), contrary to the possibility they might not — explicitly confirmed, with release dates (MATLAB Agentic Toolkit Apr 13, 2026; MATLAB MCP Core Server Nov 3, 2025 / v0.3 Dec 11, 2025; Simulink Agentic Toolkit Apr 17, 2026).
- **Some sourcing is secondary.** Bundle-size figures for KaTeX (~347.5 kB) and the KaTeX/MathJax load-time benchmark come from third-party blogs (BigGo, dasroot.net), not the projects' own docs; treat as indicative, not authoritative. The Jupyter reproducibility statistics, by contrast, trace to peer-reviewed primary studies (Pimentel et al. MSR 2019; Wang/Li/Zeller 2021) rather than vendor marketing.