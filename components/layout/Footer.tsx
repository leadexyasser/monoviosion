import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <span className="font-playfair italic text-sm text-cream/50 tracking-wide">
            Optique
          </span>
          <span className="font-playfair font-bold text-2xl tracking-[0.14em] uppercase text-ivory">
            Monovision
          </span>
        </div>

        {/* Brass divider */}
        <div className="led-strip w-48" />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200 tracking-wide py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/optique.monovision"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cream/70 hover:text-brass transition-colors duration-200 py-1"
          aria-label="Instagram @optique.monovision"
        >
          <Instagram size={18} />
          <span className="font-sans text-sm tracking-wide">@optique.monovision</span>
        </Link>

        {/* Copyright */}
        <p className="font-sans text-xs text-cream/55 tracking-wider text-center">
          © 2025 Optique Monovision — Meknès, Maroc. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
