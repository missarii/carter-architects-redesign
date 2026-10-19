import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-ink text-paper hover:bg-copper dark:bg-paper dark:text-ink dark:hover:bg-amber-200',
        outline: 'border hover:border-copper hover:text-copper',
        ghost: 'hover:bg-current/5',
        copper: 'bg-copper text-white hover:bg-copper-deep',
      },
      size: {
        default: 'px-6 py-3.5',
        sm: 'px-4 py-2.5 text-[12px]',
        lg: 'px-8 py-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
