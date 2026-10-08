# DESIGN.md — iLe Gaming Studios

## 1. Objective

Complete visual identity + website redesign for iLe Gaming Studios (Lusaka, Zambia → Cambridge, UK).
Job of the site: make a Zambian gaming/AI studio feel world-class and unmistakably Zambian —
not a generic dark-neon tech template. Direction: **Zamrock Futurism** — the warmth and grain of
1970s Zamrock album art (copper, burnt orange, brown-black) fused with modern WebGL 3D and
editorial type.

## 2. Product Context

- Company: iLe Gaming Studios — 4 divisions: Spatial Intelligence Lab, Game Studio (UE5+AI),
  Entertainment Studio (film/holographics/ads), Gaming School (Cambridge/CADGI accredited).
- Audience: African creative talent, international partners/investors, Cambridge academics.
- Surfaces: marketing site, 6 hash-routed pages (home, spatial, entertainment, games, school, contact).
- Real assets on disk: `founder_chris.jpg`, `spatial_lab.jpg`, `entertainment_studio.jpg`,
  `game_studio.jpg`, `hero_afro_studio.jpg`, `gaming_school_class.jpg` (all under `/assets/images/`).

## 3. Visual Foundations

### Color (all values final)

```
--bg-0:        #0D0A07   Zamrock night — warm brown-black base (NOT blue-black)
--bg-1:        #161009   raised surface
--bg-2:        #201710   hover surface
--copper:      #E8853B   primary accent — hot copper (Copperbelt / flag orange kin)
--copper-deep: #B45A1E   pressed states, borders
--ember-red:   #DE2010   flag red — REC dot, destructive/badge ONLY, never decoration
--savanna:     #2E9E44   flag green kin — "live/success" statuses only
--paper:       #F2E9DC   primary text — warm eagle white
--sand:        #B3A188   secondary text
--bark:        #6E5F53   muted text, hairline rules
--line:        rgba(242,233,220,0.08)   hairlines
```

Copper #E8853B on #0D0A07 ≈ 7:1 contrast (OK for text). Sand #B3A188 on #0D0A07 ≈ 7:1 (OK body).

### Type

```
display: 'Bricolage Grotesque', 'Outfit', system-ui   — H1/H2/H3, 700–800, tight tracking (-0.03em)
body:    'Instrument Sans', 'Inter', system-ui         — 16/1.6, 400–500
mono:    'JetBrains Mono', monospace                    — eyebrows, stats, labels, uppercase +0.12em
```

Fallbacks are style-matched; layout must hold if Google Fonts fails (system-ui metrics checked).

### Logo

Geometric African fish eagle mark: three ascending angular wing strokes rising from a copper
diamond (the mineral). Inline SVG, copper gradient fill. Wordmark: "iLe" in display + "GAMING
STUDIOS" in mono eyebrow. Same mark is the favicon.

### Signature elements (the 2 memorable things)

1. **Copper torus-knot sculpture** — full WebGL hero object (three.js / react-three-fiber),
   metallic copper, rotating slowly, floating copper shards, mouse parallax.
2. **Copper duotone photo treatment** — every studio photo gets
   `sepia + saturate + hue-rotate` CSS grading so all imagery sits in the same warm Zamrock world.

### Layout

- Full-bleed 3D hero; container max 1240px; generous section rhythm (7rem).
- Marquee strip under hero: copper band, ink text, scrolling credits-style (Zamrock ticket stub).
- Cards: flat surfaces (bg-1), hairline border, radius 18px, numbered eyebrows where content is a
  real sequence. NO glassmorphism-on-gradient, NO neon glow.
- Images: duotone treatment, radius 18px, caption bar with mono label.

## 4. Accessibility

- Body text ≥ 4.5:1 (sand on bg-0 passes; paper passes everywhere).
- focus-visible: 2px copper ring + 2px offset on ALL interactive elements (never outline:none).
- Tap targets ≥ 44px on mobile; mobile nav is a full overlay panel.
- 3D canvases: `aria-hidden="true"` (decorative), plus `prefers-reduced-motion` disables
  auto-rotation, marquee scroll, and reveal animations. Static poster frame remains.

## 5. Voice & Tone

Confident, specific, zero hype-words ("seamlessly", "revolutionary" are out). Verb-first CTAs:
"Start a project", "Explore the catalog", "Apply for the next cohort". Plain description of what
each division actually does. Sentence case everywhere except mono eyebrows (uppercase by role,
not decoration).

## 6. Implementation Practices

- React 19 + Vite 8; three.js via `@react-three/fiber` v9 + `@react-three/drei` v10
  (Environment with inline Lightformers — offline-safe, no remote HDRI fetch).
- One CSS file (`src/index.css`), CSS variables as the only theme carrier, flat single-class
  selectors. Inline SVG icons (no emoji, no icon font).
- All course/game/service data arrays preserved verbatim from the previous build.

## 7. Anti-Patterns (banned on this project)

- Cyan/purple gradients, neon glow shadows (the previous design's defaults).
- Emoji as icons or decoration (previous design used 🧠🎬🎮🎓 etc. — all replaced by SVG).
- Unsplash hotlinks for people/team photos — replaced by monogram tiles or local assets.
- "Floating 47% YoY" stat-card trios; gradient hero with white sans on top.
- Em-dash overuse in copy.

## 8. Decision-Making

Every non-obvious choice gets a Decision Trace entry in the delivery notes (decision / reason /
alternatives / tradeoff). Trace survives so individual tokens can be swapped without redesign.

## 9. Workflow

DESIGN.md lives at project root. Future passes read it first (Move 0 of design-blueprint);
delta-only amendments with traces. DESIGN_NOTES.md records user reactions across passes.
