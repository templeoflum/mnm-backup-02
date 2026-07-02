---
name: aliasing-in-rendering
type: object
object-type: concept
essence: jagged edges, lost detail, moiré and crawling that appear when a continuous scene is point-sampled below its Nyquist rate
field: ["[[field.graphics-sampling-artifacts]]", "[[field.digital-signal-processing]]"]
status: established
state: settled
attribution: named & explained for rendering by Franklin C. Crow (1977); the underlying signal-processing phenomenon is the sampling theorem (WKS)
formalized: false
source: ["[[source.crow-1977]]", "[[source.foley-vandam-1982]]", "[[source.glassner-1995]]"]
depends-on: ["[[object.sampling-theorem]]"]
used-by: ["[[object.spatial-anti-aliasing]]", "[[object.supersampling]]", "[[object.stochastic-sampling]]"]
aliases: ["object.aliasing-in-rendering"]
---

**statement (plain)** — a rendered image is made by sampling a continuous scene at discrete points (one or a few per pixel). When the scene holds detail finer than the sample spacing can capture — a sharp edge, a thin object, a fine texture, a receding checker floor — that high-frequency detail does not vanish quietly. It folds down into false low-frequency patterns the eye sees as staircase "jaggies" on edges, moiré bands in textures, small features blinking in and out, and edges that crawl or sparkle in animation. These defects are aliasing: high frequencies masquerading as low ones because the image was sampled too coarsely.

**statement** — aliasing in rendering is the appearance, in a point-sampled image, of artifacts caused by scene content whose spatial frequencies exceed the Nyquist limit of the sampling grid (half the sample rate). By the [[object.sampling-theorem]], frequencies above this limit are not representable by the samples and instead reflect ("alias") into the representable band, producing spurious low-frequency structure. In Crow's framing the visible symptoms — jagged edges, disappearing small detail, moiré, temporal scintillation — are all the same underlying phenomenon. **[confirmed]**

**basis** — Franklin C. Crow's 1977 paper [[source.crow-1977]] was the first to diagnose these long-standing rendering "defects" not as separate bugs but as one phenomenon: aliasing inherent in undersampling a signal, explained through sampling theory. It identified jagged edges and disappearing detail as the core symptoms and proposed prefiltering as the cure (see [[object.spatial-anti-aliasing]]). The diagnosis rests on the [[object.sampling-theorem]] (Whittaker–Kotelnikov–Shannon): a signal sampled below twice its highest frequency cannot be recovered, and the unrepresentable frequencies fold into the sampled band. Foley & van Dam [[source.foley-vandam-1982]] and Glassner [[source.glassner-1995]] codify the same account in the standard rendering literature.

**lineage** — the *term* "aliasing" and the rate bound come from signal processing (Nyquist 1928, Shannon 1949; carried in [[object.sampling-theorem]]). Crow (1977) is the recognized origin for transposing the concept into image synthesis and naming the rendering symptoms as aliasing. The CACM title reads "Computer-**Generated** Shaded Images"; an earlier 1976 Utah tech report (UTEC-CSc-76-015) used "computer-synthesized" — carried as a title correction, not a separate work. **[confirmed]**

**sources** — Crow, *CACM* 20(11) 1977 [[source.crow-1977]]; Foley & van Dam, *Fundamentals of Interactive Computer Graphics* (1982) / Foley, van Dam, Feiner & Hughes (1990) [[source.foley-vandam-1982]]; Glassner, *Principles of Digital Image Synthesis* (1995) [[source.glassner-1995]]; Wikipedia "Spatial anti-aliasing" (Crow attribution, Nyquist framing) — secondary corroboration.
