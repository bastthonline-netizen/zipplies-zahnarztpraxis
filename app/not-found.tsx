import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { praxis } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export default function NichtGefunden() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className="container">
          <div className={s.notFound}>
            <p className={`zp-overline ${s.notFoundOverline}`}>
              Seite nicht gefunden
            </p>
            <h1 className={s.heroTitel}>Hier geht es nicht weiter.</h1>
            <p className={s.heroLede}>
              Die gesuchte Seite gibt es nicht mehr oder nie. Zurück zur
              Startseite, oder rufen Sie direkt an.
            </p>
            <div className={s.notFoundAktionen}>
              <a href="/" className={`${s.terminNummer} ${s.terminNummerOben} ${s.terminNummerKlein}`}>
                Zur Startseite
              </a>
              <a
                href={praxis.telefonHref}
                className={`${s.terminNummer} ${s.terminNummerOben} ${s.terminNummerKlein}`}
              >
                {praxis.telefon}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
