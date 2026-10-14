import { site } from '../config/site'
import { useLanguage } from '../i18n/LanguageContext'
import { usableHttpUrl } from '../utils/publicUrl'
import btn from '../styles/buttons.module.css'
import { Monogram } from './Monogram'
import { SaveContactButton } from './SaveContactButton'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useLanguage()
  const telegram = usableHttpUrl(site.telegram.url)

  return (
    <section className={styles.hero} aria-labelledby="owner-name">
      <div className={styles.mark}>
        <div className={styles.rise} style={{ animationDelay: '40ms' }}>
          <Monogram />
        </div>
      </div>
      <div className={styles.copy}>
        <h1 id="owner-name" className={`${styles.name} ${styles.rise}`} lang="ru" style={{ animationDelay: '120ms' }}>
          <span>{site.owner.givenName}</span>
          <span className={styles.family}>{site.owner.familyName}</span>
        </h1>
        <p className={`${styles.role} ${styles.rise}`} style={{ animationDelay: '220ms' }}>
          {t.role}
        </p>
        <p className={`${styles.tagline} ${styles.rise}`} style={{ animationDelay: '280ms' }}>
          {t.tagline}
        </p>
        <div className={`${styles.actions} ${styles.rise}`} style={{ animationDelay: '360ms' }}>
          {telegram ? (
            <a className={btn.primary} href={telegram} target="_blank" rel="noopener noreferrer">
              {t.contactMe}
              <span className="sr-only">({t.opensInNewTab})</span>
            </a>
          ) : null}
          <SaveContactButton className={btn.secondary} label={t.saveContact} />
        </div>
      </div>
    </section>
  )
}
