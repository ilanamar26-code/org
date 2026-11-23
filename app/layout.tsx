import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'
import { Analytics } from '@/components/Analytics'
import './globals.css'

const cormorant = localFont({
  variable: '--font-cormorant',
  display: 'swap',
  src: [
    { path: './fonts/cormorant-garamond-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-300-italic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/cormorant-garamond-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/cormorant-garamond-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-500-italic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/cormorant-garamond-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
})

const montserrat = localFont({
  variable: '--font-montserrat',
  display: 'swap',
  src: [
    { path: './fonts/montserrat-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/montserrat-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/montserrat-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/montserrat-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
})

export const metadata: Metadata = {
  title: 'Orlinski Realty Group | Orlinski Bay, Amoni · Art-Driven Branded Residences',
  description:
    'Orlinski Realty Group creates art-driven branded residences with Richard Orlinski. First project: Orlinski Bay, a collection of ten villas at Amoni, Corinthia, Greece.',
  keywords: [
    'branded residences',
    'hospitality partnerships',
    'luxury real estate',
    'real estate development',
    'Orlinski Realty Group',
  ],
  authors: [{ name: 'Orlinski Realty Group' }],
  metadataBase: new URL('https://orlinskirealtygroup.com'),
  openGraph: {
    title: 'Orlinski Bay · Ten villas signed by Richard Orlinski',
    description: 'Orlinski Realty Group presents Orlinski Bay, ten signature villas at Amoni, on the Greek coast.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-orlinski-bay.jpg', width: 1200, height: 630, alt: 'Orlinski Bay, Amoni' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlinski Bay · Ten villas signed by Richard Orlinski',
    description: 'Orlinski Realty Group presents Orlinski Bay, ten signature villas at Amoni, on the Greek coast.',
    images: ['/og-orlinski-bay.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-offwhite text-graphite min-h-screen flex flex-col overflow-x-clip">
        <Providers>
          <SmoothScroll />
          <Navigation />
          <main className="flex-1 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
