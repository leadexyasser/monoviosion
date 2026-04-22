'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/constants'
import { staggerContainer, archReveal } from '@/lib/animations'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-obsidian py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.p
              className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              Espace & Ambiance
            </motion.p>
            <motion.h2
              className="font-playfair text-[clamp(2rem,5vw,3.5rem)] text-ivory"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Notre Boutique
            </motion.h2>
          </div>
          <motion.div
            className="flex items-center gap-2 text-cream/50 font-sans text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MapPin size={14} className="text-brass" />
            <span>Meknès, Maroc</span>
          </motion.div>
        </div>

        {/* Bento grid — first item spans 2 cols on sm+, all items use fixed aspect ratios */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={archReveal}
              className={`group relative overflow-hidden ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              data-cursor="image"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              {/* Hover brass overlay */}
              <div className="absolute inset-0 bg-brass/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption — always visible on mobile, slides in on desktop hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian/90 to-transparent sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-xs text-cream/80 tracking-wide">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
