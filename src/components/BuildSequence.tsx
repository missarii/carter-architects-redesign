import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Eyebrow, Reveal } from './Reveal';

/* TasteSkill §5: scroll-driven "construction sequence" — a building elevation
   that assembles itself as you scroll. Uses Motion useScroll + useTransform
   (NOT window scroll listeners — hard ban §5.D). Collapses to static list
   under prefers-reduced-motion. */
const PHASES = [
  { no: 'P1', title: 'Survey & Programming', desc: 'As-builts, test fits, code and feasibility — the ground truth before a line is drawn.', floors: 1 },
  { no: 'P2', title: 'Schematic Frame', desc: 'Massing, structure grid and space planning lock the skeleton of the building.', floors: 2 },
  { no: 'P3', title: 'Design Development', desc: 'Envelope, interiors and systems resolve — documents grow permit-ready.', floors: 3 },
  { no: 'P4', title: 'Construction & Closeout', desc: 'Administration, site visits and punch through final delivery.', floors: 4 },
];

function Tower({ progress }: { progress: ReturnType<typeof useTransform<number, number>> }) {
  const reduce = useReducedMotion();
  const slabs = [0, 1, 2, 3];
  return (
    <div className="relative mx-auto w-full max-w-[300px]" aria-hidden>
      {/* ground line */}
      <div className="h-px w-full bg-current opacity-30" />
      <div className="relative flex h-[320px] flex-col-reverse items-stretch gap-[10px] py-3 lg:h-[380px]">
        {/* columns */}
        <div className="pointer-events-none absolute inset-y-3 left-6 w-px bg-current opacity-25" />
        <div className="pointer-events-none absolute inset-y-3 right-6 w-px bg-current opacity-25" />
        {slabs.map((i) => (
          <Slab key={i} index={i} progress={progress} reduce={!!reduce} />
        ))}
      </div>
      {/* crane jib */}
      {!reduce && (
        <motion.div
          className="absolute -top-2 left-1/2 h-10 w-px bg-copper"
          style={{ scaleY: progress }}
        >
          <span className="absolute -left-8 top-0 h-px w-16 bg-copper" />
          <span className="absolute -left-8 top-0 h-3 w-px bg-copper" />
        </motion.div>
      )}
    </div>
  );
}

function Slab({ index, progress, reduce }: { index: number; progress: ReturnType<typeof useTransform<number, number>>; reduce: boolean }) {
  const start = index * 0.22;
  const end = start + 0.3;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const local = useTransform(progress, [start, Math.min(end, 1)], [0, 1]);
  if (reduce) {
    return (
      <div className="flex-1 border border-copper/60 bg-copper/10 px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">L{index + 1}</span>
      </div>
    );
  }
  return (
    <motion.div style={{ opacity: local, scaleX: local, originX: 0 }} className="flex-1 border border-copper/60 bg-copper/10 px-4 py-2">
      <motion.span style={{ opacity: local }} className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
        L{index + 1}
      </motion.span>
    </motion.div>
  );
}

export default function BuildSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="border-t bg-paper-deep/50 py-16 dark:bg-white/[0.03] lg:py-24" style={{ borderColor: 'color-mix(in srgb, currentColor 12%, transparent)' }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <Eyebrow>How we build — scroll to construct</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight lg:text-4xl">
              From survey stake to final punch, in four lifts.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed opacity-70">
              Keep scrolling — the tower assembles phase by phase, the way we document it.
            </p>
          </Reveal>
          <div className="mt-8 hidden lg:block">
            <Tower progress={progress} />
            {!reduce && (
              <div className="mx-auto mt-4 h-1 w-full max-w-[300px] overflow-hidden rounded bg-current/10">
                <motion.div className="h-full origin-left bg-copper" style={{ scaleX: progress }} />
              </div>
            )}
          </div>
        </div>
        <ol className="space-y-px border" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
          {PHASES.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.04} className="bg-paper dark:bg-night">
              <li className="group flex gap-6 p-6 transition-colors hover:bg-copper/[0.06] lg:p-8">
                <span className="font-display text-5xl text-copper/30 transition-colors group-hover:text-copper lg:text-6xl">
                  {i + 1}
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] opacity-50">{p.no} — Lift {p.floors}</p>
                  <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed opacity-70">{p.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="lg:hidden">
          <Tower progress={progress} />
        </div>
      </div>
    </section>
  );
}
