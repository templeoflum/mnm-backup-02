# CHUNK 2 — "The Structure Canon": A Three-Tier Archaeological Research Map

## TL;DR
- **All three slices are now mapped with high attribution confidence.** Across 24 fields, the marquee origin and codification citations verified cleanly against primary or near-primary sources — von Neumann–Goldstine 1947, Cooley–Tukey 1965, Kalman 1960, Turing 1936, Neyman–Pearson 1933, Mockapetris's DNS RFCs, the Dutch Manual 1898, Ranganathan 1933/1937, Luhmann 1981, Playfair 1786/1801, Fletcher–Munson 1933, and Dewey 1876 are all confirmed.
- **Two title corrections and two date resolutions matter for transcription.** Frank Crow's 1977 CACM paper is titled "The Aliasing Problem in Computer-**Generated** Shaded Images" (the "computer-synthesized" wording is the 1976 Utah tech report); and the Nees dissertation "discrepancy" resolves cleanly — **defended 1968, published October 1969** (not conflicting sources). These are flagged in-card.
- **The genuinely contested/practitioner-lore fields are event sourcing, reproducibility engineering, and generative art** — here the "origin" is a naming/synthesis act by a practitioner (Fowler 2005, Claerbout ~1990–92, the "3N" pioneers 1965) rather than a single seminal theorem, and the report preserves that lineage rather than flattening it.

---

## How to read this map
Each field is tiered: **ORIGIN** (idea entering the record), **CODIFICATION** (the synthesis/standard that consolidated a field), **DOOR** (best accessible modern entry). [s]=stone (all three), [t]=tool (origin+door), [f]=float (one note). Confidence tags: **[confirmed]** = verified against primary source or ≥2 independent sources; **[confirmed as attribution]** = author–title–year–venue consistent across reputable secondary sources but primary document not opened this dive; **[candidate, unconfirmed]** = single-source or contested. Gates already paid in prior dives are flagged **G·fourier** (Fourier analysis) and **G·meas** (measurement/psychophysics).

---

# SLICE 20 — Computation & Number-Craft

### numerical analysis [s]
- **ORIGIN (deep precursors):** Newton (interpolation/quadrature), Gauss (interpolation). **[confirmed]** as precursor tradition; not a single dated paper.
- **ORIGIN (modern field):** John von Neumann & Herman H. Goldstine, "Numerical Inverting of Matrices of High Order," *Bulletin of the American Mathematical Society*, vol. 53, no. 11 (Nov 1947), pp. 1021–1099. DOI 10.1090/S0002-9904-1947-08909-6. **[confirmed]**. Adhemar Bultheel & Ronald Cools (eds., *The Birth of Numerical Analysis*, World Scientific, 2010) write: "The 1947 paper by John von Neumann and Herman Goldstine, 'Numerical Inverting of Matrices of High Order' (Bulletin of the AMS, Nov. 1947), is considered as the birth certificate of numerical analysis."
- **ORIGIN (error analysis):** James H. Wilkinson, *Rounding Errors in Algebraic Processes* (1963) and *The Algebraic Eigenvalue Problem* (1965) — extended modern rounding-error analysis. **[confirmed as attribution]**. Note that the *foundation* of modern error analysis is credited to the 1947 von Neumann–Goldstine paper itself (Goldstine, *The Computer from Pascal to von Neumann*, 1972, pp. 290–291); Wilkinson built the systematic backward-error edifice on it.
- **CODIFICATION:** Wilkinson, *The Algebraic Eigenvalue Problem* (1965) for the eigenproblem; the mid-century textbook tradition more broadly.
- **DOOR:** Lloyd N. Trefethen & David Bau III, *Numerical Linear Algebra* (SIAM, 1997); or Endre Süli & David Mayers, *An Introduction to Numerical Analysis* (Cambridge, 2003).

### IEEE-754 floating point [s]
- **ORIGIN (precursor):** Konrad Zuse's Z3 (1941) implemented binary floating point. **[confirmed as precursor]**.
- **ORIGIN (modern):** William Kahan's work leading the IEEE 754 effort; Kahan received the 1989 ACM Turing Award largely for this. **[confirmed]**.
- **CODIFICATION:** *IEEE Standard for Binary Floating-Point Arithmetic*, IEEE 754-1985; revised IEEE 754-2008 and IEEE 754-2019. **[confirmed]**.
- **DOOR:** David Goldberg, "What Every Computer Scientist Should Know About Floating-Point Arithmetic," *ACM Computing Surveys*, vol. 23, no. 1 (March 1991), pp. 5–48. **[confirmed]** — freely circulated, frequently reprinted (e.g., as Sun's *Numerical Computation Guide* Appendix E).

### numerical optimization [s]
- **ORIGIN (continuous lineage):** Augustin-Louis Cauchy, "Méthode générale pour la résolution des systèmes d'équations simultanées," *Comptes Rendus de l'Académie des Sciences (Paris)*, vol. 25 (1847), pp. 536–538 — gradient/steepest descent. **[confirmed]**.
- **ORIGIN (linear-programming lineage):** George Dantzig's simplex method (1947). **[confirmed as attribution]**. Plus the Karush–Kuhn–Tucker conditions (Karush 1939 thesis; Kuhn & Tucker 1951) for constrained optimization. **Contested/multi-rooted origin preserved:** the field has two distinct taproots — continuous nonlinear (Cauchy) and linear programming (Dantzig) — that only later merged under "numerical optimization."
- **CODIFICATION:** Jorge Nocedal & Stephen J. Wright, *Numerical Optimization* (Springer; 1st ed. 1999, 2nd ed. 2006). **[confirmed as attribution]**.
- **DOOR:** Nocedal & Wright is itself the standard accessible text; Stephen Boyd & Lieven Vandenberghe, *Convex Optimization* (2004), is free online for the convex slice.

### validated & interval arithmetic [f]
- **Orientation note:** Ramon E. Moore, *Interval Analysis* (Prentice-Hall, 1966) is the standard origin of the modern field. **[confirmed as attribution]**. Precursors: Mieczysław Warmus (1956) and Teruo Sunaga (1958). One note only per sizing.

### digital signal processing [s] · G·fourier
- **ORIGIN (FFT):** James W. Cooley & John W. Tukey, "An Algorithm for the Machine Calculation of Complex Fourier Series," *Mathematics of Computation*, vol. 19, no. 90 (1965), pp. 297–301. **[confirmed]**. Deep precursor: Gauss (1805), per Heideman, Johnson & Burrus's historical work. **[confirmed as attribution]**.
- **Gate:** sampling-theorem foundation (Nyquist 1928 origin / Shannon 1949 formal theorem) already paid in a prior dive.
- **CODIFICATION:** Alan V. Oppenheim & Ronald W. Schafer, *Digital Signal Processing* (Prentice-Hall, 1975). **[confirmed as attribution]**.
- **DOOR:** Steven W. Smith, *The Scientist and Engineer's Guide to Digital Signal Processing* (free at dspguide.com); or Richard Lyons, *Understanding Digital Signal Processing*.

### detection & estimation theory [s]
- **ORIGIN (hypothesis testing):** Jerzy Neyman & Egon S. Pearson, "On the Problem of the Most Efficient Tests of Statistical Hypotheses," *Philosophical Transactions of the Royal Society of London, Series A*, vol. 231 (1933), pp. 289–337. DOI 10.1098/rsta.1933.0009. **[confirmed]**.
- **ORIGIN (signal detection / radar):** W. W. Peterson, T. G. Birdsall & W. C. Fox, "The theory of signal detectability" (1954). **[confirmed as attribution]**.
- **ORIGIN (filtering):** Norbert Wiener, *Extrapolation, Interpolation, and Smoothing of Stationary Time Series* (1949); and Rudolf E. Kálmán, "A New Approach to Linear Filtering and Prediction Problems," *Transactions of the ASME—Journal of Basic Engineering*, vol. 82, Series D (1960), pp. 35–45. **[confirmed]**.
- **CODIFICATION:** Harry L. Van Trees, *Detection, Estimation, and Modulation Theory, Part I* (Wiley, 1968). **[confirmed as attribution]**.
- **DOOR:** Steven M. Kay, *Fundamentals of Statistical Signal Processing* (2 vols., 1993/1998) — standard modern text.

### computability theory [s]
- **ORIGIN (the 1936 annus mirabilis):** Alan M. Turing, "On Computable Numbers, with an Application to the Entscheidungsproblem," *Proceedings of the London Mathematical Society*, ser. 2, vol. 42 (1936–37), pp. 230–265 (read 12 Nov 1936; correction vol. 43, 1937, pp. 544–546). **[confirmed]**. Alonzo Church, "An Unsolvable Problem of Elementary Number Theory," *American Journal of Mathematics*, vol. 58, no. 2 (1936), pp. 345–363. **[confirmed]**. Emil Post (1936) independently. **[confirmed as attribution]**.
- **ORIGIN (deep precursor):** Kurt Gödel, incompleteness theorems (1931). **[confirmed]**.
- **CODIFICATION:** Stephen C. Kleene, *Introduction to Metamathematics* (1952); or Hartley Rogers Jr., *Theory of Recursive Functions and Effective Computability* (1967). **[confirmed as attribution]**.
- **DOOR:** Turing's 1936 paper is itself readable (free PDFs widely available, e.g., cs.virginia.edu); Michael Sipser, *Introduction to the Theory of Computation* (standard text).

### algorithms [t]
- **ORIGIN (etymological/deep):** al-Khwārizmī (c. 825 CE) — source of the word "algorithm"; Euclid's algorithm as oldest nontrivial algorithm. **[confirmed as attribution]**.
- **ORIGIN (modern field):** Donald E. Knuth, *The Art of Computer Programming*, Vol. 1: Fundamental Algorithms (Addison-Wesley, 1968). **[confirmed as attribution]**.
- **DOOR:** Cormen, Leiserson, Rivest & Stein (CLRS), *Introduction to Algorithms*; or free — Jeff Erickson, *Algorithms* (open textbook at algorithms.wtf / jeffe.cs.illinois.edu).

---

# SLICE 21 — Record & Organization

### event sourcing & append-only architecture [s]
- **ORIGIN (deep precursor):** double-entry bookkeeping's append-only ledger — Luca Pacioli, *Summa de arithmetica, geometria, proportioni et proportionalità* (1494). **[confirmed as attribution]**. Plus database write-ahead logging / transaction logs (Gray et al.). **[practitioner-lore/published mix]**.
- **ORIGIN/CODIFICATION (naming):** Martin Fowler, "Event Sourcing," martinfowler.com (12 December 2005). **[confirmed]** — this is the naming act; Fowler himself labels it draft material. Greg Young's CQRS/event-sourcing work (c. 2010) formalized the pattern pair. **[confirmed as attribution]**. Pat Helland, "Immutability Changes Everything," CIDR 2015. **[confirmed as attribution]**.
- **Honesty flag:** this is a practitioner field; the "origin" is a blog post coining a name for pre-existing practice, not a peer-reviewed seminal paper.
- **DOOR:** Fowler's 2005 article (free); Vaughn Vernon, *Implementing Domain-Driven Design* (2013); Martin Kleppmann, *Designing Data-Intensive Applications* (2017).

### version control theory [t]
- **ORIGIN:** Marc J. Rochkind, "The Source Code Control System," *IEEE Transactions on Software Engineering*, vol. SE-1, no. 4 (Dec 1975), pp. 364–370 — SCCS, the first VCS. DOI 10.1109/TSE.1975.6312866. **[confirmed]**. (Rochkind's own 2025 retrospective notes SCCS was first built in 1972 at Bell Labs and described in this 1975 paper.) Lineage: SCCS → RCS (Walter Tichy, 1982/1985) → CVS → SVN → Git (Linus Torvalds, 2005). **[confirmed as attribution]**.
- **DOOR:** Scott Chacon & Ben Straub, *Pro Git* (free at git-scm.com); Tichy's RCS paper ("RCS — A System for Version Control," *Software: Practice and Experience*, 1985).

### archival science [s]
- **ORIGIN (founding treatise):** Samuel Muller, Johan A. Feith & Robert Fruin, *Handleiding voor het ordenen en beschrijven van archieven* ("Manual for the Arrangement and Description of Archives," the "Dutch Manual"), Netherlands Association of Archivists, 1898 (English trans. Arthur H. Leavitt, 1940). **[confirmed]**.
- **ORIGIN (deep precursor):** principle of *respect des fonds*, France, 1841 (Natalis de Wailly circular). **[confirmed as attribution]**.
- **CODIFICATION:** Hilary Jenkinson, *A Manual of Archive Administration* (1922); T. R. Schellenberg, *Modern Archives: Principles and Techniques* (1956). **[confirmed as attribution]**.
- **DOOR:** Schellenberg, *Modern Archives* (widely available); Society of American Archivists freely available resources and the SAA Dictionary (dictionary.archivists.org). The Dutch Manual itself is free via HathiTrust.

### faceted classification [s]
- **ORIGIN:** S. R. Ranganathan, *Colon Classification* (Madras Library Association, 1933); theory in *Prolegomena to Library Classification* (Edward Goldston, London, 1937). The five fundamental categories PMEST (Personality, Matter, Energy, Space, Time). **[confirmed]**.
- **CODIFICATION:** Ranganathan's *Prolegomena* editions (1937; 2nd 1957; 3rd 1967); the Classification Research Group (CRG), London, from 1952. **[confirmed as attribution]**.
- **DOOR:** *Prolegomena to Library Classification* (1937) is free on archive.org (Digital Library of India / ASI scans); or Brian Vickery, *Faceted Classification* (1960).

### zettelkasten & knowledge organization [s]
- **ORIGIN:** Niklas Luhmann, "Kommunikation mit Zettelkästen. Ein Erfahrungsbericht," in H. Baier, H. M. Kepplinger & K. Reumann (eds.), *Öffentliche Meinung und sozialer Wandel / Public Opinion and Social Change* (Opladen: Westdeutscher Verlag, 1981), pp. 222–228. **[confirmed]**.
- **ORIGIN (deep precursors):** Conrad Gessner (16th c.); John Locke's commonplace-book method (published 1686 French / 1706 English); Antonin Sertillanges, *La vie intellectuelle* (1921). **[confirmed as attribution]**.
- **Honesty flag:** Much popular "Luhmann zettelkasten" technique is later interpretation; Luhmann's own 1981 essay and Johannes Schmidt's archival scholarship are the documented core, distinct from modern productivity lore.
- **CODIFICATION / popularization:** Sönke Ahrens, *How to Take Smart Notes* (2017). **[confirmed as attribution]**.
- **DOOR:** Luhmann's essay in English ("Communicating with Slip Boxes," trans. Manfred Kühn) free at zettelkasten.de; Ahrens's book.

### numeration systems [s]
- **ORIGIN (positional):** Babylonian base-60 (c. 2000 BCE). **[confirmed as attribution]**.
- **ORIGIN (zero as a number):** Brahmagupta, *Brāhmasphuṭasiddhānta* (628 CE). **[confirmed as attribution]**. Transmission via al-Khwārizmī (c. 825) and Fibonacci, *Liber Abaci* (1202). **[confirmed as attribution]**.
- **CODIFICATION:** Karl Menninger, *Zahlwort und Ziffer* ("Number Words and Number Symbols," 1958/1969); or Georges Ifrah, *The Universal History of Numbers* (with the caveat that Ifrah's scholarship has drawn substantial reliability criticism from historians of mathematics). **[confirmed as attribution; Ifrah reliability flagged]**.
- **DOOR:** Menninger, *Number Words and Number Symbols* (Dover edition); public-domain histories.

### literate programming [t]
- **ORIGIN:** Donald E. Knuth, "Literate Programming," *The Computer Journal*, vol. 27, no. 2 (1984), pp. 97–111 — introduces the WEB system. DOI 10.1093/comjnl/27.2.97. **[confirmed]**.
- **DOOR:** Knuth's 1984 paper (freely available); the literateprogramming.com archive; Knuth's collected volume *Literate Programming* (CSLI, 1992).

### software testing & N-version [t]
- **ORIGIN (testing codification):** Glenford J. Myers, *The Art of Software Testing* (Wiley, 1979). **[confirmed as attribution]**. Earlier: the 1972 Chapel Hill symposium and Bill Hetzel. **[confirmed as attribution]**.
- **ORIGIN (N-version):** Algirdas Avižienis & Liming Chen, "On the implementation of N-version programming for software fault tolerance during execution" (1977/1978). **[confirmed as attribution]**. Critical caveat: John C. Knight & Nancy G. Leveson (1986) experimentally challenged the failure-independence assumption underlying N-version programming. **[confirmed as attribution]**.
- **DOOR:** Myers's book (now in updated editions); free modern resources.

### reproducibility engineering [s]
- **ORIGIN:** Jon F. Claerbout's "really reproducible research" at Stanford (c. 1990–1992) — Jon F. Claerbout & Martin Karrenbach, "Electronic documents give reproducible research a new meaning," *SEG Technical Program Expanded Abstracts 1992* (62nd SEG Annual Meeting, New Orleans, Oct 1992), pp. 601–604. DOI 10.1190/1.1822162. **[confirmed]**.
- **ORIGIN (formalization):** Jonathan B. Buckheit & David L. Donoho, "WaveLab and Reproducible Research" (1995). **[confirmed as attribution]**. Roger D. Peng, "Reproducible Research in Computational Science," *Science* (2011). **[confirmed as attribution]**. Broader replication crisis: 2010s.
- **CODIFICATION:** *The Turing Way* open handbook (2019+); or Victoria Stodden, Friedrich Leisch & Roger D. Peng (eds.), *Implementing Reproducible Research* (2014). **[confirmed as attribution]**.
- **DOOR:** *The Turing Way* (free online).

### addressing & namespace design [s] — SPECIAL CASE: THREE LINEAGES
This rung bundles three distinct lineages. Each is presented separately so the user can decide at compile whether one is primary; **no primary is declared here.**

**Lineage (1) — ENCODING-AS-NUMBER (structure encoded as number):**
- **ORIGIN:** Kurt Gödel, "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I," *Monatshefte für Mathematik und Physik*, vol. 38 (1931), pp. 173–198 — Gödel numbering. **[confirmed]**.
- **DOOR:** Ernest Nagel & James R. Newman, *Gödel's Proof* (1958); Douglas Hofstadter, *Gödel, Escher, Bach* (1979).
- **Codification candidate:** any standard mathematical-logic text treating arithmetization of syntax (e.g., Kleene 1952, cross-referenced under computability above).

**Lineage (2) — NOTATIONAL CLASSIFICATION (decimal/notational addressing of knowledge):**
- **ORIGIN:** Melvil Dewey, *A Classification and Subject Index for Cataloguing and Arranging the Books and Pamphlets of a Library* (Amherst, MA, 1876) — the 44-page pamphlet introducing decimal classification. **[confirmed]**. Lineage: Dewey → Universal Decimal Classification (Paul Otlet & Henri La Fontaine, from 1895) → Ranganathan (cross-ref faceted classification). **[confirmed as attribution]**.
- **DOOR:** Dewey's 1876 pamphlet free at Project Gutenberg (ebook #12513) and Internet Archive.
- **Codification candidate:** successive DDC editions (23rd ed., 2011); UDC.

**Lineage (3) — RESOLVING NAMESPACES (hierarchical resolution of names to things):**
- **ORIGIN (hierarchical file system):** R. C. Daley & P. G. Neumann, "A General-Purpose File System for Secondary Storage," *AFIPS Fall Joint Computer Conference* (1965). **[confirmed as attribution]**.
- **ORIGIN (DNS):** Paul Mockapetris, RFC 882 ("Domain Names — Concepts and Facilities") & RFC 883 ("Domain Names — Implementation and Specification"), November 1983; superseded by RFC 1034 & RFC 1035, November 1987 (which explicitly read "Obsoletes: RFCs 882, 883, 973"). **[confirmed — RFC numbers and dates verified against the RFC documents themselves]**.
- **ORIGIN (URI/URL):** Tim Berners-Lee, RFC 1630 ("Universal Resource Identifiers in WWW," 1994); URI generic syntax codified in RFC 3986 (Berners-Lee, Fielding & Masinter, 2005). **[confirmed as attribution]**.
- **DOOR:** RFC 1034 (free, rfc-editor.org) as the readable DNS entry; Berners-Lee et al. RFC 3986 for URIs.

---

# SLICE 22 — Seeing & Playing

### data visualization [s]
- **ORIGIN:** William Playfair, *The Commercial and Political Atlas* (London, 1786) — line/area/bar charts; *The Statistical Breviary* (London, 1801) — pie chart and circle graph. **[confirmed]**.
- **ORIGIN (precursors):** Nicole Oresme (14th c.); Johann Heinrich Lambert (18th c.); Joseph Priestley's timelines (1765). John Snow's cholera map (1854); Charles Joseph Minard's Napoleon's-march flow map (1869). **[confirmed as attribution]**.
- **CODIFICATION:** Jacques Bertin, *Sémiologie graphique* (1967); Edward R. Tufte, *The Visual Display of Quantitative Information* (1983); William S. Cleveland & Robert McGill, "Graphical Perception" (*Journal of the American Statistical Association*, 1984). **[confirmed as attribution]**.
- **DOOR:** Claus O. Wilke, *Fundamentals of Data Visualization* (free online at clauswilke.com); or Tufte's book.

### explorable explanations [s]
- **ORIGIN:** Bret Victor, "Explorable Explanations," worrydream.com (2011) — coined the term. **[confirmed]**.
- **ORIGIN (deep precursors):** Alan Kay's Dynabook vision — "A Personal Computer for Children of All Ages" (1972); Ted Nelson's hypertext. **[confirmed as attribution]**.
- **CODIFICATION:** the explorabl.es community collection; Nicky Case's interactive work. **[young practitioner field — codification is a community, not a treatise]**.
- **DOOR:** explorabl.es and Victor's essays (all free).

### human–computer interaction [t]
- **ORIGIN:** Vannevar Bush, "As We May Think," *The Atlantic Monthly* (1945); Douglas Engelbart, "Augmenting Human Intellect: A Conceptual Framework," SRI report (1962) + the 1968 "Mother of All Demos"; Ivan Sutherland, Sketchpad (1963). **[confirmed as attribution]**.
- **CODIFICATION:** Stuart K. Card, Thomas P. Moran & Allen Newell, *The Psychology of Human-Computer Interaction* (1983) — named the field. **[confirmed as attribution]**.
- **DOOR:** Bush's "As We May Think" free at The Atlantic; Engelbart's 1962 report free at the Doug Engelbart Institute (dougengelbart.org).

### graphics & sampling artifacts [s] · G·fourier
- **ORIGIN (aliasing):** Franklin C. Crow, "The Aliasing Problem in Computer-Generated Shaded Images," *Communications of the ACM*, vol. 20, no. 11 (Nov 1977), pp. 799–805. **[confirmed]**. **TITLE CORRECTION:** the user's brief says "computer-synthesized" — that wording is the 1976 University of Utah tech report (UTEC-CSc-76-015); the published CACM paper reads "computer-**generated**."
- **ORIGIN (stochastic sampling):** Robert L. Cook, "Stochastic Sampling in Computer Graphics," *ACM Transactions on Graphics*, vol. 5, no. 1 (1986), pp. 51–72. **[confirmed as attribution]**.
- **Gate:** sampling-theorem foundation (Shannon) already paid in a prior dive.
- **CODIFICATION:** James D. Foley & Andries van Dam, *Fundamentals of Interactive Computer Graphics* (1982) / Foley, van Dam, Feiner & Hughes, *Computer Graphics: Principles and Practice* (1990); or Andrew S. Glassner, *Principles of Digital Image Synthesis* (1995, now free). **[confirmed as attribution]**.
- **DOOR:** Glassner's *Principles of Digital Image Synthesis* (free PDF); or Pharr, Jakob & Humphreys, *Physically Based Rendering* (free at pbr-book.org).

### psychoacoustics [t] · G·fourier · G·meas
- **ORIGIN:** Hermann von Helmholtz, *Die Lehre von den Tonempfindungen* (1863; English "On the Sensations of Tone"). **[confirmed as attribution]**. Precursor: Ohm's acoustic law (1843). **[confirmed as attribution]**. Modern psychoacoustics: Harvey Fletcher & Wilden A. Munson, "Loudness, Its Definition, Measurement and Calculation," *Journal of the Acoustical Society of America*, vol. 5, no. 2 (Oct 1933), pp. 82–108. **[confirmed]**. Eberhard Zwicker's critical-band work (1950s–60s). **[confirmed as attribution]**.
- **Gates:** Fourier analysis and representational measurement/psychophysics (Fechner) already paid in prior dives.
- **DOOR:** Helmholtz, *On the Sensations of Tone* (public domain on archive.org); modern — Hugo Fastl & Eberhard Zwicker, *Psychoacoustics: Facts and Models*.

### generative & live-visual art [s]
- **ORIGIN (algorithmic art, the "3N"):**
  - **Georg Nees** — first computer-art exhibition worldwide: solo show "Computergrafik" at the Studiengalerie der TH Stuttgart, **opened 4 February 1965, ran 5–19 February 1965**, organized under Max Bense's Ästhetisches Colloquium and accompanied by the booklet *rot 19* containing Bense's manifesto "projekte generativer ästhetik" (per the Compart Database of Digital Art). **[confirmed]**. Nees's dissertation *Generative Computergraphik* (Siemens): **defended 1968, published as a Siemens book in October 1969** — the apparent "1968 vs 1969" conflict is a defence-vs-publication distinction, not contradictory sources (Frieder Nake, "The Pioneer of Generative Art: Georg Nees," *Leonardo* 51(3), 2018, pp. 277–279). **[confirmed]**.
  - **A. Michael Noll** (with Béla Julesz) — "Computer-Generated Pictures," Howard Wise Gallery, New York, **April 6–24, 1965** (the original exhibition announcement gives an April 6 opening and Compart confirms "April 6 through 24, 1965"; the "April 8" date appears only on Noll's own webpage). **[confirmed]**. Documented in Noll's own memoir, *Leonardo* 49(3), 2016, pp. 232–239.
  - **Frieder Nake** — exhibited with Nees at Galerie Wendelin Niedlich, Stuttgart, November 1965. **[confirmed]**.
- **ORIGIN (other roots):** Vera Molnár (1960s); Harold Cohen's AARON program (conceived late 1960s, named/active **c. 1973** at the Stanford AI Lab). **[confirmed as attribution]**. Live coding: TOPLAP founded February 2004 (Hamburg) with its "ManifestoDraft." **[confirmed]**. Processing: Casey Reas & Ben Fry, MIT Media Lab, 2001. **[confirmed]**.
- **CODIFICATION (contested/young):** Frieder Nake, *Ästhetik als Informationsverarbeitung* (Springer, 1974); Philip Galanter, "What Is Generative Art? Complexity Theory as a Context for Art Theory," GA2003 (6th Generative Art Conference, Politecnico di Milano, 2003) — the definitional paper. **[confirmed]**. **Honesty flag:** no single consolidating treatise; codification is split between an early information-aesthetics monograph and a later definitional conference paper.
- **DOOR:** Daniel Shiffman, *The Nature of Code* (2012, free at natureofcode.com; revised p5.js edition 2024); Processing / p5.js tutorials (free).

---

## Recommendations
1. **Transcribe the [confirmed] origin/codification cards directly** — they survived verification against primary or near-primary sources and need no further checking before entering the card system.
2. **Apply the corrections at compile:** Crow 1977 reads "computer-**Generated**"; the Nees dissertation should be carried as "**defended 1968, published October 1969**" (one fact, not a conflict); Noll's Howard Wise show is **April 6–24, 1965**.
3. **For the addressing & namespace rung,** keep all three lineages as separate cards. If forced to declare one primary: the RESOLVING-NAMESPACES lineage (DNS / file systems / URIs) is the most structurally load-bearing for a computing-oriented corpus; the ENCODING-AS-NUMBER (Gödel) lineage is the most conceptually deep; NOTATIONAL CLASSIFICATION (Dewey) is the most historically senior. Grade on which axis your corpus privileges.
4. **Treat event sourcing, reproducibility engineering, and generative art as "practitioner-origin" fields** — annotate their cards so the origin is understood as a naming/synthesis act, not a seminal theorem.
5. **Threshold for upgrading a [confirmed as attribution] to [confirmed]:** pull the primary document (most are free — Turing 1936, Cauchy 1847, Dewey 1876, Ranganathan 1937, Luhmann 1981, RFC 1034, Claerbout 1992) and confirm the title page. Worth doing only for cards you intend to cite publicly.

## Caveats
- "**[confirmed as attribution]**" means the author–title–year–venue claim is consistent across reputable secondary sources but the primary document was not opened during this dive; "**[confirmed]**" means verification against a primary or near-primary source (publisher record, the document itself, or ≥2 independent authorities).
- Several "codification" picks are editorial conventions (the field's most-used consolidating text), not uncontested facts — e.g., Oppenheim & Schafer for DSP, Van Trees for detection/estimation, Nocedal & Wright for optimization. Reasonable alternatives exist.
- The *modern error-analysis* attribution splits: the 1947 von Neumann–Goldstine paper laid the foundation (per Goldstine 1972), while Wilkinson built the systematic backward-error theory in 1963/1965 — both belong on the card, in that order.
- Ifrah's *Universal History of Numbers* is included as a codification candidate **with an explicit reliability caveat**; Menninger is the safer scholarly choice.
- Remaining dating nuance worth carrying: Harold Cohen's AARON — conception traces to the late 1960s, the name applied in the early 1970s, with ~1973 (Stanford AI Lab) the standard origin date.
- Search-tool budget was exhausted before three secondary precursor items (Gauss-1805 FFT precursor specifics, KKT 1951 venue, Daley–Neumann 1965 page numbers) could be opened to primary level; they are carried as [confirmed as attribution] and flagged accordingly.