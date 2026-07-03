---
name: uri-generic-syntax
type: object
object-type: definition
essence: the standard grammar of an address on the web — scheme : authority / path ? query # fragment
field: ["[[field.naming-and-addressing]]"]
status: established
state: settled
attribution: Berners-Lee, Fielding & Masinter (RFC 3986, 2005); earlier RFC 1630 (1994), RFC 2396 (1998)
formalized: true
source: ["[[source.berners-lee-rfc3986]]"]
depends-on: ["[[object.namespace]]", "[[object.hierarchical-naming-dns-resolution]]"]
used-by: []
---

**statement (plain)** — a URI is a single line of text that names a resource. RFC 3986 fixes its shape: a **scheme** (like `https`) says which rules apply, then comes the **authority** (the who/where, usually a host name), the **path** (a slash-separated route within that authority), an optional **query** (extra parameters after a `?`), and an optional **fragment** (a spot within the resource after a `#`). One grammar, used by every scheme, so any program can split an address into its parts without knowing the scheme.

**statement** — RFC 3986 defines the **generic syntax** common to all Uniform Resource Identifiers as a hierarchical sequence of five components:

`URI = scheme ":" ["//" authority] path ["?" query] ["#" fragment]`

- **scheme** — leading token before the first `:`; selects the interpreting specification (e.g. `http`, `urn`, `mailto`).
- **authority** — introduced by `//`; optional `userinfo@`, a **host**, and optional `:port`.
- **path** — hierarchical, slash-separated data identifying the resource within the scheme/authority.
- **query** — non-hierarchical data after the first `?`, terminated by `#` or end.
- **fragment** — after `#`; a secondary reference into the resource.

The grammar is given as ABNF; parsing is scheme-independent. A URL is a URI that also gives a means of locating the resource.

**basis** — a single generic grammar means addresses are **uniformly parseable** regardless of scheme — the key property that lets the web be open-ended (new schemes need no new parser). The path component is a hierarchical [[object.namespace]]; the host in the authority is typically a DNS name, so URI resolution layers directly on [[object.hierarchical-naming-dns-resolution]]. Relative references resolve against a base URI by a defined algorithm, making addresses composable.

**lineage** — Tim Berners-Lee first specified URIs in **RFC 1630 (1994)**; the syntax was refined through **RFC 2396 (1998)** and settled as the current standard **RFC 3986 (Berners-Lee, Fielding & Masinter, Jan 2005, STD 66)** [[source.berners-lee-rfc3986]]. **[confirmed]**

**sources** — [[source.berners-lee-rfc3986]] (RFC 3986, origin); Wikipedia "Uniform Resource Identifier," "URI fragment." **[confirmed]**
