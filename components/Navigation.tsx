'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems: { label: string; href: string }[] = [
  { label: 'Developers', href: '/developers' },
  { label: 'Concepts', href: '/concepts' },
  { label: 'Richard Orlinski', href: '/brands' },
  { label: 'Press', href: '/press' },
  { label: 'About', href: '/about' },
]

// Pages that open on a full-screen image: the bar sits transparent over it.
const immersive = ['/', '/developers']

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const overImage = (immersive.includes(pathname) || pathname.startsWith('/press/')) && !scrolled && !open

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-colors duration-500',
        overImage
          ? 'bg-transparent text-white'
          : 'bg-offwhite/90 text-black backdrop-blur-md border-b border-black/5',
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-5 md:h-20 md:px-12">
        <Link href="/" className="relative block h-9 w-[74px] shrink-0 md:h-11 md:w-[90px]" aria-label="Orlinski Realty Group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/2027/org-h-creme.svg" alt="" className={cn('absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500', overImage ? 'opacity-100' : 'opacity-0')} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/2027/org-h-grege.svg" alt="" className={cn('absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500', overImage ? 'opacity-0' : 'opacity-100')} />
        </Link>

        <div className="ml-10 hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-9">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-100 xl:tracking-[0.28em]',
                  active ? 'opacity-100' : 'opacity-75',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px bg-current transition-all duration-500',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                  )}
                />
              </Link>
            )
          })}
          <Link
            href="/#register"
            className={cn(
              'border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] transition-colors',
              overImage
                ? 'border-white/70 hover:bg-white hover:text-black'
                : 'border-black bg-black text-offwhite hover:bg-bronze hover:border-bronze',
            )}
          >
            Register interest
          </Link>
        </div>

        <button className="-mr-2 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col justify-between bg-offwhite px-6 pb-10 pt-8 text-black md:top-20 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="font-heading text-4xl font-light">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="font-heading text-4xl font-light">
              Contact
            </Link>
          </div>
          <Link
            href="/#register"
            className="bg-black px-6 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-offwhite"
          >
            Register your interest
          </Link>
        </div>
      )}
    </nav>
  )
}
