# Carter Architects, Inc. — Website Redesign

A modern, editorial redesign of [carterarchitectsinc.com](https://carterarchitectsinc.com/) —
a full-range architecture & design firm in Houston, Texas — built with **React + Vite +
Tailwind CSS v4 + Motion**, and art-directed by **TasteSkill**.

> **Live:** `npm run dev` → http://localhost:5174/

## 1. What this is

The original site is a plain brochure site (Home / Services & Projects / Contact).
This rebuild preserves **100% of the real content** — services, credentials,
34-client roster, address/phones/email — as a single-page editorial experience:

| Section | Content (all real, from the live site) |
|---|---|
| Hero | Tagline + animated drafting canvas |
| Practice | Mark Carter 30+ yrs, TX license, RAS, Texas A&M, AIA |
| Services | Programming, As-Builts/CAD, Docs, TI & Interiors, CA, Code/ADA |
| Build Sequence | 4-phase process with scroll-driven tower |
| Blueprint | Process band: Survey → Plan → Document → Administer |
| Work | Industrial & Oil/Gas, Corporate Office, Restaurant & Retail |
| Clients | All 34 names: Prologis, CBRE, Colliers, Transwestern, F45… |
| Contact | 21175 State Hwy 249 Ste 289, Houston TX · (281) 955-0800 · mark@carterarchitectsinc.com |

## 2. Quickstart

```bash
cd "Carter Architects, Inc"
npm install
npm run dev      # http://localhost:5174/
npm run build    # production build → dist/
npm run preview  # preview the production build
```

**Requirements:** Node 18+ · npm 9+.

## 3. Project structure

```
├── index.html, vite.config.ts, package.json, skills-lock.json
├── .agents/skills/              # installed TasteSkill SKILL.md files
│   ├── design-taste-frontend-v2-experimental/
│   └── redesign-existing-projects/
└── src/
    ├── main.tsx, App.tsx, index.css, theme.tsx, data.ts
    └── components/
        ├── Nav, Hero, DraftingCanvas, Practice, Services
        ├── BuildSequence, Blueprint, SectionDivider
        ├── Work, Clients, Contact, Footer, Reveal
```

## 4. How TasteSkill is used here

TasteSkill ([tasteskill.dev](https://tasteskill.dev) ·
[github.com/Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)) is an
open-source "anti-slop frontend framework" — `SKILL.md` rule files that coding agents
read before touching UI: typography, spacing, color, layout, motion, dark mode,
pre-flight checks.

### 4.1 Installation (what was run in this project)

```bash
# NOTE: older docs say --skill "design-taste-frontend" but v2 renamed it.
# The old name yields "No matching skills found" — use these:
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill design-taste-frontend-v2-experimental -y
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill redesign-existing-projects -y
npx skills list   # verify
```

This placed versioned rules at `.agents/skills/*/SKILL.md`, pinned in
`skills-lock.json`. Any compatible agent (Claude Code, Cursor, Codex, OpenCode,
Windsurf…) reads them automatically.

### 4.2 Design Read (TasteSkill §0) — declared before any code

> *Reading this as: trust-first architecture-firm marketing site for Texas
> commercial clients, with a premium editorial language, leaning toward
> Tailwind v4 + Fraunces/Archivo + restrained motion.*

Dials (§1): **DESIGN_VARIANCE 6 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3** —
offset-asymmetric editorial, fluid CSS + scroll choreography, gallery spacing.

### 4.3 Rule → implementation map

| TasteSkill rule | Where it lands here |
|---|---|
| §0 Anti-defaults: no purple gradients, no centered-hero-mesh, no 3-equal-cards, no Inter+slate | Paper/ink/copper/pine palette; Fraunces+Archivo; 7/5/12 asymmetric grids (`Work.tsx`); 6-tile ledger services grid |
| §2 Honest stack: Tailwind v4 + `@tailwindcss/vite`, Motion via `motion/react`, self-hosted fonts | `vite.config.ts` has **both** `react()` and `tailwindcss()`; fonts via `@fontsource-variable/*`; icons `@phosphor-icons/react` (allowed list, Lucide avoided) |
| §4.5 One CTA intent per page | Single intent site-wide: **"Start a project"** (nav, hero, services, contact) |
| §4.7 Hero discipline: fits viewport, ≤2-line headline, ≤20-word subtext, ≤4 elements, pt-24 cap | `Hero.tsx`: eyebrow + 2-line headline + 13-word subtext + 2 CTAs; client wall is its own section, never in hero |
| §4.7 Nav: single line, 64–72px cap | `Nav.tsx`: `h-16 lg:h-[72px]`, 5 short labels, hamburger under `lg` |
| §4.7 Bento rhythm: vary composition | Services vary copy/badges; Work uses 7/5/12 spans; Practice pairs narrative + 2×2 credentials |
| §5 Motion: `useScroll`/`useTransform`, `whileInView`; **ban** on window scroll listeners | Zero scroll listeners. DraftingCanvas (line-draw), Hero (parallax), BuildSequence (scroll slabs), Blueprint (drawing path), SectionDivider (loops) |
| §6.A GPU only: transform + opacity | All tweens use y/scaleX/opacity/pathLength/rotate; CSS never uses `transition: all` |
| §6.B Reduced motion (mandatory) | Every animated component honors `useReducedMotion()` → static final state; CSS kill-switch included |
| §8 Dark mode from the start | `dark:` pairs everywhere; night `#141210` (not pure black); system default + toggle; parity in both modes |
| Pre-flight: no emojis/lorem, form contrast, labels above inputs | Real copy only; `Contact.tsx` label-above-input + helper text + AA borders; skip-link |

### 4.4 Animation inventory (the architecture-level motion pass)

| Component | Animation | Technique |
|---|---|---|
| DraftingCanvas | 7 elevation lines draw in, staggered | SVG pathLength tween |
| DraftingCanvas | Compass medallion rotates (60s/rev) | Infinite rotate loop |
| DraftingCanvas | Section-marker bob | 5s y easeInOut loop |
| Hero | Word-by-word headline mask reveal | Staggered y 110% → 0 |
| Hero | Backdrop drifts 2× foreground on scroll | useScroll parallax |
| BuildSequence | Tower slabs construct phase-by-phase | useScroll + per-slab useTransform |
| BuildSequence | Crane jib + progress bar grow | scaleX/scaleY from progress |
| Blueprint | Dashed path draws across nodes | pathLength on whileInView |
| Blueprint | Number badges spring in, brackets orbit | Spring + infinite rotate |
| SectionDivider | Mark rotates, copper sweep travels, dot pulses | 12s / 6s / 2s loops |
| Reveal | All sections rise-fade on entry | whileInView, expo easing |

## 5. Customization

- **Palette** (`src/index.css` → `@theme`): paper, paper-deep, ink, copper, pine, night.
- **Type**: `--font-display` (Fraunces Variable), `--font-sans`/`--font-mono` (Archivo
  Variable). Swap the `@fontsource-variable/*` packages in `main.tsx` to retype.
- **Content**: all editable copy lives in `src/data.ts` (CONTACT, SERVICES,
  PROJECT_TYPES, CLIENTS, CREDENTIALS).
- **Motion**: each animated component degrades via `useReducedMotion()`; lower durations
  in `Reveal.tsx` or drop `SectionDivider` loops to go calmer.
- **Contact form**: front-end only (success state, no backend). Wire `onSubmit` in
  `src/components/Contact.tsx` to Formspree / an API route to go live.

## 6. Gotchas encountered

1. **Skill rename**: `--skill "design-taste-frontend"` no longer exists in v2 — install
   `design-taste-frontend-v2-experimental` (CLI lists the 12 real names on mismatch).
2. **White unstyled page**: Tailwind v4 outputs nothing unless `@tailwindcss/vite` is in
   `vite.config.ts` **alongside** `react()`. Then hard-refresh (`Ctrl+Shift+R`).
3. **Space in folder name**: always quote — `cd "Carter Architects, Inc"`.

## 7. Credits

- Design guidance: [TasteSkill](https://tasteskill.dev) by Leon Lin & blueemi (MIT) —
  `design-taste-frontend-v2-experimental`.
- Content: Carter Architects, Inc., Houston TX (theirs — structure preserved).
- Type: Fraunces & Archivo (OFL) via Fontsource · Icons: Phosphor · Motion: Motion.

MIT for the code; the firm's name/content remains theirs.
```
