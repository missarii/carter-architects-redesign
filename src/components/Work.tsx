import { Eyebrow, Reveal } from './Reveal';
import { PROJECT_TYPES } from '../data';

const SPANS = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-12'];

export default function Work() {
  return (
    <section id="work" className="border-t py-16 lg:py-24" style={{ borderColor: 'color-mix(in srgb, currentColor 12%, transparent)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Selected scope</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight lg:text-5xl">
            Small TI to large industrial — same rigor.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed opacity-70">
            Metal buildings, offices and warehouse leases, plus oil-and-gas industrial work.
            No stock photos — scope, told straight.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {PROJECT_TYPES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className={SPANS[i % 3]}>
              <article className="group relative h-full overflow-hidden border p-7 transition-colors lg:p-9" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[12px] uppercase tracking-[0.24em] opacity-50">0{i + 1} — {p.detail}</p>
                  <p className="shrink-0 border px-3 py-1 font-display text-lg" style={{ borderColor: 'color-mix(in srgb, currentColor 20%, transparent)' }}>{p.stat}</p>
                </div>
                <h3 className="mt-8 font-display text-3xl tracking-tight lg:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed opacity-70">{p.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-copper">
                  <span className="inline-block h-px w-8 bg-copper" aria-hidden />
                  Representative scope
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
