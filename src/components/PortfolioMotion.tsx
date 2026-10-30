import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

export const spring = { type: 'spring' as const, stiffness: 260, damping: 24 };

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ ...spring, delay: delay / 1000 }}>{children}</motion.div>;
}

export function Lift({ children, ...props }: HTMLMotionProps<'div'>) {
  const reduced = useReducedMotion();
  return <motion.div {...props} whileHover={reduced ? {} : { y: -7 }} transition={spring}>{children}</motion.div>;
}