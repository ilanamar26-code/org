import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'
import { KenBurnsHero } from '@/components/motion/KenBurnsHero'
import { Reveal, WordReveal } from '@/components/motion/Reveal'

export const metadata: Metadata = {
  title: 'For Developers | Orlinski Realty Group',
  description:
    'Bring the art of Richard Orlinski to your project. Orlinski Realty Group partners with developers worldwide on art-driven branded residences, villas and hospitality.',
}

const delivered = [
  { n: '01', t: 'Artistic direction', d: "Richard Orlinski's sketches set the facets, the pools and the line of the rock, carried into stone by the architects." },
  { n: '02', t: 'Brand & identity', d: 'The destination name, Orlinski Bay · Amoni, its logo and the full brand architecture.' },
  { n: '03', t: 'Story & sales tools', d: 'Presentation, brochure, film, fact sheet and press campaign for the launch.' },
  { n: '04', t: 'Original works', d: 'Orlinski works selected for every villa and delivered installed, part of the architecture.' },
  { n: '05', t: 'Sales gallery', d: "L'Atelier in Kolonaki, Athens: the showroom where buyers discover the villas among the artist's works." },
  { n: '06', t: 'Brand governance', d: "Approval of everything designed or published under the artist's name, from façade to door handle." },
]

const formats = [
  { t: 'Villa collections', d: 'Limited series of signed villas on exceptional sites, like Orlinski Bay.', image: ob.images.villaPool },
  { t: 'Hotels & residences', d: 'Hospitality and branded residences in the city, with the Orlinski universe throughout.', image: '/images/wild-collection/szr-living.jpg' },
  { t: 'Coast & mountain', d: 'Beachfront living and alpine retreats, from the Gulf to the French Alps.', image: '/images/wild-collection/bear-out.jpg' },
]

const markets = [
  { place: 'Middle East', status: 'Home territory', d: 'Headquartered in Dubai, where ORG was founded.' },
  { place: 'Greece', status: 'Launched', d: 'Orlinski Bay · Amoni, ten villas, sales open 1 December 2026.' },
  { place: 'French Alps', status: 'Next', d: 'A second project, unique in its kind, in the coming months.' },
  { place: 'Your market', status: 'Open', d: 'We review exceptional projects worldwide, case by case.' },
]

const steps = [
  { t: 'Confidential discussion', d: 'Your site, your market, your programme and how the Orlinski universe can elevate it.' },
  { t: 'Fit assessment', d: 'Positioning, buyer profile and brand alignment, reviewed with our team and the artist’s.' },
  { t: 'Concept package', d: 'Design language, art integration, naming and the narrative that will carry the sales.' },
  { t: 'Agreement & launch', d: 'A licence structured around your project, then artistic direction through to launch.' },
]

export default function DevelopersPage() {
  return (
    <div>
      <KenBurnsHero src={ob.images.living} alt="Double-height living room of an Orlinski Bay villa">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pb-14 md:px-12 md:pb-20">
          <p className="eyebrow !text-sand">For developers, worldwide</p>
          <h1 className="mt-5 max-w-4xl font-heading text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.92] text-white">
            Your project, <span className="italic">signed Orlinski.</span>
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg text-white/85">
              We partner with developers to turn exceptional sites into collectible addresses: differentiation, pricing
              power and a story buyers remember.
            </p>
            <div className="flex flex-col gap-3 whitespace-nowrap sm:flex-row">
              <Link
                href="/contact"
                className="bg-white px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
              >
                Submit your project
              </Link>
              <a
                href="#case"
                className="border border-white/70 px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-black"
              >
                The Orlinski Bay case
              </a>
            </div>
          </div>
        </div>
      </KenBurnsHero>

      {/* Case study */}
      <section id="case" className="mx-auto max-w-[1200px] scroll-mt-24 space-y-16 px-2 py-28 md:py-36">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">Case study · Orlinski Bay, Greece</p>
            <h2 className="font-heading text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-[1.02] text-black">
              <WordReveal text="From a raw hillside" />
              <br />
              <WordReveal text="to a signed collection." className="italic text-bronze" />
            </h2>
          </div>
          <Reveal>
            <p className="text-lg leading-relaxed text-graphite">
              On the Saronic coast, our Greek partner KAMAI owned an untouched stretch of rock and pine. KAMAI develops,
              builds and sells. Orlinski Realty Group brought everything that makes it an Orlinski destination: ten villas
              that are works of art, a name, a story and a place to sell them.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden bg-sand">
              <Image src={ob.images.heroCliff} alt="Orlinski Bay villa on the cliff" fill sizes="60vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-between gap-6 bg-black p-8 text-offwhite">
              <div className="space-y-6">
                {[
                  { v: '10', l: 'Signed villas' },
                  { v: '3', l: 'Typologies' },
                  { v: '1', l: 'Sales gallery, Athens' },
                ].map((n) => (
                  <div key={n.l} className="border-b border-white/15 pb-5">
                    <p className="font-heading text-5xl font-light">{n.v}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone">{n.l}</p>
                  </div>
                ))}
              </div>
              <Link href="/orlinski-bay" className="text-[11px] uppercase tracking-[0.3em] text-sand hover:text-white">
                See the project →
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-12 border-t border-black/15 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {delivered.map((x, i) => (
            <Reveal key={x.n} delay={(i % 3) * 0.1}>
              <div className="space-y-3">
                <p className="font-heading text-xl text-bronze">{x.n}</p>
                <p className="font-heading text-2xl text-black">{x.t}</p>
                <p className="text-sm leading-relaxed text-graphite">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="full-bleed bg-black text-offwhite">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-24 md:px-2 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <p className="eyebrow !text-sand">Why an artist, not a logo</p>
            <h2 className="font-heading text-4xl font-light leading-[1.05] text-white md:text-6xl">
              Branded residences have mostly meant a name on a façade.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-stone">
            <p>
              Demand is moving from generic luxury towards homes with a genuine identity. We answer it differently: the
              art is in the architecture itself, by one of the best-selling contemporary French artists in the world,
              followed by more than nine million people.
            </p>
            <p>
              For developers, that means a project buyers cannot find anywhere else, an audience that already exists,
              and a launch that becomes news.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {[
                { v: 'Differentiation', l: 'A project no one can copy' },
                { v: 'Pricing power', l: 'Art as added value' },
                { v: 'Visibility', l: "The artist's global reach" },
              ].map((x) => (
                <div key={x.v}>
                  <p className="font-heading text-xl text-white">{x.v}</p>
                  <p className="mt-2 text-xs text-stone/80">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-28 md:py-36">
        <div className="max-w-2xl space-y-6">
          <p className="eyebrow">What we can sign</p>
          <h2 className="font-heading text-4xl font-light leading-[1.05] text-black md:text-6xl">
            One universe, <span className="italic">many addresses.</span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.1}>
              <div className="group space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={f.image}
                    alt={f.t}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="font-heading text-2xl text-black">{f.t}</p>
                <p className="text-sm leading-relaxed text-graphite">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="full-bleed bg-sand">
        <div className="mx-auto max-w-[1200px] space-y-12 px-6 py-24 md:px-2">
          <div className="max-w-2xl space-y-6">
            <p className="eyebrow">Where we work</p>
            <h2 className="font-heading text-4xl font-light leading-[1.05] text-black md:text-5xl">
              Born in Dubai, <span className="italic">open to the world.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m) => (
              <div key={m.place} className="space-y-3 bg-sand p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-bronze">{m.status}</p>
                <p className="font-heading text-3xl text-black">{m.place}</p>
                <p className="text-sm leading-relaxed text-graphite">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-28 md:py-36">
        <div className="max-w-2xl space-y-6">
          <p className="eyebrow">How we work</p>
          <h2 className="font-heading text-4xl font-light leading-[1.05] text-black md:text-5xl">
            Four steps, <span className="italic">in confidence.</span>
          </h2>
        </div>
        <ol className="grid gap-10 border-t border-black/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="space-y-3">
              <p className="font-heading text-5xl font-light text-bronze">{i + 1}</p>
              <p className="font-heading text-2xl text-black">{s.t}</p>
              <p className="text-sm leading-relaxed text-graphite">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="full-bleed relative h-[80vh] min-h-[520px] overflow-hidden">
        <Image src={ob.images.aerial} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-[900px] flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow !text-sand">Developers & landowners</p>
          <h2 className="mt-8 font-heading text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1.02] text-white">
            <WordReveal text="Have a site that deserves a signature?" />
          </h2>
          <Link
            href="/contact"
            className="mt-12 bg-white px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
          >
            Start a confidential discussion
          </Link>
        </div>
      </section>
    </div>
  )
}
