type ContourFieldProps = {
  className?: string
  width?: number
  height?: number
  spacing?: number
  strokeWidth?: number
  /** Phase offset in px between adjacent lines */
  phaseStep?: number
  /** Wave length across the sheet (higher = calmer, longer waves) */
  periods?: number
  amplitude?: number
}

/** One continuous contour sheet — cubic sine paths, no tiling seams. */
export default function ContourField({
  className = '',
  width = 1600,
  height = 1000,
  spacing = 40,
  strokeWidth = 1.2,
  phaseStep = 56,
  periods = 3.25,
  amplitude = 26,
}: ContourFieldProps) {
  const period = width / periods
  const extras = 2
  const count = Math.ceil(height / spacing) + extras * 2

  const paths = Array.from({ length: count }, (_, i) => {
    const y = (i - extras) * spacing
    const phase = (i * phaseStep) % period
    // Slight amplitude drift so it feels drawn, not plotted
    const amp = amplitude * (0.88 + ((i * 17) % 7) * 0.03)
    return buildWave(width, y, amp, period, phase)
  })

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="geometricPrecision"
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </svg>
  )
}

function buildWave(
  width: number,
  y: number,
  amp: number,
  period: number,
  phase: number
): string {
  const startX = -period
  const endX = width + period
  // Four cubics per period keeps curves silky without polyline steps
  const segments = Math.max(12, Math.round(((endX - startX) / period) * 4))
  const dx = (endX - startX) / segments
  const omega = (Math.PI * 2) / period
  // Soft second harmonic for a more topo / hand-drawn contour
  const omega2 = omega * 0.5
  const amp2 = amp * 0.22

  const yAt = (x: number) =>
    y +
    Math.sin((x + phase) * omega) * amp +
    Math.sin((x + phase * 1.35) * omega2) * amp2

  const dyAt = (x: number) =>
    Math.cos((x + phase) * omega) * amp * omega +
    Math.cos((x + phase * 1.35) * omega2) * amp2 * omega2

  let x0 = startX
  let d = `M ${fmt(x0)} ${fmt(yAt(x0))}`

  for (let i = 0; i < segments; i++) {
    const x1 = x0 + dx
    const y0 = yAt(x0)
    const y1 = yAt(x1)
    const cp1x = x0 + dx / 3
    const cp1y = y0 + (dyAt(x0) * dx) / 3
    const cp2x = x1 - dx / 3
    const cp2y = y1 - (dyAt(x1) * dx) / 3
    d += ` C ${fmt(cp1x)} ${fmt(cp1y)}, ${fmt(cp2x)} ${fmt(cp2y)}, ${fmt(x1)} ${fmt(y1)}`
    x0 = x1
  }

  return d
}

function fmt(n: number) {
  return n.toFixed(2)
}
