'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { ArrowRight } from 'lucide-react'

export default function BrandStatement() {
  return (
    <section className="bg-obsidian py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Two-column: statement + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Notre philosophie
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.5rem)] text-ivory leading-[1.1] mb-6">
              Chaque regard mérite{' '}
              <span className="italic text-brass">l&apos;excellence.</span>
            </h2>
            <p className="font-sans text-base text-cream/75 leading-relaxed mb-8 max-w-md">
              Fondée par Abdullah Barada, opticien spécialisé en lentilles de contact,
              Optique Monovision réunit expertise clinique et sens du détail dans un
              espace pensé pour vous.
            </p>
            <Link
              href="/expert"
              className="group inline-flex items-center gap-2 font-sans text-sm text-brass hover:text-oak transition-colors duration-200 border-b border-brass/30 hover:border-oak/50 pb-0.5"
            >
              Découvrir notre expert
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right — image with arch frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden mx-auto max-w-sm"
              style={{
                borderRadius: '50% 50% 0 0 / 55% 55% 0 0',
                aspectRatio: '3/4',
              }}
            >
              <Image
                src="/images/store-arches.jpg"
                alt="Mur d'exposition Optique Monovision — arches noires et vitrines éclairées"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>
            {/* Brass accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-brass" />
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="border-t border-white/8 pt-16">
          <motion.div
            className="grid grid-cols-3 gap-4 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-2 py-8 border-x border-white/6 first:border-l-0 last:border-r-0"
              >
                <div className="font-playfair text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-brass leading-none">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="w-4 h-px bg-brass/40 mx-auto" />
                <p className="font-sans text-xs text-cream/65 tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
