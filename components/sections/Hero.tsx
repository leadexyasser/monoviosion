'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-obsidian noise-overlay">

      {/* Warm orb 1 — top left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          top: '-10%',
          left: '-8%',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(200,169,126,0.10) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Warm orb 2 — bottom right */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          bottom: '-15%',
          right: '-12%',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(200,169,126,0.06) 45%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Decorative arch SVG — centred, faintly glowing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 400 480"
          className="w-[320px] h-[400px] lg:w-[500px] lg:h-[600px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 480 L20 200 Q20 20 200 20 Q380 20 380 200 L380 480"
            stroke="rgba(201,168,76,0.18)"
            strokeWidth="6"
            filter="url(#glow)"
          />
          <path
            d="M20 480 L20 200 Q20 20 200 20 Q380 20 380 200 L380 480"
            stroke="rgba(201,168,76,0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M60 480 L60 210 Q60 60 200 60 Q340 60 340 210 L340 480"
            stroke="rgba(201,168,76,0.12)"
            strokeWidth="0.8"
          />
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Main content — left-aligned, vertically centred */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 max-w-7xl mx-auto w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-6 h-px bg-brass" />
            <span className="font-sans text-xs tracking-[0.3em] text-brass/90 uppercase">
              Boutique optique premium · Meknès
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-playfair leading-[1.05] mb-6">
            <motion.span
              className="block italic text-ivory text-[clamp(3rem,7vw,5.5rem)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              La vision,
            </motion.span>
            <motion.span
              className="block text-brass text-[clamp(3rem,7vw,5.5rem)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              réinventée.
            </motion.span>
          </h1>

          {/* Body */}
          <motion.p
            className="font-sans text-base text-cream/60 leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
          >
            Montures internationales, examens de vue de précision et expertise en
            lentilles de contact. Au cœur de Meknès, par des opticiens passionnés.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
          >
            <Link
              href="/collections"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300"
            >
              Découvrir les collections
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-7 py-3.5 border border-cream/25 text-cream/75 font-sans text-sm tracking-wide hover:border-cream/60 hover:text-cream transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>

        {/* Stat chips — desktop only, bottom right */}
        <motion.div
          className="hidden lg:flex absolute right-10 bottom-24 flex-col gap-3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          {[
            { n: '500+', l: 'Montures' },
            { n: '4', l: 'Marques' },
            { n: '100%', l: 'Satisfaction' },
          ].map((s) => (
            <div
              key={s.l}
              className="flex items-center gap-3 bg-obsidian/60 backdrop-blur-sm border border-white/10 px-4 py-3"
            >
              <span className="font-playfair text-xl text-brass font-bold">{s.n}</span>
              <span className="font-sans text-xs text-cream/50 tracking-wide">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
