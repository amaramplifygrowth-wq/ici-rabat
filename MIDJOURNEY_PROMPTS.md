# Ici Rabat — Midjourney-prompts (decoratieve beelden)

Puur decoratief, geen beweringen over specifieke zaken of personen — dus vrij
te genereren en te gebruiken. Tekst laat ik altijd weg uit de prompt: de site
overlayt zelf de gele comic-caption-boxjes (die stijl heb ik al gebouwd), dat
oogt scherper dan wat Midjourney zelf rendert.

## Workflow

1. Plak de hele regel (incl. `/imagine prompt:` en de `--`parameters) in
   Midjourney.
2. Los beeld uitkiezen/upscalen (U1–U4), downloaden.
3. Stuur het terug — ik plaats 'm in `src/assets/images/`, comprimeer,
   en verwerk 'm in de juiste component.
4. `--v 6.1 --style raw` staat er steeds bij voor de scherpe, minder "AI-gladde"
   comic-look. Voeg zelf `--sref` toe met een linkje naar je hero-poster als je
   Midjourney's style-reference wil gebruiken voor extra consistentie tussen
   alle beelden.

---

## A. Categorie-headerbanners (4x, breed 21:9)

Komen als sfeervolle banner bovenaan elke categoriepagina, met de paginatitel
er via CSS overheen als comic-caption.

**1. Horeca & Tables**
```
/imagine prompt: wide panoramic comic-book illustration of a bustling
Rabat café terrace street scene at golden hour, mint tea glasses and
tagines on round brass tables, string lights overhead, stylish locals
chatting, bold pop-art halftone shading, thick black ink outlines, flat
saturated coral-orange, magenta and mustard-yellow palette with navy-blue
shadow accents, riso-print texture, no text, no logos, no signage
lettering --ar 21:9 --style raw --v 6.1
```

**2. Événements (cultuuragenda)**
```
/imagine prompt: wide panoramic comic-book illustration of a lively
outdoor cultural festival scene at the Chellah ruins in Rabat at dusk,
string lights, musicians performing, a crowd silhouetted against warm
stage lighting, ancient stone arches and storks nesting on towers in the
background, bold pop-art halftone shading, thick black ink outlines,
magenta and cyan stage-light glow against a deep navy night sky, riso
print texture, no text, no banners, no signage lettering --ar 21:9
--style raw --v 6.1
```

**3. Lifestyle**
```
/imagine prompt: wide panoramic comic-book illustration of a stylish
Rabat lifestyle scene: a modern boutique-lined street in the Agdal/Ville
Nouvelle district, young Moroccans in contemporary fashion walking past
concept stores and plant-filled cafés, palm trees, an Art Deco building
facade, bold pop-art halftone shading, thick black ink outlines, cyan,
coral and mustard-yellow palette, riso print texture, no text, no shop
sign lettering --ar 21:9 --style raw --v 6.1
```

**4. À Propos (over de redactie)**
```
/imagine prompt: wide panoramic comic-book illustration of a rooftop
editorial team scene overlooking Rabat's skyline with the Hassan Tower
and Kasbah des Oudayas in the distance at sunset, a diverse group of
young journalists and photographers with notebooks, cameras and a
laptop gathered around a table, warm string lights, bold pop-art
halftone shading, thick black ink outlines, coral-to-magenta sunset sky
with navy silhouettes, riso print texture, no text --ar 21:9 --style
raw --v 6.1
```

---

## B. Redacteur-avatars (2x, vierkant 1:1)

Vervangen de huidige stockfoto-avatars door een geïllustreerde huisstijl —
generieke, stijlvolle comic-portretten, geen poging tot een exact portret.

**Nadia El Fassi — Rédactrice en chef Gastronomie**
```
/imagine prompt: circular comic-book portrait illustration of a
confident young Moroccan woman food journalist, dark hair in a loose
bun, warm smile, wearing a stylish green blazer, bold black ink
outlines, flat pop-art color fill, halftone shading on the face,
mustard-yellow flat background, waist-up three-quarter angle, riso
print texture, no text --ar 1:1 --style raw --v 6.1
```

**Yassine Benjelloun — (auteur Dom's Café artikel)**
```
/imagine prompt: circular comic-book portrait illustration of a young
Moroccan male writer with short curly hair and a light beard, glasses,
wearing a casual denim jacket, warm friendly expression, bold black ink
outlines, flat pop-art color fill, halftone shading on the face,
coral-orange flat background, waist-up three-quarter angle, riso print
texture, no text --ar 1:1 --style raw --v 6.1
```

---

## C. Losse illustraties (decoratief, overal inzetbaar)

**5. 404 / "pagina niet gevonden"**
```
/imagine prompt: quirky comic-book illustration of a confused tourist
character in sunglasses studying a folded paper map upside-down on an
empty cobblestone street in Rabat's medina, a stray cat watching from a
doorway, bold pop-art halftone shading, thick black ink outlines, warm
coral and mustard-yellow palette with navy shadow accents, riso print
texture, empty speech bubble left blank, no text --ar 4:3 --style raw
--v 6.1
```

**6. Lege-resultaten state (bv. filter zonder resultaten)**
```
/imagine prompt: minimal comic-book illustration of an empty round
café table with just one empty mint tea glass and a small "closed"
shutter sign icon rendered as a simple graphic shape (no text), soft
halftone shading, bold black ink outline, mustard-yellow flat
background, centered composition, riso print texture --ar 1:1 --style
raw --v 6.1
```

**7. Nieuwsbrief-illustratie (footer / "La Gazette Hebdomadaire")**
```
/imagine prompt: small comic-book illustration of a folded newspaper
and an envelope with a wax seal shaped like a star, tied with string,
resting on a café table with a mint tea glass beside it, bold pop-art
halftone shading, thick black ink outlines, coral-orange and
mustard-yellow palette on a deep navy background, riso print texture,
no text --ar 1:1 --style raw --v 6.1
```

**8. Decoratieve textuur-achtergrond (optioneel, voor grote lege secties)**
```
/imagine prompt: seamless repeating pattern illustration of small
Moroccan motifs — zellige tile fragments, mint tea glasses, palm
leaves, halftone dots — flat pop-art style, thick black ink outlines,
coral-orange, magenta, mustard-yellow and navy-blue on a cream paper
background, riso print texture, tileable pattern, no text --ar 1:1
--style raw --v 6.1 --tile
```

---

## Daarna

Zeg je nog steeds "geef meer" — dan kan ik ook nog:
- **Gallery-uitbreidingen** voor Ba Fares / Indian Flavors / Dom's Café áls
  je ooit meer sfeerbeelden per artikel wil (die 3 hebben al eigen beelden,
  dus optioneel).
- De **"VS"-rubriek** (zoals je Instagram) — sfeer-vergelijkingen zonder
  concrete beweringen, bv. "Ochtend vs Avond in de Medina" of "Zomer vs
  Winter aan de Bouregreg".
- Een **seizoensgebonden hero-variant** zodat de poster bovenaan af en toe
  kan wisselen.
