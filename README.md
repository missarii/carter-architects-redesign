# Carter Architects, Inc. — Website Redesign

A modern, editorial redesign of [carterarchitectsinc.com](https://carterarchitectsinc.com/) —
a full-range architecture & design firm in Houston, Texas — built with **React + Vite +
Tailwind CSS v4 + Motion + Three.js**, and art-directed by **five premium design systems**:
TasteSkill, Impeccable, Stitch, React Bits patterns and shadcn/ui primitives.

> **Live:** `npm run dev` → http://localhost:5174/

## 1. What this is

The original site is a plain brochure site (Home / Services & Projects / Contact).
This rebuild preserves **100% of the real content** — services, credentials,
34-client roster, address/phones/email — as a single-page editorial experience:

| Section | Content (all real, from the live site) |
|---|---|
| Hero | SplitText kinetic headline + aurora + lazy 3D massing model |
| Practice | SplitText title + spotlight credential tiles |
| Services | Spotlight ledger tiles + SplitText title + shadcn badges |
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
├── index.html, vite.config.ts, package.json, skills-lock.json, DESIGN.md
├── .agents/skills/              # installed design-skill SKILL.md files
│   ├── design-taste-frontend-v2-experimental/ + redesign-existing-projects
│   ├── high-end-visual-design/ + stitch-design-taste (TasteSkill variants)
│   └── impeccable/              # pbakaus/impeccable
└── src/
    ├── main.tsx, App.tsx, index.css, theme.tsx, data.ts
    ├── lib/utils.ts             # shadcn-style cn()
    └── components/
        ├── Nav, Hero, Tower3D (lazy 3D), SmoothScroll (Lenis)
        ├── DraftingCanvas, Practice, Services, BuildSequence
        ├── Blueprint, SectionDivider, Work, Clients, Contact, Footer
        ├── Reveal, effects (SplitText/Magnetic/Spotlight/Aurora)
        └── ui/                  # shadcn-style primitives (button, badge…)
```

## 4. How TasteSkill is used here

TasteSkill ([tasteskill.dev](https://tasteskill.dev) ·
[github.com/Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)) is an
open-source "anti-slop frontend framework" — `SKILL.md` rule files that coding agents
read before touching UI: typography, spacing, color, layout, motion, dark mode,
pre-flight checks.

### 4.1 Installation (all five systems — what was run)

```bash
# 1. TasteSkill core (direction + dials + motion rules)
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill design-taste-frontend-v2-experimental -y
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill redesign-existing-projects -y

# 2. TasteSkill premium variant (calm, whitespace, soft contrast)
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill high-end-visual-design -y

# 3. Stitch variant (structured DESIGN.md spec workflow)
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill stitch-design-taste -y

# 4. Impeccable (design-director critique floor)
npx skills add pbakaus/impeccable -y

npx skills list   # verify — 5 skill folders under .agents/skills/
```

> NOTE: older docs say `--skill "design-taste-frontend"` but v2 renamed it —
> the old name yields "No matching skills found"; the CLI lists the 12 real names.

React Bits and shadcn/ui are **not skills** — they're code installed as source you own:
React Bits patterns were hand-rolled into `src/components/effects.tsx` (SplitText,
Magnetic, SpotlightCard, Aurora); shadcn/ui structure was vendored as
`src/lib/utils.ts` (`cn()`) + `src/components/ui/` (cva button, badge, card).

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
| Impeccable floor: finish the job, ambition scaled, verify at ship sizes | No placeholders; trust-first restraint on Operate surfaces; build verified clean |
| High-end variant: calm premium, whitespace, soft contrast, refined motion | Aurora restraint, spotlight subtlety, gallery `py-24` rhythm, copper-not-neon |
| Stitch: structured spec before coding | `DESIGN.md` tokens/layout/motion/inventory contract; single CTA intent spec'd |
| React Bits: kinetic type, magnetic, spotlight, aurora (trending) | `effects.tsx`: SplitText, Magnetic, SpotlightCard, Aurora (CSS keyframes) |
| shadcn/ui: owned primitives, cva variants, cn() | `lib/utils.ts` + `ui/button.tsx` + `ui/primitives.tsx`; Button/Badge live in Services |

### 4.4 Animation inventory (architecture + trending 3D pass)

| Component | Animation | Technique |
|---|---|---|
| Tower3D (NEW) | Rotating wireframe massing model, scroll tilt + parallax | R3F + drei Float/Line, lazy chunk, Motion useScroll |
| Hero | SplitText kinetic headline (rotating word reveal) | React-Bits-style masked stagger |
| Hero | Magnetic CTA button | Spring-follow pointer (180/14) |
| Hero | Aurora depth backdrop | CSS keyframe drift (transform-only) |
| Practice/Services | Spotlight cards follow cursor | Radial glow at pointer % |
| Practice/Services | Section titles SplitText on scroll | whileInView stagger |
| SmoothScroll (NEW) | Buttery page scroll | Lenis lerp 0.1, reduced-motion off |

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

- Design guidance: TasteSkill v2 + high-end-visual-design + stitch-design-taste
  (Leon Lin & blueemi, MIT) · Impeccable (pbakaus) · patterns from React Bits ·
  primitive structure from shadcn/ui.
- 3D: Three.js via @react-three/fiber + drei · Smooth scroll: Lenis.
- Content: Carter Architects, Inc., Houston TX (theirs — structure preserved).
- Type: Fraunces & Archivo (OFL) via Fontsource · Icons: Phosphor · Motion: Motion.

MIT for the code; the firm's name/content remains theirs.
```
