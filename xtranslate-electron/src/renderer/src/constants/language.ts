export const Languages = ['auto', 'en', 'zh'] as const

export type Language = (typeof Languages)[number]

export const LANGUAGE_MAP: Record<Language, string> = {
  en: '英文',
  zh: '中文',
  auto: '自动检测'
}
