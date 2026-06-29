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
- `public/images/tecnoconsult-logo.png` — versione con wordmark

Non sostituire con SVG ridisegnati o icone generiche.

## Struttura multipagina

- `/` Home — hero + numeri (datasheet) + marchi rappresentati + breve intro
  chi siamo (link "Scopri il team" → /chi-siamo) + CTA verso /contatti
- `/chi-siamo` — testo completo chi siamo + team (5 card) + mission/pillars
- `/servizi` — le 7 card servizi
- `/dove-operiamo` — testo + mappa illustrativa
- `/referenze` — le 3 righe scorrevoli con etichetta categoria
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
