'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const reviews = [
  {
    text: "Une boutique hors du commun à Meknès. Abdullah a pris le temps de comprendre mes besoins visuels et m'a trouvé des lentilles parfaitement adaptées. Le cadre est magnifique, le service irréprochable.",
    name: 'Salma A.',
    detail: 'Cliente — Lentilles de contact',
  },
  {
    text: "J'ai fait mon examen de vue ici et la précision des équipements m'a impressionné. L'ordonnance est exacte et les montures proposées sont vraiment belles. Je ne vais plus nulle part ailleurs.",
    name: 'Karim M.',
    detail: 'Client — Examen de vue & montures',
  },
  {
    text: "Le conseil de l'équipe est sincère — pas de pression, juste de l'expertise. Mes lunettes Ray-Ban ont été ajustées à la perfection. Un vrai service premium dans notre ville.",
    name: 'Nadia T.',
    detail: 'Cliente — Lunettes de soleil',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-ivory py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Témoignages
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,4vw,3rem)] text-obsidian">
              Ce qu&apos;ils disent
            </h2>
          </div>
          {/* Five stars decoration */}
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-brass fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-sans text-xs text-obsidian/65 ml-2 tracking-wide">5.0</span>
          </div>
        </div>

        {/* Reviews grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-slate/30 p-8 flex flex-col gap-6 relative group hover:border-brass/30 transition-colors duration-300"
            >
              {/* Top brass accent */}
              <div className="absolute top-0 left-8 w-8 h-0.5 bg-brass" />

              <Quote size={20} className="text-brass/40 flex-shrink-0" />

              <p className="font-sans text-sm text-obsidian/70 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="border-t border-slate/40 pt-5">
                <p className="font-playfair italic text-obsidian font-medium">{r.name}</p>
                <p className="font-sans text-xs text-obsidian/60 mt-0.5 tracking-wide">{r.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
