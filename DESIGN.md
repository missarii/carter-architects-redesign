# DESIGN.md — Carter Architects Redesign
> Stitch Design Taste export: the structured design specification for this project.
> Generated from the implemented build. Read this before editing UI.

## 1. Brand & intent

- **Project:** Editorial marketing site for Carter Architects, Inc. (Houston, TX).
- **Audience:** Texas commercial clients, developers, brokers — trust-first B2B.
- **One-line read:** Premium editorial architecture practice; calm, precise, permit-serious.
- **Single CTA intent:** "Start a project" (nav, hero, services, contact — no synonyms).

## 2. Tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| paper | #F6F1E8 | — | page background |
| paper-deep | #ECE4D4 | white/5 | raised panels |
| ink | #1C1917 | paper | text, dark sections |
| copper | #A35E28 | amber-200 accents | CTAs, highlights, motion |
| pine | #1E3329 | #13211B | blueprint band, 3D tint |
| night | — | #141210 | dark page background |

- **Type:** Fraunces Variable (display serif), Archivo Variable (sans + mono-tabular).
- **Never:** pure #000/#FFF surfaces, gradients as decoration, Inter + slate.
- **Radius:** 0 (architectural sharpness) except pills for icon buttons.
- **Borders:** 1px `color-mix(currentColor 15%)` rules; 25% for interactive.

## 3. Layout system

- Max width `max-w-7xl`, gutters `px-4 → sm:6 → lg:8`.
- Section rhythm `py-16 → lg:py-24`; gallery density (3/10).
- Variance 6/10: asymmetric grids — hero `1.4fr/1fr`, work `7/5/12` spans.
- Nav: single line, `h-16 → lg:72px`, 5 labels, hamburger under `lg`.
- Hero: eyebrow + 2-line headline + ≤20-word subtext + 2 CTAs; stats strip inside.

## 4. Motion system

- Engine: Motion (`motion/react`) + R3F for the 3D massing model + Lenis smooth scroll.
- Allowed: transform/opacity/SVG-stroke tweens, expo `[0.16,1,0.3,1]` easing.
- Banned: scroll listeners (use `useScroll`), `transition: all`,
  layout-property animation, rAF loops touching React state.
- Every animated surface honors `useReducedMotion()` → static final state.
- z-scale: nav 40 · menu 50 · (grain 60 reserved).

## 5. Component inventory

`Nav / Hero (+Tower3D) / SectionDivider / Practice / Services / BuildSequence /
Blueprint / Work / Clients / Contact / Footer / Reveal+effects / ui/{button,primitives}`.
Form: label-above-input, helper text, error slot, AA-contrast borders.

## 6. Skills that govern this file

TasteSkill v2-experimental (direction) · high-end-visual-design (premium calm) ·
impeccable (critique floor) · stitch-design-taste (this spec) ·
React Bits (kinetic patterns) · shadcn/ui (primitive structure).
