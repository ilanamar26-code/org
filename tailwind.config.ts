import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ORG Logotype 2027 palette — "identité pierre, ton sur ton"
        black: '#2E2925', // anthracite chaud
        offwhite: '#F4EFE8', // crème
        ivory: '#F4EFE8',
        sand: '#EBE2D9', // beige pierre
        stone: '#CCC0B0', // pierre claire
        greige: '#9E9284', // pierre grège
        gold: '#8A7D70',
        bronze: '#8A7D70', // accent: between pierre grège and grège foncé, legible on crème
        graphite: '#4A423C',
        muted: '#6E6358', // grège foncé
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
