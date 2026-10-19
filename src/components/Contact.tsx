import { useState, type FormEvent } from 'react';
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { Eyebrow, Reveal } from './Reveal';
import { CONTACT } from '../data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  const inputCls = 'border bg-transparent px-4 py-3 text-[15px] outline-none focus:border-copper';
  const border = { borderColor: 'color-mix(in srgb, currentColor 25%, transparent)' } as const;
  return (
    <section id="contact" className="border-t py-16 lg:py-24" style={{ borderColor: 'color-mix(in srgb, currentColor 12%, transparent)' }}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight lg:text-5xl">
            Consult our expert architects in Texas.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed opacity-70">
            Send a note — Mark Carter replies directly. For fastest response, call during business hours.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin size={22} className="mt-0.5 shrink-0 text-copper" />
              <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">Studio</p>
              {CONTACT.address.map((a) => <p key={a} className="font-medium">{a}</p>)}</div>
            </li>
            <li className="flex gap-4">
              <Phone size={22} className="mt-0.5 shrink-0 text-copper" />
              <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">Phone</p>
              {CONTACT.phones.map((p) => <p key={p}><a className="font-medium hover:text-copper" href={`tel:${p.replace(/\D/g, '')}`}>{p}</a></p>)}</div>
            </li>
            <li className="flex gap-4">
              <EnvelopeSimple size={22} className="mt-0.5 shrink-0 text-copper" />
              <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">Email</p>
              <p><a className="font-medium hover:text-copper" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p></div>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border p-6 lg:p-8" style={{ borderColor: 'color-mix(in srgb, currentColor 15%, transparent)' }}>
            {sent ? (
              <div className="py-10 text-center" role="status">
                <p className="font-display text-3xl">Received.</p>
                <p className="mx-auto mt-3 max-w-sm opacity-70">Thanks — Mark will reply from {CONTACT.email}.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[12px] font-semibold uppercase tracking-[0.16em]">Name</label>
                    <input id="name" name="name" required autoComplete="name" placeholder="Jane Builder" className={inputCls} style={border} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[12px] font-semibold uppercase tracking-[0.16em]">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(281) 555-0100" className={inputCls} style={border} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[12px] font-semibold uppercase tracking-[0.16em]">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} style={border} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="msg" className="text-[12px] font-semibold uppercase tracking-[0.16em]">Project details</label>
                  <textarea id="msg" name="message" required rows={4} placeholder="Location, size, timeline." className={`${inputCls} resize-y`} style={border} />
                  <p className="text-[13px] opacity-60">One business day reply. No newsletters, no spam.</p>
                </div>
                <button type="submit" className="w-full bg-ink px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-paper transition hover:bg-copper dark:bg-paper dark:text-ink dark:hover:bg-amber-200">
                  Start a project
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
