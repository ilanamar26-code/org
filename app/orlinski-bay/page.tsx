import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'
import { RegisterInterestForm } from '@/components/RegisterInterestForm'
import { cn } from '@/lib/utils'
import { KenBurnsHero } from '@/components/motion/KenBurnsHero'
import { FilmButton } from '@/components/motion/FilmButton'
import { Reveal } from '@/components/motion/Reveal'
import { RevealFrame } from '@/components/motion/RevealFrame'

export const metadata: Metadata = {
  title: 'Orlinski Bay, Amoni | Ten villas by Richard Orlinski in Greece',
  description:
    'Ten villas signed by Richard Orlinski on the Saronic coast of Corinthia, designed with Liakos Associates Architects and developed by KAMAI.',
}

function Chapter({ n, title, light = false }: { n: string; title: string; light?: boolean }) {
  return (
    <div className="flex items-end gap-4">
      <span className={`font-heading text-6xl md:text-7xl font-light leading-none ${light ? 'text-sand' : 'text-bronze'}`}>
        {n}
      </span>
      <span className={`mb-2 h-10 w-px rotate-[20deg] ${light ? 'bg-sand/70' : 'bg-bronze/70'}`} />
      <span className={`eyebrow mb-1 ${light ? '!text-sand' : ''}`}>{title}</span>
    </div>
  )
}

function Photo({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    className.includes('absolute') || priority ? (
      <div className={cn('relative overflow-hidden bg-sand', className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
    ) : (
      <RevealFrame className={cn('bg-sand', className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </RevealFrame>
    )
  )
}

function Caption({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mt-3 text-[10px] uppercase tracking-[0.3em] ${light ? 'text-stone/70' : 'text-muted'}`}>{children}</p>
  )
}

const h2 = 'font-heading text-4xl md:text-6xl font-light leading-[1.04]'
const body = 'text-lg leading-relaxed text-graphite'

export default function OrlinskiBayPage() {
  return (
    <div>
      {/* Hero */}
      <KenBurnsHero src={ob.images.hero} alt="An Orlinski Bay villa above the sea at Amoni">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pb-14 md:px-12 md:pb-20">
          <p className="eyebrow !text-sand">Richard Orlinski · {ob.region}</p>
          <h1 className="mt-6">
            <span className="sr-only">Orlinski Bay, Amoni</span>
            <span
              aria-hidden="true"
              className="block aspect-[1522/1126] w-[min(48vw,280px)] bg-white"
              style={{
                WebkitMaskImage: `url(${ob.logo.full})`,
                maskImage: `url(${ob.logo.full})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            />
          </h1>
          <div className="mt-8 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <p className="max-w-xl font-heading text-2xl font-light italic text-white/90 md:text-3xl">{ob.tagline}</p>
            <div className="flex flex-col gap-3 whitespace-nowrap sm:flex-row sm:items-center">
              <FilmButton src={ob.film.src} poster={ob.film.poster} className="mr-4" />
              <Link
                href="#register"
                className="bg-white px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
              >
                Register your interest
              </Link>
              <Link
                href="#villas"
                className="border border-white/70 px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-black"
              >
                The villas
              </Link>
            </div>
          </div>
        </div>
      </KenBurnsHero>

      {/* Key facts */}
      <section className="full-bleed border-b border-black/10 bg-ivory">
        <dl className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-12">
          {[
            { k: 'The collection', v: 'Ten villas only' },
            { k: 'Interiors', v: `${ob.areas.indoorFrom} to ${ob.areas.indoorTo} m²` },
            { k: 'In every villa', v: 'Infinity pool & Orlinski works' },
            { k: 'Sales open', v: '1 December 2026' },
          ].map((f) => (
            <div key={f.k} className="border-l border-bronze/50 pl-5">
              <dt className="eyebrow !text-muted">{f.k}</dt>
              <dd className="mt-2 font-heading text-2xl md:text-3xl text-black">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Quote */}
      <section className="full-bleed bg-black">
        <div className="mx-auto grid max-w-screen-2xl lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-8 px-6 py-24 md:px-16">
            <Chapter n="I" title="The Vision" light />
            <blockquote className="font-heading text-4xl md:text-5xl font-light italic leading-[1.15] text-white">
              « {ob.quote} »
            </blockquote>
            <p className="eyebrow !text-sand">Richard Orlinski</p>
          </div>
          <Photo src={ob.images.night} alt="Bronze door set into the rock at night" className="min-h-[420px] lg:min-h-[640px]" sizes="50vw" />
        </div>
      </section>

      {/* Two disciplines */}
      <section className="mx-auto grid max-w-[1200px] gap-12 px-2 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <p className="eyebrow">The Vision</p>
          <h2 className={h2}>
            Two disciplines, <span className="italic">one site.</span>
          </h2>
          <p className={body}>
            Orlinski works through editions: numbered, signed, finite. Liakos builds into the terrain rather than onto it.
          </p>
          <p className={body}>
            At Amoni, the two methods meet on a single question: how much of the rock to keep.
          </p>
          <p className="font-heading text-2xl italic text-bronze">The answer, each time, is most of it.</p>
        </div>
        <Photo src={ob.images.cliff} alt="Orlinski Bay villa on the cliff at sunset" className="aspect-[4/3]" sizes="50vw" />
      </section>

      {/* The artist */}
      <section className="full-bleed bg-sand">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Photo src={ob.images.richard} alt="Richard Orlinski" className="aspect-[4/5] lg:aspect-[4/4.4]" sizes="45vw" />
          <div className="space-y-8">
            <p className="eyebrow">The Artist</p>
            <h2 className={h2}>Richard Orlinski</h2>
            <p className="font-heading text-2xl italic text-bronze">The artist who became a brand.</p>
            <p className={body}>
              Self-taught and unconventional, Richard Orlinski is known worldwide for his bold faceted sculptures, shown
              from the Champs-Élysées to Miami Beach. Orlinski Bay is his first signature residential destination in
              Greece.
            </p>
            <dl className="grid gap-x-10 gap-y-6 border-t border-black/15 pt-8 sm:grid-cols-2">
              {ob.artistFacts.map((f) => (
                <div key={f.label}>
                  <dd className="font-heading text-2xl text-black">{f.value}</dd>
                  <dt className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted">{f.label}</dt>
                </div>
              ))}
            </dl>
            <Link href="/brands" className="inline-block text-[11px] uppercase tracking-[0.3em] text-bronze hover:text-black">
              Discover the artist →
            </Link>
          </div>
        </div>
      </section>

      {/* From sketch to stone */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">Design process</p>
            <h2 className={h2}>
              From sketch <span className="italic">to stone.</span>
            </h2>
          </div>
          <p className={body}>
            Orlinski Bay began on paper, in Richard Orlinski&apos;s own hand: the facets, the pool, the line of the rock.
            The architects then carried each gesture into stone.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <Photo src={ob.images.sketch} alt="Richard Orlinski drawing Orlinski Bay" className="aspect-[3/4]" sizes="40vw" />
          </div>
          <div>
            <Photo src={ob.images.sketchVolume} alt="Volume study sketch" className="aspect-[3/2] bg-white" sizes="60vw" />
            <Caption>01 · Volume study</Caption>
          </div>
        </div>
      </section>

      {/* II. The Place */}
      <section className="full-bleed bg-ivory">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-8">
            <Chapter n="II" title="The Place" />
            <h2 className={h2}>Amoni</h2>
            <p className="max-w-md text-sm uppercase leading-loose tracking-[0.2em] text-graphite">
              The coast folds here, and the fold made a bay. Rock meets water with no beach between them, a coastline
              made to pass by, not to stop at.
            </p>
            <p className="font-heading text-2xl italic text-bronze">The bay holds what the bay can hold.</p>
          </div>
          <Photo src={ob.images.cove} alt="The coves of Amoni seen from above" className="aspect-[4/5] lg:aspect-[16/12]" sizes="60vw" />
        </div>
      </section>

      <section className="full-bleed bg-black text-offwhite">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Photo src={ob.images.map} alt="Map of Orlinski Bay between Athens and the Peloponnese" className="aspect-[18/11] bg-black" sizes="60vw" />
          <div className="space-y-8">
            <p className="eyebrow !text-sand">The location</p>
            <h2 className={`${h2} text-white`}>
              Between Athens and <span className="italic">the Peloponnese.</span>
            </h2>
            <p className="text-lg leading-relaxed text-stone">
              At Pefkali, in the bay of Amoni near Sofiko, on the Saronic coast of Corinthia. Facing Aegina, Methana and Poros.
            </p>
            <table className="w-full text-left">
              <tbody>
                {ob.travel.map((t) => (
                  <tr key={t.place} className="border-b border-white/15">
                    <td className="py-3 pr-4 text-[11px] uppercase tracking-[0.24em] text-stone">{t.place}</td>
                    <td className="py-3 pr-4 font-heading text-xl text-white">{t.time}</td>
                    <td className="py-3 text-right text-sm text-stone/70">{t.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-stone/60">Approximate driving distances and times by road.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-2 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <p className="eyebrow">The gulf</p>
          <h2 className={h2}>
            Some places are best understood <span className="italic">from the water.</span>
          </h2>
          <p className={body}>
            Beyond Amoni, the Saronic Gulf unfolds as a quiet succession of islands, coves and distant harbours: Aegina
            beneath its pines, the volcanic coastline of Methana, Poros further south, and the traces of Ancient
            Epidaurus beneath the clear shallows. Each direction offers a different rhythm, from silent coves to small
            harbours shaped by centuries of life at sea.
          </p>
          <ul className="grid gap-6 border-t border-black/15 pt-8 sm:grid-cols-3">
            {[
              { t: 'Marina access', d: 'Direct access by boat for owners, for outings across the gulf.' },
              { t: 'Close to Athens', d: 'Athens, Piraeus and the international airport within easy reach by car.' },
              { t: 'A favourable framework', d: 'An attractive tax regime for new residents and access to the Greek Golden Visa.' },
            ].map((x) => (
              <li key={x.t} className="space-y-2">
                <p className="font-heading text-xl text-black">{x.t}</p>
                <p className="text-sm leading-relaxed text-graphite">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
        <Photo src={ob.images.boat} alt="Catamaran in a cove of the Saronic Gulf" className="aspect-[4/5]" sizes="50vw" />
      </section>

      <section className="full-bleed relative h-[78vh] min-h-[460px]">
        <Photo src={ob.images.aerial} alt="The Saronic coast seen from above" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-10 left-6 font-heading text-3xl md:text-5xl font-light italic text-white md:left-12">
          The Saronic coast, seen from above.
        </p>
      </section>

      {/* III. The Villas */}
      <section id="villas" className="mx-auto grid max-w-[1200px] scroll-mt-28 gap-12 px-2 py-24 md:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="space-y-8">
          <Chapter n="III" title="The Villas" />
          <h2 className={h2}>
            Ten villas, <span className="italic">one hillside.</span>
          </h2>
          <p className={body}>
            Each villa sits on its own terrace, turned toward the sea, with private garden, infinity pool and parking.
            The masterplan follows the contour lines of the slope.
          </p>
        </div>
        <div>
          <Photo src={ob.images.masterplan} alt="Faceted roof study, aerial view" className="aspect-[4/3]" sizes="60vw" />
          <Caption>Faceted roof study · Aerial view</Caption>
        </div>
      </section>

      <section className="full-bleed relative h-[92vh] min-h-[560px]">
        <Photo src={ob.images.villaPool} alt="A sculpted shell of stone opened to the sea" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-10 left-6 md:left-12">
          <p className="eyebrow !text-sand">The villa</p>
          <p className="mt-3 font-heading text-3xl md:text-5xl font-light italic text-white">
            A sculpted shell of stone, opened to the sea.
          </p>
        </div>
      </section>

      <section className="full-bleed bg-sand">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-8">
            <p className="eyebrow">The arrival</p>
            <h2 className={h2}>
              Through the rock, <span className="italic">into the light.</span>
            </h2>
            <p className={body}>
              Faceted travertine, a bronze door set into the raw rock face, and a reflecting pool crossed on floating
              stone steps.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <Photo src={ob.images.arrival} alt="Reflecting pool and bronze door at the villa entrance" className="col-span-3 aspect-[3/4]" sizes="35vw" />
            <Photo src={ob.images.entrance} alt="Faceted travertine entrance" className="col-span-2 aspect-[3/4]" sizes="25vw" />
          </div>
        </div>
      </section>

      {/* Interiors */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">Interiors</p>
            <h2 className={h2}>
              Where the facet <span className="italic">meets the stone.</span>
            </h2>
          </div>
          <p className={body}>
            Double-height living, a sunken lounge and sea-facing glazing. A sculpted travertine island, bronze-toned
            joinery and a faceted ceiling, set against the clean geometry of Orlinski&apos;s surfaces.
          </p>
        </div>
        <Photo src={ob.images.living} alt="Double-height living room facing the sea" className="aspect-[16/9]" sizes="1200px" />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Photo src={ob.images.lounge} alt="Fireplace lounge" className="aspect-[3/2]" sizes="50vw" />
            <Caption>Fireplace lounge</Caption>
          </div>
          <div>
            <Photo src={ob.images.kitchen} alt="Travertine kitchen island" className="aspect-[3/2]" sizes="50vw" />
            <Caption>Travertine, bronze and living rock</Caption>
          </div>
        </div>
      </section>

      <section className="full-bleed bg-ivory">
        <div className="mx-auto max-w-screen-2xl space-y-12 px-6 py-24 md:px-12 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div className="space-y-6">
              <p className="eyebrow">The suites</p>
              <h2 className={h2}>
                Sleeping <span className="italic">against the cliff.</span>
              </h2>
            </div>
            <p className={body}>
              The natural rock wall is kept inside the room, lit from below. Every suite has its own bathroom; the master
              suites add a walk-in closet. A freestanding bath faces the open sea, beneath a faceted travertine vault.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Photo src={ob.images.bedroom} alt="Suite facing the sea" className="aspect-[4/5]" sizes="33vw" />
            <Photo src={ob.images.suite} alt="Suite with the natural rock wall" className="aspect-[4/5]" sizes="33vw" />
            <Photo src={ob.images.bath} alt="Freestanding stone bath facing the sea" className="aspect-[4/5]" sizes="33vw" />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-24 md:py-32">
        <div className="space-y-6">
          <p className="eyebrow">Materials &amp; finishes</p>
          <h2 className={h2}>
            Stone, bronze, wood <span className="italic">and the rock itself.</span>
          </h2>
        </div>
        <div className="grid gap-10 border-t border-black/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {ob.materials.map((m) => (
            <div key={m.title} className="space-y-3">
              <p className="font-heading text-2xl text-black">{m.title}</p>
              <p className="text-sm leading-relaxed text-graphite">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typologies */}
      <section className="mx-auto max-w-[1200px] space-y-14 px-2 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">The typologies</p>
            <h2 className={h2}>
              Three ways to <span className="italic">live the hillside.</span>
            </h2>
          </div>
          <p className={body}>
            Every villa is set over three levels, with infinity pool, jacuzzi, floor-to-ceiling glazing and private
            parking. From the six-suite signature villa to the most intimate, from approx. {ob.areas.indoorFrom} to {ob.areas.indoorTo} m²
            of interior space.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {ob.typologies.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <article className="group space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={`/images/amoni/${t.image}.jpg`}
                    alt={t.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-black/15 pb-4">
                  <h3 className="font-heading text-3xl text-black">{t.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{t.suites}</p>
                </div>
                <p className="eyebrow">{t.tag}</p>
                <p className="text-sm leading-relaxed text-graphite">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The collection */}
      <section className="full-bleed bg-black text-offwhite">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-8">
            <p className="eyebrow !text-sand">The collection</p>
            <h2 className={`${h2} text-white`}>
              Ten villas, <span className="italic">nothing more.</span>
            </h2>
            <p className="text-lg leading-relaxed text-stone">
              A single, limited collection rather than a phased development. Every villa is set over three levels and
              delivered with its Orlinski works installed. Completion is planned in around two years.
            </p>
            <ul className="flex flex-wrap gap-2">
              {ob.inEveryVilla.map((i) => (
                <li key={i} className="border border-white/25 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-stone">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-px self-center bg-white/15 sm:grid-cols-2">
            {[
              { v: '10', l: 'Villas, one limited collection' },
              { v: '3', l: 'Typologies: 6, 4 and 3 suites' },
              { v: `${ob.areas.indoorFrom}–${ob.areas.indoorTo} m²`, l: 'Interior space' },
              { v: `${ob.areas.outdoorFrom}–${ob.areas.outdoorTo} m²`, l: 'Terraces and gardens' },
            ].map((n) => (
              <div key={n.l} className="bg-black p-8">
                <p className="font-heading text-5xl font-light text-white">{n.v}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-stone">{n.l}</p>
              </div>
            ))}
            <p className="bg-black p-8 pt-0 text-xs text-stone/60 sm:col-span-2">
              Areas are indicative and subject to final design. Prices on request from L&apos;Atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Art in residence */}
      <section className="mx-auto grid max-w-[1200px] gap-12 px-2 py-24 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Photo src={ob.images.art} alt="Panther sculpture by Richard Orlinski in a villa living room" className="aspect-[4/3]" sizes="60vw" />
          <Caption>Sculpture placement study by Richard Orlinski. Selection of works indicative.</Caption>
        </div>
        <div className="space-y-8">
          <p className="eyebrow">Art in residence</p>
          <h2 className={h2}>
            Each villa, <span className="italic">a collector&apos;s piece.</span>
          </h2>
          <p className={body}>
            Original Orlinski works are selected for each villa, from monumental sculpture at the entrance to interior
            pieces: the Panther, the Standing Bear in stainless steel lace, the Wild Kong Head in low relief.
          </p>
        </div>
      </section>

      {/* IV. The Life */}
      <section className="full-bleed bg-ivory">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-2 lg:items-center">
          <Photo src={ob.images.sea} alt="Pine, rock and open sea" className="aspect-[4/3]" sizes="50vw" />
          <div className="space-y-8">
            <Chapter n="IV" title="The Life" />
            <h2 className={h2}>
              Between sea <span className="italic">and light.</span>
            </h2>
            <p className={body}>
              In Amoni, days are measured in light, salt and movement. A morning swim, a run beneath the pines, bare feet
              on warm stone, dinner drifting slowly into the night.
            </p>
            <p className={body}>
              Between the sea and the silence of the landscape, luxury becomes something quieter: space, freedom, and
              time well lived.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">The club</p>
            <h2 className={h2}>
              Wellness <span className="italic">&amp; private club.</span>
            </h2>
          </div>
          <p className={body}>
            A place where movement, relaxation and the pleasure of simply being come together, inviting owners to enjoy
            every moment at their own pace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { src: ob.images.clubTennis, label: ob.club[0] },
            { src: ob.images.clubLounge, label: ob.club[1] },
            { src: ob.images.clubGym, label: ob.club[2] },
          ].map((c) => (
            <div key={c.label}>
              <Photo src={c.src} alt={c.label} className="aspect-[3/4]" sizes="33vw" />
              <Caption>{c.label}</Caption>
            </div>
          ))}
        </div>
      </section>

      <section className="full-bleed bg-sand">
        <div className="mx-auto max-w-screen-2xl space-y-12 px-6 py-24 md:px-12 md:py-28">
          <div className="space-y-6">
            <p className="eyebrow">Living Orlinski Bay</p>
            <h2 className={h2}>
              A villa, <span className="italic">looked after.</span>
            </h2>
            <p className={body}>Owners arrive to a villa ready to live in, and leave it in good hands.</p>
          </div>
          <div className="grid gap-10 border-t border-black/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {ob.services.map((s) => (
              <div key={s.title} className="space-y-3">
                <p className="font-heading text-2xl text-black">{s.title}</p>
                <p className="text-sm leading-relaxed text-graphite">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signatures */}
      <section className="mx-auto max-w-[1200px] space-y-12 px-2 py-24 md:py-32">
        <div className="space-y-6">
          <p className="eyebrow">The signatures</p>
          <h2 className={h2}>
            Those who shape <span className="italic">Orlinski Bay.</span>
          </h2>
        </div>
        <div className="grid gap-10 border-t border-black/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {ob.team.map((m) => (
            <div key={m.role} className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{m.role}</p>
              <p className="font-heading text-2xl text-black">{m.name}</p>
              <p className="text-sm leading-relaxed text-graphite">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Voices */}
      <section className="full-bleed bg-black text-offwhite">
        <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow !text-sand">Voices</p>
          <div className="mt-12 grid gap-x-16 gap-y-16 md:grid-cols-2">
            {ob.quotes.map((q, i) => (
              <Reveal key={q.name} delay={(i % 2) * 0.12}>
                <figure className="space-y-6 border-t border-white/15 pt-8">
                  <blockquote className="font-heading text-2xl font-light italic leading-snug text-white md:text-3xl">
                    « {q.text} »
                  </blockquote>
                  <figcaption>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-sand">{q.name}</p>
                    <p className="mt-1 text-sm text-stone/80">{q.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section className="full-bleed relative">
        <Photo src={ob.images.pool} alt="Infinity pool and waterfall at an Orlinski Bay villa" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/60" />
        <div
          id="register"
          className="relative z-10 mx-auto grid max-w-screen-2xl scroll-mt-24 gap-12 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div className="space-y-6 text-white">
            <p className="eyebrow !text-sand">L&apos;Atelier · Athens</p>
            <h2 className={`${h2} text-white`}>Discover Orlinski Bay at L&apos;Atelier.</h2>
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

      <p className="mx-auto max-w-[1200px] px-2 py-8 text-xs text-muted">
        All images are artistic impressions for illustrative purposes only and are non-contractual. Areas and
        specifications are indicative and subject to change.
      </p>
    </div>
  )
}
