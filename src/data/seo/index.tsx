import * as R from 'ramda'
import data from './seo.json'
import { TranslationCollection, Locale, getTranslation } from '../i18n'
import { useLocale } from '../../utils/hooks'

export interface SEOProps {
  description: string
  title: string
}

const seo: TranslationCollection<SEOProps> = data
const getSEO = (locale: Locale) => getTranslation<SEOProps>(locale)(seo)

export const useSEO: () => SEOProps = R.pipe(useLocale, getSEO)
