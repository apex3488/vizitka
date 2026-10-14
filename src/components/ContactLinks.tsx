import { ArrowUpRight, Camera, Globe, Phone, Send } from 'lucide-react'
import type { ReactNode } from 'react'
import { site } from '../config/site'
import { useLanguage } from '../i18n/LanguageContext'
import { usableHttpUrl, usablePhone } from '../utils/publicUrl'
import styles from './ContactLinks.module.css'

type ContactItem = {
  id: string
  label: string
  value: string
  href: string
  external: boolean
  icon: ReactNode
}

export function ContactLinks() {
  const { t } = useLanguage()
  const items: ContactItem[] = []

  const telegram = usableHttpUrl(site.telegram.url)
  if (telegram) {
    items.push({
      id: 'telegram',
      label: t.telegram,
      value: site.telegram.handle,
      href: telegram,
      external: true,
      icon: <Send size={18} strokeWidth={1.5} aria-hidden="true" />,
    })
  }

  const instagram = usableHttpUrl(site.instagram.url)
  if (instagram) {
    items.push({
      id: 'instagram',
      label: t.instagram,
      value: site.instagram.handle,
      href: instagram,
      external: true,
      icon: <Camera size={18} strokeWidth={1.5} aria-hidden="true" />,
    })
  }

  const studio = usableHttpUrl(site.studioUrl)
  if (studio) {
    items.push({
      id: 'studio',
      label: t.studio,
      value: site.studioName,
      href: studio,
      external: true,
      icon: <Globe size={18} strokeWidth={1.5} aria-hidden="true" />,
    })
  }

  const phone = usablePhone(site.phone)
  if (phone) {
    items.push({
      id: 'phone',
      label: t.phone,
      value: phone.display,
      href: phone.href,
      external: false,
      icon: <Phone size={18} strokeWidth={1.5} aria-hidden="true" />,
    })
  }

  if (items.length === 0) return null

  return (
    <section className={styles.section} id="contacts" aria-labelledby="contacts-title">
      <h2 id="contacts-title" className={styles.heading}>
        <span className={styles.index} aria-hidden="true">
          01
        </span>
        {t.contacts}
      </h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              className={styles.link}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
                {item.external ? <span className="sr-only">({t.opensInNewTab})</span> : null}
              </span>
              {item.external ? (
                <ArrowUpRight className={styles.arrow} size={18} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <span aria-hidden="true" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
