# audit — incident report: frames named against the settled convention — f0

clerk, 20260702. Ordered by the operator after catching `frame.corpus-reader` misnamed —
the triad IS the frame's name (settled 20260621), and "corpus-reader" was a descriptive
label. He also flagged his own gate: `frame.wiki-bridge` passed his review misnamed the
day before. Full-disk survey run before writing; scope below is grounded, not recalled.

## §1 — scope (all frames on disk vs the convention)

Convention (settled 20260621, recorded in the seat's own memory the same day): the frame's
name IS its authored triad — filename `frame.<noun-verb-mod>.fN.<utc>[.live].md`, header
`# frame — noun · verb · mod — fN — [status]`, no separate descriptive name.

- **Conforming — every kit/zine frame since the settle** (8 lineages, 20260621–0630):
  `template-seeds-frame` · `beam-traces-wake` · `scope-shows-mode` · `trigger-steadies-beam`
  · `sweep-locks-turns` · `beam-holds-speed` · `beam-fades-trace` · `editor-composes-zine`.
- **Deviating — three, ALL clerk frames at 210, post-settle:**
  1. `frame.address-folders-shorten.f0` (20260629, closed COMPLETE) — descriptive slug +
     separate blessed triad `folder · sheds · length` in the header. The earliest deviation;
     unflagged by either party.
  2. `frame.wiki-bridge.f0/.f1` (20260701–02, closed-as-reduced) — descriptive slug; triad
     `bridge · joins · corpus` blessed separately. Passed the operator's review (his own
     flag, this session). f1 also lacked the `.live` working-copy marker.
  3. `frame.corpus-reader.f0` (20260702) — caught by the operator within the session;
     renamed to `frame.reader-resolves-web.f0`, refs trued (commit 72aff2f).
- Pre-settle frames (core, intake, kit, ts-*, …) are grandfathered — named before the
  convention existed.
- Secondary, noted not ruled: `.live` marker use varies even among conforming frames
  (some f1 working copies carry it, some don't) — a convention true-up candidate, not
  part of this incident.

## §2 — root cause

**Authoring from the nearest precedent instead of the recorded principle.** All three
deviations are 210-resident: at 210 the neighboring files are old grandfathered
descriptive frames, and each new deviation then became the next one's precedent
(wiki-bridge normalized corpus-reader). In the kit/zine folders the neighbors are
conforming, so those frames conform — the naming followed **whatever the folder showed**,
not the convention. The house already has this exact lesson recorded twice:
"a same-type precedent ≠ the principle" ([[place-files-by-content-branch]]) and the
convention memory itself ends "this is a build-time checklist, not just knowledge" —
written because of a prior same-shape miss, and still not consulted at Write-time.

**Same family as [[audit.wiki-bridge-alias-incident.f0]]:** both incidents are authoring
from the wrong reference frame — there, model memory instead of the running app; here,
the neighboring file instead of the settled convention. The common failure is not
checking the authoritative ground at the moment of writing.

Second gate: the operator passed wiki-bridge misnamed and has named that himself. Two
gates sharing one blind spot means the check cannot live in either party's recall — it
must be mechanical at authoring time (§4).

## §3 — damage

Naming only. No content, no addresses, no handles inside records. `corpus-reader` fixed
same-session. The two closed deviants (`wiki-bridge`, `address-folders-shorten`) are
referenced by handle in batons, audits, and commit messages.

## §4 — corrective (proposed, not self-ratified)

1. **Mechanical check at frame-Write:** filename slug ≡ header triad slugged
   (`bridge · joins · corpus` → `frame.bridge-joins-corpus`). Five seconds, zero judgment.
2. **Author from the settled skeleton** (the convention memory / the frame template
   lineage at 210), never from the nearest neighboring frame — neighbors carry drift.
3. The convention memory's own one-line description contradicted its body ("header:
   name — fN — triad" vs the body's "the triad IS the name") — trued this session so the
   recalled summary can't mislead again.

## §5 — remediation of the two closed deviants (operator's word)

- **(a) rename now** — `frame.wiki-bridge.*` → `frame.bridge-joins-corpus.*`,
  `frame.address-folders-shorten.f0` → `frame.folder-sheds-length.f0`, all live refs
  trued by grep (old handles survive in committed history, as with corpus-reader).
- **(b) carry named** — closed docs keep their misnames, deviation recorded here (the
  house pattern for historical record: [[fold-discipline-nuance]] "mis-folds carry
  forward, named"; the corpus.index verify-log precedent).
- Clerk's lean, held loosely: **(b)** for the closed pair — they are history now, and this
  report is the correction; renaming rewrites labels the trail already speaks.

links: [[audit.wiki-bridge-alias-incident.f0]] · [[frame-doc-conventions]] ·
[[frame.reader-resolves-web.f0]] · commit 72aff2f (the caught-and-fixed instance)
