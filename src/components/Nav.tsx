import { useEffect, useState } from 'react';
import { List, MoonStars, Sun, X } from '@phosphor-icons/react';
import { useTheme } from '../theme';

const LINKS = [
  { label: 'Practice', href: '#practice' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`z-nav fixed inset-x-0 top-0 h-16 border-b transition-colors duration-300 lg:h-[72px] ${
        scrolled
          ? 'border-ink/10 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-night/90'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Carter Architects home">
          <span className="grid h-9 w-9 place-items-center bg-ink font-display text-lg font-semibold text-paper dark:bg-paper dark:text-ink">
            CA
          </span>
          <span className="leading-none">
            <span className="block font-display text-[17px] font-semibold tracking-tight">Carter Architects</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] opacity-60">
              Houston · Texas
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] opacity-70 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="grid h-9 w-9 place-items-center rounded-full border border-current/20 opacity-80 transition hover:opacity-100"
            style={{ borderColor: 'color-mix(in srgb, currentColor 25%, transparent)' }}
          >
            {theme === 'light' ? <MoonStars size={17} /> : <Sun size={17} />}
          </button>
          <a
            href="#contact"
            className="bg-ink px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-paper transition hover:bg-copper dark:bg-paper dark:text-ink dark:hover:bg-amber-200"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border opacity-80"
            style={{ borderColor: 'color-mix(in srgb, currentColor 25%, transparent)' }}
          >
            {theme === 'light' ? <MoonStars size={17} /> : <Sun size={17} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="z-menu border-t border-ink/10 bg-paper px-4 pb-6 pt-3 dark:border-white/10 dark:bg-night lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/8 py-3 font-display text-2xl dark:border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-ink px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-paper dark:bg-paper dark:text-ink"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
