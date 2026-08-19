import type { MetadataRoute } from "next";
import { BASIS } from "@/lib/pfad";

/* robots.txt — von Next beim Build zu einer statischen Datei gerechnet, wie
   alle anderen Seiten auch (output: "export").

   Es gab bisher keine. Fuer eine Seite, deren ganze Framework-Wahl mit lokalem
   SEO begruendet ist (siehe next.config.mjs), war das die auffaelligste Luecke:
   ohne robots.txt und ohne Sitemap muss eine Suchmaschine sich alle elf Seiten
   selbst zusammensuchen.

   /system ist ausgeschlossen. Die Seite zeigt nur Farb- und Schrift-Tokens zur
   Eigenkontrolle und traegt in app/system/page.tsx selbst den Hinweis, dass sie
   nicht Teil der Website ist. Sie war trotzdem oeffentlich erreichbar und
   indexierbar.

   Im Probebetrieb unter GitHub Pages (BASIS gesetzt) wird alles gesperrt, aus
   demselben Grund wie das noindex im Root-Layout: die Probefassung soll nicht
   gegen die spaetere echte Domain antreten. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (BASIS) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/system/"] }],
    sitemap: "https://zahnarzt-zipplies.de/sitemap.xml",
    host: "https://zahnarzt-zipplies.de",
  };
}
