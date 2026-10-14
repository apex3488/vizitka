export type Language = 'ru' | 'en' | 'uz'

export type Translation = {
  metaTitle: string
  metaDescription: string
  skip: string
  digitalLabel: string
  role: string
  tagline: string
  contactMe: string
  saveContact: string
  contacts: string
  telegram: string
  instagram: string
  studio: string
  phone: string
  connect: string
  tap: string
  showQr: string
  qrTitle: string
  qrLead: string
  qrPending: string
  qrError: string
  downloadPng: string
  close: string
  copyLink: string
  copied: string
  copyFailed: string
  language: string
  opensInNewTab: string
  langRu: string
  langEn: string
  langUz: string
}

export const translations: Record<Language, Translation> = {
  ru: {
    metaTitle: 'Абдулла Байхомбаев — BAYHAN STUDIO',
    metaDescription: 'Абдулла Байхомбаев, основатель BAYHAN STUDIO. Цифровая визитка.',
    skip: 'К содержанию',
    digitalLabel: 'Цифровая визитка',
    role: 'Основатель BAYHAN STUDIO',
    tagline: 'Создаю цифровые продукты и решения для бизнеса',
    contactMe: 'Связаться со мной',
    saveContact: 'Сохранить контакт',
    contacts: 'Контакты',
    telegram: 'Telegram',
    instagram: 'Instagram',
    studio: 'Сайт',
    phone: 'Телефон',
    connect: 'Мгновенная связь',
    tap: 'Коснитесь, чтобы связаться',
    showQr: 'Показать QR-код',
    qrTitle: 'QR-код визитки',
    qrLead: 'Отсканируйте, чтобы открыть визитку',
    qrPending: 'Публичный адрес ещё не задан. После публикации QR-код будет открывать его. Локальный адрес в код не записывается.',
    qrError: 'Не удалось создать QR-код. Обновите страницу и попробуйте ещё раз.',
    downloadPng: 'Скачать PNG',
    close: 'Закрыть',
    copyLink: 'Скопировать ссылку',
    copied: 'Скопировано',
    copyFailed: 'Выделите ссылку и скопируйте её вручную.',
    language: 'Язык',
    opensInNewTab: 'откроется в новой вкладке',
    langRu: 'Русский',
    langEn: 'English',
    langUz: 'Oʻzbekcha',
  },
  en: {
    metaTitle: 'Abdulla Baihombayev — BAYHAN STUDIO',
    metaDescription: 'Abdulla Baihombayev, founder of BAYHAN STUDIO. Digital business card.',
    skip: 'Skip to content',
    digitalLabel: 'Digital business card',
    role: 'Founder of BAYHAN STUDIO',
    tagline: 'I create digital products and solutions for business',
    contactMe: 'Get in touch',
    saveContact: 'Save contact',
    contacts: 'Contacts',
    telegram: 'Telegram',
    instagram: 'Instagram',
    studio: 'Website',
    phone: 'Phone',
    connect: 'Connect instantly',
    tap: 'Tap to connect',
    showQr: 'Show QR code',
    qrTitle: 'Card QR code',
    qrLead: 'Scan to open this card',
    qrPending: 'A public address is not set yet. After the site is published, the QR code will open it. A local address is never encoded.',
    qrError: 'The QR code could not be created. Refresh the page and try again.',
    downloadPng: 'Download PNG',
    close: 'Close',
    copyLink: 'Copy link',
    copied: 'Copied',
    copyFailed: 'Select the link and copy it manually.',
    language: 'Language',
    opensInNewTab: 'opens in a new tab',
    langRu: 'Русский',
    langEn: 'English',
    langUz: 'Oʻzbekcha',
  },
  uz: {
    metaTitle: 'Abdulla Bayhombayev — BAYHAN STUDIO',
    metaDescription: 'Abdulla Bayhombayev, BAYHAN STUDIO asoschisi. Raqamli vizitka.',
    skip: 'Mazmuniga oʻtish',
    digitalLabel: 'Raqamli vizitka',
    role: 'BAYHAN STUDIO asoschisi',
    tagline: 'Biznes uchun raqamli mahsulotlar va yechimlar yarataman',
    contactMe: 'Men bilan bogʻlanish',
    saveContact: 'Kontaktni saqlash',
    contacts: 'Kontaktlar',
    telegram: 'Telegram',
    instagram: 'Instagram',
    studio: 'Sayt',
    phone: 'Telefon',
    connect: 'Bir zumda ulanish',
    tap: 'Ulanish uchun teging',
    showQr: 'QR-kodni koʻrsatish',
    qrTitle: 'Vizitka QR-kodi',
    qrLead: 'Vizitkani ochish uchun skanerlang',
    qrPending: 'Ommaviy manzil hali yoʻq. Sayt joylashtirilgach QR-kod shu manzilni ochadi. Mahalliy manzil kodga yozilmaydi.',
    qrError: 'QR-kod yaratilmadi. Sahifani yangilang va qayta urinib koʻring.',
    downloadPng: 'PNG yuklab olish',
    close: 'Yopish',
    copyLink: 'Havolani nusxalash',
    copied: 'Nusxalandi',
    copyFailed: 'Havolani belgilab, qoʻlda nusxa oling.',
    language: 'Til',
    opensInNewTab: 'yangi oynada ochiladi',
    langRu: 'Русский',
    langEn: 'English',
    langUz: 'Oʻzbekcha',
  },
}
