import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { pressReleases, aboutOrg, mediaContact, pressKit } from '@/lib/press-releases'

export function generateStaticParams() {
  return pressReleases.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = pressReleases.find((x) => x.slug === params.slug)
  if (!r) return {}
  return {
    title: `${r.title} | Orlinski Realty Group`,
    description: r.subtitle,
    openGraph: { title: r.title, description: r.subtitle, images: [r.image] },
  }
}

export default function PressReleasePage({ params }: { params: { slug: string } }) {
  const r = pressReleases.find((x) => x.slug === params.slug)
  if (!r) notFound()

  return (
    <article className="pb-24">
      <section className="full-bleed relative -mt-16 h-[70vh] min-h-[460px] md:-mt-20">
        <Image src={r.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1000px] px-6 pb-12">
          <p className="eyebrow !text-sand">Press release · {r.dateline}</p>
          <h1 className="mt-5 font-heading text-[clamp(2rem,4.4vw,3.8rem)] font-light leading-[1.08] text-white">
            {r.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1100px] gap-16 px-2 pt-16 lg:grid-cols-[1fr_300px]">
        <div className="space-y-7">
          <p className="font-heading text-2xl font-light italic leading-snug text-black">{r.subtitle}</p>
          {r.paragraphs.slice(0, 3).map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-graphite">
              {i === 0 && <strong className="font-medium text-black">{r.dateline}. </strong>}
              {p}
            </p>
          ))}

          <blockquote className="my-12 border-l border-bronze pl-8">
            <p className="font-heading text-3xl font-light italic leading-snug text-black">« {r.quotes[0].text} »</p>
            <footer className="mt-5 text-[11px] uppercase tracking-[0.3em] text-muted">
              {r.quotes[0].name} · {r.quotes[0].role}
            </footer>
          </blockquote>

          {r.paragraphs.slice(3).map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-graphite">
              {p}
            </p>
          ))}

          <div className="space-y-10 pt-6">
            {r.quotes.slice(1).map((q) => (
              <figure key={q.name} className="border-t border-black/15 pt-6">
                <blockquote className="font-heading text-2xl font-light italic leading-snug text-black">« {q.text} »</blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted">
                  {q.name} · {q.role}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="space-y-3 border-t border-black/15 pt-10">
            <p className="eyebrow">About Orlinski Realty Group</p>
            <p className="leading-relaxed text-graphite">{aboutOrg}</p>
            <p className="text-sm text-muted">
              Media contact:{' '}
              <a href={`mailto:${mediaContact}`} className="underline underline-offset-4 hover:text-bronze">
                {mediaContact}
              </a>
            </p>
          </div>
        </div>

        <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="eyebrow mb-5">Key facts</p>
            <dl className="divide-y divide-black/10 border-y border-black/10">
              {r.facts.map((f) => (
                <div key={f.label} className="py-3">
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm text-black">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow mb-5">Press kit</p>
            <ul className="space-y-3">
              {pressKit.map((k) => (
                <li key={k.label}>
                  <a href={k.href} className="text-sm text-black underline-offset-4 hover:text-bronze hover:underline">
                    {k.label} <span className="text-muted">· {k.detail}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/orlinski-bay"
            className="block bg-black px-6 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-offwhite hover:bg-bronze"
          >
            Discover Orlinski Bay
          </Link>
        </aside>
      </div>
    </article>
  )
}
