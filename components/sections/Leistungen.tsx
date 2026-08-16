import Reveal from "@/components/Reveal";
import { leistungen } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 4 — Job: Vollstaendigkeit zeigen, ohne eine Textwand zu bauen.

   Umgesetzt mit <details>/<summary> statt eigenem Aufklapp-Zustand: das
   funktioniert ohne JavaScript, ist von Haus aus tastaturbedienbar und wird
   von der Browsersuche (Strg+F) mitgefunden. */

export default function Leistungen() {
  return (
    <section className={s.leistungen} id="leistungen">
      <div className="container">
        <div className={s.abschnittKopf}>
          <h2 className={s.abschnittTitel}>Was wir behandeln</h2>
          <a href="/leistungen/" className={s.textLink}>
            Alle Leistungen im Detail
          </a>
        </div>

        <Reveal>
          <div className={s.index}>
            {leistungen.map((leistung, i) => (
              <details key={leistung.titel} className={s.eintrag}>
                <summary>
                  <span className={s.eintragNummer}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={s.eintragTitel}>{leistung.titel}</span>
                  <svg
                    className={s.eintragZeichen}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className={s.eintragText}>{leistung.text}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
