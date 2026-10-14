import { QrCode } from 'lucide-react'
import { useState } from 'react'
import { site } from '../config/site'
import { useLanguage } from '../i18n/LanguageContext'
import { publicCardUrl } from '../utils/publicUrl'
import btn from '../styles/buttons.module.css'
import { QRModal } from './QRModal'
import styles from './ConnectSection.module.css'

export function ConnectSection() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const url = publicCardUrl(site.publicUrl)

  async function copyUrl() {
    if (!url) return
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setCopyFailed(false)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <section className={styles.section} id="connect" aria-labelledby="connect-title">
      <h2 id="connect-title" className={styles.heading}>
        <span className={styles.index} aria-hidden="true">
          02
        </span>
        {t.connect}
      </h2>
      <div className={styles.layout}>
        <div>
          <p className={styles.tap}>{t.tap}</p>
          {url ? (
            <>
              <p className={styles.url}>{url}</p>
              <button type="button" className={styles.copy} onClick={() => void copyUrl()}>
                {t.copyLink}
              </button>
              <p className={styles.status} aria-live="polite">
                {copied ? t.copied : copyFailed ? t.copyFailed : ''}
              </p>
            </>
          ) : null}
        </div>
        <button
          type="button"
          className={`${btn.secondary} ${styles.qrButton}`}
          onClick={() => setOpen(true)}
        >
          <QrCode size={18} strokeWidth={1.5} aria-hidden="true" />
          {t.showQr}
        </button>
      </div>
      <QRModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
