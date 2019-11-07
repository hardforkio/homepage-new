import * as R from 'ramda'
import { Locale, Localized, WithLocale } from '.'

export const getTranslationsFromQuery: <T = any>(
  locale: Locale,
) => (data: QueryResult<T>) => T[] = <T extends {}>(locale: Locale) =>
  R.pipe(
    R.path(['allMarkdownRemark', 'nodes']) as (
      data: QueryResult<T>,
    ) => ParsedMarkdown<T>[],
    R.map(R.prop('frontmatter')),
    R.map(getTranslation<T>(locale)),
  )

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

export interface QueryResult<T> {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        translations: WithLocale<T>[]
      }
    }[]
  }
}

interface ParsedMarkdown<T> {
  frontmatter: Localized<T>
}
