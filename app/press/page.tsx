import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPressItems } from '@/lib/sanity'
import { pressData } from '@/lib/press-data'
import { pressReleases, pressKit, mediaContact } from '@/lib/press-releases'
import { Reveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'Press | Orlinski Realty Group',
  description: 'Press releases, press kit and media coverage of Orlinski Realty Group and Orlinski Bay, Amoni.',
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function PressPage() {
  const sanityPressItems = await getAllPressItems()
  const coverage = (sanityPressItems.length > 0 ? sanityPressItems : pressData).map((item: any) => ({
    title: item.title || item.headline,
    publisher: item.publisher || item.source,
    date: item.publishedAt || item.date,
    url: item.url || item.link,
  }))
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

      {/* Lead release */}
      {lead && (
      <Reveal>
        <Link href={`/press/${lead.slug}`} className="group grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative aspect-[16/11] overflow-hidden bg-sand">
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
              Press release · {fmt(lead.date)}
            </p>
            <h2 className="font-heading text-3xl font-light leading-tight text-black md:text-4xl">{lead.title}</h2>
            <p className="text-graphite">{lead.subtitle}</p>
            <span className="inline-block border-b border-black pb-1 text-[11px] uppercase tracking-[0.3em] group-hover:border-bronze group-hover:text-bronze">
              Read the release
            </span>
          </div>
        </Link>
      </Reveal>
      )}

      {others.length > 0 && (
        <section className="space-y-6">
          {others.map((r) => (
            <Link key={r.slug} href={`/press/${r.slug}`} className="block border-t border-black/15 py-6 hover:text-bronze">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{fmt(r.date)}</p>
              <p className="mt-2 font-heading text-2xl">{r.title}</p>
            </Link>
          ))}
        </section>
      )}

      {/* Press kit */}
      <section className="full-bleed bg-black text-offwhite">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-2">
          <div className="space-y-5">
            <p className="eyebrow !text-sand">Press kit</p>
            <h2 className="font-heading text-4xl font-light text-white">Orlinski Bay · Amoni</h2>
            <p className="text-stone">
              Images are non-contractual artist&apos;s impressions by Liakos Associates Architects. Credit: Richard
              Orlinski × Liakos. Areas are indicative.
            </p>
          </div>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {pressKit.map((k) => (
              <li key={k.label}>
                <a
                  href={k.href}
                  download={k.href.startsWith('/press-kit') || k.href.endsWith('.svg') || k.href.endsWith('.mp4') ? '' : undefined}
                  className="group flex items-center justify-between py-5"
                >
                  <span className="font-heading text-2xl text-white group-hover:text-sand">{k.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-stone">{k.detail} ↓</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage */}
      <section className="space-y-10">
        <div className="flex items-end justify-between">
          <div className="space-y-4">
            <p className="eyebrow">In the media</p>
            <h2 className="font-heading text-4xl font-light text-black md:text-5xl">Coverage</h2>
          </div>
        </div>
        <ul className="border-t border-black/15">
          {coverage.map((c: any, i: number) => (
            <li key={i} className="border-b border-black/15">
              <a
                href={c.url?.startsWith('http') ? c.url : `https://${c.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-6 md:grid-cols-[200px_1fr_120px] md:items-baseline"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted">{c.publisher}</span>
                <span className="font-heading text-2xl text-black transition-colors group-hover:text-bronze">{c.title}</span>
                <span className="text-sm text-muted md:text-right">{c.date ? fmt(c.date) : ''}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
