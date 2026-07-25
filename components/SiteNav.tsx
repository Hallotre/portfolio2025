'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getContactHref } from '@/lib/contact'

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Freelance', href: '/#freelance' },
  { label: 'Contact', href: '/#contact' },
] as const

type SiteNavProps = {
  variant?: 'home' | 'project'
}

export default function SiteNav({ variant = 'home' }: SiteNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="site-nav fixed top-0 left-0 right-0 z-50"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-fluid">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]"
          >
            {variant === 'project' ? (
              <span className="inline-flex items-center gap-2">
                <span className="text-[var(--color-primary)]" aria-hidden>
                  ←
                </span>
                HAYWOOD
              </span>
            ) : (
              'HAYWOOD'
            )}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getContactHref()}
              className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[var(--color-border-subtle)] text-[var(--color-text-primary)]"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="md:hidden border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-fluid py-4 flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base font-medium text-[var(--color-text-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getContactHref()}
                className="btn-primary mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
