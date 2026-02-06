import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
          {
            'bg-slate-800 text-slate-300': variant === 'default',
            'bg-primary-500/20 text-primary-400': variant === 'primary',
            'bg-accent-500/20 text-accent-400': variant === 'accent',
            'bg-emerald-500/20 text-emerald-400': variant === 'success',
            'bg-amber-500/20 text-amber-400': variant === 'warning',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
