# Bildbriefing — Zahnarztpraxis Dr. Zipplies

**Für:** Basti, zum Generieren in der eigenen Higgsfield-Session
**Projekt:** Website-Neubau, siehe `BAUPLAN.md`
**Stand:** 14.08.2026

---

## Worum es geht

Die Website ist der Neubau für die **Zahnarztpraxis Dr. med. dent. Robert Zipplies** am
**Utzhof, Thalreit 7, 83064 Raubling** — ein historischer bayerischer Bauernhof im Inntal,
wenige Autominuten südlich von Rosenheim. Die Praxis sitzt seit 1994 in diesem Haus.

Die Leitidee der ganzen Seite: **„Der Zahnarzt, zu dem man rausfährt."** Der Standort
liegt außerhalb, ist schwer zu finden, und genau daraus macht die Seite ihre Stärke.
Deshalb braucht sie vor allem eines: **Bilder vom Weg dorthin.**

**Bildsprache:** ländlich, unaufgeregt, herbstlich-diesig, nie klinisch. Die Farbwelt der
Seite ist vom Gebäude abgelesen — weiß gekalkter Putz, blaugraue Fensterläden, ockerner
Giebel. Die Bilder müssen in dieselbe Palette fallen: gedecktes Schieferblau, warmes
Sandweiß, verwitterter Ocker.

---

## Zwei harte Regeln

**1. Nichts Generiertes darf als die echte Praxis gezeigt werden.**
Team, Behandlungsräume, Geräte und das Haus selbst müssen echte Fotos sein. Ein
generiertes Bild, das als „unsere Praxis" auftritt, ist irreführende Werbung — und fällt
Patienten beim ersten Besuch sofort auf. Generiert wird nur **Umgebung und Atmosphäre**:
Landstraße, Feld, Nebel, Holz, Licht.

**2. Kein Mensch, kein Zahn, kein Gerät.**
Auf keinem generierten Bild dieser Seite ist ein Mensch, ein Gesicht, eine Hand, ein Zahn,
ein Implantat oder ein zahnmedizinisches Instrument zu sehen. Nicht aus Vorsicht, sondern
weil die Seite genau davon lebt, dass sie nicht wie ein Praxis-Prospekt aussieht.

**Ablage:** generierte Bilder nach `public/images/generated/`, echte Fotos nach
`public/images/`. Die Trennung bleibt sichtbar, damit später niemand ein Stimmungsbild
versehentlich als Praxisfoto einsetzt.

---

## Stil-Baustein

**An jeden Bild-Prompt hinten anhängen:**

```
Shot on a medium-format camera with a 50mm-equivalent lens, natural available
light only, no artificial or studio lighting. Muted desaturated palette of slate
blue, warm sand off-white and weathered ochre. Soft overcast diffusion, fine film
grain, gentle contrast. Realistic documentary photography — not an illustration,
not CGI, not a render.

Negative prompt: people, faces, hands, silhouettes, text, lettering, signage,
road signs, logos, watermarks, cars, tractors, modern buildings, glass facades,
solar panels, medical or dental equipment, teeth, oversaturated colors, HDR,
heavy vignette, lens flare, tilt-shift, fisheye, wide-angle distortion.
```

---

# Die Bilder

## Bild 1 · Etappe 01 — „Raus aus Raubling"

| | |
|---|---|
| **Wofür** | Erste Etappe der scroll-gesteuerten Anfahrts-Sequenz auf der Startseite |
| **Einsatzort** | Vollbild, füllt den ganzen Bildschirm |
| **Format** | 16:9 quer, mindestens 2560 px breit |
| **Textzone** | Unten links steht weißer Text („Etappe 01 · Raus aus Raubling" plus zwei Zeilen). Das **untere linke Viertel muss ruhig und kontrastarm** sein — Straßenbelag oder Wiese, kein Detail. |
| **Erzählt** | Man hat den Ort verlassen. Die Bebauung hört auf, es wird still. |

```
A two-lane rural road in the Inn valley of Upper Bavaria in early autumn, seen
from driver's eye height of about 1.4 metres, standing in the middle of the lane.
The road runs away from the camera and disappears over a slight rise in the
middle distance. On the left a freshly mown meadow with two round hay bales, on
the right a row of old unpruned fruit trees. Low ground mist lies in the fields
at knee height. On the horizon the Chiemgau alpine foothills as a pale blue-grey
silhouette, no dramatic peaks. Overcast morning sky, no direct sun, no shadows.
The lower left quarter of the frame is plain asphalt and grass verge, low in
contrast and free of detail.
```

---

## Bild 2 · Etappe 02 — „Nach Thalreit"

| | |
|---|---|
| **Wofür** | Zweite Etappe derselben Sequenz |
| **Einsatzort** | Vollbild |
| **Format** | 16:9 quer, mindestens 2560 px breit |
| **Textzone** | wie Bild 1 — unten links ruhig halten |
| **Erzählt** | Der Text daneben lautet: *„An der Hauptstraße steht kein Praxisschild. Das ist keine Nachlässigkeit, hier steht einfach keins."* Auf dem Bild darf deshalb **wirklich kein Schild** stehen. |

```
The same rural road a few hundred metres further on, now curving gently to the
right past a tall unclipped hedgerow of hazel and blackthorn, camera again at
driver's eye height in the middle of the lane. One weathered wooden utility pole
stands at the right verge with a single sagging wire. Behind the hedge the tiled
roofs of two farmsteads are just visible over the top — no village centre, no
shops, no signposts, no road markings other than the worn centre line. Early
autumn morning, the mist thinning, flat overcast light. The right third of the
frame is open pale sky and hedge, the left two thirds road surface and verge.
```

---

## Bild 3 · Etappe 03 — „Die Hofeinfahrt"

| | |
|---|---|
| **Wofür** | Dritte Etappe, direkt vor dem Ankommen |
| **Einsatzort** | Vollbild |
| **Format** | 16:9 quer, mindestens 2560 px breit |
| **Textzone** | unten links ruhig |
| **Erzählt** | Man biegt ab. Der Kiesweg führt an den Parkplatz. **Wichtig:** Das Hofgebäude darf noch nicht erkennbar sein — das echte Haus kommt erst in Etappe 04 als echtes Foto. |

```
A gravel farm track branching off a country road and running between two old
broad-crowned lime trees toward a farmyard, seen from a car approaching at
walking pace, camera 1.4 metres high and slightly left of the track's centre.
Loose grey gravel with two worn wheel ruts and a strip of coarse grass down the
middle. Low mossy stone edging and unmown grass at the sides, a few fallen leaves.
Beyond the trees the yard is only suggested — a pale sunlit patch of wall and a
shadowed gap between buildings, deliberately out of focus and not legible as a
structure. Early autumn, soft overcast light, the last of the morning mist
hanging between the trees.
```

---

## Bild 4 · Innenraum — für die Unterseite „Praxis"

| | |
|---|---|
| **Wofür** | Stimmungsbild auf `/praxis`, das die Bauweise des Hauses zeigt |
| **Einsatzort** | Halbe Breite neben Text |
| **Format** | 4:3 quer |
| **Bildunterschrift** | Wird als Stimmungsbild ausgezeichnet, **nicht** als Aufnahme der Praxisräume |
| **Erzählt** | Das Haus ist alt, die Wände sind dick, das Licht ist weich. Deshalb ist es hier ruhig. |

```
An empty corner inside a converted 18th-century Bavarian farmhouse: thick
whitewashed lime-plaster wall meeting a dark waxed timber beam and a floor of
wide worn oak planks. A single deep-set window with a plain wooden frame lets in
soft north daylight; the window reveal is almost half a metre deep because the
wall is that thick, and the plaster edge is softly rounded from many coats of
limewash. The room is completely empty — no furniture, no equipment, no pictures,
no curtains. Camera at 1.5 metres, straight on, slight natural falloff toward the
corners. Calm, clean and quietly lived-in, not rustic kitsch, no folkloric
decoration.
```

---

## Bild 5 · Holzdetail — Hintergrund für „Die eine Zeile" *(optional)*

| | |
|---|---|
| **Wofür** | Möglicher Hintergrund für die Sektion mit dem einen großen Satz |
| **Einsatzort** | Volle Breite, Text liegt darüber |
| **Format** | 21:9 sehr breit |
| **Textzone** | **Rechte zwei Drittel müssen fast leer sein** — dort steht der Satz |
| **Hinweis** | Nur einsetzen, wenn die Sektion sonst zu leer wirkt. Aktuell steht sie ohne Bild, und das ist die bessere Lösung. |

```
Extreme close-up of a weathered oak beam in an old Bavarian farmhouse, raking
morning light travelling across the grain from the left, showing visible adze
marks from hand-hewing and one square hand-forged iron nail head. Warm sand and
grey-brown tones, very fine detail on the left, almost abstract. The right two
thirds of the frame fall away into soft even shadow and hold no detail at all.
```

---

## Video · Hintergrund für die Ankunfts-Sektion *(optional)*

| | |
|---|---|
| **Wofür** | Stummes Loop-Video hinter dem Hero, statt des Standbilds |
| **Format** | 16:9, 6 Sekunden, nahtlos loopbar |
| **Bedingung** | Wird nur eingesetzt, wenn es **unter 2 MB** bleibt. Bei `prefers-reduced-motion` wird es durch das Standbild ersetzt. Sonst lieber gar kein Video. |

```
Slow forward dolly along a misty two-lane country road in the Bavarian Inn valley
at sunrise, as if filmed from a car moving at about 30 km/h. Mown meadows and old
fruit trees pass on both sides, the alpine foothills pale on the horizon. One
continuous shot, no cuts, no camera shake, gentle forward drift only. No people,
no vehicles, no road signs. Six seconds, seamlessly loopable, muted natural colour
grade, soft overcast sunrise light.
```

---

## Was danach passiert

Bilder nach `public/images/generated/` legen und Bescheid geben. Getauscht werden dann nur
die `bild`-Felder im Array `etappen` in `content/praxis.ts` — die Mechanik der Sequenz
bleibt unverändert.

**Etappe 04 („Angekommen") bleibt das echte Foto** der handgemalten Lüftlmalerei über der
Eingangstür. Das Ankommen muss echt sein, sonst kippt der ganze Abschnitt.

## Was Higgsfield nicht liefern kann

Diese Aufnahmen brauchen einen Fototermin vor Ort und stehen als offener Punkt bei
Dr. Zipplies:

- Team (Namen, Rollen, Fotofreigabe)
- Behandlungsräume und Empfang
- Das Haus in weiteren Ansichten und Jahreszeiten
- Der Parkplatz und der ebenerdige Eingang — beides Verkaufsargumente, die die Seite
  behauptet und bisher nicht zeigt
