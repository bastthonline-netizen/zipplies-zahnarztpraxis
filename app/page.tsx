import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Ankunft from "@/components/sections/Ankunft";
import Vertrauen from "@/components/sections/Vertrauen";
import Vorgehen from "@/components/sections/Vorgehen";
import Implantologie from "@/components/sections/Implantologie";
import Leistungen from "@/components/sections/Leistungen";
import Galerie from "@/components/sections/Galerie";
import Termin from "@/components/sections/Termin";
import { praxis } from "@/content/praxis";

/* Startseite. Reihenfolge und Job jeder Sektion stehen im BAUPLAN.md.
   Bewusst nicht: Hero -> drei Icon-Spalten -> Ueber uns -> Kontakt. */

/* Strukturierte Daten fuer die lokale Suche. Schema.org "Dentist" ist der
   spezifische Typ — er laesst Google Adresse, Zeiten und Telefon direkt im
   Suchergebnis anzeigen, was bei einer Praxis ausserhalb des Orts mehr wert
   ist als jedes Keyword. */
const strukturierteDaten = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: praxis.name,
  founder: { "@type": "Person", name: praxis.arzt },
  foundingDate: String(praxis.seit),
  telephone: praxis.telefon,
  email: praxis.email,
  faxNumber: praxis.fax,
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: praxis.adresse.strasse,
    addressLocality: praxis.adresse.ort,
    postalCode: praxis.adresse.plz,
    addressCountry: "DE",
  },
  areaServed: ["Raubling", "Rosenheim", "Inntal"],
  /* BEWUSST KEINE openingHoursSpecification.

     Hier standen frueher die Telefonzeiten als Oeffnungszeiten. Google haette
     sie so ins Suchergebnis und ins Unternehmensprofil uebernommen — mit dem
     Ergebnis, dass jemand Mittwochnachmittag nach Thalreit faehrt, weil dort
     "geoeffnet bis 17:00" stand. Falsche Zeiten sind an dieser Stelle
     schaedlicher als gar keine: ohne Angabe zeigt Google nichts an, mit
     falscher Angabe zeigt es etwas Falsches.

     Wieder eintragen, sobald die Praxis ihre echten Behandlungszeiten nennt
     (dann als eigene Konstante, nicht aus `telefonzeiten`). */
};

/* JSON.stringify maskiert `<` nicht. Steht in einem der Werte irgendwann eine
   Zeichenfolge wie "</script>", beendet der Browser das Skript-Element mitten
   im JSON und liest den Rest als Markup — der klassische Weg, aus einem
   JSON-LD-Block auszubrechen.

   Heute sind alle Werte fest in content/praxis.ts geschrieben, also harmlos.
   Die Maskierung steht hier fuer den Fall, dass die Daten spaeter aus einem
   CMS oder einem Formular kommen: dann ist die Luecke schon zu, bevor sie
   entsteht. Kostet ein replace und macht das JSON nicht ungueltig — < ist
   fuer jeden JSON-Leser dasselbe Zeichen wie <. */
function alsJsonLd(daten: unknown): string {
  return JSON.stringify(daten).replace(/</g, "\\u003c");
}

export default function Startseite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <Ankunft />
        <Vertrauen />
        <Vorgehen />
        <Implantologie />
        <Leistungen />
        <Galerie />
        <Termin />
      </main>
      {/* Die Karte rendert der Footer — dadurch steht sie auf jeder Seite
          an derselben Stelle ganz unten, nicht nur hier. */}
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: alsJsonLd(strukturierteDaten) }}
      />
    </>
  );
}
