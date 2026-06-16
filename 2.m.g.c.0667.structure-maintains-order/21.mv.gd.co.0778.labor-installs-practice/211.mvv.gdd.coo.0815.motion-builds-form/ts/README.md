# TS

A visual instrument: one nD generative formula, drawn with a phosphor beam,
played in the browser.

Plain JS + WebGPU, **no build**. The browser runs the source files directly; the
lattice serves them as-is — the file you edit is the file that runs. Types live
in JSDoc and are checked by `tsc` (which emits nothing). The formula runs
GPU-side (a WGSL shader), the points render instanced, the beam is a glow pass.

Built from atomic units, each proven in isolation before they combine: the
clock (a period), a rotation, the ratio ladder, the schedule, self-scaling,
projection.

## run

Open `index.html` through the lattice server — no build, no install:

    http://localhost:8000/<this unit's address>/ts/index.html

Or any static server pointed at this folder. It runs with zero dependencies.

## develop

Edit `*.js` and reload the tab — the change is live (the browser runs what you
saved). For type-checking while you work:

    npm install            # one-time: typescript + @webgpu/types (checker only)
    npm run check          # tsc --noEmit --watch — reports type errors, emits nothing

The proofs (`clock.proof.js`) run on every page load and print to the console.
They are pure, so they also run straight under node:

    node --input-type=module -e "import('./clock.proof.js').then(m => m.runProofs().forEach(r => console.log(r.pass ? 'PASS' : 'FAIL', r.name)))"

## dependencies

A unit is buildless and dependency-free by default. External knowledge enters
through research — extracted to first principles in the corpus and rebuilt here —
not by importing black boxes. A build (and `npm` imports) is a per-unit
escalation, earned only when a unit needs *scaffolding* that is genuinely better
imported than rebuilt — never for *subject-matter*, which is always rebuilt.
