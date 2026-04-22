import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, Sliders, Sun, Circle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services — Optique Monovision',
  description:
    "Examen de vue complet, adaptation de lentilles, montures sur mesure et lunettes solaires premium. Optique Monovision, Meknès.",
}

const services = [
  {
    id: 'examen',
    Icon: Eye,
    title: 'Examen de Vue Complet',
    tagline: "La précision au service de votre vision.",
    description:
      "Notre cabinet d'optométrie est équipé d'un auto-réfractomètre Rexxam RET-700 et d'une lampe à fente HR Elite pour un bilan visuel d'une précision clinique. Chaque examen comprend la mesure de la réfraction, l'évaluation de la vision binoculaire et un contrôle de la santé oculaire.",
    points: [
      'Mesure de la réfraction objective et subjective',
      'Contrôle de la vision binoculaire',
      'Évaluation de la santé oculaire',
      'Résultats et ordonnance en séance',
    ],
    image: '/images/store-equipment.jpg',
  },
  {
    id: 'mesure',
    Icon: Sliders,
    title: 'Montures sur Mesure',
    tagline: "La monture parfaite existe — nos opticiens la trouvent.",
    description:
      "Nos opticiens diplômés d'État vous accompagnent dans le choix de votre monture en tenant compte de votre morphologie, de votre prescription, de votre style de vie et de vos envies. Un conseil personnalisé, patient et sans pression.",
    points: [
      'Analyse morphologique du visage',
      'Sélection selon prescription et usage',
      'Essai et ajustement en boutique',
      'Conseil style sans engagement',
    ],
    image: '/images/store-interior.jpg',
  },
  {
    id: 'solaires',
    Icon: Sun,
    title: 'Solaires Premium',
    tagline: "Protection UV 400. Style sans compromis.",
    description:
      "Notre collection solaire regroupe les grandes maisons — Ray-Ban, Carrera, Tommy Hilfiger — pour une protection optimale des yeux. Chaque modèle bénéficie de notre expertise pour un ajustement parfait.",
    points: [
      'Protection UV 400 certifiée',
      'Verres polarisés disponibles',
      'Solaires correcteurs sur demande',
      'Entretien et ajustement inclus',
    ],
    image: '/images/store-sunglasses.jpg',
  },
  {
    id: 'lentilles',
    Icon: Circle,
    title: 'Adaptation Lentilles',
    tagline: "Liberté totale. Confort au quotidien.",
    description:
      "L'adaptation aux lentilles de contact nécessite un suivi professionnel rigoureux. Nos opticiens réalisent un bilan complet, vous conseillent sur le type de lentille adapté à votre profil (journalières, mensuelles, toriques) et assurent un suivi régulier.",
    points: [
      'Bilan d\'adaptation complet',
      'Choix journalières, mensuelles, toriques',
      'Formation au port et à l\'entretien',
      'Suivi professionnel régulier',
    ],
    image: '/images/store-arches.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-navy py-24 px-6 text-center">
        <p className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-4">
          Notre expertise
        </p>
        <h1 className="font-playfair italic text-[clamp(2.5rem,6vw,5rem)] text-ivory leading-tight">
          Nos Services
        </h1>
        <p className="font-sans text-sm text-cream/50 mt-4 max-w-lg mx-auto leading-relaxed">
          Équipements de pointe, opticiens diplômés d&apos;État, accompagnement
          personnalisé — votre vision mérite l&apos;excellence.
        </p>
      </div>

      {/* Services detail */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 flex flex-col gap-28">
        {services.map((svc, i) => {
          const { Icon } = svc
          return (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start`}
            >
              {/* Image side */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '50% 50% 0 0 / 50% 50% 0 0',
                    aspectRatio: '4/5',
                  }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
                </div>
              </div>

              {/* Text side */}
              <div
                className={`flex flex-col gap-6 pt-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-brass/40 flex items-center justify-center text-brass">
                    <Icon size={18} />
                  </div>
                  <span className="font-sans text-xs tracking-widest text-brass/80 uppercase">
                    Service
                  </span>
                </div>
                <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] text-obsidian leading-tight">
                  {svc.title}
                </h2>
                <p className="font-playfair italic text-xl text-brass/80">
                  {svc.tagline}
                </p>
                <p className="font-sans text-base text-obsidian/65 leading-relaxed">
                  {svc.description}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 font-sans text-sm text-obsidian/70">
                      <CheckCircle size={15} className="text-brass flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 border border-brass text-brass text-sm font-sans tracking-wide hover:bg-brass hover:text-obsidian transition-all duration-300 w-fit"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
