import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram, Navigation, Mail } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Optique Monovision, Meknès',
  description:
    'Contactez Optique Monovision à Meknès. Adresse, horaires, téléphone et Instagram. Prenez rendez-vous pour votre examen de vue.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-obsidian py-24 px-6 text-center">
        <p className="font-sans text-xs tracking-[0.3em] text-brass uppercase mb-4">
          Nous trouver
        </p>
        <h1 className="font-playfair italic text-[clamp(2.5rem,6vw,5rem)] text-ivory leading-tight">
          Venez nous rendre visite
        </h1>
        <p className="font-sans text-sm text-cream/50 mt-4 max-w-md mx-auto leading-relaxed">
          Notre boutique vous accueille au cœur de Meknès, du lundi au dimanche.
        </p>
      </div>

      {/* Map full width */}
      <div className="w-full h-[420px] lg:h-[520px] relative">
        <iframe
          src={CONTACT.mapEmbedUrl}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Optique Monovision sur Google Maps"
        />
      </div>

      {/* Info grid */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            Icon: MapPin,
            label: 'Adresse',
            value: CONTACT.address,
            href: CONTACT.googleMapsUrl,
          },
          {
            Icon: Phone,
            label: 'Téléphone',
            value: CONTACT.phone,
            href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
          },
          {
            Icon: Clock,
            label: 'Horaires',
            value: `${CONTACT.hours.weekdays}\n${CONTACT.hours.sunday}`,
            href: null,
          },
          {
            Icon: Instagram,
            label: 'Instagram',
            value: CONTACT.instagram,
            href: CONTACT.instagramUrl,
          },
        ].map((item) => {
          const { Icon } = item
          return (
            <div key={item.label} className="flex flex-col gap-4">
              <div className="w-10 h-10 border border-brass/30 flex items-center justify-center text-brass">
                <Icon size={16} />
              </div>
              <div>
                <p className="font-sans text-xs text-obsidian/40 uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-sans text-sm text-obsidian/80 hover:text-brass transition-colors duration-200 leading-relaxed whitespace-pre-line"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="font-sans text-sm text-obsidian/80 leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA row */}
      <div className="border-t border-slate/40 bg-ivory py-16 px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-playfair italic text-3xl text-obsidian">
            Prêt à mieux voir ?
          </h2>
          <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
            Rendez-vous en boutique du lundi au samedi de 9h à 20h, ou le dimanche de
            10h à 18h. Aucune réservation obligatoire — nous vous accueillons avec
            plaisir.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300"
            >
              <Navigation size={15} />
              Obtenir l&apos;itinéraire
            </Link>
            <Link
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border border-obsidian/20 text-obsidian/70 font-sans text-sm tracking-wide hover:border-brass hover:text-brass transition-all duration-300"
            >
              <Instagram size={15} />
              Nous suivre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
