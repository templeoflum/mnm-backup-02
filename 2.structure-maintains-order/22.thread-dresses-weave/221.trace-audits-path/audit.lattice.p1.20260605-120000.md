# Audit — lattice — p1 — 2026-06-05

Pass 1: Conceptual wobbles. First audit of the lattice after building View 0 selector and microscope.

## Catches

### 1. Sort order disagreement across patterns

Build pattern: 0→2→1. Settled preservation: 0→1→2. Original shift register: 1→0→2. Three different orderings for the same structure. Self-similarity says one pattern should appear everywhere.

### 2. Tree language saturates the code

CSS classes: `branch`, `leaf`, `cell`, `v0-sel-leaves`, `v0-sel-leafwrap`, `v0-sel-branchbar`, `v0-sel-cellrow`. Depth labels: "branch / leaf / cell". View 1 minimap: `.w-tree`. Fold arrows: ▶/▼ from file-tree conventions. The vocabulary says hierarchy. The structure says containment.

### 3. Microscope position panel uses parent/children/siblings

Lines 859-883. "Parent" implies authority. If containment is mutual, "contains" and "contained by" would be more accurate than parent/child.

### 4. Editable triads in definition view

Lines 852-856, 902-908. `contenteditable="true"` in View 0. Mutation from the view meant for looking until things hold still. Drift from earlier builds.

### 5. View 2 destination grid has no containment structure

Lines 1222-1234. Flat 3x3 grids per branch. No leaf grouping, no colored lineage. The selector shows containment, the destination grid doesn't. Same structure rendered with two contradictory visual models.

### 6. Ring SVG center dot changes color by branch

Line 1069. The center is the origin — exact, fixed. But the dot recolors based on current address. The origin doesn't change.

### 7. Ratio line labels 0 and 1 as symmetric endpoints

Line 1148. But 0 IS reachable (address 000 = ratio 0.0000). 1 is never reached. The display treats them the same when they aren't.
