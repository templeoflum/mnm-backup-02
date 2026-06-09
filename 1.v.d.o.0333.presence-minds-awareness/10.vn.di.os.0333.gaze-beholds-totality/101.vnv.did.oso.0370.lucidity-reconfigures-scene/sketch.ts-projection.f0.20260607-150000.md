# sketch — ts-projection — f0 — 20260607-150000

dimension collapse. 4D→3D and 3D→2D. baseline.

---

## what it is now

### 4D → 3D: project4to3(p)
input: 4D point [x, y, z, w]
process:
1. apply 4D viewing rotations (w-turns): rotate in XW, YW, ZW planes
2. project to 3D: either orthographic (drop w) or perspective (from w-axis)

perspective formula: eye at distance dist4·rmax/80 along +w. scale = eye/(eye - w). this keeps foreshortening proportional to form size.

### 3D → 2D: rot(p) then proj(p)
- rot(p): apply yaw and pitch rotations to the 3D point
- proj(p): orthographic projection to 2D canvas, with zoom and center offset

### state
- view4: {wx, wy, wz} — 4D viewing rotation angles
- proj4mode: 'ortho4' or 'persp4'
- yaw, pitch — 3D camera angles
- zoom — view scale
- viewPivot — center of rotation (defaults to COM or origin)

### auto-spin
w-spin: auto-rotates the 4D viewing angle so the form "turns inside out" revealing its 4D structure. toggled by button. this has no 3D equivalent.

---
