import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { praxis } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = { title: "Impressum" };

/* Probewebsite: Platzhaltertext nach dem ueblichen TMG-Muster einer
   Einzelpraxis. Vor Go-Live durch Dr. Zipplies bzw. eine Rechtsberatung
   pruefen und mit den tatsaechlichen Angaben (Kammer, USt-ID) ergaenzen. */
export default function ImpressumSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className={s.hero}>
          <div className="container zp-auftritt">
            <p className={`zp-overline ${s.heroOverline}`}>Rechtliches</p>
            <h1 className={s.heroTitel}>Impressum</h1>
          </div>
        </section>
        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.rechtstext}>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                {praxis.arzt}, {praxis.arztZusatz}
                <br />
                {praxis.adresse.hof} · {praxis.adresse.strasse}
                <br />
                {praxis.adresse.plz} {praxis.adresse.ort}
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: {praxis.telefon}
                <br />
                Fax: {praxis.fax}
              </p>

              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Zahnarzt, verliehen in der Bundesrepublik
                Deutschland. Zuständige Kammer: Bayerische Landeszahnärztekammer
                (Angabe auf der Probewebsite noch zu bestätigen).
              </p>

              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                {praxis.arzt}, Anschrift wie oben.
              </p>

              <p className={s.rechtstextHinweis}>
                Diese Seite ist eine Probeversion und noch nicht rechtlich
                geprüft. Vor Veröffentlichung ergänzen: Umsatzsteuer-ID,
                zuständige Kammer, ggf. Berufshaftpflichtversicherung.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
