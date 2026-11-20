'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/** Image that drifts slightly inside its frame as the page scrolls. */
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 12,
  sizes = '100vw',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  strength?: number
  sizes?: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-sand', className)}>
      <motion.div className="absolute inset-[-14%_0]" style={reduce ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  )
}
