/**
 * Единственное место для контактов и адреса публикации.
 * Пустые поля не показываются и не попадают в файл контакта.
 */
export const site = {
  owner: {
    givenName: 'Абдулла',
    familyName: 'Байхомбаев',
    fullName: 'Абдулла Байхомбаев',
  },
  studioName: 'BAYHAN STUDIO',
  role: 'Founder of BAYHAN STUDIO',
  telegram: {
    handle: '@APEX348',
    url: 'https://t.me/APEX348',
  },
  instagram: {
    handle: '@bayhan_studio01',
    url: 'https://www.instagram.com/bayhan_studio01/',
  },
  /** Полный адрес вида https://... Оставьте пустым, если сайта ещё нет. */
  studioUrl: '',
  /** Международный формат. Оставьте пустым, если номера ещё нет. */
  phone: '+998 50 756 02 33',
  /**
   * Постоянный публичный HTTPS-адрес визитки.
   * Используется в блоке связи, QR-коде и для NFC.
   * Локальный адрес в QR-код не подставляется.
   */
  publicUrl: 'https://apex3488.github.io/vizitka/',
  vcardFilename: 'abdulla-baihombayev.vcf',
}
