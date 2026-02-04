export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      <section className="space-y-6 max-w-3xl">
        <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.3em]">
          About
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-black">
          The story behind Orlinski Realty Group.
        </h1>
        <p className="text-graphite text-lg">
          Where brand, sculpture, and real estate converge to create collectible destinations.
        </p>
      </section>

      <section className="space-y-6 -mt-10">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-offwhite shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)] min-h-[360px]">
          <img
            src="/images/about/ilan-michael-richard.jpg"
            alt="Ilan, Michael, and Richard Orlinski"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Founders</p>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-black">
            Why this partnership makes sense.
          </h2>
          <div className="mt-4 space-y-4 text-graphite text-lg leading-relaxed">
            <p>
              Born from the union of two visionary entrepreneurs, Ilan &amp; Michael, and the
              world‑renowned artist Richard Orlinski, a new dream emerged between them: to turn
              hospitality and real estate into immersive works of art, where every residence becomes
              a masterpiece.
            </p>
            <p>
              At Orlinski Realty Group, we don&apos;t design buildings. We are not developers. We sculpt
              icons. We believe branded real estate is no longer just about signature on walls.
              It&apos;s about emotion, storytelling, and singularity. We are curators of lifestyle,
              guardians of identity, and the future of branded residences.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-black/10 bg-offwhite/80 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">The Logo</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">
              How the mark was born.
            </h2>
            <p className="text-graphite">
              The Orlinski Realty Group emblem was sculpted to echo faceted geometry — a signature
              language of Richard Orlinski — and to reflect a bold, architectural presence.
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <video
            className="hover-reveal-controls h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            src="/videos/org-logo-horizontal-quality.mp4"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-200 group-hover:opacity-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/60">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-offwhite"
                fill="currentColor"
              >
                <polygon points="9,7 19,12 9,17" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <video
            className="hover-reveal-controls h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            src="/videos/org-launch-subtitled.mp4"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-200 group-hover:opacity-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-black/60">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-offwhite"
                fill="currentColor"
              >
                <polygon points="9,7 19,12 9,17" />
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-offwhite/80 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">The Launch</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">
              Richard Orlinski introduces the vision.
            </h2>
            <p className="text-graphite">
              The launch film frames the ambition: translating Orlinski&apos;s art into real estate and
              hospitality, creating a new category of branded residences with a cultural signature.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-offwhite/80 p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
        <p className="text-xs uppercase tracking-[0.3em] text-black/60">Ilan &amp; Michael</p>
        <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold text-black">
          A shared vision.
        </h2>
        <div className="mt-4 space-y-4 text-graphite text-lg leading-relaxed">
          <p>
            United by a passion for creativity, disruption, and excellence, Ilan and Michael
            embody the perfect balance between imagination and execution.
          </p>
          <p>
            From different yet complementary worlds, brand building and creative strategy on one
            side, finance and real estate structuring on the other, their paths converged naturally
            around a shared belief: true value emerges when vision meets discipline, and structure.
          </p>
          <p>
            Rising from a common DNA of refined taste for detail, innovation, and differentiation,
            both were led to embrace the Orlinski adventure, where every project becomes a
            masterpiece of art.
          </p>
          <p>
            Their ambition is to transform artistic vision into impactful, enduring and profitable
            ventures in the Middle East and beyond.
          </p>
        </div>
      </section>
    </div>
  )
}
