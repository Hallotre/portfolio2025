import { PROJECT_FLARE_LABELS, type ProjectFlare } from '@/lib/projects'

type ProjectFlareBadgeProps = {
  flare: ProjectFlare
  className?: string
}

export default function ProjectFlareBadge({ flare, className = '' }: ProjectFlareBadgeProps) {
  return (
    <span className={`project-flare project-flare--${flare} ${className}`.trim()}>
      {PROJECT_FLARE_LABELS[flare]}
    </span>
  )
}
