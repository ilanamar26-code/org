import Image from 'next/image'
import Link from 'next/link'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'

export function Hero() {
  return (
    <section className="full-bleed relative -mt-px h-[92vh] min-h-[600px]">
      <Image
        src={ob.images.hero}
        alt="Orlinski Bay, Amoni, Greece"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
      <div className="relative z-10 mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
        <p className="eyebrow !text-sand">Our first project · {ob.place}, {ob.region}</p>
        <h1 className="mt-5 font-heading text-[clamp(3.4rem,9vw,8.5rem)] font-light leading-[0.92] text-white">
          Orlinski Bay
        </h1>
        <p className="mt-6 max-w-xl font-heading text-2xl md:text-3xl font-light italic text-white/90">
          {ob.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/orlinski-bay"
            className="bg-white px-8 py-4 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-black transition-colors hover:bg-bronze hover:text-white"
          >
            Discover Orlinski Bay
          </Link>
          <Link
            href="/orlinski-bay#register"
            className="border border-white/70 px-8 py-4 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Register your interest
          </Link>
        </div>
      </div>
    </section>
  )
}
