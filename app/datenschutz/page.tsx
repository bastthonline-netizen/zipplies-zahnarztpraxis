import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { praxis } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  /* Canonical auf DIESE Seite. Das Root-Layout setzt "/" als Vorgabe;
     ohne eigene Angabe erbt jede Unterseite sie und erklaert damit die
     Startseite zur maßgeblichen Fassung — Google wuerde die Unterseite
     dann gar nicht fuehren. */
  alternates: { canonical: "/datenschutz/" },
};

/* Probewebsite: Platzhaltertext. Aktuell erhebt die Seite selbst keine
   Daten (kein Formular, keine Analytics, keine externen Einbettungen) —
   sobald Terminformular oder Karte mit Consent dazukommen, muss dieser Text
   entsprechend erweitert werden (siehe BAUPLAN.md, Schritt 6). */
export default function DatenschutzSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className={s.hero}>
          <div className="container zp-auftritt">
            <p className={`zp-overline ${s.heroOverline}`}>Rechtliches</p>
            <h1 className={s.heroTitel}>Datenschutzerklärung</h1>
          </div>
        </section>
        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.rechtstext}>
              <h2>Verantwortlicher</h2>
              <p>
                {praxis.arzt}, {praxis.adresse.hof} · {praxis.adresse.strasse},{" "}
                {praxis.adresse.plz} {praxis.adresse.ort}, Telefon {praxis.telefon}.
              </p>

              <h2>Diese Website</h2>
              <p>
                Diese Website bindet keine externen Dienste automatisch ein:
                keine Google-Fonts, keine Analytics. Schriften werden selbst
                gehostet, damit keine Anfragen an Drittserver gehen.
              </p>
              {/* "am Fuß jeder Seite", nicht "auf der Startseite": den
                  Standortblock rendert der Footer (components/site/Footer.tsx),
                  die Karte steht damit auf jeder Seite unten, und auf /anfahrt
                  zusaetzlich vollbreit im Inhalt. Der Text sagte noch
                  "Startseite" — bei einer Arztpraxis ist die
                  Datenschutzerklaerung der Text, der am genauesten stimmen
                  muss, gerade wenn er eine Drittanbieter-Verbindung
                  beschreibt. */}
              <p>
                Die Standortkarte ist eine Ausnahme und bewusst als
                Zwei-Klick-Lösung umgesetzt. Sie steht am Fuß jeder Seite sowie
                auf der Seite „Anfahrt“. Erst nach einem Klick auf „Karte
                laden“ baut Ihr Browser eine Verbindung zu Google Maps (Google
                LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA)
                auf, wobei Ihre IP-Adresse an Google übertragen wird. Ohne
                diesen Klick findet keine Verbindung statt. Solange die Karte
                nicht geladen ist, sehen Sie an ihrer Stelle eine selbst
                gezeichnete Lageskizze, die ohne jeden externen Abruf
                auskommt.
              </p>
              <p>
                Server-Logs des Hosting-Anbieters können technisch bedingt
                IP-Adressen kurzzeitig verarbeiten (Art. 6 Abs. 1 lit. f DSGVO,
                berechtigtes Interesse an Betrieb und Sicherheit der Website).
              </p>

              <h2>Terminanfragen</h2>
              <p>
                Sofern Sie uns telefonisch kontaktieren, werden die dabei
                mitgeteilten Daten ausschließlich zur Bearbeitung Ihrer
                Anfrage verwendet. Ein Online-Terminformular ist auf dieser
                Probeversion noch nicht aktiv.
              </p>

              <h2>Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                sowie ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde.
              </p>

              <p className={s.rechtstextHinweis}>
                Diese Seite ist eine Probeversion und noch nicht rechtlich
                geprüft. Vor Veröffentlichung durch eine Rechtsberatung
                ergänzen und final abstimmen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
