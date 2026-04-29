import { motion } from 'motion/react';

interface FloatingOrbsProps {
  variant?: 'light' | 'dark';
}

export function FloatingOrbs({ variant = 'light' }: FloatingOrbsProps) {
  const orbColors = variant === 'light' 
    ? {
        primary: 'bg-[#06b6d4]/10',
        secondary: 'bg-[#8b5cf6]/10'
      }
    : {
        primary: 'bg-[#06b6d4]/20',
        secondary: 'bg-[#8b5cf6]/20'
      };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-20 left-10 w-72 h-72 ${orbColors.primary} rounded-full blur-3xl`}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute bottom-20 right-10 w-96 h-96 ${orbColors.secondary} rounded-full blur-3xl`}
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 w-64 h-64 ${orbColors.primary} rounded-full blur-3xl opacity-50`}
        animate={{ 
          y: [-50, 50, -50], 
          x: [-50, 50, -50],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
