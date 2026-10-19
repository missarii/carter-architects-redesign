import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react';
import { Eyebrow } from './Reveal';
import DraftingCanvas from './DraftingCanvas';

const WORDS = ['Architecture', 'that', 'works'];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-16 lg:pt-[72px]">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0">
        <DraftingCanvas />
      </motion.div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[1.5fr_1fr] lg:gap-6 lg:px-8 lg:pb-20">
        <motion.div style={reduce ? undefined : { y: fgY, opacity: fade }}>
          <motion.div initial={reduce ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <Eyebrow>Houston · Serving all of Texas</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              {WORDS.map((w, i) => (
                <motion.span
                  key={w}
                  className="mr-[0.28em] inline-block last:mr-0"
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              as hard as it looks.
            </motion.span>
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed opacity-75">
            Full-range design, interiors and industrial expertise — 30+ years, on time.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-copper dark:bg-paper dark:text-ink dark:hover:bg-amber-200">
              Start a project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition hover:border-copper hover:text-copper" style={{ borderColor: 'color-mix(in srgb, currentColor 30%, transparent)' }}>
              Explore services <ArrowDown size={16} />
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
        </motion.div>
        <motion.aside initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="relative lg:mt-14 lg:justify-self-end lg:w-[92%]" aria-label="Featured project note">
          <div className="border bg-paper-deep/60 p-6 dark:bg-white/5 lg:p-7" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] opacity-60">
              <span>Sheet A-101</span><span className="font-mono">249 / HOU</span>
            </div>
            <div className="mt-4 bg-pine px-6 py-8 text-paper-deep">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-200/80">Now booking — Q1</p>
              <p className="mt-3 font-display text-2xl leading-snug">Industrial shells, office TI and ground-up commercial.</p>
              <div className="mt-5 h-px w-full bg-white/15" />
              <div className="mt-4 flex items-end justify-between">
                <div><p className="font-display text-4xl">1:50</p><p className="text-[11px] uppercase tracking-[0.22em] opacity-60">Detail scale</p></div>
                <svg width="120" height="56" viewBox="0 0 120 56" fill="none" stroke="currentColor" aria-hidden>
                  <path d="M4 52V20h24v32M32 52V8h28v44M64 52V28h20v24M88 52V14h28v38" strokeWidth="1.5" />
                  <line x1="0" y1="52" x2="120" y2="52" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">Formerly Mark Carter Associates. Licensed and registered — referrals across Texas, not ads.</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
