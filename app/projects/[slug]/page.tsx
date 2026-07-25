'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { getContactHref } from '@/lib/contact'
import { use } from 'react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ProjectShowcase from '@/components/ProjectShowcase'
import ProjectFlareBadge from '@/components/ProjectFlareBadge'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  const caseBlocks = [
    { label: 'The problem', body: project.problem },
    { label: 'The approach', body: project.approach },
    { label: 'The result', body: project.outcome },
    { label: 'My role', body: project.role },
  ] as const

  const hasRichGallery = Boolean(project.gallery && project.gallery.length >= 2)

  return (
    <>
      <SiteNav variant="project" />

      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-fluid">
          <div className="max-w-3xl">
            <motion.div
              className="flex flex-wrap items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectFlareBadge flare={project.flare} />
              <p className="project-meta !normal-case tracking-normal">{project.businessType}</p>
            </motion.div>

            <motion.h1
              className="heading-hero mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {project.shortDescription}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View live site
              </a>
              <a href={getContactHref()} className="btn-secondary">
                Let’s talk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`pb-16 md:pb-20 ${hasRichGallery ? 'bg-[var(--color-surface)]/40 border-y border-[var(--color-border-subtle)] pt-10 md:pt-14' : ''}`}>
        <div className="container-fluid">
          <ProjectShowcase project={project} />
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-elevated)] border-y border-[var(--color-border-subtle)]">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto space-y-10">
            {caseBlocks.map((block, index) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <h2 className="project-meta mb-3">
                  {block.label}
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {block.body}
                </p>
              </motion.div>
            ))}

            {project.tech.length > 0 && (
              <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                <p className="text-sm text-[var(--color-text-muted)] mb-3">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-md bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] border border-[var(--color-border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-section mb-4">Want to talk about a project?</h3>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              If something here feels close to what you’re looking for, feel free to reach out.
              A short message with a bit of context is enough to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getContactHref()} className="btn-primary">
                Let’s talk
              </a>
              <Link href="/#work" className="btn-secondary">
                View selected work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
