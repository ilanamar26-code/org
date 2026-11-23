import Link from 'next/link'
import { site } from '@/lib/site'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'

const explore = [
  { label: 'For developers', href: '/developers' },
  { label: 'Concepts', href: '/concepts' },
  { label: 'Richard Orlinski', href: '/brands' },
  { label: 'Press', href: '/press' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const socials = [
    { label: 'Instagram', href: site.social.instagram },
    { label: 'LinkedIn', href: site.social.linkedin },
  ].filter((s) => s.href)

  return (
    <footer className="stone-dark text-offwhite">
      <div className="mx-auto max-w-screen-2xl px-6 pb-10 pt-24 md:px-12">
        <p className="whitespace-nowrap font-heading text-[clamp(1.5rem,5.6vw,6rem)] font-light leading-none text-white">
          Where real estate <span className="italic text-sand">becomes art.</span>
        </p>

        <div className="mt-20 grid gap-12 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/2027/org-h-creme.svg" alt="Orlinski Realty Group" className="h-14 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-stone">
              Art-driven branded real estate signed Richard Orlinski: residences, towers, hotels and villas.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-sand">Explore</p>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-sand">{ob.atelier.name}</p>
            <p className="text-sm leading-relaxed text-stone">
              Orlinski Bay sales gallery
              <br />
              {ob.atelier.address}
              <br />
              Opening {ob.atelier.opening}
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block border-b border-white/40 pb-1 text-[11px] uppercase tracking-[0.3em] text-white hover:border-sand hover:text-sand"
            >
              Start a conversation
            </Link>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-sand">Contact</p>
            <p className="text-sm leading-relaxed text-stone">
              Orlinski Realty Group
              <br />
              {site.city}
            </p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-white hover:text-sand">
              {site.email}
            </a>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.3em] text-stone hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-stone/70 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Orlinski Realty Group. All rights reserved.</p>
          <p>Images are non-contractual artist&apos;s impressions.</p>
        </div>
      </div>
    </footer>
  )
}
