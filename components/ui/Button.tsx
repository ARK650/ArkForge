'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-accent text-white hover:bg-accent-hover',
      secondary: 'bg-surface text-text-primary hover:bg-border border border-border',
      outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
