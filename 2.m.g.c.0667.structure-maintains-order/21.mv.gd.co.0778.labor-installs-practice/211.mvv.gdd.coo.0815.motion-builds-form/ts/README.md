# TS

A visual instrument: one nD generative formula, drawn with a phosphor beam,
played in the browser.

TypeScript + WebGPU. The formula runs GPU-side (a WGSL compute shader emits the
point-path in parallel), the points render instanced, and the beam is a glow
shader pass.

Built from atomic units, each proven in isolation before they combine: the
clock (a period), a rotation, the ratio ladder, the schedule, self-scaling,
projection.

## run

    npm install
    npm run dev      # dev server (hot reload)
    npm run build    # bundle to dist/
