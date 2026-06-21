# frame — template · seeds · frame — f0 — [pinned · live]

A lattice action that creates a new frame pre-filled from the latest frame template — the easy-correct path replaces remembering the structure.

## §1 — agreement · at a glance
- new-frame action: pick scope + address → creates `frame.<scope>.f0.<utc>.live.md` seeded with the template.
- template is the source of truth; resolve the **latest** `template.frame.f*` by **direct filesystem glob** (sees inside units too) — so the template can live at any address with no migration breaking the function.
- resolver is **type-generic** (`template.<type>.f*`); only "new frame" wired now.
- PINNED — design settled, build deferred; operator points at the template for manual instantiation meanwhile.

## §2 — plan · slices & rungs
status marks: ○ todo · ▸ doing · ✓ done · ⊘ blocked

**slice 1 — resolver**  ○ todo
goal: find the latest template of a type, anywhere on disk.
- ○ server `latest_template(type)` — glob `template.<type>.f*.md` across root, pick highest fold
- ○ return its content + the resolved path

**slice 2 — create-from-template**  ○ todo
goal: the create op can seed a new file from a template.
- ○ extend create: optional `from_template` → seed content + `.live` for forming types
- ○ name `frame.<scope>.f0.<utc>.live.md`; witnessed into the manifest as usual

**slice 3 — client trigger**  ○ todo
goal: a one-action "new frame" in the lattice.
- ○ button / console command: prompt scope + address → create-from-template('frame')
- ○ open the new frame in the reader for editing

## §3 — trace · DAG & status
```
slice 1 ─→ slice 2 ─→ slice 3
```
- **status:** pinned — design settled, build deferred (operator's call). manual template-copy works meanwhile.
- **touches:** server.py (resolver + create op) · lattice.f2 (trigger).
- **also:** migrate the template OUT of the kit unit into the lattice when this builds — deferred with it.
- mode: builder window · `.live` (uncrystallized; pinned).
