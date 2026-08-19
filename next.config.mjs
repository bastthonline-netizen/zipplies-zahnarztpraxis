/* Unterpfad fuer GitHub Pages. Dort liegt die Seite nicht auf einer eigenen
   Adresse, sondern unter <benutzer>.github.io/<repo>/. Leer lassen (lokal und
   spaeter auf der eigenen Domain bei Cloudflare) heisst: Wurzelpfade wie
   bisher, hier aendert sich dann nichts.

   `basePath` deckt ab, was Next selbst erzeugt — die Dateien unter /_next/ und
   vor allem `usePathname()`, das den Praefix wieder abzieht. Ohne das haelt der
   Header die Startseite faelschlich fuer eine Unterseite. Unsere eigenen fest
   geschriebenen Pfade deckt es NICHT ab; die laufen ueber lib/pfad.ts. */
const basis = (process.env.NEXT_PUBLIC_BASIS_PFAD ?? "").replace(/\/$/, "");

/* Wurzel fuer die Dateiverfolgung fest auf dieses Projekt.

   Ohne die Angabe sucht Next sich die Wurzel selbst und waehlte dabei
   /Users/<benutzer>/package-lock.json im Heimatverzeichnis — ein Lockfile, das
   nichts mit diesem Projekt zu tun hat. Der Build lief trotzdem, warnte aber
   bei jedem Durchlauf. import.meta.url zeigt auf diese Datei, ihr Ordner ist
   also immer das Projekt, egal von wo aus gebaut wird. */
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projektWurzel = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projektWurzel,
  ...(basis ? { basePath: basis, assetPrefix: basis } : {}),
  // Statischer Export: jede Seite wird beim Build zu echtem HTML vorgerechnet.
  // Das ist der Grund fuer die Framework-Wahl -- lokales SEO braucht fertiges Markup.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
