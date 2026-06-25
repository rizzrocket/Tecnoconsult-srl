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

Nav con link reali alle pagine, non anchor (`#sezione`).

## Log sessioni

- 2026-06-26: Sessione di fix su sito già esistente (one-page). Avviata
  conversione a CLAUDE.md + rimozione hero SVG schema tecnico (sostituito
  da logo reale con effetto sobrio) + rimozione headline ad effetto +
  fix marquee/referenze + conversione multipagina + immagini stock.
  Loghi reali già presenti da commit precedente (f1596e9) — non
  riscaricare, sono già quelli giusti.
