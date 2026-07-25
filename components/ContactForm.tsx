'use client'

import { FormEvent, useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import {
  CONTACT_EMAIL,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_HCAPTCHA_SITEKEY,
  getTalkMailto,
  getWeb3FormsAccessKey,
} from '@/lib/contact'
import {
  CONTACT_FIELD_LIMITS,
  CONTACT_PROJECT_TYPES,
  type ContactFieldErrors,
  type ContactFormMode,
  sanitizeContactInput,
  validateContactInput,
} from '@/lib/contact-form'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function fieldClass(hasError: boolean) {
  return hasError ? 'contact-input contact-input-error' : 'contact-input'
}

export default function ContactForm() {
  const captchaRef = useRef<HCaptcha>(null)
  const [mode, setMode] = useState<ContactFormMode>('simple')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')
  const [botcheck, setBotcheck] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})

  const accessKey = getWeb3FormsAccessKey()
  const canSubmit =
    Boolean(accessKey) &&
    Boolean(captchaToken) &&
    status !== 'submitting'

  const isInquiry = mode === 'inquiry'

  function resetCaptcha() {
    setCaptchaToken('')
    captchaRef.current?.resetCaptcha()
  }

  function resetFields() {
    setName('')
    setEmail('')
    setProjectType('')
    setWebsite('')
    setMessage('')
    setFieldErrors({})
  }

  function clearFieldError(field: keyof ContactFieldErrors) {
    setFieldErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  function switchMode(nextMode: ContactFormMode) {
    setMode(nextMode)
    setStatus('idle')
    setErrorMessage('')
    setFieldErrors({})
    resetCaptcha()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (botcheck) {
      return
    }

    const sanitized = sanitizeContactInput({
      name,
      email,
      message,
      website,
      projectType,
    })

    // Reflect sanitized single-line values back into the UI
    setName(sanitized.name)
    setEmail(sanitized.email)
    setMessage(sanitized.message)
    setWebsite(sanitized.website)
    setProjectType(sanitized.projectType)

    const errors = validateContactInput(sanitized, mode)
    setFieldErrors(errors)

    if (Object.keys(errors).length > 0) {
      setStatus('error')
      setErrorMessage('Please fix the highlighted fields and try again.')
      return
    }

    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Contact form is not configured yet. Please email me instead.')
      return
    }

    if (!captchaToken) {
      setStatus('error')
      setErrorMessage('Please complete the captcha before sending.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    // Subject is built only from whitelisted project types — never raw user newlines
    const subject = isInquiry
      ? sanitized.projectType
        ? `Portfolio inquiry: ${sanitized.projectType}`
        : 'Portfolio inquiry'
      : 'Portfolio contact'

    try {
      // Web3Forms React docs use FormData (not JSON).
      // Inquiry extras are sent as fields only — not also pasted into message.
      const formData = new FormData()
      formData.append('access_key', accessKey)
      formData.append('name', sanitized.name)
      formData.append('email', sanitized.email)
      formData.append('message', sanitized.message)
      formData.append('subject', subject)
      formData.append('from_name', 'Toby Haywood Portfolio')
      formData.append('h-captcha-response', captchaToken)
      formData.append('botcheck', botcheck)

      if (isInquiry) {
        formData.append('form_type', 'Project inquiry')
        if (sanitized.projectType) {
          formData.append('project_type', sanitized.projectType)
        }
        if (sanitized.website) {
          formData.append('current_website', sanitized.website)
        }
      } else {
        formData.append('form_type', 'Say hello')
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      })

      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }

      resetFields()
      setStatus('success')
      resetCaptcha()
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or email me directly.'
      )
      resetCaptcha()
    }
  }

  return (
    <div className="w-full max-w-lg">
      <div
        className="contact-mode-toggle mb-6"
        role="tablist"
        aria-label="Contact form type"
      >
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'simple'}
          className={`contact-mode-btn ${mode === 'simple' ? 'is-active' : ''}`}
          onClick={() => switchMode('simple')}
        >
          Say hello
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'inquiry'}
          className={`contact-mode-btn ${mode === 'inquiry' ? 'is-active' : ''}`}
          onClick={() => switchMode('inquiry')}
        >
          Project inquiry
        </button>
      </div>

      {status === 'success' ? (
        <div className="contact-success rounded-xl p-6 border border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
          <p className="font-[family-name:var(--font-heading)] text-xl text-[var(--color-text-primary)] mb-2">
            {isInquiry ? 'Inquiry sent' : 'Message sent'}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
            {isInquiry
              ? 'Thanks for the details. I’ll read through and get back to you soon.'
              : 'Thanks for reaching out. I’ll get back to you soon.'}
          </p>
          <button
            type="button"
            className="btn-secondary !py-2.5 !px-4 !text-sm"
            onClick={() => setStatus('idle')}
          >
            {isInquiry ? 'Send another inquiry' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form space-y-4" noValidate>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed -mt-1 mb-1">
            {isInquiry
              ? 'A few extra details help me understand the project. Everything except name, email, and your note is optional.'
              : 'A short message is enough. Switch to project inquiry if you want to share more context.'}
          </p>

          <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden>
            <label htmlFor="botcheck">Leave empty</label>
            <input
              id="botcheck"
              name="botcheck"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={botcheck}
              onChange={(event) => setBotcheck(event.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="contact-label">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                maxLength={CONTACT_FIELD_LIMITS.name.max}
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                  clearFieldError('name')
                }}
                className={fieldClass(Boolean(fieldErrors.name))}
                placeholder="Your name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
              />
              {fieldErrors.name && (
                <p id="contact-name-error" className="contact-field-error" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="contact-label">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                maxLength={CONTACT_FIELD_LIMITS.email.max}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  clearFieldError('email')
                }}
                className={fieldClass(Boolean(fieldErrors.email))}
                placeholder="you@example.com"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
              />
              {fieldErrors.email && (
                <p id="contact-email-error" className="contact-field-error" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>
          </div>

          {isInquiry && (
            <>
              <div>
                <label htmlFor="contact-project-type" className="contact-label">
                  What do you need? <span className="contact-optional">Optional</span>
                </label>
                <select
                  id="contact-project-type"
                  name="project_type"
                  value={projectType}
                  onChange={(event) => {
                    setProjectType(event.target.value)
                    clearFieldError('projectType')
                  }}
                  className={`${fieldClass(Boolean(fieldErrors.projectType))} contact-select`}
                  aria-invalid={Boolean(fieldErrors.projectType)}
                  aria-describedby={
                    fieldErrors.projectType ? 'contact-project-type-error' : undefined
                  }
                >
                  {CONTACT_PROJECT_TYPES.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {fieldErrors.projectType && (
                  <p id="contact-project-type-error" className="contact-field-error" role="alert">
                    {fieldErrors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-website" className="contact-label">
                  Current website <span className="contact-optional">Optional</span>
                </label>
                <input
                  id="contact-website"
                  name="current_website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  maxLength={CONTACT_FIELD_LIMITS.website.max}
                  value={website}
                  onChange={(event) => {
                    setWebsite(event.target.value)
                    clearFieldError('website')
                  }}
                  className={fieldClass(Boolean(fieldErrors.website))}
                  placeholder="yoursite.com (if you have one)"
                  aria-invalid={Boolean(fieldErrors.website)}
                  aria-describedby={fieldErrors.website ? 'contact-website-error' : undefined}
                />
                {fieldErrors.website && (
                  <p id="contact-website-error" className="contact-field-error" role="alert">
                    {fieldErrors.website}
                  </p>
                )}
              </div>
            </>
          )}

          <div>
            <label htmlFor="contact-message" className="contact-label">
              {isInquiry ? 'Tell me about the project' : 'Message'}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={isInquiry ? 5 : 4}
              maxLength={CONTACT_FIELD_LIMITS.message.max}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
                clearFieldError('message')
              }}
              className={`${fieldClass(Boolean(fieldErrors.message))} contact-textarea`}
              placeholder={
                isInquiry
                  ? 'What are you hoping to improve or build? Any goals, audience, or must-haves are helpful.'
                  : 'What’s on your mind?'
              }
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
            />
            {fieldErrors.message && (
              <p id="contact-message-error" className="contact-field-error" role="alert">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <div className="pt-1">
            <HCaptcha
              ref={captchaRef}
              sitekey={WEB3FORMS_HCAPTCHA_SITEKEY}
              reCaptchaCompat={false}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={resetCaptcha}
              onError={resetCaptcha}
            />
          </div>

          {status === 'error' && errorMessage && (
            <p className="text-sm text-[#9b3b2e] leading-relaxed" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="btn-primary btn-primary-lg w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            disabled={!canSubmit}
          >
            {status === 'submitting'
              ? 'Sending…'
              : isInquiry
                ? 'Send inquiry'
                : 'Send message'}
          </button>
        </form>
      )}

      <p className="mt-6 text-sm text-[var(--color-text-muted)]">
        Prefer email?{' '}
        <a href={getTalkMailto()} className="link-accent font-medium text-[var(--color-primary)]">
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  )
}
