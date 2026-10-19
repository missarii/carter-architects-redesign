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

## 4. The five premium design systems

This build is art-directed by five complementary systems. Each has its own
philosophy, install path, and concrete footprint in the code:

### 4.1 Installation (all five — what was run)

```bash
# TasteSkill core + premium + Stitch variants
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill design-taste-frontend-v2-experimental -y
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill redesign-existing-projects -y
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill high-end-visual-design -y
npx skills add https://github.com/Leonxlnx/taste-skill \
  --skill stitch-design-taste -y

# Impeccable (design-director critique floor)
npx skills add pbakaus/impeccable -y

npx skills list   # verify — 5 skill folders under .agents/skills/
```

> NOTE: older docs say `--skill "design-taste-frontend"` but v2 renamed it —
> the old name yields "No matching skills found"; the CLI lists the 12 real names.

React Bits and shadcn/ui are **not skills** — they're code installed as source you
own (see §4.6 and §4.7).

### 4.2 System 1 — TasteSkill core (direction + dials + motion rules)

- **What it is:** [tasteskill.dev](https://tasteskill.dev) ·
  [github.com/Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) — the
  open-source "anti-slop frontend framework". `SKILL.md` rule files a coding agent
  reads before touching UI: brief inference, three dials, stack honesty, layout
  rhythm, motion physics, dark mode, pre-flight checks. MIT licensed.
- **Design read declared before any code (§0):**
  > *Trust-first architecture-firm marketing site for Texas commercial clients, with
  > a premium editorial language, leaning toward Tailwind v4 + Fraunces/Archivo +
  > restrained motion.*
- **Dials (§1):** DESIGN_VARIANCE 6 / MOTION_INTENSITY 4 / VISUAL_DENSITY 3 —
  offset-asymmetric editorial, fluid CSS + scroll choreography, gallery spacing.
- **Footprint here:** warm paper/ink/copper/pine palette (no purple gradients);
  Fraunces + Archivo (never Inter + slate); asymmetric 7/5/12 grids instead of
  3-equal-cards; single-line 64–72px nav; hero fits viewport (≤2-line headline,
  13-word subtext); one CTA intent site-wide ("Start a project"); zero
  `window.addEventListener('scroll')` — all scroll via Motion `useScroll`;
  transform/opacity-only tweens; full `useReducedMotion()` fallbacks; dual-mode
  dark theme from the start.

This placed versioned rules at `.agents/skills/*/SKILL.md`, pinned in
`skills-lock.json`. Any compatible agent (Claude Code, Cursor, Codex, OpenCode,
Windsurf…) reads them automatically.

### 4.3 System 2 — TasteSkill High-End Visual Design (premium calm)

- **What it is:** a specialized TasteSkill variant for polished, calm,
  premium-looking interfaces — generous whitespace, soft contrast, refined motion.
  Persona `Vanguard_UI_Architect`: "$150k+ agency-level experiences, not websites".
  Install name: `high-end-visual-design` in `Leonxlnx/taste-skill`.
- **Absolute-zero bans it enforces:** Inter/Roboto/Arial/Helvetica fonts; thick Lucide /
  FontAwesome icons (we use Phosphor, on its allowed list); generic 1px gray borders
  and harsh shadows; edge-to-edge sticky navbars; symmetric 3-column grids without
  whitespace; `linear`/`ease-in-out` transitions and instant state changes.
- **Variance engine (rolled for this project):** *Editorial Luxury* vibe (warm paper
  `#F6F1E8`, espresso ink, copper accent, film-grain-grade restraint) ×
  *Editorial Split* layout (massive type left, interactive model right, single-column
  collapse under 768px).
- **Footprint here:** aurora at 20% opacity (never neon); spotlight glow capped at
  16% copper; section padding minimum `py-16/24` so the layout breathes; CTA uses the
  button-in-button trailing-icon pattern (`Start a project ↗`); scroll entries are
  heavy fade-ups (800ms+, staggered); Phosphor icons throughout.

### 4.4 System 3 — Stitch Design Taste (spec before code)

- **What it is:** the Google-Stitch-compatible TasteSkill variant. It doesn't style
  directly — it writes an agent-friendly `DESIGN.md`: atmosphere, color calibration
  with hex codes, typographic architecture, component behaviors, layout principles,
  motion philosophy, and an explicit anti-pattern list. Install name:
  `stitch-design-taste` in `Leonxlnx/taste-skill`.
- **Rules it enforces:** max 1 accent under 80% saturation; AI purple/blue neon
  strictly banned; never pure `#000000` (we use night `#141210`); Inter banned for
  premium contexts (we use Fraunces + Archivo); serif banned in dashboards;
  asymmetric hero splits; single-column collapse below 768px; labels above inputs.
- **Footprint here:** the full `DESIGN.md` at the repo root — tokens table, type
  scale, component stylings, layout principles, motion spec, anti-patterns. It is
  the single source of truth: read it before editing any UI.

### 4.5 System 4 — Impeccable (design-director critique floor)

- **What it is:** [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
  by Peer Bakaus — "design that earns the name out-of-distribution craft". Works as
  an award-winning design director: production-grade code, a clear POV, and a craft
  floor with absolute bans. Operates in modes (Persuade / Experience / Operate /
  Read) and ships sub-commands (`audit`, `harden`, `animate`, `delight`,
  `overdrive`, `clarify`, `adapt`, `optimize`…).
- **Core principles applied:** *finish the job* (no placeholders, complete form
  states); *ambition scaled to the surface* — this is a Persuade surface, so full
  commitment, but trust-first restraint (no gimmicks on a B2B architecture site);
  *verify at ship sizes* (production build clean, responsive collapse checked).
- **Footprint here:** the polish pass over every section — hierarchy audits
  (eyebrow → display → lede on each block), UX-copy tightening (13-word hero
  subtext, "One business day reply. No newsletters, no spam."), form hardening
  (labels above inputs, helper/error slots, AA-contrast borders), and the
  `PRODUCT.md`-style discipline of documenting decisions in `DESIGN.md`.

### 4.6 System 5a — React Bits (trending kinetic patterns)

- **What it is:** [reactbits.dev](https://reactbits.dev) — animated React components,
  backgrounds and micro-interactions that install as source you own. Not a skill;
  patterns are copied and tuned per project (JS/TS, CSS or Tailwind).
- **Footprint here** — hand-rolled into `src/components/effects.tsx`:
  `SplitText` (masked word-by-word headline reveals), `Magnetic` (spring-follow
  CTA, stiffness 180 / damping 14), `SpotlightCard` (cursor-tracking radial glow),
  `Aurora` (transform-only CSS keyframe drift). All honor reduced-motion.

### 4.7 System 5b — shadcn/ui (owned component foundation)

- **What it is:** [ui.shadcn.com](https://ui.shadcn.com) — composable, accessible
  components you copy into your repo and customize (Tailwind + Radix philosophy,
  `cn()` + `cva` variants). Not a skill; structure is vendored as source you own.
- **Footprint here:** `src/lib/utils.ts` (`cn()` via clsx + tailwind-merge),
  `src/components/ui/button.tsx` (cva variants: default / outline / ghost / copper;
  sizes default / sm / lg / icon), `src/components/ui/primitives.tsx` (Badge, Card,
  SectionHeading). Live in production: Services CTA button + tag badges.

### 4.8 Rule → implementation map (all five)

| TasteSkill rule | Where it lands here |
|---|---|
| §0 Anti-defaults: no purple gradients, no centered-hero-mesh, no 3-equal-cards, no Inter+slate | Paper/ink/copper/pine palette; Fraunces+Archivo; 7/5/12 asymmetric grids (`Work.tsx`); 6-tile ledger services grid |
| §2 Honest stack: Tailwind v4 + `@tailwindcss/vite`, Motion via `motion/react`, self-hosted fonts | `vite.config.ts` has **both** `react()` and `tailwindcss()`; fonts via `@fontsource-variable/*`; icons `@phosphor-icons/react` (allowed list, Lucide avoided) |
| §4.5 One CTA intent per page | Single intent site-wide: **"Start a project"** (nav, hero, services, contact) |
| §4.7 Hero discipline: fits viewport, ≤2-line headline, ≤20-word subtext, ≤4 elements | `Hero.tsx`: eyebrow + 2-line headline + 13-word subtext + 2 CTAs; client wall is its own section, never in hero |
| §4.7 Nav: single line, 64–72px cap | `Nav.tsx`: `h-16 lg:h-[72px]`, 5 short labels, hamburger under `lg` |
| §4.7 Bento rhythm: vary composition | Services vary copy/badges; Work uses 7/5/12 spans; Practice pairs narrative + 2×2 credentials |
| §5 Motion: `useScroll`/`useTransform`, `whileInView`; **ban** on window scroll listeners | Zero scroll listeners. DraftingCanvas (line-draw), Hero (parallax), BuildSequence (scroll slabs), Blueprint (drawing path), SectionDivider (loops) |
| §6.A GPU only: transform + opacity | All tweens use y/scaleX/opacity/pathLength/rotate; CSS never uses `transition: all` |
| §6.B Reduced motion (mandatory) | Every animated component honors `useReducedMotion()` → static final state; CSS kill-switch included |
| §8 Dark mode from the start | `dark:` pairs everywhere; night `#141210` (not pure black); system default + toggle; parity in both modes |
| Pre-flight: no emojis/lorem, form contrast, labels above inputs | Real copy only; `Contact.tsx` label-above-input + helper text + AA borders; skip-link |
| High-end: calm premium, whitespace, button-in-button CTA | Aurora 20% restraint, spotlight 16% cap, `py-16/24` breathing room, `Start a project ↗` |
| Stitch: spec before code | `DESIGN.md` tokens/layout/motion/inventory contract |
| Impeccable: finish the job, ambition scaled, verify at ship sizes | No placeholders; trust-first restraint; build verified clean |
| React Bits: kinetic type, magnetic, spotlight, aurora | `effects.tsx`: SplitText, Magnetic, SpotlightCard, Aurora |
| shadcn/ui: owned primitives, cva variants, cn() | `lib/utils.ts` + `ui/button.tsx` + `ui/primitives.tsx`; live in Services |

### 4.9 Animation inventory (complete)

| Component | Animation | Technique |
|---|---|---|
| Tower3D (NEW) | Rotating wireframe massing model, scroll tilt + parallax | R3F + drei Float/Line, lazy chunk, Motion useScroll |
| Hero | SplitText kinetic headline (rotating word reveal) | React-Bits-style masked stagger |
| Hero | Magnetic CTA button | Spring-follow pointer (180/14) |
| Hero | Aurora depth backdrop | CSS keyframe drift (transform-only) |
| Practice/Services | Spotlight cards follow cursor | Radial glow at pointer % |
| Practice/Services | Section titles SplitText on scroll | whileInView stagger |
| SmoothScroll | Buttery page scroll | Lenis lerp 0.1, reduced-motion off |
| DraftingCanvas | 7 elevation lines draw in, staggered | SVG pathLength tween |
| DraftingCanvas | Compass medallion rotates (60s/rev) | Infinite rotate loop |
| DraftingCanvas | Section-marker bob | 5s y easeInOut loop |
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

- TasteSkill core + high-end-visual-design + stitch-design-taste (Leon Lin & blueemi, MIT).
- Impeccable (Peer Bakaus, [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)).
- Patterns from [React Bits](https://reactbits.dev) · structure from [shadcn/ui](https://ui.shadcn.com).
- 3D: Three.js via @react-three/fiber + drei · Smooth scroll: Lenis.
- Content: Carter Architects, Inc., Houston TX (theirs — structure preserved).
- Type: Fraunces & Archivo (OFL) via Fontsource · Icons: Phosphor · Motion: Motion.

MIT for the code; the firm's name/content remains theirs.
```
