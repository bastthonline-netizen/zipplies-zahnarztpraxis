import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Ankunft from "@/components/sections/Ankunft";
import Vertrauen from "@/components/sections/Vertrauen";
import Vorgehen from "@/components/sections/Vorgehen";
import Implantologie from "@/components/sections/Implantologie";
import Leistungen from "@/components/sections/Leistungen";
import Galerie from "@/components/sections/Galerie";
import Termin from "@/components/sections/Termin";
import { oeffnungszeiten, praxis } from "@/content/praxis";

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
  openingHoursSpecification: oeffnungszeiten
    .filter((zeit) => !zeit.geschlossen)
    .map((zeit) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${
        { Montag: "Monday", Dienstag: "Tuesday", Mittwoch: "Wednesday", Donnerstag: "Thursday", Freitag: "Friday" }[
          zeit.tag
        ]
      }`,
      description: zeit.zeit,
    })),
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturierteDaten) }}
      />
    </>
  );
}
