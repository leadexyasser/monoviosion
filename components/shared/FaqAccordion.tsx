'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="bg-white border border-slate/30 px-8">
      {items.map((faq) => (
        <FaqRow key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  )
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate/40 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 min-h-[52px] gap-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-playfair text-base text-obsidian leading-snug">{q}</span>
        <ChevronDown
          size={16}
          className={`text-brass flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
      >
        <p className="font-sans text-sm text-obsidian/65 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
