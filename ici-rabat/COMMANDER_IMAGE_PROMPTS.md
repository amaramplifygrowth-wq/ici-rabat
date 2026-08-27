# Ici Rabat — AI-beeldprompts voor de "Commander"-rubriek

Zelfde stijl als de rest van de site (zie `AI_IMAGE_PROMPTS.md`), nu voor de
5 nieuwe restaurants in de Commander-directory. Ze delen momenteel allemaal
dezelfde placeholder-foto — dit zijn de prompts om daar 5 losse, herkenbare
beelden voor te genereren.

## Hoe te gebruiken

1. Kopieer per restaurant de **volledige prompt** (stijlblok + scene) in
   ChatGPT (of welke AI-tool je gebruikt).
2. Genereer op **4:3 landscape** (dit is de kaartfoto/heroImage, geen
   vierkant nodig zoals bij de overlap-foto's elders op de site).
3. Stuur de resultaten terug — ik zet ze in `src/assets/images/`,
   comprimeer ze, en vervang de placeholder in `src/data/articles.ts` bij
   het betreffende restaurant.
4. Niet tevreden? Stuur de prompt + wat je anders wil terug, dan stel ik
   'm bij.

Let op: de prompts beschrijven sfeer en gerechten, geen bestaande logo's of
merknamen — dat voorkomt gedoe met beeldrechten en logo-verminking door de
AI. Het logo/de naam van elke zaak blijft gewoon los in tekst op de kaart
staan, zoals nu al het geval is.

---

## Het stijlblok (plak dit vóór ELKE scene-beschrijving hieronder)

```
Editorial comic-book illustration in a bold pop-art meets risograph-print
style. Thick black ink outlines, flat saturated colors, visible CMYK
halftone dot-screen shading in skies, shadows and gradients (like an
offset-printed comic or riso zine). Warm sunset palette of coral-orange,
hot pink/magenta and mustard yellow contrasted with cool navy-blue and
cyan accents. Retro Moroccan travel-poster energy fused with a modern
urban streetwear illustration style. Stylish young Moroccans in
contemporary-meets-traditional fashion appear where noted. No text, no
logos, no readable signage in the image. High detail, poster-quality
composition, dynamic perspective.
```

---

## 1. Panda To Go — Sushi & Wok, Hay Riad

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: a sleek modern Asian fast-casual counter in Rabat's Hay Riad
district, evening light through large storefront windows. A chef in a
black apron plates a wooden board of fresh sushi and maki rolls under
warm pendant lighting, chopsticks and soy-sauce dishes arranged beside
a sizzling wok tossing vegetables and noodles in the background,
flames caught mid-flare in comic halftone style. A stylish young
Moroccan couple wait at a minimalist pickup counter with a to-go bag.
Coral-orange and magenta dusk light bleeding through the window glass,
cyan neon accent glow from a kitchen display.
```

---

## 2. Instafood Rabat — Tacos Français & Burgers, Souissi

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: a vibrant fast-food kitchen counter inside a modern shopping
mall in Souissi, Rabat. A cook wraps a generous French-style tacos
(griddled tortilla stuffed with meat, fries, and melted cheese sauce)
on a steel griddle, cheese sauce dripping in a glossy pour caught
mid-motion. A tall smash burger with melted cheddar sits stacked on a
tray beside it, steam rising in halftone swirls. Young Moroccan
students in casual streetwear lean over the counter ordering, mall
skylight glowing warm amber above, coral and mustard color grade.
```

---

## 3. Yoka Sushi — Cuisine Japonaise, Agdal

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: an elegant Japanese restaurant dining room in Agdal, Rabat,
dusk light through tall windows. A sushi chef behind a polished wood
counter arranges an elaborate boat-shaped platter of nigiri, maki and
sashimi, knife mid-slice through a piece of salmon in dynamic comic
motion-line style. Hanging paper lanterns and minimalist black-and-red
lacquered decor frame the scene. Well-dressed young Rbatis are seated
at a low table in the background sharing the platter with chopsticks.
Deep navy evening tones contrasted with warm coral lantern light and
cyan accent reflections on lacquered surfaces.
```

---

## 4. GreenChili — Burgers Faits Maison & Végétarien, Mahaj Riad

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: a cozy, plant-filled homestyle burger kitchen in Mahaj Riad,
Rabat, warm afternoon light. A cook's hands stack a thick handmade
burger patty, melted cheese, fresh lettuce and tomato on a toasted
brioche bun, caught mid-assembly with ingredients slightly airborne in
comic motion-line style. A colorful vegetarian bowl with grilled
vegetables and greens sits beside it on a rustic wooden counter,
hanging plants and mustard-yellow tiled walls in the background. Warm
mustard and coral tones with a fresh green accent from herbs and
vegetables, halftone shading in the steam.
```

---

## 5. Primos Chicken — Poulet, Tacos & Burgers, Agdal

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: a lively fried-chicken fast-food counter in Agdal, Rabat, warm
evening neon-adjacent lighting (no readable signage). A cook holds a
platter piled high with crispy golden fried chicken wings and
drumsticks, steam rising in bold halftone swirls, next to a loaded
chicken burger and a wrapped tacos on parchment paper. A phone resting
on the counter shows a stylized chat-bubble icon (no logos, no text) to
hint at direct ordering. Young Moroccans in streetwear crowd the
takeout window in the background. Bold coral-orange and mustard-yellow
palette with deep navy night sky and magenta highlights.
```

---

## 6. Indian Flavors — Cuisine Indienne Authentique, Agdal

Let op: dit restaurant heeft al echte, eigen foto's (op Firebase Storage) en
staat al goed op de site. Deze prompt is dus **optioneel** — alleen nodig
als je 'm in dezelfde geïllustreerde stijl als de 5 hierboven wil, zodat
de hele Commander-grid er visueel als één set uitziet.

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: an intimate Indian restaurant kitchen pass in Agdal, Rabat, warm
evening light. An Indian chef in whites lifts a sizzling tandoor skewer
of butter chicken from a traditional clay tandoor oven, orange flames
and smoke caught in bold halftone style, next to a stack of fresh
garlic naan bread and small copper bowls of curry. A young Moroccan
couple wait at a nearby table, warm spice-toned lighting, coral and
deep red color grade with a mustard-yellow accent, hints of Agdal's
modern street visible through a window in the background.
```

---

## Daarna (optioneel)

Zodra deze 5 beelden erin staan, kan ik ook nog prompts geven voor een
tweede afbeelding per restaurant (bijvoorbeeld een close-up van het
signatuurgerecht, zoals de "overlap"-detailfoto's bij de redactionele
Horeca-artikelen) — zeg maar of je die batch ook wil.
