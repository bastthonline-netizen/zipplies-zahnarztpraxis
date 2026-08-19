import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/Reveal";
import TeamKarten from "@/components/TeamKarten";
import { praxis, qualifikationen, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  /* Canonical auf DIESE Seite. Das Root-Layout setzt "/" als Vorgabe;
     ohne eigene Angabe erbt jede Unterseite sie und erklaert damit die
     Startseite zur maßgeblichen Fassung — Google wuerde die Unterseite
     dann gar nicht fuehren. */
  alternates: { canonical: "/team/" },
  title: "Team",
  description:
    "Das Team der Zahnarztpraxis Dr. Zipplies am Utzhof in Raubling: ein Behandler seit 1994, dahinter ein kleines Team, das den Betrieb trägt.",
};

/* Aufbau — jede Sektion hat genau einen Job:
   1. Hero              sagt sofort, was diese Seite behauptet und was nicht
   2. Gemeinschaftsbild zeigt, wie es hier aussieht
   3. Der Behandler     die einzige Person, die wir benennen duerfen — mit
                        Belegen statt Gesicht (Begruendung: content/praxis.ts)
   4. Einzelkarten      die Rollen dahinter, als drehbare Portraetkarten

   ZU DEN KARTEN: Dieser Absatz beschrieb sie frueher als reine Dekoration ohne
   Bedienelement — "kein tabIndex, ein Tabstopp ohne Ziel waere schlechter als
   keiner". Seit der Umstellung auf echte Drehkarten stimmt das nicht mehr:
   components/TeamKarten.tsx rendert jede Karte als <button> mit aria-pressed,
   weil hinter der Drehung Text liegt, den Touch- und Tastaturnutzer sonst nie
   erreichen wuerden. Ein Tabstopp ist dort also genau richtig — er hat ein
   Ziel.

   Was weiter gilt: der Rueckseitentext steht immer im HTML, nicht erst nach der
   Drehung. Suchmaschinen und Screenreader sehen ihn ohne Interaktion, und ohne
   JavaScript geht keine Information verloren. */
export default function TeamSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className={s.hero}>
          <div className="container zp-auftritt">
            <p className={`zp-overline ${s.heroOverline}`}>Team</p>
            <h1 className={s.heroTitel}>Ein Behandler, ein Team, das bleibt.</h1>
            <p className={s.heroLede}>
              Dr. Zipplies behandelt seit {praxis.seit} selbst. Wer hier einen
              Termin bekommt, sitzt beim Praxisinhaber — nicht bei wechselnden
              Angestellten. Dahinter arbeiten Prophylaxe, Assistenz, Verwaltung
              und eine eigene Zahntechnik im Haus.
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
              Vier Rollen, die den Alltag am Utzhof tragen — darunter ein
              Zahntechniker, der im Haus arbeitet und nicht in einem
              auswärtigen Labor. Die Namen tragen wir nach, sobald sie
              freigegeben sind.
            </p>
            <TeamKarten />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
