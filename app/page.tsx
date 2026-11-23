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
import { RevealFrame } from '@/components/motion/RevealFrame'

const gallery = [
  { src: ob.images.villaPool, title: 'The villa', caption: 'A sculpted shell of stone, opened to the sea.' },
  { src: ob.images.arrival, title: 'The arrival', caption: 'Through the rock, into the light.' },
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
              <Link
                href="/orlinski-bay"
                className="bg-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
              >
                Enter Orlinski Bay
              </Link>
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
            On the Saronic coast of Corinthia, less than two hours from Athens, Richard Orlinski and Liakos Associates
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

      {/* The rock: split, big image left, three moments right on faceted stone */}
      <section className="full-bleed grid lg:min-h-[100svh] lg:grid-cols-2">
        <div className="relative min-h-[70svh] overflow-hidden lg:min-h-full">
          <RevealFrame className="absolute inset-0">
            <Image src={ob.images.heroCliff} alt="An Orlinski Bay villa set into the cliff above the Saronic Gulf" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </RevealFrame>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <p className="absolute bottom-8 left-6 text-[10px] uppercase tracking-[0.35em] text-offwhite/90 md:left-12">Amoni · the cliff</p>
        </div>

        <div className="stone-beige flex items-center px-6 py-24 md:px-16 lg:py-32 xl:px-24">
          <div className="w-full max-w-xl">
            <Reveal>
              <p className="eyebrow">The rock</p>
            </Reveal>
            <h2 className="mt-6 font-heading text-[clamp(2.6rem,4.4vw,4.4rem)] font-light leading-[1.02] text-black">
              Carved, <span className="italic text-bronze">not placed.</span>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-graphite">
                Orlinski reads the hillside the way he reads a raw block, facet by facet. The rock stays where it is, and every villa is drawn around it.
              </p>
            </Reveal>

            <ol className="mt-14 divide-y divide-black/10 border-y border-black/10">
              {[
                { n: '01', t: 'Arrive through it', d: 'A bronze door set into the raw rock face.', src: ob.images.entrance },
                { n: '02', t: 'Sleep against it', d: 'Suites built on the natural rock wall.', src: ob.images.suite },
                { n: '03', t: 'Bathe beside it', d: 'Baths that open onto the gulf.', src: ob.images.bath },
              ].map((m, i) => (
                <Reveal key={m.n} delay={0.1 + i * 0.08}>
                  <li className="group flex items-center gap-6 py-6">
                    <span className="w-8 shrink-0 font-heading text-lg italic text-bronze">{m.n}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-2xl text-black md:text-[1.7rem]">{m.t}</p>
                      <p className="mt-1 text-sm text-muted">{m.d}</p>
                    </div>
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden md:h-24 md:w-36">
                      <Image src={m.src} alt="" fill sizes="144px" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

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
          { v: '1 h 50', l: 'From Athens' },
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

      {/* 6. The artist */}
      <section className="mx-auto grid max-w-[1200px] gap-14 px-2 py-28 md:py-40 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <ParallaxImage src={ob.images.richard} alt="Richard Orlinski" className="aspect-[4/5]" strength={8} sizes="50vw" />
        </Reveal>
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow">Richard Orlinski</p>
          </Reveal>
          <blockquote className="font-heading text-[clamp(2.2rem,4vw,3.8rem)] font-light italic leading-[1.1] text-black">
            <WordReveal text={`« ${ob.quote} »`} />
          </blockquote>
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-graphite">
              Best-selling French contemporary artist worldwide since 2015, shown in 200+ galleries. Orlinski Bay is his
              first signature residential destination in Greece.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/brands" className="inline-block border-b border-black pb-1 text-[11px] uppercase tracking-[0.3em] text-black hover:border-bronze hover:text-bronze">
              The artist
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7. Register */}
      <section className="full-bleed relative h-[90vh] min-h-[560px] overflow-hidden">
        <Image src={ob.images.night} alt="Orlinski Bay at night" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-sand">Private presentation · Athens</p>
          </Reveal>
          <h2 className="mt-8 font-heading text-[clamp(2.6rem,6vw,6rem)] font-light leading-[1] text-white">
            <WordReveal text="Own a piece of Orlinski Bay." />
          </h2>
          <Reveal delay={0.25}>
            <Link
              href="/orlinski-bay#register"
              className="mt-12 inline-block bg-white px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
            >
              Register your interest
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 8. For developers worldwide */}
      <section className="mx-auto grid max-w-[1200px] gap-14 px-2 py-28 md:py-40 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow">For developers, worldwide</p>
          </Reveal>
          <h2 className="font-heading text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[1.04] text-black">
            <WordReveal text="Orlinski Bay is the template." />
            <br />
            <WordReveal text="Your site, next." className="italic text-bronze" />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-graphite">
              Orlinski Realty Group is the exclusive real estate licensee of Richard Orlinski. We partner with developers
              on villas, residences and hotels, bringing artistic direction, brand, story, original works and the sales
              stage. You develop and build; we make it a destination.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/developers"
                className="bg-black px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-offwhite transition-colors hover:bg-bronze"
              >
                Partner with us
              </Link>
              <Link
                href="/contact"
                className="border border-black px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-black hover:text-offwhite"
              >
                Submit a project
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Reveal className="col-span-2">
            <ParallaxImage src={ob.images.living} alt="Orlinski Bay interior" className="aspect-[16/10]" strength={6} sizes="55vw" />
          </Reveal>
          {[
            { v: 'Middle East', l: 'Home territory · Dubai' },
            { v: 'Greece', l: 'Orlinski Bay · launched' },
            { v: 'French Alps', l: 'Next project' },
            { v: 'Worldwide', l: 'Projects reviewed case by case' },
          ].map((m, i) => (
            <Reveal key={m.v} delay={i * 0.08}>
              <div className="border-t border-black/15 pt-4">
                <p className="font-heading text-2xl text-black">{m.v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted">{m.l}</p>
              </div>
            </Reveal>
          ))}
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
