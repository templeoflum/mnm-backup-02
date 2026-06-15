---
name: namespace
type: object
object-type: concept
essence: a bounded set of names in which each name resolves to at most one thing — context that makes identifiers unambiguous
field: [field.addressing-namespace-design]
status: established
state: float
attribution: a general computing concept (no single originator); crystallized across file systems, programming languages, and network naming through the 1960s–1990s
formalized: false
depends-on: []
used-by: [object.hierarchical-naming-dns-resolution, object.uri-generic-syntax]
---

**statement (plain)** — a namespace is a container of names. Inside it, every name points to at most one thing, so there is no confusion about what a name refers to. The same name can be reused in a different namespace to mean something else — the namespace is the context that tells the two apart.

**statement** — a namespace is a set of signs (names/identifiers) together with a mapping that takes each name to at most one entity within a given scope. Its defining property is **uniqueness within scope**: it prevents name collisions by qualifying a bare name with its containing context. Namespaces are commonly nested into **hierarchies**, which lets the same local name be reused under different parents (a name is then a path through the hierarchy). Name **binding** (associating a name with an entity) and **scope** (the region where a binding holds) are the operative sub-concepts.

**basis** — uniqueness-within-scope is what makes a name an *address*: without it, resolution is undefined. The concept is realized concretely in every member of the addressing spine — hierarchical file paths, DNS domains, URI authority/path, programming-language packages, XML namespaces — each a namespace specialized to its medium. It is the root concept of which the other objects in this field are instances or mechanisms.

**lineage** — there is no single inventor; "namespace" is a convergent abstraction. It is named explicitly in network naming ([[object.hierarchical-naming-dns-resolution]], 1980s) and in language design (C++ `namespace`, XML Namespaces), but the underlying idea — context disambiguates names — predates the term in file systems and library classification ([[field.faceted-classification]], [[field.numeration-systems]]).

**sources** — see [[source.mockapetris-rfc1034]] (a hierarchical network namespace) and [[source.berners-lee-rfc3986]] (URI as namespace) for canonical engineered instances; Wikipedia "Namespace," "Name binding," "Scope (computer programming)" for the general concept. **[confirmed]**
