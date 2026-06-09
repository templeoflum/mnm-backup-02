# Parked — f0 — 260607 [float]

Location floating. 100 (wonder · bounds · frame) is a candidate but unsettled — is this where parked ideas live, or where raw dream material lives? The x2 cell as log pattern is also forming. For now: ideas land here so they don't get lost.

---

## Verb map / verb navigation

Source: dream run 260607, keyboard design session → structural observation about branch interleaving → realization that verbs are the navigator.

**The insight:** you don't navigate the lattice by address — you navigate by asking "what am I doing?" The verb at each depth tells you where you should be.

- Branch level: am I grounding (0), minding (1), or maintaining (2)?
- Leaf level: within that, am I [verb 0], [verb 1], or [verb 2]?
- Cell level: within that, am I [verb 0], [verb 1], or [verb 2]?

Three questions → three answers → you're at an address. Then the noun tells you what's there, the mode (goes) tells you what you can do there.

**Why it matters:** the cycles between branches (200↔100↔200 etc) aren't abstract structure — they're verb transitions. Receiving → wondering → receiving. The cycling is the movement of work. A verb map would make those flows visible and navigable.

**What it would be:** all 27 verbs mapped with their natural connections — which verbs lead to which, what the flows are, where cycles form. A navigation layer over the address system. Navigate by action, not by digit.

**What it implies for the UI:** verb-based navigation as an alternative to digit-based. "What are you doing?" as the entry question. Natural next-steps visible from any address.

**Not ready to build because:** the verbs themselves aren't all settled in the T object. Need the full verb set authored and sitting true before mapping connections between them. Also: the structural question about cycles (do leaf pairs cycle together? different rhythms for different depths?) is still forming.

[float]

---

## File naming convention — project tracking through addresses

Source: manifest update session 260607, audit revealed files can't be traced through the lattice as they move between addresses.

**The problem:** folder addresses give structure to where things live, but file names don't carry enough information to track which project or scope a file belongs to as it flows between folders. A file at 200 (intake) that moves to 111 (guides) that eventually reaches 010 (ground) needs a name that tells you what it is at every stop.

**The forming idea:** something like `project.type.scope.fN.YYYYMMDD-HHMMSS.ext` — where the project tag stays constant as the file moves, the type says what kind of document it is, the scope says what it's about, the fold tracks versions, and the timestamp ensures sort order. Example: `lattice.frame.intake.f1.20260606-144500.md`.

**What it would solve:** manifest tracking becomes simpler — you can find all files for a project by prefix, find the latest version by timestamp, trace the fold history by fN. The folder tells you where it is now, the name tells you where it came from and what it belongs to.

**Not ready to settle because:** the relationship between project names, document types, and the existing naming convention needs more thought. Current convention declares 5 document types but 11 exist in practice. The project tag concept is new and untested. Also: does every file need a project tag, or only files that move between addresses?

[float]

---

## Keystone rework — structure by branch

The keystone embodies what it describes: 0 is definitions, 1 is movement, 2 is tracking. Each branch section IS what that branch does.

[float]

---

## Dashboard — persistent top bar across all views

Source: UI session 260607, while testing file links at 211 and thinking about holding frames/schedules while navigating.

**The shape:** The top area becomes a cockpit that travels with you across all views. Everything persistent lives there — everything that changes lives below.

**What lives in the dashboard:**
- Pinboard: slots where you drag files in as compact chips. Click to peek, double-click to open. Hold the current frame from 210, the schedule from 202, a sketch from 101 — they stay while you navigate to 211 to check builds, to 100 to verify findings, wherever.
- Address counter: always visible, always shows where you are regardless of which view is active.
- Quick jumps: corners (000, 111, 222), branch roots (0, 1, 2).
- View controls: refresh, debug, view toggles (already exist, formalize as dashboard residents).

**The distinction:** The dashboard is the instrument panel. The views below are the windshield. You don't lose your gauges when you look left.

**Not ready to build because:** research operation (dive 0/1) covers frontend architecture and server decisions. Those inform whether the dashboard is pure client-side or needs server state. Also: the pinboard implies drag-and-drop and persistence across sessions — scope that depends on the storage decision.

[float]

---
