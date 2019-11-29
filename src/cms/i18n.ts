import { setLocales, createTranslator } from './i18n-lib'
export { TranslationCollection } from './i18n-lib'

export const LOCALES = setLocales(['en', 'de'])
export type Locale = typeof LOCALES[number]
export const translate = createTranslator(LOCALES)
