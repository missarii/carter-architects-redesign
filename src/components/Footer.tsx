import { CONTACT } from '../data';

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper dark:bg-black lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-medium">Carter Architects, Inc.</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
              Full-range architecture and design services across Texas.
              Formerly Mark Carter Associates.
            </p>
          </div>
          <nav className="flex gap-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70" aria-label="Footer">
            <a href="#practice" className="hover:text-white">Practice</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="text-sm text-white/60">
            {CONTACT.address.map((a) => <p key={a}>{a}</p>)}
            <p className="mt-2"><a href={`mailto:${CONTACT.email}`} className="text-amber-200/90 hover:text-amber-200">{CONTACT.email}</a></p>
            <p>{CONTACT.phones.join(' · ')}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6 text-[12px] uppercase tracking-[0.18em] text-white/40">
          <p>© 2026 Carter Architects, Inc. All rights reserved.</p>
          <p className="font-mono">Texas Registered Architect · RAS</p>
        </div>
      </div>
    </footer>
  );
}
