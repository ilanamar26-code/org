import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Logo'

const footerLinks = {
  main: [
    { label: 'Press', href: '/press' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-offwhite mt-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="md:justify-self-start">
            <div className="md:hidden">
              <Logo variant="silver" className="h-36" />
            </div>
            <Image
              src="/logo/org-logo-horizontal-white.png"
              alt="Orlinski Realty Group"
              width={520}
              height={160}
              className="hidden md:block h-40 w-auto"
              priority
            />
          </div>

          {/* Description */}
          <div className="text-stone text-sm text-center max-w-md md:mx-auto">
            <p>Curating branded residences and hospitality partnerships. Confidentiality, curated access.</p>
          </div>

          {/* Main Links */}
          <div className="md:justify-self-end md:text-right">
            <h3 className="font-heading text-xs font-semibold mb-3 uppercase tracking-[0.2em]">Navigation</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-offwhite transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/20 mt-8 pt-5 text-center text-stone text-xs">
          <p>&copy; {new Date().getFullYear()} Orlinski Realty Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
