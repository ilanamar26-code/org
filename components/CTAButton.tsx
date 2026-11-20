import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  href: string
  variant?: 'dark' | 'light' | 'bronze' | 'outlineLight'
  children: React.ReactNode
  className?: string
}

export function CTAButton({ href, variant = 'dark', children, className }: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] transition-all duration-200'
  const variants = {
    dark: 'bg-black text-offwhite hover:bg-graphite',
    light: 'bg-transparent text-black border border-black hover:bg-black hover:text-offwhite',
    bronze: 'bg-bronze text-white hover:bg-black',
    outlineLight: 'bg-transparent text-white border border-white/70 hover:bg-white hover:text-black',
  }

  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </Link>
  )
}
