'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useIsMobile } from './useIsMobile'

/** "Watch the film" trigger that opens the project film full screen. */
export function FilmButton({
  src,
  poster,
  mobileSrc,
  mobilePoster,
  label = 'Watch the film',
  light = true,
  className,
}: {
  src: string
  poster?: string
  mobileSrc?: string
  mobilePoster?: string
  label?: string
  light?: boolean
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const video = useRef<HTMLVideoElement>(null)
  const mobile = useIsMobile()
  const vSrc = mobile && mobileSrc ? mobileSrc : src
  const vPoster = mobile && mobileSrc ? mobilePoster : poster

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    video.current?.play().catch(() => {})
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em]',
          light ? 'text-white' : 'text-black',
          className,
        )}
      >
        <span
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110',
            light ? 'border-white/70 group-hover:bg-white group-hover:text-black' : 'border-black/60 group-hover:bg-black group-hover:text-white',
          )}
        >
          <Play size={16} className="ml-0.5" fill="currentColor" />
        </span>
        {label}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12" onClick={() => setOpen(false)}>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black"
            >
              <X size={20} />
            </button>
            <video
              ref={video}
              src={vSrc}
              poster={vPoster}
              controls
              playsInline
              className={mobile && mobileSrc ? 'max-h-full w-auto max-w-full' : 'max-h-full w-full max-w-6xl'}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  )
}
