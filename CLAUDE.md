# Tecno Consult Srl — sito Astro

Agenzia di rappresentanza (idro-termo-sanitario, condizionamento, energie
alternative) dal 1996, San Donà di Piave (VE). Sito Astro 1:1 da bozzetto.

## Design system (base — palette e font fissi, layout libero)

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

Palette e font restano fissi (sopra). Il **layout invece è libero e va reso
più ricco**: sono ammessi e desiderati blocchi asimmetrici (titolo centrale,
foto a sinistra / testo a destra e viceversa), card di dimensioni diverse
nella stessa griglia, sfondi lavorati (gradienti tenui, texture tecnica a
bassa opacità), elementi decorativi tecnici (linee, quote, numerazioni) e
immagini. L'obiettivo è un sito pieno ed espositivo, non una sequenza di
rettangoli uguali su fondo piatto.

## Regola di tono (importante)

I testi restano fattuali e diretti come il sito originale
tecnoconsult-srl.it. **Nessuna tagline a effetto, claim motivazionale o
headline "creative" sopra le sezioni.** Solo nome sezione semplice (es.
"Chi siamo", "Servizi", "Contatti") o testo descrittivo già esistente. Il
body copy approvato non si tocca — solo le headline ad effetto vanno
sostituite quando individuate.

Questa regola riguarda il **copy**, non il layout. Il testo resta quello
approvato e fattuale; la creatività va messa nell'impaginazione, nelle foto e
nella grafica, non in claim a effetto.

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
- `/chi-siamo` — testo completo chi siamo + founder-card + team grid + Centro
  Didattico Formativo (gallery) + mission + vision
- `/servizi` — le 7 card servizi
- `/dove-operiamo` — testo + griglia territorio 4 marchi + mappa SVG
  interattiva per provincia (`#mappa-copertura`, hover desktop / tap mobile)
- `/referenze` — le 3 sezioni con chip clienti per categoria (sempre tutte
  visibili, nessun filtro)
- `/contatti` — contatti

Nav con link reali alle pagine, non anchor (`#sezione`). Header/Footer sono
componenti condivisi in `src/components/`, inclusi in `Layout.astro` attorno
allo `<slot/>` — non duplicarli nelle singole pagine.

## Immagini disponibili

Le vecchie `stock-*.jpg` NON esistono più nel repo. Le foto reali della sede
sono le uniche immagini fotografiche disponibili. Esistono in due copie
byte-identiche: `public/images/Foto Generali/*.jpeg` (nomi con spazi, da
non usare negli `src`) e `public/images/sede/*.jpg` (copie senza spazi —
**usare queste** negli `src`, convenzione già in uso nel codice).

Inventario `public/images/sede/` (soggetto verificato con ispezione visiva):
- `sede-esterno.jpg` — facciata esterna della sede con logo Tecnoconsult sulle
  vetrate. Usata: sfondo atmosferico hero home, figura sede in dove-operiamo,
  banda contatti.
- `sede-formazione.jpg` — aula del Centro Didattico Formativo: sedie disposte,
  tavolo demo aquatechnik, unità aspirazione GDA, parete radiante. Usata:
  gallery Centro Didattico (chi-siamo), tessera featured servizi, banner.
- `sede-showroom-1.jpg` — parete espositiva caldaie Radiant.
- `sede-showroom-2.jpg` — pannelli espositivi rossi ITAP (valvole, collettori).
- `sede-showroom-3.jpg` — scultura dimostrativa tubazioni verdi Aquatechnik.
  showroom-1/2/3 usate nella gallery Centro Didattico (chi-siamo); showroom-3
  anche come foto d'ambiente nell'intro chi-siamo home.

Foto reali di corsi al Centro Didattico in `public/images/formazione/`
(1500px, ottimizzate) — mostrano solo marchi attuali (Radiant, GDA, Aquatechnik):
- `corso-gruppo.jpg` — ~20 professionisti in posa a fine corso (prova sociale).
  Usata: home, lead sezione Centro Didattico Formativo. Esclusiva della home.
- `corso-aula.jpg` — aula con partecipanti seduti durante un corso. Usata:
  home (scatto di supporto CDF), chi-siamo (tessera lead della cdf-gallery, ha
  sostituito sede-formazione.jpg che era aula vuota).
- `mauro-banco.jpg` — Mauro spiega al banco demo (un pannello OLI resta sullo
  sfondo → usare a misura media, non full-bleed). Usata: servizi, lead blocco
  Formazione. (`corso-pratica.jpg` scartata e rimossa: mostrava pannelli OLI.)

Loghi marchi in `public/images/brands/` (radiant.svg, itap.jpg, gda.jpg,
aquatechnik.png) e loghi Tecnoconsult in `public/images/` (vedi sezione Loghi).

### Placeholder foto da riempire

Slot in attesa dello scatto reale: riquadro `.photo-ph` (bordo tratteggiato,
label "Foto in arrivo") con un commento `<!-- PLACEHOLDER FOTO: ... -->` che
indica il soggetto suggerito. Trovabili tutti con `grep -rn "PLACEHOLDER FOTO" src/`:
- **Ritratti team ×6** (chi-siamo): Mauro (founder-card, ~4:3), Laura, Monica,
  Maurizio, Francesco, Riccardo (team-grid, ~4:5, sfondo neutro chiaro).
- **Servizi**: tessera featured "Centro Didattico Formativo" usa già una foto
  reale; il resto sono card testo (nessun placeholder aggiuntivo necessario).

Nota: niente foto di hotel o enti specifici (in Referenze ci sono clienti
reali, va evitata qualunque associazione visiva fuorviante).

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
- 2026-07-09 (sessione 2 — "meno piatto e vuoto"): Rework più profondo, su
  autorizzazione del committente a RILASSARE i vincoli del CLAUDE.md.
  CLAUDE.md: sezione "Design system (bloccato…)" → "(base — palette e font
  fissi, layout libero)" con nota che il layout è libero/ricco (asimmetrie,
  card di misure diverse, sfondi lavorati, decorazioni tecniche, foto);
  "Regola di tono" invariata nella sostanza + precisazione che vale per il
  COPY, non per il layout; sezione "Immagini stock" (obsoleta, file inesistenti)
  sostituita da "Immagini disponibili" con inventario reale sede/*.jpg +
  elenco placeholder. SFONDO (Layout body): gradiente tenue paper→#e6ebea +
  reticolo blueprint petrol ~3.5% (fixed) — visibile solo nelle fasce senza
  fondo pieno. Transizioni fasce: filo --line/--line-soft su surface/tint;
  .section--petrol ora con bordo-top copper 2px + reticolo scuro in overlay
  (non più rettangolo piatto). DENSITÀ: section padding 90px→clamp(44,6vw,60);
  nuova .section--intro (padding-top ridotto) al posto degli inline
  padding-top:46px su chi-siamo/servizi(intro)/referenze/contatti;
  .section-head margin-bottom 44→34. ASIMMETRIA/foto (nuovi helper CSS:
  .split/.split--wide-text/--wide-media/--reverse, .split-figure(--framed),
  .data-panel, .plus-list, .servizi-preview-grid + .servizio-card--featured,
  .cdf-gallery, .coverage-split + .map-legend, .hero-card, .team-portrait):
  • Home: hero logo ora dentro una "scheda espositiva" .hero-card (logo su
    fondo chiaro leggibile + foto reale sede-esterno + quota mono) al posto
    del logo che galleggiava nel vuoto; sezione mappa preview → split
    testo+mappa (reverse: mappa sopra su mobile); intro chi-siamo → foto reale
    sede-showroom-3 (tubi Aquatechnik); preview servizi → bento con tessera
    featured "Centro Didattico Formativo" (foto sede-formazione, span intera
    riga). • Chi-siamo: founder-card ora split ritratto(4:5)+dati (biglietto);
    team-grid da 6 card (4 piene + 2 mezze vuote) a 5 ritratti reali (Laura,
    Monica, Maurizio, Francesco, Riccardo) con placeholder foto 4:5 e iniziali
    — rimossa "Posizione da definire", riga desktop piena (5→3→2 col);
    "showroom-scroll" piccolo → .cdf-gallery mosaico (lead aula + Radiant +
    Itap + wide Aquatechnik) come feature vera; Vision arricchita con pannello
    "I nostri obiettivi" (+Relazioni/Servizi/Qualità/Presenza, estratti dal
    testo approvato, il "+" richiama il "Più"). • Servizi: nuovo banner intro
    split testo+foto (aula, .split-figure--framed) sopra la griglia card.
    • Dove-operiamo: mappa non più centrata nel vuoto → .coverage-split
    mappa+legenda regioni (swatch+province) + data-panel (4 marchi/12 prov/3
    regioni). • Referenze: banda top ridotta + conteggi mono per categoria
    (14 strutture / 5 enti / 9 progetti). Ritratti team/founder = 6 slot
    <!-- PLACEHOLDER FOTO: … --> (grep-abili). Responsive: split/mosaici
    collassano (foto sopra dove --reverse), 0 overflow-x su mobile,
    prefers-reduced-motion rispettato. Palette/font/copy invariati.
  NOTA AMBIENTE: durante la sessione i 5 file `public/images/Foto Generali/
  *.jpeg` sono diventati illeggibili a livello OS (EPERM anche a cp/dd/xattr,
  causa esterna) e bloccavano `npm run build` (Astro copia tutta public/).
  Sono duplicati byte-identici di sede/*.jpg (unici usati dal sito, nessun
  riferimento a "Foto Generali" negli src). Non potendo cancellarli, la
  cartella è stata SPOSTATA fuori da public in `_attic-foto-generali/` (rename
  reversibile, byte preservati) così il build passa. Da decidere se rimuoverla
  del tutto o ripristinarla. Verifica: npm run build 0 errori (6 pagine);
  grep "PLACEHOLDER FOTO" src/ → 6; ispezione visiva desktop+mobile.
- 2026-07-09 (sessione 3 — rifiniture): Sei interventi mirati su indicazione
  del committente. (1) Home hero: rimossa la "scheda espositiva" .hero-card
  (logo + foto sede-esterno + didascalia) → torna il solo logo con halo
  (.hero-logo-stage max-width 300→340px); rimosse le regole CSS .hero-card*.
  (2) Home intro chi-siamo: foto reale sede-showroom-3 sostituita da
  placeholder .photo-ph "Foto in arrivo" (3:2) accanto al testo (nuovo slot
  PLACEHOLDER FOTO). (3) Dove-operiamo #mappa-copertura: scala di petrol
  allargata per distinguere le 3 regioni (Veneto #2D5563 / FVG #6E9AA6 / TAA
  #A7C4C9, swatch legenda allineati); .lbl rese leggibili su ogni fondo con
  paint-order:stroke + contorno #EEF2F1 2.6px, fill #16242A; colonna destra
  (legenda+data-panel+paragrafo sparsi) consolidata in un'unica .coverage-card
  (bordo-top petrol 2px, header mono "Copertura per regione", 3 righe regione
  swatch+nome+conteggio province mono copper+sigle, divisore, 3 stat da
  data-panel appiattito); paragrafo hover ridotto a .coverage-hint sotto la
  mappa; tooltip JS invariato. (4) Referenze: rimossi i 3 .ref-section-count
  (14 strutture/5 enti/9 progetti) + regole CSS relative; .ref-section-header
  senza space-between; .ref-section-cat ingrandita. (5) Chi-siamo: aggiunta 6ª
  team-card placeholder "Collaboratore" (ruolo da definire); .team-grid
  repeat(5,1fr)→repeat(3,minmax(0,260px)) center (2 righe da 3, step 3→2 a
  560px) così nessuna riga vuota; founder-card estratta dalla griglia intro
  (.chisiamo→.chisiamo-intro max-width 720) e resa biglietto full-width capped
  (max-width 620, ritratto 250px ≥ ritratti team ~230px, bio leggibile) —
  ritratto Mauro non più piccolo dei dipendenti come richiesto. (6) Titoli:
  rimossa numerazione 01/02/03 (counter sect + override petrol); .section-head
  h2 ingrandito a clamp(2.1,4vw,3.1) lh 1.08 + filetto copper ::after 48×3px;
  .ref-section-cat a clamp(2,3.6vw,2.9). Palette/font/copy invariati, nessuna
  tagline. Verifica: npm run build 0 errori (6 pagine); grep PLACEHOLDER FOTO
  src/ → 8 (6 preesistenti + home-intro + 6° collaboratore); ispezione visiva
  desktop+mobile (0 overflow-x, founder≥team a tutti i breakpoint).
- 2026-07-10: Footer "Powered by: FR Studio" in basso a sinistra (logo reale
  public/images/logo-frstudio.png in un badge copper con angoli smussati,
  padding stretto 3px/5px, centrato verticalmente con la label mono; dati
  legali spostati a destra, su mobile impilati a sinistra). Transizione di
  pagina RIFATTA sul logo VERO: sostituita la geometria inventata a 3 linee
  con public/images/svglogo.svg (logo geometrico di costruzione: cerchio +
  quadrato inscritto + diagonali + barra T + apertura C), caricato a runtime
  via fetch e clonato in #tc-fit, centrato/scalato nella viewport con getBBox
  (~42% del lato minore), reso come tracciato pieno in copper con
  fill-rule:evenodd (anello C cavo). Movimento invertito rispetto a prima: il
  logo intero entra ondulando DA DESTRA (translateX +0.72W→0, sinusoide Y
  ~2.5vh, fade-in), hold ~300ms, poi riprende e sfuma VERSO SINISTRA
  (0→-0.72W). Velo blur invariato, prefers-reduced-motion rispettato
  (#tc-transition display:none → risolve subito). npm run build 0 errori;
  verifica visiva del frame composto (linee nitide, C aperta) via render SVG.
- 2026-07-19 (Formazione + titoli + ritocco premium): Cinque interventi da
  BRIEF-formazione.md. (1) FOTO: aggiunta cartella `public/images/formazione/`
  (corso-gruppo, corso-aula, mauro-banco; rimossa corso-pratica che mostrava
  OLI). (2) TITOLI più presenti: quasi ogni sezione aveva come titolo solo la
  piccola .eyebrow — ora regola condivisa `.section-head h2, .sec-title`
  (Space Grotesk, clamp(1.6rem,1.05rem+1.7vw,2.25rem), lh 1.12, filetto copper
  ::after 44×3px) e ogni sezione ha ora UN solo titolo grande <h2>: home
  (Copertura territoriale, Chi siamo, Mission & Vision, Servizi), servizi
  (Servizi), chi-siamo (Chi siamo, Il nostro Centro Didattico Formativo,
  Mission, Vision), dove-operiamo (Dove operiamo, Marchi rappresentati, Mappa
  di copertura), referenze (Referenze), contatti (sec-title sull'h2 "Come
  raggiungerci", resta bianco via .contatti h2). Sostituito il vecchio clamp
  grande 2.1→3.1rem. NOTA: in un primo giro l'h2 era stato AGGIUNTO sotto
  l'eyebrow → titoli doppi (kicker mono + h2 stesso testo); su richiesta del
  committente ("tieni solo quelli grandi") gli eyebrow-kicker ridondanti sono
  stati RIMOSSI, tenendo solo l'h2. Restano solo 2 eyebrow non-duplicati:
  hero ("Agenzia di rappresentanza · dal 1996", sopra l'h1) e contatti
  ("Contatti", sopra il diverso h2 "Come raggiungerci"). (3) HOME nuova sezione "Centro Didattico Formativo" tra
  Chi siamo (surface) e Mission&Vision (tint): fascia neutra (paper) per
  alternare, section-head + split--wide-media asimmetrico (testo+data-panel
  200m²/30/Corsi·Webinar·Banco a sx, mosaico foto a dx dominante:
  split-figure--framed corso-gruppo lead + corso-aula supporto, figcaption
  mono), CTA → /servizi#centro-didattico. (4) SERVIZI nuovo blocco Formazione
  dopo la griglia (section--surface, id="formazione" — niente id duplicato:
  la card griglia resta #centro-didattico via id={s.id}): split--wide-media
  con mauro-banco framed (misura media, OLI di sfondo non dominante) a sx +
  eyebrow/h2 Formazione, 2 paragrafi, plus-list (Corsi/Banco/Affiancamento/
  Accreditamento). (5) CHI-SIAMO cdf-gallery: tessera lead sede-formazione
  (aula vuota) → corso-aula (aula con partecipanti), gallery più viva.
  CSS: nuovo helper .cdf-home-gallery (grid 1col, support 16/9, max-height
  mobile 340/220). Copy dal brief, fattuale, nessuna tagline; palette/font/
  transizione/loghi invariati. NOTA AMBIENTE: `public/images/Inutilizzate `
  (nome con spazio finale, foto sorgente inutilizzate, 0 riferimenti in src)
  faceva fallire il cleanup post-build di Astro (ENOENT su dist/images/
  Inutilizzate) → SPOSTATA in `_attic-inutilizzate/` (reversibile, come
  _attic-foto-generali). Verifica: npm run build EXIT 0 (6 pagine); grep
  PLACEHOLDER FOTO src/ → 8 invariato; 0 overflow-x nei nuovi blocchi;
  ispezione visiva desktop+mobile home (sezione CDF) e servizi (Formazione).
