"use client";

import { pfad } from "@/lib/pfad";

import { motion, type Variants } from "motion/react";
import { stimmungsbilder } from "@/content/praxis";
import { useSektionsReveal } from "@/components/useSektionsReveal";
import s from "@/styles/startseite.module.css";

/* Sektion 5 — Job: zeigen, wo man landet. Beides gehoert dazu: das Haus von
   aussen UND die Praxis von innen.

   Form: Mosaik mit fester Zeilenhoehe. Jede Kachel belegt eine feste Zahl an
   Rasterzeilen, dadurch schliessen alle drei Spalten unten buendig ab —
   vorher endeten sie auf drei verschiedenen Hoehen und der untere Rand
   franste aus. Die Bilder fuellen ihre Zelle per object-fit:cover, werden
   also auf das Zellformat zugeschnitten statt verzerrt.

   `fokus` steuert, welcher Bildausschnitt beim Zuschneiden erhalten bleibt —
   bei der Lueftlmalerei z.B. die obere Haelfte, sonst faellt der Schriftzug
   aus dem Bild.

   BILDER: `utzhof.jpg` und `zufahrt.jpg` sind echte Fotos. Alle uebrigen sind
   Higgsfield-Platzhalter und tragen sichtbar den Hinweis "Stimmungsbild". */

type Kachel = {
  src: string;
  alt: string;
  echt: boolean;
  /* Rasterplatz-Klasse (siehe CSS: sechs Zeilen, drei Spalten). */
  platz: string;
  fokus?: string;
};

const kacheln: Kachel[] = [
  {
    /* pfad() ist Pflicht, auch wenn scripts/unterpfad.mjs das HTML nachtraeglich
       umschreibt: diese Kachel steckt in einer Client-Komponente, der rohe Pfad
       landete also im JS-Bundle und ueberschrieb nach der Hydration den bereits
       korrigierten Wert aus dem HTML. Ergebnis war ein totes Bild. */
    src: pfad("/images/utzhof.webp"),
    alt: "Handgemalter Schriftzug „Utzhof“ über der Eingangstür",
    echt: true,
    platz: "platzUtzhof",
    fokus: "50% 35%",
  },
  {
    src: stimmungsbilder.empfang.src,
    alt: stimmungsbilder.empfang.alt,
    echt: false,
    platz: "platzEmpfang",
  },
  {
    src: stimmungsbilder.behandlungsraum.src,
    alt: stimmungsbilder.behandlungsraum.alt,
    echt: false,
    platz: "platzBehandlung",
    fokus: "55% 50%",
  },
  {
    src: stimmungsbilder.instrumente.src,
    alt: stimmungsbilder.instrumente.alt,
    echt: false,
    platz: "platzInstrumente",
    fokus: "50% 55%",
  },
  /* Die beiden unteren Kacheln zeigten bis 19.08.2026 Hofecke und Eichenbalken
     — zusammen mit der Lueftlmalerei und dem Hof-Hero waren damit vier von
     sieben Bildern der Startseite das Haus und keines die Zahnmedizin. Das
     Mosaik erzaehlte vom Bauernhof, nicht von der Praxis.

     Unten rechts stehen jetzt Menschen: die Kachel hat das hoechste Format
     der Reihe, und ein Hochformat traegt eine Gruppe besser als eine Wand.
     Sie belegt ausserdem die Zeile im Hero — der Mensch im Mittelpunkt
     braucht mindestens ein Bild, auf dem Menschen zu sehen sind. */
  {
    src: stimmungsbilder.team.src,
    alt: stimmungsbilder.team.alt,
    echt: false,
    platz: "platzZufahrt",
    fokus: "50% 40%",
  },
  /* Unten links die dreidimensionale Planung am Bildschirm: das einzige Bild
     der Seite, das die Behauptung "geplant, bevor gebohrt wird" aus der
     Sektion darueber tatsaechlich zeigt. */
  {
    src: stimmungsbilder.monitor.src,
    alt: stimmungsbilder.monitor.alt,
    echt: false,
    platz: "platzHolzbalken",
    fokus: "50% 50%",
  },
];

/* `versteckt` ohne Dauer — der Wechsel passiert unterhalb der Bildkante und
   soll springen statt wegzublenden (siehe useSektionsReveal). */
const kachelVariant: Variants = {
  versteckt: { opacity: 0, y: 20, transition: { duration: 0 } },
  sichtbar: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const rasterVariant: Variants = {
  versteckt: {},
  sichtbar: { transition: { staggerChildren: 0.08 } },
};

export default function Galerie() {
  const { ref, zustand } = useSektionsReveal<HTMLDivElement>(0.15);

  return (
    <section className={s.galerie}>
      <motion.div
        ref={ref}
        className={`container ${s.galerieRaster}`}
        animate={zustand}
        variants={rasterVariant}
      >
        <motion.div className={`${s.galerieKarte} ${s.platzKarte}`} variants={kachelVariant}>
          <p className={`zp-overline ${s.galerieOverline}`}>Praxis und Hof</p>
          <p className={s.galerieKarteTitel}>Moderne Zahnmedizin, altes Haus.</p>
          <p className={s.galerieKarteText}>
            Digitale Diagnostik, Keramik aus der eigenen Fräse, Zahntechnik im
            Haus — untergebracht in einem Hof, der seinen Namen in
            Lüftlmalerei über der Tür trägt.
          </p>
          <a href={pfad("/praxis/")} className={s.galerieKarteLink}>
            Mehr über die Praxis
          </a>
        </motion.div>

        {kacheln.map((kachel) => (
          <motion.figure
            key={kachel.src}
            className={`${s.galerieKachel} ${s[kachel.platz]}`}
            variants={kachelVariant}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={kachel.src}
              alt={kachel.alt}
              loading="lazy"
              style={kachel.fokus ? { objectPosition: kachel.fokus } : undefined}
            />
            {!kachel.echt && <figcaption className={s.galerieHinweis}>Stimmungsbild</figcaption>}
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
