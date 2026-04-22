'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Instagram } from 'lucide-react'
import { staggerContainer, fadeUp, fadeIn } from '@/lib/animations'

const moments = [
  {
    image: '/images/store-facade.jpg',
    label: '01 — L\'entrée',
    title: 'Une boutique qui s\'annonce.',
    desc: "L'arche noire et le signe lumineux MONOVISION vous accueillent dès l'avenue. L'expérience commence avant même d'entrer.",
    position: 'object-center',
  },
  {
    image: '/images/store-arches.jpg',
    label: '02 — La salle d\'exposition',
    title: 'Les arches, symbole de la maison.',
    desc: "Les arches noires encadrent nos collections comme des œuvres d'art — 500+ montures sur des étagères bois éclairées par des LED chaudes.",
    position: 'object-top',
  },
  {
    image: '/images/store-sunglasses.jpg',
    label: '03 — Les solaires',
    title: 'Ray-Ban. Carrera. Et d\'autres.',
    desc: "Un mur entier consacré aux solaires premium. Chaque marque, chaque modèle est sélectionné pour sa qualité de verre et sa durabilité.",
    position: 'object-center',
  },
  {
    image: '/images/store-interior.jpg',
    label: '04 — L\'espace conseil',
    title: 'Le moment où tout se précise.',
    desc: "Asseyez-vous face au comptoir en bois. Nos opticiens prennent le temps d'écouter, de mesurer et de conseiller sans précipitation.",
    position: 'object-center',
  },
  {
    image: '/images/store-display.jpg',
    label: '05 — Les vitrines',
    title: 'Carrera. Tommy Hilfiger. Glory.',
    desc: "Chaque marque a sa vitrine, son éclairage, son identité. Une sélection internationale mise en valeur avec soin dans un cadre unique.",
    position: 'object-top',
  },
  {
    image: '/images/store-equipment.jpg',
    label: '06 — Le cabinet',
    title: 'La précision clinique.',
    desc: "À l'écart, notre cabinet d'optométrie abrite les équipements qui font la différence : Rexxam RET-700 et lampe à fente HR Elite.",
    position: 'object-center',
  },
]

const atmosphere = [
  { label: 'Globe pendant en laiton', desc: "Des luminaires globes suspendus baignent l'espace d'une lumière chaude et tamisée." },
  { label: 'Arches noires signature', desc: "Inspirées de l'architecture de la médina, les arches structurent chaque zone de la boutique." },
  { label: 'Comptoir boisé', desc: "Le comptoir ovale en bois massif crée un espace intime pour le conseil personnalisé." },
  { label: 'Meubles bleu nuit', desc: "Les cabinets en bleu marine avec poignées en laiton rappellent l'élégance des boutiques parisiennes." },
]

export default function ExperiencePage() {
  return (
    <div className="pt-[72px] bg-ivory min-h-screen">

      {/* ── Hero cinematic ── */}
      <div className="relative h-[65vh] min-h-[440px] overflow-hidden bg-obsidian">
        <Image
          src="/images/store-facade.jpg"
          alt="Façade Optique Monovision — expérience boutique premium"
          fill
          priority
          className="object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.35em] text-brass uppercase">Meknès · Maroc</span>
              <div className="w-8 h-px bg-brass" />
            </div>
            <h1 className="font-playfair text-[clamp(2.5rem,7vw,5.5rem)] text-ivory leading-[1.05] mb-4">
              Notre Boutique
            </h1>
            <p className="font-sans text-base text-cream/60 max-w-md mx-auto">
              Un espace pensé dans les moindres détails pour que votre visite soit
              aussi mémorable que vos nouvelles lunettes.
            </p>
          </motion.div>
        </div>
        {/* Location badge */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-obsidian/70 backdrop-blur-sm border border-white/10 px-4 py-2">
          <MapPin size={13} className="text-brass" />
          <span className="font-sans text-xs text-cream/70 tracking-wide">Avenue Hassan II, Meknès</span>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="bg-ivory py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-playfair italic text-[clamp(1.4rem,3vw,2rem)] text-obsidian leading-relaxed">
            &ldquo;Une boutique n&apos;est pas seulement un lieu de vente.
            C&apos;est une expérience, une atmosphère, un moment de confiance.&rdquo;
          </p>
          <div className="w-8 h-0.5 bg-brass mx-auto mt-6 mb-4" />
          <p className="font-sans text-sm text-obsidian/50">— Abdullah Barada, fondateur</p>
        </div>
      </div>

      {/* ── Moments — alternating full-bleed ── */}
      <div className="bg-cream">
        {moments.map((m, i) => (
          <div
            key={m.label}
            className={`grid grid-cols-1 lg:grid-cols-2 min-h-[520px] ${
              i % 2 === 1 ? '' : ''
            }`}
          >
            {/* Image */}
            <motion.div
              className={`relative h-[280px] lg:h-auto overflow-hidden ${
                i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={m.image}
                alt={m.title}
                fill
                className={`object-cover ${m.position}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className={`flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-16 ${
                i % 2 === 1 ? 'lg:order-1 bg-obsidian' : 'lg:order-2 bg-ivory'
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={`font-sans text-xs tracking-[0.3em] uppercase mb-4 block ${
                  i % 2 === 1 ? 'text-brass/80' : 'text-brass/80'
                }`}
              >
                {m.label}
              </span>
              <h2
                className={`font-playfair text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight mb-5 ${
                  i % 2 === 1 ? 'text-ivory' : 'text-obsidian'
                }`}
              >
                {m.title}
              </h2>
              <p
                className={`font-sans text-base leading-relaxed max-w-md ${
                  i % 2 === 1 ? 'text-cream/60' : 'text-obsidian/65'
                }`}
              >
                {m.desc}
              </p>
              <div className={`w-8 h-0.5 bg-brass mt-8`} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Design details ── */}
      <div className="bg-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                L&apos;atmosphère
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] text-ivory max-w-xl">
              Chaque détail raconte quelque chose.
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {atmosphere.map((a, i) => (
              <motion.div key={a.label} variants={fadeUp} className="flex flex-col gap-4">
                <span className="font-playfair text-[3.5rem] font-bold text-white/6 leading-none select-none">
                  0{i + 1}
                </span>
                <div className="-mt-6">
                  <div className="w-5 h-0.5 bg-brass mb-4" />
                  <h3 className="font-playfair text-lg text-ivory mb-3">{a.label}</h3>
                  <p className="font-sans text-sm text-cream/55 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Full-bleed gallery strip ── */}
      <div className="bg-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              '/images/store-arches.jpg',
              '/images/store-sunglasses.jpg',
              '/images/store-interior.jpg',
              '/images/store-display.jpg',
            ].map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt="Optique Monovision — galerie boutique"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Instagram link */}
          <div className="mt-8 flex justify-center">
            <Link
              href="https://www.instagram.com/optique.monovision"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-cream/50 hover:text-brass transition-colors duration-200"
            >
              <Instagram size={16} />
              <span className="font-sans text-sm tracking-wide">
                Plus de photos sur @optique.monovision
              </span>
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-ivory py-20 px-6 text-center">
        <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] text-obsidian mb-4">
          On vous attend.
        </h2>
        <p className="font-sans text-sm text-obsidian/60 max-w-md mx-auto mb-8 leading-relaxed">
          Avenue Hassan II, Meknès. Du lundi au samedi de 9h à 20h,
          le dimanche de 10h à 18h.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-obsidian text-ivory font-sans text-sm tracking-wide hover:bg-navy transition-colors duration-300"
          >
            <MapPin size={14} />
            Obtenir l&apos;itinéraire
          </Link>
          <Link
            href="/collections"
            className="px-8 py-3.5 border border-obsidian/20 text-obsidian/70 font-sans text-sm tracking-wide hover:border-brass hover:text-brass transition-all duration-300"
          >
            Voir les collections
          </Link>
        </div>
      </div>
    </div>
  )
}
