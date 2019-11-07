export type Markdown = string
export type Locale = 'en' | 'de'

export type WithLocale<T> = T & { locale: Locale }

export type Localized<T> = {
  translations: WithLocale<T>[]
}
