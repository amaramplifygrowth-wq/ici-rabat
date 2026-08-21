# Ici Rabat — AI-beeldprompts (pop art × riso comic stijl)

Snap ik helemaal — jij genereert de beelden met een AI-tool (Gemini/AI Studio,
ChatGPT, Midjourney, wat je maar gebruikt), stuurt ze terug, en ik zet ze in de
site, optimaliseer ze en bouw opnieuw. Hieronder de exacte prompts.

## Hoe te gebruiken

1. Kopieer per afbeelding de **volledige prompt** (stijlblok + scene) in je
   AI-tool.
2. Genereer op de aangegeven verhouding (4:3 landscape voor hero's, 1:1
   vierkant voor de overlap-foto's) — zet dat desnoods los in de tool in.
3. Stuur me de resultaten terug (gewoon als bijlage in de chat). Ik plaats ze
   in `src/assets/images/`, comprimeer ze, en vervang de placeholder-URL's in
   `src/data/articles.ts`.
4. Niet tevreden met een resultaat? Stuur de prompt + "nummer 3 maar meer
   avondsfeer" terug, en ik stel 'm bij.

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
contemporary-meets-traditional fashion appear where noted. Rich
Moroccan architectural detail: zellige tilework, horseshoe arches,
carved cedar wood, brass lanterns. No text or logos in the image unless
specified. High detail, poster-quality composition, dynamic
perspective.
```

---

## 1. Dar Rbatia — Renaissance gastronomique, Quartier Hassan

*Restaurant gastronomique dans un riad restauré, zellige traditionnel +
design contemporain, patio central.*

**Hero (4:3, `heroImage`)**
```
[stijlblok]
Scene: the candlelit interior courtyard (patio) of a restored Moroccan
riad restaurant at dusk. Traditional carved zellige tile walls and
horseshoe arches meet sleek modern marble dining tables and brass
pendant lanterns. An elegant couple in smart-casual Moroccan-modern
fashion is seated at a candlelit table with a beautifully plated
pastilla. A waiter in a fitted grey djellaba serves mint tea in the
background. Warm amber and coral lighting, deep navy night sky glimpsed
through an open roof (skylight), halftone shading in the shadows.
```

**Overlap detail (1:1, `heroOverlapImage`)**
```
[stijlblok]
Scene: extreme close-up, top-down comic-style illustration of a
signature pastilla (Moroccan sweet-savory pigeon/chicken pie) dusted
with cinnamon and powdered sugar, on an ornate brass tray, next to a
glass of fresh mint tea being poured from height. Rich texture detail,
warm gold and cinnamon-brown tones with a coral halftone background.
```

---

## 2. Café Maure des Oudayas — thé face au Bouregreg

*Terrasse légendaire perchée sur les remparts almohades, vue sur
l'estuaire du Bouregreg.*

**Hero (4:3)**
```
[stijlblok]
Scene: a wide, dramatic view from the terraced Café Maure inside the
Kasbah des Oudayas, looking out over the Bouregreg river estuary toward
Salé at golden hour. Whitewashed and blue Andalusian-garden walls frame
the foreground; small round brass tables with mint tea glasses and
pastries dot the terrace, with a few stylish patrons in sunglasses
chatting. The Hassan Tower is visible in the far distance across the
water. Sky is a bold coral-to-magenta sunset gradient with halftone
clouds and circling gulls.
```

**Overlap detail (1:1)**
```
[stijlblok]
Scene: close-up comic illustration of a traditional Moroccan mint tea
ceremony — an ornate silver teapot pouring tea from height into a small
glass, steam rising, next to a plate of golden Moroccan pastries
(cornes de gazelle, chebakia). Blue-and-white Oudayas tilework pattern
visible in the background, cyan and gold color grade.
```

---

## 3. La Brûlerie de l'Agdal — specialty coffee

*Micro-torréfaction artisanale, grains éthiopiens, pâtisserie viennoise
au levain, quartier Agdal moderne.*

**Hero (4:3)**
```
[stijlblok]
Scene: the interior of a modern specialty coffee roastery-café in
Agdal, Rabat. A young barista with a beard and rolled-up sleeves works
a gleaming espresso machine behind a concrete counter; a small vintage
coffee roaster with visible gears sits in the corner with steam/smoke
rising in halftone swirls. Neon-style signage on the wall reads
"BRÛLERIE" in bold poster lettering (integrate naturally, not as a
sticker). Warm mustard-yellow walls, hanging plants, patrons on laptops
at communal wood tables. Cyan and burnt-orange color contrast.
```

**Overlap detail (1:1)**
```
[stijlblok]
Scene: close-up of a barista's hands pouring latte art into a ceramic
cup, next to a flaky sourdough Viennoiserie pastry (croissant) on a
marble slab, coffee beans scattered artfully around. Warm brown and
mustard tones with magenta halftone background accent.
```

---

## 4. Le Dhow — dîner au fil de l'eau, Bouregreg

*Restaurant sur un boutre en bois amarré au Bouregreg, soirées jazzy,
fruits de mer.*

**Hero (4:3)**
```
[stijlblok]
Scene: a beautifully restored wooden dhow (traditional sailing boat)
moored on the Bouregreg river at night, converted into an elegant
restaurant, strings of warm bulb lights along its rigging. The lit-up
Kasbah des Oudayas walls glow in the background across dark water with
reflections. Well-dressed diners sit at a candlelit deck table with a
platter of fresh oysters and shellfish. Deep navy-blue night sky with
halftone stars, warm amber boat lights, magenta reflections on the
water.
```

**Overlap detail (1:1)**
```
[stijlblok]
Scene: close-up comic illustration of a silver platter piled with fresh
oysters, langoustines and lemon wedges on crushed ice, a glass of white
wine beside it, warm string lights blurred in the background bokeh
(rendered as halftone dots). Navy and gold color palette.
```

---

## 5. Villa Mandarine — déjeuner secret, Souissi

*Oasis arborée de trois hectares, orangers, cuisine du marché, quiétude
absolue.*

**Hero (4:3)**
```
[stijlblok]
Scene: a sun-dappled garden terrace lunch set among rows of orange
trees heavy with fruit, dappled light filtering through leaves. A
long wooden table set with a fresh market-cuisine spread (salads,
grilled vegetables, tagines) under a canopy of white fabric drapes. A
gardener-chef figure in a straw hat tends the orange trees in the
background. Bright citrus-green and orange color palette with warm
mustard-yellow halftone sunlight rays.
```

**Overlap detail (1:1)**
```
[stijlblok]
Scene: close-up of hands picking a ripe orange from a tree branch, with
a rustic ceramic bowl of just-harvested oranges resting on a wooden
table below, dappled sunlight halftone pattern. Vivid orange and green
palette.
```

---

## 6. Le Cosmopolitan — Art Déco face aux remparts, Hassan

*Villa Art Déco des années 1930, gastronomie franco-marocaine,
institution rbatie.*

**Hero (4:3)**
```
[stijlblok]
Scene: the grand facade of a 1930s Art Deco villa restaurant at blue
hour, geometric Art Deco architectural lines, arched windows glowing
warm amber from within, palm trees flanking the entrance, a vintage
black car parked out front. The ancient stone ramparts of Rabat's
Kasbah are visible looming behind the villa's rooftop. Elegant patrons
in 1930s-inspired evening wear arrive at the entrance. Deep navy dusk
sky with halftone texture, warm gold architectural lighting, coral
accent in the sky.
```

**Overlap detail (1:1)**
```
[stijlblok]
Scene: close-up of an elegantly plated franco-marocain dish (e.g. duck
tagine with candied oranges) on white china with Art Deco gold-rimmed
detailing, a crystal wine glass beside it, geometric Art Deco pattern
tablecloth visible. Warm gold and navy color grade, halftone shading.
```

---

## Daarna (optioneel, tweede ronde)

Zodra deze 6 hero's + overlaps erin staan, kan ik voor elk artikel ook nog
prompts geven voor:
- 4 **gallery-afbeeldingen** per artikel (nu ook nog stockfoto's van Unsplash)
- Geïllustreerde **auteursportretten** i.p.v. stockfoto-avatars
- Een paar "VS"-vergelijkingsposts (zoals je Instagram-voorbeelden) voor een
  nieuwe rubriek op de site, bv. "Agdal vs Hassan" of "Taxi vs Tram"

Zeg maar of je die batch ook wil, dan zet ik ze voor je klaar.
