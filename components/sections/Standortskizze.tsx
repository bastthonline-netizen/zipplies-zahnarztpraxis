"use client";

import { motion, type Variants } from "motion/react";
import { useSektionsReveal } from "@/components/useSektionsReveal";
import s from "@/styles/startseite.module.css";

/* Die gezeichnete Flurkarte hinter der Zwei-Klick-Loesung.

   WARUM ES SIE GIBT. Vorher stand im Kartenrahmen ein grauer Kasten, dessen
   groesstes gestaltetes Element der Datenschutzhinweis war — die Frage "wo
   ist das?" blieb bis zum Klick unbeantwortet, und die Flaeche war damit die
   toteste der Seite. Die Skizze beantwortet die Frage sofort, ohne dass der
   Browser eine Verbindung zu Google aufbaut.

   WAS SIE ZEIGT. Genau die Route, die die Etappen auf /anfahrt erzaehlen:
   raus aus Raubling, nach Thalreit, Hofeinfahrt. Keine Strasse, kein Ort und
   kein Gewaesser, das dort nicht steht — und weil die Geometrie geschaetzt
   ist, traegt die Zeichnung sichtbar "Skizze, nicht maßstabsgetreu". Eine
   Karte, die Genauigkeit vortaeuscht, waere schlimmer als der graue Kasten.

   FORMAT: 800x600, also 4:3 wie der Kartenrahmen — und mit "meet" statt
   "slice" eingepasst. Vorher lag hier eine 1200x600-Zeichnung (2:1) im
   4:3-Rahmen unter "slice": der Browser skalierte auf Fuellung und schnitt
   links und rechts je 200 Einheiten ab. Weg waren dadurch ausgerechnet die
   beiden Elemente am Rand — "Raubling" als Startpunkt und die Fussnote
   "Skizze, nicht maßstabsgetreu", die den Wahrheitsanspruch der Zeichnung
   ueberhaupt erst begrenzt. Am Handy blieb von 1200 Einheiten ein Streifen
   von 800 uebrig, in dem nur noch "Thalreit" stand.

   Mit gleichem Seitenverhaeltnis wie der Rahmen kann nichts mehr wegfallen,
   egal wie schmal das Fenster wird. Auf /anfahrt (21:9) laesst "meet" links
   und rechts Rand stehen — der Rahmen traegt dort dieselbe Sandfarbe wie die
   Grundflaeche der Zeichnung, die Kante ist deshalb nicht zu sehen.

   ZEICHENSPRACHE. 1.5er Kontur, runde Kappen, Hausglyph identisch mit dem der
   Vorgehen-Karte "Ein Haus seit 1994" — dieselbe Hand wie der Rest der Seite.
   Copper markiert genau ein Element: das Ziel.

   BEWEGUNG. Der Kiesweg zeichnet sich einmal selbst, wenn die Skizze ins Bild
   kommt. Das ist die dokumentierte Anfahrts-Ausnahme aus BAUPLAN.md, hier in
   ihrer kleinsten Form. Der Rest der Zeichnung steht sofort — bei
   prefers-reduced-motion steht auch der Weg sofort, sichtbar ist nie etwas
   von der Animation abhaengig. */

/* Zustandsnamen wie in useSektionsReveal: `versteckt` ohne Dauer, damit der
   Wechsel unterhalb der Bildkante springt statt wegzublenden. */
const wegVariant: Variants = {
  versteckt: { pathLength: 0, transition: { duration: 0 } },
  sichtbar: {
    pathLength: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
};

/* Die Landstrasse, dreilagig aus derselben Kurve: Fassung, Fahrbahn,
   Mittellinie. Ohne die Fassung haette das Band dieselbe Farbe wie die hellen
   Felder und laese sich als Feldgrenze statt als Strasse. */
const STRASSE =
  "M-20 528 C 110 500, 235 462, 335 405 S 545 272, 645 212 C 705 176, 762 142, 820 104";

/* Kleine Haeusergruppe. `x`/`y` ist der Ankerpunkt, die Paare sind Versaetze
   dazu — so laesst sich ein Weiler in einer Zeile hinschreiben. */
function Weiler({ x, y, haeuser }: { x: number; y: number; haeuser: [number, number][] }) {
  return (
    <g stroke="var(--ink-400)" strokeWidth="1.5" fill="var(--sand-200)">
      {haeuser.map(([dx, dy], i) => (
        <rect key={i} x={x + dx} y={y + dy} width="13" height="11" rx="1.5" />
      ))}
    </g>
  );
}

export default function Standortskizze() {
  const skizze = useSektionsReveal<SVGSVGElement>(0.3);

  return (
    <motion.svg
      ref={skizze.ref}
      animate={skizze.zustand}
      className={s.karteSkizze}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Lageskizze: von Raubling führt die Landstraße nach Nordosten über den Weiler Thalreit; kurz dahinter zweigt der Kiesweg zum Utzhof ab, Thalreit 7."
    >
      {/* Grundflaeche und Felder. Bewusst unregelmaessig geschnitten — ein
          gleichmaessiges Raster laese die Skizze wie Millimeterpapier
          aussehen statt wie Inntaler Flur. Zwei Fuellungen im Wechsel,
          sonst verschwimmt die Flur zu einer einzigen hellen Flaeche. */}
      <rect width="800" height="600" fill="var(--sand-100)" />
      <g stroke="var(--ink-300)" strokeWidth="1.5">
        <path fill="var(--sand-50)" d="M-10 300 L215 245 L285 375 L40 435 Z" />
        <path fill="var(--sand-200)" d="M285 375 L215 245 L440 190 L520 300 Z" />
        <path fill="var(--sand-50)" d="M520 300 L440 190 L660 136 L740 240 Z" />
        <path fill="var(--sand-200)" d="M740 240 L660 136 L810 100 L810 210 Z" />
        <path fill="var(--sand-50)" d="M330 470 L560 410 L680 500 L470 570 Z" />
        <path fill="var(--sand-200)" d="M-10 175 L215 245 L-10 300 Z" />
      </g>

      {/* Waldsaum: gibt der Flur eine Kante, damit die Skizze nicht ins
          Nichts ausfranst. Nur an den Raendern, nie neben den Beschriftungen. */}
      <g stroke="var(--ink-400)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M40 120 q18 -32 36 0 M96 108 q20 -36 40 0 M158 122 q18 -32 36 0" />
        <path d="M700 540 q18 -30 36 0 M754 528 q18 -30 36 0" />
      </g>

      <path d={STRASSE} fill="none" stroke="var(--ink-400)" strokeWidth="24" strokeLinecap="round" />
      <path d={STRASSE} fill="none" stroke="var(--sand-50)" strokeWidth="20" strokeLinecap="round" />
      <path
        d={STRASSE}
        fill="none"
        stroke="var(--ink-400)"
        strokeWidth="2"
        strokeDasharray="13 17"
        strokeLinecap="round"
      />

      {/* Raubling — Ausgangspunkt, deshalb groesserer Weiler, aber ruhig
          gehalten: das Ziel soll die Aufmerksamkeit bekommen, nicht der
          Startpunkt. Sitzt oberhalb der Strasse, weil unterhalb bei 600
          Einheiten Hoehe kein Platz bleibt, ohne den unteren Rand und die
          Hinweisleiste zu beruehren. */}
      <text x={64} y={352} className={s.karteSkizzeOrt}>
        Raubling
      </text>
      <Weiler x={64} y={372} haeuser={[[0, 0], [22, -16], [44, 4], [12, 22], [38, 26], [62, -12]]} />

      {/* Thalreit — der Weiler an der Hauptstrasse. Klein, weil er es ist. */}
      <text x={512} y={168} className={s.karteSkizzeOrt}>
        Thalreit
      </text>
      <Weiler x={528} y={186} haeuser={[[0, 0], [24, -14], [10, 20]]} />

      {/* Der Kiesweg — das eine bewegte Element. Zweigt an der Stelle von der
          Strasse ab, an der Etappe 03 die Hofeinfahrt beschreibt. */}
      <motion.path
        d="M645 212 C 668 236, 682 258, 690 288"
        fill="none"
        stroke="var(--copper-500)"
        strokeWidth="2.5"
        strokeDasharray="6 9"
        strokeLinecap="round"
        variants={wegVariant}
      />

      {/* Das Ziel. Hausglyph aus der Vorgehen-Karte, auf 24er-Raster
          gezeichnet und hier auf gut das Dreifache gestellt. */}
      <g transform="translate(652 290) scale(3.4)">
        <g
          fill="none"
          stroke="var(--copper-600)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 11l8-7 8 7" />
          <path d="M6 10v10h12V10" />
          <path d="M10 20v-6h4v6" />
        </g>
      </g>
      <text x={596} y={430} className={s.karteSkizzeZiel}>
        Utzhof
      </text>
      <text x={596} y={462} className={s.karteSkizzeAdresse}>
        Thalreit 7
      </text>

      {/* Oben links: unten liegt die Hinweisleiste des Rahmens. */}
      <text x={32} y={54} className={s.karteSkizzeFussnote}>
        Skizze, nicht maßstabsgetreu
      </text>
    </motion.svg>
  );
}
