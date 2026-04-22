'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'image'>('default')

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="image"]')) {
        setHoverState('image')
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setHoverState('pointer')
      } else {
        setHoverState('default')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  const sizes = {
    default: { width: 12, height: 12, opacity: 1 },
    pointer: { width: 36, height: 36, opacity: 0.4 },
    image: { width: 64, height: 64, opacity: 0.85 },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: sizes[hoverState].width,
        height: sizes[hoverState].height,
        opacity: sizes[hoverState].opacity,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div
        className="w-full h-full rounded-full border border-brass flex items-center justify-center"
        style={{
          background:
            hoverState === 'image'
              ? 'rgba(201,168,76,0.15)'
              : 'rgba(201,168,76,0.2)',
          mixBlendMode: hoverState === 'pointer' ? 'difference' : 'normal',
        }}
      >
        {hoverState === 'image' && (
          <span
            className="text-ivory text-[9px] font-sans font-medium tracking-widest uppercase"
            style={{ lineHeight: 1 }}
          >
            VOIR
          </span>
        )}
      </div>
    </motion.div>
  )
}
