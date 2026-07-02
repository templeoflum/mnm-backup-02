---
name: semisimple-classification
type: object
object-type: theorem
essence: every complex semisimple Lie algebra is a sum of simple ones, and the simple ones are exactly A_n B_n C_n D_n plus the five exceptionals G₂ F₄ E₆ E₇ E₈ — via root systems
field: ["[[field.lie-theory]]"]
status: proven
state: settled
attribution: W. Killing (1888–1890, incomplete); made rigorous by É. Cartan (1894); Dynkin diagrams Dynkin (1947)
formalized: true
source: ["[[source.killing-1888]]", "[[source.cartan-1894]]", "[[source.dynkin-1947]]", "[[source.hall-lie]]", "[[source.kirillov-lie]]"]
depends-on: ["[[object.lie-algebra]]"]
used-by: []
aliases: ["object.semisimple-classification"]
---

**statement (plain)** — the "building blocks" of Lie theory can be completely listed. A semisimple Lie algebra breaks up into simple pieces, and the simple complex Lie algebras fall into just four endless families plus exactly five oddities. The four families are the symmetry algebras of the classical geometries (special linear, two orthogonal families, symplectic); the five exceptions — G₂, F₄, E₆, E₇, E₈ — exist only in fixed dimensions and exist for deep structural reasons, not by accident. The whole classification is run through *root systems*: geometric patterns of vectors that the algebra forces to satisfy rigid angle-and-length rules, leaving only finitely many possibilities.

**statement (formal)** — over ℂ, every finite-dimensional semisimple [[Lie algebra]] is a direct sum of simple Lie algebras. Choosing a Cartan subalgebra 𝔥 ⊆ 𝔤 (a maximal toral / self-normalizing nilpotent subalgebra) and decomposing 𝔤 under the adjoint action of 𝔥 yields a **root system** Φ ⊆ 𝔥* (the nonzero weights). The root system, encoded by its Cartan matrix / connected **Dynkin diagram**, determines 𝔤 up to isomorphism. The connected Dynkin diagrams — hence the simple complex Lie algebras — are exactly:
- four classical infinite series: A_n (𝔰𝔩_{n+1}), B_n (𝔰𝔬_{2n+1}), C_n (𝔰𝔭_{2n}), D_n (𝔰𝔬_{2n});
- five exceptional algebras: G₂, F₄, E₆, E₇, E₈. **[confirmed]**

**proof / status** — proven. The classification reduces the algebraic problem to classifying root systems / admissible Cartan matrices, a finite combinatorial problem.

**lineage (priority/rigor contested — carried)** — [[Wilhelm Killing]] classified the complex finite-dimensional simple Lie algebras in a series of papers 1888–1890 and introduced root systems in doing so, but his proof was **incomplete / lacked rigor** (and contained some errors, e.g. initially mis-handling the exceptional cases). [[source.killing-1888]] [[Élie Cartan]] made the classification rigorous and corrected/completed it in his 1894 doctoral thesis, and additionally classified the real simple Lie algebras. [[source.cartan-1894]] The modern diagrammatic encoding (Dynkin diagrams) is due to [[E. B. Dynkin]] (1947). [[source.dynkin-1947]] All **[confirmed as attribution]** (corroborated by ≥2 references; primary papers not opened). The classification is sometimes called the **Killing–Cartan classification**.

**door** — B. C. Hall, *Lie Groups, Lie Algebras, and Representations* (root systems / classification chapters) [[source.hall-lie]]; A. Kirillov Jr. (draft PDF) [[source.kirillov-lie]].

**sources** — [[source.killing-1888]], [[source.cartan-1894]], [[source.dynkin-1947]], [[source.hall-lie]], [[source.kirillov-lie]]; cross-checked against Wikipedia ("semisimple Lie algebra"), Encyclopedia of Mathematics, and standard classification surveys. **[confirmed]**
