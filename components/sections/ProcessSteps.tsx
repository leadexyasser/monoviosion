'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarCheck, FlaskConical, Glasses, Sparkles } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const steps = [
  {
    n: '01',
    Icon: CalendarCheck,
    title: 'Prise de rendez-vous',
    desc: 'Choisissez votre créneau en boutique ou passez simplement nous voir — aucune réservation obligatoire.',
  },
  {
    n: '02',
    Icon: FlaskConical,
    title: 'Examen de vue',
    desc: 'Bilan visuel complet avec nos équipements de précision : auto-réfractomètre Rexxam et lampe à fente HR Elite.',
  },
  {
    n: '03',
    Icon: Glasses,
    title: 'Sélection & conseil',
    desc: 'Nos opticiens vous guident parmi 500+ montures ou vous proposent les lentilles adaptées à votre profil.',
  },
  {
    n: '04',
    Icon: Sparkles,
    title: 'Finalisation & suivi',
    desc: 'Ajustement sur mesure, livraison rapide et suivi post-adaptation — nous restons disponibles.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="bg-navy py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Comment ça fonctionne
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(2rem,4.5vw,3.2rem)] text-ivory leading-tight">
              Votre parcours visuel,<br />
              <span className="italic text-brass">étape par étape.</span>
            </h2>
          </motion.div>
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-sans text-sm text-brass/80 hover:text-brass border-b border-brass/30 hover:border-brass pb-0.5 transition-all duration-200"
            >
              Tous nos services →
            </Link>
          </motion.div>
        </div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              variants={fadeUp}
              className="bg-navy p-8 lg:p-10 flex flex-col gap-5 relative group hover:bg-navy/60 transition-colors duration-300"
            >
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-10 w-px h-8 bg-brass/20" />
              )}

              <div className="flex items-start justify-between">
                <div className="w-10 h-10 border border-brass/25 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-obsidian transition-all duration-300">
                  <step.Icon size={18} />
                </div>
                <span
                  className="font-playfair text-5xl font-bold text-white/5 leading-none select-none"
                  aria-hidden
                >
                  {step.n}
                </span>
              </div>

              <div>
                <h3 className="font-playfair text-lg text-ivory mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
