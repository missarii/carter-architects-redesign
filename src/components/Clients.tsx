import { Eyebrow, Reveal } from './Reveal';
import { CLIENTS } from '../data';

export default function Clients() {
  return (
    <section id="clients" className="bg-paper-deep/50 py-16 dark:bg-white/[0.03] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Word of mouth, not ads</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight lg:text-4xl">
            Trusted by builders, brokers and brands across Texas.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 gap-px border bg-current/10 sm:grid-cols-3 lg:grid-cols-4" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            {CLIENTS.map((c) => (
              <li key={c} className="bg-paper px-4 py-4 text-[13px] font-semibold tracking-tight opacity-80 transition hover:opacity-100 dark:bg-night lg:px-5">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
