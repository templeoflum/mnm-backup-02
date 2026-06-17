# -*- coding: utf-8 -*-
"""
lineage-map — corpus-derived concept-dependency map generator (Map v1).

Reads the ground corpus (0/corpus/) and emits a Graphviz DOT file rendering a
named field-set's `depends-on` DAG: nodes = object records, edges = depends-on,
grouped into per-field clusters, colored by `status`. Render to SVG with:
    dot -Tsvg <out>.dot -o <out>.svg

DISCIPLINE (frame.lineage-map.f0): render ONLY what the records hold. Edges that
reach OUTSIDE the field-set are drawn as boundary nodes (dashed, grey) — they
show where the set's DAG depends on the wider corpus, an honest gap marker, not
hidden. Nothing is invented; no narrative framing is imposed.

Usage:  python lineage-map.py <set-name>     (default: geometry)
Field-sets are defined below; add entries to map other fields/branches.
"""
import re, glob, sys, os

CORPUS = os.path.join(os.path.dirname(__file__), "..", "..", "corpus")

# Named field-sets. The set is an EXPLICIT choice (which fields to map together),
# not derived from any narrative — extend deliberately.
FIELD_SETS = {
    "geometry": [
        "coordinate-systems-erlangen-program", "differential-geometry",
        "projective-geometry", "point-set-topology", "lie-theory",
        "group-theory", "geometric-algebra", "linear-algebra", "category-theory",
    ],
}

# status -> fill colour (dark theme, matching the 200-dock SVG palette)
STATUS_FILL = {
    "empirical": "#7FA8A0", "established": "#6E8FB0", "proven": "#D49E33",
    "doctrinal": "#9D8EC4", "foundational": "#C98F6B", "standard": "#8A97A0",
    "definition": "#5E7686",
}
DEFAULT_FILL = "#46586A"

def fm(path):
    t = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---", t, re.S)
    d = {}
    for line in (m.group(1).splitlines() if m else []):
        mm = re.match(r"^([\w-]+):\s*(.*)$", line)
        if mm:
            k, v = mm.group(1), mm.group(2).strip()
            if v.startswith("[") and v.endswith("]"):
                v = [x.strip() for x in v[1:-1].split(",") if x.strip()]
            d[k] = v
    return d

def load_objects():
    objs = {}
    for p in glob.glob(os.path.join(CORPUS, "object.*.md")):
        d = fm(p)
        if d.get("type") == "object" and "name" in d:
            objs[f"object.{d['name']}"] = d
    return objs

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')

def build(set_name):
    fields = FIELD_SETS[set_name]
    fieldset = {f"field.{f}" for f in fields}
    objs = load_objects()

    # in-set objects: membership via `field:`
    def field_of(d):
        f = d.get("field", [])
        return f[0] if isinstance(f, list) and f else (f if isinstance(f, str) else None)
    inset = {h: d for h, d in objs.items() if field_of(d) in fieldset}

    # edges + boundary nodes (depends-on reaching outside the set)
    edges_in, edges_bound, boundary = [], [], {}
    for h, d in inset.items():
        for tgt in (d.get("depends-on", []) if isinstance(d.get("depends-on"), list) else []):
            if tgt in inset:
                edges_in.append((h, tgt))
            elif tgt in objs:                       # real grounded object, outside the set
                edges_bound.append((h, tgt)); boundary[tgt] = objs[tgt]
            # tgt not in objs at all would be a dangling ref — reconcile guarantees none

    return fields, fieldset, inset, edges_in, edges_bound, boundary, field_of

def emit_dot(set_name):
    fields, fieldset, inset, edges_in, edges_bound, boundary, field_of = build(set_name)
    L = []
    L.append(f'digraph lineage_{set_name.replace("-","_")} {{')
    L.append('  graph [bgcolor="#14202B", rankdir=BT, splines=true, nodesep=0.35, ranksep=0.7, fontname="Helvetica", fontcolor="#E8E4D8", labelloc=t];')
    L.append(f'  label="corpus lineage map — {set_name} — concept-dependency DAG (v1, rendered from ground)";')
    L.append('  node [shape=box, style="rounded,filled", fontname="Helvetica", fontsize=11, fontcolor="#14202B", color="#2F4150", penwidth=1];')
    L.append('  edge [color="#E0B24A", arrowsize=0.7, penwidth=1.1];')
    L.append('  // edge A->B reads "A depends-on B"; rankdir=BT lifts foundations (most depended-on) toward the top.')

    # per-field clusters
    for f in fields:
        fh = f"field.{f}"
        members = [h for h, d in inset.items() if field_of(d) == fh]
        if not members:
            continue
        L.append(f'  subgraph "cluster_{f}" {{')
        L.append(f'    label="{esc(f)}"; fontcolor="#C9B27E"; color="#2F4150"; style=dashed;')
        for h in sorted(members):
            d = inset[h]
            fill = STATUS_FILL.get(str(d.get("status", "")), DEFAULT_FILL)
            name = h.split(".", 1)[1]
            ot = d.get("object-type", "")
            tip = esc(str(d.get("essence", ""))[:200])
            L.append(f'    "{h}" [label="{esc(name)}\\n[{esc(str(ot))}]", fillcolor="{fill}", tooltip="{tip}"];')
        L.append("  }")

    # boundary nodes (outside the set, depended-on from inside) — honest gap markers
    if boundary:
        L.append('  // boundary: grounded objects OUTSIDE this set that the set depends on')
        for h, d in sorted(boundary.items()):
            name = h.split(".", 1)[1]
            tf = (field_of(d) or "field.?").split(".", 1)[1]
            L.append(f'    "{h}" [label="{esc(name)}\\n({esc(tf)})", shape=box, style="rounded,dashed,filled", fillcolor="#1C2C38", fontcolor="#8A97A0", color="#46586A"];')

    for a, b in edges_in:
        L.append(f'  "{a}" -> "{b}";')
    for a, b in edges_bound:
        L.append(f'  "{a}" -> "{b}" [color="#46586A", style=dashed, arrowsize=0.6];')

    L.append("}")
    return "\n".join(L), len(inset), len(edges_in), len(edges_bound), len(boundary)

if __name__ == "__main__":
    sname = sys.argv[1] if len(sys.argv) > 1 else "geometry"
    dot, n_obj, n_edge, n_bound_edge, n_bound = emit_dot(sname)
    out = os.path.join(os.path.dirname(__file__), f"map.lineage-{sname}.f0.dot")
    open(out, "w", encoding="utf-8", newline="\n").write(dot + "\n")
    print(f"{sname}: {n_obj} object-nodes, {n_edge} in-set edges, "
          f"{n_bound} boundary nodes ({n_bound_edge} boundary edges)")
    print(f"wrote {os.path.basename(out)} — render: dot -Tsvg {os.path.basename(out)} -o map.lineage-{sname}.f0.svg")
