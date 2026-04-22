import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Microscope, BookOpen, Heart, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "L'Expert — Abdullah Barada · Optique Monovision",
  description:
    "Rencontrez Abdullah Barada, opticien diplômé d'État et spécialiste en lentilles de contact. Fondateur d'Optique Monovision à Meknès.",
}

const milestones = [
  {
    year: '2018',
    title: 'Diplôme d\'opticien-lunetier',
    desc: "Formation supérieure en optique-lunetterie, spécialisation en contactologie et bilan visuel clinique.",
  },
  {
    year: '2020',
    title: 'Spécialisation contactologie',
    desc: "Formation avancée en adaptation de lentilles de contact — lentilles toriques, multifocales et thérapeutiques.",
  },
  {
    year: '2022',
    title: 'Fondation de Monovision',
    desc: "Ouverture d'Optique Monovision à Meknès — une boutique pensée comme une expérience, pas seulement un commerce.",
  },
  {
    year: '2024',
    title: 'Équipements de pointe',
    desc: "Acquisition du système Rexxam RET-700 et de la lampe à fente HR Elite pour des bilans visuels d'une précision clinique.",
  },
]

const values = [
  {
    Icon: Heart,
    title: 'L\'humain d\'abord',
    desc: 'Chaque consultation commence par une vraie conversation. Vos habitudes visuelles, votre mode de vie, vos aspirations — tout compte.',
  },
  {
    Icon: Microscope,
    title: 'Rigueur clinique',
    desc: "L'improvisation n'a pas sa place en optique. Abdullah applique des protocoles stricts pour garantir une prescription fiable et confortable.",
  },
  {
    Icon: Award,
    title: 'Excellence sans compromis',
    desc: "Que ce soit pour un examen de vue ou l'adaptation de lentilles, le résultat doit être parfait. Pas acceptable — parfait.",
  },
  {
    Icon: BookOpen,
    title: 'Formation continue',
    desc: "L'optique évolue vite. Abdullah se tient informé des dernières avancées en contactologie et en technologie optique.",
  },
]

export default function ExpertPage() {
  return (
    <div className="pt-[72px] bg-ivory min-h-screen">

      {/* ── Hero split ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* Image side */}
        <div className="relative h-[60vw] lg:h-auto overflow-hidden bg-navy">
          <Image
            src="/images/store-interior.jpg"
            alt="Abdullah Barada dans sa boutique Optique Monovision"
            fill
            priority
            className="object-cover opacity-70"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
          {/* Quote overlay */}
          <div className="absolute bottom-10 left-10 right-10 lg:right-20">
            <div className="w-8 h-0.5 bg-brass mb-4" />
            <p className="font-playfair italic text-xl lg:text-2xl text-ivory leading-snug">
              &ldquo;Voir mieux, c&apos;est vivre mieux. Mon rôle est de vous y conduire avec précision.&rdquo;
            </p>
            <p className="font-sans text-sm text-cream/50 mt-3">— Abdullah Barada</p>
          </div>
        </div>

        {/* Text side */}
        <div className="bg-ivory flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-16 lg:py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-brass" />
            <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
              Le fondateur
            </span>
          </div>

          <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.5rem)] text-obsidian leading-tight mb-6">
            Abdullah Barada
          </h1>

          <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-4">
            Abdullah Barada a grandi avec une fascination pour la précision — celle
            des instruments, des mesures, des solutions sur mesure. Après un diplôme
            d&apos;opticien-lunetier et une spécialisation en contactologie, il a fondé
            Optique Monovision à Meknès avec une idée simple mais exigeante : offrir
            à sa ville le niveau de service que l&apos;on trouve dans les grandes capitales.
          </p>
          <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-10">
            Spécialiste reconnu en adaptation de lentilles de contact — journalières,
            mensuelles, toriques et multifocales — il combine expertise clinique et
            sens de l&apos;écoute pour trouver la solution visuelle idéale pour chaque patient.
          </p>

          {/* Credentials chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "Opticien diplômé d'État",
              'Spécialiste contactologie',
              'Fondateur Monovision',
              'Meknès, Maroc',
            ].map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 border border-brass/30 font-sans text-xs text-brass/80 tracking-wide"
              >
                {c}
              </span>
            ))}
          </div>

          <Link
            href="/lentilles"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-obsidian/70 hover:text-brass transition-colors duration-200 border-b border-obsidian/20 hover:border-brass pb-0.5 w-fit"
          >
            Découvrir son expertise en lentilles
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Sa philosophie
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-obsidian leading-tight">
              Des valeurs qui guident chaque consultation.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate/30 p-8 flex flex-col gap-4 hover:border-brass/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-brass/25 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-obsidian transition-all duration-300">
                  <Icon size={17} />
                </div>
                <div className="w-5 h-0.5 bg-brass/40" />
                <h3 className="font-playfair text-lg text-obsidian leading-snug">{title}</h3>
                <p className="font-sans text-sm text-obsidian/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Parcours / Timeline ── */}
      <div className="bg-navy py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Parcours
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-ivory">
              Une carrière construite sur la rigueur.
            </h2>
          </div>

          <div className="relative pl-6 border-l border-brass/20 flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative pb-14 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full border-2 border-brass bg-navy" />

                <span className="font-sans text-xs text-brass/70 tracking-widest uppercase mb-2 block">
                  {m.year}
                </span>
                <h3 className="font-playfair text-xl text-ivory mb-2">{m.title}</h3>
                <p className="font-sans text-sm text-cream/55 leading-relaxed max-w-lg">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Equipment spotlight ── */}
      <div className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-brass" />
                <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                  Équipements
                </span>
              </div>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] text-obsidian leading-tight mb-6">
                La précision clinique au service de votre vision.
              </h2>
              <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-6">
                Le cabinet d&apos;optométrie d&apos;Optique Monovision est équipé d&apos;instruments
                de référence médicale : un auto-réfractomètre Rexxam RET-700 pour la
                mesure objective de la réfraction, et une lampe à fente HR Elite pour
                l&apos;examen clinique de la santé oculaire.
              </p>
              <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-8">
                Ces équipements permettent des diagnostics d&apos;une précision comparable
                à celle des cliniques spécialisées, dans un cadre confortable et rassurant.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-brass text-brass text-sm font-sans tracking-wide hover:bg-brass hover:text-obsidian transition-all duration-300"
              >
                Voir tous les services
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '50% 50% 0 0 / 50% 50% 0 0',
                aspectRatio: '4/5',
              }}
            >
              <Image
                src="/images/store-equipment.jpg"
                alt="Lampe à fente HR Elite et auto-réfractomètre Rexxam — cabinet d'optométrie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-obsidian py-20 px-6 text-center">
        <h2 className="font-playfair italic text-[clamp(1.8rem,4vw,3rem)] text-ivory mb-4">
          Venez rencontrer Abdullah.
        </h2>
        <p className="font-sans text-sm text-cream/55 max-w-md mx-auto mb-8 leading-relaxed">
          Du lundi au samedi de 9h à 20h. Pas de rendez-vous obligatoire — passez
          simplement nous voir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300"
          >
            Nous trouver
          </Link>
          <Link
            href="/lentilles"
            className="px-8 py-3.5 border border-cream/20 text-cream/70 font-sans text-sm tracking-wide hover:border-cream/50 hover:text-cream transition-all duration-300"
          >
            Son expertise lentilles →
          </Link>
        </div>
      </div>
    </div>
  )
}
