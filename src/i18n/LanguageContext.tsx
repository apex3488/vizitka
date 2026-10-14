import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Language, type Translation } from './translations'

const STORAGE_KEY = 'bayhan-card-lang'

type LanguageContextValue = {
  lang: Language
  t: Translation
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en' || saved === 'uz') return saved
  } catch {
    return 'ru'
  }
  return 'ru'
}

function htmlLang(lang: Language): string {
  if (lang === 'uz') return 'uz'
  return lang
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readLanguage)
  const t = translations[lang]

  useLayoutEffect(() => {
    document.documentElement.lang = htmlLang(lang)
    document.title = t.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.metaTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.metaDescription)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* Private mode can block storage. The current language still works. */
    }
  }, [lang, t])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}
