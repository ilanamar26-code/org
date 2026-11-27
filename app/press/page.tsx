import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPressItems } from '@/lib/sanity'
import { pressData } from '@/lib/press-data'
import { getOgImage } from '@/lib/og-image'
import { pressReleases, pressKit, mediaContact } from '@/lib/press-releases'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'Press | Orlinski Realty Group',
  description: 'Press releases, press kit and media coverage of Orlinski Realty Group and Orlinski Bay, Amoni.',
}

export const revalidate = 86400

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function PressPage() {
  const sanityPressItems = await getAllPressItems()
  const items = sanityPressItems.length > 0 ? sanityPressItems : pressData
  const coverage = await Promise.all(
    items.map(async (item: any) => {
      const url = item.url || item.link
      let image: string | null = item.featuredImage || item.ogImageUrl || null
      if (!image && url) image = await getOgImage(url).catch(() => null)
      if (image && image.includes('static.zawya.com')) image = null
      return {
        title: item.title || item.headline,
        publisher: item.publisher || item.source,
        date: item.publishedAt || item.date,
        url,
        image,
      }
    }),
  )
  coverage.sort((a: any, b: any) => (b.date || '').localeCompare(a.date || ''))
  const [lead, ...others] = pressReleases

  return (
    <div className="mx-auto max-w-[1200px] space-y-28 px-2 pb-24 pt-16 md:pt-24">
      <header className="max-w-3xl space-y-6">
        <p className="eyebrow">Press</p>
        <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] text-black">
          News & <span className="italic text-bronze">announcements.</span>
        </h1>
        <p className="text-lg text-graphite">
          Press releases, press kit and coverage of Orlinski Realty Group. Media enquiries:{' '}
          <a href={`mailto:${mediaContact}`} className="border-b border-black/40 hover:border-bronze hover:text-bronze">
            {mediaContact}
          </a>
        </p>
      </header>

      {/* I. Orlinski Bay */}
      <section className="space-y-12">
        <div className="flex flex-col gap-4 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="eyebrow">I · 2026</p>
            <h2 className="font-heading text-[clamp(2.6rem,5vw,4.6rem)] font-light leading-[1] text-black">
              Orlinski Bay <span className="italic text-bronze">· Amoni</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-graphite">
            Villas signed by Richard Orlinski on the Greek coast, with Liakos Associates Architects and RO Amoni.
          </p>
        </div>

        {lead && (
          <Reveal>
            <Link href={`/press/${lead.slug}`} className="group grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="relative aspect-[16/11] overflow-hidden bg-sand">
                <Image src={lead.image} alt={lead.title} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]" />
              </div>
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Press release · {fmt(lead.date)}</p>
                <h3 className="font-heading text-3xl font-light leading-tight text-black md:text-4xl">{lead.title}</h3>
                <p className="text-graphite">{lead.subtitle}</p>
                <span className="inline-block border-b border-black pb-1 text-[11px] uppercase tracking-[0.3em] group-hover:border-bronze group-hover:text-bronze">Read the release</span>
              </div>
            </Link>
          </Reveal>
        )}
        {others.map((r) => (
          <Link key={r.slug} href={`/press/${r.slug}`} className="block border-t border-black/15 py-6 hover:text-bronze">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{fmt(r.date)}</p>
            <p className="mt-2 font-heading text-2xl">{r.title}</p>
          </Link>
        ))}

        <div className="full-bleed bg-black text-offwhite">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-2">
            <div className="space-y-5">
              <p className="eyebrow !text-sand">Press kit</p>
              <h3 className="font-heading text-4xl font-light text-white">Orlinski Bay · Amoni</h3>
              <p className="text-stone">
                Images, fact sheet and interviews are available to journalists on request. Credit: Richard Orlinski ×
                Liakos.
              </p>
            </div>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {pressKit.map((k) => (
                <li key={k.label}>
                  <a href={k.href} download={k.href.startsWith('/press-kit') || k.href.endsWith('.svg') || k.href.endsWith('.mp4') ? '' : undefined} className="group flex items-center justify-between py-5">
                    <span className="font-heading text-2xl text-white group-hover:text-sand">{k.label}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stone">{k.detail} ↓</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* II. The beginning */}
      <section className="space-y-12">
        <div className="grid gap-10 border-b border-black/15 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <p className="eyebrow">II · 2025</p>
            <h2 className="font-heading text-[clamp(2.6rem,5vw,4.6rem)] font-light leading-[1] text-black">
              The <span className="italic text-bronze">beginning.</span>
            </h2>
            <p className="max-w-md text-graphite">
              October 2025, Dubai: Richard Orlinski and Orlinski Realty Group launch the first art-driven branded
              real estate house in the Middle East. How the press told the story.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden bg-black">
            <video src="/videos/org-launch-subtitled.mp4" controls playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.map((c: any, i: number) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <a href={c.url?.startsWith('http') ? c.url : `https://${c.url}`} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[3/2] overflow-hidden bg-sand">
                  {c.image ? (
                    <Image src={c.image} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  ) : (
                    <div className="stone-beige absolute inset-0 flex items-center justify-center p-6 text-center transition-transform duration-700 group-hover:scale-[1.04]">
                      <span className="font-heading text-3xl italic text-graphite">{c.publisher}</span>
                    </div>
                  )}
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted">
                  {c.publisher}
                  {c.date ? ` · ${fmt(c.date)}` : ''}
                </p>
                <p className="mt-2 font-heading text-2xl leading-snug text-black transition-colors group-hover:text-bronze">{c.title}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
