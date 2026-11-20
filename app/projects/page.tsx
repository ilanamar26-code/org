import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/CTAButton'
import { orlinskiBay } from '@/lib/orlinski-bay'

export default async function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      {/* Orlinski Bay: first project */}
      <section className="grid gap-10 border-b border-black/10 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Link href="/orlinski-bay" className="group relative block aspect-[16/11] overflow-hidden bg-sand">
          <Image
            src={orlinskiBay.images.hero}
            alt="Orlinski Bay, Amoni"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="space-y-6">
          <p className="eyebrow">In development · {orlinskiBay.region}</p>
          <h1 className="font-heading text-5xl md:text-6xl font-light leading-[1.02]">Orlinski Bay, Amoni</h1>
          <p className="text-lg leading-relaxed text-graphite">
            Our first project: ten villas signed by Richard Orlinski on a secluded bay of Corinthia,
            with the developer KAMAI and Liakos Associates Architects.
          </p>
          <CTAButton href="/orlinski-bay" variant="dark">Discover the project</CTAButton>
        </div>
      </section>

      <div className="space-y-4 max-w-2xl">
        <p className="eyebrow">The Wild Collection</p>
        <h2 className="font-heading text-4xl md:text-5xl font-light leading-[1.05]">Signature concepts</h2>
        <p className="text-graphite text-lg">
          City, sea and mountain: three concepts imagined with our artistic teams to show how the art
          of Richard Orlinski can shape a hotel, a beachfront destination or an alpine retreat.
        </p>
      </div>

      <section className="space-y-8">
        {[
          {
            title: 'Orlinski Hotels & Residences',
            logo: '/images/szr-logo-hero.jpg',
            video: '/videos/orlinski-hotels-residences.mp4',
            description:
              'In the heart of the city, Orlinski Hotels & Residences redefines urban luxury through warmth, elegance, and art. Crafted with rich woods, refined textures, and warm tones, every space radiates a sense of intimacy and sophistication.',
            gallery: [
              '/images/wild-collection/szr-entree.jpg',
              '/images/wild-collection/szr-living.jpg',
              '/images/wild-collection/szr-room.jpg',
              '/images/wild-collection/szr-pool.jpg',
              '/images/wild-collection/szr-indoor-pool.jpg',
            ],
          },
          {
            title: 'Beachfront Living by Richard Orlinski',
            logo: '/images/swat-logo1.jpg',
            video: '/videos/beachfront-living-by-ro.mp4',
            description:
              'Where the ocean becomes your horizon and art defines every detail. This visionary destination blends luxury hospitality with immersive artistry: hotel rooms, signature suites, private residences, a beach club, and a serene spa all set along the shore.',
            gallery: [
              '/images/wild-collection/wat-lobby.jpg',
              '/images/wild-collection/wat-living.jpg',
              '/images/wild-collection/wat-entrance.jpg',
              '/images/wild-collection/wat-spa.jpg',
              '/images/wild-collection/wat-room.jpg',
            ],
          },
          {
            title: "L’Ours Blanc by Richard Orlinski",
            logo: '/images/bear-logo1.jpg',
            video: '/videos/ours-blanc-by-ro.mp4',
            description:
              'Tucked away in the mountains, OURS BLANC by Richard Orlinski transforms alpine living into a world of warmth, elegance, and art. Wrapped in rich woods, soft textures, and glowing tones, every space feels intimate, inviting, and effortlessly sophisticated: a sanctuary where design meets pure mountain serenity.',
            gallery: [
              '/images/wild-collection/bear-living.jpg',
              '/images/wild-collection/bear-out.jpg',
              '/images/wild-collection/bear-pool.jpg',
              '/images/wild-collection/bear-room.jpg',
              '/images/wild-collection/bear-skiroom.jpg',
            ],
          },
        ].map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden border border-black/10 bg-black"
          >
            <div className="relative aspect-[16/7]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="bg-offwhite px-6 py-6 border-t border-black/10">
              <div className="grid gap-6 md:grid-cols-[180px_1fr] items-center border border-black/10 bg-white p-6">
                <div className="relative h-40 w-40 overflow-hidden border border-black/10 bg-offwhite">
                  <Image src={item.logo} alt={`${item.title} logo`} fill className="object-cover object-center" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/60">{item.title}</p>
                  <p className="text-graphite text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 bg-offwhite px-6 pb-6 pt-2 md:grid-cols-6">
              {item.gallery.map((image, index) => (
                <div
                  key={image}
                  className={` border border-black/10 bg-white overflow-hidden ${
                    index < 2 ? 'md:col-span-3' : 'md:col-span-2'
                  }`}
                >
                  <Image src={image} alt="" width={1600} height={1200} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
