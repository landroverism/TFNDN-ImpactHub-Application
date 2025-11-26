import { Variants } from 'framer-motion';

/**
 * Reusable Framer Motion animation variants for consistent animations across the app
 */

// Page transition animations
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Card hover animations
export const cardHover = {
  whileHover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

// Button animations
export const buttonHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

// Icon button animations
export const iconButtonHover = {
  whileHover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    scale: 0.9,
  },
};

// Fade in animation
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Stagger children animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Quiz/form page transitions
export const quizPageTransition: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Loading pulse animation
export const loadingPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Shimmer effect for skeleton loaders
export const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Helper function to create staggered animation delays
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

/**
 * Helper function to create custom page transition with delay
 */
export const createPageTransition = (delay: number = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

/**
 * Viewport animation (triggers when element enters viewport)
 */
export const viewportAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

