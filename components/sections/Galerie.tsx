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
    src: "/images/utzhof.webp",
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
  /* Hier lag das Hof-Foto. Es traegt jetzt den Hero (siehe Ankunft.tsx) und
     stuende sonst zweimal auf derselben Seite. An seiner Stelle die Hofecke:
     gekalkte Wand, Balken, Fensterlaibung — dieselbe Erzaehlung vom Haus,
     nur ein anderer Ausschnitt davon. */
  {
    src: stimmungsbilder.hofecke.src,
    alt: stimmungsbilder.hofecke.alt,
    echt: false,
    platz: "platzZufahrt",
    fokus: "50% 45%",
  },
  {
    src: stimmungsbilder.holzbalken.src,
    alt: stimmungsbilder.holzbalken.alt,
    echt: false,
    platz: "platzHolzbalken",
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
          <p className={s.galerieKarteTitel}>Der Hof war zuerst da.</p>
          <p className={s.galerieKarteText}>
            Der Utzhof trägt seinen Namen über der Tür, in Lüftlmalerei, von
            Hand aufgetragen. Die Praxis hat sich dem Haus angepasst — innen
            steht trotzdem alles, was moderne Behandlung braucht.
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
