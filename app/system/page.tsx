import type { Metadata } from "next";
import Logo from "@/components/Logo";

/* Systemkontrolle — Schritt 1.6 des BAUPLAN.md.
   Zweck: Wenn diese Seite schon richtig aussieht, stimmt das Fundament.
   Sie zeigt ausschliesslich Tokens, keine gestalteten Sektionen, und ist
   nicht Teil der spaeteren Website.

   GESPERRT, NICHT GELOESCHT. Der Kommentar sagte "vor dem Deploy loeschen oder
   sperren" — passiert war keins von beidem: die Seite lieferte oeffentlich 200
   aus und war indexierbar. Geloescht wird sie trotzdem nicht, sie ist das
   Kontrollblatt fuer jede kuenftige Aenderung an den Tokens. Stattdessen zwei
   Riegel: noindex hier und ein Disallow in app/robots.ts. */
export const metadata: Metadata = {
  title: "Systemkontrolle",
  robots: { index: false, follow: false },
};

const SKALEN = [
  { name: "Blue", praefix: "blue", stufen: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] },
  { name: "Sand", praefix: "sand", stufen: ["50", "100", "200", "300", "400"] },
  { name: "Ink", praefix: "ink", stufen: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] },
  { name: "Copper", praefix: "copper", stufen: ["100", "300", "500", "600", "700"] },
];

function Skala({ name, praefix, stufen }: { name: string; praefix: string; stufen: string[] }) {
  return (
    <div style={{ marginBottom: "var(--space-9)" }}>
      <p className="zp-overline" style={{ marginBottom: "var(--space-4)" }}>
        {name}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
        {stufen.map((stufe) => (
          <div key={stufe} style={{ width: 96 }}>
            <div
              style={{
                height: 64,
                background: `var(--${praefix}-${stufe})`,
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
              }}
            />
            <p
              style={{
                fontSize: "var(--size-caption)",
                color: "var(--text-muted)",
                marginTop: "var(--space-2)",
              }}
            >
              {stufe}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SystemSeite() {
  return (
    <main id="inhalt" className="container" style={{ paddingBlock: "var(--space-12)" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-5)",
          marginBottom: "var(--space-12)",
          color: "var(--text-heading)",
        }}
      >
        <Logo size={56} />
        <div>
          <h1 className="zp-h2">Systemkontrolle</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--size-body-sm)" }}>
            Farben, Typografie, Schriftbindung. Keine Website-Sektion.
          </p>
        </div>
      </header>

      <section style={{ marginBottom: "var(--space-14)" }}>
        <h2 className="zp-h3" style={{ marginBottom: "var(--space-7)" }}>
          Farbtreppen
        </h2>
        {SKALEN.map((s) => (
          <Skala key={s.praefix} {...s} />
        ))}
      </section>

      <section style={{ marginBottom: "var(--space-14)" }}>
        <h2 className="zp-h3" style={{ marginBottom: "var(--space-7)" }}>
          Schriftgrade
        </h2>
        <p className="zp-overline">Overline · Instrument Sans</p>
        <p className="zp-display" style={{ marginBlock: "var(--space-5)" }}>
          Zahnärztliche Größe — Füße, Öl, Maß
        </p>
        <h2 className="zp-h2" style={{ marginBottom: "var(--space-5)" }}>
          Überschrift zweiter Ordnung
        </h2>
        <h3 className="zp-h3" style={{ marginBottom: "var(--space-5)" }}>
          Überschrift dritter Ordnung
        </h3>
        <p className="zp-body" style={{ maxWidth: "var(--measure-body)" }}>
          Fließtext in Instrument Sans. Diese Zeile prüft zugleich die
          Sonderzeichen, die im latin-ext-Ausschnitt liegen: „deutsche
          Anführungszeichen“, das Euro-Zeichen 240 €, der Gedankenstrich – und
          Namen wie Müller-Lüdenscheidt. Sieht eines davon falsch aus, fehlt
          ein Font-Ausschnitt.
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "var(--size-h4)",
            color: "var(--text-body)",
            maxWidth: "var(--measure-narrow)",
            marginTop: "var(--space-7)",
          }}
        >
          Newsreader kursiv — vorgesehen für das eine Zitat.
        </p>
      </section>

      <section>
        <h2 className="zp-h3" style={{ marginBottom: "var(--space-7)" }}>
          Flächen
        </h2>
        <div
          style={{
            display: "grid",
            gap: "var(--space-5)",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          }}
        >
          <div
            style={{
              background: "var(--surface-inverse)",
              color: "var(--text-on-dark)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <p style={{ marginBottom: "var(--space-3)" }}>Dunkles Band</p>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: "var(--size-body-sm)" }}>
              Sekundärtext darauf
            </p>
          </div>
          <div
            style={{
              background: "var(--surface-card)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <p>Karte mit Schatten</p>
            <p style={{ color: "var(--text-muted)", fontSize: "var(--size-body-sm)" }}>
              Der Schatten ist navy getönt, nicht grau.
            </p>
          </div>
          <div
            style={{
              background: "var(--surface-tint)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <p>Blaue Tönung</p>
            <p style={{ color: "var(--text-muted)", fontSize: "var(--size-body-sm)" }}>
              Für ruhige Hinweisflächen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
