import Reveal from "@/components/Reveal";
import { praxis, qualifikationen } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 3 — Job: Kompetenz belegen statt behaupten.

   Die drei Zeilen rechts sind die einzigen Kompetenzaussagen der Startseite,
   die keine Behauptung sind: ICOI, DGOI und der M.Sc. sind nachpruefbar.
   Keine erfundenen Zahlen ("ueber 2000 Implantate"), kein "Ihr Spezialist". */

export default function Implantologie() {
  return (
    <section className={s.band}>
      <div className="container">
        <div className={s.bandRaster}>
          <Reveal>
            <h2 className={s.bandTitel}>Implantologie ist hier kein Zusatzangebot.</h2>
            <p className={s.bandText}>
              Seit {praxis.schwerpunktSeit} der Schwerpunkt der Praxis. Ein
              Implantat ersetzt die Wurzel, nicht nur den sichtbaren Zahn — es
              wird geplant, bevor gebohrt wird, dreidimensional und anhand des
              vorhandenen Knochens.
            </p>
            <a href="/implantologie/" className={s.bandLink}>
              Wie eine Behandlung abläuft
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <ul className={s.nachweise}>
              {qualifikationen.map((q) => (
                <li key={q.text} className={s.nachweis}>
                  <span className={s.nachweisJahr}>{q.jahr}</span>
                  <span className={s.nachweisText}>{q.text}</span>
                </li>
              ))}
            </ul>
            <p className={s.nachweisFuss}>
              Alle drei Nachweise sind bei den jeweiligen Fachgesellschaften
              überprüfbar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
