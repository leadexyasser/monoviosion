import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Collections — Optique Monovision',
  description:
    'Découvrez nos collections de lunettes de vue, lunettes de soleil et lentilles de contact. Ray-Ban, Carrera, Tommy Hilfiger, Glory.',
}

const categories = [
  {
    id: 'vue',
    title: 'Lunettes de Vue',
    description:
      "Notre sélection de montures de vue allie raffinement et confort. Des classiques intemporels aux formes contemporaines, chaque monture est choisie pour sa qualité de fabrication et son esthétique. Nos opticiens vous guident vers la monture qui correspond à votre morphologie et à votre style de vie.",
    image: '/images/store-display.jpg',
    brands: ['Ray-Ban', 'Carrera', 'Tommy Hilfiger', 'Glory'],
  },
  {
    id: 'soleil',
    title: 'Lunettes de Soleil',
    description:
      'Voir mieux. Paraître mieux. Vivre mieux. Nos lunettes de soleil combinent protection optimale des yeux et style affirmé. De l\'aviateur classique au modèle tendance, toutes nos montures offrent une protection UV 400 certifiée.',
    image: '/images/store-sunglasses.jpg',
    brands: ['Ray-Ban', 'Carrera', 'Tommy Hilfiger'],
  },
  {
    id: 'lentilles',
    title: 'Lentilles de Contact',
    description:
      "La liberté de voir sans contrainte. Nos opticiens certifiés assurent un bilan d'adaptation complet pour vous proposer les lentilles les mieux adaptées à votre profil visuel — journalières, mensuelles, toriques ou multifocales.",
    image: '/images/store-interior.jpg',
    brands: [],
  },
]

export default function CollectionsPage() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-obsidian py-24 px-6 text-center">
        <p className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-4">
          Saison 2025
        </p>
        <h1 className="font-playfair italic text-[clamp(2.5rem,6vw,5rem)] text-ivory leading-tight">
          Nos Collections
        </h1>
        <p className="font-sans text-sm text-cream/50 mt-4 max-w-lg mx-auto leading-relaxed">
          Des montures qui racontent une histoire — la vôtre. Sélection internationale,
          expertise locale.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col gap-32">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            id={cat.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{
                borderRadius: '50% 50% 0 0 / 55% 55% 0 0',
                aspectRatio: '3/4',
              }}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>

            {/* Text */}
            <div className={`flex flex-col gap-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="w-8 h-0.5 bg-brass" />
              <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] text-obsidian leading-tight">
                {cat.title}
              </h2>
              <p className="font-sans text-base text-obsidian/65 leading-relaxed">
                {cat.description}
              </p>
              {cat.brands.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {cat.brands.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 border border-brass/40 font-sans text-xs text-brass/80 tracking-wider uppercase"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-sans text-sm text-obsidian/70 hover:text-brass border-b border-obsidian/20 hover:border-brass pb-0.5 transition-all duration-200 w-fit mt-2"
              >
                Prendre rendez-vous →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
