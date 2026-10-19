import { Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Eyebrow } from './Reveal';
import { Aurora, Magnetic, SplitText } from './effects';

const Tower3D = lazy(() => import('./Tower3D'));

/* Stitch hero spec + Impeccable polish + React-Bits kinetic type:
   aurora depth, SplitText headline, magnetic CTA, lazy 3D massing anchor. */
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-16 lg:pt-[72px]">
      <Aurora />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:px-8 lg:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Houston · Serving all of Texas</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <SplitText text="Architecture that works" />
            <br />
            <SplitText text="as hard as it looks." delay={0.25} />
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed opacity-75">
            Full-range design, interiors and industrial expertise — 30+ years, on time.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-copper dark:bg-paper dark:text-ink dark:hover:bg-amber-200"
              >
                Start a project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition hover:border-copper hover:text-copper"
              style={{ borderColor: 'color-mix(in srgb, currentColor 30%, transparent)' }}
            >
              Explore services
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t pt-6" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            {[['30+', 'years of practice'], ['40+', 'repeat clients'], ['100%', 'permit-focused']].map(([v, l]) => (
              <div key={l}>
                <dd className="font-display text-3xl font-medium">{v}</dd>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[340px] border lg:mt-6 lg:min-h-[440px]"
          style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}
          aria-label="Interactive 3D building massing model"
        >
          <div className="flex items-center justify-between border-b px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] opacity-60" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            <span>Massing — Scheme C</span>
            <span className="font-mono">3D study</span>
          </div>
          <Suspense fallback={<div className="grid h-[300px] place-items-center font-mono text-xs opacity-50 lg:h-[380px]">loading model…</div>}>
            <Tower3D />
          </Suspense>
          <p className="border-t px-5 py-3 text-[13px] opacity-60" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            Wireframe study — tilts as you scroll. Formerly Mark Carter Associates.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
