import { BRANDS } from '@/lib/constants'

export default function MarqueeStrip() {
  const doubled = [...BRANDS, ...BRANDS]

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee motion-reduce:animate-none whitespace-nowrap gap-0">
        {doubled.map((brand, i) => (
          <div
            key={i}
            className="flex items-center gap-0 flex-shrink-0"
          >
            <span className="font-playfair italic text-2xl lg:text-3xl text-cream/40 hover:text-cream/90 transition-colors duration-300 px-12 tracking-wide select-none">
              {brand}
            </span>
            <span className="text-brass/40 text-lg select-none">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
