'use client'

import { motion } from 'framer-motion'
import { Eye, Sliders, Sun, Circle } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, fadeUp } from '@/lib/animations'

const ICONS: Record<string, React.ElementType> = { Eye, Sliders, Sun, Circle }

export default function Services() {
  return (
    <section className="bg-cream py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Nos expertises
          </motion.p>
          <motion.h2
            className="font-playfair text-[clamp(2rem,5vw,3.5rem)] text-obsidian"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Nos Services
          </motion.h2>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SERVICES.map((svc) => {
            const Icon = ICONS[svc.icon] || Eye
            return (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                className="group bg-ivory border border-slate/40 p-8 lg:p-10 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-obsidian/8 relative overflow-hidden"
              >
                {/* Brass top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brass transition-all duration-300 group-hover:h-1" />

                <div className="flex flex-col gap-5">
                  <div className="w-11 h-11 flex items-center justify-center border border-brass/30 text-brass group-hover:bg-brass group-hover:text-obsidian transition-all duration-300">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl text-obsidian mb-3 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="font-sans text-sm text-obsidian/70 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
