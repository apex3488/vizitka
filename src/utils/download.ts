export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1500)
}

export function downloadVCard(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/vcard;charset=utf-8' })
  downloadBlob(blob, filename)
}

export async function downloadDataUrl(dataUrl: string, filename: string): Promise<void> {
  const response = await fetch(dataUrl)
  const blob = await response.blob()
  downloadBlob(blob, filename)
}
