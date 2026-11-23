// Content for the Orlinski Bay, Amoni project page and home page feature.
// Source: "Orlinski Bay Amoni - Presentation" (KAMAI / Architect).
// Areas per Liakos Associates Architects drawings, 08/2026.

const img = (name: string) => `/images/amoni/${name}.jpg`

export const orlinskiBay = {
  name: 'Orlinski Bay',
  place: 'Amoni',
  region: 'Corinthia, Greece',
  tagline: 'Ten villas signed by Richard Orlinski, between pine, rock and open sea.',
  villas: 10,
  quote: "I don't sculpt matter. I free what it already hides.",
  images: {
    hero: img('pk-front-day-v2'),
    heroCliff: img('pk-cliff-v2'),
    cliff: img('pk-cliff-v2'),
    aerial: img('aerial'),
    cove: img('cove'),
    sea: img('sea'),
    boat: img('boat'),
    map: img('map'),
    masterplan: img('masterplan'),
    villaPool: img('pk-day-v2'),
    villaSquare: img('pk-square-v2'),
    terrace: img('terrace'),
    pool: img('pk-sunset-v2'),
    entrance: img('pk-entrance-kong'),
    arrival: img('hd-entrance-night'),
    living: img('pk-living-panther'),
    livingKitchen: img('hd-living-kitchen'),
    lounge: img('hd-fireplace'),
    kitchen: img('hd-kitchen'),
    suite: img('hd-bedroom-rock'),
    bedroom: img('hd-bedroom'),
    bath: img('hd-bath'),
    night: img('pk-dusk-v2'),
    richard: img('richard'),
    sketch: img('sketch'),
    sketchVolume: img('sketch-volume'),
    art: img('art-living'),
    clubTennis: img('club-tennis'),
    clubLounge: img('club-lounge'),
    clubGym: img('club-gym'),
  },
  film: {
    src: '/videos/orlinski-bay-film-master-en.mp4',
    poster: '/videos/orlinski-bay-film-master-en-poster.jpg',
    // vertical cut shown on phones
    mobileSrc: '/videos/orlinski-bay-film-instagram-en.mp4',
    mobilePoster: '/videos/orlinski-bay-film-instagram-en-poster.jpg',
  },
  logo: {
    full: '/logo/amoni/amoni-full-logo.svg',
    text: '/logo/amoni/amoni-text-logo.svg',
    symbol: '/logo/amoni/amoni-symbol.svg',
  },
  // Three typologies, per the press fact sheet (19/11/2026).
  typologies: [
    {
      name: 'Villa Signature',
      tag: 'The signature villa',
      suites: 'Six suites',
      text: 'The largest of the collection, on three levels: living, dining and kitchen opening onto the gulf, two master suites with dressing rooms, a hammam and a gym. A 50 m² infinity pool runs along the terrace, with sunken lounge, fire pit and children\'s pool.',
      image: 'hd-exterior-cliff-v2',
    },
    {
      name: 'Villas G',
      tag: 'Under the faceted canopy',
      suites: 'Four suites',
      text: 'Villas set beneath a faceted travertine canopy or mirrored on the upper terrace, each with a sculpted infinity pool, a jacuzzi garden and, for some, an outdoor kitchen with wood-fired oven.',
      image: 'hd-exterior-2',
    },
    {
      name: 'Villa E',
      tag: 'The most intimate',
      suites: 'Three suites',
      text: 'Three suites around a central living space, with the master suite upstairs, an infinity pool, a jacuzzi and private parking.',
      image: 'hd-exterior-day',
    },
  ],
  areas: { indoorFrom: 175, indoorTo: 452, outdoorFrom: 170, outdoorTo: 400 },
  atelier: {
    name: "L'Atelier",
    address: '31 Irodotou Street, Kolonaki, Athens',
    opening: 'Tuesday 1 December 2026',
    email: 'ilan@orlinskirealtygroup.com',
  },
  quotes: [
    {
      text: 'We approached everything as a work of art. The stone, the light, right down to the door handle. Nothing is decorative. Everything is carefully considered. From rock to art.',
      name: 'Richard Orlinski',
      role: 'Artist',
    },
    {
      text: 'The aim is not to put art inside a house. It is for the house itself to become a work of art.',
      name: 'Paris Liakos',
      role: 'CEO, Liakos Associates Architects',
    },
    {
      text: 'Each villa must respond to its own landscape, its own rock, its own space, and its own needs.',
      name: 'Simos Liakos',
      role: 'Associate, Liakos Associates Architects',
    },
    {
      text: 'We want to create a true destination. A place you want to come to, and come back to. And feel at home.',
      name: 'Thomas Samaras',
      role: 'Developer Partner, KAMAI Group',
    },
  ],
  artistFacts: [
    { value: 'Since 2015', label: 'Best-selling French contemporary artist worldwide' },
    { value: '200+', label: 'Galleries representing his work' },
    { value: '9M+', label: 'Followers on Instagram' },
    { value: 'Paris · Saint-Tropez · Riyadh · Mykonos', label: 'Orlinski galleries' },
    { value: 'Porsche · Hublot · Lancôme · Dictador · Bull Padel', label: 'Brand collaborations' },
  ],
  // Approximate driving distances and times by road.
  travel: [
    { place: 'Corinth Canal', time: '50 min', distance: '28 km' },
    { place: 'Ancient Epidaurus', time: '1 h 05', distance: '46 km' },
    { place: 'Nafplio', time: '1 h 25', distance: '64 km' },
    { place: 'Piraeus', time: '1 h 45', distance: '102 km' },
    { place: 'Athens', time: '1 h 30', distance: '103 km' },
    { place: 'Athens Int. Airport', time: '2 h', distance: '132 km' },
  ],
  materials: [
    { title: 'Faceted travertine', text: 'Façades and canopies cut in angular travertine planes, in the Orlinski signature.' },
    { title: 'Living rock', text: 'The natural rock face of the hillside is kept inside the villas and lit as a wall.' },
    { title: 'Bronze & walnut', text: 'Bronze-toned joinery, walnut panelling and travertine worktops.' },
    { title: 'Carved stone', text: 'Freestanding stone baths and basins, facing the sea.' },
  ],
  inEveryVilla: ['Sea view', 'Private infinity pool', 'Jacuzzi', 'Full-height glazing', 'Three levels', 'Original Orlinski works', 'Marina access', 'Private parking'],
  collection: [
    { villa: 'Villa A', bedBath: '6 / 6', indoor: '451.95', outdoor: '400.25', pool: '50' },
    { villa: 'Villa E', bedBath: '3 / 3', indoor: '174.80', outdoor: '173.53', pool: '25.90' },
    { villa: 'Villa G1-A', bedBath: '4 / 4', indoor: '312.85', outdoor: '300.82', pool: '66.40' },
    { villa: 'Villa G1-A′', bedBath: '4 / 4', indoor: '313.90', outdoor: '300.82', pool: '66.40' },
    { villa: 'Villa G1-B', bedBath: '4 / 4', indoor: '308.65', outdoor: '300.82', pool: '66.40' },
    { villa: 'Villa G1-B′', bedBath: '4 / 4', indoor: '308.65', outdoor: '300.82', pool: '66.40' },
    { villa: 'Villa G2-A', bedBath: '4 / 4', indoor: 'TBC', outdoor: '166.60', pool: '27.85' },
    { villa: 'Villa G2-B', bedBath: '4 / 4', indoor: 'TBC', outdoor: '166.60', pool: '27.85' },
  ],
  club: ['Padel court', 'Lounge & bar', 'Gym with sea view'],
  services: [
    {
      title: 'Art curation',
      text: 'Every villa is delivered with original Orlinski works installed, from monumental sculpture to interior pieces. Owners can extend their collection through L\'Atelier.',
    },
    {
      title: 'Concierge & private chef',
      text: 'Arrival preparation, private chef, transfers and boat outings from the marina, arranged on request.',
    },
    {
      title: 'Year-round maintenance',
      text: 'Pool, garden and technical upkeep through the year, whether the owner is in residence or away.',
    },
    {
      title: 'Marina access',
      text: 'A marina gives owners direct access by boat to Aegina, Methana, Poros and the coves of the gulf.',
    },
  ],
  team: [
    {
      role: 'Artist',
      name: 'Richard Orlinski',
      text: 'French contemporary artist, known worldwide for his faceted sculpture. His language of sharp, crystalline planes defines every villa.',
    },
    {
      role: 'Architecture',
      name: 'Liakos Associates Architects',
      text: 'Athens practice led by Paris Liakos and Simos Liakos. Masterplan and the design of every villa.',
    },
    {
      role: 'Brand & creative direction',
      name: 'Orlinski Realty Group',
      text: 'The real estate platform of the Orlinski universe, bringing art-driven branding to residential and hospitality projects.',
    },
    {
      role: 'Developer',
      name: 'KAMAI Group',
      text: 'Greek land owner and developer of Orlinski Bay, who builds and sells the villas.',
    },
  ],
}
