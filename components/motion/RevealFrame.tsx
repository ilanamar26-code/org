'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/** Image frame that opens like a curtain, with a slow settle of the image inside. */
export function RevealFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={cn('relative overflow-hidden', className)}>{children}</div>
  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial={{ clipPath: 'inset(10% 6% 10% 6%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
