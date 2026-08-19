import { praxis, telefonzeiten } from "@/content/praxis";
import Kartenrahmen from "@/components/sections/Kartenrahmen";
import s from "@/styles/startseite.module.css";

/* Standortblock am Fuss JEDER Seite (der Footer rendert ihn, siehe
   components/site/Footer.tsx). Job: die zwei Fragen beantworten, die nach
   dem Lesen offen bleiben — wann erreicht man die Praxis, und wo ist sie.

   Die Zeiten sind TELEFONZEITEN und stehen genau so beschriftet da. Die
   Praxis arbeitet auf Termin; eine Zeitentabelle ohne diese Beschriftung
   liest sich als Einladung, einfach vorbeizufahren.

   Bewusst NICHT hier: ebenerdig / Parkplatz / im Gruenen. Die drei
   Zugangsfakten wuerden sonst auf jeder Unterseite mitlaufen; sie stehen
   auf der Startseite in der Vertrauensleiste und ausfuehrlich auf /anfahrt.

   Die Karte selbst samt Zwei-Klick-Loesung und Lageskizze steckt in
   Kartenrahmen.tsx — /anfahrt unterdrueckt diesen Standortblock hier und
   setzt den Rahmen dort allein und vollbreit ein. Deshalb ist diese Datei
   reine Server-Komponente ohne Zustand. */

export default function Karte() {
  return (
    <section id="karte" className={s.karteSektion}>
      <div className={`container ${s.karteRaster}`}>
        <div>
          <p className={`zp-overline ${s.karteOverline}`}>Standort</p>
          <h2 className={s.karteTitel}>So finden Sie zum Utzhof.</h2>
          <p className={s.karteText}>
            {praxis.adresse.hof} · {praxis.adresse.strasse}
            <br />
            {praxis.adresse.plz} {praxis.adresse.ort}
          </p>

          <p className={`zp-overline ${s.karteOverline}`}>Telefonisch erreichbar</p>
          <dl className={s.karteZeiten}>
            {telefonzeiten.map((zeit) => (
              <div key={zeit.tag} className={s.karteZeit}>
                <dt className={s.karteZeitTag}>{zeit.tag}</dt>
                <dd className={`${s.karteZeitWert} ${zeit.geschlossen ? s.karteZeitZu : ""}`}>
                  {zeit.zeit}
                </dd>
              </div>
            ))}
          </dl>

          <p className={s.karteText}>{praxis.terminHinweis}.</p>

          <div className={s.karteAktionen}>
            <a href={praxis.telefonHref} className={s.btnPrimary}>
              Anrufen · {praxis.telefon}
            </a>
            <a href={praxis.karteHref} target="_blank" rel="noreferrer" className={s.textLink}>
              In Google Maps öffnen
            </a>
          </div>
        </div>

        <Kartenrahmen />
      </div>
    </section>
  );
}
