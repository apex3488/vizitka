import { X } from 'lucide-react'
import { useEffect, useRef, useState, type MouseEvent, type SyntheticEvent } from 'react'
import { site } from '../config/site'
import { useLanguage } from '../i18n/LanguageContext'
import { downloadDataUrl } from '../utils/download'
import { publicCardUrl } from '../utils/publicUrl'
import { createQrDataUrl } from '../utils/qr'
import btn from '../styles/buttons.module.css'
import styles from './QRModal.module.css'

type QRModalProps = {
  open: boolean
  onClose: () => void
}

export function QRModal({ open, onClose }: QRModalProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const [cardUrl, setCardUrl] = useState<string | null>(null)
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      if (!dialog.open) dialog.showModal()
      dialog.focus()
      return
    }

    if (dialog.open) dialog.close()
    const back = returnFocus.current
    returnFocus.current = null
    back?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      onClose()
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const url = publicCardUrl(site.publicUrl)
    setCardUrl(url)
    setDataUrl(null)
    setFailed(false)
    if (!url) return

    let cancelled = false
    createQrDataUrl(url)
      .then((value) => {
        if (!cancelled) setDataUrl(value)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [open])

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault()
    onClose()
  }

  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return
    const rect = event.currentTarget.getBoundingClientRect()
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    if (!inside) onClose()
  }

  async function download() {
    if (!dataUrl) return
    try {
      await downloadDataUrl(dataUrl, 'bayhan-studio-qr.png')
    } catch {
      setFailed(true)
    }
  }

  const message = failed ? t.qrError : cardUrl ? t.qrLead : t.qrPending

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="qr-title"
      aria-describedby="qr-status"
      aria-modal="true"
      tabIndex={-1}
      onCancel={handleCancel}
      onClick={handleClick}
      onClose={onClose}
    >
      <div className={styles.head}>
        <h2 id="qr-title" className={styles.title}>
          {t.qrTitle}
        </h2>
        <button type="button" className={styles.close} onClick={onClose} aria-label={t.close}>
          <X size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
      <p id="qr-status" className={styles.status}>
        {message}
      </p>
      {cardUrl && !failed ? (
        <div className={styles.frame} aria-busy={!dataUrl}>
          {dataUrl ? <img src={dataUrl} alt="" /> : null}
        </div>
      ) : null}
      {cardUrl ? <p className={styles.url}>{cardUrl}</p> : null}
      <div className={styles.actions}>
        {dataUrl ? (
          <button type="button" className={btn.primary} onClick={() => void download()}>
            {t.downloadPng}
          </button>
        ) : null}
        <button type="button" className={btn.secondary} onClick={onClose}>
          {t.close}
        </button>
      </div>
    </dialog>
  )
}
