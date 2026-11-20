'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Slide = { src: string; title: string; caption: string }

/** Pinned section: vertical scroll moves a row of large images sideways. */
export function HorizontalGallery({ slides, eyebrow, title }: { slides: Slide[]; eyebrow: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0.05, 0.95], ['0vw', `-${(slides.length - 1) * 57.8 - 36}vw`])
  const progress = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%'])

  return (
    <section ref={ref} className="full-bleed stone-dark relative" style={{ height: `${slides.length * 50 + 60}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 flex w-full max-w-screen-2xl items-end justify-between px-6 md:px-12">
          <div>
            <p className="eyebrow !text-sand">{eyebrow}</p>
            <h2 className="mt-4 font-heading text-4xl font-light text-white md:text-6xl">{title}</h2>
          </div>
          <p className="hidden text-[10px] uppercase tracking-[0.3em] text-stone/70 md:block">Scroll →</p>
        </div>
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-12">
          {slides.map((s, i) => (
            <figure key={s.src} className="w-[82vw] shrink-0 md:w-[56vw]">
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                <Image src={s.src} alt={s.title} fill sizes="60vw" className="object-cover" />
              </div>
              <figcaption className="mt-5 flex items-baseline gap-5 text-white">
                <span className="font-heading text-xl text-bronze">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-heading text-2xl font-light md:text-3xl">{s.title}</span>
                <span className="hidden text-sm text-stone md:inline">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <div className="mx-auto mt-10 w-full max-w-screen-2xl px-6 md:px-12">
          <div className="h-px w-full bg-white/15">
            <motion.div className="h-px bg-sand" style={{ width: progress }} />
          </div>
        </div>
      </div>
    </section>
  )
}
