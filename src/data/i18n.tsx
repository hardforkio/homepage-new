import * as R from 'ramda'
export type Locale = 'en' | 'de'

export type WithLocale<T> = T & { locale: Locale }

export type Localized<T> = {
  translations: WithLocale<T>[]
}
export const getTranslation: <T = any>(
  locale: Locale,
) => (data: Localized<T>) => T = <T extends {}>(locale: Locale) =>
  R.pipe(
    R.prop('translations'),
    R.find(R.propEq('locale', locale)),
    R.omit(['locale']) as (content: WithLocale<T>) => T,
  )

export const getTranslations: <T = any>(
  data: Localized<T>,
) => WithLocale<T>[] = R.prop('translations')
