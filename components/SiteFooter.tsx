import { CONTACT_EMAIL, SOCIAL_LINKS, getContactHref } from '@/lib/contact'

export default function SiteFooter() {
  return (
    <footer className="py-14 border-t border-[var(--color-border-subtle)]">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)]">
              Toby Haywood
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
              Frontend developer, design-minded builder, and maker of clean digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href={getContactHref()}
              className="link-accent font-medium"
            >
              Let&apos;s talk
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Toby Haywood
        </p>
      </div>
    </footer>
  )
}
