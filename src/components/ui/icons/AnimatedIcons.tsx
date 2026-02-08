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

// Large Lobster Logo (for hero sections)
export function LobsterLogo({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {/* Body */}
      <motion.ellipse
        cx="50"
        cy="55"
        rx="20"
        ry="25"
        fill="#06B6D4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Head */}
      <motion.circle
        cx="50"
        cy="30"
        r="12"
        fill="#06B6D4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      {/* Eyes */}
      <motion.circle cx="45" cy="28" r="2" fill="#0f172a" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
      <motion.circle cx="55" cy="28" r="2" fill="#0f172a" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
      
      {/* Left Claw */}
      <motion.g
        initial={{ rotate: -20, x: -5 }}
        animate={{ rotate: [-20, -30, -20] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ transformOrigin: "25px 45px" }}
      >
        <path
          d="M 30 45 Q 20 40 15 35 L 12 38 Q 18 43 25 47 Z"
          fill="#06B6D4"
          stroke="#0891B2"
          strokeWidth="1"
        />
        {/* Claw pincer */}
        <path d="M 12 38 L 10 36 L 8 37 L 10 39 Z" fill="#06B6D4" />
        <path d="M 12 38 L 10 40 L 8 39 L 10 37 Z" fill="#06B6D4" />
      </motion.g>
      
      {/* Right Claw */}
      <motion.g
        initial={{ rotate: 20, x: 5 }}
        animate={{ rotate: [20, 30, 20] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        style={{ transformOrigin: "75px 45px" }}
      >
        <path
          d="M 70 45 Q 80 40 85 35 L 88 38 Q 82 43 75 47 Z"
          fill="#06B6D4"
          stroke="#0891B2"
          strokeWidth="1"
        />
        {/* Claw pincer */}
        <path d="M 88 38 L 90 36 L 92 37 L 90 39 Z" fill="#06B6D4" />
        <path d="M 88 38 L 90 40 L 92 39 L 90 37 Z" fill="#06B6D4" />
      </motion.g>
      
      {/* Tail segments */}
      <motion.ellipse cx="50" cy="75" rx="15" ry="8" fill="#06B6D4" opacity="0.9" />
      <motion.ellipse cx="50" cy="82" rx="12" ry="6" fill="#06B6D4" opacity="0.8" />
      <motion.ellipse cx="50" cy="88" rx="9" ry="4" fill="#06B6D4" opacity="0.7" />
      
      {/* Antennae */}
      <motion.line
        x1="45"
        y1="22"
        x2="40"
        y2="12"
        stroke="#06B6D4"
        strokeWidth="1.5"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ transformOrigin: "45px 22px" }}
      />
      <motion.line
        x1="55"
        y1="22"
        x2="60"
        y2="12"
        stroke="#06B6D4"
        strokeWidth="1.5"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ transformOrigin: "55px 22px" }}
      />
      
      {/* Legs */}
      {[35, 45, 55, 65].map((x, i) => (
        <motion.g key={i}>
          <motion.line
            x1={x}
            y1="55"
            x2={x - 8}
            y2="68"
            stroke="#06B6D4"
            strokeWidth="2"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
            style={{ transformOrigin: `${x}px 55px` }}
          />
          <motion.line
            x1={x}
            y1="55"
            x2={x + 8}
            y2="68"
            stroke="#06B6D4"
            strokeWidth="2"
            animate={{ rotate: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
            style={{ transformOrigin: `${x}px 55px` }}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
}

// Additional icon exports
export function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="none" whileHover={{ scale: 1.1, rotate: 5 }}>
      <motion.rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      <motion.line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <motion.line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <motion.line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

export function UserIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="none" whileHover={{ scale: 1.1 }}>
      <motion.circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
      <motion.path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
    </motion.svg>
  );
}

export function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="none" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
      <motion.circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
  );
}

export function BoltIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="currentColor" whileHover={{ scale: 1.2 }} animate={{ opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
      <motion.path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
    </motion.svg>
  );
}

export function BookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="none" whileHover={{ rotateY: 15 }}>
      <motion.path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <motion.path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
    </motion.svg>
  );
}

export function PackageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="none" whileHover={{ y: -5 }}>
      <motion.path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <motion.line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

export function SparklesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 24 24" fill="currentColor" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
      <motion.path d="M12 2l2.4 7.2L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.8L12 2z" animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
      <motion.circle cx="18" cy="6" r="2" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} />
      <motion.circle cx="6" cy="18" r="1.5" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }} />
    </motion.svg>
  );
}
