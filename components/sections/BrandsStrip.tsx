import MarqueeStrip from '@/components/shared/MarqueeStrip'

export default function BrandsStrip() {
  return (
    <section className="bg-obsidian py-8 border-y border-brass/20 overflow-hidden">
      {/* Top brass line */}
      <div className="led-strip mb-6" />
      <MarqueeStrip />
      {/* Bottom brass line */}
      <div className="led-strip mt-6" />
    </section>
  )
}
