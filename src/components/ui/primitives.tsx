import * as React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] opacity-80',
        className,
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border bg-paper dark:bg-night', className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  align = 'left',
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
          dark ? 'text-amber-200/80' : 'text-copper'
        } ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className={`inline-block h-px w-10 ${dark ? 'bg-amber-200/60' : 'bg-copper'}`} aria-hidden />
        {eyebrow}
        {align === 'center' && (
          <span className={`inline-block h-px w-10 ${dark ? 'bg-amber-200/60' : 'bg-copper'}`} aria-hidden />
        )}
      </p>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight lg:text-5xl">{title}</h2>
      {lede && <p className="mt-4 text-[16px] leading-relaxed opacity-70">{lede}</p>}
    </div>
  );
}
