'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="flex flex-col items-start leading-none group">
      <span
        className={cn(
          'font-playfair italic text-[11px] tracking-wider',
          light ? 'text-cream/60' : 'text-obsidian/60'
        )}
      >
        Optique
      </span>
      <span
        className={cn(
          'font-playfair font-bold text-[1.15rem] tracking-[0.15em] uppercase leading-tight',
          light ? 'text-ivory' : 'text-obsidian'
        )}
      >
        Monovision
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Always dark bg on non-home pages
  const forceDark = !isHome
  const isDark = forceDark || scrolled

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isDark
            ? 'backdrop-blur-xl bg-obsidian/90 border-b border-white/6 shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between gap-8">
          <Logo light />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative font-sans text-[13px] tracking-wide transition-colors duration-200 group whitespace-nowrap',
                    active
                      ? 'text-brass'
                      : 'text-cream/70 hover:text-cream'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-brass transition-all duration-300',
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              href="https://www.instagram.com/optique.monovision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-brass transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 border border-brass/60 text-brass text-[13px] font-sans tracking-wide hover:bg-brass hover:text-obsidian transition-all duration-300"
            >
              Rendez-vous
            </Link>
          </div>

          {/* Mobile hamburger — 44×44 touch target */}
          <button
            className="lg:hidden text-cream/80 flex items-center justify-center w-11 h-11 -mr-1.5"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[59] bg-obsidian/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-obsidian flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/8 flex-shrink-0">
                <Logo light />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/70 flex items-center justify-center w-11 h-11 hover:text-cream transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.055, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between font-playfair text-2xl py-4 border-b border-white/6 transition-colors duration-200',
                          active ? 'text-brass' : 'text-cream/80 hover:text-brass'
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-brass" />}
                      </Link>
                    </motion.div>
                  )
                })}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42, duration: 0.4 }}
                  className="pt-8"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wider font-medium hover:bg-oak transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    Prendre rendez-vous
                  </Link>
                </motion.div>
              </nav>

              {/* Footer */}
              <div className="px-6 pb-8 pt-4 border-t border-white/8 flex-shrink-0">
                <Link
                  href="https://www.instagram.com/optique.monovision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/65 hover:text-brass transition-colors duration-200"
                >
                  <Instagram size={15} />
                  <span className="font-sans text-xs tracking-wide">@optique.monovision</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
