# note — provenance-recovery — f0 · the 21 no-provenance source-texts

opened 20260617-081024 · keeper · gait [walk] · companion to [[list.source-texts.f0]]

Recovery of the **21 texts flagged no-provenance** in [[list.source-texts.f0]]. Method: read the raw downloads in `raw-well/` for embedded provenance (sacred-texts `.txt` carry a full header: source URL, title, author; PDFs encode the source platform + item-id + author in the filename), then web-verify the licensing-borderline cases. **Recovered 19 of 21** (2 are empty stubs — identified but never acquired). Nothing here is invented; each line traces to an in-file header or a verifiable archive.org / sacred-texts identifier.

**The headline finding:** the no-provenance set splits sharply by license. The sacred-texts/Gutenberg-era texts are public domain; **6 are modern copyrighted scholarly translations pulled via archive.org controlled lending (`.lcpdf`)** — these cannot live in an open corpus and need a disposal decision, not grounding.

---

## A — recovered · PUBLIC DOMAIN (13)

| text-id | work | author/translator | yr | source | note |
|---------|------|-------------------|---:|--------|------|
| `african/myths-of-ife` | Myths of Ífè | John Wyndham | 1921 | sacred-texts /afr/ife/ | |
| `indian/dhammapada` | The Dhammapada (SBE v.10) | trans. F. Max Müller | 1881 | sacred-texts /bud/sbe10/ | |
| `japanese/kogoshui` | Kogoshūi | trans. Katō & Hoshino | 1924 | sacred-texts /shi/kgsh/ | |
| `north-american/navaho-origin-myths` | The Diné: Origin Myths of the Navaho Indians | Aileen O'Bryan | 1956 | sacred-texts /nam/nav/omni/ | US govt (BAE Bulletin 163) → PD |
| `oceanic/oceanic-mythology` | Oceanic Mythology | Roland B. Dixon | 1916 | sacred-texts /pac/om/ | **dup of `oceanic-mythology-dixon`** |
| `oceanic/oceanic-mythology-dixon` | Oceanic Mythology | Roland B. Dixon | 1916 | archive.org `oceanicmytholog02dixogoog` | **same work as above** |
| `slavic/songs-russian-people` | The Songs of the Russian People | W. R. S. Ralston | 1872 | sacred-texts /neu/srp/ | |
| `slavic/folk-tales-russian` | Folk Tales from the Russian | trans. V. X. K. de Blumenthal | 1903 | sacred-texts /neu/ftr/ | |
| `baltic/lithuanian-mythology` | **Wonder Tales from Baltic Wizards** | Frances Jenkins Olcott | 1928 | sacred-texts /neu/bw/ | **title fix** — not "Lithuanian mythology"; broader Baltic |
| `polynesian/maui-thousand-tricks` | Maui-of-a-Thousand-Tricks | Katharine Luomala | 1949 | archive.org `in.ernet.dli.2015.78688` | Bishop Museum Bull. 198; archive marks *out of copyright* |
| `australian-aboriginal/more-australian-legendary-tales` | More Australian Legendary Tales | K. Langloh Parker | 1898 | archive.org `moreaustralianl00parkgoog` | |
| `tibetan/tibetan-book-of-dead-evans` | The Tibetan Book of the Dead | Evans-Wentz & Lama Kazi Dawa-Samdup | 1927 | archive.org `in.gov.ignca.16167` | US PD (pre-1929); confirm if used outside US |
| `african/myths-legends-bantu` | Myths and Legends of the Bantu | Alice Werner | 1933 | sacred-texts /afr/mlb/ + archive `dli.2015.57033` | **dup of provenanced `african/myths-and-legends-of-the-bantu`** |

## B — recovered · MODERN COPYRIGHTED — flag, do not ground (6)

*Pulled via archive.org controlled digital lending (`.lcpdf` = library checkout). All rights reserved; cannot be held or redistributed in an open corpus. Provenance recovered so the disposal decision is informed.*

| text-id | work | author/translator | yr | publisher | © |
|---------|------|-------------------|---:|-----------|---|
| `mongol/secret-history-mongols` | The Secret History of the Mongols | trans. Francis W. Cleaves | 1982 | Harvard UP (Harvard-Yenching) | © verified |
| `south-american/huarochiri-manuscript` | The Huarochirí Manuscript | trans. Salomon & Urioste | 1991 | Univ. of Texas Press | © verified (also a Spanish Arguedas ed., likely © too) |
| `mesoamerican/codex-chimalpopoca` | History & Mythology of the Aztecs: Codex Chimalpopoca | trans. John Bierhorst | 1992 | Univ. of Arizona Press | © (modern) |
| `african/treasury-african-folklore` | A Treasury of African Folklore | Harold Courlander | 1975 | Crown | © (modern) |
| `oceanic/pacific-island-legends` | Pacific Island Legends | Bo Flood et al. | 1999 | Bess Press | © (modern) |
| `turkic/dede-korkut` | The Book of Dede Korkut | trans. Geoffrey Lewis | 1974 | Penguin | © (modern) |

## C — orphan stubs · identified, never acquired (2)

Empty text-id dirs — no raw, no provenance, no content. The *intended* work is identifiable, but nothing was downloaded. Either re-acquire from a PD edition or drop.
- `egyptian/coffin-texts` — the Egyptian Coffin Texts (standard Eng. ed.: R. O. Faulkner, 1973–78, Aris & Phillips — modern ©; older PD options limited).
- `greek/bibliotheca-apollodorus` — the *Bibliotheca* of Pseudo-Apollodorus (PD option: J. G. Frazer, Loeb, 1921).

---

## findings & decisions needed

1. **6 modern copyrighted texts (bucket B)** — the project is open mythology infrastructure; copyrighted scholarly translations can't be held or grounded. **Decision:** drop them from the well, or keep a provenance-only stub (cite, don't hold) and source a PD edition instead. *(My read: drop the `.lcpdf` content; several works have PD alternate editions — e.g. an older Apollodorus, a PD Dede Korkut is harder.)*
2. **2 duplicate pairs** — `myths-legends-bantu` = the provenanced `myths-and-legends-of-the-bantu`; `oceanic-mythology` = `oceanic-mythology-dixon`. Merge/drop one of each at the salvage pass.
3. **1 title correction** — `baltic/lithuanian-mythology` is actually Olcott's *Wonder Tales from Baltic Wizards* (1928), not Lithuanian-specific.
4. **SOURCES.md write-back** — done (see below).

---

## EXECUTED 20260617 (operator's call: drop copyrighted, write PD sources back)

- **6 copyrighted texts DROPPED** from the well (raw + any processed side): `secret-history-mongols` · `huarochiri-manuscript` · `codex-chimalpopoca` · `treasury-african-folklore` · `pacific-island-legends` · `dede-korkut`. 7 raw files removed (they were raw-only — never normalized/segmented). Recoverable from the operator's external backup if a PD edition is ever wanted.
- **13 PD wells got recovered `SOURCES.md`** (raw-well provenance docs 77 → 90). Each marks license = public domain + cites this note.
- **Remaining for the cleanup-before-extraction pass** (operator's stated sequence): re-source PD editions for the dropped works where they exist (e.g. Apollodorus → Frazer Loeb 1921; coffin-texts); merge the 2 dup pairs; the 2 orphan stubs (`egyptian/coffin-texts`, `greek/bibliotheca-apollodorus`) re-acquire-or-drop.

*float — recovery executed; PD re-sourcing + dup merges + orphan re-acquisition deferred to the pre-extraction cleanup.*
