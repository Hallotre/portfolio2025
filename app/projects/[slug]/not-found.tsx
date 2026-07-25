import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export default function NotFound() {
  return (
    <>
      <SiteNav variant="project" />
      <div className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container-fluid text-center max-w-lg">
          <p className="eyebrow mb-4">404</p>
          <h1 className="heading-section mb-4">Project not found</h1>
          <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
            <Link href="/#work" className="btn-secondary">
              View selected work
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
