# Prompt per Claude Code — Rework grafico finale + modifiche TecnoConsult

> Incolla tutto ciò che segue a Claude Code nella root del progetto
> (`sito Astro Tecno Consult`). Prima di iniziare leggi `CLAUDE.md`: il design
> system (colori, font, tono) è **bloccato**, vanno rispettati. Nessuna tagline
> a effetto, nessuna headline creativa: solo nomi di sezione semplici o testo
> già esistente. Alla fine aggiorna il log sessioni in `CLAUDE.md` e fai girare
> `npm run build` per verificare 0 errori.

---

## Contesto

Sito Astro multipagina, 6 pagine in `src/pages/` + `Layout.astro` (contiene
TUTTO il CSS globale in un unico `<style is:global>`) + `Header.astro` /
`Footer.astro` condivisi. Palette: `--paper` #EEF2F1, `--ink` #16242A,
`--petrol` #2D5563, `--copper` #C1632B, `--line` #9FB3B0. Font: Space Grotesk
(display), IBM Plex Sans (body), IBM Plex Mono (dati/eyebrow/etichette).

Quattro interventi, in ordine.

---

## 1. Link diretti ai siti dei 4 marchi (apertura in NUOVA SCHEDA)

I loghi marchio oggi puntano tutti a `/dove-operiamo#mappa-copertura`. Vanno
ai siti ufficiali, con `target="_blank" rel="noopener noreferrer"`.

Mappatura brand → URL:
- Radiant → `https://www.radiant.it`
- ITAP → `https://www.itap.it`
- GDA / General D'Aspirazione → `https://generaldaspirazione.com`
- Aquatechnik → `https://www.aquatechnik.it`

**Punto A — Home** (`src/pages/index.astro`, blocco "MARCHI RAPPRESENTATI"
intorno alla riga 82). L'array `marchi` in cima al file (righe ~5-9) mappa nome
e file logo. Aggiungi il campo `url` a ciascun oggetto dell'array e usalo nel
`.map`:

```astro
const marchi = [
  { nome: 'Radiant',     file: 'radiant.svg',    url: 'https://www.radiant.it' },
  { nome: 'ITAP',        file: 'itap.jpg',       url: 'https://www.itap.it' },
  { nome: 'GDA',         file: 'gda.jpg',        url: 'https://generaldaspirazione.com' },
  { nome: 'Aquatechnik', file: 'aquatechnik.png',url: 'https://www.aquatechnik.it' },
];
```

Nel `.map`, sostituisci `href="/dove-operiamo#mappa-copertura"` con
`href={m.url} target="_blank" rel="noopener noreferrer"` e aggiorna
l'`aria-label` (es. `` `${m.nome} — sito ufficiale (nuova scheda)` ``).

**Punto B — Dove operiamo** (`src/pages/dove-operiamo.astro`, sezione
"Marchi rappresentati", `.brand-territory-grid`, righe ~33-64). Le 4 `.bt-card`
sono attualmente `<div>` non cliccabili. Rendi cliccabile ciascuna card
avvolgendola (o convertendo `.bt-card` da `div` ad `a`) con
`href` al sito corrispondente + `target="_blank" rel="noopener noreferrer"` +
`aria-label`. Mantieni intatta la struttura interna (`.bt-logo`, `.bt-info`,
`.bt-name`, `.bt-zone`). Aggiungi al CSS di `.bt-card` in `Layout.astro`:
`text-decoration:none; color:inherit; cursor:pointer;` e uno stato hover
coerente col resto (bordo/ombra leggeri, vedi punto 4). Attenzione: l'ordine
delle card in `dove-operiamo` è Aquatechnik, Radiant, GDA, ITAP — abbina l'URL
giusto a ciascuna leggendo il `.bt-name`.

---

## 2. "Showroom" → "Centro Didattico Formativo" (testo visibile, frasi riscritte)

Scelta confermata: cambiare **tutto il testo visibile**, riscrivendo le frasi
per coerenza. **NON** toccare: id/ancore tecniche (`#centro-didattico`), nomi
file immagine (`sede-showroom-*.jpg`), classi CSS (`.showroom`, `.showroom-card`,
`.showroom-scroll`). Solo il testo mostrato all'utente.

Occorrenze da sistemare:

**Home** (`src/pages/index.astro`):
- Riga ~71, datasheet: `<div class="ds-key">Showroom</div>` → `<div class="ds-key">Centro Didattico</div>` (label breve, il valore "200 m²" resta).
- Riga ~184, card preview servizi: `<h3>Showroom e formazione</h3>` → `<h3>Centro Didattico Formativo</h3>`. Il paragrafo sotto ("200 m² di spazio espositivo. Corsi e webinar fino a 30 persone.") resta invariato. Il link `href="/servizi#centro-didattico"` resta invariato.

**Servizi** (`src/pages/servizi.astro`, oggetto `id: 'centro-didattico'`, riga ~47-52):
- `titolo: 'Centro didattico e showroom'` → `titolo: 'Centro Didattico Formativo'` (evita la ripetizione "Centro didattico e Centro Didattico").
- `id: 'centro-didattico'` **resta invariato** (è l'ancora).
- Nel campo `completo`, la frase contiene "area esposizione tecnica e didattica di oltre 200 m²": è descrittiva e corretta, lasciala. Non introdurre la parola "showroom" da nessuna parte.

**Chi siamo** (`src/pages/chi-siamo.astro`, righe ~76-79):
- eyebrow `<p class="eyebrow">Showroom</p>` → `Centro Didattico`
- `<h2>Il nostro show-room</h2>` → `<h2>Il nostro Centro Didattico Formativo</h2>`
- Gli `alt` delle immagini che dicono "Showroom Radiant/Itap/Aquatechnik" (righe ~86-92) → riscrivili in "Centro Didattico Formativo — Radiant" ecc. (testo alt = visibile agli screen reader, quindi rientra nell'ambito). Nomi file invariati.

Dopo le modifiche, `grep -rin "showroom\|show-room" src/pages/` deve restituire
solo classi CSS / nomi file, nessun testo visibile.

---

## 3 + 4. Rework grafico: gerarchia titoli, divisione sezioni, meno piattezza

Obiettivo (parole del committente): le pagine interne hanno **titoli troppo
piccoli e talvolta illeggibili**, sezioni **poco divise**, e il sito risulta
**piatto e monocromo** con troppi spazi vuoti. Intervento **deciso ma sobrio**:
resta tecnico, pulito, "da agenzia di rappresentanza", senza diventare un
sito-vetrina appariscente. Modifiche mirate, non stravolgimento.

Quasi tutto il lavoro è nel CSS globale in `Layout.astro`. Agire sulle classi
condivise così l'effetto si propaga a tutte le pagine in modo coerente.

### 3a. Gerarchia dei titoli (valorizzare, senza esagerare)

Stato attuale (riferimenti in `Layout.astro`): `.section-head h2` 1.9rem,
`.servizio-card h3` 0.98rem, `.pillar h3` 1rem, molti sottotitoli 0.72-0.86rem.
I titoli di sezione si perdono. Interventi:

- `.section-head h2` e `.ref-section-header` (referenze usa `.ref-section-header`,
  non `.section-head`): porta il titolo principale a `clamp(2rem, 3.2vw, 2.6rem)`,
  `line-height:1.1`, `letter-spacing:-0.02em`. Uniforma `.ref-section-header` a
  `.section-head` come dimensioni/spaziature (oggi sono trattati diversamente).
- `.eyebrow`: è l'etichetta mono sopra i titoli. Rendila più leggibile e
  "tecnica": aggiungi un piccolo trattino/indicatore copper prima del testo
  (es. `::before` con un segmento di 18px `background:var(--copper)`), mantieni
  mono uppercase ma alza il contrasto (usa `--petrol` invece di `--ink-soft`).
- `.servizio-card h3` e `.pillar h3`: da ~1rem a ~1.12-1.18rem, peso 600,
  colore `--ink` (i titoli card oggi sono troppo timidi).
- Aggiungi respiro sotto i titoli: `.section-head{margin-bottom:44px;}` (oggi 34px).

Regola: NON rendere i titoli enormi. Il committente ha scritto esplicitamente
"non enormi, ma valorizzati e leggibili". Punta a chiarezza e gerarchia, non a
dimensione fine a sé stessa.

### 3b. Divisione netta tra sezioni

Oggi c'è il `pipe-divider` SVG (linea a gradino petrol) tra alcune sezioni, ma
le pagine interne restano un flusso indistinto su fondo `--paper`. Interventi:

- **Fasce di sfondo alternate**: introduci una classe `.section--surface`
  (fondo `--surface` / bianco sporco già usato nel marquee) o `.section--tint`
  (tinta petrol MOLTO tenue, es. `#E4EBEA` o petrol al ~6% opacità) da applicare
  a UNA sezione ogni due nelle pagine interne, così il fondo non è mai piatto per
  più di una sezione di fila. Applica ad es.: in `chi-siamo` la sezione Mission
  su fondo tint; in `dove-operiamo` la sezione "Marchi rappresentati" su surface;
  in `servizi` alternare la griglia card; in `index` la sezione Servizi preview.
- **Una sezione "chiave" a contrasto forte**: scegli 1 sola sezione per pagina
  (es. la Mission in chi-siamo, oppure il blocco CTA/contatti) e mettila su
  fondo **petrol pieno** (`--petrol`) con testo chiaro — c'è già il precedente
  della sezione `.contatti` (h2 bianco su petrol). Riusa quello stile, non
  inventarne uno nuovo. Serve a spezzare la monocromia con un blocco deciso.
- **Eyebrow numerata**: dai alle sezioni principali una numerazione mono
  discreta (`01 / 02 / 03`) accanto o sopra l'eyebrow, in `--copper`, stile
  scheda tecnica. Rafforza il senso "espositivo/ordinato" senza aggiungere colore
  invadente. (Statica nell'HTML o via CSS counter — a tua scelta, purché pulito.)
- Mantieni il `pipe-divider` esistente ma assicurati che il colore/opacità
  restino leggeri; non moltiplicarlo eccessivamente.

### 3c. Meno vuoto, più "espositivo" (senza strafare)

- **Card**: aggiungi/uniforma a `.servizio-card`, `.bt-card`, `.pillar`,
  `.team`, `.ref-name-chip` uno stato di riposo e hover coerente: bordo
  `1px solid var(--line)`, `border-radius:` coerente con l'esistente, e su hover
  bordo `--petrol` o sottile ombra + micro-translateY(-2px). Deve dare
  profondità e ritmo dove ora c'è piatto. Rispetta `prefers-reduced-motion`.
- **Accento copper mirato**: usa `--copper` come filo conduttore per gli
  elementi "attivi/tecnici" (indicatore eyebrow, numeri sezione, bordo-sinistra
  di un blocco chiave, freccia dei link "→"). Copper è l'accento secondario:
  usalo con parsimonia ma in modo riconoscibile, così il sito non è più tutto
  petrol/grigio.
- **Datasheet in home** (`.datasheet`, `.ds-val` in petrol mono): è già un bel
  blocco tecnico. Valorizzalo come "biglietto da visita" — assicurati che abbia
  aria attorno e magari un filo di separazione più marcato dal resto.
- **Referenze** (`src/pages/referenze.astro`): le 3 sezioni con `.ref-name-chip`
  sono molto uniformi. Dai a ciascuna categoria (hotellerie / sanità / industria)
  un'intestazione più forte (vedi 3a) e un fondo alternato (3b), così le 3 aree
  si distinguono a colpo d'occhio. Le chip: ritocco hover leggero.

### Vincoli da rispettare (importante)

- Palette e font **solo** quelli del design system. Nessun colore nuovo fuori da
  paper/ink/petrol/copper/line (le tinte tenui devono essere derivazioni di
  quelli, non colori estranei).
- **Nessuna tagline/headline creativa**: i titoli di sezione restano fattuali
  ("Chi siamo", "Servizi", "Mission", "Marchi rappresentati"…). Non aggiungere
  slogan sopra le sezioni.
- Responsive: verifica che i titoli `clamp()` e le fasce di sfondo reggano su
  mobile (esiste già un blocco `@media` in fondo a `Layout.astro`, riga ~595+).
- Non toccare: transizione di pagina, loghi, mappa SVG interattiva, marquee
  "Chi si affida a noi", i testi body approvati.

---

## Verifica finale (obbligatoria)

1. `grep -rin "showroom\|show-room" src/pages/` → solo classi CSS / nomi file.
2. I 4 link marchio (home + dove-operiamo) puntano ai domini corretti con
   `target="_blank" rel="noopener noreferrer"`.
3. `npm run build` → 0 errori. (Se i binari esbuild del mount danno problemi su
   Linux, build in copia `/tmp` con `npm ci` come già annotato nel log.)
4. Screenshot / ispezione visiva di ogni pagina: titoli leggibili, sezioni
   distinte, presenza di almeno una fascia colorata/decisa per pagina, hover
   card funzionanti.
5. Aggiorna il "Log sessioni" in `CLAUDE.md` con data odierna e sintesi degli
   interventi (link marchi, rename Centro Didattico Formativo, rework tipografia
   + fasce sezione + accenti copper).
