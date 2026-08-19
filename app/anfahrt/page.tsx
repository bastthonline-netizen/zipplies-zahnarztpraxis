import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Kartenrahmen from "@/components/sections/Kartenrahmen";
import { echteFotos, etappen, praxis, standort } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

export const metadata: Metadata = {
  /* Canonical auf DIESE Seite. Das Root-Layout setzt "/" als Vorgabe;
     ohne eigene Angabe erbt jede Unterseite sie und erklaert damit die
     Startseite zur maßgeblichen Fassung — Google wuerde die Unterseite
     dann gar nicht fuehren. */
  alternates: { canonical: "/anfahrt/" },
  title: "Anfahrt",
  description:
    "So finden Sie zur Zahnarztpraxis Dr. Zipplies am Utzhof, Thalreit 7, 83064 Raubling — ebenerdig, mit kostenfreiem Parkplatz vor der Tür.",
};

export default function AnfahrtSeite() {
  return (
    <>
      <Header />
      <main id="inhalt">
        {/* Hero mit Bild: die Seite loest ein Suchproblem — an der Hauptstrasse
            steht kein Praxisschild. Deshalb steht oben genau das eine Zeichen,
            an dem man erkennt, dass man richtig ist: die handgemalte
            Lueftlmalerei ueber der Eingangstuer. Echtes Foto, keine Marke.

            Die Anfahrts-Sequenz weiter unten endet dafuer auf dem ganzen Hof
            statt auf derselben Tuer — sonst zeigt die Seite zweimal dasselbe
            Motiv und die Sequenz verliert ihren Schlusspunkt. */}
        <section className={`${s.hero} ${s.heroMitBild}`}>
          <div className={`container ${s.heroRaster}`}>
            <div className="zp-auftritt">
              <p className={`zp-overline ${s.heroOverline}`}>Anfahrt</p>
              <h1 className={s.heroTitel}>Der Weg zum Utzhof</h1>
              <p className={s.heroLede}>
                {praxis.adresse.hof} · {praxis.adresse.strasse}, {praxis.adresse.plz}{" "}
                {praxis.adresse.ort}. Von Raubling mit dem Auto wenige Minuten,
                Richtung Thalreit.
              </p>
              <a href={praxis.karteHref} target="_blank" rel="noreferrer" className={`${s.terminNummer} ${s.terminNummerKlein}`}>
                Route in Google Maps öffnen
              </a>
            </div>

            <figure className={s.heroBild}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={echteFotos.lueftlmalerei.src}
                alt={echteFotos.lueftlmalerei.alt}
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className={`${s.abschnitt} ${s.abschnittSunken}`}>
          <div className="container">
            <ol className={s.liste}>
              {etappen.map((etappe, i) => (
                <li key={etappe.schritt} className={s.listeEintrag}>
                  <div className={s.etappe}>
                    <div>
                      <p className={`zp-overline ${s.etappeOverline}`}>
                        Etappe {etappe.schritt} von {String(etappen.length).padStart(2, "0")}
                      </p>
                      <h2 className={s.listeEintragTitel}>{etappe.titel}</h2>
                      <p className={s.listeEintragText}>{etappe.text}</p>
                    </div>
                    <div className={`${s.bild} ${s.bildFlach}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={etappe.bild} alt={etappe.alt} loading={i === 0 ? "eager" : "lazy"} />
                      {etappe.schritt !== "04" && <span className={s.bildHinweis}>Stimmungsbild, kein Praxisfoto</span>}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={s.abschnitt}>
          <div className="container">
            <div className={s.karten}>
              {standort.map((punkt) => (
                <div key={punkt.titel} className={s.karte}>
                  <p className={s.karteTitel}>{punkt.titel}</p>
                  <p className={s.karteText}>{punkt.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Die Karte zum Schluss. Der Standortblock des Footers ist auf
            dieser Seite unterdrueckt (Adresse und Zugangsfakten stehen
            oben schon), die Karte selbst fehlte damit aber ausgerechnet
            auf der Seite, die den Weg beschreibt. Hier steht sie vollbreit
            und ohne die Oeffnungszeiten-Spalte — die gehoert nicht zum
            Thema Anfahrt. */}
        <section className={`${s.abschnitt} ${s.abschnittSunken}`} id="karte">
          <div className="container">
            <h2 className={s.titel}>Der Hof auf der Karte</h2>
            <p className={`${s.text} ${s.kartenblockText}`}>
              {praxis.adresse.hof} · {praxis.adresse.strasse}, {praxis.adresse.plz}{" "}
              {praxis.adresse.ort}. Der Parkplatz liegt direkt am Kiesweg vor
              dem Haus.
            </p>
            <div className={s.kartenblockRahmen}>
              <Kartenrahmen format="breit" />
            </div>
          </div>
        </section>
      </main>
      <Footer ohneStandort />
    </>
  );
}
