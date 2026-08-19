import type { Metadata } from "next";
import { BASIS, pfad } from "@/lib/pfad";
import "./globals.css";

/* lang="de" ist keine Formalie: Screenreader sprechen die Seite sonst
   englisch aus, und "Zahnarztpraxis" klingt dann unverstaendlich. */

/* PROBELAUF ODER ECHTE ADRESSE.

   BASIS ist genau dann gesetzt, wenn die Seite unter GitHub Pages in einem
   Repo-Unterordner laeuft — also im Probebetrieb. Genau dort darf sie NICHT in
   den Suchindex: sie traegt Platzhaltergesichter, einen ungepruefen
   Impressumstext und dieselben Inhalte, die spaeter unter der echten Domain
   stehen sollen. Zwei indexierte Fassungen derselben Praxis waeren doppelter
   Inhalt, und die falsche koennte gewinnen.

   Ohne BASIS — lokal und spaeter auf zahnarzt-zipplies.de bei Cloudflare —
   greift der normale Fall: indexieren erlaubt, mit Canonical auf die echte
   Adresse. Es braucht dafuer keine Codeaenderung, nur eine Umgebungsvariable
   weniger, genau wie bei den Pfaden. */
const istProbelauf = Boolean(BASIS);

export const metadata: Metadata = {
  title: {
    default: "Zahnarztpraxis Dr. Zipplies — Utzhof, Raubling bei Rosenheim",
    template: "%s — Zahnarztpraxis Dr. Zipplies",
  },
  description:
    "Zahnarztpraxis Dr. med. dent. Robert Zipplies, M.Sc. am Utzhof in Raubling. Schwerpunkt Implantologie. Termin nach telefonischer Absprache.",
  metadataBase: new URL("https://zahnarzt-zipplies.de"),
  icons: { icon: pfad("/favicon.svg") },

  /* Canonical auf die eigene Adresse. Ohne die Angabe entscheidet Google
     selbst, welche Fassung die maßgebliche ist — bei einer Praxis, die ueber
     die lokale Suche gefunden werden muss, ist das nichts, was man dem
     Zufall laesst. */
  alternates: { canonical: "/" },

  robots: istProbelauf
    ? { index: false, follow: false }
    : { index: true, follow: true },

  /* Open Graph. Der Link zu dieser Seite wird vor allem per WhatsApp
     weitergegeben — ohne diese Angaben erscheint dort ein nackter Link ohne
     Bild und ohne Beschreibung. Motiv ist der Hof, dasselbe Bild wie im
     Seitenkopf: wer den Link bekommt, sieht sofort das Haus, zu dem er
     rausfahren soll.

     Die Pfade loest metadataBase zu absoluten Adressen auf — relative
     Bildpfade akzeptieren die Vorschau-Dienste nicht. */
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Zahnarztpraxis Dr. Zipplies",
    title: "Zahnarztpraxis Dr. Zipplies — Utzhof, Raubling bei Rosenheim",
    description:
      "Der Zahnarzt, zu dem man rausfährt. Seit 1994 am Utzhof in Raubling, Schwerpunkt Implantologie. Termin nach telefonischer Absprache.",
    url: "/",
    images: [
      {
        url: "/images/hof-hero.webp",
        width: 1800,
        height: 1350,
        alt: "Der Utzhof von der Zufahrt aus: weiß gekalkte Giebelwand mit Lüftlmalerei unter dem Dachfirst",
      },
    ],
  },

  /* summary_large_image statt der kleinen Kachel: das Motiv ist ein Haus in
     der Landschaft, im 1:1-Ausschnitt bliebe davon eine Wand uebrig. */
  twitter: {
    card: "summary_large_image",
    title: "Zahnarztpraxis Dr. Zipplies — Utzhof, Raubling",
    description:
      "Der Zahnarzt, zu dem man rausfährt. Seit 1994 am Utzhof, Schwerpunkt Implantologie.",
    images: ["/images/hof-hero.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <a className="skip-link" href="#inhalt">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
