'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Microscope, BookOpen } from 'lucide-react'

const credentials = [
  { Icon: Award, label: "Opticien diplômé d'État" },
  { Icon: Microscope, label: 'Spécialisé en lentilles de contact' },
  { Icon: BookOpen, label: 'Formation internationale' },
]

export default function ExpertTeaser() {
  return (
    <section className="bg-cream py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image block — 5 cols */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '50% 50% 0 0 / 50% 50% 0 0',
                aspectRatio: '4/5',
              }}
            >
              <Image
                src="/images/store-interior.jpg"
                alt="Espace conseil — Optique Monovision"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
            </div>

            {/* Floating credentials card — desktop only */}
            <motion.div
              className="hidden lg:block absolute -bottom-6 -right-10 bg-obsidian p-5 max-w-[220px] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <p className="font-sans text-xs text-brass/80 tracking-widest uppercase mb-3">
                Expert
              </p>
              <p className="font-playfair text-lg text-ivory leading-tight">
                Abdellah Berrada
              </p>
              <p className="font-sans text-xs text-cream/65 mt-1 leading-relaxed">
                Fondateur & Opticien spécialiste
              </p>
              <div className="w-6 h-0.5 bg-brass mt-4" />
            </motion.div>

            {/* Inline name card — mobile only */}
            <div className="lg:hidden mt-4 flex items-center gap-4 bg-obsidian px-5 py-4">
              <div className="w-6 h-0.5 bg-brass flex-shrink-0" />
              <div>
                <p className="font-playfair text-base text-ivory leading-tight">Abdellah Berrada</p>
                <p className="font-sans text-xs text-cream/65 mt-0.5">Fondateur & Opticien spécialiste</p>
              </div>
            </div>
          </motion.div>

          {/* Text block — 7 cols */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-brass" />
                <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                  L&apos;expert
                </span>
              </div>
              <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.2rem)] text-obsidian leading-tight">
                Une vision,<br />
                <span className="italic">une expertise.</span>
              </h2>
            </div>

            <p className="font-sans text-base text-obsidian/75 leading-relaxed max-w-lg">
              Abdellah Berrada a fondé Optique Monovision avec une conviction simple :
              chaque client mérite un accompagnement clinique rigoureux et un conseil
              sincère. Spécialisé en adaptation de lentilles de contact, il combine
              précision médicale et passion pour le design optique.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3">
              {credentials.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-7 h-7 flex items-center justify-center border border-brass/30 text-brass flex-shrink-0">
                    <Icon size={13} />
                  </div>
                  <span className="font-sans text-sm text-obsidian/80">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/expert"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-obsidian/80 hover:text-brass transition-colors duration-200 border-b border-obsidian/20 hover:border-brass pb-0.5 w-fit mt-1"
            >
              En savoir plus sur Abdellah
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
