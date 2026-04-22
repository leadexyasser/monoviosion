export const NAV_LINKS = [
  { label: 'Collections', href: '/collections' },
  { label: 'Lentilles', href: '/lentilles' },
  { label: 'Services', href: '/services' },
  { label: 'L\'Expert', href: '/expert' },
  { label: 'Notre Boutique', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const BRANDS = [
  'Ray-Ban',
  'Carrera',
  'Tommy Hilfiger',
  'Glory',
  'Silhouette',
  'Persol',
]

export const COLLECTIONS = [
  {
    id: 'vue',
    title: 'Lunettes de Vue',
    subtitle: 'Des montures qui racontent une histoire — la vôtre.',
    image: '/images/store-display.jpg',
    href: '/collections#vue',
  },
  {
    id: 'soleil',
    title: 'Lunettes de Soleil',
    subtitle: 'Protection premium. Style intemporel.',
    image: '/images/store-sunglasses.jpg',
    href: '/collections#soleil',
  },
  {
    id: 'lentilles',
    title: 'Lentilles de Contact',
    subtitle: 'Liberté de voir, sans contrainte.',
    image: '/images/store-interior.jpg',
    href: '/lentilles',
  },
]

export const SERVICES = [
  {
    id: 'examen',
    icon: 'Eye',
    title: 'Examen de Vue Complet',
    description:
      'Bilan visuel précis grâce à nos équipements optométriques de dernière génération — auto-réfractomètre Rexxam et lampe à fente HR Elite.',
  },
  {
    id: 'mesure',
    icon: 'Sliders',
    title: 'Montures sur Mesure',
    description:
      'Conseil personnalisé par nos opticiens certifiés pour trouver la monture qui vous correspond, selon votre morphologie et votre style.',
  },
  {
    id: 'solaires',
    icon: 'Sun',
    title: 'Solaires Premium',
    description:
      'Une sélection rigoureuse des meilleures marques internationales — Ray-Ban, Carrera, Tommy Hilfiger — pour une protection optimale.',
  },
  {
    id: 'lentilles',
    icon: 'Circle',
    title: 'Adaptation Lentilles',
    description:
      'Adaptation et suivi professionnel pour le port de lentilles de contact. Confort, précision et liberté au quotidien.',
  },
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Montures disponibles' },
  { value: 4, suffix: '', label: 'Marques internationales' },
  { value: 100, suffix: '%', label: 'Satisfaction client' },
]

export const WHY_US = [
  {
    number: '01',
    title: 'Expertise',
    description:
      "Opticiens diplômés d'État. Chaque conseil est taillé sur mesure pour votre profil visuel et votre personnalité.",
  },
  {
    number: '02',
    title: 'Qualité',
    description:
      'Marques internationales soigneusement sélectionnées pour leur excellence, leur durabilité et leur esthétique intemporelle.',
  },
  {
    number: '03',
    title: 'Technologie',
    description:
      'Équipements diagnostiques de dernière génération pour une précision clinique et un confort visuel optimal.',
  },
]

export const GALLERY_IMAGES = [
  {
    src: '/images/store-facade.jpg',
    alt: "Façade de la boutique Optique Monovision, Meknès",
    rowSpan: 2,
  },
  {
    src: '/images/store-arches.jpg',
    alt: "Mur d'exposition avec arches noires, lunettes de vue premium",
    rowSpan: 1,
  },
  {
    src: '/images/store-sunglasses.jpg',
    alt: 'Collection Ray-Ban — lunettes de soleil',
    rowSpan: 1,
  },
  {
    src: '/images/store-interior.jpg',
    alt: 'Espace conseil avec comptoir en bois et globes lumineux',
    rowSpan: 1,
  },
  {
    src: '/images/store-display.jpg',
    alt: 'Vitrine Carrera et Tommy Hilfiger sous arche noire',
    rowSpan: 1,
  },
  {
    src: '/images/store-equipment.jpg',
    alt: "Cabinet d'optométrie — lampe à fente et auto-réfractomètre",
    rowSpan: 1,
  },
]

export const CONTACT = {
  address: 'Avenue Hassan II, Meknès 50000, Maroc',
  phone: '+212 5XX-XXXXXX',
  instagram: '@optique.monovision',
  instagramUrl: 'https://www.instagram.com/optique.monovision',
  googleMapsUrl: 'https://maps.app.goo.gl/YoZfEc5vMNYRDafF9',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=optique+monovision+meknes+maroc&output=embed&hl=fr&z=16',
  hours: {
    weekdays: 'Lun – Sam  ·  9h00 – 20h00',
    sunday: 'Dim  ·  10h00 – 18h00',
  },
}
