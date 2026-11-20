'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Counts up to a number when it scrolls into view. Non-numeric values render as is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const n = /^\d+$/.test(value) ? parseInt(value, 10) : null
  const [shown, setShown] = useState(n === null || reduce ? value : '0')

  useEffect(() => {
    if (!inView || n === null || reduce) return
    const start = performance.now()
    const dur = 1400
    let id = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setShown(String(Math.round(n * (1 - Math.pow(1 - p, 3)))))
      if (p < 1) id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [inView, n, reduce])

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  )
}
