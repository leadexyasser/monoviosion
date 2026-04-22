import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import FaqAccordion from '@/components/shared/FaqAccordion'
import LentillesClient from './LentillesClient'

export const metadata: Metadata = {
  title: 'Lentilles de Contact — Optique Monovision',
  description:
    "Spécialité d'Abdellah Berrada : adaptation de lentilles journalières, mensuelles, toriques et multifocales. Protocole complet en 6 étapes à Meknès.",
}

const lensTypes = [
  {
    id: 'daily',
    iconKey: 'Droplets',
    label: 'Journalières',
    tagline: 'Hygiène maximale, zéro entretien.',
    desc: "Une lentille neuve chaque jour — idéal pour les porteurs occasionnels, les allergiques ou ceux qui cherchent la solution la plus hygiénique.",
    points: ['Port occasionnel', 'Allergie aux dépôts', 'Facilité au quotidien'],
    dark: false,
  },
  {
    id: 'monthly',
    iconKey: 'Moon',
    label: 'Mensuelles',
    tagline: 'Le meilleur rapport confort / coût.',
    desc: "Un mois de port avec entretien régulier. Le choix le plus répandu pour les porteurs réguliers avec une vision stabilisée.",
    points: ['Port quotidien régulier', 'Vision stabilisée', 'Rapport qualité / prix'],
    dark: false,
  },
  {
    id: 'toric',
    iconKey: 'Eye',
    label: 'Toriques',
    tagline: "Pour l'astigmatisme, une précision absolue.",
    desc: "Conçues pour corriger l'astigmatisme avec une stabilisation axiale parfaite. Abdellah sélectionne personnellement chaque marque pour ses patients.",
    points: ["Astigmatisme traité", 'Correction précise', 'Grande stabilité'],
    dark: true,
  },
  {
    id: 'multifocal',
    iconKey: 'Zap',
    label: 'Multifocales',
    tagline: 'Voir de près et de loin sans lunettes.',
    desc: "Pour les presbytes, les lentilles multifocales permettent une vision nette à toutes les distances. Une adaptation experte est indispensable.",
    points: ['Presbytie', 'Vision toutes distances', 'Liberté sans lunettes'],
    dark: false,
  },
]

const process = [
  { n: '01', title: 'Bilan de réfraction', desc: "Mesure précise de votre correction avec l'auto-réfractomètre Rexxam et affinage subjectif." },
  { n: '02', title: 'Examen de la surface oculaire', desc: "Évaluation à la lampe à fente de la santé cornéenne pour s'assurer que le port est adapté." },
  { n: '03', title: 'Sélection de la lentille', desc: "Choix du type, de la marque et des paramètres selon votre profil visuel." },
  { n: '04', title: 'Essai & vérification', desc: "Pose de lentilles test en boutique et contrôle de la vision corrigée." },
  { n: '05', title: 'Formation au port', desc: "Apprentissage de la pose, de l'ablation et de l'entretien en toute sécurité." },
  { n: '06', title: 'Suivi régulier', desc: "Contrôle à 1 mois puis suivi annuel pour un confort et une santé oculaire optimaux." },
]

const faqs = [
  { q: "Les lentilles sont-elles confortables pour les yeux secs ?", a: "Certaines lentilles sont spécialement formulées pour les yeux secs, avec des matériaux hydrophiles haute teneur en eau ou des lentilles en silicone hydrogel haute perméabilité à l'oxygène. Abdellah évalue votre sécheresse lors du bilan et sélectionne la lentille adaptée." },
  { q: "À partir de quel âge peut-on commencer les lentilles ?", a: "En général dès 12–14 ans, à condition que l'enfant soit motivé et responsable dans l'entretien. Abdellah évalue la maturité de chaque patient lors de la consultation." },
  { q: "Peut-on dormir avec des lentilles de contact ?", a: "Certaines lentilles sont approuvées pour le port nocturne, mais ce n'est pas recommandé en règle générale. Les lentilles ortho-K (port nocturne pour la myopie) sont une exception prescrite par Abdellah pour certains profils." },
  { q: "Combien de temps dure une adaptation ?", a: "En général 1 à 2 semaines pour s'habituer. Le suivi à J+30 confirme que tout va bien. Pour les lentilles toriques ou multifocales, l'adaptation peut prendre un peu plus de temps." },
  { q: "Peut-on porter des lentilles avec de l'astigmatisme ?", a: "Absolument. Les lentilles toriques corrigent précisément l'astigmatisme. Abdellah est spécialisé dans leur adaptation, qui nécessite plus de précision que pour des lentilles sphériques standard." },
]

export default function LentillesPage() {
  return (
    <div className="pt-[72px] bg-ivory min-h-screen">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-obsidian py-28 px-6">
        <div className="absolute inset-0">
          <Image
            src="/images/store-equipment.jpg"
            alt="Équipements optométriques"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-brass" />
            <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">Spécialité d&apos;Abdellah Berrada</span>
            <div className="w-6 h-px bg-brass" />
          </div>
          <h1 className="font-playfair text-[clamp(2.2rem,6vw,4.5rem)] text-ivory leading-tight mb-5">
            Lentilles de Contact
          </h1>
          <p className="font-sans text-base text-cream/60 leading-relaxed max-w-xl mx-auto mb-8">
            Une expertise qui va au-delà de la prescription. Abdellah accompagne
            chaque patient vers la solution la plus précise, la plus confortable et
            la plus adaptée à son mode de vie.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300">
            Prendre rendez-vous <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── Lens types (client animations) ── */}
      <LentillesClient lensTypes={lensTypes} process={process} />

      {/* ── Visual break ── */}
      <div className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative overflow-hidden order-2 lg:order-1" style={{ borderRadius: '50% 50% 0 0 / 50% 50% 0 0', aspectRatio: '4/5' }}>
            <Image src="/images/store-display.jpg" alt="Vitrine Optique Monovision" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">Pourquoi choisir Monovision</span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.5rem)] text-obsidian leading-tight mb-6">
              Pas juste des lentilles —<br /><span className="italic">la bonne solution pour vous.</span>
            </h2>
            <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-5">
              Beaucoup d&apos;opticiens prescrivent des lentilles. Abdellah Berrada les adapte.
              Il mesure, évalue, essaie, ajuste — jusqu&apos;à ce que la solution soit parfaite.
            </p>
            <p className="font-sans text-base text-obsidian/65 leading-relaxed mb-8">
              Son expertise en lentilles toriques et multifocales est particulièrement
              recherchée : ces lentilles demandent une précision que peu d&apos;opticiens maîtrisent à ce niveau.
            </p>
            {['Bilan visuel complet inclus', 'Essai gratuit en boutique', "Formation au port et à l'entretien", 'Suivi à 1 mois systématique'].map((pt) => (
              <div key={pt} className="flex items-center gap-3 mb-3">
                <CheckCircle size={15} className="text-brass flex-shrink-0" />
                <span className="font-sans text-sm text-obsidian/70">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brass" />
              <span className="font-sans text-xs tracking-[0.3em] text-brass/80 uppercase">Questions fréquentes</span>
            </div>
            <h2 className="font-playfair text-[clamp(1.8rem,4vw,2.8rem)] text-obsidian">
              Tout ce que vous voulez savoir.
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-obsidian py-20 px-6 text-center">
        <h2 className="font-playfair italic text-[clamp(1.8rem,4vw,3rem)] text-ivory mb-4">Prêt à passer aux lentilles ?</h2>
        <p className="font-sans text-sm text-cream/55 leading-relaxed mb-8 max-w-md mx-auto">
          Venez rencontrer Abdellah en boutique — il prend le temps de tout comprendre avant de tout prescrire.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="px-8 py-3.5 bg-brass text-obsidian font-sans text-sm tracking-wide font-medium hover:bg-oak transition-colors duration-300">Prendre rendez-vous</Link>
          <Link href="/expert" className="px-8 py-3.5 border border-cream/20 text-cream/70 font-sans text-sm tracking-wide hover:border-cream/50 hover:text-cream transition-all duration-300">En savoir plus sur Abdellah</Link>
        </div>
      </div>
    </div>
  )
}
