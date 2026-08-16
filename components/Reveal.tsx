"use client";

import { useEffect, useRef, useState } from "react";

/* Einblenden beim Hereinscrollen.

   Wichtig und der Grund fuer den Startwert `false` nur im Browser:
   Der Inhalt ist im ausgelieferten HTML immer sichtbar. Waere er per CSS
   versteckt und wuerde erst durch JavaScript eingeblendet, waere die Seite
   ohne JavaScript leer — und fuer Suchmaschinen wie fuer Nutzer mit
   blockierten Skripten wertlos. Das Verstecken passiert deshalb erst,
   nachdem React uebernommen hat.

   DREI VARIANTEN, WEIL EIN EINZIGES FADE UEBERALL WIE EINE SCHABLONE WIRKT:

   - `text`    Fade + 10px Y. Die Systemregel aus motion.css, Standard.
   - `bild`    Das Foto zieht von unten auf (clip-path) und laeuft dabei von
               1.02 auf 1 zurueck. Fotos sollen aufgehen, nicht rutschen.
   - `flaeche` Nur Deckkraft, kein Versatz. Fuer ganze Farbbaender: eine
               Flaeche, die 10px wandert, sieht aus wie ein Ruckler. */

type Variante = "text" | "bild" | "flaeche";

type RevealProps = {
  children: React.ReactNode;
  /** Verzoegerung in Millisekunden, fuer gestaffelte Reihen. */
  delay?: number;
  variante?: Variante;
  className?: string;
};

const verstecktStil: Record<Variante, React.CSSProperties> = {
  text: { opacity: 0, transform: "translateY(10px)" },
  bild: { opacity: 0, clipPath: "inset(14% 0 0 0)", transform: "scale(1.02)" },
  flaeche: { opacity: 0 },
};

const sichtbarStil: Record<Variante, React.CSSProperties> = {
  text: { opacity: 1, transform: "none" },
  bild: { opacity: 1, clipPath: "inset(0 0 0 0)", transform: "none" },
  flaeche: { opacity: 1 },
};

export default function Reveal({
  children,
  delay = 0,
  variante = "text",
  className,
}: RevealProps) {
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

    /* Notausgang fuers Drucken und fuer PDF-Export: dabei wird die ganze Seite
       auf einmal ausgegeben, ohne dass je gescrollt wird — der Beobachter
       loest fuer alles unterhalb der Kante nie aus und die Ausgabe waere
       ueber weite Strecken leer. */
    const beimDrucken = () => setSichtbar(true);
    window.addEventListener("beforeprint", beimDrucken);

    return () => {
      beobachter.disconnect();
      window.removeEventListener("beforeprint", beimDrucken);
    };
  }, []);

  const versteckt = bereit && !sichtbar;
  const dauer = variante === "bild" ? "var(--dur-reveal-bild)" : "var(--dur-reveal)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(versteckt ? verstecktStil[variante] : sichtbarStil[variante]),
        transition:
          `opacity ${dauer} var(--ease-out) ${delay}ms,` +
          `transform ${dauer} var(--ease-out) ${delay}ms,` +
          `clip-path ${dauer} var(--ease-out) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
