# Prompt per Claude Code (Opus) — Tecno Consult: riduzione a 4 marchi + mappa provincie

Leggi prima CLAUDE.md nella root del progetto: design system, regole di tono e struttura pagine sono vincolanti. Non toccare colori/font/loghi reali. Lavora su queste modifiche in un'unica sessione, in quest'ordine.

## Dato di riferimento — copertura per provincia (fonte: scheda interna aggiornata 01/03/26)

D'ora in poi il sito rappresenta SOLO questi 4 marchi: **Radiant, Itap, GDA, Aquatechnik** (asset già presenti: `radiant.svg`, `itap.jpg`, `gda.jpg`, `aquatechnik.png` in `public/images/brands/`). Rimuovi ogni riferimento a Fantini Cosmi, Winkler Solar, Swell System, OLI, GIA da tutto il sito (home, dove-operiamo, eventuali altri punti).

Matrice marchio → provincia (X = copre):

| Provincia | Aquatechnik | Radiant | GDA | Itap |
|---|---|---|---|---|
| Venezia (VE) | X | X | X | X |
| Treviso (TV) | X | X | X | X |
| Verona (VR) | – | X | – | X |
| Vicenza (VI) | – | X | X | X |
| Padova (PD) | X | X | X | X |
| Rovigo (RO) | X | – | – | X |
| Belluno (BL) | X | X | X | X |
| Gorizia (GO) | X | X | X | X |
| Pordenone (PN) | X | X | X | X |
| Trieste (TS) | X | X | X | X |
| Udine (UD) | X | X | X | X |
| Trento (TN) | – | X | X | X |
| Bolzano (BZ) | – | – | – | – |

Totali: Aquatechnik 9 province, Radiant 11, GDA 10, Itap 12 (unico marchio con copertura quasi totale, manca solo BZ). Nessun marchio copre Bolzano/Bozen. **Province coperte da almeno un marchio: 12 su 13** (tutte tranne BZ).

Ho già preparato `public/images/mappa-nordest.svg`: è la mappa SVG con i confini delle 13 province del Triveneto, ciascun `<path>` ha già `data-code="XX"` (sigla provincia) e `data-marchi="aquatechnik,radiant,gda,itap"` (elenco slug già filtrato secondo la matrice sopra, stringa vuota per BZ). Usa questi attributi per costruire l'interazione — non serve ricalcolare la geografia.

## 1. Home page (`src/pages/index.astro`)

**1a. Sezione "Marchi rappresentati"**: sostituisci il marquee scorrevole (`.marquee--brands`) con una griglia statica dei 4 loghi (Radiant, Itap, GDA, Aquatechnik) che riempia la sezione in modo equilibrato (griglia 2x2 su mobile, 4 in riga su desktop). Effetto hover sobrio (es. leggero scale + ombra o accento colore `--copper` sul bordo, transizione ~200ms). Ogni logo è un link `<a href="/dove-operiamo#mappa-copertura">`. Rimuovi l'array `marchi` esteso e i tooltip regione (`brand-tooltip`, `data-zona`) e lo script `initBrandTooltips` associato: non servono più.

**1b. Sezione "Mappa di copertura"**: sostituisci il placeholder (`.coverage-ph-card`) con una versione **piccola** della mappa (`/images/mappa-nordest.svg` via `<img>` o inline, non serve interattività qui — è solo un'anteprima). Tutta l'area è cliccabile/linkata a `/dove-operiamo#mappa-copertura`, con hover sobrio (leggero zoom o brightness). Nessun bottone CTA visibile: l'intera card è il link, cursore pointer.

**1c. Logo Tecnoconsult**: nel file `public/images/tecnoconsult-logo.png` (solo per l'uso in home, verifica se è usato anche altrove — se sì duplica in `tecnoconsult-logo-home.png` per non toccare le altre pagine), rimuovi il riempimento bianco interno alle due "O" del wordmark, rendendolo trasparente. Usa uno script Python con Pillow (flood fill dal centro di ciascun buco verso trasparenza, oppure color-key sul bianco puro `#FFFFFF`/quasi-bianco solo nell'area interna alle O, senza toccare altri bianchi del logo). Verifica il risultato con uno screenshot prima di considerarlo fatto — è un'immagine reale, non ridisegnarla.

**1d. Datasheet sotto il logo** (`.datasheet`): aggiorna `data-target` — "Marchi rappresentati" da 9 a **4**, "Province coperte" da 8 a **12**. Lascia invariati "Fondazione" (1996) e "Showroom" (200 m²).

**1e. "Chi si affida a noi"**: rallenta la velocità dello scorrimento marquee. Attualmente `animation-duration:60s` inline nel markup — aumentalo (es. 90–100s, prova e valuta a occhio che resti leggibile senza sembrare fermo).

## 2. Chi siamo (`src/pages/chi-siamo.astro`)

**2a.** Aggiungi una card nel `team-grid` per **Riccardo Scarabel**, sullo stesso modello della card vuota già presente (`team-card--empty`, avatar placeholder, "Posizione da definire") ma con il nome "Riccardo Scarabel" visibile e senza logo/posizione/contatti (stesso trattamento della card founder minimale, ma resta nel grid del team, non nel founder-card).

**2b.** Sopra le foto showroom (`.showroom-scroll`), aggiungi un titolo grande "Il nostro show-room" (stesso stile heading di sezione usato altrove, es. h2/h3 con classe coerente al design system — controlla come sono marcati gli altri titoli di sezione tipo "Mission" per coerenza).

**2c.** Aggiungi una nuova sezione "Vision" (stessa struttura della sezione Mission: eyebrow + testo), posizionata dopo Mission. Testo placeholder ora: `[TESTO VISION DA INSERIRE — Leonardo lo fornirà]`. Non inventare copy definitivo.

## 3. Dove operiamo (`src/pages/dove-operiamo.astro`)

**3a.** Rimuovi la `<ul class="dove-list">` con i 4 bullet (Veneto/FVG/Trentino/Grossisti).

**3b.** Nella griglia `brand-territory-grid`, tieni solo le 4 card di Aquatechnik, Radiant, GDA, Itap (rimuovi GIA, Fantini Cosmi, Winkler Solar, Swell System, OLI). Aggiorna il testo `.bt-zone` di ciascuna con l'elenco province preciso dalla matrice sopra, es. Aquatechnik: "Veneto (VE, TV, PD, RO, BL) · Friuli Venezia Giulia (GO, PN, TS, UD)"; Radiant: "Veneto (tutte tranne Rovigo) · Friuli Venezia Giulia (tutte) · Trentino (Trento)"; GDA: "Veneto (tutte tranne Verona e Rovigo) · Friuli Venezia Giulia (tutte) · Trentino (Trento)"; Itap: "Veneto (tutte) · Friuli Venezia Giulia (tutte) · Trentino (Trento)".

**3c.** Aggiungi una sezione con `id="mappa-copertura"` contenente la mappa SVG **grande e interattiva** (`public/images/mappa-nordest.svg`, inline nell'HTML per poter agganciare gli eventi — non `<img>`). Comportamento: al passaggio del mouse (`mouseenter`/`mouseleave`, niente click) su un `<path data-code data-marchi>`, mostra una piccola finestrella (tooltip) vicino al cursore con: nome provincia (usa il `<title>` già presente in ogni path) + i loghi dei marchi elencati in `data-marchi` (icone piccole da `public/images/brands/`) + eventualmente il nome del marchio sotto il logo. Se `data-marchi` è vuoto (Bolzano), mostra "Nessun marchio attivo" o simile invece dei loghi. Su dispositivi touch (niente hover reale) implementa un fallback ragionevole: tap sulla provincia apre/chiude lo stesso tooltip (necessario per usabilità mobile, l'utente non ha specificato questo caso). Ancora la sezione in modo che l'anchor `#mappa-copertura` scrolli correttamente arrivando dalla home.

**3d. Non aggiungere altro contenuto extra** oltre a quanto sopra (nessuna sezione aggiuntiva è stata richiesta per questa pagina).

## 4. Referenze (`src/pages/referenze.astro`)

Rimuovi la `ref-filter-bar` (i 4 bottoni filtro) e lo script `initRefFilter` associato. Lascia invariate le 3 sezioni con i chip dei clienti (hotellerie, sanità, industria) — restano sempre tutte visibili, senza filtro.

## Verifica finale

Dopo le modifiche: `npm run build` per controllare che non ci siano errori Astro/TS. Poi avvia il dev server e controlla visivamente (screenshot) home, chi-siamo, dove-operiamo, referenze — desktop e viewport mobile (~390px) — in particolare: hover/tap sulla mappa provincie, click sui 4 loghi home → arrivo su `/dove-operiamo#mappa-copertura`, logo senza bianco nelle O, velocità marquee "chi si affida a noi", assenza filtri in referenze.
