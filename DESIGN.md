---
name: Zahnarztpraxis Dr. Zipplies
description: Ruhige, belegbasierte Praxis-Website am Utzhof in Thalreit — Fakten statt Behauptungen.
colors:
  blue-700: "oklch(47% 0.126 257)"
  blue-800: "oklch(39.6% 0.105 258)"
  blue-900: "oklch(32.2% 0.080 259)"
  blue-950: "oklch(23.6% 0.055 260)"
  blue-300: "oklch(81.2% 0.061 253)"
  blue-100: "oklch(94.7% 0.017 251)"
  blue-50: "oklch(97.7% 0.007 250)"
  sand-50: "oklch(98.4% 0.004 90)"
  sand-100: "oklch(96.4% 0.006 85)"
  sand-200: "oklch(92.6% 0.008 80)"
  ink-900: "oklch(24.5% 0.012 70)"
  ink-700: "oklch(36.5% 0.012 70)"
  ink-500: "oklch(53.0% 0.012 70)"
  ink-400: "oklch(64.5% 0.010 70)"
  copper-600: "oklch(52% 0.10 45)"
  copper-100: "oklch(94.5% 0.025 60)"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, -apple-system, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, -apple-system, 'Segoe UI', Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.14em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "999px"
spacing:
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.blue-700}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "0 32px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.blue-800}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Zahnarztpraxis Dr. Zipplies

## 1. Overview

**Creative North Star: "Der ruhige Hof"**

Eine Praxis auf dem Land, seit 1994 im selben Haus — die Ruhe des Standorts ist
Teil des Versprechens, nicht nur die Kulisse dafür. Das System setzt kühles
Blau (Fachlichkeit) gegen warmes Sand-Papier und Ink-Braun (das Menschliche),
mit einer Serif-Display-Schrift, die Zeit und Vertrauen ausstrahlt, ohne
sentimental zu werden. Jede Vertrauensaussage ist an eine nachprüfbare Tatsache
gebunden — Jahreszahl, Fachgesellschaft, Zertifikat — statt an ein
Marketing-Adjektiv. Die Seite lehnt die generische Zahnarzt-Baukastenseite
ausdrücklich ab: kein `Hero → 3 Icon-Spalten → Über uns → Kontakt`-Schema,
keine sterile Stock-Foto-Klinik, keine erfundenen Patientenstimmen.

**Key Characteristics:**
- Kühles Blau trägt Fachlichkeit, Sand und Ink tragen das Menschliche — nie vermischt in derselben Rolle.
- Copper ist ein einzelnes Akzent-Element, nie eine Fläche.
- Bewegung ist ruhig und einmalig (Fade + 10px Y beim Scrollen); die Anfahrts-Sequenz und die Vertrauens-Icons sind die einzigen dokumentierten Ausnahmen.
- Typografische Hierarchie über Serif-Display + Sans-Body trägt die Ruhe, nicht Dekoration.

## 2. Colors

Kühles Blau als Marke gegen warmes Papier — bewusst nie neutrales Grau.

### Primary
- **Aktionsblau** (`oklch(47% 0.126 257)` / #265AA0): jede Aktion — Buttons, Links, Fokus-Akzente. Auf Weiß 6.88:1 Kontrast.
- **Tiefblau** (`oklch(32.2% 0.080 259)` / #18335B): dunkle Vollbänder (Implantologie-Sektion), Hero-Scrim.
- **Footer-Blau** (`oklch(23.6% 0.055 260)` / #0E1E38): Footer, tiefste Stufe der Treppe.

### Neutral
- **Sand-Papier** (`oklch(98.4% 0.004 90)` / #FBFAF7): Seitenfläche. Nie reines Weiß als Grundfläche.
- **Sand-Warm** (`oklch(96.4% 0.006 85)` / #F5F2EC): abgesetzte Bänder (Trust-Leiste, Karte-Sektion) — eine Stufe wärmer als die Seitenfläche.
- **Ink-Überschrift** (`oklch(24.5% 0.012 70)` / #24201A): Überschriften, 15.52:1 auf Sand-50.
- **Ink-Fließtext** (`oklch(36.5% 0.012 70)` / #433D38): Fließtext, 10.25:1 auf Sand-50.
- **Ink-Gedämpft** (`oklch(53.0% 0.012 70)` / #706B64): sekundärer Text, 5.06:1 auf Sand-50.

### Named Rules
**Die Ein-Copper-Regel.** Copper (`oklch(52% 0.10 45)` / #9A5F31) erscheint höchstens einmal pro Ansicht — ein Strich, ein Punkt, nie eine große Fläche. Verstoß: eine ganze Sektion in Copper einzufärben (siehe Trust-Leisten-Entscheidung, die Sand statt Copper als Flächenfarbe wählte).

**Die Kein-Neutralgrau-Regel.** Jedes Grau im System ist getönt — Sand (warm, Richtung Papier) oder Ink (warmbraun, Richtung Text). Ein reines `#888` oder `gray-500` ist immer falsch.

## 3. Typography

**Display Font:** Newsreader (mit Georgia, Times New Roman als Fallback)
**Body Font:** Instrument Sans (mit -apple-system, Segoe UI, Helvetica als Fallback)

**Character:** Eine ruhige Buchschrift trifft eine nüchterne, gut lesbare Grotesk — der Kontrast trägt die Spannung zwischen "gewachsen" (Utzhof seit 1994) und "fachlich aktuell" (Implantologie-Zertifizierung).

### Hierarchy
- **Display** (400, `clamp(2.25rem, 3.8vw, 3.25rem)`, 1.18): Sektionsüberschriften, Serif.
- **Hero-Display** (400, `clamp(2.75rem, 5.2vw, 4.5rem)`, 1.08): einzig für den Hero-Titel.
- **Title** (500, 1.25rem, 1.18): Karten-Titel, Serif.
- **Body** (400, 1.0625rem, 1.6, max. 62ch): Fließtext. Untergrenze bewusst höher als üblich — die Zielgruppe ist älter.
- **Label/Overline** (600, 0.75rem, Tracking 0.14em, Großbuchstaben, Sans): Kicker-Zeilen, sparsam eingesetzt.

### Named Rules
**Die Lesbarkeits-Untergrenze-Regel.** Fließtext startet nie unter `--size-body` (1.0625rem/17px). Die Zielgruppe schließt ältere Patientinnen und Patienten ein — kleinere Größen sind für Captions reserviert, nie für Absätze.

## 4. Elevation

Flach mit sparsamer Tiefe. Die meisten Flächen sind komplett schattenlos —
Trennung entsteht über Flächenfarbe (Sand-Papier vs. Sand-Warm vs. Weiß), nicht
über Schatten. Schatten kommen nur dort vor, wo eine Fläche wirklich vor der
Seite "schwebt" (Terminkarte, Kartenrahmen) — dann sehr weich und navy-getönt
auf Basis von `--blue-950`, nie grau und nie hart.

### Shadow Vocabulary
- **shadow-sm** (`0 1px 2px rgba(14,30,56,.05), 0 2px 6px rgba(14,30,56,.04)`): Terminkarte, ruhende Karten.
- **shadow-lg** (`0 4px 8px rgba(14,30,56,.05), 0 20px 44px rgba(14,30,56,.09)`): Kartenrahmen (eingebettete Karte), einzige auffällige Schwebe-Wirkung der Seite.

### Named Rules
**Die Navy-nicht-Grau-Regel.** Jeder Schatten ist auf `rgba(14,30,56,…)` gemischt, nie auf reinem Schwarz oder Grau — Schatten tragen dieselbe Farbfamilie wie die Marke.

## 5. Components

### Buttons
- **Shape:** voll gerundet (`--radius-full`, 999px), Mindesthöhe 44px (`--control-h`, nicht verhandelbare Klickfläche).
- **Primary:** Aktionsblau-Fläche, weißer Text, `padding-inline: 32px`.
- **Hover:** Fläche dunkelt eine Stufe (`--action-primary-hover`, Tiefblau-800) ab, keine Transform-Bewegung.
- **Secondary/Ghost:** transparente Fläche, 1px weiße/blaue Kontur, Text in Kontrastfarbe.

### Cards
- **Corner Style:** 16px (`--radius-lg`).
- **Background:** Weiß auf Sand-Flächen für Kontrast (Expertise-Karten), sonst Sand-Warm.
- **Border:** 1px Sand-200, sehr zurückhaltend.
- **Internal Padding:** 24px.
- **Bento-Variante (Expertise-Sektion):** eine breite Karte oben (horizontales Icon+Text-Layout), zwei gleich große darunter — bewusst keine gleichförmige 3-Spalten-Reihe.

### Trust-Icon-Leiste (Signature Component)
Volle Sand-Warm-Fläche direkt unter dem Hero. Icons zentriert über zweizeiligem
Text, 40px groß, Aktionsblau-Kontur. Beim Hereinscrollen zeichnet sich jede
Icon-Kontur einmal selbst nach (SVG `stroke-dashoffset` 100→0 über `pathLength="100"`,
380ms, `ease-out`, 150ms Versatz pro Icon), danach faden Label und Text mit dem
Standard-Reveal nach. Zweite dokumentierte Bewegungs-Ausnahme neben der
Anfahrts-Sequenz.

### Navigation
Transparent über dem Hero, wird beim Scrollen solide (Sand-50 mit
Unterkante). Serif-Logo-Wortmarke links, Sans-Menüpunkte mittig, Telefon-Pill
in Aktionsblau rechts. Kein Hover-Underline-Sprung — Farbwechsel auf
Aktionsblau reicht.

## 6. Do's and Don'ts

### Do:
- **Do** jede Vertrauensaussage an einen nachprüfbaren Beleg binden (Jahreszahl, Fachgesellschaft) statt an ein Adjektiv.
- **Do** Copper auf ein Element pro Ansicht begrenzen — nie als Flächenfarbe.
- **Do** Bewegung auf Fade + 10px Y beschränken; jede Ausnahme (Anfahrts-Sequenz, Trust-Icon-Zeichnen) einzeln dokumentieren.
- **Do** Inhalte im ausgelieferten HTML immer sichtbar halten — Animation darf Sichtbarkeit nie gaten (siehe `Reveal.tsx`).
- **Do** `prefers-reduced-motion` respektieren; alle Dauern fallen dann auf 0ms.

### Don't:
- **Don't** die generische Zahnarzt-Baukastenseite bauen (`Hero → 3 Icon-Spalten → Über uns → Kontakt`).
- **Don't** sterile Stock-Foto-Klinik-Ästhetik verwenden — die Utzhof-Geschichte ist der Differenzierer.
- **Don't** erfundene Patientenstimmen einsetzen — nach UWG abmahnfähig; nur echte Google-Rezensionen oder keine.
- **Don't** den SaaS-Hero-Metric-Look bauen (große Zahl, kleines Label, Gradient-Akzent).
- **Don't** Icon-Kacheln für die Leistungsliste verwenden — eine typografische Indexliste ist ehrlicher.
- **Don't** reines Grau (`#888`, `gray-500`) irgendwo einsetzen — jedes Neutral ist getönt (Sand oder Ink).
- **Don't** Fließtext unter `--size-body` (17px) setzen — die Zielgruppe ist älter.
