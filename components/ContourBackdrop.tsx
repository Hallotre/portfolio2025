'use client'

import ContourField from '@/components/ContourField'

type ContourBackdropProps = {
  className?: string
  intensity?: 'hero' | 'soft'
}

export default function ContourBackdrop({
  className = '',
  intensity = 'hero',
}: ContourBackdropProps) {
  const isHero = intensity === 'hero'
  const opacity = isHero ? 0.36 : 0.18

  return (
    <div
      className={`contour-backdrop pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="contour-drift absolute -inset-[6%] text-[var(--color-accent)]"
        style={{
          opacity,
          maskImage: isHero
            ? 'linear-gradient(105deg, transparent 0%, rgba(0,0,0,0.4) 40%, black 70%)'
            : 'radial-gradient(ellipse 75% 70% at 60% 40%, black 0%, transparent 78%)',
          WebkitMaskImage: isHero
            ? 'linear-gradient(105deg, transparent 0%, rgba(0,0,0,0.4) 40%, black 70%)'
            : 'radial-gradient(ellipse 75% 70% at 60% 40%, black 0%, transparent 78%)',
        }}
      >
        <ContourField
          className="h-full w-full"
          spacing={isHero ? 40 : 48}
          strokeWidth={1.15}
          periods={3}
          amplitude={26}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/20 via-transparent to-[var(--color-bg)]" />
    </div>
  )
}
