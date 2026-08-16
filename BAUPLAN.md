# Bauplan — Website Zahnarztpraxis Dr. Zipplies (React)

**Stand:** 14.08.2026 · Ergänzt `PROJEKT.md` (Phasen 0–2 dort dokumentiert)
**Ordner:** `~/Projekte/DT-Webstudio/zipplies/`
**Vorgänger:** `~/Projekte/DT-Webstudio/zahnarzt-zipplies/` (Astro, deployed) — wird **nicht** angefasst und **nicht** übernommen. Ausnahme: Original-Fotodateien.

---

## Stand 14.08.2026

**Fertig:** Schritt 1 (Fundament) und Schritt 2–4 für die Startseite.
Tokens liegen unter `styles/tokens/`, Schriften selbst gehostet in `public/fonts/`
(null externe Requests), alle acht Sektionen gebaut, Build grün, statischer Export läuft.
Echte Praxisdaten in `content/praxis.ts`. Der Signature-Moment (Anfahrts-Sequenz) steht
mechanisch — es fehlen nur die Etappenbilder 1–3.

**Als Nächstes:** Higgsfield-Bilder einsetzen · Unterseiten (`/implantologie`, `/leistungen`,
`/praxis`, `/anfahrt`, `/kontakt`, Pflichtseiten) · Terminformular mit Versand-Backend ·
Blau-Tokens und die Motion-Ausnahme über `DesignSync` zurückpushen.

**Beim Übernehmen im Design-System gefunden und lokal korrigiert:**
`base.css` unterstrich Links mit `--petrol-300` (existiert im Blau-System nicht);
Schatten waren petrol-getönt statt navy; `--glass` (.82) wird im Kopf durch .94 ersetzt.
Diese drei Korrekturen müssen beim Rückpush mit.

---

## Feste Entscheidungen

| Thema | Entscheidung |
|---|---|
| Stack | Next.js 15 · React 19 · TypeScript · statischer Export (`output: "export"`) |
| Styling | CSS-Variablen + CSS-Module. Kein Tailwind, kein UI-Framework. |
| Design-System | Claude-Projekt `b1d1a264-9e39-491c-ae4a-1c9999c102de`, Zugriff **nur** über `DesignSync` |
| Übernahme | **Tokens + Primitives ja, Sektionen nein.** Das fertige `ui_kits/website` dient als Referenz, nicht als Code-Quelle. |
| Leitfarbe | Blau (OKLCH-Treppe, bereits gerechnet) + Sand-50 als Fläche + Copper als 10-%-Akzent |
| Schrift | Newsreader (Display) + Instrument Sans (Text), **selbst gehostet**, kein Google-CDN |
| Bilder | Basti generiert in Higgsfield (kostenlos, eigene Session). Claude liefert Prompts, keine Token-Generierung. |
| Hauptaktion | Termin anfragen — Telefon zuerst, Formular zweitrangig |

---

## Schritt 1 — Fundament (kein sichtbares Design)

1. `npm install` (steht noch aus), Dev-Server prüfen.
2. **Tokens holen** über `DesignSync` → `get_file`, ablegen unter `styles/tokens/`:
   `base.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.
   `colors.css` ist bereits blau migriert und **bleibt lokal die Wahrheit** — die Petrol-Fassung aus dem System wird nicht heruntergeladen.
3. **Fonts selbst hosten:** Newsreader + Instrument Sans als woff2 nach `public/fonts/`,
   `@font-face` in `styles/tokens/fonts.css`, `font-display: swap`, nur benötigte Schnitte.
   Grund: DSGVO — eine Arztpraxis darf keine IPs an Google-CDNs geben.
4. **Primitives übernehmen** (JSX → TSX, Farben laufen ohnehin über Variablen, also kein Umfärben nötig):
   `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `Icon`, `Accordion`, `Tabs`,
   `Input`, `Textarea`, `Select`, `Checkbox`, `FormField`, `Alert`, `Dialog`.
   **Nicht** übernommen: `Hero`, `Header`, `Services`, `TrustBand`, `Team`, `Anfahrt`, `Footer`, `SectionHeading`, `TrustStat` — die bauen wir selbst.
5. `app/layout.tsx` + `app/globals.css`, `components/Logo.tsx` aus `design/brand/zahn-z.svg`.
6. Kontrolle: Eine leere Seite, die nur Typo-Skala und Farbtafel zeigt, muss schon richtig aussehen.

---

## Schritt 2 — Sektions-Choreografie der Startseite

Jede Sektion hat **einen** Job. Verboten ist die Standardfolge `Hero → 3 Icon-Spalten → Über uns → Kontakt`.

| # | Sektion | Job | Form |
|---|---|---|---|
| 1 | **Ankunft** | In 5 Sekunden: wo, was, wie Termin | Vollflächiges Utzhof-Foto, Scrim, Serif-Headline unten links, Ort als Overline, Telefon + „Termin anfragen" |
| 2 | **Die eine Zeile** | Warum man herfährt | *Ein* Satz, groß, auf Sand. Kein Bild, kein Icon. Viel Luft. |
| 3 | **Implantologie** | Kompetenz belegen, nicht behaupten | Blue-900 Vollband. ICOI · DGOI · M.Sc. als nachprüfbare Zeilen, keine erfundenen Zahlen. Link auf `/implantologie` |
| 4 | **Leistungen** | Vollständigkeit ohne Textwand | Typografische Indexliste (nummeriert, aufklappbar) statt Icon-Kacheln |
| 5 | **Der Weg zum Utzhof** | Das echte Problem lösen | **Signature-Moment**, scroll-gesteuert (siehe Schritt 5) |
| 6 | **Der Hof** | Der Differenzierer | Foto + kurzer Text, Link auf `/praxis` |
| 7 | **Termin** | Kontakt herstellen | Telefonnummer groß und wählbar, Formular darunter |
| 8 | Footer | Pflicht + Orientierung | Blue-950, Adresse, Zeiten, Rechtslinks |

Zielgruppe ist ländlich und eher älter: Telefon schlägt Formular, Schriftgrößen nicht unter `--size-body`, Klickflächen ≥ 44 px.

---

## Schritt 3 — Hero bauen, dann Abnahme

Nur die Sektion „Ankunft", vollständig fertig: Desktop, Tablet, Mobil, Tastaturfokus, `prefers-reduced-motion`.
**Stopp. Abnahme durch Basti.** Erst danach geht es weiter — so steht es im `DESIGN-WORKFLOW.md` und so bleibt es.

---

## Schritt 4 — Restliche Startseite + Unterseiten

Startseite Sektion 2–8, danach:

| Seite | Job |
|---|---|
| `/implantologie` | Schwerpunktseite, trägt „Zahnimplantat Rosenheim" im lokalen SEO |
| `/leistungen` | Die übrigen Bereiche, Accordion |
| `/praxis` | Die Utzhof-Geschichte |
| `/team` | Gesichter — **blockiert**, bis Namen und Fotofreigabe da sind |
| `/anfahrt` | Eigene Seite, weil der Weg das Problem ist |
| `/kontakt` | Terminanfrage |
| `/impressum`, `/datenschutz`, `404` | Pflicht |

---

## Schritt 5 — Motion, zuletzt

Grundregel aus dem System: Fade + 10 px Y, Dauern aus `motion.css` (`--dur` 220 ms, `--dur-reveal` 640 ms), `--ease-calm`. Kein Parallax.

**Die eine dokumentierte Ausnahme:** die Anfahrts-Sequenz. Scroll-gesteuerter Ablauf von der Hauptstraße zum Hof — Bild wechselt, eine kurze Zeile pro Etappe. Genau **ein** solcher Moment auf der ganzen Seite. Die Ausnahme wird als Guideline-Karte ins Design-System zurückgeschrieben, nicht stillschweigend gebrochen.

`prefers-reduced-motion: reduce` schaltet die Sequenz auf eine statische Bildfolge um — nicht auf „nichts".

---

## Schritt 6 — Recht, Formular, SEO

- Terminformular: Versand-Backend (Cloudflare Worker o. Ä.), **DSGVO-Einwilligung als Pflicht-Checkbox** — es sind Gesundheitsdaten, Art. 9 DSGVO. Keine Speicherung im Browser, keine Analytics-Weitergabe.
- Karte nur nach Consent laden (Zwei-Klick), sonst statisches Kartenbild.
- **Keine erfundenen Bewertungen.** Die alte Seite hatte welche („Maria K.", „Thomas B.", „Sabine W.") — das ist nach UWG abmahnfähig. Entweder echte Google-Rezensionen oder gar keine.
- JSON-LD `Dentist`: Adresse, Geo-Koordinaten, `openingHoursSpecification`, Telefon. Sitemap, robots.txt.

---

## Schritt 7 — Audit & Deploy

Anti-Baukasten-Checkliste aus `DESIGN-WORKFLOW.md` Phase 8, Lighthouse (Chrome-DevTools-MCP), Kontraste, Tastaturbedienung, dann `next build` → statischer Export → Cloudflare Pages, Domain umziehen.

---

## Bild- und Videoplan

### Was echt sein muss
Team, Behandlungsräume, Geräte und der Hof selbst **müssen echte Fotos sein**. Ein generiertes Bild, das als „unsere Praxis" gezeigt wird, ist irreführende Werbung — und fällt Patienten beim ersten Besuch auf. Vorhanden: `public/images/utzhof.jpg`, `public/images/zufahrt.jpg`.

### Was generiert werden darf
Atmosphäre und Umgebung, klar als Stimmungsbild gesetzt, nie als Praxisdokumentation: Inntal-Landschaft, Licht auf Holz, Morgennebel, Wegführung, abstrakte Detailtexturen.

### Higgsfield-Prompts (in deiner eigenen Session einfügen)

**Die verbindlichen, ausführlichen Prompts stehen jetzt in [`BILDBRIEFING.md`](BILDBRIEFING.md).**
Der vorherige Kurz-Prompt-Block hier war zu knapp — aus Stichworten wie „abstract macro
of brushed titanium" war nicht erkennbar, wofür das Bild überhaupt ist. Das Briefing gibt
zu jedem Bild: wofür es gebraucht wird, wo es auf der Seite sitzt, wo die Textzone liegt
und was auf dem Bild explizit nicht zu sehen sein darf (keine Menschen, keine Zähne,
keine Geräte). Ablage weiterhin: generierte Dateien nach `public/images/generated/`,
echte Fotos nach `public/images/`.

---

## Offene Punkte bei Dr. Zipplies

- [ ] Namen, Rollen, Fotofreigabe des Teams → blockiert `/team`
- [ ] Öffnungszeiten bestätigen (bisher nur Telefonzeiten publiziert)
- [ ] Logo als Vektordatei vorhanden?
- [ ] Professionelle Praxis-/Teamfotos oder Fototermin nötig?
- [ ] Positionierung final: Generalist fürs Inntal oder Implantologie-Spezialist?
- [ ] Echte Google-Rezensionen freigeben — oder Bewertungen weglassen
- [ ] Hinweis weitergeben: Die alte Joomla-Seite ist kompromittiert (Spam-Links im Footer)

## Offene Punkte bei uns

- [ ] Design-System: Name „Christian" → **„Robert"** korrigieren
- [ ] Design-System: `ImageFrame`-Annahme „keine Fotos vorhanden" korrigieren
- [ ] Blau-Tokens + Guideline-Ausnahme (Anfahrts-Sequenz) über `DesignSync` zurückpushen
- [ ] Fonts-woff2 beschaffen
