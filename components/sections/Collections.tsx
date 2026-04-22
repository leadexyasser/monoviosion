'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { COLLECTIONS } from '@/lib/constants'
import { staggerContainer, archReveal } from '@/lib/animations'

export default function Collections() {
  return (
    <section className="bg-cream py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Collection 2025
          </motion.p>
          <div className="flex items-end gap-6">
            <motion.h2
              className="font-playfair text-[clamp(2rem,5vw,3.5rem)] text-obsidian leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Nos Collections
            </motion.h2>
            {/* Animated brass underline */}
            <motion.div
              className="h-px bg-brass flex-1 max-w-[200px] mb-3"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {COLLECTIONS.map((col) => (
            <motion.div key={col.id} variants={archReveal}>
              <Link href={col.href} className="group block" data-cursor="image">
                {/* Arch image wrapper */}
                <div
                  className="relative overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-2xl"
                  style={{
                    borderRadius: '50% 50% 0 0 / 55% 55% 0 0',
                    aspectRatio: '3/4',
                  }}
                >
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
                  {/* Brass border on hover */}
                  <div
                    className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      borderRadius: 'inherit',
                      boxShadow: 'inset 0 0 0 1.5px rgba(201,168,76,0.6)',
                    }}
                  />
                  {/* Category overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-playfair italic text-xl text-ivory leading-tight">
                      {col.title}
                    </p>
                  </div>
                </div>

                {/* Card text */}
                <div className="px-1 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-playfair text-lg text-obsidian mb-1">
                      {col.title}
                    </h3>
                    <p className="font-sans text-sm text-obsidian/70 leading-relaxed">
                      {col.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 border border-obsidian/20 flex items-center justify-center group-hover:border-brass group-hover:text-brass transition-all duration-300 mt-0.5">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
