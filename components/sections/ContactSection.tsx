'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, Navigation } from 'lucide-react'
import { CONTACT } from '@/lib/constants'
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations'

export default function ContactSection() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Map — 3/5 width */}
          <motion.div
            className="lg:col-span-3 relative h-[240px] sm:h-[320px] lg:h-[600px]"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <iframe
              src={CONTACT.mapEmbedUrl}
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Optique Monovision, Meknès"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-obsidian/10 pointer-events-none" />
          </motion.div>

          {/* Contact card — 2/5 width */}
          <motion.div
            className="lg:col-span-2 bg-obsidian px-8 lg:px-12 py-16 flex flex-col gap-8 justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Logo */}
            <div className="flex flex-col mb-2">
              <span className="font-playfair italic text-sm text-cream/50 tracking-wide">
                Optique
              </span>
              <span className="font-playfair font-bold text-2xl tracking-[0.14em] uppercase text-ivory">
                Monovision
              </span>
            </div>

            {/* Brass divider */}
            <div className="led-strip w-24" />

            {/* Info rows */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-brass/30 text-brass flex-shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream/65 uppercase tracking-widest mb-1">
                    Adresse
                  </p>
                  <p className="font-sans text-sm text-cream/80 leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-brass/30 text-brass flex-shrink-0 mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream/65 uppercase tracking-widest mb-1">
                    Téléphone
                  </p>
                  <Link
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="font-sans text-sm text-cream/80 hover:text-brass transition-colors duration-200 block"
                  >
                    {CONTACT.phone}
                  </Link>
                  <Link
                    href={`tel:${CONTACT.mobile.replace(/\s/g, '')}`}
                    className="font-sans text-sm text-cream/80 hover:text-brass transition-colors duration-200 block mt-0.5"
                  >
                    {CONTACT.mobile}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-brass/30 text-brass flex-shrink-0 mt-0.5">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream/65 uppercase tracking-widest mb-1">
                    Horaires
                  </p>
                  <p className="font-sans text-sm text-cream/80 leading-relaxed">
                    {CONTACT.hours.weekdays}
                  </p>
                  <p className="font-sans text-sm text-cream/80 leading-relaxed">
                    {CONTACT.hours.sunday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-brass/30 text-brass flex-shrink-0 mt-0.5">
                  <Instagram size={14} />
                </div>
                <div>
                  <p className="font-sans text-xs text-cream/65 uppercase tracking-widest mb-1">
                    Instagram
                  </p>
                  <Link
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-cream/80 hover:text-brass transition-colors duration-200"
                  >
                    {CONTACT.instagram}
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300 w-fit"
            >
              <Navigation size={15} />
              Obtenir l&apos;itinéraire
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
