import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { praxis } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  /* Canonical auf DIESE Seite. Das Root-Layout setzt "/" als Vorgabe;
     ohne eigene Angabe erbt jede Unterseite sie und erklaert damit die
     Startseite zur maßgeblichen Fassung — Google wuerde die Unterseite
     dann gar nicht fuehren. */
  alternates: { canonical: "/impressum/" },
};

/* Die Angaben stammen aus dem Impressum der Praxis selbst
   (zahnarztpraxis-zipplies.de, leitet auf zipplies.com/joomla) und sind
   damit keine Platzhalter mehr: Anschrift, Telefon, Fax, E-Mail, USt-ID,
   Kammer, KZV und Berufsordnung stehen dort woertlich so.

   Zwei Paragraphen sind gegenueber der Vorlage aktualisiert, weil die alte
   Seite auf ausgelaufenes Recht verweist: § 5 TMG ist seit Mai 2024 § 5 DDG,
   und § 55 Abs. 2 RStV ist § 18 Abs. 2 MStV.

   Vor Go-Live bleibt genau eine Frage offen: ob eine Berufshaftpflicht mit
   raeumlichem Geltungsbereich angegeben werden soll. */
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
              <h2>Angaben gemäß § 5 DDG</h2>
              <p>
                {praxis.arzt} {praxis.arztZusatz}
                <br />
                {praxis.adresse.hof} · {praxis.adresse.strasse}
                <br />
                {praxis.adresse.plz} {praxis.adresse.ort}
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: <a href={praxis.telefonHref}>{praxis.telefon}</a>
                <br />
                Telefax: {praxis.fax}
                <br />
                E-Mail: <a href={praxis.emailHref}>{praxis.email}</a>
              </p>

              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: {praxis.ustId}
              </p>

              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Zahnarzt, verliehen in der Bundesrepublik
                Deutschland.
              </p>
              <p>
                Zuständige Kammer:
                <br />
                Bayerische Landeszahnärztekammer
                <br />
                Fallstraße 34, 81369 München
                <br />
                Telefon: 089 72480-0 · Telefax: 089 72480-111
              </p>
              <p>
                Kassenzahnärztliche Vereinigung Bayerns
                <br />
                Fallstraße 34, 81369 München
                <br />
                <a href="https://www.kzvb.de" target="_blank" rel="noreferrer">
                  kzvb.de
                </a>
              </p>
              <p>
                Es gilt die Berufsordnung für die bayerischen Zahnärzte,
                einzusehen bei der{" "}
                <a href="https://www.blzk.de" target="_blank" rel="noreferrer">
                  Bayerischen Landeszahnärztekammer
                </a>
                .
              </p>

              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>{praxis.arzt}, Anschrift wie oben.</p>

              <h2>Streitbeilegung</h2>
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
