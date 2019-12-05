export const LOCALES = ['en', 'de'] as const

export type Locale = typeof LOCALES[number]

type WithLocale<T> = { value: T; locale: string }

export interface TranslationCollection<T> {
  translations: WithLocale<T>[]
}

export type CMSData<T, S> = TranslationCollection<T> & S
