import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { praxis, qualifikationen, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Implantologie",
  description:
    "Zahnimplantat Rosenheim: Implantologie als Schwerpunkt der Zahnarztpraxis Dr. Zipplies am Utzhof, Raubling — seit 2005, mit dreidimensionaler Diagnostik geplant.",
};

export default function ImplantologieSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        {/* Hero mit Bild: die Seite traegt das lokale SEO-Ziel "Zahnimplantat
            Rosenheim" und ist die wichtigste Unterseite — sie bekommt als
            einzige ein Bild im Kopf. Motiv ist bewusst der Planungsmonitor
            und kein Behandlungsstuhl: die Aussage der Seite ist "geplant,
            bevor gebohrt wird". */}
        <section className={`${s.hero} ${s.heroMitBild}`}>
          <div className={`container ${s.heroRaster}`}>
            <div>
              <p className={`zp-overline ${s.heroOverline}`}>Schwerpunkt</p>
              <h1 className={s.heroTitel}>Implantologie ist hier kein Zusatzangebot.</h1>
              <p className={s.heroLede}>
                Seit {praxis.schwerpunktSeit} der Schwerpunkt der Praxis. Ein
                Implantat ersetzt die Wurzel, nicht nur den sichtbaren Zahn — es
                wird geplant, bevor gebohrt wird, dreidimensional und anhand des
                vorhandenen Knochens.
              </p>
            </div>

            <figure className={s.heroBild}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stimmungsbilder.behandlungsraum.src}
                alt={stimmungsbilder.behandlungsraum.alt}
                fetchPriority="high"
              />
              <figcaption className={s.heroBildHinweis}>Stimmungsbild</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${s.abschnitt} ${s.abschnittDunkel}`}>
          <div className="container">
            <div className={s.rasterKopfLastig} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)" }}>
              <div>
                <h2 className={s.titel} style={{ color: "var(--text-on-dark)" }}>
                  Drei Nachweise, keine Behauptungen.
                </h2>
                <p className={s.text} style={{ color: "var(--text-on-dark-muted)" }}>
                  Keine erfundenen Fallzahlen, kein „Ihr Implantat-Spezialist".
                  Diese drei Qualifikationen sind bei den jeweiligen
                  Fachgesellschaften und der Hochschule überprüfbar.
                </p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {qualifikationen.map((q) => (
                  <li
                    key={q.text}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "var(--space-7)",
                      paddingBlock: "var(--space-7)",
                      borderTop: "1px solid var(--border-inverse)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--size-h4)",
                        color: "var(--blue-300)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {q.jahr}
                    </span>
                    <span style={{ color: "var(--text-on-dark)", lineHeight: "var(--lh-snug)" }}>{q.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.raster}>
              <div className={s.bild}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={stimmungsbilder.monitor.src} alt={stimmungsbilder.monitor.alt} loading="lazy" />
                <span className={s.bildHinweis}>Stimmungsbild, kein Praxisfoto</span>
              </div>
              <div>
                <h2 className={s.titel}>Wie eine Behandlung abläuft</h2>
                <p className={s.text}>
                  Vor jeder Implantation steht die Planung: eine
                  dreidimensionale Diagnostik zeigt, wie viel Knochen
                  vorhanden ist und wo das Implantat sicher sitzt. Erst danach
                  wird der Eingriff terminiert — in vertrauter Umgebung, ohne
                  Überweisung an eine fremde Klinik.
                </p>
                <p className={s.text}>
                  Das Implantat selbst übernimmt die Funktion der Zahnwurzel
                  und trägt anschließend Krone, Brücke oder Prothese. Wie
                  lange die Behandlung dauert und was sie kostet, klärt sich
                  am besten am Telefon — jeder Fall liegt anders.
                </p>
                <a href={praxis.telefonHref} className={s.terminNummer}>
                  {praxis.telefon}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
