'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import ContourField from '@/components/ContourField'

type HeroAtmosphereProps = {
  children: ReactNode
}

export default function HeroAtmosphere({ children }: HeroAtmosphereProps) {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 38, damping: 28, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 38, damping: 28, mass: 0.5 })

  const patternTransform = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`
  const depthTransform = useMotionTemplate`translate3d(calc(${x}px * -0.35), calc(${y}px * -0.28), 0)`
  const glowTransform = useMotionTemplate`translate3d(calc(${x}px * 0.5), calc(${y}px * 0.35), 0)`

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const sync = () => setEnabled(mq.matches && !reduceMotion)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [reduceMotion])

  function handleMove(event: React.MouseEvent<HTMLElement>) {
    if (!enabled) return
    const rect = event.currentTarget.getBoundingClientRect()
    const nx = (event.clientX - rect.left) / rect.width - 0.5
    const ny = (event.clientY - rect.top) / rect.height - 0.5
    rawX.set(nx * 14)
    rawY.set(ny * 10)
  }

  function handleLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section
      className="hero-section"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)]/70 via-transparent to-[var(--color-accent-soft)]/30" />

        <motion.div className="absolute inset-0 will-change-transform" style={{ transform: glowTransform }}>
          <div className="absolute -top-28 right-[-6%] h-[22rem] w-[22rem] rounded-full bg-[var(--color-accent-soft)]/45 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[18%] h-[16rem] w-[16rem] rounded-full bg-[rgba(181,110,74,0.1)] blur-3xl" />
        </motion.div>

        {/* Primary contours — warm copper, continuous cubics */}
        <motion.div
          className="absolute inset-0 text-[var(--color-accent)] will-change-transform"
          style={{
            opacity: 0.44,
            transform: patternTransform,
            maskImage:
              'linear-gradient(105deg, transparent 0%, transparent 24%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.85) 58%, black 72%)',
            WebkitMaskImage:
              'linear-gradient(105deg, transparent 0%, transparent 24%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.85) 58%, black 72%)',
          }}
        >
          <ContourField
            className="absolute -inset-[5%] h-[110%] w-[110%]"
            spacing={40}
            strokeWidth={1.25}
            periods={3.1}
            amplitude={28}
            phaseStep={52}
          />
        </motion.div>

        {/* Depth layer — longer waves, quieter */}
        <motion.div
          className="absolute inset-0 text-[var(--color-accent)] will-change-transform"
          style={{
            opacity: 0.16,
            transform: depthTransform,
            maskImage:
              'radial-gradient(ellipse 50% 65% at 88% 45%, black 0%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 50% 65% at 88% 45%, black 0%, transparent 70%)',
          }}
        >
          <ContourField
            className="absolute -inset-[8%] h-[116%] w-[116%]"
            spacing={56}
            strokeWidth={1}
            periods={2.4}
            amplitude={34}
            phaseStep={80}
            width={1800}
            height={1100}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] from-0% via-[var(--color-bg)]/88 via-36% to-transparent to-78%" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <div className="container-fluid relative z-10">{children}</div>
    </section>
  )
}
