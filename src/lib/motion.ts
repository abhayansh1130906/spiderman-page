import type { Variants } from "framer-motion";

/** Power easing — 0.16, 1, 0.3, 1 cubic bezier */
export const EASE_POWER = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number
];

/** Shared fade-up reveal variant for whileInView sections */
export function fadeUpVariant(duration = 0.8, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: EASE_POWER },
    },
  };
}

/** Stagger container variant */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

/** Card reveal variant */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_POWER },
  },
};
