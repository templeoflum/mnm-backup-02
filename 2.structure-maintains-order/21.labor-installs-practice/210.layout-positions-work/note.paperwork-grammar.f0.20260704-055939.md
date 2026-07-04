# note — paperwork grammar — f0

The proposal form the dispatch popup reads (V5, frame.window-hands-floor).
Cut after lantern's first-principle-toys paperwork raised with nowhere to
sign (20260704-055747): the form was FLAG-only — the sign button exists
only for a bare SIGN: line. The whole grammar, for any seat authoring
paperwork:

## the form

    # proposal — <subject> — fN
    <two or three lines of prose: what this is, then "Configure and sign.">

    FLAG <label>: <option a> | <option b> | <option c> = <default>

    SIGN:

- **FLAG line**, one per decision: `FLAG label: a | b | c = current`.
  Options split on `|`; the value after `=` is the current choice and may
  be multi-word. Every flag also offers custom… in the window; a custom
  value the operator typed displays truthfully even if it matches no option.
- **SIGN:** — a bare `SIGN:` line, nothing after the colon, at the bottom.
  The popup turns it into the signature button; ON SIGN it becomes
  `SIGNED: <handle> <stamp>` and the window auto-posts "signed: <file>"
  back to the proposing seat's channel. No SIGN: line, no way to sign —
  the button exists only while unsigned (poka-yoke), and only if the line
  exists at all.

## aiming and reading back

- **Aim**: dial the file ON (`active.py on <path>`). The window watches
  /active for `proposal.*` names and raises the FIRST one it finds; one
  popup at a time. Dismissal by the operator lasts the session.
- **Read back**: on the signed auto-post, read the decisions from the doc,
  then dial it OFF. The signed file is the record; it does not fold for
  the signature.

Signed precedents: proposal.dream-commission.f0 (210, the first),
proposal.working-signal.f0 (210).
