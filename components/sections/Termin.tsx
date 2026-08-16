import Reveal from "@/components/Reveal";
import { praxis } from "@/content/praxis";
import s from "@/styles/startseite.module.css";

/* Sektion 6 — Job: Kontakt herstellen. Eine Aufgabe, ein Element.

   Telefon vor Formular, und zwar deutlich: die Praxis vergibt Termine per
   Rueckruf, und die Zielgruppe im Inntal greift eher zum Hoerer als zum
   Kontaktformular. Das Formular kommt spaeter dazu — es braucht ein
   Versand-Backend und eine DSGVO-Einwilligung fuer Gesundheitsdaten.

   Die Sprechzeiten- und Adresskarte stand frueher hier rechts daneben. Sie
   ist entfallen, seit der Standortblock am Seitenfuss beides auf jeder Seite
   fuehrt — sonst stuenden die Oeffnungszeiten auf der Startseite zweimal
   kurz untereinander. Diese Sektion ist jetzt nur noch die Aufforderung. */

export default function Termin() {
  return (
    <section className={s.termin} id="termin">
      <div className="container">
        <Reveal className={s.terminInhalt}>
          <h2 className={s.terminTitel}>Rufen Sie einfach an.</h2>
          <p className={s.terminText}>
            Termine vergeben wir persönlich am Telefon — so lässt sich gleich
            klären, wie viel Zeit Ihre Behandlung braucht. Bei akuten Schmerzen
            melden Sie sich bitte direkt, dafür halten wir kurzfristige Termine
            frei.
          </p>
          <a href={praxis.telefonHref} className={s.terminNummer}>
            {praxis.telefon}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
