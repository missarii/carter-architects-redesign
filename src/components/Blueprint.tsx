import { motion, useReducedMotion } from 'motion/react';
import { Eyebrow, Reveal } from './Reveal';

const STEPS = [
  { t: 'Survey', d: 'Measure twice.' },
  { t: 'Plan', d: 'Program & test-fit.' },
  { t: 'Document', d: 'Permit-ready sets.' },
  { t: 'Administer', d: 'Build it right.' },
];

/* Blueprint band: animated drawing-path through process nodes + orbiting geometry. */
export default function Blueprint() {
  const reduce = useReducedMotion();
  return (
    <section className="blueprint-grid relative overflow-hidden bg-pine py-16 text-paper-deep lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow dark>Sheet notes — process</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight lg:text-4xl">
            Drawn, dimensioned, delivered.
          </h2>
        </Reveal>
        <div className="relative mt-10">
          <svg className="absolute left-0 right-0 top-6 hidden h-8 w-full lg:block" viewBox="0 0 1000 32" fill="none" preserveAspectRatio="none" aria-hidden>
            <motion.path
              d="M0 16 H1000"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeDasharray="8 6"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <li className="relative">
                  <motion.span
                    className="relative z-10 grid h-12 w-12 place-items-center border border-amber-200/50 bg-pine font-display text-lg text-amber-200"
                    initial={reduce ? false : { scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 16, delay: i * 0.12 }}
                  >
                    {i + 1}
                    {!reduce && (
                      <motion.span
                        className="absolute -inset-1.5 border border-amber-200/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                        style={{ clipPath: 'polygon(0 0, 30% 0, 30% 8%, 8% 8%, 8% 30%, 0 30%)' }}
                      />
                    )}
                  </motion.span>
                  <h3 className="mt-4 font-display text-xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
      {/* slow orbiting ring decoration */}
      {!reduce && (
        <motion.svg
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 text-amber-200/20"
          viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="100" cy="100" r="80" strokeDasharray="6 8" />
          <circle cx="100" cy="100" r="55" />
          <rect x="85" y="85" width="30" height="30" transform="rotate(45 100 100)" />
        </motion.svg>
      )}
    </section>
  );
}
