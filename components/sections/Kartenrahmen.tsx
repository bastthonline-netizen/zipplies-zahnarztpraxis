"use client";

import { useState } from "react";
import { praxis } from "@/content/praxis";
import Standortskizze from "@/components/sections/Standortskizze";
import s from "@/styles/startseite.module.css";

/* Der Kartenrahmen samt Zwei-Klick-Loesung, als eigene Komponente, weil ihn
   inzwischen zwei Stellen brauchen: der Standortblock am Fuss der meisten
   Seiten (Karte.tsx) und die Anfahrtsseite, die den Standortblock bewusst
   unterdrueckt und trotzdem eine Karte zeigen soll.

   DSGVO: Google Maps laedt erst nach Klick, wie in BAUPLAN.md Schritt 6 und
   der Datenschutzerklaerung festgelegt — sonst baut der Browser beim reinen
   Seitenaufruf schon eine Verbindung zu Google auf, ohne dass jemand
   zugestimmt hat. Bis dahin steht im Rahmen die gezeichnete Lageskizze; der
   Rechtshinweis sitzt als schmale Leiste am Fuss des Rahmens.

   AUFBAU: Skizze und Hinweisleiste sind Geschwister, die Leiste liegt NICHT
   mehr als Overlay ueber der Zeichnung. Vorher war sie `position:absolute`
   am unteren Rand — auf einem 390px-Handy wurde der Hinweistext dabei
   dreizeilig und verdeckte mit dem Knopf zusammen rund die Haelfte des
   Rahmens, also genau die Haelfte, in der Ziel und Adresse stehen. Jetzt
   waechst der Rahmen um die Leiste, statt die Karte zuzudecken. Das ist auch
   das, was der Kommentar im CSS immer schon behauptet hat ("darunter —
   vollstaendig sichtbar").

   Der Zustand haengt bewusst an dieser Komponente und nicht weiter oben:
   jede Instanz entscheidet fuer sich, es gibt keine seitenweite
   Einwilligung, die irgendwo gespeichert wuerde. */

type KartenrahmenProps = {
  /** `breit` fuer den vollbreiten Einsatz auf /anfahrt — flacheres
      Seitenverhaeltnis, weil der Rahmen dort die ganze Spaltenbreite hat
      und im 4:3-Format sonst uebermannshoch wuerde. */
  format?: "standard" | "breit";
};

export default function Kartenrahmen({ format = "standard" }: KartenrahmenProps) {
  const [geladen, setGeladen] = useState(false);
  const adresse = `${praxis.adresse.strasse}, ${praxis.adresse.plz} ${praxis.adresse.ort}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(adresse)}&output=embed`;

  return (
    <div className={`${s.karteRahmen} ${format === "breit" ? s.karteRahmenBreit : ""}`}>
      <div className={s.karteFlaeche}>
        {geladen ? (
          <iframe
            src={embedSrc}
            className={s.karteIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            /* Der Rahmen bekommt genau die Rechte, die eine Karte braucht:
               Skripte, eigener Ursprung, Popups fuer "In Maps oeffnen" und
               Formulare fuer das Suchfeld. Nicht in der Liste steht
               allow-top-navigation — ohne sie kann der eingebettete Inhalt
               das Fenster der Praxisseite nicht auf eine andere Adresse
               umlenken. Bei einem Drittanbieter-Frame, den wir nicht
               kontrollieren, ist das die eine Grenze, die zaehlt. */
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
            title={`Karte: ${praxis.adresse.hof}, ${adresse}`}
          />
        ) : (
          <Standortskizze />
        )}
      </div>

      {!geladen && (
        <div className={s.karteConsent}>
          <p className={s.karteConsentText}>
            Die interaktive Karte lädt erst auf Klick — dabei baut Ihr
            Browser eine Verbindung zu Google Maps (Google LLC, USA) auf.
          </p>
          <button
            type="button"
            onClick={() => setGeladen(true)}
            className={`${s.btnPrimary} ${s.karteConsentKnopf}`}
          >
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
