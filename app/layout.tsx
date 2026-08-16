import type { Metadata } from "next";
import "./globals.css";

/* lang="de" ist keine Formalie: Screenreader sprechen die Seite sonst
   englisch aus, und "Zahnarztpraxis" klingt dann unverstaendlich. */

export const metadata: Metadata = {
  title: {
    default: "Zahnarztpraxis Dr. Zipplies — Utzhof, Raubling bei Rosenheim",
    template: "%s — Zahnarztpraxis Dr. Zipplies",
  },
  description:
    "Zahnarztpraxis Dr. med. dent. Robert Zipplies, M.Sc. am Utzhof in Raubling. Schwerpunkt Implantologie. Termin nach telefonischer Absprache.",
  metadataBase: new URL("https://zahnarzt-zipplies.de"),
  icons: { icon: "/favicon.svg" },
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
