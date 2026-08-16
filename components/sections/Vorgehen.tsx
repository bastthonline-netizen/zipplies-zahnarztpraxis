"use client";

import { motion, type Variants } from "motion/react";
import { useSektionsReveal } from "@/components/useSektionsReveal";
import s from "@/styles/startseite.module.css";

/* Sektion 2 — Job: zeigen, dass hier fachlich gut gearbeitet wird, und zwar
   ueber nachpruefbare Ausstattung statt ueber Zertifikatskuerzel.

   WAS SICH GEAENDERT HAT UND WARUM.

   Vier Karten wurden zwei Eintraege. Die Sektion fuehrte "Implantologie seit
   2005" und "Ein Haus seit 1994" als eigene Karten — beide Aussagen stehen
   aber bereits direkt daneben: das Jahr 1994 in der Vertrauensleiste
   unmittelbar darueber, der Schwerpunkt seit 2005 im Implantologie-Band
   unmittelbar darunter. Dieselbe Aussage dreimal in Folge schwaecht sie,
   statt sie zu staerken. Genau diese Begruendung stand schon im alten
   Kommentar dieser Datei, war aber nur auf die Zertifikatskuerzel angewandt.

   Uebrig bleibt, was es sonst nirgends auf der Seite gibt: DVT und CEREC.
   Das Konkreteste, was die Praxis vorzuweisen hat, und fuer Patienten
   greifbarer als jedes Kuerzel.

   Karten wurden Zeilen. Vier gleich gebaute Karten mit Icon, Ueberschrift und
   Text sind die Baukastenseite, die PRODUCT.md ausdruecklich ablehnt — der
   versetzte Spaltenstart mildert das optisch, aendert aber nichts an der
   Grammatik. Zwei Eintraege brauchen keine Karten: sie stehen jetzt als
   typografische Zeilen mit Haarlinie, dieselbe Figur wie die
   Leistungs-Indexliste weiter unten und das Menue am Handy.

   Icons sind entfallen. Die selbstzeichnende Kontur ist laut DESIGN.md eine
   dokumentierte Ausnahme — sie lief hier und in der Vertrauensleiste, war
   also keine mehr. Sie bleibt der Vertrauensleiste vorbehalten. */

const zeileVariant: Variants = {
  versteckt: { opacity: 0, y: 14, transition: { duration: 0 } },
  sichtbar: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const kopfVariant: Variants = {
  versteckt: { opacity: 0, y: 14, transition: { duration: 0 } },
  sichtbar: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
};

const listeVariant: Variants = {
  versteckt: {},
  sichtbar: { transition: { staggerChildren: 0.14 } },
};

/* `kuerzel` ist die echte Geraetebezeichnung, keine Kicker-Zeile: DVT und
   CEREC sind nachschlagbar, und wer sie kennt, weiss sofort Bescheid. */
const verfahren = [
  {
    kuerzel: "DVT",
    gattung: "Dreidimensionale Röntgendiagnostik",
    titel: "Geplant, bevor gebohrt wird",
    text: "Die Aufnahme zeigt den Knochen vor dem Eingriff. Wo das Implantat sitzt, steht am Bildschirm fest, bevor der erste Schnitt gesetzt wird — nicht erst im Behandlungsstuhl.",
  },
  {
    kuerzel: "CEREC",
    gattung: "Keramik aus dem eigenen Haus",
    titel: "Die Krone entsteht, während Sie warten",
    text: "Vollkeramische Kronen und Inlays werden hier gefräst statt eingeschickt. Kein Abdruck, kein Provisorium, keine zweite Sitzung — Sie gehen mit dem fertigen Zahn nach Hause.",
  },
];

export default function Vorgehen() {
  const kopf = useSektionsReveal<HTMLDivElement>(0.5);
  const liste = useSektionsReveal<HTMLDivElement>(0.2);

  return (
    <section className={s.vorgehen} id="vorgehen">
      <div className={`container ${s.vorgehenRaster}`}>
        <motion.div
          ref={kopf.ref}
          className={s.vorgehenKopf}
          animate={kopf.zustand}
          variants={kopfVariant}
        >
          <p className={`zp-overline ${s.vorgehenOverline}`}>Wie hier gearbeitet wird</p>
          <h2 className={s.vorgehenTitel}>
            Gute Arbeit erkennt man an der{" "}
            {/* Der einzige Copper-Auftritt dieser Ansicht: eine Haarlinie
                unter dem Wort, das die These traegt. Ein Element, keine
                Flaeche — so war die Farbe im System gemeint. */}
            <span className={s.vorgehenBetont}>Vorbereitung</span>.
          </h2>
          <p className={s.vorgehenText}>
            Was eine Behandlung gut macht, entscheidet sich meist, bevor sie
            beginnt: an der Diagnostik, an der Ausstattung und daran, wie viel
            Zeit jemand hat, es richtig zu machen.
          </p>
        </motion.div>

        <motion.div
          ref={liste.ref}
          className={s.vorgehenListe}
          animate={liste.zustand}
          variants={listeVariant}
        >
          {verfahren.map((v) => (
            <motion.article key={v.kuerzel} className={s.vorgehenZeile} variants={zeileVariant}>
              <p className={s.vorgehenKuerzel}>
                <span className={s.vorgehenKuerzelWort}>{v.kuerzel}</span>
                <span className={s.vorgehenGattung}>{v.gattung}</span>
              </p>
              <h3 className={s.vorgehenZeileTitel}>{v.titel}</h3>
              <p className={s.vorgehenZeileText}>{v.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
