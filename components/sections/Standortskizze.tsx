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
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Lageskizze: von Raubling führt die Landstraße nach Nordosten über den Weiler Thalreit; kurz dahinter zweigt der Kiesweg zum Utzhof ab, Thalreit 7."
    >
      {/* Grundflaeche und Felder. Bewusst unregelmaessig geschnitten — ein
          gleichmaessiges Raster laese die Skizze wie Millimeterpapier
          aussehen statt wie Inntaler Flur. Zwei Fuellungen im Wechsel,
          sonst verschwimmt die Flur zu einer einzigen hellen Flaeche. */}
      <rect width="1200" height="600" fill="var(--sand-100)" />
      <g stroke="var(--ink-300)" strokeWidth="1.5">
        <path fill="var(--sand-50)" d="M60 330 L330 250 L430 400 L150 490 Z" />
        <path fill="var(--sand-200)" d="M430 400 L330 250 L610 168 L720 300 Z" />
        <path fill="var(--sand-50)" d="M720 300 L610 168 L900 96 L1010 220 Z" />
        <path fill="var(--sand-200)" d="M1010 220 L900 96 L1200 40 L1200 190 Z" />
        <path fill="var(--sand-50)" d="M760 430 L1020 350 L1160 470 L900 560 Z" />
        <path fill="var(--sand-200)" d="M0 210 L330 250 L60 330 L0 340 Z" />
      </g>

      {/* Waldsaum: gibt der Flur eine Kante, damit die Skizze nicht ins
          Nichts ausfranst. Nur an den Raendern, nie neben den Beschriftungen. */}
      <g stroke="var(--ink-400)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M60 150 q20 -36 40 0 M124 136 q22 -40 44 0 M192 152 q20 -36 40 0" />
        <path d="M1060 520 q20 -34 40 0 M1120 508 q20 -34 40 0" />
      </g>

      {/* Die Landstrasse, dreilagig: Fassung, Fahrbahn, Mittellinie. Ohne die
          Fassung haette das Band dieselbe Farbe wie die hellen Felder und
          laese sich als Feldgrenze statt als Strasse. */}
      <path
        d="M-20 545 C 190 505, 330 470, 470 400 S 740 250, 890 192 C 970 162, 1080 120, 1240 62"
        fill="none"
        stroke="var(--ink-400)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M-20 545 C 190 505, 330 470, 470 400 S 740 250, 890 192 C 970 162, 1080 120, 1240 62"
        fill="none"
        stroke="var(--sand-50)"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M-20 545 C 190 505, 330 470, 470 400 S 740 250, 890 192 C 970 162, 1080 120, 1240 62"
        fill="none"
        stroke="var(--ink-400)"
        strokeWidth="2"
        strokeDasharray="14 18"
        strokeLinecap="round"
      />

      {/* Raubling — Ausgangspunkt, deshalb groesserer Weiler, aber ruhig
          gehalten: das Ziel soll die Aufmerksamkeit bekommen, nicht der
          Startpunkt. Beschriftung ueber den Haeusern, damit sie nicht unter
          die Hinweisleiste am Rahmenfuss rutscht. */}
      <text x={196} y={392} className={s.karteSkizzeOrt}>
        Raubling
      </text>
      <Weiler x={196} y={412} haeuser={[[0, 0], [22, -16], [44, 4], [12, 22], [38, 26], [62, -12]]} />

      {/* Thalreit — der Weiler an der Hauptstrasse. Klein, weil er es ist. */}
      <text x={784} y={140} className={s.karteSkizzeOrt}>
        Thalreit
      </text>
      <Weiler x={800} y={158} haeuser={[[0, 0], [24, -14], [10, 20]]} />

      {/* Der Kiesweg — das eine bewegte Element. */}
      <motion.path
        d="M890 192 C 916 214, 934 234, 946 262"
        fill="none"
        stroke="var(--copper-500)"
        strokeWidth="2.5"
        strokeDasharray="6 9"
        strokeLinecap="round"
        variants={wegVariant}
      />

      {/* Das Ziel. Hausglyph aus der Vorgehen-Karte, auf 24er-Raster
          gezeichnet und hier auf gut das Dreifache gestellt. */}
      <g transform="translate(906 264) scale(3.4)">
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
      <text x={880} y={392} className={s.karteSkizzeZiel}>
        Utzhof
      </text>
      <text x={880} y={420} className={s.karteSkizzeAdresse}>
        Thalreit 7
      </text>

      {/* Oben links statt unten: der Rahmenfuss gehoert der Hinweisleiste. */}
      <text x={48} y={72} className={s.karteSkizzeFussnote}>
        Skizze, nicht maßstabsgetreu
      </text>
    </motion.svg>
  );
}
