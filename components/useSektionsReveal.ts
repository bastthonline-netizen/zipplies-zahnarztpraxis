"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/* Einblenden beim Hereinscrollen — fuer die Sektionen, die mit motion/react
   arbeiten (Vertrauen, Vorgehen, Galerie).

   WARUM ES DEN HOOK GIBT. Die Sektionen liefen vorher mit
   `initial="versteckt"` plus `whileInView`. Das sieht im Browser richtig aus,
   hat aber einen Haken, den man erst im gebauten HTML sieht: `initial` wird
   beim statischen Export mitgerendert. In out/index.html standen dadurch 24
   Elemente mit `opacity:0` — die halbe Startseite. Ohne JavaScript blieb sie
   dauerhaft leer, und in jedem Screenshot- oder Druck-Rendering ebenfalls.

   Das ist dieselbe Regel, die components/Reveal.tsx bereits befolgt:
   der Inhalt ist im ausgelieferten HTML immer sichtbar, versteckt wird erst,
   nachdem React uebernommen hat. Dieser Hook traegt sie in die
   motion-Sektionen, damit beide Reveal-Wege dasselbe tun.

   DER TRICK MIT DEM NICHT SICHTBAREN SPRUNG. Versteckt wird ausschliesslich,
   was unterhalb der Bildkante liegt — was schon im Bild steht, bleibt
   unangetastet. Der Sprung von sichtbar auf versteckt passiert also
   ausserhalb des Sichtfelds und faellt niemandem auf. Damit er auch technisch
   hart ist, setzen die `versteckt`-Varianten der Sektionen
   `transition:{duration:0}` — sonst wuerde der Inhalt weichgezeichnet
   wegblenden statt einfach da zu sein. */

export type RevealZustand = "sichtbar" | "versteckt";

export function useSektionsReveal<T extends HTMLElement = HTMLDivElement>(
  /** Anteil des Elements, der im Bild stehen muss, damit eingeblendet wird. */
  anteil = 0.2,
) {
  const ref = useRef<T>(null);
  const reduziert = useReducedMotion();
  const [zustand, setZustand] = useState<RevealZustand>("sichtbar");

  useEffect(() => {
    const el = ref.current;
    if (!el || reduziert) return;

    /* Steht die Sektion beim Laden schon (fast) im Bild, wird sie nie
       versteckt — sonst blitzt der obere Seitenbereich einmal weg. */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setZustand("versteckt");

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const eintrag of eintraege) {
          if (eintrag.isIntersecting) {
            setZustand("sichtbar");
            beobachter.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: anteil },
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, [reduziert, anteil]);

  return { ref, zustand };
}
