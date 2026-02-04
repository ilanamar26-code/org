import { CTAButton } from '@/components/CTAButton'
import { QualificationForm } from '@/components/QualificationForm'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-12 px-4 py-10 sm:px-6 lg:px-8">
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
              Contact
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">
              Start a confidential discussion.
            </h1>
            <p className="text-graphite text-lg max-w-2xl">
              Whether you represent a development, investment, press, or partnership inquiry, our
              team responds with discretion and a structured next‑step process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <CTAButton href="#contact-form" variant="dark">
                Open the Form
              </CTAButton>
              <CTAButton href="/projects" variant="light">
                Discover Concepts
              </CTAButton>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Confidentiality</p>
            <p className="mt-3 text-graphite">
              We handle all inquiries with care. Information shared here is reviewed privately and
              used only to evaluate alignment and feasibility.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div
          id="contact-form"
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)]"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Inquiry</p>
            <p className="text-xs text-graphite">
              We typically respond within 48 hours.
            </p>
          </div>
          <QualificationForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-offwhite/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">What to include</p>
            <div className="mt-4 space-y-3 text-graphite text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>Your role and organization.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>The reason you&apos;re reaching out (project, press, partnership, or investment).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>Any key dates, locations, or references that help us respond quickly.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black text-offwhite p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.3em] text-stone">Next steps</p>
            <div className="mt-4 space-y-3 text-sm text-stone">
              <div className="flex items-center justify-between">
                <span>Initial review</span>
                <span className="text-offwhite">Confidential</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Alignment call</span>
                <span className="text-offwhite">Selective</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Feasibility &amp; scope</span>
                <span className="text-offwhite">Structured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
