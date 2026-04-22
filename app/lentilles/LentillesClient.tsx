'use client'

import { CheckCircle, Eye, Droplets, Moon, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const ICONS: Record<string, React.ElementType> = { Eye, Droplets, Moon, Zap }

interface LensType {
  id: string
  iconKey: string
  label: string
  tagline: string
  desc: string
  points: string[]
  dark: boolean
}

interface Step {
  n: string
  title: string
  desc: string
}

export default function LentillesClient({
  lensTypes,
  process,
}: {
  lensTypes: LensType[]
  process: Step[]
}) {
  return (
    <>
      {/* ── Lens types ── */}
      <div className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                Types de lentilles
              </span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] text-obsidian">
              La bonne lentille pour chaque profil.
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {lensTypes.map((type) => {
              const Icon = ICONS[type.iconKey] || Eye
              return (
                <motion.div
                  key={type.id}
                  variants={fadeUp}
                  className={`border p-8 flex flex-col gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 ${
                    type.dark
                      ? 'bg-obsidian border-transparent'
                      : 'bg-ivory border-slate/30'
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brass" />
                  <div className="w-10 h-10 border border-brass/30 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-obsidian transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3
                      className={`font-playfair text-xl mb-1 ${
                        type.dark ? 'text-ivory' : 'text-obsidian'
                      }`}
                    >
                      {type.label}
                    </h3>
                    <p className="font-playfair italic text-sm text-brass/70 mb-3">
                      {type.tagline}
                    </p>
                    <p
                      className={`font-sans text-sm leading-relaxed ${
                        type.dark ? 'text-cream/60' : 'text-obsidian/60'
                      }`}
                    >
                      {type.desc}
                    </p>
                  </div>
                  <div
                    className={`border-t pt-4 flex flex-col gap-2 ${
                      type.dark ? 'border-white/10' : 'border-slate/30'
                    }`}
                  >
                    {type.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-brass flex-shrink-0" />
                        <span
                          className={`font-sans text-xs ${
                            type.dark ? 'text-cream/70' : 'text-obsidian/65'
                          }`}
                        >
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Adaptation process ── */}
      <div className="bg-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-brass" />
                <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">
                  Le protocole d&apos;Abdullah
                </span>
              </div>
              <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] text-ivory leading-tight">
                L&apos;adaptation aux lentilles, rigoureusement.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-sans text-sm text-cream/50 leading-relaxed">
                Chaque étape garantit confort, sécurité et précision — sans compromis.
              </p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {process.map((step) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                className="bg-navy p-8 flex flex-col gap-4 group hover:bg-white/4 transition-colors duration-300"
              >
                <span className="font-playfair text-4xl font-bold text-white/8 select-none leading-none">
                  {step.n}
                </span>
                <div className="w-5 h-0.5 bg-brass" />
                <h3 className="font-playfair text-lg text-ivory leading-snug">{step.title}</h3>
                <p className="font-sans text-sm text-cream/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
