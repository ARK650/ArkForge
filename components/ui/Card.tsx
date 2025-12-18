'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles =
    'bg-surface rounded-xl border border-border overflow-hidden';

  if (hover) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`${baseStyles} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
