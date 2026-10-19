import { motion, useReducedMotion } from 'motion/react';

/* Architectural section divider: dimension line + marching ants + rotating
   geometric marker. Pure SVG/CSS, transform+opacity only. */
export default function SectionDivider({ label = 'CA — DETAIL' }: { label?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden py-2" aria-hidden>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <motion.span
          className="grid h-8 w-8 shrink-0 place-items-center border border-copper text-copper"
          animate={reduce ? undefined : { rotate: [0, 90, 180, 270, 360] }}
          transition={reduce ? undefined : { duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="10" height="10" />
            <line x1="3" y1="8" x2="13" y2="8" />
            <line x1="8" y1="3" x2="8" y2="13" />
          </svg>
        </motion.span>
        <div className="relative h-px flex-1 bg-current opacity-20">
          {!reduce && (
            <motion.span
              className="absolute inset-y-[-2px] w-16 bg-gradient-to-r from-transparent via-copper to-transparent"
              animate={{ x: ['-20vw', '80vw'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.28em] opacity-50">{label}</span>
        <div className="h-px w-16 bg-current opacity-20" />
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current opacity-40">
          <motion.span
            className="block h-1.5 w-1.5 rounded-full bg-copper"
            animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={reduce ? undefined : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </div>
    </div>
  );
}
