/* Stammdaten und Inhalte der Praxis.

   HERKUNFT: uebernommen aus der bestehenden Praxis-Website ueber die Datendatei
   der Astro-Vorgaengerseite. Das sind Fakten, keine Gestaltung — sie werden
   uebernommen, waehrend Code und Texte der Altseite es nicht werden.

   NICHT uebernommen: die drei "Beispiel-Bewertungen" (Maria K., Thomas B.,
   Sabine W.). Erfundene Patientenstimmen sind nach UWG abmahnbar. Entweder
   echte Google-Rezensionen oder gar keine.

   NOCH ZU BESTAETIGEN durch Dr. Zipplies: Oeffnungszeiten (auf der Altseite
   waren nur Telefonzeiten publiziert) und die Namen des Teams. */

export const praxis = {
  name: "Zahnarztpraxis Dr. Zipplies",
  arzt: "Dr. med. dent. Robert Zipplies",
  arztKurz: "Dr. Robert Zipplies",
  arztZusatz: "M.Sc.",
  seit: 1994,
  schwerpunktSeit: 2005,
  telefon: "08035 6505",
  telefonHref: "tel:+4980356505",
  fax: "08035 6686",
  adresse: {
    hof: "Utzhof",
    strasse: "Thalreit 7",
    plz: "83064",
    ort: "Raubling",
  },
  region: "Raubling · Landkreis Rosenheim",
  karteHref:
    "https://www.google.com/maps/search/?api=1&query=Thalreit+7+83064+Raubling",
} as const;

export const navigation = [
  { label: "Implantologie", href: "/implantologie/" },
  { label: "Leistungen", href: "/leistungen/" },
  { label: "Praxis", href: "/praxis/" },
  { label: "Team", href: "/team/" },
  { label: "Anfahrt", href: "/anfahrt/" },
  { label: "Kontakt", href: "/kontakt/" },
] as const;

/* Das Behandlungsspektrum, wie es die Praxis selbst fuehrt.
   Implantologie steht bewusst zuerst — sie ist der Schwerpunkt, nicht ein
   Punkt unter neun.

   `kuerzel` ist der Ankername in der URL (/leistungen#implantologie), damit
   sich jede Leistung direkt verlinken und aus dem Menue anspringen laesst.
   `text` ist die Kurzfassung fuer die Startseite, `lang` die Beschreibung
   im Panel der Leistungsseite, `punkte` der stichwortartige Ablauf.

   Bewusst KEINE Heilversprechen, keine Fallzahlen, keine Superlative — die
   Texte beschreiben, was gemacht wird und was einen erwartet. Aussagen zu
   Eignung stehen im Konjunktiv ("haengt vom Befund ab"), weil das ohne
   Untersuchung niemand zusagen kann. */
export const leistungen: {
  titel: string;
  kuerzel: string;
  text: string;
  lang: string;
  punkte: string[];
}[] = [
  {
    titel: "Implantologie",
    kuerzel: "implantologie",
    text: "Festsitzender Zahnersatz auf Implantaten. Schwerpunkt der Praxis seit 2005, geplant mit dreidimensionaler Diagnostik.",
    lang: "Ein Implantat ersetzt die Wurzel des verlorenen Zahns, nicht nur den sichtbaren Teil. Es besteht aus Titan, wächst im Kieferknochen ein und trägt anschließend eine Krone, eine Brücke oder eine Prothese. Vor dem Eingriff wird der Knochen dreidimensional dargestellt: Lage und Achse des Implantats stehen fest, bevor der erste Schnitt gesetzt wird. Ob ein Implantat im Einzelfall infrage kommt, hängt vom Knochenangebot und der Mundgesundheit ab — das klären wir vorher, nicht während der Behandlung.",
    punkte: [
      "Beratung und dreidimensionale Aufnahme",
      "Planung der Position am Bildschirm",
      "Einsetzen des Implantats, danach Einheilzeit",
      "Krone, Brücke oder Prothese darauf",
    ],
  },
  {
    titel: "Prophylaxe",
    kuerzel: "prophylaxe",
    text: "Professionelle Zahnreinigung und Vorsorge, damit Karies und Parodontitis gar nicht erst entstehen.",
    lang: "Die professionelle Zahnreinigung entfernt Beläge dort, wo Zahnbürste und Zahnseide nicht hinkommen — in den Zahnzwischenräumen und unterhalb des Zahnfleischrands. Danach werden die Zähne poliert, sodass sich neue Beläge schwerer festsetzen. Wie oft das sinnvoll ist, hängt vom individuellen Risiko ab und wird nicht pauschal festgelegt. Für Implantatträger gelten eigene Intervalle, weil das Gewebe um ein Implantat anders reagiert als um einen natürlichen Zahn.",
    punkte: [
      "Beläge und Verfärbungen entfernen",
      "Zahnzwischenräume reinigen",
      "Politur und Fluoridierung",
      "Hinweise zur Pflege zu Hause",
    ],
  },
  {
    titel: "Konservierende Behandlung",
    kuerzel: "fuellungen",
    text: "Zahnerhalt mit zahnfarbenen Füllungen — so schonend wie möglich, so unauffällig wie nötig.",
    lang: "Konservierend heißt: den Zahn erhalten. Kariöse Stellen werden entfernt und der Zahn mit einer zahnfarbenen Füllung wieder aufgebaut. Wie viel Substanz dabei abgetragen wird, entscheidet der Befund — je früher etwas entdeckt wird, desto kleiner bleibt der Eingriff. Größere Defekte lassen sich statt mit einer Füllung mit einem Keramikinlay versorgen, das im Haus gefertigt wird.",
    punkte: [
      "Befund und Aufklärung über die Möglichkeiten",
      "Karies entfernen",
      "Zahnfarbene Füllung oder Keramikinlay",
      "Kontrolle des Bisses",
    ],
  },
  {
    titel: "Endodontie",
    kuerzel: "wurzelbehandlung",
    text: "Wurzelbehandlung, um entzündete Zähne zu erhalten statt sie zu ziehen.",
    lang: "Ist der Nerv eines Zahns entzündet, war das früher meist das Ende des Zahns. Bei einer Wurzelbehandlung wird stattdessen das entzündete Gewebe aus den Wurzelkanälen entfernt, die Kanäle werden gereinigt und dicht verschlossen. Der Zahn bleibt erhalten und wird anschließend versorgt — oft mit einer Krone, weil er nach der Behandlung spröder ist. Der Eingriff findet unter örtlicher Betäubung statt.",
    punkte: [
      "Betäubung und Zugang zum Kanalsystem",
      "Entzündetes Gewebe entfernen",
      "Kanäle reinigen und dicht füllen",
      "Aufbau, meist mit einer Krone",
    ],
  },
  {
    titel: "Parodontologie",
    kuerzel: "parodontologie",
    text: "Systematische Behandlung von Zahnfleischentzündungen — das Fundament für feste Zähne.",
    lang: "Parodontitis ist eine Entzündung des Zahnhalteapparats. Sie verläuft lange schmerzfrei und fällt oft erst auf, wenn Zähne locker werden — deshalb wird das Zahnfleisch bei jeder Kontrolle mitgemessen. Behandelt wird sie, indem die Zahnfleischtaschen gereinigt und die Wurzeloberflächen geglättet werden, damit sich das Gewebe wieder anlegen kann. Danach entscheidet die Nachsorge über den Erfolg: ohne regelmäßige Kontrolle kommt die Entzündung zurück.",
    punkte: [
      "Messung der Taschentiefen",
      "Reinigung der Zahnfleischtaschen",
      "Glättung der Wurzeloberflächen",
      "Feste Nachsorgeintervalle",
    ],
  },
  {
    titel: "Prothetik und Zahnersatz",
    kuerzel: "zahnersatz",
    text: "Kronen, Brücken und Prothesen, passgenau gearbeitet und natürlich im Aussehen.",
    lang: "Zahnersatz reicht von der einzelnen Krone bis zur Versorgung eines ganzen Kiefers. Welche Lösung passt, hängt davon ab, wie viele Zähne fehlen, wie es um die verbliebenen steht und was getragen werden soll — festsitzend oder herausnehmbar. Vor der Entscheidung besprechen wir Aufwand, Haltbarkeit und Kosten der Varianten, einschließlich dessen, was die Kasse übernimmt und was nicht.",
    punkte: [
      "Befund und Beratung zu den Varianten",
      "Heil- und Kostenplan für die Kasse",
      "Anfertigung und Anprobe",
      "Eingliederung und Nachkontrolle",
    ],
  },
  {
    titel: "Chirurgie",
    kuerzel: "chirurgie",
    text: "Operative Eingriffe in vertrauter Umgebung, eng verzahnt mit der weiteren Behandlung.",
    lang: "Zu den chirurgischen Eingriffen gehören das Entfernen nicht erhaltungsfähiger oder verlagerter Zähne, Weisheitszahnentfernungen und der Aufbau von Knochen, wenn für ein Implantat zu wenig davon vorhanden ist. Die Eingriffe finden in der Praxis statt, unter örtlicher Betäubung, und liegen in derselben Hand wie die spätere Versorgung — es gibt keinen Bruch zwischen Operation und Zahnersatz.",
    punkte: [
      "Aufklärung über Eingriff und Alternativen",
      "Örtliche Betäubung",
      "Eingriff in der Praxis",
      "Nachsorge und Kontrolle der Wundheilung",
    ],
  },
  {
    titel: "Diagnostik",
    kuerzel: "diagnostik",
    text: "Digitales Röntgen und dreidimensionale Diagnostik (DVT) als strahlungsarme Grundlage.",
    lang: "Digitales Röntgen kommt mit deutlich weniger Strahlung aus als Filmaufnahmen und liegt sofort auf dem Bildschirm vor. Für Fragestellungen, bei denen ein zweidimensionales Bild nicht ausreicht — die Lage eines Nervs, das Knochenangebot vor einem Implantat, ein verlagerter Weisheitszahn — steht die dreidimensionale Diagnostik zur Verfügung. Eine Aufnahme wird nur gemacht, wenn sie die Behandlung tatsächlich beeinflusst.",
    punkte: [
      "Digitales Röntgen, strahlungsarm",
      "Dreidimensionale Aufnahme bei Bedarf",
      "Befund gemeinsam am Bildschirm",
      "Aufnahmen nur mit Fragestellung",
    ],
  },
  {
    titel: "CEREC — Keramik an einem Tag",
    kuerzel: "cerec",
    text: "Vollkeramische Restaurationen ohne Abdruck und ohne Provisorium, in einer Sitzung eingesetzt.",
    lang: "Der Zahn wird mit einer Kamera gescannt statt mit Abformmasse abgedrückt. Aus den Daten entsteht die Restauration am Bildschirm und wird anschließend in der Praxis aus einem Keramikblock gefräst. Krone oder Inlay werden noch in derselben Sitzung eingesetzt: kein Abdruck, kein Provisorium, kein zweiter Termin. Ob das im Einzelfall möglich ist, hängt von der Ausgangssituation ab.",
    punkte: [
      "Digitaler Scan statt Abdruck",
      "Konstruktion am Bildschirm",
      "Fräsen aus dem Keramikblock im Haus",
      "Einsetzen in derselben Sitzung",
    ],
  },
];

/* Die einzigen Kompetenzaussagen der Seite, die keine Behauptung sind:
   alle drei sind bei ICOI, DGOI und der Hochschule nachpruefbar. */
export const qualifikationen: { jahr: string; text: string }[] = [
  { jahr: "2005", text: "Diplomate des International Congress of Oral Implantologists (ICOI)" },
  { jahr: "2005", text: "Geprüfter Experte der Implantologie der DGOI" },
  { jahr: "2007", text: "Master of Science (M.Sc.) Implantologie" },
];

export const standort: { titel: string; text: string }[] = [
  { titel: "Ebenerdig", text: "Kein Treppenhaus, kein Aufzug — der Eingang liegt auf Straßenniveau." },
  { titel: "Parkplatz vor der Tür", text: "Kostenfrei und direkt am Hof, keine Parkplatzsuche." },
  { titel: "Im Grünen", text: "Thalreit liegt außerhalb, mit dem Auto von Raubling in wenigen Minuten." },
];

export const oeffnungszeiten: { tag: string; zeit: string; geschlossen?: boolean }[] = [
  { tag: "Montag", zeit: "8:30–12:00 · 15:00–17:00" },
  { tag: "Dienstag", zeit: "8:30–12:00 · 15:00–17:00" },
  { tag: "Mittwoch", zeit: "8:30–12:00" },
  { tag: "Donnerstag", zeit: "8:30–12:00 · 15:00–17:00" },
  { tag: "Freitag", zeit: "8:30–12:00" },
  { tag: "Samstag", zeit: "Geschlossen", geschlossen: true },
  { tag: "Sonntag", zeit: "Geschlossen", geschlossen: true },
];

/* Die Etappen der Anfahrts-Sequenz — der eine Signature-Moment der Seite.

   BILDER: Etappe 1–3 sind Higgsfield-Aufnahmen aus BILDBRIEFING.md, als
   Stimmungsbild der Anfahrt — Probewebsite, wird bei Bedarf gegen echte
   Fotos getauscht. Etappe 04 bleibt das echte Foto der Lüftlmalerei. */
export const etappen: { schritt: string; titel: string; text: string; bild: string; alt: string }[] = [
  {
    schritt: "01",
    titel: "Raus aus Raubling",
    text: "Richtung Thalreit. Die Bebauung hört auf, es wird still.",
    bild: "/images/generated/etappe-01-landstrasse.jpg",
    alt: "Landstraße im Inntal Richtung Thalreit, Nebel über den Feldern",
  },
  {
    schritt: "02",
    titel: "Nach Thalreit",
    text: "An der Hauptstraße steht kein Praxisschild. Das ist keine Nachlässigkeit, hier steht einfach keins.",
    bild: "/images/generated/etappe-02-hecke.jpg",
    alt: "Landstraße mit Hecke Richtung Thalreit",
  },
  {
    schritt: "03",
    titel: "Die Hofeinfahrt",
    text: "Thalreit 7. Der Kiesweg führt direkt an den Parkplatz.",
    bild: "/images/generated/etappe-03-kiesweg.jpg",
    alt: "Kiesweg zwischen zwei Bäumen zum Hof",
  },
  {
    schritt: "04",
    titel: "Angekommen",
    /* Bis 16.08.2026 stand hier das Detail der Lueftlmalerei. Das Motiv ist
       jetzt der Kopf der Seite — der Schlusspunkt zeigt dafuer den ganzen Hof,
       damit die Seite nicht zweimal dieselbe Tuer zeigt. Beides echte Fotos. */
    text: "Das Haus mit der Lüftlmalerei am Giebel. Parkplatz direkt davor, der Eingang liegt ebenerdig.",
    bild: "/images/zufahrt.jpg",
    alt: "Der Utzhof von der Zufahrt aus: weiß gekalkte Giebelwand mit Lüftlmalerei, Kiesweg davor",
  },
];

/* Die echten Fotos. BAUPLAN.md ist hier eindeutig: das Haus selbst muss ein
   echtes Foto sein — ein generierter Utzhof waere irrefuehrende Werbung und
   faellt beim ersten Besuch auf. Diese beiden Dateien stammen aus der
   Vorgaengerseite und sind die einzigen belegten Aufnahmen, die wir haben. */
export const echteFotos = {
  /* Das Haus von der Zufahrt aus — das einzige Motiv, das die Kernaussage
     der Startseite ("Der Zahnarzt, zu dem man rausfaehrt") tatsaechlich
     zeigt, und dazu ein echtes Foto.

     `src` ist die auf 1800px gerechnete Fassung fuer den Hero (511 KB statt
     1,6 MB im Original), `srcKlein` die 1000px-Fassung fuers Handy. Das
     unveraenderte Original bleibt als zufahrt.jpg liegen, falls spaeter neu
     zugeschnitten werden muss. breite/hoehe stehen hier, damit das Bild im
     Markup ein Seitenverhaeltnis mitbekommt und beim Laden nichts springt. */
  hof: {
    src: "/images/hof-hero.jpg",
    srcKlein: "/images/hof-hero-klein.jpg",
    breite: 1800,
    hoehe: 1350,
    alt: "Der Utzhof von der Zufahrt aus: weiß gekalkte Giebelwand, Lüftlmalerei unter dem Dachfirst, blau gestrichene Balkonbrüstung",
  },
  lueftlmalerei: {
    src: "/images/utzhof.jpg",
    alt: "Handgemalter Schriftzug „Utzhof“ über der Eingangstür",
  },
} as const;

/* Stimmungsbilder fuer die Unterseiten. Probewebsite: generiert mit
   Higgsfield, klar als Platzhalter gekennzeichnet — kein echtes Praxisfoto.
   Sobald ein Fototermin stattgefunden hat, werden nur die Pfade getauscht. */
export const stimmungsbilder = {
  hofecke: { src: "/images/generated/praxis-hofecke.jpg", alt: "Leere Hofecke im alten Bauernhaus: gekalkte Wand, dunkler Holzbalken, tief eingelassenes Fenster" },
  holzbalken: { src: "/images/generated/praxis-holzbalken.jpg", alt: "Nahaufnahme eines alten, handbehauenen Eichenbalkens im Streiflicht" },
  eingang: { src: "/images/generated/praxis-eingang.jpg", alt: "Platzhalter: Eingangsbereich einer modernen Zahnarztpraxis" },
  empfang: { src: "/images/generated/praxis-empfang.jpg", alt: "Platzhalter: Empfang und Wartebereich einer Zahnarztpraxis" },
  behandlungsraum: { src: "/images/generated/praxis-behandlungsraum.jpg", alt: "Platzhalter: Behandlungsraum mit Zahnarztstuhl" },
  instrumente: { src: "/images/generated/praxis-instrumente.jpg", alt: "Platzhalter: Instrumentenablage, unscharf und abstrakt" },
  monitor: { src: "/images/generated/praxis-monitor.jpg", alt: "Platzhalter: Monitor mit abstrakter Grafik im Behandlungsraum" },
  /* Ersetzt das alte `praxis-team.jpg` (sterile Klinik-Stockoptik, blaue Wand,
     Masken unterm Kinn) — genau die Aesthetik, die PRODUCT.md als Anti-Referenz
     fuehrt. Neu: Gruppe im Flur eines alten Bauernhauses, gedaempfte Farben. */
  /* Fuer den Kopf der Leistungsseite. Der alte `praxis-behandlungsraum.jpg`
     zeigt eine beliebige Stadtpraxis mit Gardine und Estrich — dieser hier
     steht im Haus: gekalkte Wand, Eichenbalken, Fensterlaibung, Dielenboden.

     ACHTUNG: Behandlungsraeume muessen laut BAUPLAN.md echte Fotos sein. Bis
     zum Fototermin traegt das Bild deshalb die Marke „Platzhalter", nicht nur
     „Stimmungsbild" — es zeigt einen Raum, den es so noch nicht gibt. */
  behandlungsraumHof: {
    src: "/images/generated/praxis-behandlungsraum-hof.jpg",
    alt: "Platzhalter: Behandlungsraum unter einem alten Eichenbalken, gekalkte Wände, Dielenboden, Fenster mit Blick ins Grüne",
  },
  /* Fuer den Kopf der Kontaktseite: wer abnimmt, wenn man anruft. Wie alle
     Gesichter auf dieser Probewebsite ein Platzhalter und als solcher
     ausgezeichnet — die Bildunterschrift nennt bewusst KEINEN Namen. */
  behandler: {
    src: "/images/generated/behandler-portraet.jpg",
    alt: "Platzhalter-Porträt: Zahnarzt im weißen Kittel vor einer gekalkten Wand unter einem alten Holzbalken",
  },
  team: {
    src: "/images/generated/team-gemeinschaft.jpg",
    alt: "Platzhalter: vier Personen in Kittel, Kasack und Strickjacke stehen im Flur eines alten Bauernhauses",
  },
} as const;

/* Die Einzelportraets des Teams — Probewebsite.

   WICHTIG: generierte Platzhaltergesichter, keine realen Personen. Namen,
   Rollen und Fotofreigabe stehen laut PROJEKT.md noch aus. Deshalb traegt jede
   Karte eine sichtbare Kennzeichnung und es steht KEIN Name daran.

   Der Praxisinhaber bekommt bewusst kein erfundenes Gesicht, sondern eine
   Faktentafel (siehe app/team/page.tsx). Es gibt genau einen Inhaber — ein
   generiertes Portraet unter dieser Rolle waere das erfundene Bild einer
   realen, identifizierbaren Person.

   Die Rollentexte sind aus dem Leistungsspektrum abgeleitet, das die Praxis
   selbst fuehrt (siehe `leistungen`), und behaupten keine Qualifikation, die
   nicht bestaetigt ist. Beim Fototermin werden nur `bild`, `alt` und die
   Rollennamen getauscht. */
export const teamPortraets: { rolle: string; text: string; bild: string; alt: string }[] = [
  {
    rolle: "Prophylaxe",
    text: "Professionelle Zahnreinigung und Vorsorge — mit eigenen Intervallen für Implantatträger.",
    bild: "/images/generated/team-portrait-01.jpg",
    alt: "Platzhalter-Porträt: Frau in blaugrauem Kasack vor einer gekalkten Wand",
  },
  {
    rolle: "Assistenz",
    text: "Am Stuhl dabei, von der Vorbereitung bis zur Nachkontrolle.",
    bild: "/images/generated/team-portrait-02.jpg",
    alt: "Platzhalter-Porträt: Frau in blaugrauem Kasack an einer Fensterlaibung",
  },
  {
    rolle: "Empfang und Verwaltung",
    text: "Termine, Rückrufe und Heil- und Kostenpläne — die Stimme am Telefon.",
    bild: "/images/generated/team-portrait-03.jpg",
    alt: "Platzhalter-Porträt: Frau mit Brille im Haar an der Anmeldung",
  },
  {
    rolle: "Chirurgische Assistenz",
    text: "Assistenz bei Implantationen und operativen Eingriffen.",
    bild: "/images/generated/team-portrait-04.jpg",
    alt: "Platzhalter-Porträt: Mann in blaugrauem Kasack in einem Türdurchgang",
  },
];
