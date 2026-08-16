import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/Reveal";
import TeamKarten from "@/components/TeamKarten";
import { praxis, qualifikationen, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Das Team der Zahnarztpraxis Dr. Zipplies am Utzhof in Raubling: ein Behandler seit 1994, dahinter ein kleines Team, das den Betrieb trägt.",
};

/* Aufbau — jede Sektion hat genau einen Job:
   1. Hero              sagt sofort, was diese Seite behauptet und was nicht
   2. Gemeinschaftsbild zeigt, wie es hier aussieht
   3. Der Behandler     die einzige Person, die wir benennen duerfen — mit
                        Belegen statt Gesicht (Begruendung: content/praxis.ts)
   4. Einzelkarten      die Rollen dahinter, mit Hover auf den Portraets

   Zum Hover: die Karten geben NICHTS frei, was vorher verborgen war. Rolle und
   Beschreibung stehen immer im Klartext da; der Hover laesst nur das Licht auf
   dem Portraet angehen. Sonst waere die Information per Touch und Tastatur weg
   — und die Zielgruppe ist aelter, nicht experimentierfreudig. Deshalb auch
   kein tabIndex auf den Karten: sie sind Dekoration, kein Bedienelement, und
   ein Tabstopp ohne Ziel waere schlechter als keiner. */
export default function TeamSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className={s.hero}>
          <div className="container zp-auftritt">
            <p className={`zp-overline ${s.heroOverline}`}>Team</p>
            <h1 className={s.heroTitel}>Eine Praxis, ein Behandler.</h1>
            <p className={s.heroLede}>
              Dr. Zipplies behandelt seit {praxis.seit} selbst. Wer hier einen
              Termin bekommt, sitzt beim Praxisinhaber — nicht bei wechselnden
              Angestellten. Dahinter steht ein kleines Team, das den Betrieb
              trägt.
            </p>
            <p className={s.heroFussnote}>
              Probeversion: Die Gesichter auf dieser Seite sind Platzhalter.
              Namen und Fotofreigabe stimmen wir noch mit der Praxis ab.
            </p>
          </div>
        </section>

        {/* Gemeinschaftsbild — volle Breite, weil es das Bild dieser Seite ist. */}
        <section className={s.abschnittSchmal}>
          <div className="container">
            <Reveal>
              <figure className={s.hausBand}>
                <div className={`${s.hausBild} ${s.teamGruppenBild}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stimmungsbilder.team.src}
                    alt={stimmungsbilder.team.alt}
                    loading="lazy"
                  />
                  <span className={s.bildHinweis}>Platzhalter, kein echtes Teamfoto</span>
                </div>
                <figcaption className={s.hausUnterschrift}>
                  Gekalkte Wände, ein Balken über dem Flur, Tageslicht aus der
                  Fensterlaibung. Die Personen sind gestellt — der Raum ist der
                  Punkt.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Der Behandler: Belege statt erfundenem Gesicht. Die drei Zeilen sind
            bei ICOI, DGOI und der Hochschule nachpruefbar — die einzigen
            Kompetenzaussagen der Seite, die keine Behauptung sind. */}
        <section className={`${s.abschnitt} ${s.abschnittSunken}`}>
          <div className="container">
            <Reveal>
              <div className={s.behandler}>
                <div className={s.behandlerKopf}>
                  <p className={s.behandlerRolle}>Praxisinhaber</p>
                  <p className={s.behandlerName}>
                    {praxis.arzt}, {praxis.arztZusatz}
                  </p>
                  <p className={s.behandlerText}>
                    Schwerpunkt Implantologie seit {praxis.schwerpunktSeit}.
                    Beratung, Eingriff und Zahnersatz liegen in derselben Hand —
                    dazwischen gibt es keinen Bruch.
                  </p>
                  <p className={s.behandlerFoto}>Porträt folgt nach dem Fototermin</p>
                </div>
                <ul className={s.belege}>
                  {qualifikationen.map((q) => (
                    <li key={q.text} className={s.belegZeile}>
                      <span className={s.belegJahr}>{q.jahr}</span>
                      <span className={s.belegText}>{q.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Einzelkarten mit Hover. */}
        <section className={s.abschnitt}>
          <div className="container">
            <h2 className={s.titel}>Wer Sie empfängt</h2>
            <p className={s.text}>
              Vier Rollen, die den Alltag am Utzhof tragen. Die Namen tragen wir
              nach, sobald sie freigegeben sind.
            </p>
            <TeamKarten />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
