import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Optique Monovision — Lunettes Premium à Meknès',
  description:
    "Boutique d'optique premium à Meknès, Maroc. Lunettes de vue, solaires et lentilles de contact. Marques Ray-Ban, Carrera, Tommy Hilfiger, Glory. Examen de vue avec équipements de dernière génération.",
  keywords: [
    'optique meknès',
    'lunettes meknès',
    'ray-ban maroc',
    'carrera maroc',
    'opticien meknès',
    'monovision',
    'lunettes de vue',
    'lunettes de soleil',
  ],
  metadataBase: new URL('https://optiquemonovision.ma'),
  openGraph: {
    title: 'Optique Monovision — La vision, réinventée.',
    description:
      'Boutique d\'optique premium au cœur de Meknès. Collections internationales, examen de vue, conseil personnalisé.',
    url: 'https://optiquemonovision.ma',
    siteName: 'Optique Monovision',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/images/store-facade.jpg',
        width: 762,
        height: 1354,
        alt: 'Façade Optique Monovision Meknès',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optique Monovision — La vision, réinventée.',
    description: 'Boutique d\'optique premium au cœur de Meknès.',
    images: ['/images/store-facade.jpg'],
  },
  alternates: {
    canonical: 'https://optiquemonovision.ma',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
