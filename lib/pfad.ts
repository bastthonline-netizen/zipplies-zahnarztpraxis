/* Setzt den Unterpfad vor unsere eigenen absoluten Pfade.

   WARUM ES DAS BRAUCHT. Auf GitHub Pages laeuft die Seite unter
   <benutzer>.github.io/<repo>/. `basePath` in next.config.mjs deckt nur ab,
   was Next selbst erzeugt — also /_next/ und `usePathname()`. Unsere eigenen
   Pfade stehen als Zeichenketten im Code (`href="/impressum/"`,
   `src="/images/…"`), und die fasst Next nicht an.

   WARUM NICHT ERST IM FERTIGEN EXPORT. Genau das war der erste Versuch, und er
   ist am Mobilmenue aufgeflogen: der Header ist eine Client-Komponente, das
   Menuepanel entsteht erst im Browser aus dem JavaScript-Bundle. Im HTML stand
   es nie, also lief es an jedem Nachbearbeitungsschritt vorbei — die Links
   zeigten weiter auf /leistungen/ und landeten auf GitHubs 404-Seite. Alles,
   was React erst im Browser rendert, muss den Praefix deshalb schon im Bundle
   tragen.

   NEXT_PUBLIC_ ist Pflicht: nur so backt Next den Wert auch in das
   Browser-Bundle ein statt ihn nur beim Vorrechnen zu kennen.

   Ohne die Variable ist BASIS leer und `pfad()` gibt zurueck, was es bekommt —
   lokal und auf der spaeteren eigenen Domain aendert sich damit nichts. */
export const BASIS = (process.env.NEXT_PUBLIC_BASIS_PFAD ?? "").replace(/\/$/, "");

export function pfad(p: string): string {
  if (!BASIS || !p.startsWith("/") || p.startsWith("//")) return p;
  return BASIS + p;
}
