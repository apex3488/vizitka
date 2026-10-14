import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../i18n/translations'
import styles from './LanguageSwitcher.module.css'

const options: Array<{ code: Language; short: string; nameKey: 'langRu' | 'langEn' | 'langUz' }> = [
  { code: 'ru', short: 'RU', nameKey: 'langRu' },
  { code: 'en', short: 'EN', nameKey: 'langEn' },
  { code: 'uz', short: 'UZ', nameKey: 'langUz' },
]

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className={styles.group} role="group" aria-label={t.language}>
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          aria-pressed={lang === option.code}
          onClick={() => setLang(option.code)}
        >
          <span aria-hidden="true">{option.short}</span>
          <span className="sr-only">{t[option.nameKey]}</span>
        </button>
      ))}
    </div>
  )
}
