export const CONTACT_FIELD_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 4000 },
  website: { max: 200 },
  projectType: { max: 60 },
} as const

export const CONTACT_PROJECT_TYPES = [
  { value: '', label: 'Select one (optional)' },
  { value: 'New website', label: 'New website' },
  { value: 'Website redesign', label: 'Website redesign' },
  { value: 'Front-end build', label: 'Front-end build' },
  { value: 'Something else', label: 'Something else' },
] as const

export type ContactProjectTypeValue =
  (typeof CONTACT_PROJECT_TYPES)[number]['value']

export type ContactFormMode = 'simple' | 'inquiry'

export type ContactFieldErrors = {
  name?: string
  email?: string
  message?: string
  website?: string
  projectType?: string
}

export type SanitizedContactInput = {
  name: string
  email: string
  message: string
  website: string
  projectType: ContactProjectTypeValue
}

/** RFC-inspired email check — rejects spaces, bare domains, and header-breaking chars */
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const ALLOWED_PROJECT_TYPES = new Set<string>(
  CONTACT_PROJECT_TYPES.map((option) => option.value)
)

/** Strip C0 controls (keeps tab/newline only when multiline allows them later) */
function stripDangerousControls(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
}

/** Single-line fields must never carry CR/LF (email header injection) */
export function sanitizeSingleLine(value: string, max: number): string {
  return stripDangerousControls(value)
    .replace(/[\r\n\u2028\u2029]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

/** Multiline body: normalize newlines, strip tags and other controls */
export function sanitizeMultiline(value: string, max: number): string {
  const normalized = stripDangerousControls(value)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    // Neutralize HTML / script payloads if a client ever renders the body as HTML
    .replace(/<[^>]*>/g, '')
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return normalized.slice(0, max)
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > CONTACT_FIELD_LIMITS.email.max) return false
  if (email.includes('..')) return false
  return EMAIL_PATTERN.test(email)
}

export function normalizeWebsite(value: string): string {
  return sanitizeSingleLine(value, CONTACT_FIELD_LIMITS.website.max)
}

export function isValidWebsite(value: string): boolean {
  if (!value) return true

  // Block non-http schemes (javascript:, data:, mailto:, etc.)
  if (/^[a-z][a-z0-9+.-]*:/i.test(value) && !/^https?:\/\//i.test(value)) {
    return false
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`

  try {
    const url = new URL(withProtocol)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false
    // Require a dot in hostname (example.com) or localhost for local testing
    const host = url.hostname
    if (host === 'localhost') return true
    return host.includes('.') && !host.startsWith('.') && !host.endsWith('.')
  } catch {
    return false
  }
}

export function sanitizeContactInput(input: {
  name: string
  email: string
  message: string
  website: string
  projectType: string
}): SanitizedContactInput {
  const projectType = ALLOWED_PROJECT_TYPES.has(input.projectType)
    ? (input.projectType as ContactProjectTypeValue)
    : ''

  return {
    name: sanitizeSingleLine(input.name, CONTACT_FIELD_LIMITS.name.max),
    email: sanitizeSingleLine(input.email, CONTACT_FIELD_LIMITS.email.max).toLowerCase(),
    message: sanitizeMultiline(input.message, CONTACT_FIELD_LIMITS.message.max),
    website: normalizeWebsite(input.website),
    projectType,
  }
}

export function validateContactInput(
  input: SanitizedContactInput,
  mode: ContactFormMode
): ContactFieldErrors {
  const errors: ContactFieldErrors = {}

  if (!input.name) {
    errors.name = 'Please enter your name.'
  } else if (input.name.length < CONTACT_FIELD_LIMITS.name.min) {
    errors.name = `Name must be at least ${CONTACT_FIELD_LIMITS.name.min} characters.`
  }

  if (!input.email) {
    errors.email = 'Please enter your email address.'
  } else if (!isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!input.message) {
    errors.message = mode === 'inquiry'
      ? 'Please tell me a bit about the project.'
      : 'Please enter a message.'
  } else if (input.message.length < CONTACT_FIELD_LIMITS.message.min) {
    errors.message = `Message must be at least ${CONTACT_FIELD_LIMITS.message.min} characters.`
  }

  if (mode === 'inquiry') {
    if (input.projectType && !ALLOWED_PROJECT_TYPES.has(input.projectType)) {
      errors.projectType = 'Please choose a valid project type.'
    }

    if (input.website && !isValidWebsite(input.website)) {
      errors.website = 'Please enter a valid website (e.g. yoursite.com).'
    }
  }

  return errors
}
