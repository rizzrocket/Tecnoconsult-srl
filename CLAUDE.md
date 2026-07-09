# Tecno Consult Srl — sito Astro

Agenzia di rappresentanza (idro-termo-sanitario, condizionamento, energie
alternative) dal 1996, San Donà di Piave (VE). Sito Astro 1:1 da bozzetto.

## Design system (bloccato — non modificare senza richiesta esplicita)

Colori:
- `--paper` #EEF2F1 — sfondo pagina
- `--ink` #16242A — testo principale
- `--petrol` #2D5563 — accento primario, link, icone tecniche
- `--copper` #C1632B — accento secondario, CTA, highlight
- `--line` #9FB3B0 — bordi/divisori

Font:
- Space Grotesk — display (h1/h2/h3, brand)
- IBM Plex Sans — body
- IBM Plex Mono — dati, eyebrow, stat, etichette tecniche

## Regola di tono (importante)

I testi restano fattuali e diretti come il sito originale
tecnoconsult-srl.it. **Nessuna tagline a effetto, claim motivazionale o
headline "creative" sopra le sezioni.** Solo nome sezione semplice (es.
"Chi siamo", "Servizi", "Contatti") o testo descrittivo già esistente. Il
body copy approvato non si tocca — solo le headline ad effetto vanno
sostituite quando individuate.

## Loghi

Logo reale Tecnoconsult scaricato da tecnoconsult-srl.it, NON ridisegnato:
- `public/images/tecnoconsult-icon.png` — icona, usata in nav/favicon
- `public/images/tecnoconsult-logo.png` — versione con wordmark, usata in
  og:image e JSON-LD (Layout.astro, tutte le pagine) — non toccare
- `public/images/tecnoconsult-logo-home.png` — stessa immagine, variante con
  le due "O" del wordmark rese trasparenti (era riempimento bianco pieno),
  usata solo per l'hero della home

Non sostituire con SVG ridisegnati o icone generiche.

## Struttura multipagina

- `/` Home — hero + numeri (datasheet) + griglia 4 marchi rappresentati +
  anteprima mappa di copertura (link a /dove-operiamo#mappa-copertura) +
  breve intro chi siamo (link "Scopri il team" → /chi-siamo) + CTA verso
  /contatti
- `/chi-siamo` — testo completo chi siamo + team grid + mission + vision +
  showroom
- `/servizi` — le 7 card servizi
- `/dove-operiamo` — testo + griglia territorio 4 marchi + mappa SVG
  interattiva per provincia (`#mappa-copertura`, hover desktop / tap mobile)
- `/referenze` — le 3 sezioni con chip clienti per categoria (sempre tutte
  visibili, nessun filtro)
- `/contatti` — contatti

Nav con link reali alle pagine, non anchor (`#sezione`). Header/Footer sono
componenti condivisi in `src/components/`, inclusi in `Layout.astro` attorno
allo `<slot/>` — non duplicarli nelle singole pagine.

## Immagini stock

`public/images/stock-*.jpg` — foto Unsplash (nessuna attribuzione
richiesta), tema idro-termo-industriale generico. Niente foto di hotel o
enti specifici: in Referenze ci sono clienti reali, va evitata qualunque
associazione visiva fuorviante.
- `stock-saldatura.jpg` — banner home
- `stock-rubinetto.jpg` — banner servizi
- `stock-cantiere.jpg` — banner dove operiamo
- `stock-progettazione.jpg` — banner chi-siamo (sezione mission)

## Log sessioni

- 2026-06-26: Sessione di fix su sito già esistente (one-page → multipagina).
  Rimosso hero SVG schema tecnico (sostituito da logo reale con halo +
  respiro), rimosse le headline ad effetto, centrata/coloreta "Chi si
  affida a noi", convertito a 6 pagine Astro con Header/Footer condivisi,
  aggiunte 4 immagini stock royalty-free. Loghi reali già presenti da
  commit precedente (f1596e9) — non riscaricare.
  Errore da non ripetere: quando si scaricano in batch più immagini
  Unsplash per ID, verificare SEMPRE col Read tool quale file corrisponde
  a quale soggetto prima di copiarlo con un nome descrittivo — gli ID
  sono stati scambiati 3 volte in questa sessione (rubinetto→cane,
  saldatura→sigillante, progettazione→cacciavite) e corretti solo dopo
  ispezione visiva post-screenshot.
- 2026-06-29: og:image + JSON-LD, sitemap + robots.txt, nav active state, marquee 9 marchi,
  referenze complete (28 voci in 3 categorie), fix h2 contatti.
- 2026-06-29 (sessione 2): Loghi marchi nel marquee, griglia brand/territorio in dove-operiamo,
  Google Maps in dove-operiamo e contatti, preview servizi in home, footer a 3 colonne.
- 2026-06-29 (sessione 3): "Leggi tutto" su mission/servizi/dove-operiamo, sezione referenze
  in home con 3 marquee, referenze page redesign con chip-grid per categoria,
  chi-siamo: Mauro unificato in founder card (rimosso dal team grid → 4 card),
  upgrade grafico generale (hover card, padding, details/summary).
- 2026-07-06: Riduzione da 9 a 4 marchi rappresentati (solo Radiant, Itap, GDA,
  Aquatechnik) su tutto il sito — rimossi Fantini Cosmi, Winkler Solar, Swell
  System, OLI, GIA da home e dove-operiamo, datasheet aggiornato (4 marchi,
  12 province). Home: marquee marchi → griglia statica 4 loghi linkati a
  /dove-operiamo#mappa-copertura, placeholder mappa → anteprima cliccabile
  (mappa-nordest.svg), marquee "Chi si affida a noi" rallentato a 95s, hero
  logo aggiornato a tecnoconsult-logo-home.png (O trasparenti, fix via script
  Python/Pillow con flood fill dai due buchi del wordmark — non toccare
  tecnoconsult-logo.png, resta invariato per og:image/JSON-LD). Dove operiamo:
  rimossa lista bullet zone, brand-territory-grid ridotta a 4 card con testo
  provincia preciso, nuova sezione `#mappa-copertura` con SVG inline
  interattivo (tooltip hover desktop + tap toggle mobile via pointerType,
  mostra loghi marchi per provincia o "Nessun marchio attivo" per Bolzano).
  Chi-siamo: aggiunta card Riccardo Scarabel nel team grid (solo nome, come
  la card vuota), titolo "Il nostro show-room" sopra la gallery, nuova
  sezione Vision (placeholder, testo da fornire) dopo Mission. Referenze:
  rimossi i 4 filtri a pillole, le 3 categorie restano sempre visibili.
- 2026-07-07: Fix transizione di pagina in Layout.astro — rimosso il monogramma
  "T+C" disegnato a runtime con path SVG (SHAPES/buildPaths, non era il logo
  vero), sostituito con overlay a tutta pagina su var(--paper) che mostra il
  logo reale /images/tecnoconsult-icon.png con fade + scala (stile logoScaleIn
  dell'hero): fade-in su astro:before-preparation, fade-out su astro:after-swap,
  prefers-reduced-motion rispettato (animazione saltata).
- 2026-07-07 (sessione 2): Su richiesta esplicita, sostituita la transizione
  fade+scala con l'effetto "linee che formano il logo": geometria (ring C +
  barra + gambo T) ri-misurata via analisi pixel di tecnoconsult-icon.png
  (cv2, mask su canale colore + contorni) per ricalcare fedelmente le
  proporzioni reali (centro, raggi, apertura in basso a destra), invece di
  riusare numeri inventati. Le 3 linee (stroke var(--copper), fill:none,
  non più bicolore copper/petrol) entrano in scena traslando da sinistra
  verso la posizione finale (staggerate da sinistra a destra), restano ferme
  a formare il logo, poi traslano ed escono a destra sfumando. Sfondo: la
  vecchia "tenda" opaca (rect fill var(--paper)) è stata sostituita da un
  velo semi-trasparente con backdrop-filter:blur(10px) (#tc-veil), quindi
  la pagina sottostante si vede sfocata durante il cambio invece di sparire
  dietro un colore pieno. Verificato con build statica (0 errori) + render
  isolato della geometria SVG per confronto visivo col logo reale.
- 2026-07-08: Transizione di pagina, terza iterazione (Layout.astro). Le 3
  forme chiuse (fascia ad anello + 2 rettangoli) sono diventate 3 LINEE
  singole stile filo (stroke 4.5px, linecap round): arco aperto a raggio
  medio per la C, un segmento orizzontale (barra T) e uno verticale (gambo).
  Geometria ri-misurata via scanline sul contorno scuro dell'icona (il
  gradiente sfuma a bianco in basso a dx, la vecchia mask colore aveva perso
  quella zona): canvas 318x302, cerchio centro (151.5,150.5) rOut 140.5,
  fascia ~31 → linea media r=125; apertura della C a DESTRA (non in basso),
  da -31.6° (il braccio alto sparisce sotto la barra) a +32° (taglio
  orizzontale a y~217); barra y media 67 (x 28..277), gambo x=153 fino a
  y=265 — ora la C scende fino in fondo come nel logo vero. Movimento "a
  serpente": keyframe intermedi con offset Y sinusoidale (AMP ~2.5vh) +
  rotazione ±3° (transform-box:fill-box), fase alternata per filo, stagger
  sx→dx invariato in entrata e uscita; velo blur invariato. Verifica visiva:
  overlay SVG delle linee sopra tecnoconsult-icon.png renderizzato in PNG e
  ispezionato col Read tool (arco sulla mezzeria della fascia, termini
  coincidenti coi tagli reali); npm run build 0 errori (copia in /tmp con
  npm ci Linux, i binari esbuild del mount sono darwin-arm64).
- 2026-07-08 (sessione 2): Geometria del logo nella transizione RICALIBRATA
  con misurazione manuale su griglia sovrapposta a tecnoconsult-icon.png
  (le due derivazioni automatiche precedenti erano sbagliate): apertura
  della C corretta da un varco enorme a ore 3 a una piccola tacca a ore 4-5
  (arco 45°→387°), raggio centro-linea r=116, centro (151.5,150), canvas
  302x302, barra y=63 x 20..280, gambo x=151.5 y 78..260 — valori verificati
  visivamente affiancando il render statico al logo vero, NON rimisurare.
  Motion a serpente rifinito: ondulazione sinusoidale ad ampiezza ~3vh
  decrescente in entrata (posa dolce, 6 keyframe) e crescente in uscita,
  rotazione alternata ridotta (max ±2.5°), ampiezza differenziata per filo
  (barra lunga più contenuta), amp per-linea riusata in uscita; stagger
  sx→dx e velo blur invariati, prefers-reduced-motion rispettato.
- 2026-07-09: Rework finale (branch rework-finale). Quattro interventi.
  (1) Link marchi: i 4 loghi/card marchio (home griglia + dove-operiamo
  bt-card, ora convertite da div ad <a>) puntano ai siti ufficiali in nuova
  scheda (target=_blank rel=noopener noreferrer + aria-label): Radiant
  radiant.it, ITAP itap.it, GDA generaldaspirazione.com, Aquatechnik
  aquatechnik.it. In dove-operiamo l'ordine card è Aquatechnik/Radiant/GDA/
  ITAP: URL abbinati leggendo il .bt-name. (2) "Showroom" → "Centro Didattico
  Formativo" su tutto il testo visibile (home datasheet "Centro Didattico" +
  card preview, servizi titolo card, chi-siamo eyebrow/h2/alt immagini);
  invariati ancora #centro-didattico, nomi file sede-showroom-*.jpg e classi
  .showroom*. (3+4) Rework grafico, quasi tutto nel CSS globale di
  Layout.astro: eyebrow con trattino copper (::before) + numerazione sezioni
  01/02/03 in copper via counter su .section-head; .section-head h2 e
  .ref-section-cat a clamp (titoli valorizzati, non enormi, line-height 1.1);
  .servizio-card h3 / .pillar h3 più decisi (1.14-1.16rem, --ink, 600);
  datasheet come biglietto da visita (bordo top petrol 2px, ds-val 1.5rem,
  più padding); divisione sezioni con fasce alternate .section--surface /
  .section--tint (nuova var --tint #dee6e6, derivazione petrol su paper ~8%)
  + un blocco chiave forte per pagina .section--petrol (fondo petrol pieno,
  testo chiaro, riuso dello stile del blocco scuro contatti) — rimossa la
  vecchia alternanza cieca section:nth-of-type(even); hover card universale
  con micro translateY(-2px) e ref-name-chip hover, entrambi sotto
  prefers-reduced-motion. Fasce applicate: home (chi-siamo surface, mission&
  vision tint, servizi preview tint), dove-operiamo (marchi surface, mappa
  tint), servizi (tint), chi-siamo (Mission=petrol, Vision=tint); referenze
  invariata nei fondi categoria (già distinti) ma con intestazioni ingrandite.
  Palette/font invariati, nessuna tagline aggiunta. Verifica: grep showroom
  in src/pages/ → solo classi/nomi file; npm run build 0 errori; ispezione
  visiva preview desktop+mobile di tutte le pagine.
