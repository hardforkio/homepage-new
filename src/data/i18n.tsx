import * as R from 'ramda'
export type Locale = 'en' | 'de'

type WithLocale<T> = T & { locale: string }

export type TranslationCollection<T> = {
  translations: WithLocale<T>[]
}
export const getTranslation: <T = any>(
  locale: Locale,
) => (data: TranslationCollection<T>) => T = <T extends {}>(locale: Locale) =>
  R.pipe(
    R.prop('translations'),
    R.find(R.propEq('locale', locale)),
    R.omit(['locale']) as (content: WithLocale<T>) => T,
  )

export const getTranslations: <T = any>(
  data: TranslationCollection<T>,
) => WithLocale<T>[] = R.prop('translations')
