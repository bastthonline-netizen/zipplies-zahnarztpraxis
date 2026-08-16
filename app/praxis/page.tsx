import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/Reveal";
import { echteFotos, praxis, standort, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  title: "Die Praxis",
  description:
    "Der Utzhof in Thalreit bei Raubling: ein historisches Bauernhaus, seit 1994 Sitz der Zahnarztpraxis Dr. Zipplies — ebenerdig, mit Parkplatz vor der Tür.",
};

export default function PraxisSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        <section className={s.hero}>
          <div className="container zp-auftritt">
            <p className={`zp-overline ${s.heroOverline}`}>Die Praxis</p>
            <h1 className={s.heroTitel}>Der Hof war zuerst da.</h1>
            <p className={s.heroLede}>
              Der Utzhof trägt seinen Namen über der Tür, in Lüftlmalerei, von
              Hand aufgetragen. Die Praxis ist {praxis.seit} eingezogen und
              hat sich dem Haus angepasst, nicht umgekehrt.
            </p>
          </div>
        </section>

        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.raster}>
              <Reveal variante="bild" className={s.bild}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={stimmungsbilder.hofecke.src} alt={stimmungsbilder.hofecke.alt} loading="lazy" />
                <span className={s.bildHinweis}>Stimmungsbild, kein Praxisfoto</span>
              </Reveal>
              <div>
                <h2 className={s.titel}>Dicke Wände, weiches Licht.</h2>
                <p className={s.text}>
                  Das Haus ist alt, die Wände sind entsprechend dick, und
                  genau das prägt die Räume: kein grelles Klinikweiß, sondern
                  Fensterlaibungen, die tief genug sind, um das Licht zu
                  brechen, bevor es den Raum erreicht.
                </p>
                <p className={s.text}>
                  Ebenerdig, ohne Wartesaal mit Nummernanzeige, mit Blick ins
                  Grüne statt auf einen Parkplatz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.abschnitt} ${s.abschnittSunken}`}>
          <div className="container">
            <div className={s.raster}>
              <div>
                <h2 className={s.titel}>Vor Ort statt am Ortsrand.</h2>
                <p className={s.text}>
                  Der Standort liegt außerhalb — das ist keine Schwäche,
                  sondern der Grund, warum hier ruhiger gearbeitet wird als in
                  einem Ärztehaus mitten in Rosenheim.
                </p>
                <p className={`${s.text} ${s.zitat}`}>
                  „Wer einmal hier war, findet beim zweiten Mal auf Anhieb her."
                </p>
              </div>
              <ul className={s.liste}>
                {standort.map((punkt) => (
                  <li key={punkt.titel} className={s.listeEintrag}>
                    <p className={s.listeEintragTitel}>{punkt.titel}</p>
                    <p className={s.listeEintragText}>{punkt.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Schlussbild der Seite. Vorher stand hier `praxis-holzbalken.jpg` —
            ein generierter Hochkant-Makro, in ein 21:9-Band gezwaengt, von dem
            nur ein Streifen Holz und viel Schwarz uebrig blieb. Jetzt das echte
            Haus: die Seite heisst „Der Hof war zuerst da“ und endet auf dem Hof.
            Damit kippt auch die Bildunterschrift von „Stimmungsbild“ auf
            „echtes Foto“ — der Unterschied ist der Punkt. */}
        <section className={s.abschnitt}>
          <div className="container">
            <figure className={s.hausBand}>
              <Reveal variante="bild" className={s.hausBild}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={echteFotos.hof.src} alt={echteFotos.hof.alt} loading="lazy" />
              </Reveal>
              <figcaption className={s.hausUnterschrift}>
                <strong className={s.hausUnterschriftStark}>Der Utzhof, Thalreit 7.</strong>{" "}
                Dieses Foto ist echt. Die übrigen Bilder auf dieser Seite sind
                gekennzeichnete Stimmungsbilder, bis die eigenen Aufnahmen
                vorliegen.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
