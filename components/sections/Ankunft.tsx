import { praxis, stimmungsbilder } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 1 — Job: in fuenf Sekunden klarmachen, wo das hier ist,
   worum es geht und wie man einen Termin bekommt.

   Vollbild-Hero mit Verlauf, Referenz: Zen Dental Studio. Der transparente
   Header (siehe site.module.css .headerTransparent) liegt darueber und wird
   erst beim Scrollen solide — das gehoert zusammen mit diesem Hero, siehe
   components/site/Header.tsx.

   Bild: Probewebsite-Platzhalter aus Higgsfield (Behandlungsraum), klar
   ausgezeichnet. Sobald echte Praxisfotos vorliegen, nur die Quelle tauschen —
   die Verlauf-Mechanik bleibt. */

export default function Ankunft() {
  return (
    <section className={s.ankunft}>
      <div className={s.ankunftMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stimmungsbilder.behandlungsraum.src}
          alt={stimmungsbilder.behandlungsraum.alt}
          fetchPriority="high"
        />
        <div className={s.ankunftScrim} />
        <span className={s.ankunftBildHinweis}>Stimmungsbild, kein Praxisfoto</span>
      </div>

      <div className={s.ankunftInhalt}>
        <div className="container">
          <p className={s.ankunftOrt}>
            <span className={s.ankunftOrtStrich} />
            {praxis.region}
          </p>

          <h1 className={s.ankunftTitel}>Der Zahnarzt, zu dem man rausfährt.</h1>

          <p className={s.ankunftLede}>
            Seit {praxis.seit} am Utzhof in Thalreit. Ein Bauernhaus statt
            Ärztehaus, Parkplatz vor der Tür — und Implantologie als
            Schwerpunkt seit {praxis.schwerpunktSeit}.
          </p>

          <div className={s.ankunftAktionen}>
            <a href={praxis.telefonHref} className={s.btnPrimary}>
              Jetzt anrufen · {praxis.telefon}
            </a>
            <a href="#karte" className={s.btnSecondary}>
              Standort ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
