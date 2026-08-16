import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import LeistungsWahl from "@/components/LeistungsWahl";
import { leistungen, praxis, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Das Behandlungsspektrum der Zahnarztpraxis Dr. Zipplies am Utzhof: Implantologie, Prophylaxe, konservierende Behandlung, Endodontie, Parodontologie, Prothetik, Chirurgie, Diagnostik und CEREC.",
};

export default function LeistungenSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        {/* Hero mit Bild wie auf den uebrigen Unterseiten: der Behandlungsraum
            im Hof. Die Liste darunter bleibt typografisch — neun Leistungen mit
            neun Bildern waeren neun weitere Platzhalter und wuerden die Auswahl
            zur Bildergalerie machen. */}
        <section className={`${s.hero} ${s.heroMitBild}`}>
          <div className={`container ${s.heroRaster}`}>
            <div>
              <p className={`zp-overline ${s.heroOverline}`}>Leistungen</p>
              <h1 className={s.heroTitel}>Was wir behandeln</h1>
              <p className={s.heroLede}>
                Implantologie ist der Schwerpunkt der Praxis seit {praxis.schwerpunktSeit} —
                das gesamte Spektrum einer allgemeinzahnärztlichen Versorgung
                bleibt daneben bestehen.
              </p>
            </div>

            <figure className={s.heroBild}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stimmungsbilder.behandlungsraumHof.src}
                alt={stimmungsbilder.behandlungsraumHof.alt}
                fetchPriority="high"
              />
              <figcaption className={s.heroBildHinweis}>Platzhalter</figcaption>
            </figure>
          </div>
        </section>

        <section className={s.abschnitt}>
          <div className="container">
            <LeistungsWahl />

            {/* Ohne JavaScript bleibt das Panel leer — deshalb hier alle
                Leistungen als einfache Liste. Suchmaschinen und Nutzer mit
                blockierten Skripten sehen dadurch denselben Inhalt. */}
            <noscript>
              <ol className={s.liste}>
                {leistungen.map((leistung, i) => (
                  <li key={leistung.kuerzel} id={leistung.kuerzel} className={s.listeEintrag}>
                    <p className={`zp-overline ${s.etappeOverline}`}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className={s.listeEintragTitel}>{leistung.titel}</h2>
                    <p className={s.listeEintragText}>{leistung.lang}</p>
                  </li>
                ))}
              </ol>
            </noscript>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
