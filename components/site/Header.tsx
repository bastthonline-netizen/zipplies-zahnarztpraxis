"use client";

import { pfad } from "@/lib/pfad";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { leistungen, navigation, praxis } from "@/content/praxis";
import s from "@/styles/site.module.css";

/* Nur auf der Startseite liegt der Header transparent ueber dem Foto-Hero
   (siehe startseite.module.css .ankunft) und wird solide, sobald gescrollt
   wird — auf allen anderen Seiten bleibt er wie bisher durchgehend solide,
   weil dort kein Vollbild-Hero darunterliegt.

   MENUE UNTER 900px. Die Zeile .nav{display:none} blendete die Navigation auf
   schmalen Viewports aus, ohne einen Ersatz anzubieten — im Kopf standen dann
   nur noch Wortmarke und Telefonnummer, und alle sechs Unterseiten waren nur
   noch ueber den Fussbereich ganz unten erreichbar. Der Knopf hier oeffnet
   stattdessen ein Panel unter dem Kopf. Es ist bewusst eine schlichte Liste
   mit grossen Tippflaechen (--control-h-lg) statt eines Vollbild-Overlays:
   die Zielgruppe ist aelter, und ein Menue soll wie ein Menue aussehen. */

export default function Header() {
  const pathname = usePathname();
  const istStartseite = pathname === "/";
  const [gescrollt, setGescrollt] = useState(!istStartseite);
  const [menueOffen, setMenueOffen] = useState(false);

  useEffect(() => {
    if (!istStartseite) {
      setGescrollt(true);
      return;
    }
    setGescrollt(window.scrollY > 24);

    const beiScroll = () => setGescrollt(window.scrollY > 24);
    window.addEventListener("scroll", beiScroll, { passive: true });
    return () => window.removeEventListener("scroll", beiScroll);
  }, [istStartseite]);

  /* Escape schliesst, und solange das Panel offen ist, scrollt die Seite
     dahinter nicht mit — sonst verliert man beim Wischen den Bezug. */
  useEffect(() => {
    if (!menueOffen) return;
    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenueOffen(false);
    };
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", beiTaste);
    return () => {
      document.body.style.overflow = vorher;
      window.removeEventListener("keydown", beiTaste);
    };
  }, [menueOffen]);

  /* Bei offenem Menue nie transparent: das Panel liegt sonst ueber dem Foto
     und der weisse Kopftext waere auf hellem Grund nicht mehr lesbar. */
  const transparent = istStartseite && !gescrollt && !menueOffen;

  return (
    <header
      className={`${s.header} ${transparent ? s.headerTransparent : ""} ${
        menueOffen ? s.headerOffen : ""
      }`}
    >
      <div className={`container ${s.headerInner}`}>
        <a href={pfad("/")} className={s.marke}>
          <Logo size={40} decorative />
          <span className={s.markeText}>
            <span className={s.markeName}>Dr. Zipplies</span>
            <span className={s.markeOrt}>Zahnarztpraxis am Utzhof</span>
          </span>
        </a>

        <nav className={s.nav} aria-label="Hauptnavigation">
          {navigation.map((punkt) =>
            /* Leistungen bekommt ein Untermenue mit allen neun Behandlungen,
               damit man direkt zur gesuchten springen kann statt erst die
               Uebersicht zu laden. Der Hauptlink bleibt bedienbar und fuehrt
               weiterhin auf die Uebersicht. Ein-/Ausblenden laeuft ueber
               :hover und :focus-within in CSS — dadurch auch per Tastatur
               erreichbar. */
            punkt.href === "/leistungen/" ? (
              <div key={punkt.href} className={s.navGruppe}>
                <a href={punkt.href} className={s.navLink}>
                  {punkt.label}
                </a>
                <div className={s.navUnter}>
                  <ul className={s.navUnterListe}>
                    {leistungen.map((leistung) => (
                      <li key={leistung.kuerzel}>
                        <a
                          href={`/leistungen/#${leistung.kuerzel}`}
                          className={s.navUnterLink}
                        >
                          {leistung.titel}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a key={punkt.href} href={punkt.href} className={s.navLink}>
                {punkt.label}
              </a>
            ),
          )}
        </nav>

        <a href={praxis.telefonHref} className={s.telefonKnopf}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {praxis.telefon}
        </a>

        {/* Nur unter 900px sichtbar (siehe site.module.css). Beschriftet ist
            der Knopf ueber aria-label, weil daneben kein Text steht. */}
        <button
          type="button"
          className={s.menueKnopf}
          aria-label={menueOffen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menueOffen}
          aria-controls="hauptmenue-mobil"
          onClick={() => setMenueOffen((o) => !o)}
        >
          <span className={s.menueStrich} />
          <span className={s.menueStrich} />
        </button>
      </div>

      {/* Erst im DOM, wenn geoeffnet — sonst waere die Liste per Tab
          erreichbar, obwohl sie niemand sieht. */}
      {menueOffen && (
        <nav
          id="hauptmenue-mobil"
          className={s.menuePanel}
          aria-label="Hauptnavigation"
        >
          <ul className={s.menueListe}>
            {navigation.map((punkt) => (
              <li key={punkt.href}>
                <a
                  href={punkt.href}
                  className={s.menueLink}
                  aria-current={pathname === punkt.href ? "page" : undefined}
                  onClick={() => setMenueOffen(false)}
                >
                  {punkt.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Die Telefonnummer steht im Panel noch einmal ausgeschrieben:
              der Knopf oben rutscht bei offenem Menue aus dem Blick. */}
          <a href={praxis.telefonHref} className={s.menueTelefon}>
            Jetzt anrufen · {praxis.telefon}
          </a>
        </nav>
      )}
    </header>
  );
}
