'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { projectsArray } from '@/lib/projects'
import { getContactHref, SOCIAL_LINKS } from '@/lib/contact'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ContourBackdrop from '@/components/ContourBackdrop'
import HeroAtmosphere from '@/components/HeroAtmosphere'
import ProjectFlareBadge from '@/components/ProjectFlareBadge'
import ContactForm from '@/components/ContactForm'

const softEase = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.6, ease: softEase },
}

const whatIDo = [
  {
    title: 'Websites',
    body: 'Clean, modern websites for people, brands, and small businesses that want something more thoughtful than a generic template. Usually this means focusing on structure, visual clarity, and a stronger overall impression.',
  },
  {
    title: 'Front-end builds',
    body: 'Responsive interfaces and polished front-end work with attention to spacing, hierarchy, interactions, and the small details that shape how a product feels to use.',
  },
  {
    title: 'Concepts and experiments',
    body: 'Self-initiated projects that let me explore ideas more freely, like a web app concept, a themed interface, or a more visual, interaction-focused build.',
  },
] as const

const notes = [
  'This site is intentionally selective. I’d rather show a smaller number of projects that feel representative than try to include everything.',
  'Some projects here are closer to real-world freelance work, while others are more exploratory. Both matter, because they show different sides of how I think and build.',
  'If you’re reaching out about a project, a short message with a bit of context is more than enough to start.',
] as const

const [featured, ...restProjects] = projectsArray

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <HeroAtmosphere>
        <div className="max-w-3xl relative">
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: softEase }}
          >
            Toby Haywood
          </motion.p>

          <motion.h1
            className="heading-hero text-[var(--color-text-primary)] text-balance mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: softEase }}
          >
            Designing and building{' '}
            <span className="italic text-[var(--color-primary)]">clean digital experiences</span>{' '}
            for the web.
          </motion.h1>

          <motion.div
            className="space-y-4 text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: softEase }}
          >
            <p>
              I’m a frontend developer based in Norway with a strong interest in thoughtful
              design, polished interfaces, and modern websites that feel clear and well put
              together. This site is a selection of my work, ideas, and freelance projects,
              with a focus on simplicity, usability, and visual detail.
            </p>
            <p>
              Alongside personal work and experiments, I also take on selected freelance
              projects for people and small businesses who want a cleaner, more modern
              presence online.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: softEase }}
          >
            <a href="#work" className="btn-primary">
              View work
            </a>
            <a href={getContactHref()} className="btn-secondary">
              Let’s talk
            </a>
          </motion.div>

          <motion.p
            className="text-sm text-[var(--color-text-muted)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.34 }}
          >
            Available for selected freelance projects.
          </motion.p>
        </div>
      </HeroAtmosphere>

      {/* Selected work */}
      <section id="work" className="section-padding">
        <div className="container-fluid">
          <motion.div className="max-w-2xl mb-14" {...fadeUp}>
            <div className="accent-rule mb-5" aria-hidden />
            <h2 className="heading-section mb-5">Selected work</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              A curated selection of projects that reflect how I think about design, structure,
              interaction, and front-end execution. Some are closer to client-style website work,
              while others are more exploratory. All of them show the kind of digital
              experiences I enjoy building.
            </p>
          </motion.div>

          {featured && (
            <motion.article className="mb-12 md:mb-16" {...fadeUp}>
              <Link
                href={`/projects/${featured.slug}`}
                className="project-card project-card-featured group"
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                  <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[320px] rounded-xl overflow-hidden bg-[var(--color-bg-muted)] image-zoom-container">
                    <Image
                      src={featured.image}
                      alt={featured.imageCaption}
                      fill
                      className="object-cover object-top image-zoom"
                      sizes="(max-width: 768px) 100vw, 640px"
                      priority
                    />
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center py-2 md:py-4 md:pr-2">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <ProjectFlareBadge flare={featured.flare} />
                      <p className="project-meta">{featured.businessType}</p>
                    </div>
                    <h3 className="heading-section text-[1.75rem] md:text-[2rem] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                      {featured.title}
                    </h3>
                    <p className="text-[var(--color-text-primary)] leading-relaxed mb-3">
                      {featured.shortDescription}
                    </p>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {featured.cardNote}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      View project
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {restProjects.map((project, index) => (
              <motion.article key={project.slug} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.04, ease: softEase }}>
                <Link href={`/projects/${project.slug}`} className="project-card group block">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border-subtle)] image-zoom-container mb-5">
                    <Image
                      src={project.image}
                      alt={project.imageCaption}
                      fill
                      className="object-cover object-top image-zoom"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <ProjectFlareBadge flare={project.flare} />
                    <p className="project-meta">{project.businessType}</p>
                  </div>
                  <h3 className="heading-card mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-primary)] leading-relaxed mb-2 text-[0.98rem]">
                    {project.shortDescription}
                  </p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 text-sm">
                    {project.cardNote}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    View project
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding surface-warm border-y border-[var(--color-border-subtle)]">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div className="lg:col-span-7 max-w-xl" {...fadeUp}>
              <div className="accent-rule mb-5" aria-hidden />
              <h2 className="heading-section mb-8">About</h2>
              <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-lg">
                <p>
                  I’m Toby, a developer based in Norway with a background that leans heavily toward
                  front-end work, design-minded thinking, and building things for the web that feel
                  calm, modern, and intentional. I’m most interested in the point where structure,
                  visuals, and implementation meet, where a good idea starts to feel polished and
                  complete.
                </p>
                <p>
                  A lot of the work I enjoy sits somewhere between portfolio piece, product concept,
                  and real-world website. I like projects that have a strong visual direction, clear
                  purpose, and enough room to think carefully about the experience rather than just
                  assembling parts.
                </p>
                <p>
                  This portfolio is both a place to document that work and a space that makes it easy
                  to reach out if you’d like to work together.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-4 !text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-4 !text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="lg:col-span-5 lg:pt-10"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.08, ease: softEase }}
            >
              <div className="relative max-w-sm ml-auto">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-[var(--shadow-soft)] bg-[var(--color-bg)]">
                  <Image
                    src="/headshot.png"
                    alt="Toby Haywood"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    priority
                  />
                </div>
                <p className="mt-4 text-sm text-[var(--color-text-muted)] italic font-[family-name:var(--font-heading)] text-right">
                  Based in Norway · open to selected freelance work
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section id="what-i-do" className="section-padding">
        <div className="container-fluid">
          <motion.div className="max-w-2xl mb-12" {...fadeUp}>
            <h2 className="heading-section mb-4">What I do</h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              Most of my work falls somewhere across these three areas:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-5xl">
            {whatIDo.map((item) => (
              <motion.div key={item.title} {...fadeUp}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="copper-dot" aria-hidden />
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section-padding-tight border-t border-[var(--color-border-subtle)]">
        <div className="container-fluid">
          <motion.div className="max-w-xl md:max-w-2xl md:ml-[8%]" {...fadeUp}>
            <h2 className="heading-section mb-8">How I work</h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-lg">
              <p>
                I tend to start with structure first. Once the foundations are clear (what the
                thing is, who it’s for, and what needs to be shown), the visual direction usually
                becomes much easier to shape in a way that feels natural.
              </p>
              <p>
                From there, I like refining the details that make a website or interface feel more
                considered: spacing, rhythm, typography, transitions, hierarchy, and how everything
                flows from one section to the next. In most cases, I’m less interested in adding
                more and more visual noise, and more interested in making the right things feel
                right.
              </p>
              <p>
                That usually leads to work that feels clean, restrained, and easy to move through.
                That’s also the kind of design I’m most drawn to personally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Freelance */}
      <section id="freelance" className="section-padding">
        <div className="container-fluid">
          <motion.div className="max-w-2xl" {...fadeUp}>
            <div className="accent-rule mb-5" aria-hidden />
            <h2 className="heading-section mb-8">Freelance</h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-lg">
              <p>
                I’m open to selected freelance projects, especially website redesigns, modern
                front-end builds, and smaller projects where a cleaner visual direction or more
                polished implementation would make a noticeable difference.
              </p>
              <p>
                I’m probably the best fit for work that values clarity, detail, and a more personal
                collaboration rather than a big agency-style process.
              </p>
            </div>
            <a href={getContactHref()} className="btn-primary mt-8 inline-flex">
              Start a conversation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Notes */}
      <section className="section-padding-tight border-t border-[var(--color-border-subtle)]">
        <div className="container-fluid">
          <motion.div className="max-w-2xl" {...fadeUp}>
            <h2 className="heading-section mb-10">Notes</h2>
            <ul className="space-y-6">
              {notes.map((note) => (
                <li
                  key={note}
                  className="text-[var(--color-text-secondary)] leading-relaxed text-lg pl-5 border-l-2 border-[var(--color-accent)]/50"
                >
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-[var(--color-surface)]" />
          <ContourBackdrop intensity="soft" />
        </div>

        <div className="container-fluid relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div className="lg:col-span-5 max-w-lg" {...fadeUp}>
              <h2 className="heading-section mb-8">Let’s talk</h2>
              <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-lg">
                <p>
                  If you’re looking for someone to build or refine a website, collaborate on a
                  front-end project, or help shape a cleaner visual direction for something you’re
                  working on, feel free to get in touch.
                </p>
                <p>
                  Whether it’s a freelance project, an idea in progress, or just a conversation
                  around design and the web, I’m always open to hearing what you’re building.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.06, ease: softEase }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
