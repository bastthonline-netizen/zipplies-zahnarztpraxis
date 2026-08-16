import Logo from "@/components/Logo";
import Karte from "@/components/sections/Karte";
import { navigation, oeffnungszeiten, praxis } from "@/content/praxis";
import s from "@/styles/site.module.css";

/* Die Karte haengt bewusst am Footer und nicht an den einzelnen Seiten:
   so steht sie auf JEDER Seite an derselben Stelle ganz unten. Die Praxis
   liegt ausserhalb des Orts — "wo ist das?" ist die Frage, die sonst offen
   bleibt, egal auf welcher Unterseite jemand landet. */

type FooterProps = {
  /** Auf /anfahrt weglassen — dort ist der Standort das Thema der ganzen
      Seite, der Block waere eine Dopplung. */
  ohneStandort?: boolean;
};

export default function Footer({ ohneStandort = false }: FooterProps) {
  const geoeffnet = oeffnungszeiten.filter((z) => !z.geschlossen);

  return (
    <>
      {!ohneStandort && <Karte />}
      <footer className={s.footer}>
      <div className="container">
        <div className={s.footerRaster}>
          <div>
            <div className={s.footerMarke}>
              <Logo size={44} decorative />
              <span className={s.footerName}>{praxis.name}</span>
            </div>
            <address className={s.footerAdresse}>
              {praxis.adresse.hof} · {praxis.adresse.strasse}
              <br />
              {praxis.adresse.plz} {praxis.adresse.ort}
              <br />
              <a href={praxis.telefonHref}>{praxis.telefon}</a>
              <br />
              Fax {praxis.fax}
            </address>
          </div>

          <div>
            <p className={s.footerTitel}>Seiten</p>
            <ul className={s.footerListe}>
              {navigation.map((punkt) => (
                <li key={punkt.href}>
                  <a href={punkt.href}>{punkt.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={s.footerTitel}>Sprechzeiten</p>
            <div className={s.footerZeiten}>
              {geoeffnet.map((z) => (
                <div key={z.tag} style={{ display: "contents" }}>
                  <span className={s.footerZeitenTag}>{z.tag.slice(0, 2)}</span>
                  <span>{z.zeit}</span>
                </div>
              ))}
              <div style={{ display: "contents" }}>
                <span className={s.footerZeitenTag}>Sa/So</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.footerFuss}>
          <span>
            © {new Date().getFullYear()} {praxis.name}
          </span>
          <a href="/impressum/">Impressum</a>
          <a href="/datenschutz/">Datenschutz</a>
        </div>
      </div>
      </footer>
    </>
  );
}
