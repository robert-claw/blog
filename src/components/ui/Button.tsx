import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary-500 text-white hover:bg-primary-600': variant === 'primary',
            'bg-slate-800 text-slate-100 hover:bg-slate-700': variant === 'secondary',
            'text-slate-300 hover:text-white hover:bg-slate-800': variant === 'ghost',
            'border border-slate-700 text-slate-300 hover:border-primary-500 hover:text-primary-400': variant === 'outline',
          },
          {
            'text-sm px-3 py-1.5 rounded-md': size === 'sm',
            'text-sm px-4 py-2 rounded-lg': size === 'md',
            'text-base px-6 py-3 rounded-xl': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
