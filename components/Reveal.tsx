"use client";

import { useEffect, useRef, useState } from "react";

/* Einblenden beim Hereinscrollen: Fade + 10px Y, mehr nicht.
   Das ist die Systemregel aus motion.css.

   Wichtig und der Grund fuer den Startwert `false` nur im Browser:
   Der Inhalt ist im ausgelieferten HTML immer sichtbar. Waere er per CSS
   versteckt und wuerde erst durch JavaScript eingeblendet, waere die Seite
   ohne JavaScript leer — und fuer Suchmaschinen wie fuer Nutzer mit
   blockierten Skripten wertlos. Das Verstecken passiert deshalb erst,
   nachdem React uebernommen hat. */

type RevealProps = {
  children: React.ReactNode;
  /** Verzoegerung in Millisekunden, fuer gestaffelte Reihen. */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [bereit, setBereit] = useState(false);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSichtbar(true);
      return;
    }

    /* Was beim Laden schon im Bild steht, wird nie versteckt. Sonst blitzt der
       obere Seitenbereich einmal weg und wieder herein — und faellt komplett
       aus, falls der Beobachter gar nicht ausloest. Versteckt wird nur, was
       unterhalb der Kante liegt und tatsaechlich hereingescrollt werden kann. */
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setSichtbar(true);
      return;
    }
    setBereit(true);

    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const eintrag of eintraege) {
          if (eintrag.isIntersecting) {
            setSichtbar(true);
            beobachter.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, []);

  const versteckt = bereit && !sichtbar;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: versteckt ? 0 : 1,
        transform: versteckt ? "translateY(10px)" : "none",
        transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms, transform var(--dur-reveal) var(--ease-out) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
