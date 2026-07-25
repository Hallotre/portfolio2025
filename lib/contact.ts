export const CONTACT_EMAIL = 'tobyhaywood@proton.me'

export const SOCIAL_LINKS = {
  github: 'https://github.com/Hallotre',
  linkedin: 'https://linkedin.com/in/tobyhaywood',
  x: 'https://x.com/TobyHallotre',
} as const

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/** Free-plan sitekey from Web3Forms docs when hCaptcha spam protection is enabled */
export const WEB3FORMS_HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

const TALK_SUBJECT = "Let's talk"
const TALK_BODY = `Hi Toby,

I'd love to chat about a project.

A bit of context:

Thanks`

export function getContactHref(): string {
  return '/#contact'
}

export function getTalkMailto(): string {
  const subject = encodeURIComponent(TALK_SUBJECT)
  const body = encodeURIComponent(TALK_BODY)
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export function getWeb3FormsAccessKey(): string {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''
}

/** @deprecated Prefer getTalkMailto for email fallback, getContactHref for primary CTAs */
export function getProposalMailto(): string {
  return getTalkMailto()
}
