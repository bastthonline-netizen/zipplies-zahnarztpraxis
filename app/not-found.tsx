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
            <p className="zp-overline" style={{ marginBottom: "var(--space-6)" }}>
              Seite nicht gefunden
            </p>
            <h1 className={s.heroTitel}>Hier geht es nicht weiter.</h1>
            <p className={s.heroLede}>
              Die gesuchte Seite gibt es nicht mehr oder nie. Zurück zur
              Startseite, oder rufen Sie direkt an.
            </p>
            <div style={{ display: "flex", gap: "var(--space-8)", marginTop: "var(--space-9)", flexWrap: "wrap" }}>
              <a href="/" className={s.terminNummer} style={{ marginTop: 0, fontSize: "var(--size-h4)" }}>
                Zur Startseite
              </a>
              <a href={praxis.telefonHref} className={s.terminNummer} style={{ marginTop: 0, fontSize: "var(--size-h4)" }}>
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
