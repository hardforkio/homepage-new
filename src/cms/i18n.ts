import { createTranslator, setLocales } from './i18n-lib'

export const LOCALES = setLocales(['en', 'de'])
export type Locale = typeof LOCALES[number]
export const translate = createTranslator(LOCALES)
