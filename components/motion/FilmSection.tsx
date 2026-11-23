'use client'

import { useEffect, useRef } from 'react'
import { FilmButton } from './FilmButton'
import { Reveal } from './Reveal'

/**
 * Wide film slot. Plays a silent loop of the project film in a cinema-ratio frame,
 * with a button that opens the full film with sound.
 * To swap in the final horizontal film, replace the file referenced by `src`.
 */
export function FilmSection({
  src,
  poster,
  eyebrow = 'The film',
  title,
  caption,
}: {
  src: string
  poster: string
  eyebrow?: string
  title: React.ReactNode
  caption?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.25 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <section className="full-bleed stone-dark stone-fixed relative py-24 md:py-36">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow !text-stone">{eyebrow}</p>
            </Reveal>
            <h2 className="mt-5 font-heading text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.95] text-offwhite">{title}</h2>
          </div>
          {caption && (
            <Reveal delay={0.15}>
              <p className="max-w-sm text-sm leading-relaxed text-stone">{caption}</p>
            </Reveal>
          )}
        </div>

        <Reveal>
          <div className="group relative aspect-[1920/928] w-full overflow-hidden bg-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]">
            <video
              ref={ref}
              src={src}
              poster={poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <FilmButton src={src} poster={poster} label="Watch with sound" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
