// Official announcements published by Orlinski Realty Group.
// Coverage by third-party media stays in lib/press-data.ts.

export type PressRelease = {
  slug: string
  date: string // ISO
  dateline: string
  title: string
  subtitle: string
  image: string
  paragraphs: string[]
  quotes: { text: string; name: string; role: string }[]
  facts: { label: string; value: string }[]
}

// Releases are added on their publication date.
export const pressReleases: PressRelease[] = []

export const aboutOrg =
  'Orlinski Realty Group (ORG) is the exclusive real estate licensee of the Richard Orlinski brand. Headquartered in Dubai and founded by Ilan Amar and Michael Cohen, ORG partners with developers to create art-driven branded residences and hospitality, bringing artistic direction, brand identity, storytelling and original Orlinski works to each project. Where real estate becomes art.'

export const mediaContact = 'ilan@orlinskirealtygroup.com'

export const pressKit = [
  { label: 'Fact sheet', detail: 'PDF · 1 page', href: '/press-kit/orlinski-bay-amoni-fact-sheet.pdf' },
  { label: 'Orlinski Bay · Amoni logo', detail: 'SVG', href: '/logo/amoni/amoni-full-logo.svg' },
  { label: 'Selected images', detail: 'ZIP · 8 artist impressions', href: '/press-kit/orlinski-bay-amoni-images.zip' },
  { label: 'Project film', detail: 'MP4 · 1 min 15', href: '/videos/orlinski-bay-film.mp4' },
]
