import Image from 'next/image'
import Link from 'next/link'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'
import { KenBurnsHero } from '@/components/motion/KenBurnsHero'
import { Reveal, WordReveal } from '@/components/motion/Reveal'
import { ParallaxImage } from '@/components/motion/ParallaxImage'
import { HorizontalGallery } from '@/components/motion/HorizontalGallery'
import { FilmButton } from '@/components/motion/FilmButton'
import { pressReleases } from '@/lib/press-releases'
import { CountUp } from '@/components/motion/CountUp'
import { Marquee } from '@/components/motion/Marquee'
import { FilmSection } from '@/components/motion/FilmSection'
import { RegisterInterestForm } from '@/components/RegisterInterestForm'

const gallery = [
  { src: ob.images.villaPool, title: 'The villa', caption: 'A sculpted shell of stone, opened to the sea.' },
  { src: ob.images.entrance, title: 'The arrival', caption: 'Through the rock, into the light.' },
  { src: ob.images.living, title: 'Interiors', caption: 'Double height, open to the sea.' },
  { src: ob.images.lounge, title: 'The lounge', caption: 'A sunken lounge around the fire.' },
  { src: ob.images.suite, title: 'The suites', caption: 'Sleeping against the cliff.' },
  { src: ob.images.bath, title: 'The bath', caption: 'Carved stone, facing the open sea.' },
]

export default function HomePage() {
  return (
    <div>
      {/* 1. Opening */}
      <KenBurnsHero src={ob.images.hero} alt="An Orlinski Bay villa at dusk, Amoni">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pb-14 md:px-12 md:pb-20">
          <p className="eyebrow !text-sand">Orlinski Realty Group presents</p>
          <h1 className="mt-4 font-heading text-[clamp(4rem,13vw,13rem)] font-light leading-[0.85] tracking-[-0.01em] text-white">
            Orlinski Bay
          </h1>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md font-heading text-2xl font-light italic text-white/90 md:text-3xl">
              Ten villas signed by Richard Orlinski. Amoni, Greece.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 whitespace-nowrap">
              <a
                href="#register"
                className="bg-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
              >
                Register your interest
              </a>
              <FilmButton src={ob.film.src} poster={ob.film.poster} label="The film" />
            </div>
          </div>
        </div>
      </KenBurnsHero>

      {/* 2. Statement, on faceted stone */}
      <section className="full-bleed stone-beige stone-fixed">
      <div className="mx-auto max-w-[1100px] px-6 py-32 text-center md:py-48">
        <Reveal>
          <p className="eyebrow">Our first destination</p>
        </Reveal>
        <h2 className="mt-8 font-heading text-[clamp(2.4rem,5.4vw,5.2rem)] font-light leading-[1.05] text-black">
          <WordReveal text="Ten villas. One hillside." />
          <br />
          <WordReveal text="Most of the rock, kept." className="italic text-bronze" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-graphite">
            On the Saronic coast of Corinthia, an hour and a half from Athens, Richard Orlinski and Liakos Associates
            Architects carve a private collection into the cliff above the sea.
          </p>
        </Reveal>
      </div>
      </section>

      {/* Film slot (horizontal) */}
      <FilmSection
        src={ob.film.src}
        poster={ob.film.poster}
        title={<>From rock <span className="italic text-stone">to art.</span></>}
        caption="Richard Orlinski, Liakos Associates and KAMAI Group on how ten villas are drawn out of a Greek hillside."
      />

      {/* Signatures marquee */}
      <section className="full-bleed border-y border-black/10 py-7">
        <Marquee
          className="font-heading text-3xl font-light italic text-black md:text-4xl"
          items={['Richard Orlinski × Liakos Associates', 'Orlinski Bay · Amoni', 'Developed by KAMAI Group', "L'Atelier · Athens", 'Orlinski Realty Group']}
        />
      </section>

      {/* 3. Full-bleed parallax */}
      <section className="full-bleed">
        <ParallaxImage src={ob.images.aerial} alt="The Saronic coast seen from above" className="h-[85vh] min-h-[480px]" />
      </section>

      {/* 4. Numbers */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-6 px-2 py-20 md:grid-cols-4 md:py-36">
        {[
          { v: '10', l: 'Villas, one collection' },
          { v: '3', l: 'Typologies' },
          { v: '1 h 30', l: 'From Athens' },
          { v: '1', l: 'Artist' },
        ].map((n, i) => (
          <Reveal key={n.l} delay={i * 0.1} className="border-black/15 py-6 text-center md:border-l md:first:border-l-0">
            <CountUp value={n.v} className="block font-heading text-6xl font-light leading-none text-black md:text-8xl" />
            <p className="mt-5 text-[10px] uppercase tracking-[0.32em] text-muted">{n.l}</p>
          </Reveal>
        ))}
      </section>

      {/* 5. Horizontal gallery */}
      <HorizontalGallery eyebrow="Inside Orlinski Bay" title="Stone, bronze and the sea." slides={gallery} />

      {/* 7. Register */}
      <section className="full-bleed relative">
        <Image src={ob.images.night} alt="An Orlinski Bay villa at dusk" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div
          id="register"
          className="relative z-10 mx-auto grid max-w-screen-2xl scroll-mt-24 gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div className="space-y-6 text-white">
            <Reveal>
              <p className="eyebrow !text-sand">L&apos;Atelier · Athens</p>
            </Reveal>
            <h2 className="font-heading text-[clamp(2.6rem,4.6vw,4.6rem)] font-light leading-[1.02] text-white">
              <WordReveal text="Discover Orlinski Bay at L'Atelier." />
            </h2>
            <p className="text-lg leading-relaxed text-white/85">
              The project&apos;s exclusive sales gallery opens on {ob.atelier.opening}, at {ob.atelier.address}. The
              villas are presented there by appointment, alongside Richard Orlinski works selected for the collection.
            </p>
            <p className="text-sm text-white/70">
              Sales exclusively through L&apos;Atelier ·{' '}
              <a href={`mailto:${ob.atelier.email}`} className="underline underline-offset-4 hover:text-white">
                {ob.atelier.email}
              </a>
            </p>
          </div>
          <div className="bg-ivory p-8 md:p-12">
            <RegisterInterestForm />
          </div>
        </div>
      </section>

      {/* 9. Latest news */}
      {pressReleases[0] && (
      <section className="mx-auto max-w-[1200px] px-2 pb-24">
        <Link
          href={`/press/${pressReleases[0].slug}`}
          className="group flex flex-col gap-4 border-y border-black/15 py-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bronze">Press release · {pressReleases[0].dateline}</p>
            <p className="max-w-3xl font-heading text-2xl text-black transition-colors group-hover:text-bronze md:text-3xl">
              {pressReleases[0].title}
            </p>
          </div>
          <span className="shrink-0 text-[11px] uppercase tracking-[0.3em] text-black">Read →</span>
        </Link>
      </section>
      )}
    </div>
  )
}
