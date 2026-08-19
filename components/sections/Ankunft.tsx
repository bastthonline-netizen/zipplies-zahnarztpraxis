import { echteFotos, praxis } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 1 — Job: in fuenf Sekunden klarmachen, wo das hier ist,
   worum es geht und wie man einen Termin bekommt.

   Vollbild-Hero mit Verlauf, Referenz: Zen Dental Studio. Der transparente
   Header (siehe site.module.css .headerTransparent) liegt darueber und wird
   erst beim Scrollen solide — das gehoert zusammen mit diesem Hero, siehe
   components/site/Header.tsx.

   BILD: das Haus, nicht der Behandlungsstuhl. Hier stand vorher der
   generierte Behandlungsraum — ein Motiv, das die eigene Bildnotiz in
   content/praxis.ts als "beliebige Stadtpraxis mit Gardine und Estrich"
   beschreibt, also genau die sterile Klinik-Optik, die PRODUCT.md als
   Anti-Referenz fuehrt. Ueber der Zeile "Der Zahnarzt, zu dem man rausfaehrt"
   widersprachen sich Bild und Aussage.

   Jetzt steht dort der Utzhof von der Zufahrt aus: ein echtes Foto, kein
   Platzhalter. Deshalb faellt auch der Hinweis "Stimmungsbild" weg — das
   Erste, was jemand sieht, ist damit belegt statt behauptet. Das passt zur
   Regel, dass jede Aussage nachpruefbar sein muss.

   Zwei Groessen ueber srcset: am Handy laedt die 1000px-Fassung (157 KB)
   statt der 1800px-Fassung (511 KB).

   19.08.2026 — TITELZEILE GEAENDERT. Vorher: "Der Zahnarzt, zu dem man
   rausfaehrt." Die Zeile machte die Anfahrt zur Hauptbotschaft, also
   ausgerechnet den einzigen Nachteil des Standorts, und widersprach der
   Praxis selbst: die beschreibt sich auf ihrer eigenen Seite als
   "verkehrsguenstig gelegen". Wer eine Zahnarztpraxis sucht, entscheidet
   nicht ueber die Strecke, sondern ueber den Behandler.

   Jetzt steht die Kompetenz oben und der Hof in der Unterzeile. Das Bild
   traegt den Ort ohnehin, und die ganze Anfahrts-Sequenz weiter unten ist
   genau fuer die Wegfrage da. */

export default function Ankunft() {
  const bild = echteFotos.hof;

  return (
    <section className={s.ankunft}>
      <div className={s.ankunftMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bild.src}
          srcSet={`${bild.srcKlein} 1000w, ${bild.src} 1800w`}
          sizes="100vw"
          width={bild.breite}
          height={bild.hoehe}
          alt={bild.alt}
          fetchPriority="high"
        />
        <div className={s.ankunftScrim} />
      </div>

      <div className={s.ankunftInhalt}>
        <div className="container zp-auftritt">
          <p className={s.ankunftOrt}>
            <span className={s.ankunftOrtStrich} />
            {praxis.region}
          </p>

          <h1 className={s.ankunftTitel}>
            Implantologie seit {praxis.schwerpunktSeit}, an einem Hof aus dem
            13. Jahrhundert.
          </h1>

          <p className={s.ankunftLede}>
            Zahnarztpraxis Dr. Zipplies am Utzhof in Thalreit. Seit{" "}
            {praxis.seit} dieselbe Praxis, derselbe Behandler — Beratung,
            Eingriff und Zahnersatz aus einer Hand. Parkplatz vor der Tür.
          </p>

          <div className={s.ankunftAktionen}>
            <a href={praxis.telefonHref} className={s.btnPrimary}>
              Jetzt anrufen · {praxis.telefon}
            </a>
            <a href="#karte" className={s.btnSecondary}>
              Standort ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
