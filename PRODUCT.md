# Product

## Register

brand

## Users

Patientinnen und Patienten aus Raubling und dem Landkreis Rosenheim, oft aus dem
Inntal außerhalb der Stadt — häufig ältere Zielgruppe, die per Auto anreist statt
zu Fuß in eine Innenstadtpraxis zu gehen. Kontext: sie suchen eine Zahnarztpraxis,
der sie vertrauen können, meist mit konkretem Anlass (Implantologie, Schmerzen,
Vorsorge) statt beim beiläufigen Stöbern. Die primäre Handlung ist der Anruf,
nicht das Formular.

## Product Purpose

Vertrauen aufbauen und zum Anruf/zur Terminanfrage bewegen — für eine Praxis,
die seit 1994 im selben Haus (Utzhof, Thalreit) arbeitet und seit 2005 auf
Implantologie spezialisiert ist. Erfolg heißt: die Seite überzeugt in wenigen
Sekunden, ohne zu behaupten, was sie nicht belegen kann.

## Brand Personality

Bodenständig, nachweisbar, ruhig — mit spürbarer fachlicher Exzellenz, die sich
in Sorgfalt und belegbaren Fakten zeigt (ICOI · DGOI, M.Sc., Jahreszahlen),
nicht in Werbesprache oder Superlativen. Die Praxis leistet nachweislich gute
Arbeit; die Seite soll das durch Zurückhaltung und Beleg vermitteln, nicht durch
Behauptung. Ruhige, einmalige Bewegung (Fade + leichter Y-Versatz beim
Scrollen) statt Effekthascherei — die eine dokumentierte Ausnahme ist die
Anfahrts-Sequenz als Signature-Moment.

## Anti-references

Generische Zahnarzt-Baukastenseite (`Hero → 3 Icon-Spalten → Über uns →
Kontakt`-Schema, siehe BAUPLAN.md). Sterile Stock-Foto-Klinik-Ästhetik statt der
eigenen Utzhof-Geschichte. Erfundene Patientenstimmen (rechtliches Risiko laut
PROJEKT.md — nach UWG abmahnfähig; entweder echte Google-Rezensionen oder
keine). SaaS-Hero-Metric-Look (große Zahl, kleines Label, Gradient-Akzent).
Icon-Kacheln für Leistungen, wo eine typografische Indexliste ehrlicher ist.

## Design Principles

- Nachweisbar statt behauptet — jede Vertrauensaussage muss nachprüfbar sein
  (Fachgesellschaft, Jahreszahl), keine Marketing-Adjektive wie "vertrauensvoll".
- Jede Sektion hat genau einen Job — keine Standardfolge, keine Füll-Sektionen.
- Ruhe ist Teil der Marke — Bewegung sparsam und einmalig, nicht dekorativ.
- Die Utzhof-Geschichte ist der Differenzierer, nicht die Implantologie allein.
- Rechtliche Sauberkeit vor Konversionsdruck (keine erfundenen Bewertungen,
  DSGVO bei Gesundheitsdaten, Karte nur mit Consent).

## Accessibility & Inclusion

WCAG AA. Zielgruppe schließt ältere Patientinnen und Patienten ein — hoher
Kontrast (im Farbsystem gegen WCAG 2.1 geprüft, siehe colors.css-Kommentare),
gut lesbare Schriftgrößen, keine reine Farbcodierung. `prefers-reduced-motion`
wird respektiert (motion.css setzt alle Dauern auf 0ms) und Inhalte dürfen nie
ausschließlich durch Animation sichtbar werden (siehe Reveal.tsx-Kommentar).
