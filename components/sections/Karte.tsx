"use client";

import { useState } from "react";
import { oeffnungszeiten, praxis } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Standortblock am Fuss JEDER Seite (der Footer rendert ihn, siehe
   components/site/Footer.tsx). Job: die zwei Fragen beantworten, die nach
   dem Lesen offen bleiben — wann hat die Praxis auf, und wo ist sie.

   Bewusst NICHT hier: ebenerdig / Parkplatz / im Gruenen. Die drei
   Zugangsfakten wuerden sonst auf jeder Unterseite mitlaufen; sie stehen
   auf der Startseite in der Vertrauensleiste und ausfuehrlich auf /anfahrt.

   DSGVO: Die Karte laedt erst nach Klick (Zwei-Klick-Loesung), wie in
   BAUPLAN.md Schritt 6 und der Datenschutzerklaerung festgelegt — sonst
   baut der Browser beim reinen Seitenaufruf schon eine Verbindung zu
   Google auf, ohne dass jemand zugestimmt hat. */

export default function Karte() {
  const [geladen, setGeladen] = useState(false);
  const adresse = `${praxis.adresse.strasse}, ${praxis.adresse.plz} ${praxis.adresse.ort}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(adresse)}&output=embed`;

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

          <dl className={s.karteZeiten}>
            {oeffnungszeiten.map((zeit) => (
              <div key={zeit.tag} className={s.karteZeit}>
                <dt className={s.karteZeitTag}>{zeit.tag}</dt>
                <dd className={`${s.karteZeitWert} ${zeit.geschlossen ? s.karteZeitZu : ""}`}>
                  {zeit.zeit}
                </dd>
              </div>
            ))}
          </dl>

          <div className={s.karteAktionen}>
            <a href={praxis.telefonHref} className={s.btnPrimary}>
              Anrufen · {praxis.telefon}
            </a>
            <a href={praxis.karteHref} target="_blank" rel="noreferrer" className={s.textLink}>
              In Google Maps öffnen
            </a>
          </div>
        </div>

        <div className={s.karteRahmen}>
          {geladen ? (
            <iframe
              src={embedSrc}
              className={s.karteIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Karte: ${praxis.adresse.hof}, ${adresse}`}
            />
          ) : (
            <div className={s.kartePlatzhalter}>
              <p className={s.kartePlatzhalterText}>
                Aus Datenschutzgründen wird die Karte erst nach Klick geladen —
                dabei baut Ihr Browser eine Verbindung zu Google Maps
                (Google LLC, USA) auf.
              </p>
              <button type="button" onClick={() => setGeladen(true)} className={s.btnPrimary}>
                Karte laden
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
