'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useSpring, useMotionValue, motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 50, damping: 20, mass: 1 })
  const [display, setDisplay] = useState(0)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (inView) {
      motionVal.set(value)
    }
  }, [inView, motionVal, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => {
      setDisplay(Math.round(v))
    })
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
