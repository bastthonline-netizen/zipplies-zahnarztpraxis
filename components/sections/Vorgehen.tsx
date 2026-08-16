"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { praxis } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 2 — Job: zeigen, dass hier fachlich gut gearbeitet wird, und zwar
   ueber nachpruefbare Faehigkeiten statt ueber Zertifikatskuerzel.

   Ersetzt die frueheren Sektionen "Vertrauen" (schmale Icon-Leiste) und
   "Expertise" (drei Karten). Grund fuer die Zusammenlegung: beide fuehrten
   dieselben drei Nachweise (ICOI, DGOI, M.Sc.) wie das Implantologie-Band
   direkt darunter — dreimal dieselbe Aussage hintereinander schwaecht sie,
   statt sie zu staerken. Die Nachweise stehen jetzt nur noch einmal, im
   Implantologie-Band.

   Der Inhalt hier ist bewusst Ausstattung und Vorgehen: DVT und CEREC lagen
   vorher als Punkt 8 und 9 in der Leistungs-Akkordeonliste begraben, obwohl
   sie das Konkreteste sind, was die Praxis vorzuweisen hat. "Kein Abdruck,
   kein Provisorium" ist fuer Patienten greifbarer als jedes Kuerzel.

   Form: Referenz Zen Dental Studio — feste Textspalte links, rechts zwei
   Kartenspalten, von denen die zweite um eine Kartenhoehe nach unten versetzt
   ist. Kein gleichfoermiges Raster. */

const strichVariant: Variants = {
  versteckt: { pathLength: 0 },
  sichtbar: { pathLength: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const karteVariant: Variants = {
  versteckt: { opacity: 0, y: 16 },
  sichtbar: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
};

const spalteVariant: Variants = {
  versteckt: {},
  sichtbar: { transition: { staggerChildren: 0.12 } },
};

const karten = [
  {
    titel: "Geplant, bevor gebohrt wird",
    text: "Dreidimensionale Diagnostik zeigt den Knochen vor dem Eingriff. Wo das Implantat sitzt, steht fest, bevor der erste Schnitt gesetzt wird — nicht erst im Behandlungsstuhl.",
    icon: (
      <>
        <motion.path variants={strichVariant} d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <motion.path variants={strichVariant} d="M12 12l8-4.5" />
        <motion.path variants={strichVariant} d="M12 12v9" />
        <motion.path variants={strichVariant} d="M12 12L4 7.5" />
      </>
    ),
  },
  {
    titel: "Keramik an einem Tag",
    text: "Vollkeramische Kronen und Inlays entstehen im Haus. Kein Abdruck, kein Provisorium, keine zweite Sitzung — Sie gehen mit dem fertigen Zahn nach Hause.",
    icon: (
      <>
        <motion.path
          variants={strichVariant}
          d="M11.5 5c-1.7 0-2.5-.8-3.8-.8-1.5 0-2.5 1.3-2.5 3.2 0 2.1.8 3.5 1.2 5.6.5 2.1.6 5.5 1.9 5.5 1.1 0 1.3-2.7 1.6-4.4.2-1 .5-1.4 1.6-1.4s1.3.4 1.5 1.4c.3 1.7.5 4.4 1.6 4.4 1.3 0 1.4-3.4 1.9-5.5.2-1 .5-1.9.8-2.8"
        />
        <motion.path variants={strichVariant} d="M18.5 3.2v3.6M16.7 5h3.6" />
      </>
    ),
  },
  {
    titel: `Implantologie seit ${praxis.schwerpunktSeit}`,
    text: "Das Fachgebiet, in dem sich die Praxis seit zwanzig Jahren fortbildet und zertifizieren lässt — kein Punkt unter neun auf einer Leistungsliste.",
    icon: (
      <>
        <motion.path variants={strichVariant} d="M7.6 4.8c0-.6.5-1.1 1.1-1.1h6.6c.6 0 1.1.5 1.1 1.1v3.4H7.6V4.8Z" />
        <motion.path variants={strichVariant} d="M9 11h6" />
        <motion.path variants={strichVariant} d="M9.4 14.2h5.2" />
        <motion.path variants={strichVariant} d="M10 17.4h4" />
        <motion.path variants={strichVariant} d="M11 20.5h2" />
      </>
    ),
  },
  {
    titel: `Ein Haus seit ${praxis.seit}`,
    text: "Durchgehend dieselbe Praxis am Utzhof — keine Übernahme, keine wechselnde Trägerschaft. Ihre Behandlungsgeschichte bleibt an einem Ort.",
    icon: (
      <>
        <motion.path variants={strichVariant} d="M4 11l8-7 8 7" />
        <motion.path variants={strichVariant} d="M6 10v10h12V10" />
        <motion.path variants={strichVariant} d="M10 20v-6h4v6" />
      </>
    ),
  },
];

function Karte({ karte }: { karte: (typeof karten)[number] }) {
  return (
    <motion.article className={s.vorgehenKarte} variants={karteVariant}>
      <svg
        className={s.vorgehenKarteIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {karte.icon}
      </svg>
      <h3 className={s.vorgehenKarteTitel}>{karte.titel}</h3>
      <p className={s.vorgehenKarteText}>{karte.text}</p>
    </motion.article>
  );
}

export default function Vorgehen() {
  const reduziert = useReducedMotion();
  const start = reduziert ? "sichtbar" : "versteckt";

  return (
    <section className={s.vorgehen} id="vorgehen">
      <div className={`container ${s.vorgehenRaster}`}>
        <motion.div
          className={s.vorgehenKopf}
          initial={start}
          whileInView="sichtbar"
          viewport={{ once: true, amount: 0.5 }}
          variants={karteVariant}
        >
          <p className={`zp-overline ${s.vorgehenOverline}`}>Wie hier gearbeitet wird</p>
          <h2 className={s.vorgehenTitel}>Gute Arbeit erkennt man an der Vorbereitung.</h2>
          <p className={s.vorgehenText}>
            Was eine Behandlung gut macht, entscheidet sich meist, bevor sie
            beginnt: an der Diagnostik, an der Ausstattung und daran, wie viel
            Zeit jemand hat, es richtig zu machen.
          </p>
        </motion.div>

        <motion.div
          className={s.vorgehenSpalten}
          initial={start}
          whileInView="sichtbar"
          viewport={{ once: true, amount: 0.2 }}
          variants={spalteVariant}
        >
          <div className={s.vorgehenSpalte}>
            {karten.slice(0, 2).map((karte) => (
              <Karte key={karte.titel} karte={karte} />
            ))}
          </div>
          <div className={`${s.vorgehenSpalte} ${s.vorgehenSpalteVersetzt}`}>
            {karten.slice(2).map((karte) => (
              <Karte key={karte.titel} karte={karte} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
