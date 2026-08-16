"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { praxis } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 1.5 — die schnelle Ebene direkt unter dem Hero: vier Fakten, die
   man im Vorbeiscrollen aufnimmt, bevor die Seite ueberhaupt argumentiert.

   Verhaeltnis zur Sektion "Vorgehen" darunter: hier steht die Kurzfassung
   (ein Wort plus eine Zeile), dort die Begruendung. Zusammenfassung und
   Ausfuehrung, nicht Wiederholung.

   Die beiden Zugangsfakten (ebenerdig, Parkplatz) stehen bewusst NUR hier
   und auf /anfahrt — im Standortblock am Seitenfuss sind sie absichtlich
   weggelassen, weil sie sonst auf jeder Unterseite mitlaufen wuerden.

   Bewegung: die Icon-Kontur zeichnet sich beim Hereinscrollen einmal selbst
   nach (pathLength 0->1), danach faedelt der Text darunter ein. Zweite
   dokumentierte Ausnahme neben der Anfahrts-Sequenz, siehe motion.css. */

const strichVariant: Variants = {
  versteckt: { pathLength: 0 },
  sichtbar: { pathLength: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const textVariant: Variants = {
  versteckt: { opacity: 0, y: 8 },
  sichtbar: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const punktVariant: Variants = {
  versteckt: {},
  sichtbar: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const rasterVariant: Variants = {
  versteckt: {},
  sichtbar: { transition: { staggerChildren: 0.14 } },
};

const signale = [
  {
    label: `Seit ${praxis.seit}`,
    text: "Am Utzhof in Thalreit",
    icon: (
      <>
        <motion.path variants={strichVariant} d="M4 11l8-7 8 7" />
        <motion.path variants={strichVariant} d="M6 10v10h12V10" />
        <motion.path variants={strichVariant} d="M10 20v-6h4v6" />
      </>
    ),
  },
  {
    label: "ICOI · DGOI",
    text: "Zertifizierte Implantologie",
    icon: (
      <>
        <motion.path variants={strichVariant} d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <motion.path variants={strichVariant} d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    label: "Ebenerdig",
    text: "Kein Treppenhaus, kein Aufzug",
    icon: <motion.path variants={strichVariant} d="M4 19h16M7 19v-6l10-4v10" />,
  },
  {
    label: "Parkplatz vor der Tür",
    text: "Kostenfrei, direkt am Hof",
    icon: (
      <>
        <motion.circle variants={strichVariant} cx="12" cy="12" r="9" />
        <motion.path variants={strichVariant} d="M10 16V8h3a3 3 0 0 1 0 6h-3" />
      </>
    ),
  },
];

export default function Vertrauen() {
  const reduziert = useReducedMotion();
  const start = reduziert ? "sichtbar" : "versteckt";

  return (
    <section className={s.vertrauen}>
      <motion.div
        className={`container ${s.vertrauenRaster}`}
        initial={start}
        whileInView="sichtbar"
        viewport={{ once: true, amount: 0.4 }}
        variants={rasterVariant}
      >
        {signale.map((signal) => (
          <motion.div key={signal.label} className={s.vertrauenPunkt} variants={punktVariant}>
            <svg
              className={s.vertrauenIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {signal.icon}
            </svg>
            <motion.p className={s.vertrauenLabel} variants={textVariant}>
              {signal.label}
            </motion.p>
            <motion.p className={s.vertrauenText} variants={textVariant}>
              {signal.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
