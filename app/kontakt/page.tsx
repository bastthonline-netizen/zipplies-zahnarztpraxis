import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { oeffnungszeiten, praxis, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Termin anfragen bei der Zahnarztpraxis Dr. Zipplies am Utzhof, Raubling — telefonisch unter 08035 6505.",
};

export default function KontaktSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        {/* Hero mit Bild: die Seite bittet um einen Anruf — dann soll auch zu
            sehen sein, bei wem man landet. Motiv ist der Behandler im Haus,
            nicht ein Telefon und kein Behandlungsstuhl.

            Das Portraet ist ein Platzhalter und traegt deshalb die Marke am
            Bild. Es steht bewusst KEIN Name daran: es gibt genau einen
            Praxisinhaber, ein generiertes Gesicht unter seinem Namen waere das
            erfundene Bild einer realen Person. Beim Fototermin wird nur der
            Pfad getauscht, dann darf der Name dazu. */}
        <section className={`${s.hero} ${s.heroMitBild}`}>
          <div className={`container ${s.heroRaster}`}>
            <div>
              <p className={`zp-overline ${s.heroOverline}`}>Kontakt</p>
              <h1 className={s.heroTitel}>Rufen Sie einfach an.</h1>
              <p className={s.heroLede}>
                Termine vergeben wir persönlich am Telefon — so lässt sich
                gleich klären, wie viel Zeit Ihre Behandlung braucht. Bei
                akuten Schmerzen melden Sie sich bitte direkt, dafür halten wir
                kurzfristige Termine frei.
              </p>
            </div>

            <figure className={s.heroBild}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={stimmungsbilder.behandler.src}
                alt={stimmungsbilder.behandler.alt}
                fetchPriority="high"
              />
              <figcaption className={s.heroBildHinweis}>Platzhalter</figcaption>
            </figure>
          </div>
        </section>

        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.raster}>
              <div>
                <a href={praxis.telefonHref} className={`${s.terminNummer} ${s.terminNummerOben}`}>
                  {praxis.telefon}
                </a>
                <p className={s.text}>
                  Fax {praxis.fax}
                </p>
              </div>

              <div className={s.terminKarte}>
                <p className={`zp-overline ${s.terminKarteOverline}`}>
                  Sprechzeiten
                </p>
                <div className={s.zeitenTabelle}>
                  {oeffnungszeiten.map((zeit) => (
                    <div key={zeit.tag} className={s.zeitenZeile}>
                      <span className={s.zeitenTag}>{zeit.tag}</span>
                      <span className={`${s.zeitenWert} ${zeit.geschlossen ? s.zeitenZu : ""}`}>{zeit.zeit}</span>
                    </div>
                  ))}
                </div>

                <address className={s.terminAdresse}>
                  {praxis.adresse.hof} · {praxis.adresse.strasse}
                  <br />
                  {praxis.adresse.plz} {praxis.adresse.ort}
                  <br />
                  <a href={praxis.karteHref} target="_blank" rel="noreferrer">
                    Auf der Karte ansehen
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
