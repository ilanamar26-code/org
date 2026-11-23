import { QualificationForm } from '@/components/QualificationForm'
import { Reveal, WordReveal } from '@/components/motion/Reveal'
import { orlinskiBay as ob } from '@/lib/orlinski-bay'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Contact | Orlinski Realty Group',
  description: 'Developers, landowners, investors, buyers and press: start a confidential conversation with Orlinski Realty Group.',
}

const steps = [
  { n: '01', t: 'Review', d: 'Every enquiry is read personally, in confidence.' },
  { n: '02', t: 'Conversation', d: 'A first call to understand your project or request.' },
  { n: '03', t: 'Next step', d: 'A presentation, a site visit or a proposal, as relevant.' },
]

export default function ContactPage() {
  return (
    <div className="pb-0">
      {/* Opening + form on faceted stone */}
      <section className="full-bleed stone-beige stone-fixed -mt-px">
        <div className="mx-auto grid max-w-screen-2xl gap-14 px-6 pb-24 pt-20 md:px-12 md:pb-32 md:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-16">
            <div className="space-y-8">
              <Reveal>
                <p className="eyebrow">Contact</p>
              </Reveal>
              <h1 className="font-heading text-[clamp(3rem,6.5vw,6.2rem)] font-light leading-[0.95] text-black">
                <WordReveal text="Start a" />
                <br />
                <WordReveal text="conversation." className="italic text-bronze" />
              </h1>
              <Reveal delay={0.15}>
                <p className="max-w-md text-lg leading-relaxed text-graphite">
                  A site, a project, an acquisition or a story to tell: write to us. Every enquiry is read personally.
                </p>
              </Reveal>
            </div>

            <dl className="grid gap-8 border-t border-black/15 pt-10 sm:grid-cols-2">
              <div className="space-y-2">
                <dt className="eyebrow">Orlinski Realty Group</dt>
                <dd className="text-graphite">{site.city}</dd>
                <dd>
                  <a href={`mailto:${site.email}`} className="border-b border-black/30 pb-0.5 text-black hover:border-bronze hover:text-bronze">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="eyebrow">L&apos;Atelier · Athens</dt>
                <dd className="text-graphite">{ob.atelier.address}</dd>
                <dd className="text-graphite">Opening {ob.atelier.opening}</dd>
              </div>
            </dl>
          </div>

          <Reveal delay={0.1}>
            <div id="contact-form" className="scroll-mt-28 bg-ivory p-8 shadow-[0_40px_120px_-60px_rgba(46,41,37,0.55)] md:p-12">
              <QualificationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What happens next, on dark stone */}
      <section className="full-bleed stone-dark border-b border-white/10 text-offwhite">
        <div className="mx-auto max-w-screen-2xl px-6 py-20 md:px-12 md:py-28">
          <p className="eyebrow !text-stone">What happens next</p>
          <ol className="mt-10 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="space-y-3">
                  <span className="font-heading text-lg italic text-stone">{s.n}</span>
                  <p className="font-heading text-3xl font-light text-white">{s.t}</p>
                  <p className="max-w-xs text-sm leading-relaxed text-stone">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
