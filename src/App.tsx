import { useEffect, useRef } from 'react'
import { ConnectSection } from './components/ConnectSection'
import { ContactLinks } from './components/ContactLinks'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import styles from './App.module.css'

function Card() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const page = pageRef.current
    if (!page) return

    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || reduced.matches) return

    let frame = 0
    let x = 0.78
    let y = 0.22

    const paint = () => {
      frame = 0
      page.style.setProperty('--px', x.toFixed(4))
      page.style.setProperty('--py', y.toFixed(4))
    }

    const onMove = (event: PointerEvent) => {
      const rect = page.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      x = (event.clientX - rect.left) / rect.width
      y = (event.clientY - rect.top) / rect.height
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    page.addEventListener('pointermove', onMove)
    return () => {
      page.removeEventListener('pointermove', onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={styles.page} id="top" ref={pageRef}>
      <a className={styles.skip} href="#content">
        {t.skip}
      </a>
      <div className={styles.frame}>
        <Header />
        <main id="content" className={styles.main}>
          <Hero />
          <ContactLinks />
          <ConnectSection />
        </main>
      </div>
    </div>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <Card />
    </LanguageProvider>
  )
}
