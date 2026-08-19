import type { MetadataRoute } from "next";

/* sitemap.xml — beim Build zu einer statischen Datei gerechnet.

   Die Liste steht bewusst hier und wird nicht aus `navigation` in
   content/praxis.ts abgeleitet: die Navigation fuehrt sechs Punkte, in den
   Index gehoeren aber auch die Startseite und die beiden Rechtstexte, waehrend
   /system dort nichts zu suchen hat (siehe app/robots.ts). Zwei verschiedene
   Fragen, zwei verschiedene Listen — eine automatische Ableitung waere kuerzer
   und in beiden Faellen falsch.

   Unter GitHub Pages ist die Sitemap bedeutungslos, weil robots.txt dort
   ohnehin alles sperrt. Sie zeigt deshalb immer auf die echte Domain.

   `priority` ist eine Rangfolge, keine Rechengroesse: Startseite und
   Implantologie als Schwerpunkt stehen oben, Impressum und Datenschutz unten.
   Die Rechtstexte muessen erreichbar sein, aber sie sind nicht das, wofuer die
   Praxis gefunden werden will. */
export const dynamic = "force-static";

const BASIS_URL = "https://zahnarzt-zipplies.de";

const seiten: { pfad: string; prioritaet: number; wechsel: "monthly" | "yearly" }[] = [
  { pfad: "/", prioritaet: 1.0, wechsel: "monthly" },
  { pfad: "/implantologie/", prioritaet: 0.9, wechsel: "yearly" },
  { pfad: "/leistungen/", prioritaet: 0.8, wechsel: "yearly" },
  { pfad: "/kontakt/", prioritaet: 0.8, wechsel: "yearly" },
  { pfad: "/anfahrt/", prioritaet: 0.7, wechsel: "yearly" },
  { pfad: "/praxis/", prioritaet: 0.7, wechsel: "yearly" },
  { pfad: "/team/", prioritaet: 0.6, wechsel: "yearly" },
  { pfad: "/impressum/", prioritaet: 0.2, wechsel: "yearly" },
  { pfad: "/datenschutz/", prioritaet: 0.2, wechsel: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  /* Ein Zeitstempel fuer alle Eintraege: der Build ist der Zeitpunkt, an dem
     die Seiten zuletzt entstanden sind. Pro Seite gepflegte Datumsangaben
     waeren genauer — aber nur, solange jemand sie pflegt, und ein falsches
     lastModified ist schlechter als ein grobes. */
  const gebautAm = new Date();

  return seiten.map(({ pfad, prioritaet, wechsel }) => ({
    url: `${BASIS_URL}${pfad}`,
    lastModified: gebautAm,
    changeFrequency: wechsel,
    priority: prioritaet,
  }));
}
