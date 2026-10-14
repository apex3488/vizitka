import { site } from '../config/site'
import { usableHttpUrl, usablePhone } from './publicUrl'

function escapeVCard(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\r\n|\n|\r/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export function buildVCard(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N;CHARSET=UTF-8:${escapeVCard(site.owner.familyName)};${escapeVCard(site.owner.givenName)};;;`,
    `FN;CHARSET=UTF-8:${escapeVCard(site.owner.fullName)}`,
    `ORG;CHARSET=UTF-8:${escapeVCard(site.studioName)}`,
    `TITLE;CHARSET=UTF-8:${escapeVCard(site.role)}`,
  ]

  const phone = usablePhone(site.phone)
  if (phone) lines.push(`TEL;TYPE=CELL:${phone.href.slice(4)}`)

  const links: Array<{ url: string; label: string }> = []
  const telegram = usableHttpUrl(site.telegram.url)
  const instagram = usableHttpUrl(site.instagram.url)
  const studio = usableHttpUrl(site.studioUrl)

  if (telegram) links.push({ url: telegram, label: 'Telegram' })
  if (instagram) links.push({ url: instagram, label: 'Instagram' })
  if (studio) links.push({ url: studio, label: 'BAYHAN STUDIO' })

  links.forEach((link, index) => {
    const id = index + 1
    lines.push(`item${id}.URL:${link.url}`)
    lines.push(`item${id}.X-ABLabel:${escapeVCard(link.label)}`)
  })

  lines.push('END:VCARD')
  return `${lines.join('\r\n')}\r\n`
}
