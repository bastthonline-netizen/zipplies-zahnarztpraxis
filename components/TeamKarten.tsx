"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { teamPortraets } from "@/content/praxis";
import s from "@/styles/unterseite.module.css";

/* Die Teamkarten drehen sich um: vorne das Portraet mit der Rolle, hinten die
   Beschreibung.

   Warum das ein <button> ist und nicht nur ein CSS-Hover:
   Sobald Inhalt hinter der Drehung liegt, ist er per Touch und per Tastatur
   unerreichbar, wenn nur `:hover` ihn holt. Auf Zeigergeraeten dreht der Hover,
   ueberall sonst — Handy, Tablet, Tastatur — dreht der Klick beziehungsweise
   Enter/Space. Der Rueckseitentext steht immer im HTML, also auch fuer
   Suchmaschinen und Screenreader.

   Der Zustand schlaegt den Hover: eine per Klick gedrehte Karte klappt nicht
   zurueck, nur weil die Maus darueberfaehrt. */
export default function TeamKarten() {
  const [gedreht, setGedreht] = useState<number | null>(null);

  return (
    <ul className={s.portraetReihe}>
      {teamPortraets.map((person, i) => {
        const offen = gedreht === i;
        return (
          <li key={person.rolle}>
            <Reveal delay={i * 70}>
              <button
                type="button"
                className={s.portraetKarte}
                aria-pressed={offen}
                onClick={() => setGedreht(offen ? null : i)}
              >
                <span className={s.portraetInnen} data-gedreht={offen ? "true" : "false"}>
                  <span className={s.portraetVorne}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={person.bild} alt={person.alt} loading="lazy" />
                    <span className={s.portraetSchleier} aria-hidden="true" />
                    <span className={s.portraetMarke}>Platzhalter</span>
                    {/* Vorder- und Rueckseite tragen dieselbe Rolle. Vorlesen
                        muss man sie nur einmal — die Rueckseite uebernimmt. */}
                    <span className={s.portraetVorneFuss} aria-hidden="true">
                      <span className={s.portraetRolle}>{person.rolle}</span>
                      {/* Ohne Hinweis findet niemand die Rueckseite. */}
                      <span className={s.portraetDreh}>Umdrehen</span>
                    </span>
                  </span>

                  <span className={s.portraetHinten}>
                    <span className={s.portraetHintenRolle}>{person.rolle}</span>
                    <span className={s.portraetDetail}>{person.text}</span>
                    <span className={s.portraetHintenFuss}>
                      Name und echtes Foto folgen nach dem Fototermin.
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
