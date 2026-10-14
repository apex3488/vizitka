import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'
import styles from './Header.module.css'

export function Header() {
  const { t } = useLanguage()

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top">
        <span className={styles.diamond} aria-hidden="true" />
        <span className={styles.word}>
          BAYHAN
          <span className={styles.studio}>STUDIO</span>
        </span>
      </a>
      <p className={styles.kicker}>{t.digitalLabel}</p>
      <div className={styles.lang}>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
