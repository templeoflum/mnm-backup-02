# Archive Project — Plan to Make the Plan

A pre-planning document. This does **not** make decisions or give recommendations. It lays out the decisions that need to be made before the real plan can be written, with options for each. Work through these top to bottom; the early ones constrain the later ones.

---

## A. Foundational decisions (decide first — everything else depends on these)

**A1. What is the archive actually *for*?**
- Personal reference only (never republished)
- Personal now, possible public/shared library later
- Public/shared from the start
- *(This choice sets how strict the licensing and provenance work has to be.)*

**A2. What is the unit of a "record"?**
- One record = one source/site
- One record = one document/page/repo
- One record = one idea/design extracted from a source
- Mixed (different granularity per source type)

**A3. What counts as "in scope"?**
- Everything from every listed source
- Only open-source / explicitly-licensed material
- Only specific topics (e.g. analog video circuit designs, live-coding patterns) regardless of source
- A defined inclusion checklist applied per item

---

## B. Format & schema decisions

**B1. Primary format for knowledge/notes**
- Markdown + YAML front matter
- Plain text
- A reference manager's native format (e.g. Zotero)
- Rich documents (e.g. .docx / PDF)

**B2. Catalog / index format (the spine of the whole thing)**
- Single CSV
- SQLite database
- Reference manager library (Zotero/Bib)
- Markdown table / wiki index

**B3. Metadata fields to capture per record** *(decide the schema once; painful to retrofit)*
- Minimal: title, source URL, date accessed
- Standard: + creator, license, type, tags, status
- Full: + provenance notes, related records, original capture path, checksum
- Follow an existing standard (e.g. Dublin Core) vs. roll your own

**B4. How to record license/permission**
- Single free-text field
- Controlled vocabulary (MIT / GPL / CC-BY / unknown / all-rights-reserved …)
- Two fields: "keep privately?" and "redistribute?" tracked separately

**B5. Capture format per source type**
- Web pages: WARC / single-file HTML / PDF / readability-stripped Markdown
- Code: leave as live git repo / zipped snapshot / extracted snippets
- Video: file download / metadata + link only / transcript only
- Forum threads: full-page save / extracted-text only / quote-with-citation only

---

## C. Storage & organization decisions

**C1. Folder structure**
- Flat by type (`/codebases`, `/captures`, `/notes`, `/catalog`)
- By topic/scene (video-synth / glitch / livecoding…)
- By source
- Hybrid (type at top, topic as tags in metadata)

**C2. File naming convention**
- Date-prefixed (`YYYY-MM-DD-slug`)
- Source-prefixed
- Sequential ID
- Human-readable slug only

**C3. Where it physically lives**
- Local disk only
- Local + external drive
- Local + cloud sync
- Version-controlled (git) vs. plain files

**C4. Backup strategy**
- None initially / manual periodic copy / automated / 3-2-1 rule
- What triggers a backup (schedule vs. per-session)

---

## D. Tooling decisions

**D1. Web capture tool**
- ArchiveBox / `wget --wait` / browser save-as / SingleFile / manual only

**D2. Code retrieval**
- `git clone` per repo / GitHub export / manual download

**D3. Catalog management**
- Spreadsheet app / Zotero / SQLite + scripts / plain text editor

**D4. Format conversion**
- pandoc / per-tool exporters / none (keep native formats)

**D5. Automation level overall**
- Fully manual
- Semi-automated with manual review gate
- Scripted pull, manual catalog
- *(Higher automation = higher risk of overloading sources; the level chosen drives Section E.)*

---

## E. Ethics & rate-limiting decisions

**E1. The throttle rule** *(the brake on the whole project)*
- Backlog-based: no new pulls until the unread/uncatalogued pile is under N
- Time-based: max N items per session/week
- Both
- None (not recommended, but it's a choice)

**E2. Per-request politeness (if anything is automated)**
- Delay between requests (how many seconds)
- Off-peak only?
- Identifying User-Agent with contact info?
- Honor `robots.txt` + `Crawl-delay` (yes/case-by-case)

**E3. Source-type handling policy**
- Official downloads/exports preferred over crawling where they exist?
- Forums: automated vs. manual save-as only
- Social platforms (Facebook etc.): manual-only vs. excluded entirely
- Video platforms: metadata-only vs. file download (check terms)

**E4. Provenance discipline**
- Every record must carry source + date + license before it's "done"
- Provenance optional / added later
- *(This is the difference between an archive and a pile.)*

---

## F. Workflow & rhythm decisions

**F1. Processing order across phases**
- Easiest/cleanest first (repos → docs → lists → forums → social)
- By priority topic
- By source, fully finishing one before the next

**F2. Definition of "done" for a record**
- Downloaded
- Downloaded + catalogued
- Downloaded + catalogued + read/understood + license recorded

**F3. Session cadence**
- Fixed schedule / ad-hoc / cap-per-session
- Review step: where in the loop does manual reading happen?

**F4. Review & pruning**
- Keep everything pulled
- Periodic cull of low-value records
- Promotion path (candidate → reviewed → core library)

---

## G. Design Verification & Calibration (a separate module the archive feeds)

**Why this module exists (rationale — not a decision):**
You can't catalog what you can't understand, and you can't claim to understand a design without proof — **proof you can *see and run*:** independently inspectable *and* independently re-executable, not asserted. So a design enters the catalog as *known* only when independent sources converge on the same answer and that convergence is logged with the record. A lone schematic, datasheet, board photo, or model reading is a **claim**; **proof is several independent paths agreeing**, each one something a later person can re-open and re-run for themselves.

This is a **distinct subsystem** from the archive. Sections A–F are the slow, low-cost catalog that *holds* references; this module is a live bench/simulation system that *consumes* those references and writes verified results back. Different tooling, cost, and hardware profile — keep them linked but not tangled.

**G1. Reference format — what a design is verified *against***
- Schematic / netlist
- Simulation output (e.g. SPICE)
- Reference frame / waveform / vectorscope capture
- Original documentation of intended function & appearance
- All of the above (triangulated)

**G2. Which tools own pass/fail (the verdict layer)**
- Circuit simulation (SPICE-class) for function/logic
- Signal capture + numeric diff for waveforms/timing
- Image/frame comparison (SSIM, per-channel error) against a reference frame
- Vectorscope / waveform-monitor readings
- Some combination — and **which one is authoritative when they disagree**

**G3. The VLM-watcher role — what it's allowed to emit**
- Observations only (qualitative, spatial: "drift left," "fringe on right edge")
- May *trigger* a precise measurement, but never set the gate
- Explicitly forbidden: producing the pass/fail verdict; being logged as the result
- Whether a real-time watcher exists at all, or you run purely on instrument readout

**G4. If a watcher is used, which one**
- JoyAI-VL-Interaction (8B, real-time, has delegation) — con: heavy (vLLM/GPU), brand new, unproven
- A lighter general VLM run on-demand (batch, not real-time)
- No VLM — human reads the instruments directly

**G5. Evidence tiering — how a record's proof strength is graded**
- Flat (verified / not verified)
- Tiered by number of converging independent sources (single-source claim → multi-source proven)
- Tiered by *kind* of evidence (sim-only vs. sim + measured-against-reference)

**G6. Entry policy for unproven designs**
- Nothing enters the catalog until proven
- Captured-but-unproven items may enter, flagged "claim, not yet proven"
- Separate holding area for claims, promoted on proof

**G7. What the proof record stores (so it stays *see-and-run* later)**
- The reference(s) used
- The actual tool outputs / measurements (the numbers, not a summary)
- Re-runnable simulation files / netlists
- The code reimplementation + its calibration result against reference
- Enough that a later person can re-open and re-execute the verification, not just read its conclusion

**Standing rules for this module (don't let these erode):**
- Proof = **independent sources converging**, logged with the record — never one source's confidence.
- The **same source can't be counted twice** (a model agreeing with itself is one vote, not two).
- Proof must be **see-and-run**: backed by something a later person can independently inspect *and* re-execute.
- The **VLM emits observations, never verdicts**; the gate reads only from instrument/sim numbers.
- A model observation may *point* the instrument; only the instrument's measurement is written to the record.

**Cross-link to the archive:** a reference held in the catalog (Section B3 metadata, Section H list) is what this module consumes; verified results + evidence are written back into the record and feed the promotion path (F4).

---

## H. Decision-making order (suggested sequence, not a decision itself)

1. A (purpose, record unit, scope)
2. B1–B4 (formats + schema + license fields)
3. C1–C2 (structure + naming)
4. E1, E4 (throttle rule + provenance discipline)
5. D (tools) and B5 (capture formats) together
6. C3–C4 (storage + backup)
7. E2–E3 (politeness + per-source policy)
8. F (rhythm)
9. G (verification & calibration — only once the archive can hold the references it consumes)

---

## I. The source list (working inventory)

Merged and deduplicated. This is the raw material the plan above will govern.

### Forums, communities & social groups
- scanlines.xyz — https://scanlines.xyz/
- LZX Industries forum — https://community.lzxindustries.net/c/forum/13
- ModWiggler (Video Synthesis + Music Tech DIY/circuit-bending subforums) — https://www.modwiggler.com/forum/
- electro-music.com — http://electro-music.com/forum/
- llllllll.co / "lines" (monome community) — https://llllllll.co/
- TOPLAP — https://toplap.org/ (blog: https://blog.toplap.org/)
- Algorave — https://algorave.com/
- Derivative / TouchDesigner community — https://derivative.ca/community
- uzu / lurk — https://uzu.lurk.org/
- Video Synthesis Ecosphere Discord — linked from https://andreijaycreativecoding.com/
- Glitch Collective (Facebook) — https://www.facebook.com/groups/Glitchcollective
- GAC Tool Time (Facebook) — https://www.facebook.com/groups/GACToolTime/
- GAC Tool Time post — https://www.facebook.com/photo.php?fbid=10100593544266345&set=gm.595109063943983&type=1

### Curated resource lists (best for mining further)
- TOPLAP awesome-livecoding — https://github.com/toplap/awesome-livecoding
- osromusic/Glitch-Arts-Resources — https://github.com/osromusic/Glitch-Arts-Resources
- Atarity/diy-synths — https://github.com/Atarity/diy-synths
- Synth DIY Wiki (open-source hardware) — https://sdiy.info/wiki/Open_source_music_hardware_projects
- Phillip Stearns glitch art resources — https://phillipstearns.wordpress.com/glitch-art-resources/
- Glitchet resources — http://www.glitchet.com/resources
- datamoshing.com — http://datamoshing.com/

### Live coding — music
- TidalCycles — https://tidalcycles.org/docs/ (source: https://codeberg.org/uzu/tidal)
- Strudel — https://strudel.cc/workshop/getting-started/
- SuperCollider — https://supercollider.github.io/
- Sonic Pi — https://sonic-pi.net/
- ORCΛ (Hundred Rabbits) — https://github.com/hundredrabbits/Orca (C port: https://github.com/hundredrabbits/Orca-c)
- Gibber — https://gibber.cc/

### Live coding — visuals / video
- Hydra — https://hydra.ojack.xyz/ (docs: https://hydra.ojack.xyz/docs/ ; source: https://github.com/hydra-synth/hydra)
- LiveCodeLab — https://livecodelab.net/
- Bonzomatic (GLSL/HLSL, demoscene) — https://github.com/Gargaj/Bonzomatic
- Improviz (OpenGL visuals) — https://github.com/rumblesan/improviz

### Analog & hardware video synthesis (codebases + hardware)
- LZX Industries repos — https://github.com/orgs/lzxindustries/repositories
- ex-zee-ex / Andrei Jay repos — https://github.com/ex-zee-ex?tab=repositories
- Video Synthesis Ecosphere (RPi firmware) — https://andreijaycreativecoding.com/Video-Synthesis-Ecosphere-RPI
- Synkie (open-source analog video processor) — https://synkie.net/ (source: https://github.com/mirdej/synkie)
- bzzzbz (RPi + OpenGL video synth) — https://github.com/daviderovell0/bzzzbz

### Glitch art / databending / circuit-bent video (tools & codebases)
- BPMC (circuit-bent video / glitch hardware) — https://bpmcglitch.com/about
- GlitchTools — https://github.com/GlitchTools
- GLIC (GlitchCodec) — https://github.com/GlitchCodec/GLIC
- ffglitch — https://ffglitch.org/ (source: https://github.com/ramiropolla/ffglitch-core)
- GlitchKernel — https://github.com/scriptkittie/GlitchKernel
- GitHub topic hubs — https://github.com/topics/datamoshing , https://github.com/topics/databending , https://github.com/topics/glitch-art

### Libraries, showcases & archives
- Signal Culture library (libib) — https://www.libib.com/u/signalculture
- Vimeo video synthesis showcase — https://vimeo.com/showcase/3122592

### Reddit & chat
- r/videosynthesis — https://www.reddit.com/r/videosynthesis/
- r/glitch_art — https://www.reddit.com/r/glitch_art/
- TOPLAP chat (Matrix/IRC) — linked from https://toplap.org/

---

## J. VLM watcher candidates (source list for the Section G watcher role)

Candidates for the **observation-only watcher** in G3/G4 — *not* the verifier. Listed roughly by hardware fit, Apple Silicon / real-time first. Two target machines in mind: **M5 Max, 128 GB unified** (primary; runs nearly everything here) and **ZenBook Pro Duo, RTX 2060 ~6 GB VRAM + 32 GB RAM** (bonus; small models only). Verify each model's license before it informs a catalog record (licenses vary by model *and* by size).

**Hardware reality (answers "how does 7B-LLM success transfer?"): it doesn't transfer 1:1.** A VLM adds a vision encoder (fixed +0.5–4 GB) *and* injects hundreds of visual tokens per image into the KV cache — memory scales with image/frame count, not just parameters. So a 7B VLM costs more than a 7B text LLM, and video/multi-frame costs more again. On 6 GB VRAM, budget for ~2–4B models; the 128 GB Mac is where the bigger ones become comfortable and real-time.

### Tier 1 — Apple Silicon, built for real-time (primary target)
- **FastVLM** (Apple) — 0.5B / 1.5B / 7B; MLX + CoreML, near-real-time video captioning on Apple Silicon; the natural M5 watcher — https://github.com/apple/ml-fastvlm (HF checkpoints + research page: https://machinelearning.apple.com/research/fast-vision-language-models)
- **MobileCLIP2** (Apple) — fast image-text encoder usable inside fast VLM pipelines — on HuggingFace

### Tier 2 — Small & cross-platform (runs on the 2060 *and* the Mac)
- **Moondream** (m87-labs) — 0.5B / 2B (+ MoE "3"); built explicitly for real-time, runs Mac/Windows/CUDA/edge — https://moondream.ai/ , https://github.com/m87-labs/moondream
- **SmolVLM / SmolVLM2** (HuggingFace) — 256M / 500M / 2.2B, Apache-2.0, video-capable, <1 GB VRAM at the small end — https://huggingface.co/blog/smolvlm
- **Qwen3-VL (2B / 4B)** (Alibaba) — dense small variants, GGUF + MLX, video + OCR — https://github.com/QwenLM/Qwen3-VL
- **Gemma 3 / Gemma 4 vision** (Google) — ~4B vision tier, low-latency, available via Ollama
- **MiniCPM-V** — on-device-oriented, strong OCR + video, ~8B (tight on 6 GB, fine on Mac) — https://github.com/OpenBMB/MiniCPM-V

### Tier 3 — Mid/large (M5 Max comfortable; too big or not real-time on the 2060)
- **Qwen3-VL (8B / 32B, + 30B-A3B MoE)** — practical 8B sweet spot; 32B for higher OCR/agentic accuracy — https://github.com/QwenLM/Qwen3-VL
- **InternVL3** (OpenGVLab) — strong open multimodal family incl. MoE variants — https://huggingface.co/OpenGVLab
- **Llama 3.2 Vision (11B / 90B)** (Meta) — widely supported in Ollama
- **JoyAI-VL-Interaction (8B)** (JD) — real-time *interaction* model with built-in delegate-to-tool design; fits the watcher role conceptually but heavy (vLLM/GPU) and brand new — https://github.com/jd-opensource/JoyAI-VL-Interaction

### Runtimes, servers & real-time harnesses (how you actually run the above)
- **MLX-VLM** — run VLMs on Apple Silicon via MLX — https://github.com/Blaizzy/mlx-vlm
- **FastMLX** — production API server for MLX VLMs/LMs
- **vllm-mlx** — continuous batching for vision on MLX (mentioned for Mac throughput)
- **Ollama** (0.19+, uses MLX under the hood on Apple Silicon) — easiest local pull/run — https://ollama.com/
- **LM Studio** — GUI, supports GGUF + MLX VLMs — https://lmstudio.ai/
- **live-vlm-webui** (NVIDIA-AI-IOT) — real-time webcam→VLM over WebRTC; includes a by-VRAM model list; strong reference for the watcher harness — https://github.com/NVIDIA-AI-IOT/live-vlm-webui
- **Roboflow Inference** — local VLM serving + pipelines — https://github.com/roboflow/inference
- **Moondream Photon / Station** — Moondream's own low-latency local inference engine — https://moondream.ai/

**Cross-link:** this list feeds **G4** (which watcher, if any) and is governed by the G3 rule — anything chosen here emits *observations only*, never the pass/fail verdict.
