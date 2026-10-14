const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1'])

export function isTemporaryHost(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, '')
  if (LOCAL_HOSTS.has(host) || host.endsWith('.local')) return true

  const match = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host)
  if (!match) return false

  const parts = match.slice(1).map(Number)
  if (parts.some((part) => part > 255)) return false

  const a = parts[0] ?? 0
  const b = parts[1] ?? 0
  if (a === 10 || a === 127) return true
  if (a === 192 && b === 168) return true
  if (a === 172 && b >= 16 && b <= 31) return true
  return false
}

export function usableHttpUrl(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  try {
    const url = new URL(trimmed)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null
    if (isTemporaryHost(url.hostname)) return null
    return url.toString()
  } catch {
    return null
  }
}

export function usablePhone(value: string): { display: string; href: string } | null {
  const display = value.trim()
  if (!display) return null

  const compact = display.replace(/[\s().-]/g, '')
  if (!/^\+[1-9]\d{7,14}$/.test(compact)) return null
  return { display, href: `tel:${compact}` }
}

function runtimeCardUrl(): string | null {
  if (typeof window === 'undefined') return null
  if (window.location.protocol !== 'https:' && window.location.protocol !== 'http:') return null
  if (isTemporaryHost(window.location.hostname)) return null

  try {
    const url = new URL(import.meta.env.BASE_URL || '/', window.location.origin)
    if (url.protocol === 'http:' && url.hostname.endsWith('.github.io')) {
      url.protocol = 'https:'
    }
    if (isTemporaryHost(url.hostname)) return null
    return url.toString()
  } catch {
    return null
  }
}

export function publicCardUrl(configured: string): string | null {
  const runtime = runtimeCardUrl()
  if (runtime) return runtime
  return usableHttpUrl(configured) ?? usableHttpUrl(import.meta.env.VITE_PUBLIC_URL ?? '')
}
