import * as R from 'ramda'
import { isSubset } from '../utils/helpers'
export type Locale = 'en' | 'de'
export const LOCALES: Locale[] = ['en', 'de']

type WithLocale<T> = T & { locale: string }

export type Localized<T> = {
  translations: WithLocale<T>[]
}

const hasAllLocales: <T>(data: Localized<T>) => boolean = R.pipe(
  R.prop('translations'),
  R.map(R.prop('locale')),
  isSubset<string>(LOCALES),
)

export const assertHasAllLocales = <T extends {}>(
  data: Localized<T>,
): Localized<T> => {
  if (!hasAllLocales(data)) {
    throw new Error(
      `Object does not have a required locale: ${JSON.stringify(data)}`,
    )
  }
  return data
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
