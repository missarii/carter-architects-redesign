import { Eyebrow, Reveal } from './Reveal';
import { SplitText, SpotlightCard } from './effects';
import { CREDENTIALS } from '../data';

export default function Practice() {
  return (
    <section id="practice" className="border-t py-16 lg:py-24" style={{ borderColor: 'color-mix(in srgb, currentColor 12%, transparent)' }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
        <Reveal>
          <Eyebrow>The practice</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight lg:text-4xl">
            <SplitText text="An experienced, accredited firm — without the runaround." />
          </h2>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed opacity-80">
              Carter Architects provides a full range of architecture and design services across Texas.
              Led by Mark Carter — 30+ years from CAD drafting to partner-level practice — the firm
              exceeds expectations with timely turnarounds, from custom restaurants to large corporate projects.
            </p>
          </Reveal>
          <dl className="grid gap-px overflow-hidden border sm:grid-cols-2" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)', background: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.k} delay={i * 0.05} className="bg-paper dark:bg-night">
                <SpotlightCard className="h-full">
                  <div className="h-full p-5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-copper">{c.k}</dt>
                    <dd className="mt-2 text-[15px] leading-relaxed">{c.v}</dd>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
