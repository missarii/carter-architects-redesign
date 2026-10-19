import { motion, useReducedMotion } from 'motion/react';

/* TasteSkill §5/§6: geometric drafting canvas — line-draw + slow rotation.
   SVG stroke-dashoffset = line-drawing (GPU-cheap, no layout anim).
   Respects prefers-reduced-motion: renders final static state. */
const LINES = [
  'M0 560 H1200',
  'M120 120 V560',
  'M480 200 V560',
  'M840 90 V560',
  'M150 380 H280 V520 H150 Z',
  'M510 330 H690 V520 H510 Z',
  'M870 300 H1020 V520 H870 Z',
];

export default function DraftingCanvas() {
  const reduce = useReducedMotion();
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-10 dark:opacity-[0.16]"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 700"
    >
      <g stroke="currentColor" strokeWidth="1" fill="none">
        {LINES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* dimension line */}
        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <line x1="150" y1="560" x2="280" y2="560" />
          <line x1="150" y1="554" x2="150" y2="566" />
          <line x1="280" y1="554" x2="280" y2="566" />
        </motion.g>
        {/* rotating compass / geometric medallion */}
        <motion.g
          style={{ originX: '960px', originY: '180px' }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={reduce ? undefined : { duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="960" cy="180" r="34" />
          <circle cx="960" cy="180" r="22" strokeDasharray="4 4" />
          <line x1="960" y1="146" x2="960" y2="214" />
          <line x1="926" y1="180" x2="994" y2="180" />
          <rect x="948" y="168" width="24" height="24" transform="rotate(45 960 180)" />
        </motion.g>
        {/* floating section marker triangle */}
        <motion.g
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="480" cy="150" r="14" />
          <line x1="480" y1="164" x2="480" y2="200" strokeDasharray="3 3" />
        </motion.g>
      </g>
    </svg>
  );
}
