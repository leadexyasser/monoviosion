'use client'

import { motion } from 'framer-motion'
import { WHY_US } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function WhyUs() {
  return (
    <section className="bg-navy py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-3">
            Pourquoi nous choisir
          </p>
          <h2 className="font-playfair text-[clamp(2rem,5vw,3.5rem)] text-ivory">
            Notre Engagement
          </h2>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-brass/20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {WHY_US.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              className="flex flex-col gap-6 px-8 lg:px-12 py-10 lg:py-6"
            >
              {/* Faint number */}
              <div
                className="font-playfair text-[5rem] lg:text-[7rem] font-bold leading-none text-cream/[0.08] select-none"
                aria-hidden
              >
                {pillar.number}
              </div>
              {/* Content */}
              <div className="-mt-6 lg:-mt-8">
                <div className="w-8 h-0.5 bg-brass mb-5" />
                <h3 className="font-playfair text-2xl text-ivory mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
