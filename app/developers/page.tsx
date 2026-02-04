import { CTAButton } from '@/components/CTAButton'

const steps = [
  {
    title: 'Initial Discussion',
    description: 'We start with a confidential conversation to understand your vision, project scope, and alignment with the Orlinski brand.',
  },
  {
    title: 'Vision Fit Assessment',
    description: 'Our team evaluates the strategic fit, market positioning, and potential for creating a unique branded experience.',
  },
  {
    title: 'Concept Package',
    description: 'We develop a comprehensive concept package including design language, art integration, and marketing narrative.',
  },
  {
    title: 'Deal Structuring',
    description: 'We work with your team to structure a licensing agreement that protects the brand while enabling your success.',
  },
]

const benefits = [
  {
    title: 'Brand Equity',
    description: 'Access to the Orlinski brand and artistic universe, recognized globally for luxury and innovation.',
  },
  {
    title: 'Design Language',
    description: 'Integration of faceted geometry and sculptural elements into architecture and interiors.',
  },
  {
    title: 'Marketing Narrative',
    description: 'Compelling storytelling and brand positioning that resonates with high-net-worth buyers.',
  },
  {
    title: 'Art Integration',
    description: 'Curated selection of Orlinski sculptures and artworks to enhance the living experience.',
  },
]

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-offwhite px-6 py-12 md:px-10 md:py-14 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.6)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/images/icon-ledger-facets.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.3em]">
              For Developers
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Higher pricing. Faster sales. Stronger legacy.
            </h1>
            <p className="text-graphite text-lg max-w-2xl">
              A professional, technical delivery that aligns brand, architecture, and operations —
              from feasibility and positioning to design governance, sales enablement, and post‑handover
              stewardship. True branded residences from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <CTAButton href="/contact" variant="dark">
                Contact Us
              </CTAButton>
              <CTAButton href="/projects" variant="light">
                Discover Concepts
              </CTAButton>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black px-6 py-8 text-offwhite shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, rgba(209,166,78,0.35), transparent 55%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.12), transparent 60%)',
                }}
              />
              <div className="relative z-10 space-y-5">
                <p className="text-xs uppercase tracking-[0.3em] text-stone">Impact</p>
                <div className="grid gap-4">
                  {[
                    { label: 'Premium pricing', value: 'Higher value' },
                    { label: 'Demand', value: 'Faster absorption' },
                    { label: 'Brand equity', value: 'Long‑term prestige' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
                        {item.label}
                      </p>
                      <p className="mt-2 font-heading text-xl text-offwhite">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
              <p className="text-xs uppercase tracking-[0.3em] text-black/60">Confidentiality</p>
              <p className="mt-3 text-graphite">
                Curated access with discreet engagement, structured around technical validation,
                feasibility, and brand alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            Who This Is For
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            Select partners, curated access.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 p-8 rounded-2xl border border-black/10 bg-offwhite/80 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <h3 className="font-heading text-xl font-semibold text-black">Serious Developers</h3>
            <p className="text-graphite">
              Established developers with a track record of delivering premium residential and
              hospitality concepts.
            </p>
          </div>
          <div className="space-y-4 p-8 rounded-2xl border border-black/10 bg-offwhite/80 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <h3 className="font-heading text-xl font-semibold text-black">Vision Alignment</h3>
            <p className="text-graphite">
              Developers who understand the value of brand differentiation and are committed to
              creating unique, art-driven experiences for their buyers.
            </p>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            What We Bring
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            The full brand‑to‑residency system.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-2xl border border-black/10 bg-offwhite/80 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
            >
              <h3 className="font-heading text-lg font-semibold text-black">{benefit.title}</h3>
              <p className="text-graphite text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="space-y-8">
        <div className="space-y-4 max-w-2xl">
          <p className="text-gold text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            How We Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-black">
            A curated, confidential process.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-black/10 bg-offwhite text-black flex items-center justify-center font-heading font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-black">{step.title}</h3>
              </div>
              <p className="text-graphite text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-offwhite py-6 px-6 rounded-2xl text-center shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]">
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-5 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-offwhite">
            Ready to Explore a Partnership?
          </h2>
          <p className="text-stone text-base md:text-lg max-w-2xl mx-auto">
            Start a confidential discussion about your concept and how we can work together.
          </p>
          <div className="pt-1">
            <CTAButton href="/contact" variant="light" className="px-8 py-3.5 text-base md:text-lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
