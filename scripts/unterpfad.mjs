/* Schreibt einen Unterpfad in den fertigen Export.

   WARUM ES DAS GIBT. Auf GitHub Pages liegt die Seite nicht auf einer eigenen
   Adresse, sondern unter <benutzer>.github.io/<repo>/. Alle Verweise im
   Projekt sind aber absolut ab der Wurzel geschrieben — href="/impressum/",
   src="/images/…", url("/fonts/…") in der Schriftdatei. Ohne Praefix zeigen
   sie unter Pages alle ins Leere.

   WARUM NICHT `basePath` IN next.config.mjs. Das deckt nur ab, was Next
   selbst erzeugt (die Dateien unter /_next/). Unsere eigenen Pfade stehen als
   Zeichenketten in content/praxis.ts, in den Komponenten und in fonts.css —
   die fasst Next nicht an. Es waeren ueber dreissig Stellen im Quellcode, und
   jede davon muesste wieder zurueckgebaut werden, sobald die Seite auf die
   eigene Domain umzieht (Cloudflare Pages, siehe PROJEKT.md).

   Deshalb bleibt der Quellcode auf Wurzelpfaden und der Praefix wird einmal
   am Ende in die ausgelieferten Dateien geschrieben. Ohne BASIS_PFAD tut das
   Skript nichts — der Umzug auf die eigene Domain braucht dann keine
   Aenderung, nur eine Umgebungsvariable weniger. */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const praefix = (process.env.BASIS_PFAD ?? "").replace(/\/$/, "");
const wurzel = path.resolve("out");

if (!praefix) {
  console.log("BASIS_PFAD nicht gesetzt — Export bleibt auf Wurzelpfaden.");
  process.exit(0);
}

/* Ein absoluter Pfad, der noch nicht auf den Praefix zeigt und keine
   protokollrelative Adresse (//…) ist. */
const istUmzuschreiben = (p) =>
  p.startsWith("/") && !p.startsWith("//") && !p.startsWith(`${praefix}/`);

const mitPraefix = (p) => (istUmzuschreiben(p) ? praefix + p : p);

function umschreiben(inhalt) {
  return (
    inhalt
      /* srcset zuerst: dort stehen mehrere Pfade durch Kommata getrennt, die
         Anfuehrungszeichen-Regel unten wuerde keinen davon erwischen (sie
         verlangt Anfuehrungszeichen direkt hinter dem Pfad).

         Ohne `i` greift die Regel ins Leere: React schreibt das Attribut im
         ausgelieferten HTML als `srcSet` mit grossem S. */
      .replace(/\ssrcset="([^"]+)"/gi, (treffer, liste) => {
        const neu = liste
          .split(",")
          .map((eintrag) => {
            const teile = eintrag.trim().split(/\s+/);
            teile[0] = mitPraefix(teile[0]);
            return teile.join(" ");
          })
          .join(", ");
        return treffer.replace(liste, neu);
      })
      /* url(/fonts/…) in CSS, mit und ohne Anfuehrungszeichen. */
      .replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (t, q, p) => `url(${q}${mitPraefix(p)}${q})`)
      /* Alles Uebrige: ein absoluter Pfad direkt hinter einem
         Anfuehrungszeichen. Das deckt href, src, content, die Verweise in den
         eingebetteten Skripten und die Pfade in der JSON-LD-Auszeichnung ab. */
      .replace(/(["'])(\/[^"'\s>]*)\1/g, (t, q, p) => `${q}${mitPraefix(p)}${q}`)
  );
}

async function dateien(ordner) {
  const gefunden = [];
  for (const eintrag of await readdir(ordner, { withFileTypes: true })) {
    const voll = path.join(ordner, eintrag.name);
    if (eintrag.isDirectory()) gefunden.push(...(await dateien(voll)));
    else if (/\.(html|css|txt)$/.test(eintrag.name)) gefunden.push(voll);
  }
  return gefunden;
}

const liste = await dateien(wurzel);
let geaendert = 0;

for (const datei of liste) {
  const alt = await readFile(datei, "utf8");
  const neu = umschreiben(alt);
  if (neu !== alt) {
    await writeFile(datei, neu);
    geaendert++;
  }
}

/* GitHub Pages laesst Ordner mit fuehrendem Unterstrich standardmaessig weg —
   und genau so heisst der Ordner, in dem Next alle Skripte und Stile ablegt
   (_next). Ohne diese Datei laedt die Seite ohne jedes Stylesheet. */
await writeFile(path.join(wurzel, ".nojekyll"), "");

console.log(`Unterpfad "${praefix}" gesetzt: ${geaendert} von ${liste.length} Dateien angepasst.`);
