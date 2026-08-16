/* Bildmarke — Variante B "Zahn, offene Linie".
   Loest die fruehere Variante 05 ab (Zahn im gefuellten Kreis-Badge mit
   ausgestanztem Z): die wirkte wie klassisches Zahnarzt-Kliparr und passte
   nicht zur ruhigen, unaufgeregten Markenwelt. Jetzt ein einzelner duenner,
   offener Strich statt einer Flaeche — kein Kreis, kein Buchstabe im Icon,
   das "Z" traegt allein die Wortmarke daneben.
   Faerbung ueber currentColor, damit die Marke die Textfarbe erbt —
   auf Sand also Ink, auf dem dunklen Band automatisch Sand.
   Kleinste vorgesehene Groesse: 24px. */

type LogoProps = {
  /** Hoehe in Pixeln. Das Seitenverhaeltnis 64:72 bleibt erhalten. */
  size?: number;
  className?: string;
  /** Nur setzen, wenn direkt daneben bereits der Praxisname als Text steht —
   *  dann ist die Marke dekorativ und darf nicht doppelt vorgelesen werden. */
  decorative?: boolean;
};

export default function Logo({ size = 40, className, decorative = false }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 72"
      height={size}
      width={(size * 64) / 72}
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Zahnarztpraxis Dr. Zipplies"}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 14
           C20 10 24 8 28 10
           C30 11 34 11 36 10
           C40 8 44 10 44 14
           C45 22 44 30 41 36
           C40 38 39 40 39 43
           L38 60
           C37.6 65 34 65.5 33 61
           L30.5 45
           C30.2 43.5 29.8 43.5 29.5 45
           L27 61
           C26 65.5 22.4 65 22 60
           L21 43
           C21 40 20 38 19 36
           C16 30 15 22 20 14
           Z"
      />
    </svg>
  );
}
