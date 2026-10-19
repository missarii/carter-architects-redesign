import { ArrowUpRight } from '@phosphor-icons/react';
import { Eyebrow, Reveal } from './Reveal';
import { SpotlightCard, SplitText } from './effects';
import { Badge } from './ui/primitives';
import { SERVICES } from '../data';

/* High-end visual design pass: spotlight-reactive ledger tiles,
   SplitText section title, shadcn-style badge + button primitives. */
export default function Services() {
  return (
    <section id="services" className="bg-ink py-16 text-paper dark:bg-pine-deep lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow dark>Services — soup to nuts</Eyebrow>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight lg:text-5xl">
              <SplitText text="Everything from feasibility to final punch." />
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/25 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:border-amber-200 hover:text-amber-200 [&_svg]:size-4 [&_svg]:shrink-0"
            >
              Start a project <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={(i % 3) * 0.06} className="bg-ink dark:bg-pine-deep">
              <SpotlightCard className="h-full">
                <article className="group flex h-full min-h-[260px] flex-col p-6 transition-colors hover:bg-white/[0.04] lg:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-amber-200/70">{s.no}</span>
                    <ArrowUpRight size={18} className="opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{s.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {s.tags.map((t) => (
                      <Badge key={t} className="border-white/20 text-white/70">{t}</Badge>
                    ))}
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
