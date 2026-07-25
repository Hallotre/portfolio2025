'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

type GalleryItem = {
  src: string
  caption: string
}

type ProjectShowcaseProps = {
  project: Project
}

function buildItems(project: Project): GalleryItem[] {
  const items: GalleryItem[] = [
    { src: project.image, caption: project.imageCaption },
    ...(project.gallery ?? []),
  ]
  return items
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const items = buildItems(project)
  const isMosaic = items.length >= 3

  if (!isMosaic) {
    return (
      <div className="max-w-5xl mx-auto space-y-10">
        {items.map((item, index) => (
          <ShowcaseFrame
            key={item.src}
            item={item}
            priority={index === 0}
            aspect="video"
          />
        ))}
      </div>
    )
  }

  const [hero, second, third, ...rest] = items

  return (
    <div className="max-w-6xl mx-auto">
      <motion.p
        className="project-meta mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Screens from the build
      </motion.p>

      <div className="space-y-5 md:space-y-6">
        <ShowcaseFrame item={hero} priority aspect="hero" />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <ShowcaseFrame item={second} aspect="pair" delay={0.05} />
          <ShowcaseFrame item={third} aspect="pair" delay={0.1} />
        </div>

        {rest.map((item, index) => (
          <ShowcaseFrame
            key={item.src}
            item={item}
            aspect="wide"
            delay={0.05 * (index + 1)}
          />
        ))}
      </div>
    </div>
  )
}

type FrameProps = {
  item: GalleryItem
  aspect: 'hero' | 'video' | 'pair' | 'wide'
  priority?: boolean
  delay?: number
}

function ShowcaseFrame({ item, aspect, priority = false, delay = 0 }: FrameProps) {
  const aspectClass = (() => {
    switch (aspect) {
      case 'hero':
        return 'aspect-[16/10] md:aspect-[2/1]'
      case 'pair':
        // Taller crop so long page sections (e.g. live + leaderboard) stay readable
        return 'aspect-[3/4] md:aspect-[4/5]'
      case 'wide':
        return 'aspect-[16/9] md:aspect-[21/9]'
      case 'video':
        return 'aspect-video'
      default: {
        const _exhaustive: never = aspect
        return _exhaustive
      }
    }
  })()

  return (
    <motion.figure
      className="group relative"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-muted)] shadow-[var(--shadow-soft)] ${aspectClass}`}
      >
        <Image
          src={item.src}
          alt={item.caption}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          sizes={
            aspect === 'pair'
              ? '(max-width: 768px) 100vw, 560px'
              : '(max-width: 1200px) 100vw, 1120px'
          }
          priority={priority}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(31,28,25,0.72)] via-[rgba(31,28,25,0.28)] to-transparent pt-16 pb-4 px-4 md:px-5">
          <figcaption className="text-sm md:text-[0.9375rem] text-[#f5f1ea] leading-snug max-w-2xl">
            {item.caption}
          </figcaption>
        </div>
      </div>
    </motion.figure>
  )
}
