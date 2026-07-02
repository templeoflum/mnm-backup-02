---
name: baker-campbell-hausdorff-formula
type: object
object-type: theorem
essence: log(eˣeʸ) = X + Y + ½[X,Y] + … is an infinite series in iterated brackets of X and Y alone — multiplying exponentials stays inside the Lie algebra
field: [field.lie-theory]
status: proven
state: settled
attribution: Campbell (1897), Poincaré (1899), Baker (1905), Hausdorff (1906); first explicit all-coefficient form Dynkin (1947)
formalized: true
source: [source.campbell-1897, source.baker-1905, source.hausdorff-1906, source.dynkin-1947, source.hall-lie, source.kirillov-lie]
depends-on: [object.lie-algebra, object.exponential-map-lie, object.lie-group]
used-by: []
aliases: ["object.baker-campbell-hausdorff-formula"]
---

**statement (plain)** — when you multiply two exponentials of (non-commuting) quantities X and Y, the product is again a single exponential, exp(X)exp(Y) = exp(Z), and the remarkable fact is that Z can be written using *only* X, Y, and their nested brackets [X,Y], [X,[X,Y]], … — never any other operation. The first terms are Z = X + Y + ½[X,Y] + …; if X and Y commute the brackets vanish and Z = X + Y, recovering ordinary exponentials. This is why the exponential map ties the group and the algebra together: the group's multiplication, read through exp, is governed entirely by the algebra's bracket.

**statement (formal)** — in the (completed) free Lie algebra on X, Y (or for elements of a Lie algebra where the series converges, e.g. small matrices), Z = log(exp(X)·exp(Y)) is given by a series of iterated Lie brackets of X and Y:
Z = X + Y + ½[X,Y] + 1/12 [X,[X,Y]] + 1/12 [Y,[Y,X]] − 1/24 [Y,[X,[X,Y]]] + ⋯
The content of the theorem (Hausdorff) is that **every term is a Lie element** — a linear combination of iterated brackets — with no need for the associative product. **[confirmed]**

**proof / status** — proven. Convergence holds for ‖X‖, ‖Y‖ small enough in a Banach/matrix setting; as a statement in the free Lie algebra it is purely algebraic. Dynkin's explicit formula gives every coefficient as an iterated-bracket sum over compositions. Standard references: Hall, Kirillov Jr.

**lineage (multiply contested — carried, not collapsed)** —
- **J. E. Campbell**, 1897–98: first noted in print the existence of Z for the composition of finite transformations of a continuous group. [[source.campbell-1897]]
- **H. Poincaré**, 1899: elaborated the formula (Poincaré's contribution sourced secondarily; no separate source record opened here — distinct from [[source.poincare-1890]]).
- **H. F. Baker**, 1905 (sometimes 1901–02): independent complete symbolic solution. [[source.baker-1905]]
- **F. Hausdorff**, 1906: proved Z is expressible in iterated commutators, linked to the Jacobi identity. [[source.hausdorff-1906]] — NOTE: distinct work from [[source.hausdorff-1914]] (point-set topology); do not conflate.
- **E. B. Dynkin**, 1947: first explicit formula with all numerical coefficients ("BCHD" / Dynkin form). [[source.dynkin-1947]]
- (F. Schur, 1890, gave an earlier convergent recursive power series — mentioned in sources, not separately recorded.)
All five primary attributions **[confirmed as attribution]** (corroborated by ≥2 references; original papers not opened). The naming "Baker–Campbell–Hausdorff" is conventional and under-credits Campbell's priority and Dynkin's explicitness — hence the variant "BCHD."

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations*, BCH chapter [[source.hall-lie]]; A. Kirillov Jr. (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.campbell-1897]], [[source.baker-1905]], [[source.hausdorff-1906]], [[source.dynkin-1947]], [[source.hall-lie]], [[source.kirillov-lie]]; cross-checked against Encyclopedia of Mathematics ("Campbell–Hausdorff formula"), Wikipedia ("BCH formula"), and Achilles–Bonfiglioli, "The early proofs of the theorem of Campbell, Baker, Hausdorff, and Dynkin" (*Arch. Hist. Exact Sci.*, 2012). **[confirmed]**
