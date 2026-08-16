# Zahnarztpraxis Dr. Zipplies — Website-Neubau

**Status:** Phase 0 + halbe Phase 2 erledigt · Stand 13.08.2026

## ▶ HIER GEHT ES WEITER (nächste Session)

> **Der ausführbare Bauplan steht in [`BAUPLAN.md`](BAUPLAN.md)** (Stand 14.08.2026) —
> Sektions-Choreografie, Komponenten-Entscheidung (nur Tokens + Primitives) und die
> Higgsfield-Prompts. Diese Datei hier bleibt die Entscheidungs- und Kundenakte.

```
cd ~/Projekte/DT-Webstudio/zipplies
npm install          # Schritt 1 — wurde noch nicht ausgeführt
npm run dev
```

Dann in dieser Reihenfolge:
1. `app/layout.tsx`, `app/globals.css` (importiert `styles/colors.css`), `components/Logo.tsx`
2. **Nur den Hero bauen** → Abnahme durch Basti, erst danach weiter
3. Restliche Seiten gegen dasselbe System
4. Motion zuletzt, inkl. Signature-Moment (Anfahrts-Sequenz)

### Fertig
- Alle Design-Entscheidungen (Tabelle unten)
- `design/tokens/colors.css` — Blau-Skala in OKLCH gerechnet, 11 Stufen; Ink neu als warm-brauner Ton (die alten Werte waren grünstichig aus dem Petrol-System); 16 von 16 WCAG-Prüfungen bestanden
- `design/brand/zahn-z.svg` — Bildmarke Variante 05, im Browser gegengeprüft
- `design/preview/farben.html` — Farbtafel zum Anschauen, im Browser öffnen
- Next.js-Gerüst: `package.json`, `next.config.mjs` (`output: "export"`), `tsconfig.json`, `.gitignore`
- Fotos kopiert nach `public/images/`: `utzhof.jpg`, `zufahrt.jpg`

### Noch offen in Phase 2
- Schriften **selbst hosten** — woff2 für Newsreader + Instrument Sans herunterladen nach `public/fonts/`, `@font-face` schreiben. Kein Google-CDN (DSGVO, Arztpraxis).
- Tokens für Typografie, Abstände, Schatten und Motion aus dem Claude-Design-System übernehmen und auf Blau anpassen
- Migriertes System zurück ins Claude-Design-Projekt `b1d1a264-9e39-491c-ae4a-1c9999c102de` pushen (nur über das `DesignSync`-Tool, WebFetch gibt 403)

---

**Ordner:** `~/Projekte/DT-Webstudio/zipplies/`
**Vorgänger:** `~/Projekte/DT-Webstudio/zahnarzt-zipplies/` (Astro, deployed) — bleibt als Fallback unangetastet, wird **nicht** übernommen. Ausnahme: die Original-Fotodateien.

---

## Kunde

Dr. med. dent. **Robert** Zipplies, M.Sc. — Utzhof · Thalreit 7, 83064 Raubling
Tel. 08035 6505 · Fax 08035 6686 · Praxis seit 1994

> ⚠️ Das Claude-Design-System schreibt „Dr. Christian Zipplies". Falsch — „Christian" stammt aus der Notion-Zeile „mit Christian abstimmen" (Christian Dachauer, GbR-Partner). Beim nächsten Update des Design-Systems korrigieren.

---

## Phase 0 — Getroffene Entscheidungen (13.08.2026)

| Thema | Entscheidung |
|---|---|
| Logo | Familie **05** — Zahn mit Z, rund (Badge-Monogramm) |
| Leitfarbe | **Blau** (Farbweg 01/05), nicht das Petrol des Design-Systems |
| Schrift | **Newsreader** (Display) + **Instrument Sans** (Text) — beibehalten |
| Stack | **Next.js**, statischer Export (`output: 'export'`) |
| Vorgehen | Neubau von Null, keine Code-/Textübernahme |

---

## Phase 1 — Richtung schärfen

### Drei Adjektive (Vorschlag, ersetzt die vier aus Notion)

Die Notion-Liste („vertrauensvoll, persönlich, fachlich spezialisiert, bodenständig") besteht den Ausschlusstest aus `DESIGN-WORKFLOW.md` nicht — „vertrauensvoll" behauptet jede Praxis. Schärfer:

```
Positionierung: Die Zahnarztpraxis am Utzhof — Implantologie auf Facharztniveau,
                aber am Hof im Grünen statt in der Stadt.
Zielkunde:      Menschen aus dem Inntal, die bewusst herfahren und bleiben.
Hauptaktion:    Termin anfragen (Rückruf durch die Praxis, keine Buchung).
Drei Adjektive: ländlich-verwurzelt · belegt-spezialisiert · unaufgeregt
Tabu:           Klinik-Kälte, Werbesprache, Superlative, erfundene Zahlen.
```

**Warum diese drei tragen:** Kein Wettbewerber in Rosenheim sitzt auf einem historischen Hof. „belegt" statt „kompetent", weil ICOI, DGOI und der M.Sc. nachprüfbar sind — das ist die einzige Kompetenzbehauptung, die nicht Marketing ist.

### Der Signature-Moment

Der Standort ist schwer zu finden — in Notion als Schwäche notiert. **Genau das wird der eine gemerkte Moment:** eine scroll-gesteuerte Anfahrts-Sequenz, die den Weg von der Hauptstraße zum Utzhof abläuft (Foto `Standort_Zufahrt.jpg` existiert bereits). Löst ein echtes Problem, ist ownable, und es bleibt bei **genau einem** solchen Moment.

> ⚠️ Konflikt: Das Design-System verbietet Parallax und lässt nur Fade + 10px Y zu. Für diesen einen Abschnitt wird eine dokumentierte Ausnahme in die Guidelines geschrieben — nicht stillschweigend gebrochen.

---

## Phase 2 — Design-System auf Blau migrieren

1. `tokens/colors.css` neu: Blau-Treppe in **OKLCH** gerechnet (nicht HEX geraten), verankert auf tiefem Navy für Text/dunkle Bänder + mittlerem Blau für Aktionen.
2. **Sand-50 (`#FBFAF7`) als Seitenfläche behalten** — warmes gebrochenes Weiß gegen kühles Blau hält die „menschliche" Hälfte. Neutrale Grautöne bleiben verboten.
3. **Copper als 10-%-Akzent behalten** — Kupfer ist der klassische Komplementärton zu Blau.
4. Kontraste neu prüfen: Fließtext ≥ 4.5:1, große Schrift ≥ 3:1.
5. **Fonts selbst hosten** statt Google-CDN → `tokens/fonts.css` auf lokale woff2 mit `@font-face` umstellen.
6. Logo 05 als SVG zeichnen, `Wordmark.jsx` ersetzt die Type-only-Lösung.
7. Alle 19 Guideline-Karten gegen die neue Skala nachziehen, zurück ins Claude-Design-Projekt `b1d1a264-9e39-491c-ae4a-1c9999c102de` pushen.

---

## Phase 3 — Referenzen ergänzen

`DESIGN-WORKFLOW.md`, Phase 3: **nicht in der eigenen Branche schauen.** Notion listet bisher nur `zen.dentist` und `mountaineerdental.com` — beides Zahnarztseiten. Es fehlen 4–6 branchenfremde Referenzen (Architektur, Hotellerie im Ländlichen, Manufaktur), je mit einem Satz, was konkret übernommen wird.

---

## Phase 4 — Seitenstruktur

| Seite | Job |
|---|---|
| `/` | In 5 Sekunden klarmachen: wo, was, wie Termin |
| `/implantologie` | Eigene Seite für den Schwerpunkt — trägt „Zahnimplantat Rosenheim" im lokalen SEO |
| `/leistungen` | Die übrigen 8 Bereiche, per Accordion statt Textwand |
| `/praxis` | Die Utzhof-Geschichte — der Differenzierer |
| `/team` | Gesichter (Namen/Fotos noch offen) |
| `/anfahrt` | Eigene Seite statt Footer-Zeile, weil der Weg das Problem ist |
| `/kontakt` | Terminanfrage |
| `/impressum`, `/datenschutz`, `404` | Pflicht |

Jede Startseiten-Sektion bekommt vor dem Bau einen Job zugeordnet. Kein `Hero → 3 Icon-Spalten → Über uns → Kontakt`.

---

## Phase 5 — Bauen

Reihenfolge nach `DESIGN-WORKFLOW.md` Phase 7:
1. Design-System als CSS-Variablen
2. Hero komplett fertig → **Abnahme durch Basti**, erst dann weiter
3. Rest der Seiten gegen dasselbe System
4. Motion zuletzt
5. JSON-LD `Dentist` (Adresse, Geo, `openingHoursSpecification`), Sitemap, robots

---

## Phase 6 — Audit & Deploy

Anti-Baukasten-Checkliste aus `DESIGN-WORKFLOW.md` Phase 8, dann statischer Export → Cloudflare Pages, Domain umziehen.

---

## Offene Punkte mit Dr. Zipplies

- [ ] Namen, Rollen und Fotofreigabe des Teams
- [ ] Öffnungszeiten bestätigen (bisher nur Telefonzeiten publiziert)
- [ ] Logo als Vektordatei vorhanden?
- [ ] Feste Praxisfarben vorhanden?
- [ ] Professionelle Praxis-/Teamfotos oder Fototermin nötig?
- [ ] Positionierung: Generalist fürs Inntal oder Implantologie-Spezialist?
- [ ] **Echte Bewertungen besorgen.** Die alte Seite trug erfundene „Beispiel-Bewertungen" (Maria K., Thomas B., Sabine W.). Erfundene Patientenstimmen zu veröffentlichen ist nach UWG abmahnfähig — auf der neuen Seite entweder echte Google-Rezensionen oder gar keine.
- [ ] Hinweis weitergeben: Die alte Joomla-Seite ist kompromittiert (Spam-Links im Footer)

## Offene Punkte bei uns

- [ ] Design-System: Name „Christian" → „Robert" korrigieren
- [ ] Design-System: `ImageFrame`-Annahme „keine Fotos vorhanden" korrigieren
- [ ] Fotos aus `zahnarzt-zipplies/assets/original/` herüberholen
- [ ] Terminformular: Versand-Backend + DSGVO-Checkbox (Gesundheitsdaten!)
- [ ] Karte nur mit Consent einbinden
