"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { leistungen } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

/* Leistungsuebersicht mit Detailpanel.

   Links alle neun Leistungen kompakt untereinander, rechts die gewaehlte
   ausfuehrlich. Man bleibt dabei auf /leistungen — kein Seitenwechsel.

   Der URL-Hash wandert mit (/leistungen#cerec), damit sich jede Leistung
   verlinken und aus dem Menue direkt anspringen laesst. Gesetzt wird er per
   history.replaceState, nicht ueber einen echten Anker: ein Anker wuerde die
   Seite zum Panel scrollen, und bei einem Klick in der Liste soll die Ansicht
   stehen bleiben.

   Barrierefreiheit: die Liste besteht aus echten <button>-Elementen, ist also
   von Haus aus mit Tab und Enter bedienbar; die aktive Zeile traegt
   aria-current. */

export default function LeistungsWahl() {
  const [aktiv, setAktiv] = useState(0);
  const reduziert = useReducedMotion();

  /* Beim Laden einen mitgegebenen Hash uebernehmen (/leistungen#cerec) und
     auf spaetere Hashwechsel reagieren (Menuelink auf derselben Seite). */
  useEffect(() => {
    const ausHash = () => {
      const kuerzel = window.location.hash.replace("#", "");
      if (!kuerzel) return;
      const i = leistungen.findIndex((l) => l.kuerzel === kuerzel);
      if (i >= 0) setAktiv(i);
    };
    ausHash();
    window.addEventListener("hashchange", ausHash);
    return () => window.removeEventListener("hashchange", ausHash);
  }, []);

  const waehlen = (i: number) => {
    setAktiv(i);
    window.history.replaceState(null, "", `#${leistungen[i].kuerzel}`);
  };

  const gewaehlt = leistungen[aktiv];

  return (
    <div className={s.wahlRaster}>
      <ul className={s.wahlListe}>
        {leistungen.map((leistung, i) => (
          <li key={leistung.kuerzel}>
            <button
              type="button"
              onClick={() => waehlen(i)}
              className={`${s.wahlEintrag} ${i === aktiv ? s.wahlEintragAktiv : ""}`}
              aria-current={i === aktiv ? "true" : undefined}
            >
              <span className={s.wahlNummer}>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.wahlTitel}>{leistung.titel}</span>
              <svg
                className={s.wahlPfeil}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className={s.wahlPanel}>
        <AnimatePresence mode="wait">
          <motion.article
            key={gewaehlt.kuerzel}
            initial={reduziert ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduziert ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={s.wahlPanelTitel}>{gewaehlt.titel}</h2>
            <p className={s.wahlPanelText}>{gewaehlt.lang}</p>

            <p className={`zp-overline ${s.wahlAblaufTitel}`}>Wie es abläuft</p>
            <ol className={s.wahlAblauf}>
              {gewaehlt.punkte.map((punkt, i) => (
                <li key={punkt} className={s.wahlAblaufPunkt}>
                  <span className={s.wahlAblaufNummer}>{i + 1}</span>
                  <span>{punkt}</span>
                </li>
              ))}
            </ol>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
