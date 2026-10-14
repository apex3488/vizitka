import QRCode from 'qrcode'

export function createQrDataUrl(value: string): Promise<string> {
  return QRCode.toDataURL(value, {
    width: 640,
    margin: 4,
    errorCorrectionLevel: 'M',
    color: {
      dark: '#101218',
      light: '#ffffff',
    },
  })
}
