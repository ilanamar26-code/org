'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'black' | 'white' | 'silver' | 'lace'
  className?: string
  width?: number
  height?: number
}

const logoMap = {
  black: '/logo/2027/org-h-grege.svg',
  white: '/logo/2027/org-h-creme.svg',
  silver: '/logo/2027/org-h-grege.svg',
  lace: '/logo/logo-lace.jpg',
}

export function Logo({ variant = 'silver', className, width, height }: LogoProps) {
  const src = logoMap[variant]
  const isSvg = variant !== 'lace'

  if (isSvg) {
    return (
      <img
        src={src}
        alt="Orlinski Realty Group"
        className={cn('h-8 w-auto', className)}
        style={width && height ? { width, height } : undefined}
      />
    )
  }

  return (
    <Image
      src={src}
      alt="Orlinski Realty Group"
      width={width || 900}
      height={height || 446}
      className={cn('h-8 w-auto', className)}
    />
  )
}
