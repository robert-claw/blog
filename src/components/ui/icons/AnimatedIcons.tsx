'use client';

import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
  size?: number;
}

// Lobster icon for Robert
export function LobsterIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        d="M12 4c-2 0-3.5 1-4.5 2.5C6.5 8 6 10 6 12c0 2 .5 4 1.5 5.5 1 1.5 2.5 2.5 4.5 2.5s3.5-1 4.5-2.5c1-1.5 1.5-3.5 1.5-5.5 0-2-.5-4-1.5-5.5C15.5 5 14 4 12 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.circle
        cx="10"
        cy="10"
        r="1.5"
        fill="currentColor"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="14"
        cy="10"
        r="1.5"
        fill="currentColor"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.path
        d="M8 14c0 2 1.79 3 4 3s4-1 4-3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Claws */}
      <motion.path
        d="M4 8L6 10M20 8L18 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ transformOrigin: 'center' }}
      />
    </motion.svg>
  );
}

// Document/Clipboard icon
export function ClipboardIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      whileHover={{ y: -2 }}
    >
      <motion.rect
        x="5"
        y="4"
        width="14"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M9 2h6v2H9z"
        fill="currentColor"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M9 11h6M9 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </motion.svg>
  );
}

// Search/Scout icon
export function SearchIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M16 16l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.circle
        cx="11"
        cy="11"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Flower/Dandelion icon
export function FlowerIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((rotation, i) => (
        <motion.ellipse
          key={i}
          cx="12"
          cy="8"
          rx="2"
          ry="4"
          fill="currentColor"
          opacity="0.7"
          style={{ transformOrigin: '12px 12px' }}
          initial={{ rotate: rotation }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: i * 0.2 
          }}
        />
      ))}
      {/* Center */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Stem */}
      <motion.path
        d="M12 15v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  );
}

// Target/North Star icon
export function TargetIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
    </motion.svg>
  );
}

// Checkmark/Complete icon
export function CheckIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M8 12l3 3 5-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.svg>
  );
}

// Construction/Building icon
export function ConstructionIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M3 20h18v-8l-9-7-9 7z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.rect
        x="9"
        y="14"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Money/Coin icon
export function CoinIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.path
        d="M12 6v12M9 9h6M9 15h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Brain/Organization icon
export function BrainIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M12 4c-3 0-5 2-5 5 0 1 .3 2 .8 2.8C7.3 13 7 14.5 7 16c0 3 2 5 5 5s5-2 5-5c0-1.5-.3-3-.8-4.2.5-.8.8-1.8.8-2.8 0-3-2-5-5-5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M9 12h6M10 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Seedling/Growth icon
export function SeedlingIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M12 20v-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M12 12c0-3 2-5 5-5 0 3-2 5-5 5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d="M12 12c0-3-2-5-5-5 0 3 2 5 5 5z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </motion.svg>
  );
}

// Shield/Lock icon for Laws
export function ShieldIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6l-8-4z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </motion.svg>
  );
}

// Flag/Warning icon
export function FlagIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M4 21V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.path
        d="M4 4h12l-2 4 2 4H4"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.2"
        strokeLinejoin="round"
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Pencil/Document icon
export function PencilIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <motion.path
        d="M12 19l-7 2 2-7 10-10 5 5-10 10z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M14 6l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

// Rocket icon
export function RocketIcon({ className = '', size = 40 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.path
        d="M12 2c-3 4-4 8-4 12h8c0-4-1-8-4-12z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.circle
        cx="12"
        cy="9"
        r="1.5"
        fill="currentColor"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.path
        d="M8 14l-3 6M16 14l3 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.svg>
  );
}
