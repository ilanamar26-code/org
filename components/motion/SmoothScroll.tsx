'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/** Soft inertial scrolling on desktop. Off for touch devices and reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const lenis = new Lenis({ duration: 1.15, easing: (t: number) => 1 - Math.pow(1 - t, 3), anchors: true })
    let id = 0
    const raf = (time: number) => {
      lenis.raf(time)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])
  return null
}
