import { site } from '../config/site'
import { downloadVCard } from '../utils/download'
import { buildVCard } from '../utils/vcard'

type SaveContactButtonProps = {
  className: string
  label: string
}

export function SaveContactButton({ className, label }: SaveContactButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => downloadVCard(site.vcardFilename, buildVCard())}
    >
      {label}
    </button>
  )
}
