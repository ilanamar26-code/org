'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Developers', href: '/developers' },
  { label: 'Richard Orlinski', href: '/brands' },
  { label: 'Concepts', href: '/projects' },
  { label: 'Press', href: '/press' },
  { label: 'About', href: '/about' },
]
const contactItem = { label: 'Contact Us', href: '/contact' }

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-sm border-b border-stone/20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-24 overflow-hidden">
          <Link href="/" className="flex items-center h-full">
            <Logo variant="silver" className="h-24 md:h-40" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-graphite hover:text-black transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactItem.href}
              className="rounded-full border border-black/10 bg-black px-5 py-2 text-xs uppercase tracking-[0.3em] text-offwhite transition-colors hover:bg-graphite"
            >
              {contactItem.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-graphite p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-graphite hover:text-black transition-colors text-base font-medium py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={contactItem.href}
                className="mt-2 inline-flex w-fit rounded-full border border-black/10 bg-black px-5 py-2.5 text-xs uppercase tracking-[0.3em] text-offwhite transition-colors hover:bg-graphite"
                onClick={() => setMobileMenuOpen(false)}
              >
                {contactItem.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
