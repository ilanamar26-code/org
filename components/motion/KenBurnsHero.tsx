'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/** Full-screen opening image with a slow zoom and a fade as you scroll away. */
export function KenBurnsHero({ src, alt, children, shade = false }: { src: string; alt: string; children: React.ReactNode; shade?: boolean }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const y = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="full-bleed relative -mt-16 h-[100svh] min-h-[620px] overflow-hidden bg-black md:-mt-20">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      {shade && <div className="absolute inset-0 bg-[#2e2925]/35" />}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/15 to-transparent" />
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { opacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/70">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/25">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-white" />
        </span>
      </motion.div>
      <motion.div style={reduce ? undefined : { opacity, y }} className="relative z-10 h-full">
        {children}
      </motion.div>
    </section>
  )
}
