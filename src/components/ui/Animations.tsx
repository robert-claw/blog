'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

// Page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Fade in on scroll
export function FadeIn({ 
  children, 
  delay = 0,
  direction = 'up'
}: { 
  children: ReactNode; 
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation
export function StaggerContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Hover scale effect
export function HoverScale({ children, scale = 1.02 }: { children: ReactNode; scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

// Floating animation
export function Float({ children, duration = 3 }: { children: ReactNode; duration?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Pulse glow effect
export function PulseGlow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(6, 182, 212, 0)',
          '0 0 40px rgba(6, 182, 212, 0.3)',
          '0 0 20px rgba(6, 182, 212, 0)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="rounded-2xl"
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Counter animation
export function CountUp({ value, duration = 2 }: { value: string; duration?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      {value}
    </motion.span>
  );
}
